"use client";

import React from "react";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <div className="flex p-10">
        <main className="">
          <div className="flex flex-col justify-center items-center">
            <h1 className="m-10">Diogo Favaro</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              efficitur convallis leo et congue. Praesent eros arcu, dignissim
              ac lectus in, lacinia faucibus nulla. Donec aliquet urna a
              dignissim pharetra.
            </p>
            <button className="button">Contato</button>
          </div>
        </main>
      </div>
    </Container>
  );
}
