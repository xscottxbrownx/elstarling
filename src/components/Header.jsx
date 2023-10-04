import { Box } from "@chakra-ui/react";
import signature from "../assets/signatureWhite.webp";
import { Image } from "@chakra-ui/react";

const Header = () => (
  <Box
    as="header"
    pos="fixed"
    zIndex="201"
    bg="transparent"
    // bg="lightseagreen"
  >
    <Image
      src={signature}
      alt="E L Starling signature"
      h={{ base: "40px", lg: "70px" }}
      fallbackSrc="https://via.placeholder.com/70"
      ml="2rem"
      mt={{ base: "3px", lg: "null" }}
    />
  </Box>
);

export default Header;
