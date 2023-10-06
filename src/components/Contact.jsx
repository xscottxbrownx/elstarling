import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  // useColorModeValue,
  VStack,
} from "@chakra-ui/react";
// import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

const Contact = () => {
  const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <Flex
      id="Contact"
      // bg={useColorModeValue("gray.100", "gray.900")}
      // bg="#504607"
      bg="#edfbf8"
      align="center"
      justify="center"
      mt="2rem"
      // color="#edfbf8"
      color="#504607"
      // css={{
      //   backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
      //   backgroundAttachment: "fixed",
      // }}
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 8, md: 12 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Get in Touch
            </Heading>

            <Stack
              spacing={4}
              // direction={{ base: "column", md: "row" }}
              direction="column"
            >
              <Stack
                align="center"
                justify="space-around"
                // direction={{ base: "row", md: "column" }}
                direction="row"
              >
                <Tooltip
                  label={hasCopied ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
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
                    onClick={onCopy}
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
                        // bg: "blue.500",
                        bg: "#70620a",
                        color: "white",
                        // color: useColorModeValue("white", "gray.700"),
                        // color: "#70620a",
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
                      // color="#edfbf8"
                      color="#70620a"
                      bg="#edfbf8"
                      _hover={{
                        // bg: "blue.500",
                        // bg: "#70620a",
                        bg: "#70620a",
                        // color: useColorModeValue("white", "gray.700"),
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
                        // bg: "blue.500",
                        bg: "#70620a",
                        // color: useColorModeValue("white", "gray.700"),
                        color: "white",
                      }}
                      isRound
                    />
                  </Box>
                </Tooltip>
              </Stack>

              <Box
                // bg={useColorModeValue("white", "gray.700")}
                // bg="#edfbf8"
                bg="whiteAlpha.900"
                borderRadius="lg"
                p={8}
                // color={useColorModeValue("gray.900", "whiteAlpha.900")}
                color="#504607"
                boxShadow="dark-lg"
              >
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    // colorScheme="blue"
                    // bg="blue.400"
                    bg="#70620a"
                    color="white"
                    _hover={{
                      // bg: "blue.500",
                      bg: "#504607",
                    }}
                    width="full"
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Contact;
