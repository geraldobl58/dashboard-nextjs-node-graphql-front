import Layout from '../components/Layouts';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      nickname: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values);
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
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Register