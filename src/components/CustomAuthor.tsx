import {Avatar, Box, Button, Text, VStack} from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ImageURISource} from 'react-native/types';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
interface Author {
  name: String;
  avatar: ImageURISource;
  onTap: () => void;
  selected: string;
  itemId: string;
}

function CustomAuthor(props: Author) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, []);
  return (
    <ShimmerPlaceHolder
      visible={loading}
      width={90}
      height={100}
      shimmerColors={['#FFBDBA', '#FF9C6D', '#FFBDBA']}
      LinearGradient={LinearGradient}
      shimmerStyle={[{borderRadius: 20, marginLeft: 3}]}>
      <Box
        h="93%"
        w={20}
        marginLeft={1}
        marginRight={1}
        marginTop={1}
        paddingTop={1}
        borderRadius={10}
        borderWidth={1}
        backgroundColor={
          props.selected == props.itemId ? 'blue.300' : 'pink.100'
        }
        alignItems="center">
        <Button
          variant="ghost"
          height="100%"
          width="100%"
          paddingTop={6}
          onPress={props.onTap}>
          <VStack space={2}>
            <Avatar size="lg" source={props.avatar} alignSelf="center"></Avatar>
            <Box w="90%" height={10}>
              <Text
                numberOfLines={1}
                fontSize={13}
                _dark={{
                  color: 'warmGray.50',
                }}
                color="black">
                {props.name}
              </Text>
            </Box>
          </VStack>
        </Button>
      </Box>
    </ShimmerPlaceHolder>
  );
}
export default CustomAuthor;
