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
      <Image src={photos} />
    </Flex>
  );
};

export default Posts2;
