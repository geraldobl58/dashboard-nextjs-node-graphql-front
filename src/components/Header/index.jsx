import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const GET_USER = gql`
  query getUser {
    getUser {
      id
      name
      nickname
    }
  }
`;

const Header = () => {
  const router = useRouter();

  const { data, loading, error } = useQuery(GET_USER);

  if (loading) return null;

  if (!data.getUser) {
    return router.push('/login');
  }

  const { name } = data.getUser;

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  }

  return (
    <div className="flex justify-between mb-10">
      <p className="mr-2 uppercase">Usuário: {name}</p>

      <button 
        type="button"
        onClick={() => logout()}
        className="
          bg-blue-800 
          w-full 
          sm:w-auto 
          font-bold 
          uppercase 
          text-xs
          rounded
          py-1
          px-2
          text-white
          shadow-md"
      >
        Logout
      </button>
    </div>
  )
}

export default Header;