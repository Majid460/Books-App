import React from 'react';
import {
  Box,
  Icon,
  Pressable,
  Text,
  Button,
  FormControl,
  Slide,
} from 'native-base';
import Space from '../Space/AddSpace';
import CustomInput from '../CustomInput';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {confirmPasswordValidator, passwordValidator} from '../../utils/utils';
import {updatePassword, updatePasswordStatus} from '../../redux/reducer';
import {UserRealmContext} from '../../data/LocalDataStorage';
import UserModel from '../../data/LocalDataStorage/Realm_Models/UserModel';
import {RootState} from '../../redux/combineReducers';
import ShowSlide from '../Slide/slide';
import DialogView from '../Dialog/dialog';
import {ProfileScreenNavigationProp} from '../../navigation/navigationInterfaces';
import {Routes} from '../../navigation/Routes/routes_names';
interface ManagePasswordProps {
  id: string;
  navigation: ProfileScreenNavigationProp;
}

function ManagePassword(props: ManagePasswordProps) {
  const [currentPass, setCurrPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('');
  const [show, setShowPassword] = React.useState(false);
  const [showNew, setShowNewPassword] = React.useState(false);
  const [showConfirmNew, setShowConfirmPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [currPasswordValidate, setCurrentPasswordValidate] =
    React.useState(false);
  const [newPasswordValidate, setNewPasswordValidate] = React.useState(false);
  const [isOpenTop, setIsOpenTop] = React.useState(false);
  const [slideText, setSlideText] = React.useState('');
  const [openDialog, setDialogOpen] = React.useState(false);
  const [confirmPasswordValidate, setConfirmPasswordValidate] =
    React.useState(false);
  const {useObject} = UserRealmContext;
  const realm = useObject(UserModel, props.id);
  let token = '';
  if (realm != null) {
    token = realm.token;
  }
  const dialogRef = React.useRef(null);
  const passwordUpdatedStatus = useSelector(
    (state: RootState) => state.reducer.PasswordStatus,
  );
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (newPassword === confirmNewPassword) {
      setLoading(true);
      dispatch(
        updatePassword({
          id: props.id,
          currentPassword: currentPass,
          newPassword: newPassword,
          token: token,
        }),
      );
    }
  };
  React.useEffect(() => {
    if (passwordUpdatedStatus == 'Password updated successfully') {
      setIsOpenTop(true);
      setSlideText('Password updated successfully');
      setDialogOpen(true);
    } else if (
      passwordUpdatedStatus == 'Please enter correct current password'
    ) {
      setIsOpenTop(true);
      setSlideText('Invalid current password');
    } else if (passwordUpdatedStatus == 'No User found') {
      setIsOpenTop(true);
      setSlideText('No User found');
    } else {
      setIsOpenTop(false);
    }
  }, [passwordUpdatedStatus]);
  React.useEffect(() => {
    if (isOpenTop) {
      setTimeout(() => {
        setIsOpenTop(false);
      }, 3000);
    }
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [isOpenTop, loading]);
  React.useEffect(() => {
    dispatch(updatePasswordStatus({passwordStatus: ''}));
    if (isOpenTop) {
      setIsOpenTop(false);
    }
  }, []);
  return (
    <Box height="100%" width="100%" backgroundColor="white" alignItems="center">
      <DialogView
        isOpen={false}
        onClose={() => {
          setDialogOpen(false);
        }}
        cancelRef={dialogRef}
        cancelBtnText={'Close'}
        okBtnText={'Login'}
        headerText={'Password Changed'}
        bodyText={'You changed password kindly login again.'}
        okPress={() => {
          setDialogOpen(false);
          props.navigation.navigate(Routes.LOGIN);
        }}
      />
      <ShowSlide isOpenTop={isOpenTop} slideText={slideText} />
      <Space size={5} />
      <Text fontSize={16} fontWeight={600}>
        Manage Password
      </Text>
      <Space size={3} />
      <Text marginX={5} textAlign="center">
        To change password please enter your current password.
      </Text>
      <Space size={5} />
      <FormControl
        isInvalid={currPasswordValidate}
        w="100%"
        maxW="100%"
        alignItems="center"
        alignSelf="center">
        <CustomInput
          placeholder="Current Password"
          secureTextEntry={true}
          autoCapitalize="none"
          borderRadius={10}
          h={10}
          size="lg"
          type={show ? 'text' : 'password'}
          InputLeftElement={
            <Icon
              as={<Icons name="lock" size={20} />}
              size={5}
              ml="2"
              color="blue.500"
            />
          }
          onChangeText={v => {
            setCurrPassword(v);
          }}
          InputRightElement={
            <Pressable onPress={() => setShowPassword(!show)}>
              <Icon
                as={<Icons name={show ? 'visibility' : 'visibility-off'} />}
                size={5}
                mr="2"
                color="blue.500"
              />
            </Pressable>
          }
        />
        <FormControl.ErrorMessage
          alignSelf="flex-start"
          leftIcon={
            <Icon
              as={<Icons name="error" size={20} />}
              size={5}
              ml="2"
              color="red.500"
            />
          }>
          Your password is not correct.
        </FormControl.ErrorMessage>
      </FormControl>
      <Space size={5} />
      <FormControl
        isInvalid={newPasswordValidate}
        w="100%"
        maxW="100%"
        alignItems="center"
        alignSelf="center">
        <CustomInput
          placeholder="New Password"
          secureTextEntry={true}
          autoCapitalize="none"
          borderRadius={10}
          h={10}
          size="lg"
          type={showNew ? 'text' : 'password'}
          InputLeftElement={
            <Icon
              as={<Icons name="lock" size={20} />}
              size={5}
              ml="2"
              color="blue.500"
            />
          }
          onChangeText={v => {
            if (passwordValidator(v)) {
              setNewPassword(v);
              setNewPasswordValidate(false);
            } else {
              setNewPasswordValidate(true);
            }
            if (v == '') {
              setNewPasswordValidate(false);
            }
          }}
          InputRightElement={
            <Pressable onPress={() => setShowNewPassword(!showNew)}>
              <Icon
                as={<Icons name={showNew ? 'visibility' : 'visibility-off'} />}
                size={5}
                mr="2"
                color="blue.500"
              />
            </Pressable>
          }
        />
        <FormControl.ErrorMessage
          alignSelf="flex-start"
          leftIcon={
            <Icon
              as={<Icons name="error" size={20} />}
              size={5}
              ml="2"
              color="red.500"
            />
          }>
          Must be atleast 6 characters & has Numbers.
        </FormControl.ErrorMessage>
      </FormControl>
      <Space size={5} />
      <FormControl
        isInvalid={confirmPasswordValidate}
        w="100%"
        maxW="100%"
        alignItems="center"
        alignSelf="center">
        <CustomInput
          placeholder="Confirm New Password"
          secureTextEntry={true}
          autoCapitalize="none"
          borderRadius={10}
          h={10}
          size="lg"
          type={showConfirmNew ? 'text' : 'password'}
          InputLeftElement={
            <Icon
              as={<Icons name="lock" size={20} />}
              size={5}
              ml="2"
              color="blue.500"
            />
          }
          onChangeText={v => {
            if (confirmPasswordValidator(newPassword, v)) {
              setConfirmNewPassword(v);
              setConfirmPasswordValidate(false);
            } else {
              setConfirmPasswordValidate(true);
            }
            if (v == '') {
              setConfirmPasswordValidate(false);
            }
          }}
          InputRightElement={
            <Pressable onPress={() => setShowConfirmPassword(!showConfirmNew)}>
              <Icon
                as={
                  <Icons
                    name={showConfirmNew ? 'visibility' : 'visibility-off'}
                  />
                }
                size={5}
                mr="2"
                color="blue.500"
              />
            </Pressable>
          }
        />
        <FormControl.ErrorMessage
          alignSelf="flex-start"
          leftIcon={
            <Icon
              as={<Icons name="error" size={20} />}
              size={5}
              ml="2"
              color="red.500"
            />
          }>
          Both Passwords must match.
        </FormControl.ErrorMessage>
      </FormControl>
      <Space size={8} />
      <Button
        borderRadius={10}
        paddingLeft={70}
        paddingRight={70}
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
        isLoadingText="Verifying..">
        Update Password
      </Button>
    </Box>
  );
}
export default ManagePassword;
