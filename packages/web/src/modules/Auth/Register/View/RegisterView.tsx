import { FC } from "react";

import { Link as RouterLink } from "react-router-dom";

import { Formik, Form, FormikErrors } from "formik";
import { Button, Box, Flex } from "@chakra-ui/react";

import { registerSchema } from "@air-bnb-clone/common";
import { RegisterInput } from "@air-bnb-clone/controller";

import { Wrapper, InputField } from "../../../shared/components";

interface RegisterViewProps {
  submit: (
    values: RegisterInput
  ) => Promise<FormikErrors<RegisterInput> | null>;
}

const RegisterView: FC<RegisterViewProps> = ({ submit }) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={submit}
        validationSchema={registerSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="email"
              label="Email"
              placeholder="Email"
              type="email"
            />
            <Box mt={4}>
              <InputField
                name="username"
                label="Username"
                placeholder="Username"
              />
            </Box>
            <Box mt={4}>
              <InputField
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
              />
            </Box>
            <Flex alignItems="center" justifyContent="space-between" mt={4}>
              <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
                Register
              </Button>
              <RouterLink to="/login">Already have an account?</RouterLink>
            </Flex>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default RegisterView;
