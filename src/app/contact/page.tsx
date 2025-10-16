"use client";

import React from "react";
import { Container } from "./styles";

const Contact: React.FC = () => {




  return (
    <>
      <Container>
        <div className="flex p-10 fade-in">
          <main className="">
            <div className="flex flex-col justify-center items-center">
              <h1 className="m-10">Diogo Favaro</h1>
              <p>
                Instagram
              </p>
               <p>
                Whatsapp
              </p>
               <p>
                E-mail
              </p>
              <button className="button">Contato</button>
            </div>
          </main>
        </div>
      </Container>
    </>
  );
};

export default React.memo(Contact);
