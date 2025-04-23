import React, { useState } from "react";
import {
  RiSendPlaneFill,
  RiAttachment2,
  RiEmotionHappyLine,
  RiMoreFill,
} from "react-icons/ri";

const Messages = () => {
  const [activeChat, setActiveChat] = useState(1);

  // Mock conversations data
  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      lastMessage: "Sure, that works for me!",
      time: "10:42 AM",
      unread: 0,
      online: true,
      avatar: "SJ",
    },
    {
      id: 2,
      name: "Mike Thomas",
      lastMessage: "Did you see the latest update?",
      time: "Yesterday",
      unread: 3,
      online: false,
      avatar: "MT",
    },
    {
      id: 3,
      name: "Alex Williams",
      lastMessage: "Thanks for your help!",
      time: "Yesterday",
      unread: 0,
      online: true,
      avatar: "AW",
    },
    {
      id: 4,
      name: "Gaming Group",
      lastMessage: "David: Are we playing tonight?",
      time: "2 days ago",
      unread: 5,
      online: false,
      avatar: "GG",
    },
    {
      id: 5,
      name: "Lisa Parker",
      lastMessage: "The files are ready for review",
      time: "3 days ago",
      unread: 0,
      online: false,
      avatar: "LP",
    },
  ];

  // Mock messages for the active conversation
  const messages = [
    {
      id: 1,
      sender: "them",
      text: "Hey there! How are you doing today?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Hi! I'm doing great, thanks for asking. Just finished that project we talked about.",
      time: "10:35 AM",
    },
    {
      id: 3,
      sender: "them",
      text: "That's awesome! Can you send me the details when you get a chance?",
      time: "10:38 AM",
    },
    {
      id: 4,
      sender: "me",
      text: "Of course! I'll put together a summary and send it over later today.",
      time: "10:40 AM",
    },
    {
      id: 5,
      sender: "them",
      text: "Sure, that works for me!",
      time: "10:42 AM",
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6">Messages</h2>

      <div className="flex flex-col md:flex-row gap-4 h-[calc(70vh-2rem)]">
        {/* Conversations List */}
        <div className="md:w-1/3 bg-indigo-800 bg-opacity-40 rounded-lg border border-indigo-700 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-indigo-700">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full px-4 py-2 bg-indigo-700 bg-opacity-50 text-white rounded-lg border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="overflow-y-auto flex-grow">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-3 border-b border-indigo-700 cursor-pointer ${
                  activeChat === conversation.id
                    ? "bg-indigo-700 bg-opacity-50"
                    : "hover:bg-indigo-700 hover:bg-opacity-30"
                }`}
                onClick={() => setActiveChat(conversation.id)}
              >
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                      {conversation.avatar}
                    </div>
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-indigo-800"></div>
                    )}
                  </div>
                  <div className="ml-3 flex-grow">
                    <div className="flex justify-between">
                      <span className="font-medium text-white">
                        {conversation.name}
                      </span>
                      <span className="text-xs text-indigo-300">
                        {conversation.time}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-sm text-indigo-300 truncate w-32">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unread > 0 && (
                        <span className="bg-indigo-500 text-white text-xs rounded-full px-2 py-1 min-w-[1.5rem] text-center">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Chat */}
        <div className="md:w-2/3 bg-indigo-800 bg-opacity-40 rounded-lg border border-indigo-700 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-indigo-700 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium mr-3">
                {conversations.find((c) => c.id === activeChat)?.avatar}
              </div>
              <div>
                <h3 className="font-medium text-white">
                  {conversations.find((c) => c.id === activeChat)?.name}
                </h3>
                <p className="text-xs text-indigo-300">
                  {conversations.find((c) => c.id === activeChat)?.online
                    ? "Online"
                    : "Offline"}
                </p>
              </div>
            </div>
            <button className="p-2 text-indigo-300 hover:text-white rounded-full hover:bg-indigo-700">
              <RiMoreFill size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                    message.sender === "me"
                      ? "bg-indigo-600 text-white rounded-br-none"
                      : "bg-indigo-700 bg-opacity-50 text-indigo-100 rounded-bl-none"
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "me"
                        ? "text-indigo-200"
                        : "text-indigo-300"
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-3 border-t border-indigo-700">
            <div className="flex items-center bg-indigo-700 bg-opacity-50 rounded-lg px-3 py-2">
              <button className="p-1 text-indigo-300 hover:text-white">
                <RiAttachment2 size={20} />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow mx-2 bg-transparent border-none focus:outline-none text-white placeholder-indigo-400"
              />
              <button className="p-1 text-indigo-300 hover:text-white">
                <RiEmotionHappyLine size={20} />
              </button>
              <button className="ml-2 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500">
                <RiSendPlaneFill size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
