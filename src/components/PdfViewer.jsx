import { Flex, Heading, Text } from "@chakra-ui/react";

const PdfViewer = () => (
  <Flex
    as="section"
    id="excerpt"
    direction="column"
    w="100vw"
    h="100vh"
    align="center"
    justify="center"
    my="2.5rem"
    px={{ base: "2rem", lg: "5rem", xl: "18rem" }}
    py="6rem"
    bg="var(--background)"
  >
    <Heading as="h2" color="black">
      PDF Viewer
    </Heading>
    <Text color="var(--secondary)" fontSize="18px">
      This is a placeholder for the PDF viewer component.
    </Text>
  </Flex>
);

export default PdfViewer;
