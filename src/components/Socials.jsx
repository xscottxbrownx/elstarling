import { Flex, Stack } from "@chakra-ui/react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import SocialButton from "./SocialButton";

const Socials = () => (
  <Flex
    justify="center"
    align="center"
    mb="2rem"
    h={{ base: "3rem", lg: "5rem" }}
    borderBottom="solid 1px #504607"
  >
    <Stack direction="row" spacing={{ base: 4, lg: 8 }}>
      <SocialButton
        label={"Instagram"}
        href={"https://www.instagram.com/e_l_starling/"}
        size={{ base: 8, lg: 12 }}
      >
        <FaInstagram />
      </SocialButton>
      <SocialButton label={"Twitter/X"} href={"#"} size={{ base: 8, lg: 12 }}>
        <FaXTwitter />
      </SocialButton>
      <SocialButton label={"Tiktok"} href={"#"} size={{ base: 8, lg: 12 }}>
        <FaTiktok />
      </SocialButton>
      <SocialButton
        label={"Substack"}
        href={"https://elstarling.substack.com/"}
        size={{ base: 8, lg: 12 }}
      >
        <SiSubstack />
      </SocialButton>
    </Stack>
  </Flex>
);

export default Socials;
