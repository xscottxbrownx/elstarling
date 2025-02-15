import {
  Box,
  Flex,
  Image,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
  VStack,
  Button,
} from "@chakra-ui/react";
import BooksStar from "../assets/BooksStar.webp";
import BookCover from "../assets/BoundByStars.webp";
import { FaPinterest, FaSpotify } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

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
      <Box flex="3">
        <Image src={BookCover} alt="Bound By Stars book" objectFit="cover" />
      </Box>
      <VStack flex="1" py="1rem" alignItems="start">
        <Button border="solid black 1px" h="56px" w="280px">
          <GiBrain size="36px" color="var(--secondary)" />
          <Text color="var(--secondary)" ml="10px" fontSize="24px">
            Preorder
          </Text>
        </Button>
        <Button border="solid black 1px" h="56px" w="280px">
          {/* <FaSpotify size="48px" color="#1ED760" /> */}
          <FaSpotify size="36px" color="var(--secondary)" />
          <Text color="var(--secondary)" ml="10px" fontSize="24px">
            Playlist
          </Text>
        </Button>
        <Button border="solid black 1px" h="56px" w="280px">
          {/* <FaPinterest size="48px" color="#E60023" /> */}
          <FaPinterest size="36px" color="var(--secondary)" />
          <Text color="var(--secondary)" ml="10px" fontSize="24px">
            Moodboard
          </Text>
        </Button>
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
      px={{ base: "2rem", lg: "5rem", xl: "18rem" }}
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
