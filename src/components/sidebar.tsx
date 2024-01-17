import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import Content from "./content";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SidebarItem = ({ icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center rounded-full space-x-3 p-3 hover:bg-gray-800 cursor-pointer">
    <FontAwesomeIcon icon={icon} />
    <span>{label}</span>
  </div>
);

const UserProfile = () => (
  <div className="flex items-center justify-between p-2 hover:bg-gray-800 cursor-pointer rounded-full mb-8">
    <div className="flex items-center space-x-3 ">
      {/* Placeholder for user image */}
      <img
        src="https://placehold.co/50x50"
        alt="User profile"
        className="rounded-full"
      />
      <div>
        <p className="text-sm font-semibold">Username</p>
        <p className="text-xs text-gray-400">@userhandle</p>
      </div>
    </div>
    <FontAwesomeIcon icon={faEllipsis} />
  </div>
);

const Sidebar = () => {
  return (
    <div className="h-screen flex">
      <div className=" flex flex-col justify-between bg-gray-900 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out border-r">
        <div>
          {/* Logo or brand name */}
          <div className="flex items-center space-x-3 px-4 pb-8">
            <span className="text-xl font-extrabold">Brand</span>
          </div>

          {/* Sidebar items */}
          <nav>
            <SidebarItem icon={faHome} label="Beranda" />
            <SidebarItem icon={faSearch} label="Jelajahi" />
            <SidebarItem icon={faBell} label="Notifikasi" />
            <SidebarItem icon={faEnvelope} label="Pesan" />
            <SidebarItem icon={faBookmark} label="Markah" />
            <SidebarItem icon={faList} label="Daftar" />
            <SidebarItem icon={faUser} label="Profil" />
            {/* Additional items */}
          </nav>
        </div>

        {/* Other options and footer */}
        <div>
          {/* User Profile */}
          <UserProfile />

          <div className="px-4">
            <button className="bg-blue-500 text-white w-full py-2 rounded-full hover:bg-blue-600">
              Posting
            </button>
          </div>
        </div>
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
};

export default Sidebar;
