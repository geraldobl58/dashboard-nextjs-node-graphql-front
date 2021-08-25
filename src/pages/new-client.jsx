import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from "../components/Layouts";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';

const NEW_CLIENT = gql`
  mutation newClient($input: ClientInput) {
    newClient(input: $input) {
      id
      name
      nickname
      company
      email
      phone
    }
  }
`

const NewClient = () => {
  const [message, setMessage] = useState(null);

  const router = useRouter();

  const [newClient] = useMutation(NEW_CLIENT);

  const formik = useFormik({
    initialValues: {
      name: '',
      nickname: '',
      company: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
               .required('Campo Obrigátorio!'),
      nickname: Yup.string()
               .required('Campo Obrigátorio!'),
      company: Yup.string()
               .required('Campo Obrigátorio!'),
      email: Yup.string()
                .email('E-mail Inválido!')
               .required('Campo Obrigátorio!'),
      phone: Yup.string()
               .required('Campo Obrigátorio!')
    }),
    onSubmit: async values => {
      const { name, nickname, company, email, phone } = values;

      try {
        const { data } = await newClient({
          variables: {
            input: {
              name,
              nickname,
              company,
              email,
              phone
            }
          }
        });

        router.push('/');
      }catch(err) {
        setMessage(err.message);

        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    }
  });

  const showMessage = () => {
    return (
      <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
        <p className="uppercase font-black">{message}</p>
      </div>
    )
  } 


  return (
    <Layout>
      {message && showMessage()}
      <h1 className="text-2xl text-gray-800 font-black uppercase">
        Cadastrar Novo Cliente
      </h1>

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nome
              </label>
              <input  
                id="name"
                type="text"
                placeholder="Digite seu nome"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nickname}
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                Empresa
              </label>
              <input  
                id="company"
                type="text"
                placeholder="Digite sua empresa"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
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

            {formik.touched.company && formik.errors.company ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p>Whoops: {formik.errors.company}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Telefone
              </label>
              <input  
                id="phone"
                type="tel"
                placeholder="Digite seu telefone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
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

            {formik.touched.phone && formik.errors.phone ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p>Whoops: {formik.errors.phone}</p>
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
                hover:bg-gray-900
                cursor-pointer" 
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default NewClient;