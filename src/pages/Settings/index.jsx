import React, { useState } from "react";
import {
  RiLockLine,
  RiNotification2Line,
  RiGlobalLine,
  RiUser3Line,
  RiPaletteLine,
  RiDeviceLine,
  RiShieldLine,
} from "react-icons/ri";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const settingsSections = [
    { id: "profile", name: "Profile", icon: <RiUser3Line /> },
    { id: "account", name: "Account", icon: <RiShieldLine /> },
    { id: "privacy", name: "Privacy", icon: <RiLockLine /> },
    {
      id: "notifications",
      name: "Notifications",
      icon: <RiNotification2Line />,
    },
    { id: "appearance", name: "Appearance", icon: <RiPaletteLine /> },
    { id: "devices", name: "Devices", icon: <RiDeviceLine /> },
    { id: "language", name: "Language & Region", icon: <RiGlobalLine /> },
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6">Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="md:col-span-1">
          <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-4 border border-indigo-700">
            <ul className="space-y-2">
              {settingsSections.map((section) => (
                <li key={section.id}>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${
                      activeSection === section.id
                        ? "bg-indigo-600 text-white"
                        : "text-indigo-300 hover:bg-indigo-700 hover:text-white"
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <span className="mr-3">{section.icon}</span>
                    <span>{section.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Settings Content */}
        <div className="md:col-span-3">
          <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-6 border border-indigo-700">
            {/* Profile Settings */}
            {activeSection === "profile" && (
              <div>
                <h3 className="text-xl font-medium text-white mb-6">
                  Profile Settings
                </h3>

                <div className="space-y-6">
                  {/* Profile Picture */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
                      JD
                    </div>
                    <div className="space-y-2">
                      <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
                        Upload New Picture
                      </button>
                      <button className="px-4 py-2 bg-indigo-800 hover:bg-indigo-700 text-indigo-300 rounded-lg transition-colors">
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-indigo-300 mb-2">
                        Display Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-indigo-300 mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        defaultValue="johndoe"
                        className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-indigo-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue="johndoe@example.com"
                        className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-indigo-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-indigo-300 mb-2">Bio</label>
                    <textarea
                      rows="4"
                      defaultValue="Frontend developer with a passion for creating beautiful and functional user interfaces. I love working with React and exploring new web technologies."
                      className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                  </div>

                  <div className="pt-4 border-t border-indigo-700 flex justify-end">
                    <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeSection === "privacy" && (
              <div>
                <h3 className="text-xl font-medium text-white mb-6">
                  Privacy Settings
                </h3>

                <div className="space-y-6">
                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">
                          Profile Visibility
                        </h4>
                        <p className="text-indigo-300 text-sm mt-1">
                          Control who can see your profile information
                        </p>
                      </div>
                      <select className="bg-indigo-800 text-white border border-indigo-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>Everyone</option>
                        <option>Friends Only</option>
                        <option>Private</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">
                          Online Status
                        </h4>
                        <p className="text-indigo-300 text-sm mt-1">
                          Show your online status to others
                        </p>
                      </div>
                      <div className="relative inline-block w-12 h-6 ml-2">
                        <input
                          type="checkbox"
                          id="toggle-online"
                          className="opacity-0 w-0 h-0"
                          defaultChecked
                        />
                        <label
                          htmlFor="toggle-online"
                          className="block absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-indigo-600 rounded-full transition-colors before:absolute before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-transform checked:before:translate-x-6"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">
                          Friend Requests
                        </h4>
                        <p className="text-indigo-300 text-sm mt-1">
                          Who can send you friend requests
                        </p>
                      </div>
                      <select className="bg-indigo-800 text-white border border-indigo-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>Everyone</option>
                        <option>Friends of Friends</option>
                        <option>Nobody</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">
                          Two-Factor Authentication
                        </h4>
                        <p className="text-indigo-300 text-sm mt-1">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <button className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors text-sm">
                        Enable
                      </button>
                    </div>
                  </div>

                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">
                          Activity Status
                        </h4>
                        <p className="text-indigo-300 text-sm mt-1">
                          Show others what you're doing
                        </p>
                      </div>
                      <div className="relative inline-block w-12 h-6 ml-2">
                        <input
                          type="checkbox"
                          id="toggle-activity"
                          className="opacity-0 w-0 h-0"
                          defaultChecked
                        />
                        <label
                          htmlFor="toggle-activity"
                          className="block absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-indigo-600 rounded-full transition-colors before:absolute before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-transform checked:before:translate-x-6"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-indigo-700 flex justify-end">
                    <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Account Settings */}
            {activeSection === "account" && (
              <div>
                <h3 className="text-xl font-medium text-white mb-6">
                  Account Settings
                </h3>

                <div className="space-y-6">
                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-5 border border-indigo-600">
                    <h4 className="text-white font-medium mb-4">
                      Change Password
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-indigo-300 mb-2">
                          Current Password
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-indigo-300 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-indigo-300 mb-2">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="pt-2">
                        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
                          Update Password
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-5 border border-indigo-600">
                    <h4 className="text-white font-medium mb-2">
                      Account Verification
                    </h4>
                    <p className="text-indigo-300 mb-4">
                      Your account is verified
                    </p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mr-3">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-white">Email verified</span>
                    </div>
                  </div>

                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-5 border border-indigo-600">
                    <h4 className="text-white font-medium mb-4">
                      Linked Accounts
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-xs font-bold">
                              f
                            </span>
                          </div>
                          <span className="text-white">Facebook</span>
                        </div>
                        <button className="px-3 py-1 bg-indigo-800 hover:bg-indigo-700 text-indigo-300 rounded-lg transition-colors text-sm">
                          Connect
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-xs font-bold">
                              t
                            </span>
                          </div>
                          <span className="text-white">Twitter</span>
                        </div>
                        <button className="px-3 py-1 bg-indigo-800 hover:bg-indigo-700 text-indigo-300 rounded-lg transition-colors text-sm">
                          Connect
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-xs font-bold">
                              g
                            </span>
                          </div>
                          <span className="text-white">Google</span>
                        </div>
                        <button className="px-3 py-1 bg-red-800 hover:bg-red-700 text-red-300 rounded-lg transition-colors text-sm">
                          Disconnect
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-900 bg-opacity-30 rounded-lg p-5 border border-red-800">
                    <h4 className="text-white font-medium mb-2">Danger Zone</h4>
                    <p className="text-red-300 mb-4">
                      Permanently delete your account and all its data
                    </p>
                    <button className="px-4 py-2 bg-red-800 hover:bg-red-700 text-red-200 rounded-lg transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Display other settings sections with placeholders */}
            {["notifications", "appearance", "devices", "language"].includes(
              activeSection
            ) && (
              <div>
                <h3 className="text-xl font-medium text-white mb-6">
                  {settingsSections.find((s) => s.id === activeSection).name}{" "}
                  Settings
                </h3>

                <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-6 border border-indigo-600">
                  <p className="text-indigo-200">
                    This settings section is under development.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
