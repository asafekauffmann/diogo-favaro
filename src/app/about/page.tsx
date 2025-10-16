"use client";

import React from "react";
import { Container } from "./styles";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-center justify-center flex-col text-left my-3 px-10">
        <div className="flex flex-col flex-center align-middle items-center">
          <Image
            src="/images/Perfil.png"
            alt="perfil"
            width={100}
            height={200}
            className="mode"
          />
          <h1 className="text-2xl py-2">Diogo Favaro</h1>
        </div>

        <p>
          Me chamo Diogo Fávaro, sou artista visual, pintor cuja obra, nasce da
          interseção entre técnica e transcendência. Influenciado por mestres
          como Rembrandt, Caravaggio, Velázquez, Sargent, Sorolla, Almeida
          Júnior, Nicolás Uribe, Goya, os impressionistas e grandes nomes da
          pintura russa como Repin e Kramskoy, encontro na arte um meio de
          explorar a profundidade da experiência humana.
        </p>
        <span id="english">
          My name is Diogo Fávaro, I am a visual artist, a painter whose work is
          born from the intersection of technique and transcendence. Influenced
          by masters such as Rembrandt, Caravaggio, Velázquez, Sargent, Sorolla,
          Almeida Júnior, Nicolás Uribe, Goya, the Impressionists and great
          names of Russian painting such as Repin and Kramskoy, I find in art a
          means of exploring the depth of human experience.
        </span>
        <p>
          Embora a arte sempre tenha sido parte da minha vida, foi em 2020 que
          minha jornada tomou um novo rumo. Uma experiência transcendente
          despertou sua percepção espiritual, transformando não apenas minha
          visão do mundo, mas também sua relação com a criação artística. Desde
          então, meu trabalho tornou-se um canal para expressar a riqueza e a
          multiplicidade da existência, capturando as nuances da alma humana e
          permitindo que cada trabalho fale por si.
        </p>
        <span id="english">
          Although art has always been a part of my life, it was in 2020 that my
          journey took a new direction. A transcendent experience awakened my
          spiritual perception, transforming not only my worldview but also my
          relationship with artistic creation. Since then, my work has become a
          channel for expressing the richness and multiplicity of existence,
          capturing the nuances of the human soul and allowing each work to
          speak for itself.
        </span>
        <p>
          Buscando às infinitas formas de expressão e percepção, acho que sempre
          o coração está ligado a espiritualidade, à arte e às pessoas, buscando
          revelar, ou desvelar, a essência do que nos torna únicos nessa vasta e
          rica experiência que entendemos como vida.
        </p>
        <span id="english">
          Searching for infinite forms of expression and perception, I believe
          that the heart is always connected to spirituality, art and people,
          seeking to reveal, or unveil, the essence of what makes us unique in
          this vast and rich experience that we understand as life.
        </span>
      </div>
    </Container>
  );
};

export default React.memo(About);
