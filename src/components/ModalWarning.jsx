import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
} from "@chakra-ui/react";

const ModalWarning = ({ warningOpen, setWarningOpen }) => {
  return (
    <Modal
      isOpen={warningOpen}
      onClose={() => {
        setWarningOpen(false);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Perhatian</ModalHeader>
        <ModalCloseButton
          onClick={() => {
            setWarningOpen(false);
          }}
        />
        <ModalBody>
          <Text>
            Jika kamu mengecek khodam kamu disini itu rill cuy no fek!
          </Text>
          <br/>
          <Text>Bagi yang punya penyakit jantung jangan lanjut bermain 😈</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={() => {
              setWarningOpen(false);
            }}
          >
            Tutup
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalWarning;
