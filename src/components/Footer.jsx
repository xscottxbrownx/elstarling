import {
  Box,
  Container,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import SocialButton from "./SocialButton";
import signature from "../assets/signatureBlack.webp";
import LINKS from "../constants/pageLinks";

export default function Footer() {
  return (
    <Box
      as="footer"
      // bg={useColorModeValue("gray.50", "gray.900")}
      // color={useColorModeValue("gray.700", "gray.200")}
      color="#70620a"
      // bg="#edfbf8"
      // bg="white"
      bg="whiteAlpha.900"
      borderTop="solid 1px #504607"
      mt="8rem"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Image
          src={signature}
          alt="E L Starling signature"
          h={{ base: "75px", md: "100px", lg: "175px" }}
          fallbackSrc="https://via.placeholder.com/70"
        />
        <Stack direction={"row"} spacing={6}>
          {LINKS.map((link) => (
            <Box
              as="a"
              key={link}
              href={link === "Home" ? "#" : `#${link}`}
              transition="0.3s"
              _hover={{ color: "#504607", transform: "translateY(-5px)" }}
            >
              {link}
            </Box>
          ))}
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/e_l_starling/"}
              size={{ base: 8 }}
              // _hover={{
              //   color: "#504607",
              // }}
            >
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"Twitter"} href={"#"} size={{ base: 8 }}>
              <FaXTwitter />
            </SocialButton>
            <SocialButton label={"Tiktok"} href={"#"} size={{ base: 8 }}>
              <FaTiktok />
            </SocialButton>
            <SocialButton
              label={"Substack"}
              href={"https://elstarling.substack.com/"}
              size={{ base: 8 }}
              _hover={{
                color: "#504607",
              }}
            >
              <SiSubstack />
            </SocialButton>
          </Stack>
          <Text mb={{ base: "1rem", md: "0" }}>
            © 2023 E L Starling, All rights reserved.
          </Text>
          <Link
            href="https://www.scottxbrown.com"
            isExternal
            _hover={{
              color: "#504607",
            }}
          >
            Built by: SxB Development
          </Link>
        </Container>
      </Box>
    </Box>
  );
}
