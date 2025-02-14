import { Image } from "@chakra-ui/react";
import books from "../assets/books.webp";

const ImageBreak = () => {
  return (
    <Image
      src={books}
      alt="books stacked on a table"
      h={{ base: "40vh", lg: "50vh", xl: "60vh" }}
      w="100vw"
      objectFit="fill"
    />
  );
};

export default ImageBreak;
