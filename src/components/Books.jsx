import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import BooksStar from "../assets/BooksStar.webp";

const Books = () => {
  const booksData = [
    {
      id: 1,
      title: "Boundless",
      img: "/testrocket.gif",
      alt: "rocket ship",
      description: "some short description of book",
    },
    {
      id: 2,
      title: "The Forever of it All",
      img: "/testtime.gif",
      alt: "hourglass",
      description: "some short description of book",
    },
    {
      id: 3,
      title: "Between Shadow and Light",
      img: "/testlight.gif",
      alt: "light bulb",
      description: "some short description of book",
    },
  ];

  return (
    <Flex
      as="section"
      id="books"
      w="100vw"
      my="2.5rem"
      py="10rem"
      align="center"
      justify="center"
      direction="column"
      bg="var(--background)"
    >
      <Image src={BooksStar} alt="Books by author" mt="2rem" w="75%" />
      <Stack
        direction={{ base: "column", lg: "row" }}
        w="90vw"
        spacing={{ base: 10, lg: 8 }}
        align="center"
        justify="space-around"
        px={{ base: "2rem", xl: "10rem" }}
        py={{ base: "3rem", lg: "5rem" }}
      >
        {booksData.map((work) => (
          <Card
            key={work.id}
            align="center"
            minW="300px"
            bg="whiteAlpha.900"
            color="var(--tertiary)"
            shadow="dark-lg"
          >
            <CardBody align="center">
              <Image
                src={work.img}
                alt={work.alt}
                boxSize="200px"
                objectFit="cover"
                borderRadius="lg"
              />
              <Stack mt={2} spacing={3}>
                <Heading size="md" mb={3}>
                  {work.title}
                </Heading>
                <Text>{work.description}</Text>
                <Text>{work.description}</Text>
                <Text>{work.description}</Text>
              </Stack>
            </CardBody>
            <Divider color="gray.300" />
            <CardFooter>
              <ButtonGroup size="sm">
                <Button
                  variant="ghost"
                  sx={{ border: "solid 2px var(--gold)", color: "var(--gold)" }}
                >
                  Learn more
                </Button>
                <Button
                  variant="solid"
                  sx={{ bg: "var(--gold)", color: "var(--blue)" }}
                >
                  Buy now
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Stack>
    </Flex>
  );
};

export default Books;
