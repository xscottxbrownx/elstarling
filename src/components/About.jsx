// import aboutImage from "../assets/authorPortrait.webp";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

// ****** conditional render link to bio (or shorter bio) if mobile view ******

const About = () => (
  // <Container as="section" id="About" w="100vw" centerContent>
  <Flex
    as="section"
    id="About"
    direction={{ base: "column", md: "row" }}
    w="100vw"
    align="center"
    justify="center"
    px={{ base: "2rem", xl: "1rem" }}
    py="10rem"
  >
    <Heading mt="2rem" color="var(--secondary)">
      ABOUT the AUTHOR
    </Heading>
    {/* <Image
      src={aboutImage}
      alt="E L Starling"
      boxSize={{ base: "250px", md: "325px" }}
      objectFit="cover"
      fallbackSrc={{
        base: "https://via.placeholder.com/250",
        md: "https://via.placeholder.com/325",
      }}
      borderRadius="full"
    /> */}
    <Box
      maxW={{ base: "400px", md: "300px", lg: "600px" }}
      mt={{ base: "2rem", md: "0" }}
      px="4rem"
    >
      <Text color="var(--primary)" sx={{ lineHeight: "2", fontSize: "18px" }}>
        <Text as="b" sx={{ fontWeight: "extrabold" }}>
          Emily “E.L.” Starling
        </Text>{" "}
        grew up in the center of California, midway between all the cities
        anyone has ever heard of. Today she lives in Portland, Oregon with her
        family and, often, a borrowed cat named Spock who enjoys sneaking into
        her home to avoid the rain. She spends her days papercutting,
        screen-printing, running slowly, and hiking just as slowly. In her
        pre-dawn hours, she can be found writing YA speculative fiction novels
        full of longing and twisty secrets with a cup of coffee at the ready and
        the ever-present hope of pastries.{" "}
      </Text>
    </Box>
  </Flex>
  // </Container>
);

export default About;
