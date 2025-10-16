"use client"; // <- necessário para usar hooks

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // <- hook do Next.js App Router

const Navigation: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/store", label: "Store" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className="flex flex-row items-center px-5 py-2 mt-3">
        <Image src="/images/logo.png" width={40} height={60} alt="icone" />
        <strong className="mt-3 px-2">Diogo Fávaro</strong>
      </div>

      <div className="h-auto">
        <nav className="h-auto w-auto">
          <ul className="flex flex-row gap-4 p-5">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav ${
                      isActive ? "text-black font-semibold" : "text-gray-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default React.memo(Navigation);