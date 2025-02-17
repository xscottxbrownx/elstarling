import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import photosDesktop from "../assets/PhotoStripDesktop.webp";
import photosMobile from "../assets/PhotoStripMobile.webp";

const Posts2 = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const photos = isMobile ? photosMobile : photosDesktop;

  return (
    <Flex
      as="section"
      id="posts"
      w="100vw"
      align="center"
      justify="center"
      mb="2.5rem"
    >
      <Image
        src={photos}
        alt="Day in the Life of E L Starling - coffee, cat, forest, and art"
        fallback={
          isMobile ? "https://placehold.co/320" : "https://placehold.co/768"
        }
      />
    </Flex>
  );
};

export default Posts2;
