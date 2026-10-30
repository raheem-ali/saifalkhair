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
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          io.unobserve(el);
          const parent = el.parentElement;
          let delay = 0;
          if (parent && String(parent.className).includes("grid-cols")) {
            delay = (Array.prototype.indexOf.call(parent.children, el) % 3) * 110; // stagger by column
          }
          el.style.transitionDelay = `${delay}ms`;
          el.setAttribute("data-in", "");
          setTimeout(() => { el.style.transitionDelay = ""; }, 1000 + delay); // keep hover transitions snappy
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    const scan = () =>
      document.querySelectorAll<HTMLElement>(SEL).forEach((el) => {
        if (!el.hasAttribute("data-in") && !el.dataset.rv) {
          el.dataset.rv = "1";
          io.observe(el);
        }
      });

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [pathname]);

  return null;
}
