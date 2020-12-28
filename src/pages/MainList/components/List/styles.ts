import styled from "styled-components";

import grass_bg from "../../../../assets/bg_grass.jpg"
import poison_bg from "../../../../assets/bg_poison.jpg"
import fire_bg from "../../../../assets/bg_fire.jpg"
import water_bg from "../../../../assets/bg_water.jpg"
import bug_bg from "../../../../assets/bg_bug.jpg"
import normal_bg from "../../../../assets/bg_normal.jpg"
import flying_bg from "../../../../assets/bg_flying.jpg"
import ground_bg from "../../../../assets/bg_ground.jpg"
import electric_bg from "../../../../assets/bg_electric.jpg"
import fairy_bg from "../../../../assets/bg_fairy.jpg"
import ice_bg from "../../../../assets/bg_ice.jpg"
import steel_bg from "../../../../assets/bg_steel.jpg"
import dark_bg from "../../../../assets/bg_dark.jpg"
import psychic_bg from "../../../../assets/bg_physic.jpg"
import fighting_bg from "../../../../assets/bg_fighting.jpg"
import ghost_bg from "../../../../assets/bg_ghost.jpg"
import dragon_bg from "../../../../assets/bg_dragon.jpg"
import rock_bg from "../../../../assets/bg_rock.jpg"


export const Container = styled.div`
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
`;
