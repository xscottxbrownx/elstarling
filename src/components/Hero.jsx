// import heroDesktop from "../assets/heroForest.webp";
import heroMobile from "../assets/Screenshot 2023-10-04 at 2.06.11 PM.png";
import { Image } from "@chakra-ui/react";
import styles from "./Hero.module.css";

const Hero = () => (
  <div style={{ position: "relative" }}>
    <Image
      src={heroMobile}
      alt="E L Starling in forest setting"
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
