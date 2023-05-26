import {Box, Icon, Text} from 'native-base';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CustomInput from '../CustomInput';
import Space from '../Space/AddSpace';

interface UPProfileProps {
  title: string;
  icon: string;
  setValue: (v: string) => void;
  value: string;
}

function CustomUpdateProfile(props: UPProfileProps) {
  return (
    <Box
      width="90%"
      borderRadius={10}
      shadow={9}
      marginTop={2}
      padding={3}
      alignSelf="center"
      borderColor="white"
      borderWidth="1"
      _dark={{
        borderColor: 'coolGray.600',
        backgroundColor: 'gray.700',
      }}
      _light={{
        backgroundColor: 'white',
      }}>
      <Text fontSize={16} color="gray.700" fontWeight="bold">
        {props.title}
      </Text>
      <Space size={2} />
      <CustomInput
        h={10}
        size={23}
        borderRadius={10}
        autoCapitalize="none"
        defaultValue={props.value}
        InputLeftElement={
          <Icon
            as={<Icons name={props.icon} size={20} />}
            size={5}
            ml="2"
            color="blue.500"
          />
        }
        onChangeText={props.setValue}
      />
    </Box>
  );
}
export default CustomUpdateProfile;
