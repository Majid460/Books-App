import React from 'react';
import {useColorScheme} from 'react-native';
import {
  Box,
  Stack,
  Heading,
  Text,
  HStack,
  Icon,
  Pressable,
  Button,
  FormControl,
} from 'native-base';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomInput from '../components/CustomInput';
import {
  NavProps,
  ScreenNavigationProp,
} from '../navigation/navigationInterfaces';
import {Routes} from '../navigation/Routes/routes_names';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../redux/reducer';
import * as actions from '../redux/reducer';
import {RootState} from '../redux/combineReducers';
import {UserRealmContext} from '../data/LocalDataStorage';
import UserModel from '../data/LocalDataStorage/Realm_Models/UserModel';
import {UpdateMode} from 'realm';
import ShowSlide from '../components/Slide/slide';
import {emailValidator} from '../utils/utils';
interface childProps {
  title: any;
  subTitle: any;
  detail: any;
  navigation: ScreenNavigationProp;
  email: (v: string) => void;
  password: (v: string) => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
  loginButton: () => void;
  emailValidate: boolean;
  setEmailValidate: (v: boolean) => void;
}

const LoginView = ({navigation}: NavProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [isOpenTop, setIsOpenTop] = React.useState(false);
  const [slideText, setSlideText] = React.useState('');
  const [emailValidate, setEmailValidator] = React.useState(false);
  const {useRealm, useQuery} = UserRealmContext;
  const realm = useRealm();
  const myUserData = useQuery(UserModel);
  const loginStatus = useSelector(
    (state: RootState) => state.reducer.loginError,
  );
  const LoginSuccessData = useSelector(
    (state: RootState) => state.reducer.loginSuccess,
  );
  const handleAddUser = (
    email: string,
    token: string,
    id: string,
    name: string,
    pic: string,
  ) => {
    realm.write(() => {
      realm.create(
        UserModel,
        {email: email, token: token, userId: id, name: name, pic: pic},
        UpdateMode.Modified,
      );
    });
  };
  React.useEffect(() => {
    myUserData.map(user => {
      realm.write(() => {
        realm.delete(user);
      });
    });
  }, []);
  React.useEffect(() => {
    myUserData.map(user => {
      realm.write(() => {
        realm.delete(user);
      });
    });

    actions.initialState.loginError = '';
    actions.initialState.loginSuccess.message = '';
  }, []);
  React.useEffect(() => {
    if (
      LoginSuccessData.message == 'User Login Successfully' &&
      loginStatus != 'Error'
    ) {
      handleAddUser(
        LoginSuccessData.data.email,
        LoginSuccessData.data.token,
        LoginSuccessData.data.id,
        LoginSuccessData.data.name,
        LoginSuccessData.data.pic,
      );
      setIsOpenTop(true);
      setSlideText(loginStatus);
      navigation.navigate(Routes.HOME, {
        id: LoginSuccessData.data.id,
        name: LoginSuccessData.data.name,
        email: LoginSuccessData.data.email,
        pic: LoginSuccessData.data.pic,
      });
    } else if (loginStatus == 'Error') {
      setIsOpenTop(true);
      setSlideText('Error in making Request');
    } else if (
      LoginSuccessData.message == "Password doesn't match" &&
      loginStatus != 'Error'
    ) {
      setIsOpenTop(true);
      setSlideText(LoginSuccessData.message);
    } else if (
      LoginSuccessData.message == "User doesn't exist" &&
      loginStatus != 'Error'
    ) {
      setIsOpenTop(true);
      setSlideText(LoginSuccessData.message);
    } else {
      setIsOpenTop(false);
    }
  }, [loginStatus, LoginSuccessData]);

  React.useEffect(() => {
    if (isOpenTop) {
      setTimeout(() => {
        setIsOpenTop(false);
      }, 5000);
    }
  }, [isOpenTop]);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);
  const dispatch = useDispatch();
  const handleLogin = () => {
    if (email.length > 0 && password.length > 0) {
      dispatch(
        loginUser({
          email: email,
          password: password,
        }),
      );
    } else {
      setSlideText('Please Fill all fields');
      setIsOpenTop(true);
    }
  };

  return (
    <Box
      height="100%"
      width="100%"
      justifyContent="center"
      backgroundColor="darkBlue.900"
      alignSelf="center">
      <ShowSlide isOpenTop={isOpenTop} slideText={slideText} />
      <Box
        maxH="100%"
        alignItems="center"
        paddingTop="2"
        paddingLeft="5"
        paddingRight="5"
        backgroundColor="green400"
        alignSelf="center">
        <Item
          title={'Welcome Back'}
          subTitle="Please Login"
          detail={
            "Bengal (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife."
          }
          navigation={navigation}
          email={v => {
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
          password={v => {
            setPassword(v);
          }}
          loading={loading}
          setLoading={v => {
            setLoading(v);
          }}
          loginButton={() => {
            handleLogin();
          }}
          emailValidate={emailValidate}
          setEmailValidate={v => {
            setEmailValidator(v);
          }}
        />
      </Box>
    </Box>
  );
};
export default LoginView;

function Item(props: childProps) {
  const [show, setShow] = React.useState(false);

  return (
    <Box
      maxW="90%"
      maxH="100%"
      width={400}
      paddingTop={5}
      paddingBottom={5}
      rounded="lg"
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
        <HStack alignItems="center" space={2} justifyContent="center">
          <HStack alignItems="center">
            <Button
              paddingLeft={10}
              paddingRight={10}
              borderRadius={10}
              marginBottom={5}
              onPress={() => {
                props.navigation.navigate(Routes.SIGNUP);
              }}
              variant="solid">
              Don't have Account ?
            </Button>
          </HStack>
        </HStack>
        <Stack space={3}>
          <Heading size="md" ml="-1" alignSelf="center">
            {props.title}
          </Heading>
          <Text
            textAlign="center"
            fontSize="md"
            _light={{
              color: 'violet.500',
            }}
            _dark={{
              color: 'violet.400',
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1">
            {props.subTitle}
          </Text>
        </Stack>
        <Box alignItems="center" marginTop={5}>
          <Stack space={4} w="100%" alignItems="center">
            <FormControl
              isInvalid={props.emailValidate}
              w="100%"
              maxW="100%"
              alignItems="center"
              alignSelf="center">
              <CustomInput
                placeholder="Email"
                h={10}
                size={23}
                borderRadius={10}
                autoCapitalize="none"
                InputLeftElement={
                  <Icon
                    as={<Icons name="email" size={20} />}
                    size={5}
                    ml="2"
                    color="blue.500"
                  />
                }
                onChangeText={props.email}
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
            <CustomInput
              placeholder="Password"
              h={10}
              size={23}
              borderRadius={10}
              autoCapitalize="none"
              type={show ? 'text' : 'password'}
              InputLeftElement={
                <Icon
                  as={<Icons name="lock" size={20} />}
                  size={5}
                  ml="2"
                  color="blue.500"
                />
              }
              onChangeText={props.password}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={<Icons name={show ? 'visibility' : 'visibility-off'} />}
                    size={5}
                    mr="2"
                    color="blue.500"
                  />
                </Pressable>
              }
            />

            <Button
              borderRadius={10}
              paddingLeft={70}
              paddingRight={70}
              _text={{
                fontSize: 16,
              }}
              onPress={() => {
                props.loginButton();
                props.setLoading(true);
              }}
              isLoading={props.loading}
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
              isLoadingText="Verifying..">
              Login
            </Button>
          </Stack>
        </Box>
        <HStack alignItems="center" space={4} justifyContent="flex-end">
          <HStack alignItems="center">
            <Button
              borderRadius={2}
              paddingLeft={2}
              paddingRight={2}
              variant="ghost">
              Forgot Password ?
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
  );
}
