import { Flex, IconButton, Stack, Tooltip } from "@chakra-ui/react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
// import SocialButton from "./SocialButton";

// ***** make all orange *****

const Socials = () => (
  <Flex
    justify="center"
    align="center"
    // mb="2rem"
    h={{ base: "5rem" }}
    // borderBottom="solid 1px var(--darkgold)"
  >
    <Stack direction="row" spacing={{ base: 4, lg: 8 }}>
      {/* <SocialButton
        label={"Instagram"}
        href={"https://www.instagram.com/e_l_starling/"}
        size={{ base: 8, lg: 12 }}
        color="#FFA500"
      >
        <FaInstagram />
      </SocialButton>

      <SocialButton label={"Twitter/X"} href={"#"} size={{ base: 8, lg: 12 }}>
        <FaXTwitter />
      </SocialButton>

      <SocialButton label={"Tiktok"} href={"#"} size={{ base: 8, lg: 12 }}>
        <FaTiktok />
      </SocialButton>
      <SocialButton
        label={"Substack"}
        href={"https://elstarling.substack.com/"}
        size={{ base: 8, lg: 12 }}
      >
        <SiSubstack />
      </SocialButton> */}

      <Tooltip label="Instagram" closeOnClick={false} hasArrow>
        <IconButton
          as="a"
          href="https://www.instagram.com/e_l_starling/"
          target="_blank"
          rel="noreferrer"
          aria-label="instagram"
          variant="ghost"
          size="lg"
          fontSize="3xl"
          icon={<FaInstagram />}
          color="var(--tertiary)"
          bg="var(--blue)"
          _hover={{
            bg: "var(--tertiary)",
            color: "white",
          }}
          isRound
        />
      </Tooltip>
      <Tooltip label="Twitter / X" closeOnClick={false} hasArrow>
        <IconButton
          as="a"
          href="#"
          target="_blank"
          rel="noreferrer"
          aria-label="twitter/x"
          variant="ghost"
          size="lg"
          icon={<FaXTwitter size="28px" />}
          color="var(--tertiary)"
          bg="var(--blue)"
          _hover={{
            bg: "var(--tertiary)",
            color: "white",
          }}
          isRound
        />
      </Tooltip>
      <Tooltip label="Tiktok" closeOnClick={false} hasArrow>
        <IconButton
          as="a"
          href="#"
          target="_blank"
          rel="noreferrer"
          aria-label="tiktok"
          variant="ghost"
          size="lg"
          icon={<FaTiktok size="28px" />}
          color="var(--tertiary)"
          bg="(var(--blue))"
          _hover={{
            bg: "var(--tertiary)",
            color: "white",
          }}
          isRound
        />
      </Tooltip>

      <Tooltip label="Substack" closeOnClick={false} hasArrow>
        <IconButton
          as="a"
          href="https://elstarling.substack.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="substack"
          variant="ghost"
          size="lg"
          icon={<SiSubstack size="28px" />}
          color="var(--tertiary)"
          bg="var(--blue)"
          _hover={{
            bg: "var(--tertiary)",
            color: "white",
          }}
          isRound
        />
      </Tooltip>

      {/* <Box
        as="a"
        href="https://www.instagram.com/e_l_starling/"
        target="_blank"
      >
        <IconButton
          aria-label="instagram"
          variant="ghost"
          size="lg"
          fontSize="3xl"
          icon={<FaInstagram />}
          color="var(--tertiary)"
          bg="var(--blue)"
          _hover={{
            bg: "var(--tertiary)",
            color: "white",
          }}
          isRound
        />
      </Box>
      <Box as="a" href="#" target="_blank">
        <IconButton
          aria-label="twitter/x"
          variant="ghost"
          size="lg"
          icon={<FaXTwitter size="28px" />}
          color="var(--tertiary)"
          bg="var(--blue)"
          _hover={{
            bg: "var(--tertiary)",
            color: "white",
          }}
          isRound
        />
      </Box>
      <Box as="a" href="#" target="_blank">
        <IconButton
          aria-label="tiktok"
          variant="ghost"
          size="lg"
          icon={<FaTiktok size="28px" />}
          color="var(--tertiary)"
          bg="var(--blue)"
          _hover={{
            bg: "var(--tertiary)",
            color: "white",
          }}
          isRound
        />
      </Box>
      <Box as="a" href="https://elstarling.substack.com/" target="_blank">
        <IconButton
          aria-label="substack"
          variant="ghost"
          size="lg"
          icon={<SiSubstack size="28px" />}
          color="var(--tertiary)"
          bg="var(--blue)"
          _hover={{
            bg: "var(--tertiary)",
            color: "white",
          }}
          isRound
        />
      </Box>
      <Box
        as="a"
        href="https://www.instagram.com/e_l_starling/"
        target="_blank"
      >
        <IconButton
          aria-label="instagram"
          variant="ghost"
          size="lg"
          fontSize="3xl"
          icon={<FaInstagram />}
          color="var(--tertiary)"
          bg="var(--blue)"
          _hover={{
            bg: "var(--tertiary)",
            color: "white",
          }}
          isRound
        />
      </Box>
      <Box as="a" href="#" target="_blank">
        <IconButton
          aria-label="twitter/x"
          variant="ghost"
          size="lg"
          icon={<FaXTwitter size="28px" />}
          color="var(--tertiary)"
          bg="var(--blue)"
          _hover={{
            bg: "var(--tertiary)",
            color: "white",
          }}
          isRound
        />
      </Box>
      <Box as="a" href="#" target="_blank">
        <IconButton
          aria-label="tiktok"
          variant="ghost"
          size="lg"
          icon={<FaTiktok size="28px" />}
          color="var(--tertiary)"
          bg="var(--blue)"
          _hover={{
            bg: "var(--tertiary)",
            color: "white",
          }}
          isRound
        />
      </Box>
      <Box as="a" href="https://elstarling.substack.com/" target="_blank">
        <IconButton
          aria-label="substack"
          variant="ghost"
          size="lg"
          icon={<SiSubstack size="28px" />}
          color="var(--tertiary)"
          bg="var(--blue)"
          _hover={{
            bg: "var(--tertiary)",
            color: "white",
          }}
          isRound
        />
      </Box> */}
    </Stack>
  </Flex>
);

export default Socials;
