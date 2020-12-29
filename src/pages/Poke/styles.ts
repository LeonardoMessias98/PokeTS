import styled from "styled-components";

import poke_bg from "../../assets/background.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${poke_bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: max-content;
  padding: 40px 0;

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .otherInfos {
    background: #fff;
    border-radius: 6px 6px 0 0;

    h1 {
      display: flex;
      justify-content: center;
      background: #81c124;
      border-radius: 6px 6px 0 0;
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin: 40px;
    border-radius: 8px;

    figure {
      padding: 20px;
      background: #f2f2f2;
      border-radius: 50%;
      margin-top: 10px;
    }

    img {
      width: 300px;
    }

    .types {
      justify-content: center;
    }

    .poke-info {
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        margin-right: 10px;
      }
    }
  }
`;
