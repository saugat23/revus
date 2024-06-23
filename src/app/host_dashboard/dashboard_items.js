import { MdDashboard, MdCampaign } from "react-icons/md";
import { GiDonerKebab } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";

const dashboard_items = [
  {
    title: "Profile",
    icon: <MdDashboard />,
    link: "/user_dashboard/profile",
  },
  {
    title: "Past Bookings",
    icon: <GiDonerKebab />,
    link: "/user_dashboard/past_bookings",
  },
  {
    title: "Chat",
    icon: <MdCampaign />,
    link: "/user_dashboard/chat",
  },
  {
    title: "Notifications",
    icon: <FaUserAlt />,
    link: "/user_dashboard/notifications",
  },
];

export default dashboard_items;
