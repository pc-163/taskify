//import axios from "axios";
import React, { useContext, useState } from "react";
import { Link as ReactRouterLink, Navigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  //const { setIsAuth, isAuth, setIsLoading, loading, setUserName } = useState();
  const toast = useToast()
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (email === '' || password === '' || remember === false) {
      toast({
        title: 'Fileds Empty',
        description: "All Fields Are Required",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    toast({
      description: "Login Successfully",
      status: 'success',
      duration: 4000,
      isClosable: true,
    });   
      // setEmail("");
      // setPassword("");
      //setRemember(false);

      setTimeout(() => {
        navigate("/");
      }, 4000);
     
      //setIsLoading(false);
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to add your task ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          boxShadow={"lg"}
          p={8}
          mt={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email.toLowerCase()}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="current-password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox onChange={(e) => setRemember(true)}>Remember me</Checkbox>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                
                onClick={handleForm}
              >
                Sign in
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={"center"}>
                New here?{" "}
                <ReactRouterLink color={"blue.400"} to="/signup">
                  Register
                </ReactRouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
