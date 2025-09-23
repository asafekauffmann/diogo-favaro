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

      <div className="flex lg:flex-center lg:flex-row flex-wrap my-3 p-6 gap-16">
        {Images.map((art) => (
          <Link key={art.slug} href={`store/${art.slug}`}>
            <Image
              src={art.image}
              alt={art.title}
              width={art.width}
              height={art.height}
              className="mode"
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default React.memo(Store);
