import { FC, InputHTMLAttributes } from "react";

import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  inputSize?: "xs" | "sm" | "md" | "lg";
};

export const InputField: FC<Props> = ({
  label,
  inputSize = "md",
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={!!meta.error && meta.touched}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} size={inputSize} id={field.name} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
