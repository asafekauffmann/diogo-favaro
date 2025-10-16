"use client";

import React from "react";
import { Container } from "./style";
import Image from "next/image";
import { Images } from "../../../data/artData";
import { ArtPiece } from "../../../types/art";

interface ArtPageProps {
  params: Promise<{ slug: string }>;
}

export default function ArtContent({ params }: ArtPageProps) {
  
  const { slug } = React.use(params);

  const art: ArtPiece = Images.find((piece) => piece.slug === slug);

  return (
    <Container>
      <div className="flex flex-col lg:flex-row md:mx-10">
        <div className="flex lg:flex-center lg:flex-row flex-wrap my-3 p-6 gap-12">
          <Image
            src={art.image}
            alt={art.title}
            width={300}
            height={art.height}
            className="image fade-in"
            priority
          />
        </div>

        <div className="flex flex-col my-3 p-6 gap-6">
          <h1>{art.title}</h1>
          <h4 className="text-xl">
            <strong>R$ {art.price} </strong>
          </h4>
          <p>{art.description}</p>
          <p>{art.fullDescription}</p>
          <button className="button">Contact</button>
        </div>
      </div>
    </Container>
  );
}
