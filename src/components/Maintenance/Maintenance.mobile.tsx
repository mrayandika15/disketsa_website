import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const MaintenanceMobile = () => {
  return (
    <Flex position="relative" direction="column" w="100%" h="100vh">
      <Flex
        zIndex="base"
        inset="0"
        position="relative"
        top="0"
        display="flex"
        h="full"
      >
        <Flex
          zIndex="banner"
          w="full"
          h="full"
          position="absolute"
          inset="0"
          justifyContent="center"
          alignItems="center"
          m="auto"
        >
          <Image src="/assets/logo/solutif-yellow.svg" h="auto" w="200px" />
        </Flex>

        <video
          src="/assets/video/coming-soon.mp4"
          loop
          autoPlay={true}
          muted
          style={{
            minHeight: "100%",
            minWidth: "100%",
            objectFit: "cover",
          }}
        />
      </Flex>

      <Flex
        color="white"
        gap="25px"
        justifyContent="center"
        px="25px"
        w="full"
        h="400px"
        fontFamily="Poppins"
        bg="#231F20"
        direction="column"
      >
        <Flex direction="column">
          <Text fontSize="sm">Website Kami</Text>
          <Heading fontFamily="Georgia" fontStyle="italic">
            Dalam pemeliharaan
          </Heading>
        </Flex>
        <Flex direction="column" gap="2px">
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
    </Flex>
  );
};

export default MaintenanceMobile;
