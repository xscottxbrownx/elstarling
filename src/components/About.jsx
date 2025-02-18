import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import AboutStar from "../assets/AboutStar.webp";

const About = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const renderMobileText = (
    <Text color="var(--primary)" sx={{ lineHeight: "2", fontSize: "18px" }}>
      <Text as="b" sx={{ fontWeight: "extrabold" }}>
        Emily “E.L.” Starling
      </Text>{" "}
      lives in Portland, Oregon with her high school sweetheart and an orange
      cat named Pigeon. In her pre-dawn hours, she writes speculative fiction
      full of longing and twisty secrets with a cup of coffee at the ready and
      the ever-present hope of pastries.{" "}
    </Text>
  );

  const renderDesktopText = (
    <Text color="var(--primary)" sx={{ lineHeight: "2", fontSize: "18px" }}>
      <Text as="b" sx={{ fontWeight: "extrabold" }}>
        Emily “E.L.” Starling
      </Text>{" "}
      grew up in the center of California, midway between all the cities anyone
      has ever heard of. Today she lives in Portland, Oregon with her high
      school sweetheart and a needy orange cat named Pigeon. She spends her days
      papercutting, screen-printing, running slowly, and hiking just as slowly.
      In her pre-dawn hours, she can be found writing YA speculative fiction
      novels full of longing and twisty secrets with a cup of coffee at the
      ready and the ever-present hope of pastries.{" "}
    </Text>
  );

  return (
    <Flex
      as="section"
      id="about"
      direction={{ base: "column", lg: "row" }}
      w="100vw"
      align="center"
      justify="center"
      mb="2.5rem"
      px={{ base: "2rem", lg: "5rem", xl: "18rem" }}
      py="6rem"
      bg="var(--background)"
    >
      <Heading as="h2" color="var(--background)" w="1px" h="1px">
        About the Author
      </Heading>
      <Image
        src={AboutStar}
        alt="About the Author (E L Starling)"
        fallback="https://placehold.co/250"
        mt="2rem"
        w={{ base: "75%", md: "45%", lg: "30%" }}
        height="auto"
      />
      <Box
        maxW={{ base: "400px", md: "600px", xl: "1000px" }}
        mt={{ base: "2rem", lg: "0" }}
        px={{ base: "1rem", lg: "4rem" }}
      >
        {isMobile ? renderMobileText : renderDesktopText}
      </Box>
    </Flex>
  );
};

export default About;
