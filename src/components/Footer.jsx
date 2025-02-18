import {
  Box,
  Container,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import logoSquare from "../assets/ELSsmallSquareLogoBLUE.webp";

export default function Footer() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const renderMobile = (
    <>
      <Image
        src={logoSquare}
        alt="E L Starling square logo"
        h="75px"
        fallbackSrc="https://placehold.co/75"
      />
      <Text>© 2025 E L Starling, All rights reserved.</Text>
    </>
  );

  const renderDesktop = (
    <>
      <Text>© 2025 E L Starling, All rights reserved.</Text>
      <Image
        src={logoSquare}
        alt="E L Starling logo"
        h="75px"
        fallbackSrc="https://placehold.co/75"
      />
    </>
  );

  return (
    <Box as="footer" color="var(--secondary)">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 2, md: 4 }}
        justify={{ base: "center", md: "space-between" }}
        align="center"
      >
        {isMobile ? renderMobile : renderDesktop}
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
      </Container>
    </Box>
  );
}
