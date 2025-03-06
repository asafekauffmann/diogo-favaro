"use client";

import React from "react";
import { Container } from "./style";
import Image from "next/image";

const Welcome: React.FC = () => {
  return (
    <Container>
      <span>store bro</span>
      <div className="flex flex-center flex-row flex-wrap text-left my-3 p-6 gap-16">
        <Image
          src="/images/lampiao.jpeg"
          width={180}
          height={320}
          alt="photo store"
        />
        <Image
          src="/images/xicano.jpeg"
          width={180}
          height={320}
          alt="photo store"
        />
        <Image
          src="/images/escritora.jpeg"
          width={180}
          height={320}
          alt="photo store"
        />
        <Image
          src="/images/mago.jpeg"
          width={180}
          height={320}
          alt="photo store"
        />
        <Image
          src="/images/thinker.jpeg"
          width={180}
          height={320}
          alt="photo store"
        />
      </div>
    </Container>
  );
};

export default React.memo(Welcome);
