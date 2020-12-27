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
  console.log(stats);

  return (
    <Container>
      {stats?.map((stat: PokeStats) => (
        <section className="stat" title={`Base stat ${stat.base_stat}`}>
          {stat?.stat?.name.replace("-", " ").toUpperCase()}
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
