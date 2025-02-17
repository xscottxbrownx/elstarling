import { IconButton, Tooltip } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SocialIconButton = ({ label, href, icon }) => (
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
      _hover={{
        bg: "var(--tertiary)",
        color: "white",
      }}
      isRound
    />
  </Tooltip>
);

SocialIconButton.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SocialIconButton;
