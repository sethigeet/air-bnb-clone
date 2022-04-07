import { FC } from "react";

import { BrowserRouter, Switch } from "react-router-dom";

import { AuthRoutes } from "../modules";

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoutes />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
