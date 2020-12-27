import React from "react";

import { Container } from "./styles";

const PokeTypes = ({ types }: any) => {
  return (
    <Container>
      <section className="types">
        {types?.map((type: any) => (
          <p key={type.type.name} className={`type ${type.type.name}`}>
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </p>
        ))}
      </section>
    </Container>
  );
};

export default PokeTypes;
