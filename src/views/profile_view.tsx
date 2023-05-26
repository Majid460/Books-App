import {Box, Fab, Icon} from 'native-base';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import ProfileInfo from '../components/profileRail/profile_info_view';
import RailView from '../components/profileRail/side_rail_items';
import UpdateProfile from '../components/profileRail/update_profile_view';
import {ProfileNavProps} from '../navigation/navigationInterfaces';
import {makeEventNotifier} from '../services/useEventEmitters';
import ManagePassword from '../components/profileRail/manage_passwords';

const notifer = makeEventNotifier<{updatedStatus: boolean}>('updateStatus');
export function useStatusListener(
  listener: typeof notifer.notify,
  deps: ReadonlyArray<any>,
) {
  notifer.useEventListener(listener, deps);
}
function ProfileView({navigation, route}: ProfileNavProps) {
  const name = route.params.name;
  const email = route.params.email;
  const pic = route.params.pic;
  const id = route.params.id;

  const [sideRail, setSideRail] = React.useState(false);
  const [screenName, setScreenName] = React.useState('');
  const [dataUpdated, setDataUpdated] = React.useState(false);

  React.useEffect(() => {
    notifer.notify({updatedStatus: dataUpdated});
  }, [dataUpdated]);
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
        <RailView
          sideRail={sideRail}
          onClick={v => {
            setScreenName(v);
            setSideRail(false);
          }}
        />
      ) : screenName == '' || screenName == 'AI' ? (
        <ProfileInfo
          name={name}
          email={email}
          pic={pic}
          updateStatus={dataUpdated}
          id={id}
        />
      ) : screenName == 'UP' ? (
        <UpdateProfile
          name={name}
          email={email}
          pic={pic}
          id={id}
          updateStatus={v => {
            setDataUpdated(v);
          }}
        />
      ) : (
        <ManagePassword id={id} navigation={navigation} />
      )}
    </Box>
  );
}
export default ProfileView;
