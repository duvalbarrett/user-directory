import React, { useState } from "react";
import { useFormik } from "formik";


const NewEmployee = ({ data }) => {
  const [active, setActive] = useState("");
  const formik = useFormik({
      initialValues: {
        id: data.length + 1,
        name: {
          first: '',
          last: '',
        },
        city: '',
        country: '',
        title: '',
        employer: '',
        favoriteMovies: ['','',''],
      },
      onSubmit: values => {
          data.push(values)
        alert(JSON.stringify(values, null, 2));
        console.log(data)
      },
    });

  return (
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name.first">First Name</label>
      <input
        id="name.first"
        name="name.first"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name.first}
      />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <label htmlFor="last">Last Name</label>
      <input
        id="name.last"
        name="name.last"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name.last}
      />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <label htmlFor="city">City</label>
      <input
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.city}
      />
      {formik.touched.city && formik.errors.city ? <div>{formik.errors.city}</div> : null}

      <label htmlFor="country">Country</label>
      <input
        id="country"
        name="country"
        type="country"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.country}
      />
      {formik.touched.country && formik.errors.country ? <div>{formik.errors.country}</div> : null}

      <label htmlFor="employer">Employer</label>
      <input
        id="employer"
        name="employer"
        type="employer"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.employer}
      />
      {formik.touched.employer && formik.errors.employer ? <div>{formik.errors.employer}</div> : null}

      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null}

      <label htmlFor="movie">Favorite Movie</label>
      <input
        id="favoriteMovies[0]"
        name="favoriteMovies[0]"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.favoriteMovies[0]}
      />
      {formik.touched.favoriteMovies && formik.errors.favoriteMovies ? <div>{formik.errors.favoriteMovies}</div> : null}

      <label htmlFor="movie">Second Favorite Movie</label>
      <input
        id="favoriteMovies[1]"
        name="favoriteMovies[1]"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.favoriteMovies[1]}
      />
      {formik.touched.favoriteMovies && formik.errors.favoriteMovies ? <div>{formik.errors.favoriteMovies}</div> : null}

      <label htmlFor="movie">Third Favorite Movie</label>
      <input
        id="favoriteMovies[2]"
        name="favoriteMovies[2]"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.favoriteMovies[2]}
      />
      {formik.touched.favoriteMovies && formik.errors.favoriteMovies ? <div>{formik.errors.favoriteMovies}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default NewEmployee;