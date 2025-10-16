"use client";

import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  margin-bottom: 80px;

  @media (max-width: 600px) {
    .mode {
      width: 100%;
      height: auto;
    }
  }

  .mode {
    margin: 36px 0px;
  }

  .fade-in {
    animation: fadeIn ease 2s;
    -webkit-animation: fadeIn ease 2s;
    -moz-animation: fadeIn ease 2s;
    -o-animation: fadeIn ease 2s;
    -ms-animation: fadeIn ease 2s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
