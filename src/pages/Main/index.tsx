import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/pokemons");
  }, [history]);

  return <div />;
};

export default Main;
