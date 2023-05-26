import {Box, HStack, VStack} from 'native-base';
import React from 'react';
import RailItem from './side_rail_view';

interface RailItemsProps {
  sideRail: boolean;
  onClick: (v: string) => void;
}
function RailView(props: RailItemsProps) {
  return (
    <Box
      height="100%"
      width={props.sideRail ? '100%' : null}
      backgroundColor={props.sideRail ? 'darkBlue.800' : 'white'}
      justifyContent="center">
      <HStack
        h="100%"
        alignItems="center"
        space={3}
        w={props.sideRail ? '100%' : null}>
        {props.sideRail == true ? (
          <Box
            h="90%"
            w="60%"
            shadow={9}
            marginLeft={2}
            borderRadius={10}
            backgroundColor="white">
            <VStack space={4} marginTop={10}>
              <RailItem
                title={'Account Information'}
                iconName={'person'}
                onClick={() => {
                  props.onClick('AI');
                }}
                active={false}
              />
              <RailItem
                title={'Manage Password'}
                iconName={'lock'}
                onClick={() => {
                  props.onClick('MP');
                }}
                active={false}
              />
              <RailItem
                title={'Update Profile'}
                iconName={'edit'}
                onClick={() => {
                  props.onClick('UP');
                }}
                active={false}
              />
            </VStack>
          </Box>
        ) : null}
      </HStack>
    </Box>
  );
}
export default RailView;
