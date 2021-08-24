import Layout from '../components/Layouts';

const Register = () => {
  return (
    <>
      <Layout>
        <h1 className="text-center text-2xl font-black text-white uppercase">
          Cadastro de Usuários
        </h1>

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nome
                </label>
                <input  
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
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
                  value="Register"
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