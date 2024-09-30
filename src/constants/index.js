import {
  PiSquaresFour,
  HiOutlineSpeakerphone,
  GiMagnifyingGlass,
  TiFolderOpen,
  RiGroup2Line,
  TbReportAnalytics,
  LuBellRing,
  PiNotepadLight,
  BiMessageSquareDetail,
  IoSettingsOutline,
  TbMoneybag,
} from "../assets/icons/index";

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
    name: "setting",
  },
];

export const headerIcon = [
  { Icon: PiNotepadLight, href: "#note" },
  { Icon: BiMessageSquareDetail, href: "#massages" },
  { Icon: BiMessageSquareDetail, href: "#chat" },
  { Icon: LuBellRing, href: "#bell" },
];

export const options = [
  { Icon: TbMoneybag, label: "paid1" },
  { Icon: TbMoneybag, label: "paid2" },
  { Icon: TbMoneybag, label: "paid3" },
  { Icon: TbMoneybag, label: "paid4" },
];
