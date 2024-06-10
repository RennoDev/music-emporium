import { Home, ListMusic, TrendingUp, User } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <div className="flex justify-center">
        <nav className="flex justify-center items-center gap-x-6 px-5 py-2 border rounded-full border-containerBg bg-containerBg shadow-[rgba(255,255,255,0.13)] shadow-inner">
          <NavLink
            to="/"
            className="flex flex-col items-center text-white hover:text-primary/80"
          >
            <Home />
            Home
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
            Trending
          </NavLink>
          <NavLink
            to="/profile"
            className="flex flex-col items-center text-white hover:text-primary/80"
          >
            <User />
            Profile
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
      <Outlet />
    </div>
  );
}
