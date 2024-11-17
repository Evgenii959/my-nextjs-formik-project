import { Formik, Form } from 'formik';
import { Button, Box } from '@chakra-ui/react';
import InputField from '../components/InputField';
import RadioInput from '../components/RadioInput';
import CheckboxInput from '../components/CheckboxInput';
import { validationSchema } from '../utils/validationSchemas';
import { FormValues } from '../types/form';

const initialValues: FormValues = {
  name: '',
  address: '',
  floor: -1,
  totalFloors: -3,
  square: 0,
  livingSquare: 0,
  kitchenSquare: 0,
};

const Home = () => {
  return (
    <Box maxW="500px" mx="auto" p={4}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form data:', values);
        }}
      >
        <Form>
          <InputField
            label="Название"
            name="name"
            placeholder="Введите название"
          />
          <InputField
            label="Адрес"
            name="address"
            placeholder="Введите адрес"
          />
          <InputField
            label="Этаж"
            name="floor"
            type="number"
            placeholder="Введите этаж"
          />
          <InputField
            label="Количество этажей"
            name="totalFloors"
            type="number"
            placeholder="Введите количество этажей"
          />
          <InputField
            label="Площадь"
            name="square"
            type="number"
            placeholder="Введите площадь"
          />
          <InputField
            label="Жилая площадь"
            name="livingSquare"
            type="number"
            placeholder="Введите жилую площадь"
          />
          <InputField
            label="Площадь кухни"
            name="kitchenSquare"
            type="number"
            placeholder="Введите площадь кухни"
          />

          <RadioInput
            label="Тип жилья"
            name="housingType"
            options={['Квартира', 'Дом']}
          />
          <CheckboxInput label="Наличие балкона" name="hasBalcony" />
          <Button mt={4} colorScheme="blue" type="submit">
            Отправить
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default Home;
