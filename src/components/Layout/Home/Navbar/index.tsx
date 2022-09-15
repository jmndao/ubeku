import React from "react";
import Link from "next/link";
import { Switch } from "@nextui-org/react";
import { Moon, Sun } from "react-feather";
import { useTheme } from "../../../../context/theme/ThemeContext";

const Navbar = () => {
  // Theme Controller
  const { toggleTheme } = useTheme();

  const [stickyClass, setStickyClass] = React.useState("relative");

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80
        ? setStickyClass("fixed top-0 right-0 left-0 z-50")
        : setStickyClass("relative");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <div
      className={`${stickyClass} h-16 ${
        stickyClass === "relative"
          ? "bg-violet-700 shadow-lg shadow-violet-700/50 dark:shadow-violet-500/50 z-10"
          : "bg-transparent"
      }`}
    >
      <div className="w-full h-full px-4 md:px-8 lg:px-16 flex items-center backdrop-blur-sm bg-zinc-800/30 dark:bg-zinc-800/30 shadow-sm dark:shadow-lg shadow-zinc-800/60 dark:shadow-zinc-800/60">
        {/* Nav Logo */}
        <div className="w-60">
          <span className="text-lg bg-zinc-200 px-2.5 py-0.5 md:text-2xl lg:text-3xl font-bold text-violet-700 rounded-sm">
            Ubeku
          </span>
        </div>

        {/* Right Component */}
        <div className="flex flex-grow items-center justify-between space-x-8">
          {/* Nav Items */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-4 lg:space-x-6">
            <Link href="about" passHref>
              <div className="text-zinc-200 font-semibold dark:text-zinc-200 cursor-pointer hover:scale-105 transition-all duration-200">
                Accueil
              </div>
            </Link>
            <Link href="productions" passHref>
              <div className="text-zinc-200 font-semibold dark:text-zinc-200 cursor-pointer hover:scale-105 transition-all duration-200">
                Productions
              </div>
            </Link>
            <Link href="propos" passHref>
              <div className="text-zinc-200 dark:text-zinc-200 font-semibold cursor-pointer hover:scale-105 transition-all duration-200">
                A Propos
              </div>
            </Link>
            <Link href="contact" passHref>
              <div className="text-zinc-200 dark:text-zinc-200 font-semibold cursor-pointer hover:scale-105 transition-all duration-200">
                Nous Contacter
              </div>
            </Link>
          </div>
          {/* Theme Controller */}
          <Switch
            color="secondary"
            bordered
            onChange={toggleTheme}
            checked={true}
            iconOn={<Sun size={20} />}
            iconOff={<Moon size={20} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
