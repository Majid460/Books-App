import React from 'react';
import {Box, Image, Text} from 'native-base';
import {Animated} from 'react-native';
import UserModel from '../data/LocalDataStorage/Realm_Models/UserModel';
import {UserRealmContext} from '../data/LocalDataStorage';
import {SplashNavProps} from '../navigation/navigationInterfaces';
import {Routes} from '../navigation/Routes/routes_names';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/combineReducers';
import {verifyToken} from '../redux/reducer';

function SplashView({navigation}: SplashNavProps) {
  const {useQuery} = UserRealmContext;
  const userData = useQuery(UserModel);
  const fadeInLeftAnimation = React.useRef(new Animated.Value(200)).current;
  const slideCenterBoxUpAnimation = React.useRef(new Animated.Value(0)).current;
  const slideCenterTextAnimation = React.useRef(
    new Animated.Value(600),
  ).current;
  const dispatch = useDispatch();
  const tokenStatus = useSelector(
    (state: RootState) => state.reducer.tokenStatus,
  );
  React.useEffect(() => {
    if (userData.length > 0) {
      if (userData[0].token != undefined) {
        dispatch(verifyToken({token: userData[0].token}));
      }
    } else {
      navigation.navigate(Routes.LOGIN);
    }
    animateImageBoxLeft();
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      animateCenterImageBoxUP();
    }, 2000);
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      animateTextBoxLeft();
    }, 3000);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (tokenStatus == 'Token verified.') {
        navigation.navigate(Routes.HOME, {
          id: userData[0].userId,
          name: userData[0].name,
          email: userData[0].email,
          pic: userData[0].pic,
        });
      } else if (tokenStatus == 'Token expired') {
        navigation.navigate(Routes.LOGIN);
      } else if (tokenStatus == 'Error') {
        navigation.navigate(Routes.LOGIN);
      }
    }, 8000);
  }, [tokenStatus]);
  //Animation of TextBox
  const animateTextBoxLeft = () => {
    Animated.timing(slideCenterTextAnimation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  //Animation of Image
  const animateImageBoxLeft = () => {
    Animated.timing(fadeInLeftAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  const animateCenterImageBoxUP = () => {
    Animated.timing(slideCenterBoxUpAnimation, {
      toValue: -100,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Box
      height="100%"
      width="100%"
      justifyContent="center"
      backgroundColor="amber.100"
      alignSelf="center">
      <Animated.View
        style={[
          {
            transform: [{translateY: slideCenterBoxUpAnimation}],
          },
        ]}>
        <Animated.View
          style={{
            opacity: fadeInLeftAnimation,
            transform: [{translateX: fadeInLeftAnimation}],
          }}>
          <Box
            alignSelf="center"
            backgroundColor="amber.100"
            borderRadius={10}
            alignItems="center"
            w="80%"
            h={200}>
            <Image
              source={require('../../assets/bookS.png')}
              alt="image"
              w="100%"
              h="100%"
              resizeMode="contain"
            />
          </Box>
        </Animated.View>
      </Animated.View>

      <Animated.View
        style={[
          {
            transform: [{translateX: slideCenterTextAnimation}],
          },
        ]}>
        <Box
          position="absolute"
          width="90%"
          height={150}
          justifyContent="center"
          alignSelf="center">
          <Text
            color="black"
            fontSize={18}
            fontWeight="bold"
            textAlign="center">
            Welcome to BookStack
          </Text>
          <Text color={'black'} fontSize={16} textAlign="center" marginTop={5}>
            BookStack is a stack of favorite books. You can add your favorite
            books to the stack. BookStack is a book tracking app.
          </Text>
        </Box>
      </Animated.View>
    </Box>
  );
}
export default SplashView;
