import hero from "../assets/heroAuthor.webp";
import logo from "../assets/ELStarling_LRG_logo_BLK.webp";
import { Image } from "@chakra-ui/react";
import styles from "./Hero.module.css";

const Hero = () => (
  <div style={{ position: "relative", zIndex: 1 }}>
    <Image
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
      h="90vh"
      w="100vw"
      objectFit="cover"
    />
    <svg className={styles.arrows}>
      <path className={styles.a1} d="M0 0 L30 32 L60 0" />
      <path className={styles.a2} d="M0 20 L30 52 L60 20" />
      <path className={styles.a3} d="M0 40 L30 72 L60 40" />
    </svg>
  </div>
);

export default Hero;
