import React from "react";
import {
  AtSymbolOutline,
  BookmarkAlt,
  BookOpen,
  ChartPie,
  Collection,
  Cube,
  CubeTransparent,
  CursorClick,
  DeviceTablet,
  Film,
  Home,
  Logout,
  Moon,
  PresentationChartLine,
  Sun,
  User,
} from "heroicons-react";
import LinkItem from "./LinkItem";
import { Switch } from "@nextui-org/react";
import { useTheme } from "../../../../context/theme/ThemeContext";

const Divider = () => {
  return (
    <div className="w-1/4 h-px bg-zinc-300 dark:bg-zinc-700 rounded-md shadow-lg shadow-slate-300 my-1" />
  );
};

const Sidebar = ({ open = true }) => {
  const { dark, toggleTheme } = useTheme();
  console.log(open);
  return (
    <div
      className={`w-60 lg:w-64 h-screen fixed mt-12 top-0 left-0 bg-zinc-200 dark:bg-zinc-900 px-4 md:py-8 border-r border-zinc-300 dark:border-zinc-700 overflow-y-scroll`}
    >
      <div className="w-full h-auto flex flex-col space-y-4 ">
        <div className="flex flex-col space-y-1.5">
          <h3 className="text-violet-700 font-semibold">Navigations</h3>
          <div className="flex flex-col space-y-0.5 ml-2">
            <LinkItem
              to=""
              icon={
                <Home size={18} className="text-zinc-900 dark:text-zinc-200" />
              }
              label={"Home"}
              activeLink={false}
            />
            <LinkItem
              to="studio"
              icon={
                <Collection
                  size={18}
                  className="text-zinc-900 dark:text-zinc-200"
                />
              }
              label={"Studio"}
              activeLink={false}
            />
            <LinkItem
              to="services"
              icon={
                <ChartPie
                  size={18}
                  className="text-zinc-900 dark:text-zinc-200"
                />
              }
              label={"Services"}
              activeLink={false}
            />
            <LinkItem
              to="portfolio"
              icon={
                <DeviceTablet
                  size={18}
                  className="text-zinc-900 dark:text-zinc-200"
                />
              }
              label={"Portfolio"}
              activeLink={false}
            />
          </div>
        </div>

        <Divider />

        <div className="flex flex-col space-y-1.5">
          <h3 className="text-violet-700 font-semibold">Post-Productions</h3>
          <div className="flex flex-col space-y-0.5 ml-2">
            <LinkItem
              to="scenarizations"
              icon={
                <BookOpen
                  size={18}
                  className="text-zinc-900 dark:text-zinc-200"
                />
              }
              label={"Scénarisation"}
              activeLink={false}
            />
            <LinkItem
              to="realization"
              icon={
                <BookmarkAlt
                  size={18}
                  className="text-zinc-900 dark:text-zinc-200"
                />
              }
              label={"Réalisation"}
              activeLink={false}
            />
            <LinkItem
              to="production"
              icon={
                <Cube size={18} className="text-zinc-900 dark:text-zinc-200" />
              }
              label={"Productions"}
              activeLink={false}
            />
            <LinkItem
              to="post-production"
              icon={
                <CubeTransparent
                  size={18}
                  className="text-zinc-900 dark:text-zinc-200"
                />
              }
              label={"Post-Productions"}
              activeLink={false}
            />
          </div>
        </div>

        <Divider />

        <div className="flex flex-col space-y-1.5">
          <h3 className="text-violet-700 font-semibold">Média</h3>
          <div className="flex flex-col space-y-0.5 ml-2">
            <LinkItem
              to="cinema"
              icon={
                <Film size={18} className="text-zinc-900 dark:text-zinc-200" />
              }
              label={"Cinema"}
              activeLink={false}
            />
            <LinkItem
              to="communication-360"
              icon={
                <CursorClick
                  size={18}
                  className="text-zinc-900 dark:text-zinc-200"
                />
              }
              label={"Communication 360°"}
              activeLink={false}
            />
            <LinkItem
              to="marketing-corporate"
              icon={
                <PresentationChartLine
                  size={18}
                  className="text-zinc-900 dark:text-zinc-200"
                />
              }
              label={"Marketing Corporate"}
              activeLink={false}
            />
          </div>
        </div>

        <Divider />

        <div className="flex flex-col space-y-1.5">
          <h3 className="text-violet-700 font-semibold">Settings</h3>
          <div className="flex flex-col space-y-0.5 ml-2">
            <LinkItem
              to="account"
              icon={
                <AtSymbolOutline
                  size={18}
                  className="text-zinc-900 dark:text-zinc-200"
                />
              }
              label={"My Account"}
              activeLink={false}
            />
            <LinkItem
              to="profile"
              icon={
                <User size={18} className="text-zinc-900 dark:text-zinc-200" />
              }
              label={"Profile"}
              activeLink={false}
            />
            <LinkItem
              to="sign-out"
              icon={
                <Logout
                  size={18}
                  className="text-zinc-900 dark:text-zinc-200"
                />
              }
              label={"Sign Out"}
              activeLink={false}
              action={() => console.log("Sign Out")}
            />
          </div>
        </div>

        <Divider />

        <div className="flex flex-col space-y-2">
          <h3 className="text-violet-700 font-semibold">Theme</h3>
          <div className="flex items-center space-x-4">
            <h3 className="text-slate-800 dark:text-slate-200">
              {dark ? "Dark" : "Light"}
            </h3>
            <Switch
              shadow
              color={"secondary"}
              size={"md"}
              iconOn={<Sun size={16} />}
              iconOff={<Moon size={16} />}
              onChange={toggleTheme}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
