"use client";

import React, { useEffect, useState } from "react";
import { Container } from "./style";
import Image from "next/image";
import { Images } from "../../../data/artData";
import { ArtPiece } from "../../../types/art";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ArtContent() {
  const params = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !params?.slug) return null;

  const slug = params?.slug as string;
  const art: ArtPiece = Images.find((piece) => piece.slug === slug);

  if (!art) return <p>Obra não encontrada</p>;

  return (
    <Container>
      <div className="flex flex-col lg:flex-row md:mx-10">
        <div className="flex lg:flex-center lg:flex-row flex-wrap my-3 p-6 gap-12">
          <Image
            src={art.image}
            alt={art.title}
            width={360}
            height={400}
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

          <Link href="/contact" className="flex items-center">
            <span className="button text-center flex items-center justify-center">
              CONTACT
            </span>
          </Link>
         
        </div>
      </div>
    </Container>
  );
}
