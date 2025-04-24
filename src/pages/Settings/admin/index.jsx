import React, { useState } from "react";
import {
  RiLockLine,
  RiGlobalLine,
  RiMailSettingsLine,
  RiCodeSSlashLine,
  RiDatabase2Line,
  RiServerLine,
} from "react-icons/ri";

const AdminSettings = () => {
  const [activeSection, setActiveSection] = useState("general");

  const settingsSections = [
    { id: "general", name: "General", icon: <RiGlobalLine /> },
    { id: "security", name: "Security", icon: <RiLockLine /> },
    { id: "email", name: "Email", icon: <RiMailSettingsLine /> },
    { id: "api", name: "API Settings", icon: <RiCodeSSlashLine /> },
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6">Admin Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
       
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

            <div className="mt-6 pt-6 border-t border-indigo-700">
              <div className="px-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-indigo-300 flex items-center">
                    <RiDatabase2Line className="mr-2" />
                    Database
                  </span>
                  <span className="text-green-400 text-sm">Connected</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-300 flex items-center">
                    <RiServerLine className="mr-2" />
                    Server
                  </span>
                  <span className="text-green-400 text-sm">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="md:col-span-3">
          <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-6 border border-indigo-700">
           
            {activeSection === "general" && (
              <div>
                <h3 className="text-xl font-medium text-white mb-6">
                  General Settings
                </h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-indigo-300 mb-2">
                        Site Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Dashboard Portal"
                        className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-indigo-300 mb-2">
                        Support Email
                      </label>
                      <input
                        type="email"
                        defaultValue="support@example.com"
                        className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-indigo-300 mb-2">
                      Timezone
                    </label>
                    <select className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>UTC (Coordinated Universal Time)</option>
                      <option>EST (Eastern Standard Time)</option>
                      <option>CST (Central Standard Time)</option>
                      <option>MST (Mountain Standard Time)</option>
                      <option>PST (Pacific Standard Time)</option>
                      <option>IST (Indian Standard Time)</option>
                    </select>
                  </div>

                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">
                          Maintenance Mode
                        </h4>
                        <p className="text-indigo-300 text-sm mt-1">
                          Put the site in maintenance mode for all users
                        </p>
                      </div>
                      <div className="relative inline-block w-12 h-6 ml-2">
                        <input
                          type="checkbox"
                          id="toggle-maintenance"
                          className="opacity-0 w-0 h-0"
                        />
                        <label
                          htmlFor="toggle-maintenance"
                          className="block absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-indigo-600 rounded-full transition-colors before:absolute before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-transform checked:before:translate-x-6"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">
                          Enable User Registration
                        </h4>
                        <p className="text-indigo-300 text-sm mt-1">
                          Allow new users to register
                        </p>
                      </div>
                      <div className="relative inline-block w-12 h-6 ml-2">
                        <input
                          type="checkbox"
                          id="toggle-registration"
                          className="opacity-0 w-0 h-0"
                          defaultChecked
                        />
                        <label
                          htmlFor="toggle-registration"
                          className="block absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-indigo-600 rounded-full transition-colors before:absolute before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-transform checked:before:translate-x-6"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-indigo-300 mb-2">
                      File Upload Limit (MB)
                    </label>
                    <input
                      type="number"
                      defaultValue="10"
                      min="1"
                      max="100"
                      className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="pt-4 border-t border-indigo-700 flex justify-end">
                    <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

          
            {activeSection === "security" && (
              <div>
                <h3 className="text-xl font-medium text-white mb-6">
                  Security Settings
                </h3>

                <div className="space-y-6">
                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">
                          Force Two-Factor Authentication
                        </h4>
                        <p className="text-indigo-300 text-sm mt-1">
                          Require all admin users to use 2FA
                        </p>
                      </div>
                      <div className="relative inline-block w-12 h-6 ml-2">
                        <input
                          type="checkbox"
                          id="toggle-2fa"
                          className="opacity-0 w-0 h-0"
                          defaultChecked
                        />
                        <label
                          htmlFor="toggle-2fa"
                          className="block absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-indigo-600 rounded-full transition-colors before:absolute before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-transform checked:before:translate-x-6"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-indigo-300 mb-2">
                      Password Policy
                    </label>
                    <select className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>
                        Strong (12+ chars, uppercase, lowercase, number, symbol)
                      </option>
                      <option>
                        Medium (8+ chars, uppercase, lowercase, number)
                      </option>
                      <option>Basic (8+ chars)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-indigo-300 mb-2">
                      Session Timeout (minutes)
                    </label>
                    <input
                      type="number"
                      defaultValue="30"
                      min="5"
                      max="120"
                      className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">
                          Enforce HTTPS
                        </h4>
                        <p className="text-indigo-300 text-sm mt-1">
                          Force all connections to use secure HTTPS
                        </p>
                      </div>
                      <div className="relative inline-block w-12 h-6 ml-2">
                        <input
                          type="checkbox"
                          id="toggle-https"
                          className="opacity-0 w-0 h-0"
                          defaultChecked
                        />
                        <label
                          htmlFor="toggle-https"
                          className="block absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-indigo-600 rounded-full transition-colors before:absolute before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-transform checked:before:translate-x-6"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">
                          Rate Limiting
                        </h4>
                        <p className="text-indigo-300 text-sm mt-1">
                          Limit login attempts to protect against brute force
                        </p>
                      </div>
                      <div className="relative inline-block w-12 h-6 ml-2">
                        <input
                          type="checkbox"
                          id="toggle-ratelimit"
                          className="opacity-0 w-0 h-0"
                          defaultChecked
                        />
                        <label
                          htmlFor="toggle-ratelimit"
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

          
            {activeSection === "email" && (
              <div>
                <h3 className="text-xl font-medium text-white mb-6">
                  Email Settings
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-indigo-300 mb-2">
                      SMTP Server
                    </label>
                    <input
                      type="text"
                      defaultValue="smtp.example.com"
                      className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-indigo-300 mb-2">
                        SMTP Port
                      </label>
                      <input
                        type="number"
                        defaultValue="587"
                        className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-indigo-300 mb-2">
                        Encryption
                      </label>
                      <select className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>TLS</option>
                        <option>SSL</option>
                        <option>None</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-indigo-300 mb-2">
                        SMTP Username
                      </label>
                      <input
                        type="text"
                        defaultValue="admin@example.com"
                        className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-indigo-300 mb-2">
                        SMTP Password
                      </label>
                      <input
                        type="password"
                        defaultValue="••••••••••••"
                        className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-indigo-300 mb-2">
                      Default From Email
                    </label>
                    <input
                      type="email"
                      defaultValue="noreply@example.com"
                      className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-indigo-300 mb-2">
                      Default From Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Dashboard Portal"
                      className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="pt-4 flex justify-end space-x-3">
                    <button className="px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg transition-colors">
                      Test Connection
                    </button>
                    <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

           
            {activeSection === "api" && (
              <div>
                <h3 className="text-xl font-medium text-white mb-6">
                  API Settings
                </h3>

                <div className="space-y-6">
                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">
                          Enable API Access
                        </h4>
                        <p className="text-indigo-300 text-sm mt-1">
                          Allow external applications to access the API
                        </p>
                      </div>
                      <div className="relative inline-block w-12 h-6 ml-2">
                        <input
                          type="checkbox"
                          id="toggle-api"
                          className="opacity-0 w-0 h-0"
                          defaultChecked
                        />
                        <label
                          htmlFor="toggle-api"
                          className="block absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-indigo-600 rounded-full transition-colors before:absolute before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-transform checked:before:translate-x-6"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-indigo-300 mb-2">
                      API Key
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        value="sk_live_Thn1GhrqLrCnD4k2Z5xLnEVc8JcTRs7Y"
                        readOnly
                        className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-l-lg border border-indigo-700 focus:outline-none"
                      />
                      <button className="bg-indigo-700 hover:bg-indigo-600 text-white px-4 rounded-r-lg border-y border-r border-indigo-600">
                        Regenerate
                      </button>
                    </div>
                    <p className="text-indigo-400 text-xs mt-1">
                      Keep this key secret. Never share it publicly.
                    </p>
                  </div>

                  <div>
                    <label className="block text-indigo-300 mb-2">
                      Rate Limit (requests per minute)
                    </label>
                    <input
                      type="number"
                      defaultValue="60"
                      min="10"
                      max="1000"
                      className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-indigo-300 mb-2">
                      Allowed Origins (CORS)
                    </label>
                    <textarea
                      rows="3"
                      defaultValue="https://example.com&#10;https://api.example.com"
                      className="w-full px-4 py-2 bg-indigo-900 bg-opacity-50 text-white rounded-lg border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter one domain per line"
                    ></textarea>
                    <p className="text-indigo-400 text-xs mt-1">
                      Enter one domain per line. Use * for wildcard.
                    </p>
                  </div>

                  <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">API Logging</h4>
                        <p className="text-indigo-300 text-sm mt-1">
                          Keep logs of all API requests
                        </p>
                      </div>
                      <div className="relative inline-block w-12 h-6 ml-2">
                        <input
                          type="checkbox"
                          id="toggle-logging"
                          className="opacity-0 w-0 h-0"
                          defaultChecked
                        />
                        <label
                          htmlFor="toggle-logging"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSettings;
