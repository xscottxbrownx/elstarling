import { Flex, Heading, Text } from "@chakra-ui/react";

const PdfViewer = () => {
  <Flex
    as="section"
    id="excerpt"
    direction={{ base: "column", lg: "row" }}
    w="100vw"
    h="50vh"
    align="center"
    justify="center"
    my="2.5rem"
    px={{ base: "2rem", lg: "5rem", xl: "18rem" }}
    py="6rem"
    bg="var(--background)"
  >
    <Heading as="h2">PDF Viewer</Heading>
    <Text color="var(--secondary)" fontSize="18px">
      This is a placeholder for the PDF viewer component.
    </Text>
  </Flex>;
};

export default PdfViewer;
