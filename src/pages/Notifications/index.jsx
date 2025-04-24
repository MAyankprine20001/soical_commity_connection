

import React, { useState } from "react";
import {
  RiCheckLine,
  RiEyeOffLine,
  RiDeleteBin6Line,
  RiSettings4Line,
} from "react-icons/ri";

const Notifications = () => {
  const [filter, setFilter] = useState("all");


  const allNotifications = [
    {
      id: 1,
      type: "friend",
      read: false,
      content: "Alex Williams accepted your friend request",
      time: "5 minutes ago",
      avatar: "AW",
    },
    {
      id: 2,
      type: "system",
      read: false,
      content: "Your account was successfully upgraded to Premium",
      time: "1 hour ago",
      avatar: "SY",
    },
    {
      id: 3,
      type: "message",
      read: true,
      content: "Sarah sent you a new message",
      time: "3 hours ago",
      avatar: "SA",
    },
    {
      id: 4,
      type: "group",
      read: false,
      content: 'You were added to "Gaming Night" group',
      time: "5 hours ago",
      avatar: "GN",
    },
    {
      id: 5,
      type: "event",
      read: true,
      content: "Reminder: Virtual meetup starts in 1 hour",
      time: "Yesterday",
      avatar: "EV",
    },
    {
      id: 6,
      type: "friend",
      read: true,
      content: "Jessica sent you a friend request",
      time: "Yesterday",
      avatar: "JE",
    },
    {
      id: 7,
      type: "like",
      read: true,
      content: "Mike liked your recent post",
      time: "2 days ago",
      avatar: "MI",
    },
    {
      id: 8,
      type: "system",
      read: true,
      content: "Your password was changed successfully",
      time: "3 days ago",
      avatar: "SY",
    },
  ];

 
  const filteredNotifications =
    filter === "all"
      ? allNotifications
      : filter === "unread"
      ? allNotifications.filter((n) => !n.read)
      : allNotifications.filter((n) => n.type === filter);


  const getNotificationIcon = (type) => {
    switch (type) {
      case "friend":
        return "bg-blue-500";
      case "message":
        return "bg-green-500";
      case "system":
        return "bg-yellow-500";
      case "group":
        return "bg-purple-500";
      case "event":
        return "bg-red-500";
      case "like":
        return "bg-pink-500";
      default:
        return "bg-indigo-500";
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6">Notifications</h2>

      
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === "all"
              ? "bg-indigo-600 text-white"
              : "bg-indigo-800 text-indigo-300 hover:bg-indigo-700"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === "unread"
              ? "bg-indigo-600 text-white"
              : "bg-indigo-800 text-indigo-300 hover:bg-indigo-700"
          }`}
          onClick={() => setFilter("unread")}
        >
          Unread
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === "friend"
              ? "bg-indigo-600 text-white"
              : "bg-indigo-800 text-indigo-300 hover:bg-indigo-700"
          }`}
          onClick={() => setFilter("friend")}
        >
          Friends
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === "message"
              ? "bg-indigo-600 text-white"
              : "bg-indigo-800 text-indigo-300 hover:bg-indigo-700"
          }`}
          onClick={() => setFilter("message")}
        >
          Messages
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === "system"
              ? "bg-indigo-600 text-white"
              : "bg-indigo-800 text-indigo-300 hover:bg-indigo-700"
          }`}
          onClick={() => setFilter("system")}
        >
          System
        </button>
      </div>

      
      <div className="flex justify-between items-center mb-4">
        <div className="text-indigo-300">
          {filteredNotifications.filter((n) => !n.read).length} unread
          notifications
        </div>
        <div className="flex gap-2">
          <button className="flex items-center px-3 py-1 bg-indigo-700 hover:bg-indigo-600 text-indigo-200 rounded-lg transition-colors text-sm">
            <RiCheckLine className="mr-1" />
            Mark all as read
          </button>
          <button className="flex items-center px-3 py-1 bg-indigo-700 hover:bg-indigo-600 text-indigo-200 rounded-lg transition-colors text-sm">
            <RiSettings4Line className="mr-1" />
            Settings
          </button>
        </div>
      </div>

  
      <div className="space-y-3">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border ${
              notification.read
                ? "bg-indigo-800 bg-opacity-40 border-indigo-700"
                : "bg-indigo-700 bg-opacity-60 border-indigo-600"
            } flex items-start`}
          >
            <div
              className={`w-10 h-10 rounded-full ${getNotificationIcon(
                notification.type
              )} flex items-center justify-center text-white font-medium mr-3 flex-shrink-0`}
            >
              {notification.avatar}
            </div>
            <div className="flex-grow">
              <p
                className={`${
                  notification.read ? "text-indigo-200" : "text-white"
                }`}
              >
                {notification.content}
              </p>
              <p className="text-indigo-400 text-sm mt-1">
                {notification.time}
              </p>
            </div>
            <div className="flex space-x-1 ml-2">
              {!notification.read && (
                <button className="p-1 text-indigo-300 hover:text-white rounded hover:bg-indigo-600">
                  <RiCheckLine size={18} />
                </button>
              )}
              <button className="p-1 text-indigo-300 hover:text-white rounded hover:bg-indigo-600">
                <RiEyeOffLine size={18} />
              </button>
              <button className="p-1 text-indigo-300 hover:text-red-400 rounded hover:bg-indigo-600">
                <RiDeleteBin6Line size={18} />
              </button>
            </div>
          </div>
        ))}

        {filteredNotifications.length === 0 && (
          <div className="text-center py-12 text-indigo-300">
            No notifications found for this filter.
          </div>
        )}
      </div>
    </>
  );
};

export default Notifications;