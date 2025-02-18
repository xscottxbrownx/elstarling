import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import contactLinks from "../constants/contactLinks";
import ContactStar from "../assets/ContactStar.webp";
import SocialIconButton from "./SocialIconButton";

const Contact2 = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const renderMobile = (
    <VStack>
      <HStack>
        <Text>Represented By:</Text>
        <Link
          href="https://twitter.com/Briella_Noelle"
          isExternal
          aria-label="Gabriella Melendez"
        >
          Gabriella Melendez
        </Link>
      </HStack>
      <Link
        href="https://greatdogliterary.com/"
        isExternal
        aria-label="Great Dog Literary"
      >
        Great Dog Literary
      </Link>
    </VStack>
  );

  const renderDesktop = (
    <HStack>
      <Text>Represented By:</Text>
      <Link
        href="https://twitter.com/Briella_Noelle"
        isExternal
        aria-label="Gabriella Melendez"
      >
        Gabriella Melendez
      </Link>
      <Text> | </Text>
      <Link
        href="https://greatdogliterary.com/"
        isExternal
        aria-label="Great Dog Literary"
      >
        Great Dog Literary
      </Link>
    </HStack>
  );

  return (
    <Flex
      as="section"
      id="contact"
      w="100vw"
      py="6rem"
      direction="column"
      align="center"
      color="var(--secondary)"
    >
      <Heading as="h2" color="transparent" w="1px" h="1px">
        Contact
      </Heading>
      <VStack spacing={4}>
        <Image
          src={ContactStar}
          alt="Contact the author"
          fallback="https://placehold.co/320"
          w={{ base: "75%", md: "50%", lg: "33%", xl: "40%" }}
        />
        {isMobile ? renderMobile : renderDesktop}
        <HStack align="center" justify="space-around" direction="row">
          {contactLinks.map(({ label, href, icon }) => (
            <SocialIconButton
              key={label}
              label={label}
              href={href}
              icon={icon}
            />
          ))}
        </HStack>
        <Box width={{ base: "300px", md: "450px" }} mt="2rem">
          <iframe
            src="https://elstarling.substack.com/embed"
            title="signup for newsletter on E L Starling's subtack"
            width="100%"
            height="150"
          />
        </Box>
      </VStack>
    </Flex>
  );
};

export default Contact2;
