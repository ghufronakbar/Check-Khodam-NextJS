import { Alert, AlertIcon, CloseButton, Text, useDisclosure } from "@chakra-ui/react";

const NoData = ({riwayatLength}) => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  if (riwayatLength === 0) {
    return isVisible ? (
      <Alert status="info" mt={4}>
        <AlertIcon />
        <Text fontSize="sm">Belum ada riwayat! Ayo check khodam kamu!</Text>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>
    ) : null;
  }
  return null;
};

export default NoData;
