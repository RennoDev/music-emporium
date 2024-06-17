import { Bolt, Home, ListMusic, TrendingUp } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <div className="flex justify-center">
        <nav className="flex justify-center items-center gap-x-6 px-5 py-2 border rounded-full border-myGray bg-myGray shadow-[rgba(255,255,255,0.13)] shadow-inner">
          <NavLink
            to="/"
            className="flex flex-col items-center text-white hover:text-primary/80"
          >
            <Home />
            Início
          </NavLink>
          <NavLink
            to="/playlist"
            className="flex flex-col items-center text-white hover:text-primary/80"
          >
            <ListMusic />
            Playlist
          </NavLink>
          <NavLink
            to="/trending"
            className="flex flex-col items-center text-white hover:text-primary/80"
          >
            <TrendingUp />
            Em Alta
          </NavLink>
          <NavLink
            to="/options"
            className="flex flex-col items-center text-white hover:text-primary/80"
          >
            <Bolt />
            Opções
          </NavLink>
          {/* <NavLink
          to=""
          onClick={() => {}}
          className="flex flex-col items-center text-white hover:text-primary/80"
        >
          <Search />
          Search
        </NavLink> */}
        </nav>
      </div>
      {/* Tag para separar o conteúdo persistente do variável */}
      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}
