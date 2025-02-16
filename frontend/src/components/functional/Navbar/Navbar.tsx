import { useLocation, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Bell, DoorOpen, User } from "@phosphor-icons/react";
import Searchbar from "../Searchbar/Searchbar";
import { publicRoutes } from "../../../routes/routes";
import IconView from "../../ui/Icon/IconView";

const Navbar = () => {
  
  const tabs = publicRoutes;
  
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("community");

  useEffect(() => {
    const active = tabs.find((tab) => tab.link === location.pathname);
    if (active) setActiveTab(active.id);
  }, [location.pathname]); 

  const loggedIn = false;

  return (
    <div className="bg-primary text-text-light grid col-span-3 grid-flow-col py-1 px-20 fixed top-0 w-full z-10">
      <div className="flex items-center gap-2">
        <DoorOpen weight="fill" height={50} width={40} className="cursor-pointer" />
        <Searchbar />
      </div>

      <div className="flex items-center gap-2">
        {tabs.map((tab) => (
          <NavLink key={tab.id} to={tab.link}>
            <div
              className={`relative flex flex-col items-center justify-center gap-0.5 w-18 px-2 py-0.5 cursor-pointer transition-colors ${
                activeTab === tab.id ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              <IconView icon={tab.icon} size={24} weight="fill" />
              <h1 className="text-xs">{tab.label}</h1>

              <div
                className={`absolute bottom-0 left-1/2 h-0.5 bg-text-light transition-transform duration-300 ${
                  activeTab === tab.id ? "scale-x-100" : "scale-x-0"
                } w-full transform -translate-x-1/2 origin-center`}
              />
            </div>
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-4 justify-end">
        {loggedIn ? (
          <>
            <Bell weight="fill" size={24} className="text-text-light cursor-pointer" />
            <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center">
              <User size={20} className="text-text-light cursor-pointer" />
            </div>
          </>
        ) : (
          <>
            <button className="text-white cursor-pointer hover:bg-primary-light transition-colors duration-300 px-4 py-2 rounded-lg">
              Sign In
            </button>
            <button className="text-white cursor-pointer bg-secondary px-4 py-2 rounded-lg">
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;