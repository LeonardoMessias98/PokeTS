import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../util/api";
import { Container } from "./styles";

import Stats from "./components/Stats";
import PokeTypesComponent from "../../Components/PokeTypes";

interface PokeStat {
  name: string;
  url: string;
}

interface PokeStats {
  base_stat: number;
  effort: number;
  stat: PokeStat;
}

interface PokeType {
  name: string;
  url: string;
}

interface PokeTypes {
  slot: number;
  type: PokeType;
}

interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  stats: PokeStats;
  types: Array<PokeTypes>;
  sprites: any;
}

const Poke = () => {
  const params = useParams();
  const { poke }: any = params;

  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    api.get(`/pokemon/${poke}`).then((Response) => {
      setPokemon(Response.data);
    });
  }, [poke]);

  const pokemonStats = pokemon?.stats;

  return (
    <Container>
      <div className="content">
        <div className={`center list-${pokemon?.types[0].type.name}`}>
          <figure>
            <img
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt="poke_img"
            />
          </figure>

          <div className="poke-info">
            <h1>{`${pokemon?.name
              ?.charAt(0)
              ?.toUpperCase()}${pokemon?.name.slice(1)}`}</h1>
            <p>N° {pokemon?.id}</p>
          </div>

          <PokeTypesComponent types={pokemon?.types} />
        </div>
        
        <div className="otherInfos">
          <h1>Info</h1>
          
          <Stats stats={pokemonStats} />
        </div>
      </div>

      <div className="evolutions"></div>
    </Container>
  );
};

export default Poke;
