import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/data";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group min-w-0" aria-label={`${SITE.name} home`}>
      {/* Logo Image */}
      <div className="relative w-50 h-20 sm:w-50 sm:h-30">
        <Image
          src="/images/logo.png" // Change extension if it's .svg, .jpg, etc.
          alt={`${SITE.name} logo`}
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}