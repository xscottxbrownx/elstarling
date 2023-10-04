import { Flex, Stack } from "@chakra-ui/react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import SocialButton from "./SocialButton";

const Socials = () => (
  <Flex
    justify={{ base: "flex-end", lg: "center" }}
    align="center"
    mb="2rem"
    h={{ base: "3rem", lg: "5rem" }}
    bg="transparent"
    // bg="#edfbf8"
    backdropFilter="blur(100px) invert(.15)"
    pos="sticky"
    top="0"
    zIndex="200"
    borderBottom="solid 1px #504607"
  >
    <Stack
      direction="row"
      spacing={{ base: 4, lg: 8 }}
      mr={{ base: "2rem", lg: "null" }}
    >
      {/* <Button
        leftIcon={<FaInstagram />}
        colorScheme="gray"
        variant="ghost"
        size="lg"
        borderRadius="full"
      >
        Instagram
      </Button>
      <Button
        leftIcon={<FaXTwitter />}
        colorScheme="gray"
        variant="ghost"
        size="lg"
        borderRadius="3xl"
      >
        Twitter
      </Button>
      <Button
        leftIcon={<FaTiktok />}
        colorScheme="gray"
        variant="ghost"
        size="lg"
        borderRadius="full"
      >
        Tiktok
      </Button>
      <Button
        leftIcon={<SiSubstack />}
        colorScheme="gray"
        variant="ghost"
        size="lg"
        borderRadius="full"
      >
        Substack
      </Button> */}
      <SocialButton
        label={"Instagram"}
        href={"https://www.instagram.com/e_l_starling/"}
      >
        <FaInstagram />
      </SocialButton>
      <SocialButton label={"Twitter"} href={"#"}>
        <FaXTwitter />
      </SocialButton>
      <SocialButton label={"Tiktok"} href={"#"}>
        <FaTiktok />
      </SocialButton>
      <SocialButton
        label={"Substack"}
        href={"https://elstarling.substack.com/"}
      >
        <SiSubstack />
      </SocialButton>
    </Stack>
  </Flex>
);

export default Socials;
