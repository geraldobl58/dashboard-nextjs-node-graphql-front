import Sidebar from "../Sidebar"

const Layout = ({ children }) => {
  return (
    <>
      <title>Dashboard Nextjs Node Graphql</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      
      <Sidebar />
      
      {children}
    </>
  )
}

export default Layout;