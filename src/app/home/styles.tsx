import styled from "styled-components";

export const Container = styled.div`
  .baseHeigth {
    height: 72vh;
  }
    
  h1 {
    font-size: 60px;
    width: 220px;
    font-weight: 600;
  }

  span {
    color: gray;
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
