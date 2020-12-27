import styled from "styled-components";

import poke_bg from "../../assets/background.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: max-content;

  background: url(${poke_bg});
  background-repeat: no-repeat;
  background-size: cover;

  .renderList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin-top: 120px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background: #00000082;
  backdrop-filter: blur(6px);
  width: 100%;
  height: 90px;

  .title {
    display: flex;

    h1 {
      font-family: Roboto, sans-serif;
      color: #fff;
      margin-bottom: 5px;
    }
    img {
      width: 40px;
      height: 38px;
    }
  }

  .loading {
    animation: loading 2s ease infinite;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      background: #ff2222;
      border: none;
      margin: 0 5px;
      padding: 2px 5px;
      font-family: "Roboto";
      font-weight: 500;
      border-radius: 4px;
      color: #fff;
      width: 70px;

      outline: none;
    }
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(2880deg);
    }
  }
`;

export const Footer = styled.footer`
  height: 200px;
  background: #242424;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: white;
    font-family: "Roboto";
  }

  .social-network {
    width: 100%;
    max-width: 400px;
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .linkedin {
    height: 30px;
  }

  .github {
    height: 30px;
  }
`;
