import React, {useState} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

export const RegisterForm = ({data}) => {

// const [active, setactive] = useState('')

  const formik = useFormik({
    initialValues: {
      name: {
        first:'',
        last: ''
      },
      city:'',
      country:'',
      title: '',
      employer: '',
      movies: [
      '',
      '',
      '']
    },
//     validationSchema: Yup.object({
//         firstName: Yup.string()
//         .max(15, 'Must be 15 characters or less'),
//         // .required('Required Field'),
//         lastName: Yup.string()
//         .max(20, 'No more than 15 characters'),
//         // .required('Required Field'),
//         location: Yup.string()
//         .max(100, 'Maximum of 100 characters'),
// // ,        .required('Required Field'),
//         title: Yup.string()
//         .max(50, 'Must be 50 characters or less'),
//         // .required('Required Field'),
//         employer: Yup.string()
//         .max(100, 'Max of 100 characters'),
//         // .required('Required Field'),
//         movies: Yup.string()
//         .max(1000, 'Max of 1000 characters'),
//         // .required('Required Field')

//     }),
    onSubmit: (values) => {
     data.push(values)
     alert(JSON.stringify(values, null, 2))
    },
  });

  // console.log(formik.errors)

  return (
  <>
  <form onSubmit={formik.handleSubmit}>
        <h1>Register</h1>
        <div className="input-container">
        First Name: &nbsp;
        <br />
        <input 
        id="firstName" 
        name="firstName" 
        type="text"
        placeholder="first name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName} /> 
        {formik.touched.firstName & formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null }

        <br />

        Last Name: &nbsp;
        <br />
        <input 
        id="lastName" 
        name="lastName" 
        type="text" 
        placeholder='last name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName} />
        {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}

        <br />

        From:&nbsp;
        <br />
        <input 
        id="location" 
        name="location" 
        type="text" 
        placeholder='city and country'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.location} />
        {formik.touched.location && formik.errors.location ? <p>{formik.errors.location}</p> : null}

        <br />

        Job Title:&nbsp;
        <br />
        <input 
        id="title" 
        name="title" 
        type="text" 
        placeholder='job-title'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title} />
        {formik.touched.title && formik.errors.title ? <p>{formik.errors.title}</p> : null}

        <br />

        Employer: &nbsp;
        <br />
        <input 
        id="employer" 
        name="employer" 
        type="text" 
        placeholder='employer'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.employer} />
        {formik.touched.employer && formik.errors.employer ? <p>{formik.errors.employer}</p> : null}

        <br />

        Movies: &nbsp;
        <br />
        <input 
        id="movies" 
        name="movies" 
        type="text" 
        placeholder='favorite movies'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.movies} />
        {formik.touched.movies && formik.errors.movies ? <p>{formik.errors.movies}</p> : null}

        </div>
        <button type="submit">Register</button>
    </form>

    <div>
  
    </div>
</>
    );
};
