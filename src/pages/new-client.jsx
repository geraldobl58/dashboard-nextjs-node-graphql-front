import Layout from "../components/Layouts";

const NewClient = () => {
  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-black uppercase">
        Cadastrar Novo Cliente
      </h1>

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
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
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
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
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                Empresa
              </label>
              <input  
                id="company"
                type="text"
                placeholder="Digite sua empresa"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
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
                E-mail
              </label>
              <input  
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Telefone
              </label>
              <input  
                id="phone"
                type="tel"
                placeholder="Digite seu telefone"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
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