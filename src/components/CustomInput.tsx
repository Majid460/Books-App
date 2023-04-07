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
      onChange={props.onChange}
      InputLeftElement={props.InputLeftElement}
      placeholder={props.placeholder}
      InputRightElement={props.InputRightElement}
    />
  );
}
export default CustomInput;
