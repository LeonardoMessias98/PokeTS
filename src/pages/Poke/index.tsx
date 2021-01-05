import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

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

interface PokeMove {
  move: any;
  version_group_details: any;
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
  moves: Array<PokeMove>;
}

const Poke = () => {
  const params = useParams();
  const history = useHistory();
  const { poke }: any = params;

  const [pokemon, setPokemon] = useState<Pokemon>();
  const [evolves, setEvolves] = useState<any>([]);
  const [evolvesName, setEvolvesName] = useState<any>([]);

  useEffect(() => {
    api.get(`/pokemon/${poke}`).then((Response) => {
      setPokemon(Response.data);

      api.get(Response.data.species.url).then((Response) => {
        api.get(Response.data.evolution_chain.url).then((Response) => {
          const chain = Response.data.chain;

          setEvolvesName([
            chain?.species?.name,
            chain?.evolves_to[0]?.species?.name,
            chain?.evolves_to[0]?.evolves_to[0]?.species?.name,
          ]);
        });
      });
    });
  }, [poke]);

  useEffect(() => {
    async function getPokeEvolves() {
      if (evolvesName.length > 0) {
        const onlyValidEvolves = evolvesName.filter((evolve: string) => evolve);

        const evolves = onlyValidEvolves.map(async (name: string) => {
          const response = await api.get(`/pokemon/${name}`);
          return response.data;
        });

        setEvolves(await Promise.all(evolves));
      }
    }

    getPokeEvolves();
  }, [evolvesName]);

  const pokemonStats = pokemon?.stats;

  const navigateToPoke = (pokeName : string) => {
    history.push(`/poke/${pokeName}`);
  };

  return (
    <Container>
      <div className={`main list-${pokemon?.types[0].type.name}`}>
        <div className="content">
          <div className="center">
            <div className="bg">
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
          </div>

          <div className="otherInfos card">
            <h1>Info</h1>

            <Stats stats={pokemonStats} />
          </div>
        </div>

        <div className="moves card">
          <h1>Moves</h1>
          <div>
            <h2>Move Name</h2>
            <h2>Learned at</h2>
          </div>
          <ul>
            {pokemon?.moves?.map((move) => (
              <>
                {move.version_group_details[0].move_learn_method.name ===
                  "level-up" && (
                  <li key={move.move.name}>
                    <h4>{move.move.name?.replace("-", " ")}</h4>
                    <p>
                      Level {move.version_group_details[0].level_learned_at}
                    </p>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>

        {evolves.length > 0 && (
          <div className="evolutions card">
            <h1>Evolutions</h1>

            <section>
              {evolves.map((evolve: any) => (
                <figure
                  key={evolve.id}
                  onClick={() => navigateToPoke(evolve.name)}
                >
                  <h3>{evolve.name}</h3>
                  <img
                    src={
                      evolve.sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt={evolve.name}
                  />
                </figure>
              ))}
            </section>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Poke;
