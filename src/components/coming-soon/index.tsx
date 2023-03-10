import React from "react";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

const ComingSoon = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyItems="center"
      alignItems="center"
      px="102px"
      position="relative"
    >
      <Flex w="100vw" h="100vh" position="absolute" zIndex="base" inset="0">
        <video
          src="/assets/video/coming-soon.mp4"
          loop
          autoPlay={true}
          muted
          style={{
            minWidth: "100%",
            minHeight: "100%",
            bottom: "0",
            right: "0",
            position: "fixed",
          }}
        />
      </Flex>

      <Flex
        w="full"
        justifyContent="center"
        alignItems="center"
        direction="column"
        gap="25px"
        zIndex="modal"
        color="white"
      >
        <Image src="/assets/logo/solutif-yellow.svg" h="auto" w="250px" />
        <Flex gap="8px" alignItems="center">
          <Text fontFamily="Poppins" fontSize="lg">
            Website Kami
          </Text>
          <Text
            fontFamily="Georgia"
            fontWeight="bold"
            fontStyle="italic"
            fontSize="4xl"
          >
            dalam pemeliharaan
          </Text>
        </Flex>
      </Flex>

      <Flex
        color="white"
        justifyContent="space-between"
        gap="25px"
        px="102px"
        alignItems="center"
        position="absolute"
        bottom="50px"
        left="0"
        right="0"
        w="full"
        m="auto"
        fontFamily="Poppins"
      >
        <Link href="mailto:halo.disketsa@gmail.com">
          halo.disketsa@gmail.com
        </Link>
        <Link
          onClick={() =>
            window.open("https://www.instagram.com/di.sketsa/", "_blank")
          }
        >
          @di.sketsa
        </Link>
      </Flex>
    </Flex>
  );
};

export default ComingSoon;
