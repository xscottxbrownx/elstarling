import {
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  Tooltip,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import contactLinks from "../constants/contactLinks";
import ContactStar from "../assets/ContactStar.webp";

// ***** add signup for substack? *****

const Contact2 = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      id="contact"
      direction={{ base: "column", lg: "row" }}
      color="var(--secondary)"
      mt="2.5rem"
      py="5rem"
      align={{ base: "center", lg: "flex-start" }}
      justify="space-evenly"
      gap={24}
    >
      <VStack spacing={4} ml={{ base: "0", lg: "2rem" }}>
        <Image
          src={ContactStar}
          alt="Contact the author"
          w={{ base: "75%", md: "50%" }}
        />
        <HStack align="center" justify="space-around" direction="row">
          {contactLinks.map(({ label, href, icon }) => (
            <Tooltip key={label} label={label} closeOnClick={false} hasArrow>
              <IconButton
                as="a"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label.toLowerCase()}
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={icon}
                color="var(--tertiary)"
                bg="var(--blue)"
                _hover={{ bg: "var(--tertiary)", color: "white" }}
                isRound
              />
            </Tooltip>
          ))}
        </HStack>
        {isMobile ? (
          <>
            <VStack>
              <HStack>
                <Text>Represented By:</Text>
                <Link href="https://twitter.com/Briella_Noelle" isExternal>
                  Gabriella Melendez
                </Link>
              </HStack>
              <Link href="https://greatdogliterary.com/" isExternal>
                Great Dog Literary
              </Link>
            </VStack>
          </>
        ) : (
          <>
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
          </>
        )}
      </VStack>
    </Flex>
  );
};

export default Contact2;
