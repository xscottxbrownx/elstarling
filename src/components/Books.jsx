import {
  Box,
  Flex,
  Image,
  HStack,
  Link,
  Text,
  useBreakpointValue,
  VStack,
  Button,
} from "@chakra-ui/react";
import BooksStarDesktop from "../assets/BooksStar.webp";
import BooksStarMobile from "../assets/BooksStarMobile.webp";
import BookCover from "../assets/BoundByStars.webp";
import { FaPinterest, FaSpotify } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const Books = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const renderMobile = (
    <VStack>
      <Image src={BookCover} alt="Bound By Stars book" objectFit="cover" />
      <VStack w="100%">
        <Button
          border="solid black 1px"
          h="56px"
          w={{ base: "215px", md: "280px" }}
        >
          <GiBrain size="36px" color="var(--secondary)" />
          <Text color="var(--secondary)" ml="10px" fontSize="24px">
            Preorder
          </Text>
        </Button>
        <Button
          border="solid black 1px"
          h="56px"
          w={{ base: "215px", md: "280px" }}
        >
          {/* <FaSpotify size="48px" color="#1ED760" /> */}
          <FaSpotify size="36px" color="var(--secondary)" />
          <Text color="var(--secondary)" ml="10px" fontSize="24px">
            Playlist
          </Text>
        </Button>
        <Button
          border="solid black 1px"
          h="56px"
          w={{ base: "215px", md: "280px" }}
        >
          {/* <FaPinterest size="48px" color="#E60023" /> */}
          <FaPinterest size="36px" color="var(--secondary)" />
          <Text color="var(--secondary)" ml="10px" fontSize="24px">
            Moodboard
          </Text>
        </Button>
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
        <Link
          href="https://www.pinterest.com/emilylstarling/boundless/"
          isExternal
        >
          <Button border="solid black 1px" h="56px" w="280px">
            {/* <FaPinterest size="48px" color="#E60023" /> */}
            <HStack>
              <FaPinterest size="36px" color="var(--secondary)" />
              <Text color="var(--secondary)" ml="10px" fontSize="24px">
                Moodboard
              </Text>
            </HStack>
          </Button>
        </Link>
      </VStack>
    </HStack>
  );

  return (
    <Flex
      as="section"
      id="books"
      w="100vw"
      my="2.5rem"
      py="6rem"
      px={{ base: "2rem", lg: "5rem", xl: "18rem" }}
      align="center"
      direction="column"
      bg="var(--background)"
    >
      <Image
        src={isMobile ? BooksStarMobile : BooksStarDesktop}
        alt="Books by E L Starling"
        w={{ base: "70%", md: "45%", lg: "75%" }}
      />
      {isMobile ? renderMobile : renderDesktop}
    </Flex>
  );
};

export default Books;
