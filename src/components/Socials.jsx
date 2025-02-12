import { Flex, IconButton, Stack, Tooltip } from "@chakra-ui/react";
import contactLinks from "../constants/contactLinks";

const Socials = () => {
  const socialLinks = contactLinks.filter(
    (link) => link.label !== "Send Email"
  );

  return (
    <Flex justify="center" align="center" h={{ base: "5rem" }} bg="white">
      <Stack direction="row" spacing={{ base: 4, lg: 8 }}>
        {socialLinks.map((link) => (
          <Tooltip
            key={link.label}
            label={link.label}
            closeOnClick={false}
            hasArrow
          >
            <IconButton
              as="a"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label.toLowerCase()}
              variant="ghost"
              size="lg"
              fontSize={link.label === "Instagram" ? "3xl" : null}
              icon={link.icon}
              color="var(--tertiary)"
              bg="var(--blue)"
              _hover={{
                bg: "var(--tertiary)",
                color: "white",
              }}
              isRound
            />
          </Tooltip>
        ))}
      </Stack>
    </Flex>
  );
};

export default Socials;
