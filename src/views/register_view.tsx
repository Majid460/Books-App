import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  Icon,
  Pressable,
  FormControl,
  KeyboardAvoidingView,
  Slide,
} from 'native-base';

import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomInput from '../components/CustomInput';
import {NavProps} from '../navigation/navigationInterfaces';
import {Routes} from '../navigation/Routes/routes_names';
import {
  confirmPasswordValidator,
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../utils/utils';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser, registerStatus} from '../redux/reducer';
import {RootState} from '../redux/combineReducers';
const SignUpView = ({navigation}: NavProps) => {
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const dispatch = useDispatch();
  const [emailValidate, setEmailValidator] = React.useState(false);
  const [NameValidate, setNameValidator] = React.useState(false);
  const [isOpenTop, setIsOpenTop] = React.useState(false);
  const [slideText, setSlideText] = React.useState('');
  const [PasswordValidate, setPasswordValidator] = React.useState(false);
  const [ConfirmPasswordValidate, setConfirmPasswordValidator] =
    React.useState(false);
  const [pic, setPic] = React.useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwVJV38db9e6c6qLcHw53zMFT9j81nnv13Go8rzlOSA&s',
  );
  const RegisterStatus = useSelector(
    (state: RootState) => state.reducer.registerStatus,
  );
  React.useEffect(() => {
    dispatch(registerStatus({registerStatus: ''}));
  }, []);
  React.useEffect(() => {
    if (typeof loading === 'boolean') {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }, [loading]);

  React.useEffect(() => {
    if (RegisterStatus == 'Success') {
      setIsOpenTop(true);
      setSlideText('User Registered Successfully');
      setTimeout(() => {
        navigation.navigate(Routes.LOGIN);
      }, 3000);
    } else if (RegisterStatus == 'Error') {
      setIsOpenTop(true);
      setSlideText('Error in Registering User');
    } else {
      setIsOpenTop(false);
    }
  }, [RegisterStatus]);
  React.useEffect(() => {
    if (isOpenTop) {
      setTimeout(() => {
        setIsOpenTop(false);
      }, 3000);
    }
  }, [isOpenTop]);
  const register = () => {
    if (password == confirmPassword) {
      dispatch(
        registerUser({email: email, name: name, password: password, pic: pic}),
      );
    }
  };
  return (
    <KeyboardAvoidingView behavior="position">
      <Box
        height="100%"
        width="100%"
        justifyContent="center"
        backgroundColor="darkBlue.900"
        alignSelf="center">
        <Slide
          in={isOpenTop}
          duration={1000}
          placement="top"
          marginLeft={3}
          marginTop={5}
          marginRight={3}>
          <Box
            p="40px"
            _text={{
              color: 'white',
              fontSize: 18,
            }}
            mt="4"
            bg="teal.500"
            rounded="md">
            {slideText}
          </Box>
        </Slide>
        <Box
          maxW="90%"
          maxH="95%"
          width="90%"
          paddingTop={2}
          paddingBottom={2}
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
          <Stack p="3" space={2}>
            <Stack space={2}>
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
            <Box alignItems="center" marginTop={1}>
              <Stack space={2} w="100%" alignItems="center">
                <FormControl
                  isInvalid={emailValidate}
                  w="95%"
                  maxW="100%"
                  alignItems="center"
                  alignSelf="center">
                  <FormControl.Label
                    _text={{
                      color: 'black',
                    }}
                    alignSelf="flex-start"
                    marginLeft={3}>
                    Email
                  </FormControl.Label>
                  <CustomInput
                    placeholder="Email"
                    h={10}
                    size={23}
                    autoCapitalize="none"
                    borderRadius={10}
                    InputLeftElement={
                      <Icon
                        as={<Icons name="email" size={20} />}
                        size={5}
                        ml="2"
                        color="blue.500"
                      />
                    }
                    onChangeText={v => {
                      if (emailValidator(v)) {
                        setEmail(v);
                        setEmailValidator(false);
                      } else {
                        setEmailValidator(true);
                      }
                      if (v == '') {
                        setEmailValidator(false);
                      }
                    }}
                  />
                  <FormControl.ErrorMessage
                    alignSelf="flex-start"
                    leftIcon={
                      <Icon
                        as={<Icons name="error" size={20} />}
                        size={5}
                        ml="2"
                        color="red.500"
                      />
                    }>
                    Email Formate is not Correct.
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={NameValidate}
                  w="97%"
                  maxW="100%"
                  alignItems="center">
                  <FormControl.Label
                    _text={{
                      color: 'black',
                    }}
                    alignSelf="flex-start"
                    marginLeft={3}>
                    Name
                  </FormControl.Label>
                  <CustomInput
                    placeholder="Name"
                    h={10}
                    size={23}
                    borderRadius={10}
                    InputLeftElement={
                      <Icon
                        as={<Icons name="person" size={20} />}
                        size={5}
                        ml="2"
                        color="blue.500"
                      />
                    }
                    onChangeText={v => {
                      if (nameValidator(v)) {
                        setName(v);
                        setNameValidator(false);
                      } else {
                        setNameValidator(true);
                      }
                      if (v == '') {
                        setNameValidator(false);
                      }
                    }}
                  />
                  <FormControl.ErrorMessage
                    alignSelf="flex-start"
                    leftIcon={
                      <Icon
                        as={<Icons name="error" size={20} />}
                        size={5}
                        ml="2"
                        color="red.500"
                      />
                    }>
                    Name length must be greater than 6
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={PasswordValidate}
                  w="97%"
                  maxW="100%"
                  alignItems="center">
                  <FormControl.Label
                    _text={{
                      color: 'black',
                    }}
                    alignSelf="flex-start"
                    marginLeft={3}>
                    Password
                  </FormControl.Label>
                  <CustomInput
                    placeholder="Password"
                    h={10}
                    borderRadius={10}
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
                    onChangeText={v => {
                      if (passwordValidator(v)) {
                        setPassword(v);
                        setPasswordValidator(false);
                      } else {
                        setPasswordValidator(true);
                      }
                      if (v == '') {
                        setPasswordValidator(false);
                      }
                    }}
                    InputRightElement={
                      <Pressable onPress={() => setShow(!show)}>
                        <Icon
                          as={
                            <Icons
                              name={show ? 'visibility' : 'visibility-off'}
                            />
                          }
                          size={5}
                          mr="2"
                          color="blue.500"
                        />
                      </Pressable>
                    }
                  />
                  <FormControl.ErrorMessage
                    w="95%"
                    alignSelf="flex-start"
                    leftIcon={
                      <Icon
                        as={<Icons name="error" size={20} />}
                        size={5}
                        ml="2"
                        color="red.500"
                      />
                    }>
                    Must be atleast 6 characters & has Numbers.
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={ConfirmPasswordValidate}
                  w="97%"
                  maxW="100%"
                  alignItems="center">
                  <FormControl.Label
                    _text={{
                      color: 'black',
                    }}
                    alignSelf="flex-start"
                    marginLeft={3}>
                    Confirm Password
                  </FormControl.Label>
                  <CustomInput
                    placeholder="Confirm Password"
                    h={10}
                    borderRadius={10}
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
                    onChangeText={v => {
                      if (confirmPasswordValidator(password, v)) {
                        setConfirmPassword(v);
                        setConfirmPasswordValidator(false);
                      } else {
                        setConfirmPasswordValidator(true);
                      }
                      if (v == '') {
                        setConfirmPasswordValidator(false);
                      }
                    }}
                    InputRightElement={
                      <Pressable onPress={() => setShow(!show)}>
                        <Icon
                          as={
                            <Icons
                              name={show ? 'visibility' : 'visibility-off'}
                            />
                          }
                          size={5}
                          mr="2"
                          color="blue.500"
                        />
                      </Pressable>
                    }
                  />
                  <FormControl.ErrorMessage
                    alignSelf="flex-start"
                    leftIcon={
                      <Icon
                        as={<Icons name="error" size={20} />}
                        size={5}
                        ml="2"
                        color="red.500"
                      />
                    }>
                    Passwords must match.
                  </FormControl.ErrorMessage>
                </FormControl>

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
                  opacity={
                    !emailValidate &&
                    !NameValidate &&
                    !PasswordValidate &&
                    !ConfirmPasswordValidate
                      ? 100
                      : 50
                  }
                  disabled={
                    !emailValidate &&
                    !NameValidate &&
                    !PasswordValidate &&
                    !ConfirmPasswordValidate
                      ? false
                      : true
                  }
                  onPress={() => {
                    setLoading(true);
                    register();
                  }}
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
                    navigation.navigate(Routes.LOGIN);
                  }}
                  variant="solid">
                  Already have Account ?
                </Button>
              </HStack>
            </HStack>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between">
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
    </KeyboardAvoidingView>
  );
};
export default SignUpView;
