import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('Поле обязательно для заполнения'),
  address: Yup.string().required('Поле обязательно для заполнения'),
  floor: Yup.number()
    .min(-1, 'Значение не может быть меньше -1')
    .max(200, 'Значение не может быть больше 200')
    .required('Поле обязательно для заполнения'),
  totalFloors: Yup.number()
    .min(-3, 'Значение не может быть меньше -3')
    .max(200, 'Значение не может быть больше 200')
    .required('Поле обязательно для заполнения'),

  square: Yup.number()
    .required('Поле обязательно для заполнения')
    .min(0, 'Значение не может быть меньше 0')
    .max(400, 'Значение не может быть больше 400')
    .test(
      'is-valid-square',
      'Общая площадь должна быть больше суммы жилой площади и площади кухни',
      function (value) {
        const { livingSquare, kitchenSquare } = this.parent;
        return value > (livingSquare ?? 0) + (kitchenSquare ?? 0);
      }
    ),
    
  livingSquare: Yup.number()
    .min(0, 'Значение не может быть меньше 0')
    .required('Поле обязательно для заполнения'),

  kitchenSquare: Yup.number()
    .min(0, 'Значение не может быть меньше 0')
    .required('Поле обязательно для заполнения'),
});
