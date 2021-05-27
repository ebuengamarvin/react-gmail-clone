import * as yup from 'yup';

const validationSchema = yup.object().shape({
  to: yup.string().required('This field is required'),
  subject: yup.string().required('This field is required'),
  message: yup.string().required('This field is required'),
});

export default validationSchema;
