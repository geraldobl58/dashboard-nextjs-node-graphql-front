import Layout from '../components/Layouts'
import { gql, useQuery } from '@apollo/client';

const GET_CLIENTS_SELLER = gql`
  query getClientsSeller {
    getClientsSeller {
      id
      name
      nickname
      company
      email
    }
  }
`

const Home = () => {

  const { data, loading, error } = useQuery(GET_CLIENTS_SELLER);
  
  if (loading) return 'Carregando...'

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-black uppercase">
        Listagem de Clientes
      </h1>

      <table className="table-auto shadow-md mt-10 w-full w-lg">
        <thead className="bg-gray-800">
          <tr className="text-white">
            <th className="w-1/5 py-2">Nome</th>
            <th className="w-1/5 py-2">Apelido</th>
            <th className="w-1/5 py-2">Empresa</th>
            <th className="w-1/5 py-2">E-mail</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.getClientsSeller.map(client => (
            <tr key={client.id}>
              <td className="border px-4 py-2">{client.name}</td>
              <td className="border px-4 py-2">{client.nickname}</td>
              <td className="border px-4 py-2">{client.company}</td>
              <td className="border px-4 py-2">{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default Home;
