"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation: React.FC = () => {
  return (
    <>
    <div className="p-5 mt-3">
          <Image src="/vercel.svg" width={40} height={40} alt="icone"/>
        </div>
      <div className="h-auto">
        
        <nav className="h-auto w-auto">
          <ul className="flex flex-row gap-4 p-5">
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="/store">Store</Link>
            </li>

            <li>
              <Link href="/about">About </Link>
            </li>

            <li className="">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default React.memo(Navigation);
