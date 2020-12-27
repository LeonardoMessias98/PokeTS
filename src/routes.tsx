import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainList from "./pages/MainList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
