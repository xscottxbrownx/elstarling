import {
  Box,
  Container,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import logoSquare from "../assets/ELSsmallSquareLogoBLUE.webp";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const renderMobile = (
    <VStack spacing={4}>
      <Image
        src={logoSquare}
        alt="E L Starling square logo"
        h="75px"
        fallbackSrc="https://placehold.co/75"
      />
      <Text>© 2025 E L Starling, All rights reserved.</Text>
      <HStack>
        <Text>Built by:</Text>
        <Link
          href="https://www.scottxbrown.com"
          isExternal
          aria-label="SxB Development"
          _hover={{
            textDecoration: "underline",
          }}
        >
          SxB Development
        </Link>
      </HStack>
    </VStack>
  );

  const renderDesktop = (
    <>
      <HStack
        justify="space-between"
        w="full"
        maxW="6xl"
        my="1rem"
        alignItems="flex-end"
      >
        <Text>© 2025 E L Starling, All rights reserved.</Text>
        <HStack>
          <Text>Built by:</Text>
          <Link
            href="https://www.scottxbrown.com"
            isExternal
            aria-label="SxB Development"
            _hover={{
              textDecoration: "underline",
            }}
          >
            SxB Development
          </Link>
        </HStack>
      </HStack>
      <Box position="absolute" left="50%" transform="translateX(-50%)">
        <Image
          src={logoSquare}
          alt="E L Starling logo"
          h="75px"
          fallbackSrc="https://placehold.co/75"
        />
      </Box>
    </>
  );

  return (
    <Box as="footer" color="var(--secondary)" position="relative">
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align="center"
      >
        {isMobile ? renderMobile : renderDesktop}
      </Container>
    </Box>
  );
};

export default Footer;
