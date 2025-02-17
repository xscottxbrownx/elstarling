import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { IoClose, IoMenu } from "react-icons/io5";
import LINKS from "../constants/pageLinks";
import logoMedium from "../assets/ELStarlingMedLogoBLUE.webp";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasScrolled, setHasScrolled] = useState(false);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 175) {
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
      minHeight="75px"
      alignContent="center"
      color="var(--tertiary)"
      pt={isOpen ? "0.77rem" : "0"}
      pb={isOpen ? "3rem" : "0"}
    >
      <Flex alignItems="center">
        <Image
          src={logoMedium}
          alt="E L Starling logo"
          h="50px"
          fallbackSrc="https://via.placeholder.com/50"
          ml={{ base: "1rem", md: "2rem" }}
          style={{
            display: hasScrolled || isMobile || isOpen ? "block" : "none",
          }}
        />
        <Spacer />
        <HStack
          as="nav"
          spacing={{ base: 2, md: 4 }}
          mr={{ base: "1rem", md: "2rem" }}
          hideBelow="md"
        >
          {LINKS.map((link) => (
            <Link
              key={link}
              href={link === "home" ? "#" : `#${link}`}
              fontWeight="bold"
              fontSize="22px"
              p="0.75rem"
              _hover={{
                textDecoration: "underline",
              }}
            >
              {link.toUpperCase()}
            </Link>
          ))}
        </HStack>
        <IconButton
          size="lg"
          icon={isOpen ? <IoClose size="28px" /> : <IoMenu size="28px" />}
          aria-label="Open Menu"
          hideFrom="md"
          mr={{ base: "1rem", md: "2rem" }}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          rounded="full"
          color="var(--tertiary)"
          _hover={{
            bg: "var(--tertiary)",
            color: "white",
          }}
        />
      </Flex>

      {isOpen && (
        <Box hideFrom="md" background="white" pt="3rem">
          <VStack as="nav" spacing={4}>
            {LINKS.map((link) => (
              <Link
                key={link}
                href={link === "home" ? "#" : `#${link}`}
                onClick={onClose}
                fontWeight="bold"
                fontSize="22px"
                p="0.75rem"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                {link.toUpperCase()}
              </Link>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
