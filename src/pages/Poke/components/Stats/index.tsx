import React from "react";

import { Progress } from "antd";

import { Container } from "./styles";

interface PokeStat {
  name: string;
}

interface PokeStats {
  base_stat?: number;
  stat?: PokeStat;
  effort?: number;
}

interface ComponentStats {
  stats?: any;
}

const Stats: React.FC<ComponentStats> = ({ stats }) => {
  return (
    <Container>
      {stats?.map((stat: PokeStats) => (
        <section className="stat" title={`Base stat ${stat.base_stat}`}>
          <h2>{stat?.stat?.name.replace("-", " ").toUpperCase()}</h2>
          <Progress
            percent={stat.base_stat}
            steps={10}
            size="small"
            strokeColor="#52c41a"
          />
        </section>
      ))}
    </Container>
  );
};

export default Stats;
