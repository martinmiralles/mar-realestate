import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import DefaultImage from "../assets/images/house.jpg";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      _hover={{
        borderRadius: "5px",
        boxShadow: "1px 1px 5px 5px #282a2e",
      }}
      flexWrap="wrap"
      w="420px"
      p="4"
      m="5"
      justifyContent="flex-start"
      cursor="pointer"
      transition="0.3s ease-in-out"
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          width={400}
          height={260}
        />
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            {isVerified && (
              <Box paddingRight="3" color="green.400">
                <GoVerified />{" "}
              </Box>
            )}
            <Text fontWeight="bold" fontSize="lg">
              CAD {millify(price * 0.35)}
              {rentFrequency && `/ ${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size="sm" src={agency?.logo?.url}></Avatar>
          </Box>
        </Flex>
        <Flex
          p="1"
          justifyContent="space-between"
          w="100%"
          fontWeight={700}
          m="0px"
        >
          <Flex w="125px" justifyContent="space-between" alignItems="center">
            <FaBed />
            {rooms} bedroom(s)
          </Flex>
          <Flex w="115px" justifyContent="space-around" alignItems="center">
            <FaBath /> {baths} bath(s)
          </Flex>
          <Flex w="115px" justifyContent="space-around" alignItems="center">
            <BsGridFill />
            {millify(area)} sqft
          </Flex>
        </Flex>
        <Text fontSize="lg">
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;
