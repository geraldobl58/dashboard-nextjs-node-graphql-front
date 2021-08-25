import { gql, useQuery } from '@apollo/client';

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
  const { data, loading, error } = useQuery(GET_USER);

  if (loading) return null;

  const { name } = data.getUser;

  return (
    <div className="flex justify-end">
      <p className="mr-2">{name}</p>

      <button type="button">
        Logout
      </button>
    </div>
  )
}

export default Header;