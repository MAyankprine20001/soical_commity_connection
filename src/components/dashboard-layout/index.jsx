import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar";

const DashboardLayout = ({ children }) => {
  const location = useLocation();

  const [viewType, setViewType] = useState(() => {
    const adminPaths = ["/user-management", "/analytics", "/admin-settings"];
    return adminPaths.some((path) => location.pathname.startsWith(path))
      ? "admin"
      : "user";
  });

 
  useEffect(() => {
    const adminPaths = ["/user-management", "/analytics", "/admin-settings"];
    const newViewType = adminPaths.some((path) =>
      location.pathname.startsWith(path)
    )
      ? "admin"
      : "user";
    setViewType(newViewType);
  }, [location]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      <div className="h-full w-full flex flex-col p-3">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full w-full"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-4 mb-3 border border-indigo-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-3 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  {viewType === "admin" ? "Admin Dashboard" : "User Dashboard"}
                </h1>
                <p className="text-indigo-300 mt-1">
                  {viewType === "admin"
                    ? "Welcome to the administrator dashboard"
                    : "Welcome to your personal dashboard"}
                </p>
              </div>

              <div className="flex space-x-3">
                <Link
                  to="/dashboard"
                  className="bg-indigo-700 hover:bg-indigo-600 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                >
                  Dashboard
                </Link>
                <Link
                  to="/"
                  className="bg-indigo-700 hover:bg-indigo-600 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                >
                  Logout
                </Link>
              </div>
            </div>
          </motion.div>

          
          <div className="flex-grow flex flex-col lg:flex-row gap-3 overflow-hidden">
            
            <motion.div
              variants={itemVariants}
              className="lg:w-auto flex-shrink-0 h-full"
            >
              <Sidebar viewType={viewType} />
            </motion.div>

       
            <motion.div variants={itemVariants} className="flex-grow h-full">
              <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-4 border border-indigo-700 h-full overflow-auto">
                {children}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardLayout;
0