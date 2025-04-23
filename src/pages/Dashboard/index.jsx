import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  const [viewType, setViewType] = useState("user");

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
          {/* Header - reduced padding and margins */}
          <motion.div
            variants={itemVariants}
            className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-4 md:p-6 mb-3 border border-indigo-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-3 md:mb-0">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white">
                  {viewType === "admin" ? "Admin Dashboard" : "User Dashboard"}
                </h1>
                <p className="text-indigo-300 mt-1 md:mt-2 xl:text-lg">
                  {viewType === "admin"
                    ? "Welcome to the administrator dashboard"
                    : "Welcome to your personal dashboard"}
                </p>
              </div>

              <div className="flex space-x-3 md:space-x-4">
                <button
                  onClick={() => setViewType("user")}
                  className={`px-3 py-2 md:px-4 md:py-2 xl:px-6 xl:py-3 rounded-lg transition-colors duration-200 ${
                    viewType === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-indigo-800 text-indigo-300 hover:bg-indigo-700"
                  }`}
                >
                  User View
                </button>

                <button
                  onClick={() => setViewType("admin")}
                  className={`px-3 py-2 md:px-4 md:py-2 xl:px-6 xl:py-3 rounded-lg transition-colors duration-200 ${
                    viewType === "admin"
                      ? "bg-indigo-600 text-white"
                      : "bg-indigo-800 text-indigo-300 hover:bg-indigo-700"
                  }`}
                >
                  Admin View
                </button>

                <Link
                  to="/"
                  className="bg-indigo-700 hover:bg-indigo-600 text-white px-3 py-2 md:px-4 md:py-2 xl:px-6 xl:py-3 rounded-lg transition-colors duration-200"
                >
                  Logout
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Main content area with sidebar */}
          <div className="flex-grow flex flex-col lg:flex-row gap-3 overflow-hidden">
            {/* Sidebar */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/4 xl:w-1/5 flex-shrink-0 h-full"
            >
              <Sidebar viewType={viewType} />
            </motion.div>

            {/* Main content - with overflow-auto for internal scrolling only */}
            <motion.div variants={itemVariants} className="flex-grow h-full">
              <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-4 md:p-6 xl:p-8 border border-indigo-700 h-full overflow-auto">
                <h2 className="text-xl md:text-2xl xl:text-3xl font-semibold text-white mb-4 md:mb-6 xl:mb-8">
                  {viewType === "admin" ? "Admin Overview" : "Welcome Back!"}
                </h2>

                {viewType === "admin" ? (
                  <div className="space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 xl:gap-6">
                      <StatCard title="Total Users" value="1,254" />
                      <StatCard title="New Users (24h)" value="37" />
                      <StatCard title="Active Sessions" value="328" />
                      <StatCard title="Server Load" value="42%" />
                    </div>

                    <div className="mt-4 md:mt-6 xl:mt-8">
                      <h3 className="text-lg md:text-xl xl:text-2xl font-medium text-white mb-3 md:mb-4 xl:mb-6">
                        Recent Activity
                      </h3>
                      <div className="space-y-2 md:space-y-3 xl:space-y-4">
                        <ActivityItem
                          time="2 minutes ago"
                          message="User johnsmith23 updated their profile"
                        />
                        <ActivityItem
                          time="15 minutes ago"
                          message="New user registration: alice_wonderland"
                        />
                        <ActivityItem
                          time="42 minutes ago"
                          message="Server maintenance completed successfully"
                        />
                        <ActivityItem
                          time="1 hour ago"
                          message="Database backup initiated"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-3 md:p-4 xl:p-6 border border-indigo-600">
                      <p className="text-indigo-200 md:text-base xl:text-lg">
                        Welcome to your personal dashboard! Connect with others
                        and manage your profile from here.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 xl:gap-6">
                      <StatCard title="Friends Online" value="12" />
                      <StatCard title="New Messages" value="5" />
                      <StatCard title="Notifications" value="3" />
                      <StatCard title="Gallery Items" value="87" />
                    </div>

                    <div className="mt-4 md:mt-6 xl:mt-8">
                      <h3 className="text-lg md:text-xl xl:text-2xl font-medium text-white mb-3 md:mb-4 xl:mb-6">
                        Recent Activity
                      </h3>
                      <div className="space-y-2 md:space-y-3 xl:space-y-4">
                        <ActivityItem
                          time="5 minutes ago"
                          message="MaxGamer42 is now online"
                        />
                        <ActivityItem
                          time="30 minutes ago"
                          message="Gaming Club sent you an invite"
                        />
                        <ActivityItem
                          time="2 hours ago"
                          message="Sarah sent you a friend request"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Helper components
const StatCard = ({ title, value }) => (
  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-3 md:p-4 xl:p-6 border border-indigo-600">
    <p className="text-indigo-300 text-xs md:text-sm xl:text-base">{title}</p>
    <p className="text-white text-xl md:text-2xl xl:text-3xl font-bold mt-1">
      {value}
    </p>
  </div>
);

const ActivityItem = ({ time, message }) => (
  <div className="border-b border-indigo-700 pb-2 md:pb-3 xl:pb-4">
    <p className="text-white text-sm md:text-base xl:text-lg">{message}</p>
    <p className="text-indigo-400 text-xs md:text-sm xl:text-base mt-1">
      {time}
    </p>
  </div>
);

export default Dashboard;
