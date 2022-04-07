import { FC } from "react";
import { RegisterInput, useRegisterMutation } from "../../../generated/graphql";

interface RegisterControllerProps {
  children: (data: {
    submit: (values: RegisterInput) => Promise<null>;
  }) => JSX.Element;
}

export const RegisterController: FC<RegisterControllerProps> = ({
  children,
}) => {
  const [register] = useRegisterMutation();

  const submit = async (values: RegisterInput) => {
    const response = await register({ variables: { credentials: values } });
    console.log("response: ", response);
    return null;
  };

  return children({ submit });
};
