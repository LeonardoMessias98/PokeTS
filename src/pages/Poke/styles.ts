import styled from "styled-components";

import poke_bg from "../../assets/background.png";

import grass_bg from "../../assets/bg_grass.jpg";
import poison_bg from "../../assets/bg_poison.jpg";
import fire_bg from "../../assets/bg_fire.jpg";
import water_bg from "../../assets/bg_water.jpg";
import bug_bg from "../../assets/bg_bug.jpg";
import normal_bg from "../../assets/bg_normal.jpg";
import flying_bg from "../../assets/bg_flying.jpg";
import ground_bg from "../../assets/bg_ground.jpg";
import electric_bg from "../../assets/bg_electric.jpg";
import fairy_bg from "../../assets/bg_fairy.jpg";
import ice_bg from "../../assets/bg_ice.jpg";
import steel_bg from "../../assets/bg_steel.jpg";
import dark_bg from "../../assets/bg_dark.jpg";
import psychic_bg from "../../assets/bg_physic.jpg";
import fighting_bg from "../../assets/bg_fighting.jpg";
import ghost_bg from "../../assets/bg_ghost.jpg";
import dragon_bg from "../../assets/bg_dragon.jpg";
import rock_bg from "../../assets/bg_rock.jpg";

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

  .list-grass {
    background: url(${grass_bg});
  }

  .list-poison {
    background: url(${poison_bg});
  }

  .list-fire {
    background: url(${fire_bg});
  }

  .list-water {
    background: url(${water_bg});
  }

  .list-bug {
    background: url(${bug_bg});
  }

  .list-normal {
    background: url(${normal_bg});
  }

  .list-flying {
    background: url(${flying_bg});
  }

  .list-ground {
    background: url(${ground_bg});
  }

  .list-electric {
    background: url(${electric_bg});
  }

  .list-fairy {
    background: url(${fairy_bg});
  }

  .list-ice {
    background: url(${ice_bg});
  }

  .list-steel {
    background: url(${steel_bg});
  }

  .list-dark {
    background: url(${dark_bg});
  }

  .list-psychic {
    background: url(${psychic_bg});
  }

  .list-fighting {
    background: url(${fighting_bg});
  }

  .list-ghost {
    background: url(${ghost_bg});
  }

  .list-dragon {
    background: url(${dragon_bg});
  }

  .list-rock {
    background: url(${rock_bg});
  }

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
