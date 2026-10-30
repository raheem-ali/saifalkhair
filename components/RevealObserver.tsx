"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Elements that fade in: direct children of each section container + children of any grid.
// (The matching hidden state lives in globals.css.)
const SEL =
  'main section:not([data-no-reveal]) .max-w-\\[1320px\\] > :not([class*="grid-cols"]), ' +
  'main section:not([data-no-reveal]) [class*="grid-cols"] > *';

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const seen = new WeakSet<Element>(); // local to this effect run (fixes React strict-mode double run)

    const reveal = (el: HTMLElement) => {
      const parent = el.parentElement;
      let delay = 0;
      if (parent && String(parent.className).includes("grid-cols")) {
        delay = (Array.prototype.indexOf.call(parent.children, el) % 3) * 110; // stagger by column
      }
      el.style.transitionDelay = `${delay}ms`;
      el.setAttribute("data-in", "");
      setTimeout(() => { el.style.transitionDelay = ""; }, 1000 + delay);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          // reveal when visible, or when already scrolled past (e.g. after a reload mid-page)
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            io.unobserve(el);
            reveal(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    const scan = () =>
      document.querySelectorAll<HTMLElement>(SEL).forEach((el) => {
        if (!seen.has(el) && !el.hasAttribute("data-in")) {
          seen.add(el);
          io.observe(el);
        }
      });

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    // failsafe: never leave content hidden if something goes wrong
    const failsafe = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(SEL).forEach((el) => {
        const r = el.getBoundingClientRect();
        if (!el.hasAttribute("data-in") && r.top < window.innerHeight) reveal(el);
      });
    }, 1500);

    return () => { clearTimeout(failsafe); io.disconnect(); mo.disconnect(); };
  }, [pathname]);

  return null;
}