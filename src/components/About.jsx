import aboutImage from "../assets/authorPortrait.webp";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

const About = () => (
  <Container as="section" id="about" w="100vw" centerContent>
    <Flex
      direction={{ base: "column", md: "row" }}
      bg="#70620a"
      w="90vw"
      borderRadius="lg"
      align="center"
      justify="space-around"
      my="4rem"
      px={{ base: "2rem", xl: "10rem" }}
      py="5rem"
    >
      <Image
        src={aboutImage}
        alt="E L Starling"
        boxSize={{ base: "250px", md: "325px" }}
        objectFit="cover"
        fallbackSrc={{
          base: "https://via.placeholder.com/250",
          md: "https://via.placeholder.com/325",
        }}
        borderRadius="full"
      />
      <Box
        maxW={{ base: "400px", md: "300px", lg: "400px" }}
        mt={{ base: "2rem", md: "0" }}
      >
        <Text color="#edfbf8" sx={{ lineHeight: "2" }}>
          <Text as="b" sx={{ fontWeight: "extrabold" }}>
            EMILY “E.L.” STARLING
          </Text>{" "}
          grew up in the center of California, midway between all the cities
          anyone has ever heard of. During her career as a papercut artist,
          she&apos;s shown her work in galleries from California to New
          Hampshire and been featured in print, ad campaigns, an artist
          spotlight series, and a stop-motion short. Today she lives in
          Portland, Oregon where she runs her company, Bird Mafia, and spends
          her days papercutting, running slowly, hiking, befriending
          neighborhood cats, and doing the wholly unfun parts of running a small
          business. In her pre-dawn hours, she can be found writing{" "}
          <Text as="b" sx={{ fontWeight: "extrabold" }}>
            YA speculative fiction novels full of longing and twisty secrets
          </Text>{" "}
          with a cup of coffee at the ready and the ever-present hope of
          pastries.
        </Text>
      </Box>
    </Flex>
  </Container>
);

export default About;
