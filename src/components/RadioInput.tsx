import { Field, ErrorMessage } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control';
import { Radio, RadioGroup } from '@/components/ui/radio';

interface RadioInputProps {
  label: string;
  name: string;
  options: string[];
}

const RadioInput: React.FC<RadioInputProps> = ({ label, name, options }) => {
  return (
    <FormControl isInvalid={!!ErrorMessage}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field name={name}>
        {({ field }: any) => (
          <RadioGroup {...field}>
            {options.map((option, index) => (
              <Radio key={index} value={option}>
                {option}
              </Radio>
            ))}
          </RadioGroup>
        )}
      </Field>
      <ErrorMessage name={name} component={FormErrorMessage} />
    </FormControl>
  );
};

export default RadioInput;
