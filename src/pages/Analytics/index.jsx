import React, { useState } from "react";
import { RiDownload2Line, RiRefreshLine, RiCalendarLine } from "react-icons/ri";

const Analytics = () => {
  const [timeframe, setTimeframe] = useState("week");

  // Mock chart data
  const userStats = {
    totalUsers: 1254,
    activeUsers: 843,
    newUsers: {
      daily: 37,
      weekly: 126,
      monthly: 378,
    },
    growth: "+12.3%",
    userChart: [320, 340, 360, 405, 450, 520, 550, 585, 620, 680, 720, 754],
  };

  const engagementStats = {
    averageSessionTime: "12m 24s",
    pagesPerSession: 4.7,
    bounceRate: "32.8%",
    engagementChart: [68, 72, 80, 74, 75, 72, 65, 70, 74, 82, 85, 78],
  };

  const contentStats = {
    totalContent: 2874,
    avgInteractionsPerContent: 24.6,
    topContentCategory: "Tutorials",
    contentChart: [180, 210, 240, 280, 300, 340, 390, 405, 426, 440, 460, 488],
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6">
        Analytics Dashboard
      </h2>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between">
        <div className="flex items-center">
          <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow overflow-hidden flex">
            <button
              className={`px-4 py-2 ${
                timeframe === "day"
                  ? "bg-indigo-600 text-white"
                  : "text-indigo-300 hover:bg-indigo-700 hover:text-white"
              }`}
              onClick={() => setTimeframe("day")}
            >
              Day
            </button>
            <button
              className={`px-4 py-2 ${
                timeframe === "week"
                  ? "bg-indigo-600 text-white"
                  : "text-indigo-300 hover:bg-indigo-700 hover:text-white"
              }`}
              onClick={() => setTimeframe("week")}
            >
              Week
            </button>
            <button
              className={`px-4 py-2 ${
                timeframe === "month"
                  ? "bg-indigo-600 text-white"
                  : "text-indigo-300 hover:bg-indigo-700 hover:text-white"
              }`}
              onClick={() => setTimeframe("month")}
            >
              Month
            </button>
            <button
              className={`px-4 py-2 ${
                timeframe === "year"
                  ? "bg-indigo-600 text-white"
                  : "text-indigo-300 hover:bg-indigo-700 hover:text-white"
              }`}
              onClick={() => setTimeframe("year")}
            >
              Year
            </button>
          </div>

          <button className="ml-2 p-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg transition-colors">
            <RiCalendarLine size={20} />
          </button>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg transition-colors">
            <RiRefreshLine className="mr-2" />
            Refresh
          </button>
          <button className="flex items-center px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg transition-colors">
            <RiDownload2Line className="mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-6 border border-indigo-700">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-white">Users</h3>
              <p className="text-indigo-300 text-sm">Overall user statistics</p>
            </div>
            <div className="bg-green-900 text-green-400 px-2 py-1 rounded-lg text-sm">
              {userStats.growth}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-indigo-300 text-sm">Total Users</p>
              <p className="text-white text-2xl font-bold">
                {userStats.totalUsers}
              </p>
            </div>
            <div>
              <p className="text-indigo-300 text-sm">Active Users</p>
              <p className="text-white text-2xl font-bold">
                {userStats.activeUsers}
              </p>
            </div>
            <div>
              <p className="text-indigo-300 text-sm">New Users ({timeframe})</p>
              <p className="text-white text-2xl font-bold">
                {timeframe === "day"
                  ? userStats.newUsers.daily
                  : timeframe === "week"
                  ? userStats.newUsers.weekly
                  : userStats.newUsers.monthly}
              </p>
            </div>
            <div>
              <p className="text-indigo-300 text-sm">Retention Rate</p>
              <p className="text-white text-2xl font-bold">67.4%</p>
            </div>
          </div>

          <div className="h-20 mt-6">
            {/* This would be a chart - showing simplified representation */}
            <div className="w-full h-full flex items-end">
              {userStats.userChart.map((value, index) => (
                <div
                  key={index}
                  className="flex-grow bg-indigo-500 mx-px rounded-t-sm"
                  style={{
                    height: `${
                      (value / Math.max(...userStats.userChart)) * 100
                    }%`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-6 border border-indigo-700">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-white">Engagement</h3>
            <p className="text-indigo-300 text-sm">User interaction metrics</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-indigo-300 text-sm">Avg. Session Time</p>
              <p className="text-white text-2xl font-bold">
                {engagementStats.averageSessionTime}
              </p>
            </div>
            <div>
              <p className="text-indigo-300 text-sm">Pages per Session</p>
              <p className="text-white text-2xl font-bold">
                {engagementStats.pagesPerSession}
              </p>
            </div>
            <div>
              <p className="text-indigo-300 text-sm">Bounce Rate</p>
              <p className="text-white text-2xl font-bold">
                {engagementStats.bounceRate}
              </p>
            </div>
            <div>
              <p className="text-indigo-300 text-sm">User Satisfaction</p>
              <p className="text-white text-2xl font-bold">92%</p>
            </div>
          </div>

          <div className="h-20 mt-6">
            {/* This would be a chart - showing simplified representation */}
            <div className="w-full h-full flex items-end">
              {engagementStats.engagementChart.map((value, index) => (
                <div
                  key={index}
                  className="flex-grow bg-green-500 mx-px rounded-t-sm"
                  style={{
                    height: `${
                      (value / Math.max(...engagementStats.engagementChart)) *
                      100
                    }%`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-6 border border-indigo-700">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-white">
              Content Performance
            </h3>
            <p className="text-indigo-300 text-sm">
              Content engagement metrics
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-indigo-300 text-sm">Total Content</p>
              <p className="text-white text-2xl font-bold">
                {contentStats.totalContent}
              </p>
            </div>
            <div>
              <p className="text-indigo-300 text-sm">Avg. Interactions</p>
              <p className="text-white text-2xl font-bold">
                {contentStats.avgInteractionsPerContent}
              </p>
            </div>
            <div>
              <p className="text-indigo-300 text-sm">Top Category</p>
              <p className="text-white text-lg font-bold">
                {contentStats.topContentCategory}
              </p>
            </div>
            <div>
              <p className="text-indigo-300 text-sm">Content Growth</p>
              <p className="text-white text-2xl font-bold">+8.2%</p>
            </div>
          </div>

          <div className="h-20 mt-6">
            {/* This would be a chart - showing simplified representation */}
            <div className="w-full h-full flex items-end">
              {contentStats.contentChart.map((value, index) => (
                <div
                  key={index}
                  className="flex-grow bg-purple-500 mx-px rounded-t-sm"
                  style={{
                    height: `${
                      (value / Math.max(...contentStats.contentChart)) * 100
                    }%`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-6 border border-indigo-700 mb-6">
        <h3 className="text-lg font-medium text-white mb-6">Traffic Sources</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-indigo-700 text-indigo-200 border-b border-indigo-600">
              <tr>
                <th className="p-3">Source</th>
                <th className="p-3">Users</th>
                <th className="p-3">New Users</th>
                <th className="p-3">Sessions</th>
                <th className="p-3">Bounce Rate</th>
                <th className="p-3">Avg. Session</th>
                <th className="p-3">Conversion</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-indigo-700 hover:bg-indigo-700 hover:bg-opacity-30">
                <td className="p-3 font-medium text-white">Direct</td>
                <td className="p-3 text-indigo-300">428</td>
                <td className="p-3 text-indigo-300">128</td>
                <td className="p-3 text-indigo-300">582</td>
                <td className="p-3 text-indigo-300">24.6%</td>
                <td className="p-3 text-indigo-300">10m 18s</td>
                <td className="p-3">
                  <div className="w-full bg-indigo-900 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-indigo-700 hover:bg-indigo-700 hover:bg-opacity-30">
                <td className="p-3 font-medium text-white">Search</td>
                <td className="p-3 text-indigo-300">382</td>
                <td className="p-3 text-indigo-300">153</td>
                <td className="p-3 text-indigo-300">495</td>
                <td className="p-3 text-indigo-300">32.1%</td>
                <td className="p-3 text-indigo-300">8m 42s</td>
                <td className="p-3">
                  <div className="w-full bg-indigo-900 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "52%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-indigo-700 hover:bg-indigo-700 hover:bg-opacity-30">
                <td className="p-3 font-medium text-white">Social</td>
                <td className="p-3 text-indigo-300">256</td>
                <td className="p-3 text-indigo-300">210</td>
                <td className="p-3 text-indigo-300">312</td>
                <td className="p-3 text-indigo-300">42.8%</td>
                <td className="p-3 text-indigo-300">5m 36s</td>
                <td className="p-3">
                  <div className="w-full bg-indigo-900 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "42%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-indigo-700 hover:bg-indigo-700 hover:bg-opacity-30">
                <td className="p-3 font-medium text-white">Referral</td>
                <td className="p-3 text-indigo-300">164</td>
                <td className="p-3 text-indigo-300">87</td>
                <td className="p-3 text-indigo-300">245</td>
                <td className="p-3 text-indigo-300">18.5%</td>
                <td className="p-3 text-indigo-300">12m 10s</td>
                <td className="p-3">
                  <div className="w-full bg-indigo-900 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-indigo-700 hover:bg-opacity-30">
                <td className="p-3 font-medium text-white">Email</td>
                <td className="p-3 text-indigo-300">98</td>
                <td className="p-3 text-indigo-300">24</td>
                <td className="p-3 text-indigo-300">136</td>
                <td className="p-3 text-indigo-300">12.2%</td>
                <td className="p-3 text-indigo-300">14m 32s</td>
                <td className="p-3">
                  <div className="w-full bg-indigo-900 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "86%" }}
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Real-time Data */}
      <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-6 border border-indigo-700">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-medium text-white">
              Real-time Activity
            </h3>
            <p className="text-indigo-300 text-sm">
              Current active users and actions
            </p>
          </div>
          <div className="text-sm bg-green-900 text-green-400 px-2 py-1 rounded-lg flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            328 users online
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-3 bg-indigo-700 bg-opacity-30 rounded-lg border border-indigo-600 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <div className="flex-grow">
              <p className="text-white">
                User johnsmith23 updated their profile
              </p>
              <p className="text-indigo-400 text-xs">2 seconds ago</p>
            </div>
          </div>

          <div className="p-3 bg-indigo-700 bg-opacity-30 rounded-lg border border-indigo-600 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <div className="flex-grow">
              <p className="text-white">
                New user registration: alice_wonderland
              </p>
              <p className="text-indigo-400 text-xs">15 seconds ago</p>
            </div>
          </div>

          <div className="p-3 bg-indigo-700 bg-opacity-30 rounded-lg border border-indigo-600 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <div className="flex-grow">
              <p className="text-white">
                User max_power viewed the premium plans page
              </p>
              <p className="text-indigo-400 text-xs">42 seconds ago</p>
            </div>
          </div>

          <div className="p-3 bg-indigo-700 bg-opacity-30 rounded-lg border border-indigo-600 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <div className="flex-grow">
              <p className="text-white">User techguru99 completed a purchase</p>
              <p className="text-indigo-400 text-xs">1 minute ago</p>
            </div>
          </div>

          <div className="p-3 bg-indigo-700 bg-opacity-30 rounded-lg border border-indigo-600 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <div className="flex-grow">
              <p className="text-white">
                User sarah_j logged in from a new device
              </p>
              <p className="text-indigo-400 text-xs">2 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
