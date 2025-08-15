"use client";

import React from "react";
import { Container } from "./style";
import Image from "next/image";

const Art: React.FC = () => {
  return (
    <Container>

      <div className="flex flex-row ml-16">

        <div className="flex lg:flex-center lg:flex-row flex-wrap my-3 p-6 gap-16">
          <Image
            src="/images/lampiao.jpeg"
            width={290}
            height={500}
            alt="photo store"
            className="mode"
          />
        
        </div>  

        <div className="flex flex-col my-3 p-6 gap-6">
          <h1>
            O Cangaçeiro
          </h1>
          <h4 className="text-xl"> 
            <strong>R$ </strong> 
            550,00
          </h4>
          <p>Tinta a óleo 16x21</p>
          <button className="button">Contact</button>
        </div>
      </div>

    </Container>
  );
};

export default React.memo(Art);
