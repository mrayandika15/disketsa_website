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
      <Flex direction="column" gap="15px" alignItems="end" w="full">
        <Text fontWeight="semibold" fontSize="xl" fontFamily="poppins">
          Website Kami
        </Text>
        <Heading
          fontSize="5xl"
          fontFamily="Georgia"
          fontStyle="italic"
          letterSpacing="-1%"
        >
          Sedang Dikembangkan
        </Heading>
      </Flex>

      <Image
        src="/assets/ornament/ornament-berkembang.svg"
        position="absolute"
        top="0"
        left="0"
      />

      <Flex
        justifyContent="end"
        gap="25px"
        px="102px"
        alignItems="center"
        position="absolute"
        bottom="50px"
        left="0"
        right="0"
        w="full"
        m="auto"
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
