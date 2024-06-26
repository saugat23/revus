import { MdOutlineDashboard } from "react-icons/md";
import { IoCarOutline } from "react-icons/io5";
import { TbReservedLine } from "react-icons/tb";
import { IoAddCircle } from "react-icons/io5";
import { BiSolidReport } from "react-icons/bi";

const dashboard_items = [
  {
    title: "Home",
    icon: <MdOutlineDashboard className="w-7 h-7" />,
    link: "/host_dashboard/home",
  },
  {
    title: "Listings",
    icon: <IoCarOutline className="w-7 h-7" />,
    link: "/host_dashboard/listings",
  },
  {
    title: "Booked/Reserved",
    icon: <TbReservedLine className="w-7 h-7" />,
    link: "/host_dashboard/booked",
  },
  {
    title: "List Car",
    icon: <IoAddCircle className="w-7 h-7" />,
    link: "/host_dashboard/list_car",
  },
  {
    title: "Incidents Report",
    icon: <BiSolidReport className="w-7 h-7" />,
    link: "/host_dashboard/incidents_report",
  },
];

export default dashboard_items;
