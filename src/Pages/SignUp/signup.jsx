//import axios from "axios";
import React, { useContext, useState } from "react";
import { useToast } from '@chakra-ui/react'
import { Navigate, Link as ReactRouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../../Assets/Styles/signup.css';

import { Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement,
  Stack,
  Button,
  Heading,
  Text
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
//import Loader from "../../Components/Loader";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setIsLoading] = useState(false);
  //const { setIsAuth, isAuth } = useState();
  const toast = useToast()
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    //setIsLoading(true);

    if (name === '' || email === '' || password === '') {
      toast({
        title: 'Fileds Empty',
        description: "All Fields Are Required",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    //console.log(name, email, password);
   
    // setName('');
    // setEmail('');
    // setPassword('');
    setTimeout(() => {
      toast({
        description: "Sign up Successfully go to login",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });   
      navigate("/login");
    }, 3000);
    
  };

  
  //if (isAuth) return <Navigate to="/" />;

  return (
    <Flex
      align={"center"}
      justify={"center"}

    >
      <Stack>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          // bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          mt={8}
          className='form-bg'
        >
          <form method="POST" onSubmit={handleForm}>
            <Stack spacing={4}>

              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />


              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email.toLowerCase()}
                onChange={(e) => setEmail(e.target.value)}

              />


              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}

                  </Button>
                </InputRightElement>
              </InputGroup>

              <Stack spacing={10} pt={2}>
                <input type="submit"
                  value="Sign up"
                  size="lg"

                />


              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <ReactRouterLink color={"blue.400"} to="/login">
                    Login
                  </ReactRouterLink>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>

      </Stack>
    </Flex>
  );
}

export default Signup;