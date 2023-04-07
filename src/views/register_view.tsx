import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  Icon,
  Pressable,
} from 'native-base';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomInput from '../components/CustomInput';
import {NavProps} from '../navigation/navigationInterfaces';

const SignUpView = ({navigation}: NavProps) => {
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    if (typeof loading === 'boolean') {
      console.log(typeof loading);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Home');
      }, 5000);
    }
  }, [loading]);
  return (
    <Box
      height="100%"
      width="100%"
      justifyContent="center"
      backgroundColor="darkBlue.900"
      alignSelf="center">
      <Box
        maxW="90%"
        maxH="100%"
        width={400}
        paddingTop={5}
        paddingBottom={5}
        rounded="lg"
        alignSelf="center"
        overflow="hidden"
        borderColor="darkBlue.900"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Stack p="4" space={3}>
          <Stack space={3}>
            <Heading size="md" ml="-1" alignSelf="center">
              Create Account
            </Heading>
            <Box paddingLeft={7} paddingRight={7}>
              <Text
                textAlign="center"
                fontSize="sm"
                _light={{
                  color: 'gray.500',
                }}
                _dark={{
                  color: 'white',
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1">
                Enter your{' '}
                <Text fontWeight="bold" color="black">
                  name
                </Text>
                ,{' '}
                <Text fontWeight="bold" color="black">
                  email address
                </Text>{' '}
                and{' '}
                <Text fontWeight="bold" color="black">
                  password
                </Text>{' '}
                for sign up.
              </Text>
            </Box>
          </Stack>
          <Box alignItems="center" marginTop={5}>
            <Stack space={4} w="100%" alignItems="center">
              <CustomInput
                placeholder="Email"
                h={10}
                size={23}
                InputLeftElement={
                  <Icon
                    as={<Icons name="email" size={20} />}
                    size={5}
                    ml="2"
                    color="blue.500"
                  />
                }
                onChange={v => {
                  console.log(v);
                }}
              />
              <CustomInput
                placeholder="Name"
                h={10}
                size={23}
                InputLeftElement={
                  <Icon
                    as={<Icons name="person" size={20} />}
                    size={5}
                    ml="2"
                    color="blue.500"
                  />
                }
                onChange={v => {
                  console.log(v);
                }}
              />
              <CustomInput
                placeholder="Password"
                h={10}
                size={23}
                type={show ? 'text' : 'password'}
                InputLeftElement={
                  <Icon
                    as={<Icons name="lock" size={20} />}
                    size={5}
                    ml="2"
                    color="blue.500"
                  />
                }
                onChange={v => {
                  console.log(v);
                }}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <Icons name={show ? 'visibility' : 'visibility-off'} />
                      }
                      size={5}
                      mr="2"
                      color="blue.500"
                    />
                  </Pressable>
                }
              />
              <CustomInput
                placeholder="Confirm Password"
                h={10}
                size={23}
                type={show ? 'text' : 'password'}
                InputLeftElement={
                  <Icon
                    as={<Icons name="lock" size={20} />}
                    size={5}
                    ml="2"
                    color="blue.500"
                  />
                }
                onChange={v => {
                  console.log(v);
                }}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <Icons name={show ? 'visibility' : 'visibility-off'} />
                      }
                      size={5}
                      mr="2"
                      color="blue.500"
                    />
                  </Pressable>
                }
              />
              <Box paddingLeft={7} paddingRight={7}>
                <Text
                  textAlign="center"
                  fontSize="sm"
                  _light={{
                    color: 'gray.500',
                  }}
                  _dark={{
                    color: 'white',
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1">
                  By signing up you are agree to{' '}
                  <Text fontWeight="bold" color="blue.500">
                    Terms
                  </Text>
                  ,{' '}
                  <Text fontWeight="bold" color="blue.500">
                    Conditions
                  </Text>{' '}
                  and{' '}
                  <Text fontWeight="bold" color="blue.500">
                    Privacy Policy.
                  </Text>
                </Text>
              </Box>
              <Button
                borderRadius={10}
                paddingLeft={10}
                paddingRight={10}
                onPress={() => setLoading(true)}
                isLoading={loading}
                _loading={{
                  bg: 'amber.400',
                  opacity: 1,
                  _text: {
                    color: 'darkBlue.900',
                  },
                }}
                _spinner={{
                  color: 'blue',
                }}
                isLoadingText="Processing..">
                Create Account
              </Button>
            </Stack>
          </Box>

          <HStack alignItems="center" space={2} justifyContent="center">
            <HStack alignItems="center">
              <Button
                paddingLeft={10}
                paddingRight={10}
                borderRadius={10}
                marginBottom={5}
                onPress={() => {
                  navigation.navigate('Login');
                }}
                variant="solid">
                Already have Account ?
              </Button>
            </HStack>
          </HStack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};
export default SignUpView;
