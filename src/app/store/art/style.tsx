"use client";

import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 600px) {
    .mode {
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

`;
