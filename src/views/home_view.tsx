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
} from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomAuthor from '../components/CustomAuthor';
import FavoriteBook from '../components/FavoriteBook';
import {BooksData, books, data} from '../Constants';
import {NavProps} from '../navigation/navigationInterfaces';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/combineReducers';
import {saveBooksData} from '../redux/reducer';
import {BottomBar} from '../components/BottomBar/BottomBar';
import {Routes} from '../navigation/Routes/routes_names';
function HomeView({navigation}: NavProps) {
  const [loading, setLoading] = React.useState(false);
  const [book, setBooks] = React.useState<books[]>();
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const [selectedAuthor, setSelectedAuthor] = React.useState('');
  const dispatch = useDispatch();
  const authorsData = useSelector(
    (state: RootState) => state.reducer.authorData,
  );

  React.useEffect(() => {
    // dispatch(
    //   saveBooksData({
    //     url: 'https://m.media-amazon.com/images/I/411CpImAaAL._SX404_BO1,204,203,200_.jpg',
    //     about: 'Book is about Machine Learning',
    //     title: 'Machine Learning A',
    //     author: 'Author A',
    //   }),
    // );
    setBooks(BooksData);
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, []);
  return (
    <>
      <StatusBar backgroundColor="darkBlue.800" barStyle="light-content" />
      <Box safeAreaTop bg="darkBlue.800" />
      <Box width="100%" backgroundColor="white" height={63}>
        <HStack
          bg="darkBlue.800"
          px="1"
          py="3"
          flex={1}
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          maxW="100%">
          <HStack
            alignItems="center"
            space={2}
            px="2"
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
                  uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
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
                    Jhon De
                  </Text>
                </ShimmerPlaceHolder>
              </VStack>
            </Box>
          </HStack>
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
                  console.log(item._id);
                  setSelectedItem(item._id);
                  setSelectedAuthor(item.name);
                  const filterData = BooksData.filter(
                    v => v.author == item.name,
                  );
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
              setSelectedItem('');
              setSelectedAuthor('');
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
                setBooks(BooksData);
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
          <BottomBar navigation={navigation} />
        </Box>
      </Box>
    </>
  );
}
export default HomeView;
