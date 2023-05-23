import {
  Avatar,
  Box,
  HStack,
  Text,
  VStack,
  Icon,
  FlatList,
  StatusBar,
  IconButton,
  Pressable,
} from 'native-base';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomAuthor from '../components/CustomAuthor';
import FavoriteBook from '../components/FavoriteBook';
import {books} from '../Constants';
import {HomeNavProps} from '../navigation/navigationInterfaces';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/combineReducers';
import {getAuthor, getBooksData} from '../redux/reducer';
import {BottomBar} from '../components/BottomBar/BottomBar';
import {Routes} from '../navigation/Routes/routes_names';
import {UserRealmContext} from '../data/LocalDataStorage';
import UserModel from '../data/LocalDataStorage/Realm_Models/UserModel';
import ShowSlide from '../components/Slide/slide';
function HomeView({navigation, route}: HomeNavProps) {
  let id = route.params.id;
  let name = route.params.name;
  let pic = route.params.pic;
  let email = route.params.email;
  const {useObject} = UserRealmContext;
  const realm = useObject(UserModel, id);

  const isFocused = useIsFocused();
  const [loading, setLoading] = React.useState(false);
  const [book, setBooks] = React.useState<books[]>();
  const [refreshing, setRefreshing] = React.useState(false);
  const [filterData, setFilterData] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const [selectedAuthor, setSelectedAuthor] = React.useState('');
  const [bookData, setBooksData] = React.useState<books[]>();
  const [isOpenTop, setIsOpenTop] = React.useState(false);
  const [slideText, setSlideText] = React.useState('');
  const dispatch = useDispatch();
  const authorsData = useSelector(
    (state: RootState) => state.reducer.authorData,
  );
  const booksData = useSelector(
    (state: RootState) => state.reducer.booksSuccessData,
  );
  const getData = () => {
    dispatch(getBooksData({}));
    dispatch(getAuthor({}));
  };
  React.useEffect(() => {
    if (!filterData) {
      getData();
      setSelectedItem('');
      setSelectedAuthor('');
    }
    setTimeout(() => {
      setFilterData(true);
    }, 2000);
    if (isOpenTop) {
      setTimeout(() => {
        setIsOpenTop(false);
      }, 4000);
    }
  }, [filterData, isOpenTop]);
  React.useEffect(() => {
    if (book?.length != 0) {
      setLoading(true);
    }
    setBooksData(booksData);
    setBooks(booksData);
  }, [booksData]);
  React.useEffect(() => {
    if (isFocused && booksData.length == 0 && authorsData.length == 0) {
      getData();
    }
    if (authorsData.length == 0) {
      dispatch(getAuthor({}));
    }
    if (booksData.length == 0) {
      dispatch(getBooksData({}));
    }
  }, [isFocused, booksData, authorsData]);
  return (
    <>
      <StatusBar backgroundColor="darkBlue.800" barStyle="light-content" />
      <Box safeAreaTop bg="darkBlue.800" />
      <Box width="100%" backgroundColor="white" height={63}>
        <ShowSlide isOpenTop={isOpenTop} slideText={slideText} />
        <HStack
          bg="darkBlue.800"
          px="1"
          py="3"
          flex={1}
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          maxW="100%">
          <Pressable
            maxW="96"
            onPress={() => {
              navigation.navigate(Routes.PROFILE);
            }}>
            {({isHovered, isFocused, isPressed}) => {
              return (
                <HStack
                  alignItems="center"
                  space={2}
                  px="2"
                  borderRadius={10}
                  bg={
                    isPressed
                      ? 'coolGray.600'
                      : isHovered
                      ? 'coolGray.600'
                      : 'darkBlue.800'
                  }
                  style={{
                    transform: [
                      {
                        scale: isPressed ? 0.96 : 1,
                      },
                    ],
                  }}
                  justifyContent="flex-start">
                  <ShimmerPlaceHolder
                    width={40}
                    height={30}
                    shimmerColors={['#FFBDBA', '#FF9C6D', '#FFBDBA']}
                    shimmerStyle={{borderRadius: 120, marginLeft: 5}}
                    visible={loading}
                    LinearGradient={LinearGradient}>
                    <Avatar
                      size="md"
                      source={{
                        uri: pic,
                      }}></Avatar>
                  </ShimmerPlaceHolder>
                  <Box paddingLeft={1} paddingRight={7} width={40}>
                    <VStack space={1}>
                      <ShimmerPlaceHolder
                        width={40}
                        height={30}
                        shimmerColors={['#FFBDBA', '#FF9C6D', '#FFBDBA']}
                        shimmerStyle={{borderRadius: 120}}
                        visible={loading}
                        LinearGradient={LinearGradient}>
                        <Text
                          flexDirection="row"
                          color="white"
                          numberOfLines={1}
                          fontSize={16}
                          fontWeight="bold"
                          overflow="hidden">
                          {name}
                        </Text>
                      </ShimmerPlaceHolder>
                    </VStack>
                  </Box>
                </HStack>
              );
            }}
          </Pressable>

          <HStack>
            <IconButton
              icon={<Icon as={Icons} name="favorite" size="md" color="white" />}
            />
            <IconButton
              icon={<Icon as={Icons} name="search" size="md" color="white" />}
            />
            <IconButton
              icon={
                <Icon as={Icons} name="more-vert" size="lg" color="white" />
              }
            />
          </HStack>
        </HStack>
      </Box>
      <Box height="100%" width="100%" backgroundColor="white" flex={1}>
        <Box
          marginLeft={6}
          marginRight={20}
          marginTop={3}
          alignSelf="flex-start"
          justifyContent="flex-start">
          <ShimmerPlaceHolder
            visible={loading}
            width={110}
            height={20}
            shimmerColors={['#FFBDBA', '#FF9C6D', '#FFBDBA']}
            LinearGradient={LinearGradient}
            shimmerStyle={[{borderRadius: 40}]}>
            <Text fontSize={20}>Authors</Text>
          </ShimmerPlaceHolder>
        </Box>
        <Box height={2}></Box>
        <Box width="90%" height="16%" alignSelf="center">
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            data={authorsData}
            renderItem={({item}) => (
              <CustomAuthor
                name={item.name}
                avatar={{uri: item.pic}}
                selected={selectedItem}
                itemId={item._id}
                onTap={() => {
                  setSelectedItem(item._id);
                  setSelectedAuthor(item.name);

                  const filterData = bookData?.filter(
                    v => v.author == item.name,
                  );
                  if (filterData?.length != 0) {
                    setFilterData(true);
                    setIsOpenTop(false);
                  } else {
                    setFilterData(false);
                    setIsOpenTop(true);
                    setSlideText('No book found for ' + item.name);
                  }
                  setBooks(filterData);
                }}
              />
            )}
            keyExtractor={item => item._id}
          />
        </Box>
        <Box
          marginLeft={6}
          marginRight={20}
          marginTop={1}
          alignSelf="flex-start"
          justifyContent="flex-start">
          <ShimmerPlaceHolder
            visible={loading}
            width={110}
            height={20}
            shimmerColors={['#FFBDBA', '#FF9C6D', '#FFBDBA']}
            LinearGradient={LinearGradient}
            shimmerStyle={[{borderRadius: 40}]}>
            <Text fontSize={20}>
              {selectedItem.length == 0 ? (
                'Favorite Books'
              ) : (
                <Text fontSize={20} fontWeight="bold" color="black">
                  Books by{' '}
                  <Text fontSize={18} fontWeight="normal">
                    {selectedAuthor}
                  </Text>
                </Text>
              )}
            </Text>
          </ShimmerPlaceHolder>
        </Box>
        <Box
          width="95%"
          marginLeft={2}
          marginRight={2}
          marginTop={2}
          flex={3}
          alignSelf="center"
          alignItems="center">
          <FlatList
            horizontal={false}
            scrollEnabled={true}
            refreshing={refreshing}
            onRefresh={() => {
              getData();
              setSelectedItem('');
              setSelectedAuthor('');
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
              }, 3000);
            }}
            showsVerticalScrollIndicator={true}
            data={book}
            numColumns={2}
            renderItem={({item}) => (
              <Box marginBottom={4} marginRight={4}>
                <FavoriteBook
                  title={item.title}
                  onTap={() => {
                    navigation.navigate(Routes.BOOK, {
                      url: item.url,
                      title: item.title,
                      detail: item.about,
                      writer: item.author,
                    });
                  }}
                  image={{
                    uri: item.url,
                  }}
                />
              </Box>
            )}
            keyExtractor={item => item.id}
          />
        </Box>
        <Box height={81} width="100%" safeAreaBottom borderRadius={10}>
          <BottomBar navigation={navigation} route={route} />
        </Box>
      </Box>
    </>
  );
}
export default HomeView;
