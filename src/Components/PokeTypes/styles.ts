import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
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
`;
