import React from 'react';
import {Box, Slide} from 'native-base';

type slideProps = {
  isOpenTop: boolean;
  slideText: string;
};

function ShowSlide(props: slideProps) {
  return (
    <Slide
      in={props.isOpenTop}
      duration={1000}
      placement="top"
      marginLeft={3}
      marginTop={5}
      alignContent="center"
      marginRight={3}>
      <Box
        p="15px"
        width="90%"
        alignSelf="center"
        justifyContent="center"
        height="55px"
        _text={{
          color: 'white',
          fontSize: 16,
          textAlign: 'center',
        }}
        mt="4"
        bg="gray.500"
        rounded="md">
        {props.slideText}
      </Box>
    </Slide>
  );
}
export default ShowSlide;
