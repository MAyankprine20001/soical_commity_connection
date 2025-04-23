import React, { useState } from "react";
import {
  RiAddLine,
  RiVisaLine,
  RiMastercardLine,
  RiPaypalLine,
  RiFileDownloadLine,
  RiFilter2Line,
} from "react-icons/ri";

const Payments = () => {
  const [activeTab, setActiveTab] = useState("history");

  // Mock payment methods
  const paymentMethods = [
    {
      id: 1,
      type: "visa",
      name: "Visa ending in 4242",
      expiryDate: "09/26",
      isDefault: true,
    },
    {
      id: 2,
      type: "mastercard",
      name: "Mastercard ending in 5678",
      expiryDate: "12/24",
      isDefault: false,
    },
    {
      id: 3,
      type: "paypal",
      name: "PayPal (johndoe@example.com)",
      expiryDate: null,
      isDefault: false,
    },
  ];

  // Mock payment history
  const paymentHistory = [
    {
      id: 101,
      date: "Apr 15, 2025",
      amount: "$14.99",
      method: "Visa •••• 4242",
      status: "Completed",
      type: "Subscription",
      description: "Monthly Premium Plan",
    },
    {
      id: 102,
      date: "Mar 15, 2025",
      amount: "$14.99",
      method: "Visa •••• 4242",
      status: "Completed",
      type: "Subscription",
      description: "Monthly Premium Plan",
    },
    {
      id: 103,
      date: "Feb 28, 2025",
      amount: "$29.99",
      method: "PayPal",
      status: "Completed",
      type: "Purchase",
      description: "Pro Avatar Bundle",
    },
    {
      id: 104,
      date: "Feb 15, 2025",
      amount: "$14.99",
      method: "Visa •••• 4242",
      status: "Completed",
      type: "Subscription",
      description: "Monthly Premium Plan",
    },
    {
      id: 105,
      date: "Jan 15, 2025",
      amount: "$14.99",
      method: "Visa •••• 4242",
      status: "Completed",
      type: "Subscription",
      description: "Monthly Premium Plan",
    },
    {
      id: 106,
      date: "Dec 20, 2024",
      amount: "$49.99",
      method: "Mastercard •••• 5678",
      status: "Completed",
      type: "Purchase",
      description: "Special Edition Content",
    },
  ];

  // Method icon component
  const PaymentMethodIcon = ({ type, className = "text-xl" }) => {
    switch (type) {
      case "visa":
        return <RiVisaLine className={className} />;
      case "mastercard":
        return <RiMastercardLine className={className} />;
      case "paypal":
        return <RiPaypalLine className={className} />;
      default:
        return null;
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6">Payments</h2>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-indigo-800 bg-opacity-40 p-1 rounded-lg inline-block">
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === "history"
              ? "bg-indigo-600 text-white"
              : "text-indigo-300 hover:bg-indigo-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("history")}
        >
          Payment History
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === "methods"
              ? "bg-indigo-600 text-white"
              : "text-indigo-300 hover:bg-indigo-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("methods")}
        >
          Payment Methods
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === "subscription"
              ? "bg-indigo-600 text-white"
              : "text-indigo-300 hover:bg-indigo-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("subscription")}
        >
          Subscription
        </button>
      </div>

      {/* Payment History Tab */}
      {activeTab === "history" && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-medium text-white">
              Recent Transactions
            </h3>
            <div className="flex space-x-2">
              <button className="flex items-center px-3 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg transition-colors">
                <RiFilter2Line className="mr-2" />
                Filter
              </button>
              <button className="flex items-center px-3 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg transition-colors">
                <RiFileDownloadLine className="mr-2" />
                Export
              </button>
            </div>
          </div>

          <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl border border-indigo-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-indigo-700 text-indigo-200 border-b border-indigo-600">
                  <tr>
                    <th className="p-4">Date</th>
                    <th className="p-4">Description</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Payment Method</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment) => (
                    <tr
                      key={payment.id}
                      className="border-b border-indigo-700 hover:bg-indigo-700 hover:bg-opacity-30"
                    >
                      <td className="p-4 text-indigo-300">{payment.date}</td>
                      <td className="p-4">
                        <div>
                          <p className="font-medium text-white">
                            {payment.description}
                          </p>
                          <p className="text-indigo-400 text-sm">
                            {payment.type}
                          </p>
                        </div>
                      </td>
                      <td className="p-4 font-medium text-white">
                        {payment.amount}
                      </td>
                      <td className="p-4 text-indigo-300">{payment.method}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-green-900 text-green-400 rounded-full text-xs">
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Payment Methods Tab */}
      {activeTab === "methods" && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-medium text-white">
              Your Payment Methods
            </h3>
            <button className="flex items-center px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
              <RiAddLine className="mr-2" />
              Add New Method
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl border border-indigo-700 p-5"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-indigo-700 flex items-center justify-center text-white mr-4">
                      <PaymentMethodIcon
                        type={method.type}
                        className="text-2xl"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">{method.name}</p>
                      {method.expiryDate && (
                        <p className="text-indigo-400 text-sm">
                          Expires {method.expiryDate}
                        </p>
                      )}
                    </div>
                  </div>
                  {method.isDefault && (
                    <span className="bg-indigo-600 text-indigo-200 px-2 py-1 rounded-lg text-xs">
                      Default
                    </span>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-indigo-700 flex justify-between">
                  <button className="text-indigo-300 hover:text-white text-sm transition-colors">
                    Set as Default
                  </button>
                  <button className="text-indigo-300 hover:text-red-400 text-sm transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subscription Tab */}
      {activeTab === "subscription" && (
        <div>
          <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl border border-indigo-700 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium text-white mb-2">
                  Premium Plan
                </h3>
                <p className="text-indigo-300">
                  Your subscription renews on May 15, 2025
                </p>
              </div>
              <div className="bg-green-900 text-green-400 px-3 py-1 rounded-full text-sm">
                Active
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-indigo-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-white text-lg font-bold">$14.99/month</p>
                  <p className="text-indigo-400 text-sm">
                    Next payment on May 15, 2025
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button className="px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg transition-colors">
                    Change Plan
                  </button>
                  <button className="px-4 py-2 bg-red-900 hover:bg-red-800 text-red-300 rounded-lg transition-colors">
                    Cancel Subscription
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-indigo-700">
              <h4 className="text-lg font-medium text-white mb-4">
                Plan Benefits
              </h4>
              <ul className="space-y-2 text-indigo-200">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Unlimited access to premium content
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  No ads experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Priority customer support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Exclusive community features
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Early access to new features
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl border border-indigo-700 p-6 mt-6">
            <h3 className="text-lg font-medium text-white mb-4">
              Payment Method
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-indigo-700 flex items-center justify-center text-white mr-3">
                  <RiVisaLine className="text-xl" />
                </div>
                <p className="text-indigo-200">Visa ending in 4242</p>
              </div>
              <button className="text-indigo-300 hover:text-white transition-colors">
                Change
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Payments;
