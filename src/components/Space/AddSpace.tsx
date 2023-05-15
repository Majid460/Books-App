import {Box} from 'native-base';
import React from 'react';
interface Props {
  size: number;
}

const Space: React.FC<Props> = ({size}) => {
  return <Box height={size} width={size} />;
};

export default Space;
