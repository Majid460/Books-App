import {Box} from 'native-base';
import React from 'react';
import {AuthorNavProps} from '../navigation/navigationInterfaces';

function AddAuthor({navigation}: AuthorNavProps) {
  return (
    <Box
      height="100%"
      width="100%"
      alignSelf="center"
      alignContent="center"
      overflow="hidden"
      backgroundColor="coolGray.300"
      padding="10%"></Box>
  );
}
export default AddAuthor;
