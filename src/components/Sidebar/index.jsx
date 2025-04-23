import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Icons import (you'll need to install react-icons: npm install react-icons)
import {
  RiDashboardLine,
  RiUser3Line,
  RiSettings4Line,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiMessage2Line,
  RiTeamLine,
  RiUserSearchLine,
  RiBarChartBoxLine,
  RiNotification2Line,
  RiBankLine,
  RiGalleryLine,
} from "react-icons/ri";

const Sidebar = ({ viewType }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Define navigation items based on viewType
  const navItems =
    viewType === "admin"
      ? [
          { label: "Dashboard", icon: <RiDashboardLine />, path: "/dashboard" },
          {
            label: "User Management",
            icon: <RiUserSearchLine />,
            path: "/user-management",
          },
          {
            label: "Analytics",
            icon: <RiBarChartBoxLine />,
            path: "/analytics",
          },
          {
            label: "Settings",
            icon: <RiSettings4Line />,
            path: "/admin-settings",
          },
        ]
      : [
          { label: "Dashboard", icon: <RiDashboardLine />, path: "/dashboard" },
          { label: "Profile", icon: <RiUser3Line />, path: "/profile" },
          { label: "Messages", icon: <RiMessage2Line />, path: "/messages" },
          { label: "Friends", icon: <RiTeamLine />, path: "/friends" },
          { label: "Gallery", icon: <RiGalleryLine />, path: "/gallery" },
          {
            label: "Notifications",
            icon: <RiNotification2Line />,
            path: "/notifications",
          },
          { label: "Payments", icon: <RiBankLine />, path: "/payments" },
          { label: "Settings", icon: <RiSettings4Line />, path: "/settings" },
        ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Animation variants
  const sidebarVariants = {
    expanded: {
      width: "240px",
      transition: {
        type: "spring",
        damping: 20,
      },
    },
    collapsed: {
      width: "80px",
      transition: {
        type: "spring",
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="expanded"
      animate={isCollapsed ? "collapsed" : "expanded"}
      className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl border border-indigo-700 h-full flex flex-col"
    >
      <div className="p-3 flex justify-between items-center border-b border-indigo-700">
        <AnimatePresence>
          {!isCollapsed && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-lg md:text-xl font-semibold text-white"
            >
              Navigation
            </motion.h2>
          )}
        </AnimatePresence>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white transition-colors"
        >
          {isCollapsed ? (
            <RiMenuUnfoldLine size={20} />
          ) : (
            <RiMenuFoldLine size={20} />
          )}
        </button>
      </div>

      <nav className="p-2 flex-grow overflow-y-auto">
        <ul className="space-y-1 md:space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center ${
                    isCollapsed ? "justify-center" : "justify-start"
                  } px-3 py-2 md:px-4 md:py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-indigo-200 hover:bg-indigo-700 hover:text-white"
                  }`
                }
              >
                <span className="text-base md:text-lg">{item.icon}</span>
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="ml-3 text-sm md:text-base"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
