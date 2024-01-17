import {
  faCalendarAlt,
  faChartBar,
  faChartSimple,
  faComment,
  faEllipsisH,
  faGift,
  faHeart,
  faImage,
  faRetweet,
  faShareAlt,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const TabTitle = ({ title, active }: { title: string; active: boolean }) => {
  const titleRef = useRef(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      setUnderlineWidth(titleRef.current["offsetWidth"]);
    }
  }, [title]);

  return (
    <div className="text-center">
      <span ref={titleRef} className="inline-block">
        {title}
      </span>
      {active && (
        <div
          className="h-1 bg-blue-500 mt-1 rounded-full ease-in-out duration-300"
          style={{
            width: underlineWidth,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      )}
    </div>
  );
};

const Tab = ({
  title,
  active,
  onClick,
  tabIndex,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
  tabIndex: number;
}) => (
  <div
    role="tab"
    tabIndex={tabIndex}
    onClick={onClick}
    onKeyDown={onClick}
    className={`flex-1 text-center py-4 cursor-pointer ${
      active ? "text-white" : "text-gray-400"
    }`}
  >
    <TabTitle title={title} active={active} />
  </div>
);

const PostingForm = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className=" p-4 flex items-center space-x-4">
        <img
          src="https://placehold.co/50x50"
          alt="User profile"
          className="rounded-full"
        />
        <div className="flex-grow flex items-center bg-gray-700 px-4 py-2 rounded-full">
          <input
            className="bg-transparent flex-grow px-4 text-sm placeholder-gray-400 text-white outline-none"
            type="text"
            placeholder="Apa yang sedang hangat dibicarakan?"
          />
        </div>
      </div>
      <div className="flex justify-between items-center px-3 pb-3">
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faImage} className="text-blue-500 px-2" />
          <FontAwesomeIcon icon={faGift} className="text-blue-500 px-2" />
          <FontAwesomeIcon icon={faChartBar} className="text-blue-500 px-2" />
          <FontAwesomeIcon icon={faSmile} className="text-blue-500 px-2" />
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="text-blue-500 px-2"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
          Posting
        </button>
      </div>
    </div>
  );
};

const Post = ({
  username,
  handle,
  time,
  content,
}: {
  username: string;
  handle: string;
  time: string;
  content: string;
}) => (
  <div className="border-b border-gray-700 px-4 py-3">
    <div className="flex">
      <div className="w-16">
        <img
          src="https://placehold.co/50x50"
          alt={`Profile of ${username}`}
          className="rounded-full"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <div className="flex space-x-3">
            <div>
              <div className="font-semibold">{username}</div>
              <div className="text-gray-400 text-sm">
                {handle} · {time}
              </div>
            </div>
          </div>
          <div className="text-gray-400 cursor-pointer hover:text-blue-500">
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
        </div>
        <p className="mt-2">{content}</p>
        <div className="flex justify-between space-x-5 text-gray-400 mt-3">
          <FontAwesomeIcon
            icon={faComment}
            className="cursor-pointer hover:text-blue-800"
          />
          <FontAwesomeIcon
            icon={faRetweet}
            className="cursor-pointer hover:text-green-500"
          />
          <FontAwesomeIcon
            icon={faHeart}
            className="cursor-pointer hover:text-red-500"
          />
          <FontAwesomeIcon
            icon={faChartSimple}
            className="cursor-pointer hover:text-blue-300"
          />
          <FontAwesomeIcon
            icon={faShareAlt}
            className="cursor-pointer hover:text-blue-500"
          />
        </div>
      </div>
    </div>
  </div>
);

const Content = () => {
  const [activeTab, setActiveTab] = useState("Untuk Anda");
  return (
    <div className="h-screen w-256 max-w-2xl mx-auto bg-gray-900 text-white border-r">
      {/* Tabs */}
      <div className="flex">
        <Tab
          title="Untuk Anda"
          active={activeTab === "Untuk Anda"}
          onClick={() => setActiveTab("Untuk Anda")}
          tabIndex={-1}
        />
        <Tab
          title="Mengikuti"
          active={activeTab === "Mengikuti"}
          onClick={() => setActiveTab("Mengikuti")}
          tabIndex={-2}
        />
      </div>

      {/* Posting Form */}
      <PostingForm />

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
