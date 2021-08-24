import Layout from '../components/Layouts';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, gql } from '@apollo/client';

const AUTHENTICATED_USER = gql`
  mutation authenticateUser($input: AuthenticateInput) {
    authenticateUser(input: $input) {
      token
    }
  }
`

const Login = () => {
  const [authenticateUser] = useMutation(AUTHENTICATED_USER);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
                .email('E-mail inválido!')
                .required('Campo Obrigátorio!'),
      password: Yup.string()
                   .required('Campo Obrigátorio!')
    }),
    onSubmit: async values => {
      const { email, password } = values;

      try {
        const { data } = await authenticateUser({
          variables: {
            input: {
              email, 
              password 
            }
          }
        });

        console.log(data);
      }catch(err) {
        console.log(err);
      }
    }
  });

  return (
    <>
      <Layout>
        <h1 className="text-center text-2xl font-black text-white uppercase">
          Faça seu login
        </h1>

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form 
              className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
              onSubmit={formik.handleSubmit}
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input  
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="
                    shadow 
                    appearance-none border
                    rounded 
                    w-full 
                    py-2 p-3 
                    text-gray-700 
                    leading-tight 
                    focus:outline-none 
                    focus:shadow-outline"
                />
              </div>

              {formik.touched.email && formik.errors.email ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p>Whoops: {formik.errors.email}</p>
                </div>
              ) : null}

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Senha
                </label>
                <input  
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="
                    shadow 
                    appearance-none border
                    rounded 
                    w-full 
                    py-2 p-3 
                    text-gray-700 
                    leading-tight 
                    focus:outline-none 
                    focus:shadow-outline"
                />
              </div>

              {formik.touched.password && formik.errors.password ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p>Whoops: {formik.errors.password}</p>
                </div>
              ) : null}

              <input 
                  type="submit"
                  value="Login"
                  className="
                    bg-gray-800 
                    w-full 
                    mt-5 
                    p-2 
                    font-black 
                    text-white 
                    uppercase 
                    hover:bg-gray-900
                    cursor-pointer" 
                />
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Login