import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6">My Profile</h2>

      <div className="space-y-8">
      
        <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-6 border border-indigo-600">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 rounded-full bg-indigo-500 border-4 border-indigo-400 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <span className="text-white text-3xl font-bold">JD</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white">John Doe</h3>
              <p className="text-indigo-300">Member since January 2023</p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                <span className="px-3 py-1 bg-indigo-800 rounded-full text-indigo-200 text-sm">
                  Developer
                </span>
                <span className="px-3 py-1 bg-indigo-800 rounded-full text-indigo-200 text-sm">
                  Designer
                </span>
                <span className="px-3 py-1 bg-indigo-800 rounded-full text-indigo-200 text-sm">
                  Gamer
                </span>
              </div>
            </div>
          </div>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
            <p className="text-indigo-300 text-sm">Friends</p>
            <p className="text-white text-2xl font-bold mt-1">142</p>
          </div>
          <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
            <p className="text-indigo-300 text-sm">Posts</p>
            <p className="text-white text-2xl font-bold mt-1">87</p>
          </div>
          <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-4 border border-indigo-600">
            <p className="text-indigo-300 text-sm">Reputation</p>
            <p className="text-white text-2xl font-bold mt-1">4.8/5</p>
          </div>
        </div>

       
        <div className="bg-indigo-700 bg-opacity-40 rounded-lg p-6 border border-indigo-600">
          <h4 className="text-xl font-semibold text-white mb-3">About Me</h4>
          <p className="text-indigo-200">
            Frontend developer with a passion for creating beautiful and
            functional user interfaces. I love working with React and exploring
            new web technologies. When I'm not coding, you can find me gaming or
            hiking in the mountains.
          </p>
        </div>

        
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Recent Activity
          </h4>
          <div className="space-y-3">
            <div className="border-b border-indigo-700 pb-3">
              <p className="text-white">Updated profile information</p>
              <p className="text-indigo-400 text-sm mt-1">2 hours ago</p>
            </div>
            <div className="border-b border-indigo-700 pb-3">
              <p className="text-white">Added new gallery images</p>
              <p className="text-indigo-400 text-sm mt-1">Yesterday</p>
            </div>
            <div className="border-b border-indigo-700 pb-3">
              <p className="text-white">Connected with Alex Johnson</p>
              <p className="text-indigo-400 text-sm mt-1">3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
