import { useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Document, Page, pdfjs } from "react-pdf";
import PdfFile from "../assets/BoundByStars_Ch1-3.pdf";

const PdfViewer = () => {
  // Don't want to be able to download or print
  // own separate page, so not sure if need as, id, direction, etc.
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Flex
      as="section"
      id="excerpt"
      direction="column"
      // w="100vw"
      // h="100vh"
      align="center"
      justify="center"
      // my="2.5rem"
      // px={{ base: "2rem", lg: "5rem", xl: "18rem" }}
      // py="6rem"
      bg="var(--background)"
    >
      <Document
        className="pdf-container"
        file={PdfFile}
        // onContextMenu={(e) => e.preventDefault()}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.error("Error loading PDF:", error)}
        onLoadProgress={(progress) =>
          console.log("Loading progress:", progress)
        }
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <Text color="var(--secondary)" fontSize="18px" mb="1rem">
        Page {pageNumber} of {numPages}
      </Text>
    </Flex>

    // <Flex
    //   as="section"
    //   id="excerpt"
    //   direction="column"
    //   w="100vw"
    //   h="100vh"
    //   align="center"
    //   justify="center"
    //   // my="2.5rem"
    //   // px={{ base: "2rem", lg: "5rem", xl: "18rem" }}
    //   // py="6rem"
    //   bg="var(--background)"
    // >
    //   {/* <Heading as="h2" color="black">
    //     PDF Viewer
    //   </Heading>
    //   <Text color="var(--secondary)" fontSize="18px">
    //     This is a placeholder for the PDF viewer component.
    //   </Text> */}
    //   <embed src={PdfFile} width="100%" height="100%" />
    // </Flex>
  );
};

export default PdfViewer;
