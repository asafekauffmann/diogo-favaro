"use client";

import React from "react";
import { Container } from "./styles";

const About: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-center flex-col text-left my-3 p-6">
        <h1>Diogo Favaro</h1>
        <p>
          Me chamo Diogo Fávaro, sou artista visual, pintor cuja obra, nasce da
          interseção entre técnica e transcendência. Influenciado por mestres
          como Rembrandt, Caravaggio, Velázquez, Sargent, Sorolla, Almeida
          Júnior, Nicolás Uribe, Goya, os impressionistas e grandes nomes da
          pintura russa como Repin e Kramskoy, encontro na arte um meio de
          explorar a profundidade da experiência humana.
        </p>

        <p>
          {" "}
          Embora a arte sempre tenha sido parte da minha vida, foi em 2020 que
          minha jornada tomou um novo rumo. Uma experiência transcendente
          despertou sua percepção espiritual, transformando não apenas minha
          visão do mundo, mas também sua relação com a criação artística. Desde
          então, meu trabalho tornou-se um canal para expressar a riqueza e a
          multiplicidade da existência, capturando as nuances da alma humana e
          permitindo que cada trabalho fale por si.
        </p>

        <p>
          {" "}
          Buscando às infinitas formas de expressão e percepção, acho que sempre
          o coração está ligado a espiritualidade, à arte e às pessoas, buscando
          revelar, ou desvelar, a essência do que nos torna únicos nessa vasta e
          rica experiência que entendemos como vida.
        </p>
      </div>
    </Container>
  );
};

export default React.memo(About);
