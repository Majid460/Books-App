import {Box, VStack, Text, Icon, Radio, Button, useToast} from 'native-base';
import React from 'react';
import {AuthorNavProps} from '../navigation/navigationInterfaces';
import CustomInput from '../components/CustomInput';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Space from '../components/Space/AddSpace';
import {useDispatch, useSelector} from 'react-redux';
import {addAuthor} from '../redux/reducer';
import {RootState} from '../redux/combineReducers';
import {defaultAuthorPic} from '../Constants';
import CustomHookForToast from '../custom_hooks/CustomHooks';

function AddAuthor({navigation}: AuthorNavProps) {
  const [imageSelection, setSelection] = React.useState('default');
  const [height, setHeight] = React.useState(100);
  const [loading, setLoading] = React.useState(false);
  const [Name, setName] = React.useState('');
  const dispatch = useDispatch();

  const [pic, setPic] = React.useState(defaultAuthorPic);

  const authorAddedStatus = useSelector(
    (state: RootState) => state.reducer.authorAddedStatus,
  );

  React.useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);
  React.useEffect(() => {
    if (imageSelection == 'Add Image') {
      setPic('');
    } else if (imageSelection == 'default') {
      setPic(defaultAuthorPic);
    }
  }, [imageSelection]);
  //Custom Hook for Toast
  CustomHookForToast(authorAddedStatus, Name);

  const AddAuthors = () => {
    if (Name.length != 0 && pic.length != 0) {
      setLoading(true);
      dispatch(
        addAuthor({
          name: Name,
          pic: pic,
        }),
      );
    }
  };
  return (
    <Box
      height="100%"
      width="100%"
      alignSelf="center"
      alignContent="center"
      overflow="hidden"
      backgroundColor="coolGray.300"
      padding="10%">
      <VStack space={3}>
        <Text fontSize={16} fontWeight="semibold" color="black">
          Author Name
        </Text>
        <CustomInput
          borderRadius={10}
          placeholder="Author Name"
          h={10}
          size={23}
          placeholderTextColor="grey"
          InputLeftElement={
            <Icon
              as={<Icons name="person" size={20} />}
              size={6}
              ml="2"
              color="blue.500"
            />
          }
          onChangeText={v => {
            setName(v);
          }}
          _focus={{bg: 'gray.200', borderColor: 'blue.500'}}
        />
        <Text fontSize={16} fontWeight="semibold" color="black">
          Author Image
        </Text>
        <Radio.Group
          name="ImageRadios"
          defaultValue="default"
          accessibilityLabel="Image Selection"
          value={imageSelection}
          onChange={nextValue => {
            setSelection(nextValue);
          }}>
          <Radio value="default" my={1}>
            Default Image
          </Radio>
          <Radio value="Add Image" my={1}>
            Add Image
          </Radio>
        </Radio.Group>
        {imageSelection == 'Add Image' ? (
          <CustomInput
            placeholder="Add Image Url"
            borderRadius={10}
            size={23}
            placeholderTextColor="grey"
            fontSize={16}
            multiline={true}
            height={height}
            onContentSizeChange={event => {
              setHeight(event.nativeEvent.contentSize.height);
            }}
            onChangeText={v => {
              setPic(v);
            }}
            _focus={{bg: 'gray.200', borderColor: 'blue.500'}}
            InputLeftElement={
              <Icon
                as={<Icons name="link" size={20} />}
                size={6}
                ml="2"
                color="blue.500"
              />
            }
          />
        ) : null}
        <Space size={5} />
        <Button
          borderRadius={10}
          paddingLeft={10}
          paddingRight={10}
          disabled={Name.length > 0 && pic.length > 0 ? false : true}
          onPress={() => AddAuthors()}
          isLoading={loading}
          _loading={{
            bg: 'amber.400',
            opacity: 1,
            _text: {
              fontSize: 16,
              color: 'darkBlue.900',
            },
          }}
          _spinner={{
            color: 'blue',
          }}
          backgroundColor={
            Name.length > 0 && pic.length > 0
              ? !loading
                ? 'pink.500'
                : null
              : 'green.500'
          }
          isLoadingText="Adding Author..">
          <Text fontSize={16} color="white">
            Save
          </Text>
        </Button>
      </VStack>
    </Box>
  );
}
export default AddAuthor;
