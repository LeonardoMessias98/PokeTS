import React from "react";

import { Container } from "./styles";

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
  return (
    <Container>
      <div
        key={pokemon.id}
        className={`list list-${pokemon.types[0].type.name}`}
      >
        <figure>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </figure>

        <p className="poke_index">N° {pokemon.id}</p>

        <h4>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>

        <section className="types">
          {pokemon.types.map((type: any) => (
            <p key={type.type.name} className={`type ${type.type.name}`}>
              {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
            </p>
          ))}
        </section>
      </div>
    </Container>
  );
};

export default List;
