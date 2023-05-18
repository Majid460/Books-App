import React from 'react';
import {
  Box,
  NativeBaseProvider,
  HStack,
  Pressable,
  Center,
  Text,
  Icon,
  Fab,
} from 'native-base';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {HomeNavProps, NavProps} from '../../navigation/navigationInterfaces';
import {Routes} from '../../navigation/Routes/routes_names';
export function BottomBar({navigation, route}: HomeNavProps) {
  const [selected, setSelected] = React.useState(1);
  return (
    <Box flex={1} bg="white" width="90%" maxW="90%" alignSelf="center">
      <HStack
        bg="darkBlue.800"
        alignItems="center"
        shadow={6}
        borderRadius={10}>
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => {
            setSelected(0);
          }}>
          <Center>
            <Icon
              mb="1"
              as={<Icons name={selected === 0 ? 'home' : 'home'} />}
              color="white"
              size="md"
            />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}>
          <Center>
            <Icon mb="1" as={<Icons name="search" />} color="white" size="md" />
            <Text color="white" fontSize="12">
              Search
            </Text>
          </Center>
        </Pressable>
        <Fab
          renderInPortal={false}
          shadow={2}
          alignSelf="center"
          right="44%"
          onPress={() => {
            navigation.navigate(Routes.ADD_BOOK);
            setSelected(5);
          }}
          bottom={41}
          size="sm"
          icon={
            <Icon
              color="white"
              as={<Icons name={selected === 5 ? 'add' : 'add'} />}
              name="lightbulb"
              size="md"
            />
          }
        />
        <Pressable
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}>
          <Center>
            <Icon
              mb="1"
              as={
                <Icons
                  name={selected === 2 ? 'shopping-cart' : 'shopping-cart'}
                />
              }
              color="white"
              size="md"
            />
            <Text color="white" fontSize="12">
              Cart
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}>
          <Center>
            <Icon
              mb="1"
              as={
                <Icons name={selected === 3 ? 'account-box' : 'account-box'} />
              }
              color="white"
              size="md"
            />
            <Text color="white" fontSize="12">
              Account
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
}
