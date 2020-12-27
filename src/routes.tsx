import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainList from "./pages/MainList";
import Main from "./pages/Main";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/pokemons" component={MainList} />
        <Route path="/pokemons/:page" component={MainList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
