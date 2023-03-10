import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  const LINK_DATA = [
    {
      title: "Karya",
    },

    {
      title: "Blog",
    },

    {
      title: "Tentang Kami",
    },

    {
      title: "Hubungi Kami",
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px="50px"
      bg="black"
    >
      <Image src="/assets/logo/solutif.svg" />

      <Flex gap="25px">
        {LINK_DATA?.map((item: any, index: number) => (
          <Link key={`link-${index}`} color="white">
            {item.title}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Navbar;
