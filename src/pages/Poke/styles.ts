import styled from "styled-components";

import grass from "../../assets/icons/grass.svg";
import bug from "../../assets/icons/bug.svg";
import water from "../../assets/icons/water.svg";
import fire from "../../assets/icons/fire.svg";
import dragon from "../../assets/icons/dragon.svg";
import normal from "../../assets/icons/normal.svg";
import ghost from "../../assets/icons/ghost.svg";
import rock from "../../assets/icons/rock.svg";
import ground from "../../assets/icons/ground.svg";
import flying from "../../assets/icons/flying.svg";
import figthing from "../../assets/icons/fighting.svg";
import fairy from "../../assets/icons/fairy.svg";
import dark from "../../assets/icons/dark.svg";
import psychic from "../../assets/icons/psychic.svg";
import steel from "../../assets/icons/steel.svg";
import ice from "../../assets/icons/ice.svg";
import electric from "../../assets/icons/electric.svg";
import poison from "../../assets/icons/poison.svg";
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

  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: linear-gradient(to top, #020a32, #3f51b5);
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .moves {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 500px;

    > div {
      display: flex;
      justify-content: space-around;
    }

    ul {
      padding: 0 30px;

      li {
        display: flex;
        justify-content: space-around;
        align-items: center;

        h4,
        p {
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  .card {
    margin: 20px;
    width: 500px;
    background: #0000004f;
    border-radius: 6px 6px 0 0;

    h1 {
      display: flex;
      justify-content: center;
      border-radius: 6px 6px 0 0;
      margin: 0;
    }

    h1 + div {
      padding: 30px;
    }

    h1,
    h2,
    h4,
    p {
      color: #ffffff;
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100vw;
    margin-bottom: 30px;

    figure {
      padding: 20px;
      background: #f2f2f2;
      border-radius: 50%;
      margin-top: 10px;
    }

    img {
      width: 180px;
      height: 180px;
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

  .evolutions {
    section {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-end;
      padding: 30px 0;

      figure {
        cursor: pointer;
        height: max-content;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        h3 {
          color: #ffffff;
        }
      }
    }
  }

  .list-grass {
    .center {
      background: linear-gradient(45deg, #5fbd58, transparent) 0% 0% / cover
          no-repeat,
        url(${grass});
    }

    .card {
      h1 {
        background: #5fbd58;
      }
    }
  }
  .list-water {
    .center {
      background: linear-gradient(45deg, #539ddf, transparent) 0% 0% / cover
          no-repeat,
        url(${water});
    }

    .card {
      h1 {
        background: #539ddf;
      }
    }
  }
  .list-fire {
    .center {
      background: linear-gradient(45deg, #fba54c, transparent) 0% 0% / cover
          no-repeat,
        url(${fire});
    }

    .card {
      h1 {
        background: #fba54c;
      }
    }
  }
  .list-bug {
    .center {
      background: linear-gradient(45deg, #92bc2c, transparent) 0% 0% / cover
          no-repeat,
        url(${bug});
    }

    .card {
      h1 {
        background: #92bc2c;
      }
    }
  }
  .list-flying {
    .center {
      background: linear-gradient(45deg, #a1bbec, transparent) 0% 0% / cover
          no-repeat,
        url(${flying});
    }

    .card {
      h1 {
        background: #a1bbec;
      }
    }
  }
  .list-ghost {
    .center {
      background: linear-gradient(45deg, #5f6dbc, transparent) 0% 0% / cover
          no-repeat,
        url(${ghost});
    }

    .card {
      h1 {
        background: #5f6dbc;
      }
    }
  }
  .list-normal {
    .center {
      background: linear-gradient(45deg, #a0a29f, transparent) 0% 0% / cover
          no-repeat,
        url(${normal});
    }

    .card {
      h1 {
        background: #a0a29f;
      }
    }
  }
  .list-dragon {
    .center {
      background: linear-gradient(45deg, #0c69c8, transparent) 0% 0% / cover
          no-repeat,
        url(${dragon});
    }

    .card {
      h1 {
        background: #0c69c8;
      }
    }
  }
  .list-fighting {
    .center {
      background: linear-gradient(45deg, #d3425f, transparent) 0% 0% / cover
          no-repeat,
        url(${figthing});
    }

    .card {
      h1 {
        background: #d3425f;
      }
    }
  }
  .list-rock {
    .center {
      background: linear-gradient(45deg, #c9bb8a, transparent) 0% 0% / cover
          no-repeat,
        url(${rock});
    }

    .card {
      h1 {
        background: #c9bb8a;
      }
    }
  }
  .list-ground {
    .center {
      background: linear-gradient(45deg, #da7c4d, transparent) 0% 0% / cover
          no-repeat,
        url(${ground});
    }

    .card {
      h1 {
        background: #da7c4d;
      }
    }
  }
  .list-fairy {
    .center {
      background: linear-gradient(45deg, #ee90e6, transparent) 0% 0% / cover
          no-repeat,
        url(${fairy});
    }

    .card {
      h1 {
        background: #ee90e6;
      }
    }
  }
  .list-dark {
    .center {
      background: linear-gradient(45deg, #595761, transparent) 0% 0% / cover
          no-repeat,
        url(${dark});
    }

    .card {
      h1 {
        background: #595761;
      }
    }
  }
  .list-psychic {
    .center {
      background: linear-gradient(45deg, #fa8581, transparent) 0% 0% / cover
          no-repeat,
        url(${psychic});
    }

    .card {
      h1 {
        background: #fa8581;
      }
    }
  }
  .list-steel {
    .center {
      background: linear-gradient(45deg, #5695a3, transparent) 0% 0% / cover
          no-repeat,
        url(${steel});
    }

    .card {
      h1 {
        background: #5695a3;
      }
    }
  }
  .list-ice {
    .center {
      background: linear-gradient(45deg, #75d0c1, transparent) 0% 0% / cover
          no-repeat,
        url(${ice});
    }

    .card {
      h1 {
        background: #75d0c1;
      }
    }
  }
  .list-electric {
    .center {
      background: linear-gradient(45deg, #f2d94e, transparent) 0% 0% / cover
          no-repeat,
        url(${electric});
    }

    .card {
      h1 {
        background: #f2d94e;
      }
    }
  }
  .list-poison {
    .center {
      background: linear-gradient(45deg, #b763cf, transparent) 0% 0% / cover
          no-repeat,
        url(${poison});
    }

    .card {
      h1 {
        background: #b763cf;
      }
    }
  }
`;
