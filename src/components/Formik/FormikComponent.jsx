import Button from 'react-bootstrap/Button'
import { useFormik} from 'formik';

const validate = (values) => {
  const validateEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  const errors = {}
  if (!values.firstname) {
    errors.firstname = 'Required';
  }
  if (values.firstname.length > 15) {
    errors.firstname = 'Must be 15 characters or less';
  }
  if (!values.lastname) {
    errors.lastname = 'Required';
  }
  if (values.lastname.length > 15) {
    errors.lastname = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required'
  }
  if (!validateEmail.test(values.email)) {
    errors.email = 'Email must be valid'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.repeatPassword) {
    errors.repeatPassword = 'Required'
  }
  if (values.password && values.repeatPassword) {
    if (values.password !== values.repeatPassword) {
      errors.repeatPassword = 'Password must be the same'
    }
  }
  
  return errors
}

const FormikComponent = () => {

const formik = useFormik({
  initialValues: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repeatPassword: '',
  },
  validate,
  onSubmit: values => {
    console.log(JSON.stringify(values, 0, 2))
  }
})

  return(
    <div>
      <h2>Formik</h2>
      <form onSubmit={formik.handleSubmit} className='m-4'>
        <label htmlFor="firstname" className='me-2'>First name</label>
        <br />
        <input
          id="firstname"
          name="firstname"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstname}
        />
        {formik.touched.firstname && formik.errors.firstname ? (
          <div className='mt-2 text-danger'>{formik.errors.firstname}</div>
        ) : null}
        <br />
        <label htmlFor="lastname" className='me-2'>Last name</label>
        <br />
        <input
          id="lastname"
          name="lastname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastname}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastname && formik.errors.lastname ? (
          <div className='mt-2 text-danger'>{formik.errors.lastname}</div>
        ) : null}
        <br />
        <label htmlFor="email" className='me-2'>Email</label>
        <br />
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='mt-2 text-danger'>{formik.errors.email}</div>
        ) : null}
        <br />
        <label htmlFor="password" className='me-2'>Password</label>
        <br />
        <input
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className='mt-2 text-danger'>{formik.errors.password}</div>
        ) : null}
        <br />
        <label htmlFor="repeatPassword" className='me-2'>Repeat password</label>
        <br />
        <input
          id="repeatPassword"
          name="repeatPassword"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
          onBlur={formik.handleBlur}
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
          <div className='mt-2 text-danger'>{formik.errors.repeatPassword}</div>
        ) : null}
        <br />
        <Button type="submit" className='mt-3'>Submit</Button>
      </form>
    </div>
  );
}

export default FormikComponent