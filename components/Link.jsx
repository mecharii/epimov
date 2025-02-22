"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation({ navLinks }) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;

        return (
          <Link
            href={link.href}
            key={index}
            className={`${link.style} ${
              isActive ? link.active : link.ınActive
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
