import { Box, Flex, Heading, Text } from "@chakra-ui/react";

// ****** conditional render link to bio (or shorter bio) if mobile view ******

const About = () => (
  <Flex
    as="section"
    id="about"
    direction={{ base: "column", lg: "row" }}
    w="100vw"
    align="center"
    justify="center"
    mb="2.5rem"
    px={{ base: "2rem", xl: "1rem" }}
    py="10rem"
    bg="var(--background)"
  >
    <Heading
      mt="2rem"
      color="var(--secondary)"
      whiteSpace="pre-line"
      textAlign="center"
    >
      ABOUT{"\n"}the{"\n"}AUTHOR
    </Heading>
    <Box
      maxW={{ base: "400px", md: "600px", xl: "1000px" }}
      mt={{ base: "2rem", lg: "0" }}
      px={{ base: "1rem", lg: "4rem" }}
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
