import { useState, useEffect } from "react";
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
import logo from "../assets/ELStarlingLogoBLK.webp";
import { IoClose, IoMenu } from "react-icons/io5";
import LINKS from "../constants/pageLinks";

// ***** fix hamburger menu styling *****

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      as="header"
      pos="fixed"
      zIndex="200"
      bg="white"
      w="100vw"
      h="75px"
      alignContent="center"
      color="var(--tertiary)"
    >
      <Flex alignItems="center">
        {hasScrolled && (
          <Image
            src={logo}
            alt="E L Starling signature"
            h="50px"
            fallbackSrc="https://via.placeholder.com/50"
            ml={{ base: "1rem", lg: "2rem" }}
            mt={{ base: "3px", lg: "null" }}
          />
        )}
        <Spacer />
        <HStack
          as="nav"
          spacing={{ base: 3, md: 6 }}
          mr={{ base: "1rem", md: "2rem" }}
          display={{ base: "none", md: "flex" }}
        >
          {LINKS.map((link) => (
            <Link
              key={link}
              href={link === "Home" ? "#" : `#${link}`}
              _hover={{
                color: "var(--tertiary)",
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
                _hover={{ color: "var(--tertiary)", fontWeight: "bold" }}
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
