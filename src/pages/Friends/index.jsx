import React, { useState } from "react";
import {
  RiUserAddLine,
  RiUserUnfollowLine,
  RiMessage2Line,
  RiSearch2Line,
  RiFilterLine,
} from "react-icons/ri";

const Friends = () => {
  const [activeTab, setActiveTab] = useState("friends");

  
  const friendsData = [
    {
      id: 1,
      name: "Emily Richards",
      status: "Playing Valorant",
      avatar: "ER",
      online: true,
      lastActive: null,
    },
    {
      id: 2,
      name: "Jared Wilson",
      status: "Away",
      avatar: "JW",
      online: false,
      lastActive: "5 min ago",
    },
    {
      id: 3,
      name: "Jennifer Stone",
      status: "Listening to Spotify",
      avatar: "JS",
      online: true,
      lastActive: null,
    },
    {
      id: 4,
      name: "Nathan Parker",
      status: "Offline",
      avatar: "NP",
      online: false,
      lastActive: "1 hour ago",
    },
    {
      id: 5,
      name: "Sarah Thompson",
      status: "Online",
      avatar: "ST",
      online: true,
      lastActive: null,
    },
    {
      id: 6,
      name: "Kyle Jenkins",
      status: "Offline",
      avatar: "KJ",
      online: false,
      lastActive: "3 days ago",
    },
  ];

  
  const pendingData = [
    { id: 101, name: "Alex Williams", avatar: "AW", mutualFriends: 3 },
    { id: 102, name: "Jessica Miller", avatar: "JM", mutualFriends: 1 },
  ];

  
  const suggestedData = [
    { id: 201, name: "Chris Morgan", avatar: "CM", mutualFriends: 5 },
    { id: 202, name: "Lisa Anderson", avatar: "LA", mutualFriends: 2 },
    { id: 203, name: "Ryan Thompson", avatar: "RT", mutualFriends: 4 },
  ];

  
  const FriendCard = ({ friend }) => (
    <div className="bg-indigo-700 bg-opacity-40 rounded-lg border border-indigo-600 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
              {friend.avatar}
            </div>
            {friend.online !== undefined && (
              <div
                className={`absolute bottom-0 right-0 w-3 h-3 ${
                  friend.online ? "bg-green-500" : "bg-gray-400"
                } rounded-full border-2 border-indigo-700`}
              ></div>
            )}
          </div>
          <div className="ml-3">
            <h3 className="font-medium text-white">{friend.name}</h3>
            <p className="text-xs text-indigo-300">
              {friend.status ||
                (friend.mutualFriends
                  ? `${friend.mutualFriends} mutual friends`
                  : "")}
              {!friend.online && friend.lastActive && ` • ${friend.lastActive}`}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          {activeTab === "friends" && (
            <>
              <button className="p-2 text-indigo-300 hover:text-white bg-indigo-800 rounded-lg hover:bg-indigo-600">
                <RiMessage2Line />
              </button>
              <button className="p-2 text-indigo-300 hover:text-red-400 bg-indigo-800 rounded-lg hover:bg-indigo-600">
                <RiUserUnfollowLine />
              </button>
            </>
          )}
          {activeTab === "pending" && (
            <>
              <button className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg">
                Accept
              </button>
              <button className="px-3 py-1 bg-indigo-800 hover:bg-indigo-700 text-indigo-300 rounded-lg">
                Decline
              </button>
            </>
          )}
          {activeTab === "suggested" && (
            <button className="p-2 text-indigo-300 hover:text-white bg-indigo-600 rounded-lg hover:bg-indigo-500">
              <RiUserAddLine />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6">Friends</h2>

      
      <div className="flex space-x-1 mb-6 bg-indigo-800 bg-opacity-40 p-1 rounded-lg inline-block">
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === "friends"
              ? "bg-indigo-600 text-white"
              : "text-indigo-300 hover:bg-indigo-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("friends")}
        >
          Friends ({friendsData.length})
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === "pending"
              ? "bg-indigo-600 text-white"
              : "text-indigo-300 hover:bg-indigo-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("pending")}
        >
          Pending ({pendingData.length})
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === "suggested"
              ? "bg-indigo-600 text-white"
              : "text-indigo-300 hover:bg-indigo-700 hover:text-white"
          }`}
          onClick={() => setActiveTab("suggested")}
        >
          Suggested
        </button>
      </div>

  
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <RiSearch2Line className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-300" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            className="pl-10 pr-4 py-2 bg-indigo-800 bg-opacity-50 text-white rounded-lg border border-indigo-700 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button className="flex items-center justify-center px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg transition-colors sm:w-auto">
          <RiFilterLine className="mr-2" />
          Filter
        </button>
      </div>

      {/* Friends list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeTab === "friends" &&
          friendsData.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}

        {activeTab === "pending" &&
          pendingData.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}

        {activeTab === "suggested" &&
          suggestedData.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
      </div>
    </>
  );
};

export default Friends;
