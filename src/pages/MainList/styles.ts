import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  background: #313b72;

  .renderList {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #020a32, #3f51b5);

    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1200px;
      background: transparent;
    }

    button.ant-btn {
      width: 200px;
      background: #ee1c1f;
      color: #ffffff;
      font-weight: 600;
      border: none;
      font-family: "Bungee";
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #020a32;
  width: 100%;
  padding: 20px;

  .title {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    h1 {
      font-size: 30px;
      font-smooth: never;
      -webkit-font-smoothing: none;
      font-family: Bungee, monospace;
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
      width: 40vw;
      cursor: default;
      padding: 2px 5px;
      margin: 0 5px;
    }

    button.btn-center {
      background: #ff2222;
      width: 40px;
      padding: 5px;
      margin: 10px 5px 0 5px;
      border-radius: 12px;
    }

    button:first-child {
      border-radius: 6px 12px 0px 6px;
    }

    button:last-child {
      border-radius: 12px 6px 6px 0;
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
  background: #313b72;
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
