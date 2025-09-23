"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation: React.FC = () => {
  return (
    <>
      <div className="flex flex-row items-center px-5 py-2 mt-3">
        <Image src="/images/logo.png" width={40} height={60} alt="icone" />
        <strong className="mt-3 px-2">Diogo Fávaro</strong>
      </div>

      <div className="h-auto">
        <nav className="h-auto w-auto">
          <ul className="flex flex-row gap-4 p-5">
            <li>
              <Link href="/" className="nav">
                Home
              </Link>
            </li>
            <li>
              <Link href="/store" className="nav">
                Store
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="nav">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default React.memo(Navigation);
