import React from "react";
import Link from "next/link";

type Props = {
  to: string;
  label: string;
  activeNavLink?: boolean;
};

const NavLink = ({ to, label, activeNavLink = false }: Props) => {
  return (
    <Link href={`/${to}`} passHref>
      <h3
        className={`text-zinc-900 dark:text-zinc-200 cursor-pointer hover:scale-105 transition-all duration-200 ${
          activeNavLink && "text-violet-700 dark:text-violet-700"
        }`}
      >
        {label}
      </h3>
    </Link>
  );
};

export default NavLink;
