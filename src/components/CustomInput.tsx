import {Input, Icon, IInputProps} from 'native-base';
import React from 'react';

interface Props extends IInputProps {}

function CustomInput(props: Props) {
  return (
    <Input
      w={{
        base: '95%',
        md: '25%',
      }}
      h={props.h}
      size={props.size}
      type={props.type}
      variant="rounded"
      onChangeText={props.onChangeText}
      onChange={props.onChange}
      InputLeftElement={props.InputLeftElement}
      placeholder={props.placeholder}
      InputRightElement={props.InputRightElement}
      focusOutlineColor="blue.700"
      borderColor="gray.600"
      _focus={props._focus}
      backgroundColor={props.backgroundColor}
      multiline={props.multiline}
      borderRadius={props.borderRadius}
      onContentSizeChange={props.onContentSizeChange}
    />
  );
}
export default CustomInput;
