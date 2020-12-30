import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Poke from "./pages/Poke";
import Initial from "./pages/Initial";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Initial} />
        <Route path="/pokemons" component={MainPage} />
        <Route path="/pokemons/:page" component={MainPage} />
        <Route path="/poke/:poke" component={Poke} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
