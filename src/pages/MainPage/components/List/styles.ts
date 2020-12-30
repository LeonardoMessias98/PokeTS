import styled from "styled-components";

import grass from "../../../../assets/icons/grass.svg";
import bug from "../../../../assets/icons/bug.svg";
import water from "../../../../assets/icons/water.svg";
import fire from "../../../../assets/icons/fire.svg";
import dragon from "../../../../assets/icons/dragon.svg";
import normal from "../../../../assets/icons/normal.svg";
import ghost from "../../../../assets/icons/ghost.svg";
import rock from "../../../../assets/icons/rock.svg";
import ground from "../../../../assets/icons/ground.svg";
import flying from "../../../../assets/icons/flying.svg";
import figthing from "../../../../assets/icons/fighting.svg";
import fairy from "../../../../assets/icons/fairy.svg";
import dark from "../../../../assets/icons/dark.svg";
import psychic from "../../../../assets/icons/psychic.svg";
import steel from "../../../../assets/icons/steel.svg";
import ice from "../../../../assets/icons/ice.svg";
import electric from "../../../../assets/icons/electric.svg";
import poison from "../../../../assets/icons/poison.svg";

export const Container = styled.div`
  .list {
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 8px;

    figure {
      background: #f2f2f2;
      border-radius: 8px;

      img {
        cursor: pointer;
      }
    }

    p.poke_index {
      font-family: "Roboto";
      width: 100%;
      font-size: 12px;
      padding: 10px 0 0 0;
      margin-bottom: 0;
    }

    img {
      width: 200px;
      height: 200px;
    }

    h4 {
      width: 100%;
      padding: 0 0 10px 0;
      font-family: Roboto, sans-serif;
      margin-bottom: 0;
    }
  }

  .list-grass {
    background: linear-gradient(45deg, #5fbd58, transparent) 0% 0% / cover
        no-repeat,
      url(${grass});
  }
  .list-water {
    background: linear-gradient(45deg, #539ddf, transparent) 0% 0% / cover
        no-repeat,
      url(${water});
  }
  .list-fire {
    background: linear-gradient(45deg, #fba54c, transparent) 0% 0% / cover
        no-repeat,
      url(${fire});
  }
  .list-bug {
    background: linear-gradient(45deg, #92bc2c, transparent) 0% 0% / cover
        no-repeat,
      url(${bug});
  }
  .list-flying {
    background: linear-gradient(45deg, #a1bbec, transparent) 0% 0% / cover
        no-repeat,
      url(${flying});
  }
  .list-ghost {
    background: linear-gradient(45deg, #5f6dbc, transparent) 0% 0% / cover
        no-repeat,
      url(${ghost});
  }
  .list-normal {
    background: linear-gradient(45deg, #a0a29f, transparent) 0% 0% / cover
        no-repeat,
      url(${normal});
  }
  .list-dragon {
    background: linear-gradient(45deg, #0c69c8, transparent) 0% 0% / cover
        no-repeat,
      url(${dragon});
  }
  .list-fighting {
    background: linear-gradient(45deg, #d3425f, transparent) 0% 0% / cover
        no-repeat,
      url(${figthing});
  }
  .list-rock {
    background: linear-gradient(45deg, #c9bb8a, transparent) 0% 0% / cover
        no-repeat,
      url(${rock});
  }
  .list-ground {
    background: linear-gradient(45deg, #da7c4d, transparent) 0% 0% / cover
        no-repeat,
      url(${ground});
  }
  .list-fairy {
    background: linear-gradient(45deg, #ee90e6, transparent) 0% 0% / cover
        no-repeat,
      url(${fairy});
  }
  .list-dark {
    background: linear-gradient(45deg, #595761, transparent) 0% 0% / cover
        no-repeat,
      url(${dark});
  }
  .list-psychic {
    background: linear-gradient(45deg, #fa8581, transparent) 0% 0% / cover
        no-repeat,
      url(${psychic});
  }
  .list-steel {
    background: linear-gradient(45deg, #5695a3, transparent) 0% 0% / cover
        no-repeat,
      url(${steel});
  }
  .list-ice {
    background: linear-gradient(45deg, #75d0c1, transparent) 0% 0% / cover
        no-repeat,
      url(${ice});
  }
  .list-electric {
    background: linear-gradient(45deg, #f2d94e, transparent) 0% 0% / cover
        no-repeat,
      url(${electric});
  }
  .list-poison {
    background: linear-gradient(45deg, #b763cf, transparent) 0% 0% / cover
        no-repeat,
      url(${poison});
  }
`;
