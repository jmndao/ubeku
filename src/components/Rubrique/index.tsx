import React from "react";

const Rubrique = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex flex-col space-y-2 items-center">
      {/* Icon */}
      {icon}
      <h4 className="text-zinc-900 dark:text-zinc-200 font-semibold">
        {title}
      </h4>
    </div>
  );
};

export default Rubrique;
