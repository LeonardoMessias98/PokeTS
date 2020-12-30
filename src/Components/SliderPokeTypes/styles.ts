import styled from "styled-components";

export const Container = styled.div`
  figure {
    width: max-content !important;
    border-radius: 50%;
    padding: 10px;
    margin: 0 !important;
    cursor: pointer;

    img {
      width: 40px;
      height: 40px;
    }
  }

  .slick-list {
    width: 80vw;
    max-width: 800px;
    padding: 20px 20px 5px 20px;
    margin-bottom: -20px;
  }

  .slick-arrow {
    display: block;
    height: 100%;
    width: 25%;
  }

  .slick-slide {
    > div {
      display: flex;
      justify-content: center;
      padding: 11px;
    }
  }

  .slick-next {
    background: linear-gradient(270deg, #020b33 40%, #020b33bd, transparent);
  }
  .slick-prev {
    background: linear-gradient(90deg, #020b33 40%, #020b33bd, transparent);
    z-index: 1;
  }

  .slick-arrow::before {
    content: none;
  }

  .bug {
    background: #92BC2C;
    box-shadow: 0 0 20px #92BC2C;
  }
  .water {
    background: #539DDF;
    box-shadow: 0 0 20px #539DDF;
  }
  .fire {
    background: #FBA54C;
    box-shadow: 0 0 20px #FBA54C;
  }
  .grass {
    background: #5FBD58;
    box-shadow: 0 0 20px #5FBD58;
  }
  .normal {
    background: #A0A29F;
    box-shadow: 0 0 20px #A0A29F;
  }
  .flying {
    background: #A1BBEC;
    box-shadow: 0 0 20px #A1BBEC;
  }
  .electric {
    background: #F2D94E;
    box-shadow: 0 0 20px #F2D94E;
  }
  .rock {
    background: #C9BB8A;
    box-shadow: 0 0 20px #C9BB8A;
  }
  .dragon {
    background: #0C69C8;
    box-shadow: 0 0 20px #0C69C8;
  }
  .ghost {
    background: #5F6DBC;
    box-shadow: 0 0 20px #5F6DBC;
  }
  .dark {
    background: #595761;
    box-shadow: 0 0 20px #595761;
  }
  .fairy {
    background: #EE90E6;
    box-shadow: 0 0 20px #EE90E6;
  }
  .psychic {
    background: #FA8581;
    box-shadow: 0 0 20px #FA8581;
  }
  .ice {
    background: #75D0C1;
    box-shadow: 0 0 20px #75D0C1;
  }
  .steel {
    background: #5695A3;
    box-shadow: 0 0 20px #5695A3;
  }
  .ground {
    background: #DA7C4D;
    box-shadow: 0 0 20px #DA7C4D;
  }
  .fighting {
    background: #D3425F;
    box-shadow: 0 0 20px #D3425F;
  }
  .poison {
    background: #B763CF;
    box-shadow: 0 0 20px #B763CF;
  }
`;
