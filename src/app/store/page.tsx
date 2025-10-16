"use client";

import React from "react";
import { Container } from "./style";
import Link from "next/link";
import Image from "next/image";
import { Images } from "../../data/artData"

const Store: React.FC = () => {

  return (
    <Container>
      <span>Store bro</span>

      <div className="sm:flex lg:flex-center lg:flex-row justify-center flex-wrap my-3 gap-12">
        {Images.map((art) => (
          <Link key={art.slug} href={`store/${art.slug}`}>
            <Image
              src={art.image}
              alt={art.title}
              width={art.width}
              height={art.height}
              className="mode fade-in"
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default React.memo(Store);
