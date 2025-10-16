"use client";

import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 40px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;

  h1,
  p,
  span {
    font-weight: 600;
  }

  p {
    margin-top: 25px;
    max-width: 800px;
    text-align: justify;
  }

  span,
  #english {
    color: gray;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 400;
    max-width: 800px;
    text-align: justify;
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
