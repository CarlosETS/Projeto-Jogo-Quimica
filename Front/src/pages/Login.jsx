import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import userService from '../services/UserService'

function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Endereço de e-mail inválido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        try {
            console.log('Form values:', values);
            await userService.login(values.question, values.responses).then(() => {
            }); 
          } catch (error) {
            console.log(error);
          }
        console.log('Form values:', values);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r">
      <div className="max-w-md w-full p-6 bg-white bg-opacity-75 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>

        <form onSubmit={formik.handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-600">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-600">{formik.errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
