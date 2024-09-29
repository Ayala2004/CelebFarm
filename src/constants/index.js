import { PiSquaresFour } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GiMagnifyingGlass } from "react-icons/gi";
import { TiFolderOpen } from "react-icons/ti";
import { RiGroup2Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
// import { LuBellRing } from "react-icons/lu";
// import { PiNotepadLight } from "react-icons/pi";
// import { BiMessageSquareDetail } from "react-icons/bi";

export const navLinks = [
  { href: "#Dashboard", lable: "Dashboard", Icon: PiSquaresFour },
  {
    href: "#Campaign Management",
    lable: "Campaign Management",
    Icon: HiOutlineSpeakerphone,
  },
  { href: "#Discovery", lable: "Discovery", Icon: GiMagnifyingGlass },
  {
    href: "#Content Librery",
    lable: "Content Librery",
    Icon: TiFolderOpen,
  },
  { href: "#List Creators", lable: "List Creators", Icon: RiGroup2Line },
  { href: "#My Creators", lable: "My Creators", Icon: PiSquaresFour },
  {
    href: "#Report and Analytics",
    lable: "Report and Analytics",
    Icon: TbReportAnalytics,
  },
];

// export const headButIcon = [
//   { icon: PiNotepadLight },
//   { icon: BiMessageSquareDetail },
//   { icon: BiMessageSquareDetail },
//   { icon: LuBellRing },
// ];
