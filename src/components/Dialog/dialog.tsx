import {AlertDialog, Button} from 'native-base';
import React, {RefObject} from 'react';

interface dialogProps {
  isOpen: boolean;
  onClose: () => void;
  cancelRef: RefObject<any>;
  cancelBtnText: string;
  okBtnText: string;
  headerText: string;
  bodyText: string;
  okPress: () => void;
}
function DialogView(props: dialogProps) {
  return (
    <AlertDialog
      leastDestructiveRef={props.cancelRef}
      isOpen={props.isOpen}
      onClose={props.onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>{props.headerText}</AlertDialog.Header>
        <AlertDialog.Body>{props.bodyText}</AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={props.onClose}
              ref={props.cancelRef}>
              {props.cancelBtnText}
            </Button>
            <Button colorScheme="danger" onPress={props.okPress}>
              {props.okBtnText}
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
}
export default DialogView;
