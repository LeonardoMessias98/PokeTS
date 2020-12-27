import styled, { keyframes } from "styled-components";

import poke_bg from "../../assets/background.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url(${poke_bg});
  background-repeat: no-repeat;
  background-size: cover;

  .renderList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin-top: 120px;

    .list {
      margin: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      figure {
        background: #f2f2f2;
        border-radius: 8px;
      }

      p.poke_index {
        font-family: "Roboto";
        width: 100%;
        font-size: 12px;
        padding: 10px 0 5px 0;
      }

      img {
        width: 200px;
        height: 200px;
      }

      h4 {
        width: 100%;
        padding: 0 0 10px 0 ;
        font-family: Roboto, sans-serif;
      }

      .types {
        width: 100%;
        display: flex;

        .type {
          justify-content: flex-start;
          margin-right: 5px;
          border-radius: 4px;
          padding: 2px 7px;
          font-family: Roboto, sans-serif;
          color: #fff;
        }

        .grass {
          background: #8bc34a;
        }

        .poison {
          background: #d000bd;
        }

        .fire {
          background: #f44336;
        }

        .water {
          background: #2196f3;
        }

        .bug {
          background: #4caf50;
        }

        .normal {
          background: #9e9e9e;
        }

        .flying {
          background: #89f;
        }

        .ground {
          background: #dcba55;
        }

        .electric {
          background: #ffeb3b;
          color: #242424;
        }

        .fairy {
          background: #ee99ee;
        }

        .ice {
          background: #6cf;
        }

        .steel {
          background: #aab;
        }

        .dark {
          background: #754;
        }

        .psychic {
          background: #f85888;
        }

        .fighting {
          background: #c03028;
        }

        .ghost {
          background: #705898;
        }

        .dragon {
          background: #7038f8;
        }

        .rock {
          background: #a38c21;
        }
      }
    }
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
