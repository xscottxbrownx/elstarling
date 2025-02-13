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
import logoSquare from "../assets/ELSsquareBLK.webp";

export default function Footer() {
  const isMobile = useBreakpointValue({ base: true, md: false });

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
        {isMobile ? (
          <>
            <Image
              src={logoSquare}
              alt="E L Starling logo"
              h={{ base: "75px" }}
              fallbackSrc="https://via.placeholder.com/75"
            />
            <Text>© 2025 E L Starling, All rights reserved.</Text>
          </>
        ) : (
          <>
            <Text>© 2025 E L Starling, All rights reserved.</Text>
            <Image
              src={logoSquare}
              alt="E L Starling logo"
              h={{ base: "75px" }}
              fallbackSrc="https://via.placeholder.com/75"
            />
          </>
        )}
        <HStack>
          <Text>Built by:</Text>
          <Link
            href="https://www.scottxbrown.com"
            isExternal
            _hover={{
              color: "var(--tertiary)",
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
