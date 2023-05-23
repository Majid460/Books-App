import React from 'react';
import {Box, HStack, Icon, Pressable, Text} from 'native-base';
import Icons from 'react-native-vector-icons/MaterialIcons';
interface railProps {
  title: string;
  iconName: string;
  onClick: () => void;
  active: boolean;
}
function RailItem(props: railProps) {
  return (
    <Pressable onPress={props.onClick} alignSelf="center" w={'90%'}>
      {({isHovered, isFocused, isPressed}) => {
        return (
          <Box
            borderColor="coolGray.200"
            borderWidth="1"
            shadow={9}
            w={'100%'}
            h={70}
            marginTop={2}
            alignItems="center"
            justifyContent="center"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700',
            }}
            _light={{
              backgroundColor: 'gray.100',
            }}
            paddingLeft={1}
            paddingRight={1}
            bg={
              isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'white'
            }
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
            rounded="8">
            <HStack
              h="100"
              w="95%"
              space={2}
              alignItems="center"
              overflow="hidden">
              <Icon
                name="account-circle"
                size={7}
                ml="2"
                as={<Icons name={props.iconName} />}
                color="darkBlue.600"
              />
              <Text fontSize={16} color="darkBlue.600" noOfLines={2}>
                {props.title}
              </Text>
            </HStack>
          </Box>
        );
      }}
    </Pressable>
  );
}

export default RailItem;
