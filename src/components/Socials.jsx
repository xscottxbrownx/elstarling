import { Flex, Stack } from "@chakra-ui/react";
import contactLinks from "../constants/contactLinks";
import SocialIconButton from "./SocialIconButton";

const Socials = () => {
  const socialLinks = contactLinks.filter(
    ({ label }) => label !== "Send Email"
  );

  return (
    <Flex justify="center" align="center" h={{ base: "5rem" }} bg="white">
      <Stack direction="row" spacing={{ base: 4, lg: 8 }}>
        {socialLinks.map(({ label, href, icon }) => (
          <SocialIconButton key={label} label={label} href={href} icon={icon} />
        ))}
      </Stack>
    </Flex>
  );
};

export default Socials;
