import { FC } from "react";

import { RegisterController } from "@air-bnb-clone/controller";

import RegisterView from "./View";

export const RegisterConnector: FC = () => {
  return (
    <RegisterController>
      {({ submit }) => <RegisterView submit={submit} />}
    </RegisterController>
  );
};
