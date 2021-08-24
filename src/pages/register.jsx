import Layout from '../components/Layouts';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, gql } from '@apollo/client';

const NEW_USER = gql`
mutation newUser($input: UserInput) {
  newUser(input: $input) {
    id
    name
    nickname
    email
  }
}
`

const Register = () => {
  const [newUser] = useMutation(NEW_USER);

  const formik = useFormik({
    initialValues: {
      name: '',
      nickname: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
               .required('Campo Obrigátorio!'),
      nickname: Yup.string()
                   .required('Campo Obrigátorio!'),
      email: Yup.string()
                .email('E-mail inválido!')
                .required('Campo Obrigátorio!'),
      password: Yup.string()
                   .required('Campo Obrigátorio!')
                   .min(6, 'Deve conter no minimo 6 caracteres!')
    }),
    onSubmit: async values => {
      const { name, nickname, email, password } = values;

      try{
        await newUser({
          variables: {
            input: {
              name, 
              nickname, 
              email, 
              password
            }
          }
        });
      }catch(err){
        console.log(err);
      }
    }
  });

  return (
    <>
      <Layout>
        <h1 className="text-center text-2xl font-black text-white uppercase">
          Cadastro de Usuários
        </h1>

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form 
              className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
              onSubmit={formik.handleSubmit}
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nome
                </label>
                <input  
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
              
              {formik.touched.name && formik.errors.name ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p>Whoops: {formik.errors.name}</p>
                </div>
              ) : null}
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nickname">
                  Apelido
                </label>
                <input  
                  id="nickname"
                  type="text"
                  placeholder="Digite seu apelido"
                  value={formik.values.nickname}
                  onChange={formik.handleChange}
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

              {formik.touched.nickname && formik.errors.nickname ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                  <p>Whoops: {formik.errors.nickname}</p>
                </div>
              ) : null}

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input  
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={formik.values.email}
                  onChange={formik.handleChange}
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
                  value={formik.values.password}
                  onChange={formik.handleChange}
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
                  value="Cadastrar"
                  className="
                    bg-gray-800 
                    w-full 
                    mt-5 
                    p-2 
                    font-black 
                    text-white 
                    uppercase 
                    hover:bg-gray-900" 
                />
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Register