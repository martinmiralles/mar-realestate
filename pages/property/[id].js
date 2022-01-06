import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  console.log(amenities.length);
  console.log(furnishingStatus);
  console.log(purpose);
  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar data={photos} />}
      <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center">
          {isVerified && (
            <Box paddingRight="3" color="green.400">
              <GoVerified />
            </Box>
          )}

          <Text fontWeight="bold" fontSize="lg">
            AED {price} {rentFrequency && `/${rentFrequency}`}
          </Text>
          <Spacer />
          <Avatar size="sm" src={agency?.logo?.url}></Avatar>
        </Flex>
        <Flex justifyContent="space-between" w="100%" fontWeight={700} m="0px">
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
      </Box>
      <Box marginTop="2" p="4">
        <Text fontSize="lg" marginBottom="2" fontWeight="bold">
          {title}
        </Text>
        <Text lineHeight="2" color="gray.600">
          {description}
        </Text>
      </Box>
      <Flex
        flexWrap="wrap"
        textTransform="uppercase"
        justifyContent="space-between"
      >
        <Flex
          justifyContent="space-between"
          mt="3"
          w="400px"
          border="2px"
          borderRadius="5px"
          borderColor="gray.500"
          p="3"
        >
          <Text>Type:</Text>
          <Text fontWeight="bold">{type}</Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          mt="3"
          w="400px"
          border="2px"
          borderRadius="5px"
          borderColor="gray.500"
          p="3"
        >
          <Text>Purpose:</Text>
          <Text fontWeight="bold">{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex
            justifyContent="space-between"
            mt="3"
            w="400px"
            border="2px"
            borderRadius="5px"
            borderColor="gray.500"
            p="3"
          >
            <Text>Furnishing Status:</Text>
            <Text fontWeight="bold">{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>

      {amenities.length > 0 && (
        <Box p="4">
          <Text fontSize="2xl" fontWeight="black" marginTop="5">
            Facilities:
          </Text>

          <Flex flexWrap="wrap">
            {amenities.length !== 0 &&
              amenities?.map((item) =>
                item?.amenities?.map((amenity) => (
                  <Text
                    key={amenity.text}
                    fontWeight="bold"
                    color="blue.400"
                    fontSize="l"
                    p="2"
                    bg="gray.200"
                    m="1"
                    borderRadius="5"
                  >
                    {amenity.text}
                  </Text>
                ))
              )}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
