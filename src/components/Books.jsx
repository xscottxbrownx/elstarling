import {
  Box,
  Flex,
  Image,
  Heading,
  HStack,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import BooksStar from "../assets/BooksStar.webp";
import BookCover from "../assets/BoundByStars.webp";

const Books = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const renderMobile = (
    <VStack>
      <Image src={BookCover} alt="Bound By Stars book" objectFit="cover" />
      <VStack bg="purple" w="100%">
        <Heading color="var(--secondary)">Genius Links Here</Heading>
        <Heading color="var(--secondary)">Spotify Link Here</Heading>
        <Heading color="var(--secondary)">Pinterest Link Here</Heading>
      </VStack>
    </VStack>
  );

  const renderDesktop = (
    <HStack>
      <Box flex="2">
        <Image src={BookCover} alt="Bound By Stars book" objectFit="cover" />
      </Box>
      <VStack bg="purple" flex="2">
        <Heading color="var(--secondary)">Genius Links Here</Heading>
        <Heading color="var(--secondary)">Spotify Link Here</Heading>
        <Heading color="var(--secondary)">Pinterest Link Here</Heading>
      </VStack>
    </HStack>
  );

  return (
    <Flex
      as="section"
      id="books"
      w="100vw"
      my="2.5rem"
      pt="2rem"
      pb={isMobile ? "2rem" : "1rem"}
      px={{ base: "2rem", lg: "5rem", xl: "8rem" }}
      align="center"
      direction="column"
      bg="var(--background)"
    >
      <Image src={BooksStar} alt="Books by author" w="75%" />
      {isMobile ? renderMobile : renderDesktop}
    </Flex>
  );
};

export default Books;
