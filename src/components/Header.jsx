import { Box, Flex, Spacer, HStack } from "@chakra-ui/react";
import signature from "../assets/signatureWhite.webp";
import { Image } from "@chakra-ui/react";
import LINKS from "../constants/pageLinks";

const Header = () => (
  <Box
    as="header"
    pos="fixed"
    zIndex="200"
    bg="transparent"
    backdropFilter="blur(25px) invert(.15)"
    w="100vw"
    h={{ base: "3rem", lg: "5rem" }}
    color="white"
  >
    <Flex>
      <Image
        src={signature}
        alt="E L Starling signature"
        h={{ base: "40px", lg: "70px" }}
        fallbackSrc="https://via.placeholder.com/70"
        ml={{ base: "1rem", lg: "2rem" }}
        mt={{ base: "3px", lg: "null" }}
      />
      <Spacer />
      <HStack
        as="nav"
        spacing={{ base: 3, lg: 6 }}
        mr={{ base: "1rem", lg: "2rem" }}
      >
        {LINKS.map((link) => (
          <Box
            as="a"
            key={link}
            href={link === "Home" ? "#" : `#${link}`}
            _hover={{ textDecoration: "underline" }}
          >
            {link}
          </Box>
        ))}
      </HStack>
    </Flex>
  </Box>
);

export default Header;
