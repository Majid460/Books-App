import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {AspectRatio, Box, Button, Center, Image, Stack} from 'native-base';
import {ImageURISource} from 'react-native/types';

type bookProps = {
  title: String;
  image: ImageURISource;
  onTap: () => void;
};
function FavoriteBook(props: bookProps) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, []);
  return (
    <ShimmerPlaceHolder
      visible={loading}
      width={150}
      height={200}
      shimmerColors={['#FFBDBA', '#FF9C6D', '#FFBDBA']}
      LinearGradient={LinearGradient}
      shimmerStyle={[{borderRadius: 20, marginLeft: 3}]}>
      <Box width={150} height={200} borderRadius={20}>
        <Button variant="ghosts" height={200} width={150} onPress={props.onTap}>
          <Stack>
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
                source={props.image}
                alt="Alternate Text"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: 'violet.400',
              }}
              _text={{
                color: 'white',
                fontWeight: '700',
                fontSize: 'xs',
                numberOfLines: 1,
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5">
              {props.title}
            </Center>
          </Stack>
        </Button>
      </Box>
    </ShimmerPlaceHolder>
  );
}
export default FavoriteBook;
