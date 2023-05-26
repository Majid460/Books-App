import {Avatar, Box, Button, HStack, Text} from 'native-base';
import React from 'react';
import CustomUpdateProfile from './update_profile_box';
import Space from '../Space/AddSpace';
import {useDispatch, useSelector} from 'react-redux';
import {setProfileUpdateStatus, updateProfile} from '../../redux/reducer';
import {UserRealmContext} from '../../data/LocalDataStorage';
import UserModel from '../../data/LocalDataStorage/Realm_Models/UserModel';
import {RootState} from '../../redux/combineReducers';
import ShowSlide from '../Slide/slide';
import {UpdateMode} from 'realm';
interface updateProfileProps {
  name: string;
  email: string;
  pic: string;
  updateStatus: (v: boolean) => void;
  id: string;
}
function UpdateProfile(props: updateProfileProps) {
  const [email, setEmail] = React.useState(props.email);
  const [name, setName] = React.useState(props.name);
  const [loading, setLoading] = React.useState(false);
  const [isOpenTop, setIsOpenTop] = React.useState(false);
  const [slideText, setSlideText] = React.useState('');
  const dispatch = useDispatch();
  const {useObject, useRealm} = UserRealmContext;
  const realm = useObject(UserModel, props.id);
  const realmW = useRealm();
  const updateProfileData = useSelector(
    (state: RootState) => state.reducer.profileUpdateData,
  );
  let token = '';
  if (realm != null) {
    token = realm.token;
  }
  React.useEffect(() => {
    if (updateProfileData.message == 'Data Updated') {
      props.updateStatus(true);
      setIsOpenTop(true);
      setSlideText('Data Updated Successfully');
      realmW.write(() => {
        realmW.create(
          UserModel,
          {
            email: updateProfileData.data.email,
            token: token,
            userId: props.id,
            name: updateProfileData.data.name,
            pic: props.pic,
          },
          UpdateMode.Modified,
        );
      });
      setName(updateProfileData.data.name);
    } else {
      setIsOpenTop(false);
      setSlideText('Data Updated Failed');
      props.updateStatus(false);
    }
  }, [updateProfileData]);
  const handleSubmit = () => {
    if (email != '' && name != '') {
      setLoading(true);
      if (props.email != email && props.name != name) {
        dispatch(
          updateProfile({email: email, name: name, token: token, id: props.id}),
        );
      } else if (props.email != email) {
        dispatch(
          updateProfile({email: email, name: '', token: token, id: props.id}),
        );
      } else if (props.name != name) {
        dispatch(
          updateProfile({email: '', name: name, token: token, id: props.id}),
        );
      }
    }
  };
  React.useEffect(() => {
    if (isOpenTop) {
      setTimeout(() => {
        setIsOpenTop(false);
      }, 3000);
    }
  }, [isOpenTop]);
  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);
  React.useEffect(() => {
    dispatch(setProfileUpdateStatus({profileUpdateStatus: ''}));
    props.updateStatus(false);
  }, []);
  return (
    <Box h="100%" w="100%" borderRadius={10} alignItems="center">
      <ShowSlide isOpenTop={isOpenTop} slideText={slideText} />
      <Box
        h="15%"
        w="90%"
        marginTop={1}
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
            {realm?.name}
          </Text>
        </HStack>
      </Box>
      <Box
        w={'100%'}
        h={'85%'}
        padding={3}
        alignItems="center"
        backgroundColor="white"
        borderTopLeftRadius={10}
        borderTopRightRadius={10}>
        <Text
          color="black"
          marginTop={3}
          fontSize={16}
          fontWeight="bold"
          alignSelf="center">
          Update Profile
        </Text>
        <Space size={2} />
        <CustomUpdateProfile
          title={'Email'}
          icon={'email'}
          setValue={v => {
            setEmail(v);
          }}
          value={realm?.email == undefined ? email : realm?.email}
        />
        <CustomUpdateProfile
          title={'Name'}
          icon={'person'}
          setValue={v => {
            setName(v);
          }}
          value={name}
        />
        <Space size={10} />
        <Button
          borderRadius={10}
          paddingLeft={70}
          paddingRight={70}
          opacity={
            email != '' && name != ''
              ? props.email != email || props.name != name
                ? '100'
                : '70'
              : '70'
          }
          _text={{
            fontSize: 16,
          }}
          onPress={() => {
            handleSubmit();
          }}
          isLoading={loading}
          _loading={{
            bg: 'amber.400',
            opacity: 1,
            _text: {
              color: 'darkBlue.900',
            },
          }}
          _spinner={{
            color: 'blue',
          }}
          isLoadingText="Updating...">
          Update
        </Button>
      </Box>
    </Box>
  );
}
export default UpdateProfile;
