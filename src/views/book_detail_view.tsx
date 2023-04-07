import {
  AspectRatio,
  Box,
  Center,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {ImageURISource} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {BookNavProps} from '../navigation/navigationInterfaces';
interface url {
  avatar: ImageURISource;
}
function BookDetailView({navigation, route}: BookNavProps) {
  const [loading, setLoading] = React.useState(false);
  const title = route.params.title;
  let url = route.params.url;
  let uri = url as string;
  let about = route.params.detail;
  let writer = route.params.writer;
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, []);
  return (
    <Box width="100%" height="100%">
      <VStack space={2}>
        <Center marginTop={4}>
          <ShimmerPlaceHolder
            width={150}
            height={200}
            shimmerColors={['#FFBDBA', '#FF9C6D', '#FFBDBA']}
            shimmerStyle={{borderRadius: 20, marginLeft: 5}}
            visible={loading}
            LinearGradient={LinearGradient}>
            <ImageShow avatar={{uri: uri}} />
          </ShimmerPlaceHolder>
        </Center>
        <Center>
          <VStack space={2}>
            <ShimmerPlaceHolder
              width={60}
              height={20}
              shimmerColors={['#FFBDBA', '#FF9C6D', '#FFBDBA']}
              shimmerStyle={{borderRadius: 120, marginLeft: 5}}
              visible={loading}
              LinearGradient={LinearGradient}>
              <Text fontSize={17} fontWeight="bold">
                {title}
              </Text>
            </ShimmerPlaceHolder>
          </VStack>
        </Center>
        <Box
          alignItems="flex-start"
          marginTop={3}
          marginLeft={4}
          marginRight={3}>
          <VStack space={3}>
            <Text fontSize={16} fontWeight="bold">
              Writer: {writer}
            </Text>
            <Text fontSize={16} fontWeight="bold">
              Summary
            </Text>
            <ScrollView>
              <Text fontSize={14}>{about}</Text>
            </ScrollView>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
function ImageShow(props: url) {
  return (
    <AspectRatio
      ratio={{
        base: 3 / 4,
        md: 9 / 10,
      }}
      height={{
        base: 200,
        md: 400,
      }}>
      <Image
        borderRadius={20}
        resizeMode="cover"
        source={props.avatar}
        alt="Alternate Text"
      />
    </AspectRatio>
  );
}
export default BookDetailView;
