import { Field, ErrorMessage } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control';
import { Checkbox } from './ui/checkbox';
interface CheckboxInputProps {
  label: string;
  name: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, name }) => {
  return (
    <FormControl isInvalid={!!ErrorMessage}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field type="checkbox" name={name}>
        {({ field }: any) => <Checkbox {...field} />}
      </Field>
      <ErrorMessage name={name} component={FormErrorMessage} />
    </FormControl>
  );
};

export default CheckboxInput;
