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
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
// import substack from "../assets/substack_logo.webp";

const Contact2 = () => {
  const contactLinks = [
    {
      label: "Send Email",
      href: "mailto:emilylstarling@gmail.com",
      icon: <MdEmail />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/e_l_starling/",
      icon: <FaInstagram />,
    },
    { label: "Twitter / X", href: "#", icon: <FaXTwitter size="28px" /> },
    { label: "Tiktok", href: "#", icon: <FaTiktok size="28px" /> },
    {
      label: "Substack",
      href: "https://elstarling.substack.com/",
      icon: <SiSubstack size="28px" />,
    },
  ];

  return (
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
};

export default Contact2;
