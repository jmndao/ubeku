import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-zinc-200 dark:bg-zinc-900 flex items-center border-b border-b-zinc-300 dark:border-b-zinc-700 justify-between px-4 z-10">
      {/* Logo  */}
      <div className="w-60">
        <span className="text-lg md:text-2xl lg:text-3xl font-bold text-violet-700">
          Ubeku
        </span>
      </div>

      <div className="flex items-center space-x-6 justify-between flex-grow ml-4">
        {/* NavLinks */}
        <div className="flex items-center space-x-4">
          <NavLink to="movies" label="Movies" activeNavLink={true} />
          <NavLink to="series" label="Series" />
          <NavLink to="theaters" label="Theaters" />
        </div>

        {/* Search Box */}
        <div className="flex items-center rounded-full border border-violet-400 dark:border-violet-600 bg-zinc-300 dark:bg-zinc-700">
          <input
            type="text"
            placeholder="Enter a movie, shows or series..."
            className="outline-none border-none py-1.5 px-2 rounded-l-full text-sm bg-zinc-300 dark:bg-zinc-700 placeholder-zinc-600 dark:placeholder-zinc-200"
          />
          <span className="rounded-full py-1.5 px-3 bg-violet-700 text-neutral-100 text-sm font-bold cursor-pointer hover:bg-violet-600">
            Search
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
