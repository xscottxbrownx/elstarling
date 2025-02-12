import { MdEmail } from "react-icons/md";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

const contactLinks = [
  {
    label: "Send Email",
    href: "mailto:emilylstarling@gmail.com",
    icon: <MdEmail />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/e_l_starling/",
    icon: <FaInstagram />,
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: <FaXTwitter size="28px" />,
  },
  {
    label: "Tiktok",
    href: "#",
    icon: <FaTiktok size="28px" />,
  },
  {
    label: "Substack",
    href: "https://elstarling.substack.com/",
    icon: <SiSubstack size="28px" />,
  },
];

export default contactLinks;
