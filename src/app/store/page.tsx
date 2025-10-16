"use client";

import React from "react";
import { Container } from "./style";
import Link from "next/link";
import Image from "next/image";
import { Images } from "../../data/artData";

const Store: React.FC = () => {
  return (
    <Container>
      <div className="sm:flex lg:flex-center lg:flex-row justify-center flex-wrap gap-14">
        {Images.map((art) => (
          <Link key={art.slug} href={`store/${art.slug}`}>
            <Image
              src={art.image}
              alt={art.title}
              width={280}
              height={360}
              className="mode fade-in"
              style={{ height: "auto" }}
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default React.memo(Store);
