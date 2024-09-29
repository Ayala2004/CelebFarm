import { PiSquaresFour } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GiMagnifyingGlass } from "react-icons/gi";
import { TiFolderOpen } from "react-icons/ti";
import { RiGroup2Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { LuBellRing } from "react-icons/lu";
import { PiNotepadLight } from "react-icons/pi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";


export const navLinks = [
  { href: "#Dashboard", label: "Dashboard", Icon: PiSquaresFour },
  {
    href: "#Campaign Management",
    label: "Campaign Management",
    Icon: HiOutlineSpeakerphone,
  },
  { href: "#Discovery", label: "Discovery", Icon: GiMagnifyingGlass },
  {
    href: "#Content Librery",
    label: "Content Librery",
    Icon: TiFolderOpen,
  },
  { href: "#List Creators", label: "List Creators", Icon: RiGroup2Line },
  { href: "#My Creators", label: "My Creators", Icon: PiSquaresFour },
  {
    href: "#Report and Analytics",
    label: "Report and Analytics",
    Icon: TbReportAnalytics,
  },
  {
    href: "#Setting",
    label: "Setting",
    Icon: IoSettingsOutline,
  },
];

export const headButIcon = [
  { icon: PiNotepadLight },
  { icon: BiMessageSquareDetail },
  { icon: BiMessageSquareDetail },
  { icon: LuBellRing },
];
