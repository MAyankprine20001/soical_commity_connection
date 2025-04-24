import React, { useState } from "react";
import {
  RiAddLine,
  RiFolderAddLine,
  RiDeleteBin6Line,
  RiDownload2Line,
  RiShareLine,
  RiSearchLine,
} from "react-icons/ri";

const Gallery = () => {
  const [activeFolder, setActiveFolder] = useState("all");
  const [selectedItems, setSelectedItems] = useState([]);

  
  const folders = [
    { id: "all", name: "All Items", count: 87 },
    { id: "recent", name: "Recent", count: 12 },
    { id: "favorites", name: "Favorites", count: 24 },
    { id: "vacations", name: "Vacations", count: 36 },
    { id: "artwork", name: "Artwork", count: 15 },
  ];


  const galleryItems = [
    {
      id: 1,
      type: "image",
      folder: "favorites",
      title: "Mountain Sunset",
      date: "3 days ago",
      color: "bg-orange-500",
    },
    {
      id: 2,
      type: "image",
      folder: "vacations",
      title: "Beach Trip",
      date: "1 week ago",
      color: "bg-blue-500",
    },
    {
      id: 3,
      type: "image",
      folder: "recent",
      title: "City Skyline",
      date: "Yesterday",
      color: "bg-indigo-500",
    },
    {
      id: 4,
      type: "image",
      folder: "favorites",
      title: "Forest Trail",
      date: "2 weeks ago",
      color: "bg-green-600",
    },
    {
      id: 5,
      type: "image",
      folder: "artwork",
      title: "Abstract Art",
      date: "1 month ago",
      color: "bg-purple-500",
    },
    {
      id: 6,
      type: "image",
      folder: "recent",
      title: "Concert Night",
      date: "2 days ago",
      color: "bg-pink-600",
    },
    {
      id: 7,
      type: "image",
      folder: "vacations",
      title: "Lake View",
      date: "3 weeks ago",
      color: "bg-teal-500",
    },
    {
      id: 8,
      type: "image",
      folder: "recent",
      title: "New Project",
      date: "Today",
      color: "bg-yellow-500",
    },
    {
      id: 9,
      type: "image",
      folder: "artwork",
      title: "Digital Creation",
      date: "2 months ago",
      color: "bg-red-500",
    },
    {
      id: 10,
      type: "image",
      folder: "favorites",
      title: "Family Photo",
      date: "1 month ago",
      color: "bg-blue-600",
    },
    {
      id: 11,
      type: "image",
      folder: "artwork",
      title: "Sketch Work",
      date: "2 weeks ago",
      color: "bg-gray-600",
    },
    {
      id: 12,
      type: "image",
      folder: "vacations",
      title: "Mountain Trek",
      date: "2 months ago",
      color: "bg-green-500",
    },
  ];

  
  const filteredItems =
    activeFolder === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.folder === activeFolder);

  const toggleItemSelection = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-6">Gallery</h2>

  
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between">
        <div className="relative flex-grow max-w-md">
          <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-300" />
          <input
            type="text"
            placeholder="Search gallery..."
            className="pl-10 pr-4 py-2 bg-indigo-800 bg-opacity-50 text-white rounded-lg border border-indigo-700 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex gap-2">
          <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors">
            <RiAddLine className="mr-2" />
            Upload
          </button>
          <button className="flex items-center justify-center px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg transition-colors">
            <RiFolderAddLine className="mr-2" />
            New Folder
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
      
        <div className="md:w-1/4">
          <div className="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl shadow-xl p-4 border border-indigo-700">
            <h3 className="text-lg font-medium text-white mb-4">Folders</h3>
            <ul className="space-y-2">
              {folders.map((folder) => (
                <li key={folder.id}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex justify-between items-center ${
                      activeFolder === folder.id
                        ? "bg-indigo-600 text-white"
                        : "text-indigo-300 hover:bg-indigo-700 hover:text-white"
                    }`}
                    onClick={() => setActiveFolder(folder.id)}
                  >
                    <span>{folder.name}</span>
                    <span className="bg-indigo-700 bg-opacity-50 px-2 py-1 text-xs rounded-full">
                      {folder.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-indigo-700">
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-center text-indigo-300 text-sm">
                  <span>Storage Used</span>
                  <span>4.2 GB / 10 GB</span>
                </div>
                <div className="w-full bg-indigo-900 rounded-full h-2">
                  <div
                    className="bg-indigo-500 h-2 rounded-full"
                    style={{ width: "42%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="md:w-3/4">
      
          {selectedItems.length > 0 && (
            <div className="bg-indigo-700 mb-4 p-3 rounded-lg flex justify-between items-center">
              <span className="text-white">
                {selectedItems.length} items selected
              </span>
              <div className="flex gap-2">
                <button className="p-2 text-indigo-300 hover:text-white bg-indigo-800 rounded-lg hover:bg-indigo-600 transition-colors">
                  <RiShareLine />
                </button>
                <button className="p-2 text-indigo-300 hover:text-white bg-indigo-800 rounded-lg hover:bg-indigo-600 transition-colors">
                  <RiDownload2Line />
                </button>
                <button className="p-2 text-indigo-300 hover:text-red-400 bg-indigo-800 rounded-lg hover:bg-indigo-600 transition-colors">
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          )}

      
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`group relative rounded-lg overflow-hidden border-2 ${
                  selectedItems.includes(item.id)
                    ? "border-indigo-500"
                    : "border-transparent hover:border-indigo-600"
                }`}
              >
                <div
                  className={`aspect-square ${item.color} flex items-center justify-center cursor-pointer`}
                  onClick={() => toggleItemSelection(item.id)}
                >
                  <span className="text-white font-medium">IMG</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2">
                  <p className="text-white text-sm font-medium truncate">
                    {item.title}
                  </p>
                  <p className="text-gray-300 text-xs">{item.date}</p>
                </div>

                <div
                  className={`absolute top-2 right-2 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center ${
                    selectedItems.includes(item.id)
                      ? "bg-indigo-500"
                      : "bg-transparent"
                  }`}
                >
                  {selectedItems.includes(item.id) && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
