import { MdDashboard, MdCampaign } from "react-icons/md";
import { GiDonerKebab } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";

const dashboard_items = [
  {
    title: "Profile",
    icon: <MdDashboard />,
    link: "/renter_dashboard/profile",
  },
  {
    title: "Past Bookings",
    icon: <GiDonerKebab />,
    link: "/renter_dashboard/past_bookings",
  },
  {
    title: "Chat",
    icon: <MdCampaign />,
    link: "/renter_dashboard/chat",
  },
  {
    title: "Notifications",
    icon: <FaUserAlt />,
    link: "/renter_dashboard/notifications",
  },
];

export default dashboard_items;
