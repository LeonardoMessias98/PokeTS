import React from "react";
import { useHistory } from 'react-router-dom';

import { Container } from "./styles";

import PokeTypes from '../../../../Components/PokeTypes';
interface Poke {
  id: number;
  name: string;
  sprites: any;
  types: Array<any>;
}

interface ListProps {
  pokemon: Poke;
}

const List: React.FC<ListProps> = ({ pokemon }) => {
  const history = useHistory();

  const navigateToPokemon = () => {
    history.push(`/poke/${pokemon.name}`)
  }

  return (
    <Container>
      <div
        key={pokemon.id}
        className={`list list-${pokemon.types[0].type.name}`}
      >
        <figure onClick={navigateToPokemon}>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </figure>

        <p className="poke_index">N° {pokemon.id}</p>

        <h4>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>


        <PokeTypes types={pokemon.types} />

      </div>
    </Container>
  );
};

export default List;
