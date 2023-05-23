import {Box, Fab, Icon} from 'native-base';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import RailItem from '../components/profileRail/side_rail_view';
import ProfileInfo from '../components/profileRail/profile_info_view';
import RailView from '../components/profileRail/side_rail_items';
function ProfileView() {
  const [sideRail, setSideRail] = React.useState(false);
  return (
    <Box height="100%" width="100%" backgroundColor="darkBlue.800">
      <Fab
        renderInPortal={false}
        shadow={2}
        placement="bottom-left"
        size="sm"
        top={'50%'}
        left={sideRail ? '65%' : '1'}
        width={9}
        maxW={10}
        height={20}
        onPress={() => {
          if (sideRail == false) {
            setSideRail(true);
          } else {
            setSideRail(false);
          }
        }}
        bg={'darkBlue.700'}
        borderRadius={5}
        icon={
          <Icon
            as={
              <Icons name={sideRail ? 'arrow-back-ios' : 'arrow-forward-ios'} />
            }
            ml={1}
            size={5}
            color="white"
          />
        }
      />
      {sideRail ? (
        <RailView sideRail={sideRail} />
      ) : (
        <ProfileInfo name={'Majid'} email={''} pic={''} />
      )}
    </Box>
  );
}
export default ProfileView;
