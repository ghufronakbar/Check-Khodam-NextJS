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
  Image,
} from "@chakra-ui/react";

const ModalResult = ({
  resultOpen,
  setResultOpen,
  name,
  khodam,
  gambar,
  setName,
  setKhodam,
}) => {
  return (
    <Modal
      isOpen={resultOpen}
      onClose={() => {
        setResultOpen(false);
        setName("");
        setKhodam("");
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Hasil Khodam Kamu</ModalHeader>
        <ModalCloseButton
          onClick={() => {
            setResultOpen(false);
            setName("");
            setKhodam("");
          }}
        />
        <ModalBody>
          <Text>
            Khodam {name} adalah {khodam}
          </Text>
          <Image
            mt={2}
            src={gambar}
            width="100%"
            height="auto"
            style={{ objectFit: "contain" }}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={() => {
              setResultOpen(false);
              setName("");
              setKhodam("");
            }}
          >
            Cek Lagi
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalResult;
