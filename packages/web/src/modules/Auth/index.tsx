import { Route } from "react-router-dom";

import { RegisterConnector } from "./Register";

export const AuthRoutes = () => (
  <>
    <Route exact path="/register" component={RegisterConnector} />
  </>
);
