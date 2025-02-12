import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import contactLinks from "../constants/contactLinks";

const Contact2 = () => (
  <Flex
    id="Contact"
    direction={{ base: "column", lg: "row" }}
    color="var(--secondary)"
    mt="4rem"
    align={{ base: "center", lg: "flex-start" }}
    justify="space-evenly"
    gap={24}
  >
    <VStack spacing={4} ml={{ base: "0", lg: "2rem" }}>
      <Heading fontSize={{ base: "4xl", md: "5xl" }}>Contact</Heading>
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
  </Flex>
);

export default Contact2;
