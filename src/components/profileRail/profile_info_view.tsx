import {Avatar, Box, Divider, HStack, Icon, Text, VStack} from 'native-base';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Space from '../Space/AddSpace';
import {UserRealmContext} from '../../data/LocalDataStorage';
import UserModel from '../../data/LocalDataStorage/Realm_Models/UserModel';
interface profileInfoProps {
  name: string;
  email: string;
  pic: string;
  updateStatus: boolean;
  id: string;
}
function ProfileInfo(props: profileInfoProps) {
  const [Name, setName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const {useObject} = UserRealmContext;
  const realm = useObject(UserModel, props.id);
  let name = '';
  let pic = '';
  let email = '';
  React.useEffect(() => {
    console.log(props.updateStatus);
    if (realm != null) {
      setName(realm.name);
      pic = realm.pic;
      setEmail(realm.email);
    }
    console.log(email);
  }, []);
  React.useEffect(() => {
    if (props.updateStatus) {
      if (realm != null) {
        setName(realm.name);
        pic = realm.pic;
        setEmail(realm.email);
      }
      console.log(email);
    }
  }, [props.updateStatus]);
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
              uri: props.pic,
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
            {Name}
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
          <ProfileItem title={'Email'} value={Email} icon={'email'} />
          <Divider
            marginLeft={3}
            lineHeight={1}
            width={0.5}
            height={10}
            backgroundColor="blue.500"
          />
          <ProfileItem title={'Name'} value={Name} icon={'person'} />
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
  console.log('email::' + props.value);
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
        <Text fontSize={18} color="gray.700" fontWeight="bold">
          {props.title}
        </Text>
        <Space size={1} />
        <Divider backgroundColor="gray.300" />
        <Space size={1} />
        <Text fontSize={16} color="black">
          {props.value}
        </Text>
      </Box>
    </HStack>
  );
}
export default ProfileInfo;
