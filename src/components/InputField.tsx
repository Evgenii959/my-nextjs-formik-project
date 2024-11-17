import { Field, ErrorMessage } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
}) => {
  return (
    <FormControl isInvalid={!!ErrorMessage}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field
        as={Input}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={FormErrorMessage} />
    </FormControl>
  );
};

export default InputField;
