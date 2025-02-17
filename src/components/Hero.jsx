import heroDesktop from "../assets/heroSplashDesktop.webp";
import heroMobile from "../assets/heroSplashMobile.webp";
import { Box, Image, Link, useBreakpointValue } from "@chakra-ui/react";
import styles from "./Hero.module.css";

const Hero = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box style={{ position: "relative" }}>
      <Image
        src={isMobile ? heroMobile : heroDesktop}
        alt="author E L Starling in front of books"
        fallback={
          isMobile ? "https://placehold.co/320" : "https://placehold.co/1024"
        }
        mt={{ base: "3.5rem", md: "5rem", lg: "7rem" }}
        h="75vh"
        w="100%"
        // objectFit={{ base: "contain", lg: "contain" }}
        objectFit="contain"
      />
      <Link href="#about" hideBelow="md">
        <svg className={styles.arrows}>
          <path className={styles.a1} d="M0 0 L30 32 L60 0" />
          <path className={styles.a2} d="M0 20 L30 52 L60 20" />
          <path className={styles.a3} d="M0 40 L30 72 L60 40" />
        </svg>
      </Link>
    </Box>
  );
};

export default Hero;
