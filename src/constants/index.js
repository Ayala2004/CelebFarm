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
import instagram from "../assets/images/instagram.png";
import PostCard from "../components/PostCard";
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

export const optionsPay = [
  { label: "paid1" },
  { label: "paid2" },
  { label: "paid3" },
  { label: "paid4" },
];

export const optionsInsta = [
  { label: "instagram1" },
  { label: "instagram2" },
  { label: "instagram3" },
  { label: "instagram4" },
];

export const postMiniCardsFirst
 = [
  { title: "Proposals", value: "02" },
  { title: "Invited Creators", value: "02" },
  { title: "Hired", value: "02" },
];

export const postMiniCardsSecond = [
  { title: "creators", value: "02" },
  { title: " Aount Spand", value: "114$" },
  { title: "deliverable Live", value: "02" },
];

export const postMiniCardsThird = [
  { title: "Proposals", value: "02" },
  { title: "Invited Creators", value: "02" },
  { title: "Hired", value: "02" },
];


export const activeMiniCards = [
  { title: "Proposals", value: "02" },
  { title: "Invited Creators", value: "02" },
  { title: "Hired", value: "02" },
];

export const whiteSlideContent = [
  {
    bodyText:
      "Summer Sale 2024, New Product Launch - Summer 2024, Back to School Sale 2024"
  },
  {
    bodyText: "Back to School Sale 2024 - Students and Reachers Get 20% Off"
  },
  { bodyText: "10,000$ Google Serch Campaign - Brand Terms, Millennial Mom, Luxury Goods Buyers Campaign" },
];
