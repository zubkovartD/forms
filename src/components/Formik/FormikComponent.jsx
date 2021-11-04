import Button from 'react-bootstrap/Button'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const FormikComponent = () => {
return (
  <Formik
    initialValues={{firstname: '',
    lastname: '',
    email: '',
    password: '',
    repeatPassword: '',}}
    
    validationSchema={Yup.object({
    firstname: Yup
      .string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastname: Yup
      .string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup
      .string()
      .email('Email address must be valid')
      .required('Required'),
    password: Yup
      .string()
      .required('Required') 
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z0-9]/, 'Password can only contain Latin letters and number.'),
    repeatPassword: Yup
      .string()
      .required('Required') 
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    })}
    onSubmit = {(values) => {
      console.log(JSON.stringify(values, 0, 2))
    }}
  >
  <Form>
    <label htmlFor="firstname">First Name</label>
    <br />
    <Field name="firstname" type="text" className='mt-2'/>
    <br />
    <ErrorMessage name="firstname" render={msg => <div className="error text-danger">{msg}</div>} />
    <br />
    <label htmlFor="lastname">Last Name</label>
    <br />
    <Field name="lastname" type="text" className='mt-2'/>
    <br />
    <ErrorMessage name="lastname" render={msg => <div className="error text-danger">{msg}</div>}/>
    <br />
    <label htmlFor="email">Email</label>
    <br />
    <Field name="email" type="text" className='mt-2'/>
    <br />
    <ErrorMessage name="email" render={msg => <div className="error text-danger">{msg}</div>} />
    <br />
    <label htmlFor="password">Password</label>
    <br />
    <Field name="password" type="text" className='mt-2'/>
    <br />
    <ErrorMessage name="password" render={msg => <div className="error text-danger">{msg}</div>} />
    <br />
    <label htmlFor="repeatPassword">Repeat password</label>
    <br />
    <Field name="repeatPassword" type="text" className='mt-2'/>
    <br />
    <ErrorMessage name="repeatPassword" render={msg => <div className="error text-danger">{msg}</div>} />
    <br />
    <Button type="submit" className='mt-3'>Submit</Button>
  </Form>
</Formik>
)}

export default FormikComponent