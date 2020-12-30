import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import bugType from "../../assets/icons/bug.svg";
import waterType from "../../assets/icons/water.svg";
import fireType from "../../assets/icons/fire.svg";
import grassType from "../../assets/icons/grass.svg";
import dragonType from "../../assets/icons/dragon.svg";
import normalType from "../../assets/icons/normal.svg";
import ghostType from "../../assets/icons/ghost.svg";
import rockType from "../../assets/icons/rock.svg";
import groundType from "../../assets/icons/ground.svg";
import flyingType from "../../assets/icons/flying.svg";
import figthingType from "../../assets/icons/fighting.svg";
import fairyType from "../../assets/icons/fairy.svg";
import darkType from "../../assets/icons/dark.svg";
import psychicType from "../../assets/icons/psychic.svg";
import steelType from "../../assets/icons/steel.svg";
import iceType from "../../assets/icons/ice.svg";
import electricType from "../../assets/icons/electric.svg";
import poisonType from "../../assets/icons/poison.svg";

import { Container } from "./styles";

interface SliderPokeTypeProps {
  loaderPokeball: Function;
  setPokeType: Function;
  filterTypeIsActive: Boolean;
}

const SliderPokeTypes: React.FC<SliderPokeTypeProps> = ({
  loaderPokeball,
  setPokeType,
  filterTypeIsActive,
}) => {
  const width = window.innerWidth;

  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: width <= 500 ? 3 : 5,
    slidesToScroll: 1,
    centerMode: true,
  };

  const [mainTypeIndex, setMainTypeIndex] = useState(0);
  const arrowDownDiv = document.querySelector(".arrow-down");

  useEffect(() => {
    if (mainTypeIndex) {
      const types = document.querySelectorAll(".slick-slide > div > figure");
      const pokeClassName =
        types[mainTypeIndex + (width <= 500 ? 2 : 4)].className;

      if (setPokeType) {
        setPokeType(pokeClassName);
      }

      if (arrowDownDiv) {
        arrowDownDiv.id = pokeClassName;
      }
    }
  }, [mainTypeIndex, arrowDownDiv, width, setPokeType]);

  const handleAfterChange = (e: any) => {
    setMainTypeIndex(e + 2);

    if (filterTypeIsActive)
      document.querySelector(".arrow-down")?.classList.remove("hidden");
  };

  const handleBeforeChange = () => {
    if (filterTypeIsActive) {
      document.querySelector(".arrow-down")?.classList.add("hidden");
    }
  };

  return (
    <Container>
      {" "}
      <Slider
        {...settings}
        beforeChange={handleBeforeChange}
        afterChange={handleAfterChange}
      >
        <figure className="bug">
          <img src={bugType} alt="bug-type" />
        </figure>

        <figure className="water">
          <img src={waterType} alt="water-type" />
        </figure>

        <figure className="fire">
          <img src={fireType} alt="fire-type" />
        </figure>

        <figure className="grass">
          <img src={grassType} alt="grass-type" />
        </figure>

        <figure className="normal">
          <img src={normalType} alt="normal-type" />
        </figure>

        <figure className="flying">
          <img src={flyingType} alt="flying-type" />
        </figure>

        <figure className="electric">
          <img src={electricType} alt="electric-type" />
        </figure>

        <figure className="rock">
          <img src={rockType} alt="rock-type" />
        </figure>

        <figure className="dragon">
          <img src={dragonType} alt="dragon-type" />
        </figure>

        <figure className="ghost">
          <img src={ghostType} alt="ghost-type" />
        </figure>

        <figure className="dark">
          <img src={darkType} alt="dark-type" />
        </figure>

        <figure className="fairy">
          <img src={fairyType} alt="fairy-type" />
        </figure>

        <figure className="psychic">
          <img src={psychicType} alt="psychic-type" />
        </figure>

        <figure className="ice">
          <img src={iceType} alt="ice-type" />
        </figure>

        <figure className="steel">
          <img src={steelType} alt="steel-type" />
        </figure>

        <figure className="ground">
          <img src={groundType} alt="ground-type" />
        </figure>

        <figure className="fighting">
          <img src={figthingType} alt="fighting-type" />
        </figure>

        <figure className="poison">
          <img src={poisonType} alt="poison-type" />
        </figure>
      </Slider>
    </Container>
  );
};

export default SliderPokeTypes;
