import { Box, Flex, Spacer } from "@chakra-ui/layout";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";

const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="#fff"
    borderTop="1px"
    borderColor="gray.100"
    width="100%"
    backgroundColor="#282A2E"
  >
    <Box>© 2022 NextHome, Inc.</Box>
    <Flex
      p="2"
      marginTop="10px !important"
      width="250px"
      justifyContent="space-evenly"
      margin="auto"
      fontSize="20px"
    >
      <BsFacebook style={{ cursor: "pointer" }} />
      <BsInstagram style={{ cursor: "pointer" }} />
      <BsTwitter style={{ cursor: "pointer" }} />
      <BsPinterest style={{ cursor: "pointer" }} />
    </Flex>
  </Box>
);

export default Footer;
