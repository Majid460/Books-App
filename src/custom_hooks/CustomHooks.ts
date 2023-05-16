import {useToast} from 'native-base';
import React from 'react';

function CustomHookForToast(dependency: string, Name: string) {
  const toast = useToast();
  React.useEffect(() => {
    if (dependency == 'Success') {
      toast.show({
        description: Name + ' Added Successfully',
      });
    } else if (dependency == 'Error') {
      toast.show({
        description: 'Error in adding Author',
      });
    }
  }, [dependency]);
}
export default CustomHookForToast;
