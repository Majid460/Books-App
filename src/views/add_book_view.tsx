import {
  Box,
  Icon,
  VStack,
  Text,
  HStack,
  Button,
  Spacer,
  Select,
  Fab,
} from 'native-base';
import React from 'react';
import CustomInput from '../components/CustomInput';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Space from '../components/Space/AddSpace';
import {Authors} from '../Constants';
import {NewBookNavProps} from '../navigation/navigationInterfaces';
import {Routes} from '../navigation/Routes/routes_names';
function AddBookView({navigation}: NewBookNavProps) {
  const [height, setHeight] = React.useState(100);
  const [addUrl, setAddUrl] = React.useState(true);
  const [showDrop, setShowDrop] = React.useState(false);
  const [selectedAuthor, setSelectedAuthor] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  return (
    <Box
      height="100%"
      width="100%"
      alignSelf="center"
      alignContent="center"
      overflow="hidden"
      backgroundColor="coolGray.300"
      padding="10%">
      <VStack space={2}>
        <Text color="black" fontSize={18}>
          Book Title
        </Text>
        <CustomInput
          placeholder="Title"
          h={10}
          borderRadius={10}
          size={23}
          _focus={{bg: 'gray.100'}}
          InputLeftElement={
            <Icon
              as={<Icons name="title" size={20} />}
              size={5}
              ml="2"
              color="blue.500"
            />
          }
          onChangeText={v => {
            console.log(v);
          }}
        />
        <Text color="black" fontSize={18}>
          Book Author
        </Text>
        {!showDrop ? (
          <CustomInput
            placeholder="Author"
            h={10}
            size={23}
            _focus={{bg: 'gray.100'}}
            borderRadius={10}
            InputRightElement={
              <Icon
                as={<Icons name="arrow-drop-down-circle" size={20} />}
                size={7}
                onPress={() => {
                  if (showDrop) {
                    setShowDrop(false);
                  } else {
                    setShowDrop(true);
                  }
                }}
                ml="2"
                color="blue.500"
              />
            }
            InputLeftElement={
              <Icon
                as={<Icons name="edit" size={20} />}
                size={5}
                ml="2"
                color="blue.500"
              />
            }
            onChangeText={v => {
              setSelectedAuthor(v);
            }}
          />
        ) : (
          <VStack>
            <Fab
              renderInPortal={false}
              shadow={2}
              alignSelf="center"
              right="0"
              onPress={() => {}}
              bottom={20}
              padding={1}
              onPressIn={() => {
                setShowDrop(false);
              }}
              size="sm"
              icon={
                <Icon
                  color="white"
                  as={<Icons name="cancel" />}
                  name="lightbulb"
                  size="5"
                />
              }
            />
            <Box
              width="95%"
              borderRadius={10}
              borderWidth={2}
              borderColor="blue.600">
              <Select
                minWidth="100%"
                accessibilityLabel="Choose Service"
                placeholder="Choose Author"
                placeholderTextColor="blueGray.600"
                fontSize={14}
                selectedValue={selectedAuthor}
                onValueChange={v => {
                  setSelectedAuthor(v);
                }}
                _selectedItem={{
                  bg: 'blue.400',
                  startIcon: (
                    <Icon as={<Icons name="done" />} size={5} color="black" />
                  ),
                }}
                mt="1">
                {Authors.map(e => (
                  <Select.Item
                    borderRadius={10}
                    key={e.value}
                    label={e.label}
                    value={e.value}
                  />
                ))}
              </Select>
            </Box>
            <Button
              key={'A2334'}
              variant="ghost"
              alignSelf="center"
              width={150}
              onPress={() => navigation.navigate(Routes.ADD_AUTHOR)}
              height={50}>
              <Text fontSize={16} color="blue.700">
                Add Author
              </Text>
            </Button>
          </VStack>
        )}

        <Text color="black" fontSize={18}>
          About Book
        </Text>
        <CustomInput
          placeholder="Description"
          h={Math.max(41, height)}
          size={23}
          _focus={{bg: 'gray.100'}}
          multiline={true}
          borderRadius={10}
          onContentSizeChange={event => {
            setHeight(event.nativeEvent.contentSize.height);
          }}
          InputLeftElement={
            <Icon
              alignSelf="flex-start"
              marginTop={2}
              as={<Icons name="comment" size={20} />}
              size={5}
              ml="2"
              color="blue.500"
            />
          }
          onChangeText={v => {
            console.log(v);
          }}
        />
        <Text color="black" fontSize={18}>
          Book Pic
        </Text>

        {addUrl ? (
          <CustomInput
            placeholder="Image Url"
            h={10}
            borderRadius={10}
            size={23}
            _focus={{bg: 'gray.100'}}
            InputLeftElement={
              <Icon
                as={<Icons name="link" size={20} />}
                size={6}
                ml="2"
                color="blue.500"
              />
            }
            onChangeText={v => {
              console.log(v);
            }}
          />
        ) : null}
        <Spacer />
        <HStack
          space={3}
          alignContent="center"
          overflow="visible"
          width="90%"
          justifyContent="center"
          alignSelf="center">
          <Button
            borderRadius={10}
            paddingLeft={5}
            paddingRight={5}
            paddingTop={2}
            paddingBottom={2}
            onPress={() => {
              if (addUrl == false) {
                setAddUrl(true);
              } else {
                setAddUrl(false);
              }
            }}
            variant="solid">
            <Text fontSize={16} color="white">
              {!addUrl ? ' Add Url ' : 'Hide Url'}
            </Text>
          </Button>
          <Button
            borderRadius={10}
            paddingLeft={5}
            paddingRight={5}
            paddingTop={2}
            paddingBottom={2}
            variant="solid">
            <Text fontSize={16} color="white">
              Upload Image
            </Text>
          </Button>
        </HStack>
        <Space size={10} />
        <Button
          paddingTop={2}
          paddingBottom={2}
          borderRadius={10}
          paddingLeft={10}
          paddingRight={10}
          variant="solid"
          onPress={() => setLoading(true)}
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
          isLoadingText="Adding Book..">
          <Text fontSize={16} color="white">
            Save Book
          </Text>
        </Button>
      </VStack>
    </Box>
  );
}
export default AddBookView;
