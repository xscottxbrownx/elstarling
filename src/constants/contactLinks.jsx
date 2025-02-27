import { MdEmail } from "react-icons/md";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { SiBluesky, SiSubstack, SiThreads } from "react-icons/si";

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
    label: "Threads",
    href: "https://www.threads.net/@e_l_starling",
    icon: <SiThreads size="28px" />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@elstarling",
    icon: <FaTiktok size="28px" />,
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/elstarling.bsky.social",
    icon: <SiBluesky size="28px" />,
  },
  {
    label: "Substack",
    href: "https://elstarling.substack.com/",
    icon: <SiSubstack size="28px" />,
  },
];

export default contactLinks;
