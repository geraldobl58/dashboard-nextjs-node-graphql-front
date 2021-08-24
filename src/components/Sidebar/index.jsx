import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/6 sm:min-h-screen p-5">
      <div>
        <p className="text-white text-2xl font-black uppercase">Dashboard</p>
      </div>

      <nav className="mt-5 list-none">
        <ul>
          <li>
            <Link href="/">
              <a className="text-white mb-2 block">
                Clientes
              </a>
            </Link>
          </li>
          <li>
            <Link href="/orders">
              <a className="text-white mb-2 block">
                Pedidos
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar;