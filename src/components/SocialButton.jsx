import PropTypes from "prop-types";
import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";

export default function SocialButton({ children, label, href, size }) {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={size}
      h={size}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      target="_blank"
      _hover={{
        bg: useColorModeValue("blackAlpha.300", "whiteAlpha.300"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

SocialButton.propTypes = {
  children: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.object.isRequired,
};
