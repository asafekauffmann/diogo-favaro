"use client";

import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 80px;

  @media (max-width: 600px) {
    .image {
      width: 100%;
      height: auto;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 30px;
  }

  .button {
    padding: 0 14px;
    color: white;
    font-weight: 600px;
    font-size: 18px;
    height: 42px;
    width: 180px;
    background-color: #000000;
    border-radius: 50px;
    margin: 6px 0;
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
