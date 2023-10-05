import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import substack from "../assets/substack_logo.webp";

const Contact2 = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      color="#504607"
      mt="2rem"
      mb="4rem"
      align={{ base: "center", lg: "flex-start" }}
      justify="space-evenly"
      gap={24}
    >
      <VStack spacing={4} ml={{ base: "0", lg: "2rem" }}>
        <Heading
          fontSize={{
            base: "4xl",
            md: "5xl",
          }}
        >
          Get In Touch
        </Heading>
        <HStack
          align="center"
          justify="space-around"
          // direction={{ base: "row", md: "column" }}
          direction="row"
        >
          <Tooltip label="Send Email" closeOnClick={false} hasArrow>
            <IconButton
              aria-label="email"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              icon={<MdEmail />}
              color="#70620a"
              bg="#edfbf8"
              _hover={{
                bg: "#70620a",
                color: "white",
              }}
              // onClick={onCopy}
              isRound
            />
          </Tooltip>

          <Tooltip label="Instagram" closeOnClick={false} hasArrow>
            <Box as="a" href="https://www.instagram.com/e_l_starling/">
              <IconButton
                aria-label="instagram"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={<FaInstagram />}
                color="#70620a"
                bg="#edfbf8"
                _hover={{
                  bg: "#70620a",
                  color: "white",
                }}
                isRound
              />
            </Box>
          </Tooltip>

          <Tooltip label="Twitter / X" closeOnClick={false} hasArrow>
            <Box as="a" href="#">
              <IconButton
                aria-label="twitter/x"
                variant="ghost"
                size="lg"
                icon={<FaXTwitter size="28px" />}
                color="#70620a"
                bg="#edfbf8"
                _hover={{
                  bg: "#70620a",
                  color: "white",
                }}
                isRound
              />
            </Box>
          </Tooltip>

          <Tooltip label="Tiktok" closeOnClick={false} hasArrow>
            <Box as="a" href="#">
              <IconButton
                aria-label="tiktok"
                variant="ghost"
                size="lg"
                icon={<FaTiktok size="28px" />}
                color="#70620a"
                bg="#edfbf8"
                _hover={{
                  bg: "#70620a",
                  color: "white",
                }}
                isRound
              />
            </Box>
          </Tooltip>

          <Tooltip label="Substack" closeOnClick={false} hasArrow>
            <Box as="a" href="https://elstarling.substack.com/">
              <IconButton
                aria-label="substack"
                variant="ghost"
                size="lg"
                icon={<SiSubstack size="28px" />}
                color="#70620a"
                bg="#edfbf8"
                _hover={{
                  bg: "#70620a",
                  color: "white",
                }}
                isRound
              />
            </Box>
          </Tooltip>
        </HStack>
        <HStack>
          <Text>Represented By:</Text>
          <Link href="https://twitter.com/Briella_Noelle" isExternal>
            Gabriella Melendez
          </Link>
          <Text> | </Text>
          <Link href="https://greatdogliterary.com/" isExternal>
            Great Dog Literary
          </Link>
        </HStack>
      </VStack>

      <VStack spacing={4} mr={{ base: "0", lg: "2rem" }}>
        <Heading
          fontSize={{
            base: "4xl",
            md: "5xl",
          }}
        >
          Stay In Touch
        </Heading>
        <HStack align="center" spacing="18px">
          <Text fontSize="2xl">
            Signup for my <br />
            newsletter on
          </Text>
          <Link
            href="https://elstarling.substack.com/"
            isExternal
            _hover={{ bg: "gray.200" }}
          >
            <Image src={substack} alt="substack logo" htmlWidth="200px" />
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Contact2;
