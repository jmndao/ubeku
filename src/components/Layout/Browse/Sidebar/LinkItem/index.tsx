import Link from "next/link";
import React from "react";

type Props = {
  icon: React.ReactNode;
  to: string;
  label: string;
  activeLink: boolean;
  action?: () => void;
};

const LinkItem = ({
  icon,
  to,
  label,
  activeLink,
  action = () => null,
}: Props) => {
  return (
    <Link href={`/${to}`} passHref>
      <div
        className={`flex space-x-3 cursor-pointer hover:pl-1 items-center transition-all duration-200 ${
          activeLink && "font-semibold text-violet-700"
        }`}
        onClick={action}
      >
        {icon}
        <h2 className="text-zinc-900 dark:text-zinc-200 hover:text-violet-700 dark:hover:text-violet-700 w-full py-1 transition-all duration-200 ">
          {label}
        </h2>
      </div>
    </Link>
  );
};

export default LinkItem;
