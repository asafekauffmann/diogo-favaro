"use client";

import React from "react";
import { Container } from "./style";
import Image from "next/image";

const Store: React.FC = () => {
  return (
    <Container>
      <span>store bro</span>

      <div className="flex lg:flex-center lg:flex-row flex-wrap my-3 p-6 gap-16">
        <Image
          src="/images/lampiao.jpeg"
          width={180}
          height={320}
          alt="photo store"
          className="mode"
        />
        <Image
          src="/images/xicano.jpeg"
          width={180}
          height={320}
          alt="photo store"
          className="mode"
        />
        <Image
          src="/images/escritora.jpeg"
          width={180}
          height={320}
          alt="photo store"
          className="mode"
        />
        <Image
          src="/images/mago.jpeg"
          width={180}
          height={320}
          alt="photo store"
          className="mode"
        />
        <Image
          src="/images/thinker.jpeg"
          width={180}
          height={320}
          alt="photo store"
          className="mode"
        />
      </div>
    </Container>
  );
};

export default React.memo(Store);
