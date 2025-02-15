import { MdEmail } from "react-icons/md";
import { FaInstagram, FaTiktok } from "react-icons/fa";
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
    label: "Tiktok",
    href: "https://www.tiktok.com/@elstarling",
    icon: <FaTiktok size="28px" />,
  },
  {
    label: "Substack",
    href: "https://elstarling.substack.com/",
    icon: <SiSubstack size="28px" />,
  },
];

export default contactLinks;
