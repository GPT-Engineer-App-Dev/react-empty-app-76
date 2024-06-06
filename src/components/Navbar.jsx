import { Box, Flex, Link, Button, useColorModeValue, Stack, useDisclosure } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { session, logout } = useSupabaseAuth();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} position="sticky" top="0" zIndex="1000">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Logo</Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button as={RouterLink} to="/" variant="link">
              Home
            </Button>
            <Button as={RouterLink} to="/login" variant="link">
              Login
            </Button>
            {session && (
              <Button as={RouterLink} to="/private" variant="link">
                Private
              </Button>
            )}
            {session ? (
              <Button colorScheme="red" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Button as={RouterLink} to="/login" colorScheme="blue">
                Login
              </Button>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;