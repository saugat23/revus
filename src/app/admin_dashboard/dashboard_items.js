import { MdOutlineDashboard } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";

const dashboard_items = [
  {
    title: "Dashboard",
    icon: <MdOutlineDashboard className="w-7 h-7" />,
    link: "/admin_dashboard/dashboard",
  },
  {
    title: "Total Users",
    icon: <BiUserCircle className="w-7 h-7" />,
    link: "/admin_dashboard/total_users",
  },
  {
    title: "New Host",
    icon: <TiUserAdd className="w-7 h-7" />,
    link: "/admin_dashboard/new_host",
  },
  {
    title: "Data",
    icon: <FaDatabase className="w-7 h-7" />,
    link: "/admin_dashboard/data",
  },
];

export default dashboard_items;
