import {
  Avatar,
  Box,
  Center,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {defaultAuthorPic} from '../../Constants';
import Icons from 'react-native-vector-icons/MaterialIcons';
interface profileInfoProps {
  name: string;
  email: string;
  pic: string;
}
function ProfileInfo(props: profileInfoProps) {
  return (
    <Box h="100%" w="100%" borderRadius={10} alignItems="center">
      <Box
        h="15%"
        w="90%"
        marginTop={4}
        marginLeft={2}
        borderRadius={10}
        paddingLeft={5}
        paddingRight={5}
        backgroundColor="darkBlue.800"
        alignSelf="flex-start"
        alignItems="flex-start">
        <HStack space={3} w="100%" h="100%" alignItems="center">
          <Avatar
            alignSelf="center"
            size="lg"
            source={{
              uri: defaultAuthorPic,
            }}></Avatar>
          <Text
            w="78%"
            color="white"
            numberOfLines={2}
            alignContent="center"
            textAlign="left"
            fontSize={18}
            fontWeight="bold"
            overflow="hidden">
            JHon De
          </Text>
        </HStack>
      </Box>

      <Box
        w={'100%'}
        h={'85%'}
        padding={3}
        alignItems="flex-start"
        backgroundColor="white"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}>
        <VStack space={2}>
          <ProfileItem
            title={'Email'}
            value={'tugrp@example.com'}
            icon={'email'}
          />
          <Divider
            marginLeft={3}
            lineHeight={1}
            width={0.5}
            height={10}
            backgroundColor="blue.500"
          />
          <ProfileItem title={'Name'} value={'Jhon De'} icon={'person'} />
        </VStack>
      </Box>
    </Box>
  );
}
interface ProfileItemProps {
  title: string;
  value: string;
  icon: string;
}
function ProfileItem(props: ProfileItemProps) {
  return (
    <HStack width="100%" alignSelf="center" space={2} alignItems={'center'}>
      <Icon as={<Icons name={props.icon} />} size={7} color="blue.500" />
      <Box
        width="90%"
        borderRadius={10}
        shadow={9}
        marginTop={2}
        padding={3}
        alignSelf="center"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _light={{
          backgroundColor: 'gray.100',
        }}>
        <Text fontSize={16} color="gray.700" fontWeight="bold">
          {props.title}
        </Text>
        <Text fontSize={14} fontWeight="bold" color="black">
          {props.value}
        </Text>
      </Box>
    </HStack>
  );
}
export default ProfileInfo;
