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
} from 'native-base';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomInput from '../components/CustomInput';
import {
  NavProps,
  ScreenNavigationProp,
} from '../navigation/navigationInterfaces';
import {Routes} from '../navigation/Routes/routes_names';

interface childProps {
  title: any;
  subTitle: any;
  detail: any;
  navigation: ScreenNavigationProp;
}

const LoginView = ({navigation}: NavProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  //const navigation = useNavigation<ScreenNavigationProp>();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Box
      height="100%"
      width="100%"
      justifyContent="center"
      backgroundColor="darkBlue.900"
      alignSelf="center">
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
        />
      </Box>
    </Box>
  );
};
export default LoginView;

function Item(props: childProps) {
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      props.navigation.navigate(Routes.HOME);
    }, 2000);
  }, [loading]);
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
