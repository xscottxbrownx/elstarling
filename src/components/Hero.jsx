import hero from "../assets/heroAuthor.webp";
import logo from "../assets/ELStarling_LRG_logo_BLK.webp";
import { Box, Image } from "@chakra-ui/react";
import styles from "./Hero.module.css";

const Hero = () => (
  <div style={{ position: "relative", zIndex: 1 }}>
    <Box
      position="relative"
      width="100vw"
      margin="0 auto"
      paddingX={{ base: "0", md: "4rem", lg: "10rem" }}
    >
      {/* <Image
      src={logo}
      alt="EL Starling Logo"
      position="absolute"
      top="20%"
      right="10px"
      h="10vh"
      w="50vw"
    />
    <Image
      src={hero}
      alt="author E L Starling in front of books"
      mt={{ base: "3.5rem", md: "5rem", lg: "7rem" }}
      mx="auto"
      h="75vh"
      w="calc(100vw - 8rem)"
      objectFit="cover"
    /> */}
      <Image
        src={logo}
        alt="EL Starling Logo"
        position="absolute"
        top="5%"
        right={{ base: "5%", md: "10%", lg: "16%" }}
        h="10vh"
        w={{ base: "50vw", md: "40vw" }}
      />
      <Image
        src={hero}
        alt="author E L Starling in front of books"
        mt={{ base: "3.5rem", md: "5rem", lg: "7rem" }}
        // mx="auto"
        h="75vh"
        w="100%"
        // objectFit="cover"
        objectFit={{ base: "cover", lg: "contain" }}
      />
    </Box>
    <svg className={styles.arrows}>
      <path className={styles.a1} d="M0 0 L30 32 L60 0" />
      <path className={styles.a2} d="M0 20 L30 52 L60 20" />
      <path className={styles.a3} d="M0 40 L30 72 L60 40" />
    </svg>
  </div>
);

export default Hero;
