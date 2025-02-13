import { Image } from "@chakra-ui/react";
import books from "../assets/books.webp";

const ImageBreak = () => {
  return (
    <Image
      src={books}
      alt="books stacked on a table"
      h="70vh"
      w="100vw"
      objectFit="fill"
    />
  );
};

export default ImageBreak;
