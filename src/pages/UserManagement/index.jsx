import React, { useState } from "react";
import {
  RiUserAddLine,
  RiSearch2Line,
  RiFilterLine,
  RiUserSettingsLine,
  RiDeleteBin6Line,
} from "react-icons/ri";

const UserManagement = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Mock user data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "User",
      status: "Active",
      lastLogin: "2 hours ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "1 day ago",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      role: "User",
      status: "Inactive",
      lastLogin: "3 weeks ago",
    },
    {
      id: 4,
      name: "Lisa Johnson",
      email: "lisa@example.com",
      role: "Moderator",
      status: "Active",
      lastLogin: "5 hours ago",
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "robert@example.com",
      role: "User",
      status: "Banned",
      lastLogin: "2 months ago",
    },
    {
      id: 6,
      name: "Emily Davis",
      email: "emily@example.com",
      role: "User",
      status: "Active",
      lastLogin: "Just now",
    },
  ];

  const toggleUserSelection = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-500";
      case "Inactive":
        return "bg-yellow-500";
      case "Banned":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6">
        User Management
      </h2>

      <div className="space-y-6">
        {/* Action Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
          {/* Search */}
          <div className="relative w-full md:w-auto">
            <RiSearch2Line className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-300" />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 bg-indigo-800 bg-opacity-50 text-white rounded-lg border border-indigo-600 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 w-full md:w-auto justify-center md:justify-end">
            <button className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
              <RiFilterLine className="mr-2" />
              Filter
            </button>
            <button className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
              <RiUserAddLine className="mr-2" />
              Add User
            </button>
            <button
              className={`flex items-center px-4 py-2 ${
                selectedUsers.length > 0
                  ? "bg-red-600 hover:bg-red-500"
                  : "bg-red-800 opacity-50 cursor-not-allowed"
              } text-white rounded-lg transition-colors`}
              disabled={selectedUsers.length === 0}
            >
              <RiDeleteBin6Line className="mr-2" />
              Delete
            </button>
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-indigo-800 text-indigo-200 border-b border-indigo-700">
              <tr>
                <th className="p-4">
                  <input
                    type="checkbox"
                    className="rounded bg-indigo-700"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedUsers(users.map((user) => user.id));
                      } else {
                        setSelectedUsers([]);
                      }
                    }}
                    checked={
                      selectedUsers.length === users.length && users.length > 0
                    }
                  />
                </th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4">Last Login</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-indigo-700 hover:bg-indigo-800 hover:bg-opacity-50"
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="rounded bg-indigo-700"
                      onChange={() => toggleUserSelection(user.id)}
                      checked={selectedUsers.includes(user.id)}
                    />
                  </td>
                  <td className="p-4 text-white">{user.name}</td>
                  <td className="p-4 text-indigo-300">{user.email}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-indigo-700 bg-opacity-40 rounded text-indigo-200 text-sm">
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <span
                        className={`w-2 h-2 rounded-full mr-2 ${getStatusColor(
                          user.status
                        )}`}
                      ></span>
                      <span className="text-indigo-200">{user.status}</span>
                    </div>
                  </td>
                  <td className="p-4 text-indigo-300">{user.lastLogin}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="p-1 text-indigo-300 hover:text-white transition-colors">
                        <RiUserSettingsLine size={20} />
                      </button>
                      <button className="p-1 text-indigo-300 hover:text-red-400 transition-colors">
                        <RiDeleteBin6Line size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center pt-4">
          <div className="text-indigo-300">
            Showing <span className="text-white">1</span> to{" "}
            <span className="text-white">6</span> of{" "}
            <span className="text-white">6</span> users
          </div>
          <div className="flex space-x-1">
            <button className="px-3 py-1 bg-indigo-800 text-indigo-300 rounded border border-indigo-700 hover:bg-indigo-700 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded border border-indigo-500">
              1
            </button>
            <button className="px-3 py-1 bg-indigo-800 text-indigo-300 rounded border border-indigo-700 hover:bg-indigo-700 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
