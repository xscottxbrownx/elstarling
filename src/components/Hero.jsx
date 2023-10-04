import hero from "../assets/heroForest.webp";
import starlings from "../assets/starlingsMid.webp";
import { Image } from "@chakra-ui/react";

const Hero = () => (
  // <div
  //   style={{
  //     height: "100vh",
  //     width: "100vw",
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     // backgroundColor: "lightsteelblue",
  //     // marginBottom: "2rem",
  //   }}
  // >
  //   <Image src={hero} alt="E L Starling in forest setting" objectFit="cover" h="100vh" w="100vw"/>
  // </div>
  <>
    <Image
      src={hero}
      alt="E L Starling in forest setting"
      h="100vh"
      w="100vw"
      // pos="absolute"
      // zIndex={1}
    />
    {/* <Image
      src={starlings}
      alt="flock of starlings"
      h="70vh"
      pos="absolute"
      top="100px"
      left="200px"
      zIndex={10}
    /> */}
  </>
);

export default Hero;
