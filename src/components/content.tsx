import { useState } from "react";

const Tab = ({ title, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex-1 text-center py-4 cursor-pointer ${
      active ? "text-white border-b-2 border-blue-500" : "text-gray-400"
    }`}
  >
    {title}
  </div>
);

const Post = ({ username, handle, time, content }) => (
  <div className="border-b border-gray-700 px-4 py-3">
    <div className="flex justify-between">
      <div className="flex space-x-3">
        <img
          src="https://placehold.co/50x50"
          alt={`Profile of ${username}`}
          className="rounded-full"
        />
        <div>
          <div className="font-semibold">{username}</div>
          <div className="text-gray-400 text-sm">
            {handle} · {time}
          </div>
        </div>
      </div>
      <div className="text-gray-400 cursor-pointer hover:text-blue-500">
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </div>
    <p className="mt-2">{content}</p>
  </div>
);

const Content = () => {
  const [activeTab, setActiveTab] = useState("Untuk Anda");
  return (
    <div className="max-w-2xl mx-auto bg-gray-900 text-white">
      {/* Tabs */}
      <div className="flex divide-x">
        <Tab
          title="Untuk Anda"
          active={activeTab === "Untuk Anda"}
          onClick={() => setActiveTab("Untuk Anda")}
        />
        <Tab
          title="Mengikuti"
          active={activeTab === "Mengikuti"}
          onClick={() => setActiveTab("Mengikuti")}
        />
      </div>

      {/* Posting Form */}
      <div className="border-b border-gray-700 p-4 flex">
        <img
          src="https://placehold.co/50x50"
          alt="User profile"
          className="rounded-full"
        />
        <input
          className="bg-gray-700 ml-4 p-2 text-sm flex-1 rounded-full placeholder-gray-400"
          placeholder="Apa yang sedang hangat dibicarakan?"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full ml-4">
          Posting
        </button>
      </div>

      {/* Content List */}
      <div>
        <Post
          username="Anthony Scaramucci"
          handle="@Scaramucci"
          time="6mnt"
          content="Imagine how bitter Trump is going to be when he loses."
        />
        {/* Repeat Post component for each content */}
      </div>
    </div>
  );
};

export default Content;
