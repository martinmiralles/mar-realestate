import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch, BsHouseDoor } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
  <Flex
    p="2"
    borderBottom="1px"
    borderColor="gray.500"
    width="100%"
    backgroundColor="#282A2E"
  >
    <Flex
      fontSize="3xl"
      color="#FFFFFF"
      fontWeight="bold"
      paddingLeft="4"
      cursor="pointer"
      justifyContent="space-evenly"
      alignContent="center"
      alignItems="center"
    >
      <Link href="/" paddingLeft="2" paddingRight="2">
        NextHOME
      </Link>
    </Flex>
    <Spacer />
    <Box paddingRight="4">
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant="outline" />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Homes for Sale</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Homes for Rent</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
