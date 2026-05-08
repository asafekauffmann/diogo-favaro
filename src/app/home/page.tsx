"use client";

import React from "react";
import Image from "next/image";
import { Container } from "./styles";

const HomeContent: React.FC = () => {


  return (
    
    <Container>
      <div className="w-full md:flex items-center align-center md:justify-around baseHeigth">
        
        <div className="pr-10">

          <div className="h-auto pl-9 pb-9">
            <h1 className="">Pintura</h1>
            <h1 className="flex">Arte
              <span>
                /Obra
              </span>
            </h1>
            <h1 className="">Óleo</h1>
          </div>
        </div>

        <div className="">
          <Image
            src="/images/mural.png"
            alt="modelo"
            width={600}
            height={900}
            className="mode fade-in"
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default React.memo(HomeContent);
