import { Image, useBreakpointValue } from "@chakra-ui/react";
import books from "../assets/books.webp";

const ImageBreak = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Image
      src={books}
      alt="books stacked on a table"
      fallback={
        isMobile ? "https://placehold.co/320" : "https://placehold.co/1000"
      }
      h={{ base: "40vh", lg: "50vh", xl: "62vh" }}
      w="100vw"
      objectFit="fill"
    />
  );
};

export default ImageBreak;
