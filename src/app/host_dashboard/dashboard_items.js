import { MdOutlineDashboard } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

const dashboard_items = [
  {
    title: "Dashboard",
    icon: <MdOutlineDashboard className="w-7 h-7" />,
    link: "/host_dashboard/dashboard",
  },
  {
    title: "Past Bookings",
    icon: <BiSolidPurchaseTag className="w-7 h-7" />,
    link: "/host_dashboard/plans_purchased",
  },
  {
    title: "Chat",
    icon: <IoChatbubbleEllipses className="w-7 h-7" />,
    link: "/host_dashboard/chat",
  },
  {
    title: "Notifications",
    icon: <IoIosNotifications className="w-7 h-7" />,
    link: "/host_dashboard/notifications",
  },
];

export default dashboard_items;
