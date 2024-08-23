import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import signature from "../assets/signatureWhite.webp";
import { IoClose, IoMenu } from "react-icons/io5";
import LINKS from "../constants/pageLinks";

// ***** fix hamburger menu styling *****

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      pos="fixed"
      zIndex="200"
      bg="transparent"
      backdropFilter="blur(25px) invert(.15)"
      w="100vw"
      h={{ base: "3.5rem", md: "5rem", lg: "7rem" }}
      color="white"
    >
      <Flex alignItems="center">
        <Image
          src={signature}
          alt="E L Starling signature"
          h={{ base: "50px", md: "70px", lg: "100px" }}
          fallbackSrc="https://via.placeholder.com/70"
          ml={{ base: "1rem", lg: "2rem" }}
          mt={{ base: "3px", lg: "null" }}
        />
        <Spacer />
        <HStack
          as="nav"
          spacing={{ base: 3, md: 6 }}
          mr={{ base: "1rem", md: "2rem" }}
          display={{ base: "none", md: "flex" }}
        >
          {/* {LINKS.map((link) => (
            <Box
              as="a"
              key={link}
              href={link === "Home" ? "#" : `#${link}`}
              _hover={{ textDecoration: "underline" }}
            >
              {link}
            </Box>
          ))} */}
          {LINKS.map((link) => (
            <Link
              key={link}
              href={link === "Home" ? "#" : `#${link}`}
              _hover={{
                color: "var(--orange)",
                fontWeight: "bold",
              }}
            >
              {link}
            </Link>
          ))}
        </HStack>
        <IconButton
          size="md"
          icon={isOpen ? <IoClose /> : <IoMenu />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          background="transparent"
          color="white"
        />
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <VStack as="nav" spacing={4}>
            {LINKS.map((link) => (
              <Box
                as="a"
                key={link}
                href={link === "Home" ? "#" : `#${link}`}
                _hover={{ color: "var(--orange)", fontWeight: "bold" }}
              >
                {link}
              </Box>
            ))}
          </VStack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
