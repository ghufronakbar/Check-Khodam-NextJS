import {
  Box,
  HStack,
  Heading,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Headers = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mode, setMode] = useState("");

  useEffect(() => {
    const storedColorMode = localStorage.getItem("chakra-ui-color-mode");
    setMode(storedColorMode === "dark" ? "Dark Mode" : "Light Mode");
  });

  const handleColorSwitch = () => {
    toggleColorMode();
    const newMode = colorMode === "light" ? "Dark Mode" : "Light Mode";
    setMode(newMode);
    localStorage.setItem(
      "chakra-ui-color-mode",
      colorMode === "light" ? "dark" : "light"
    );
  };
  return (
    <Box p={8} borderWidth="1px" mx={4} mt={4} borderRadius={8} flex={1}>
      <Heading>Check Khodam Online!</Heading>
      <HStack alignItems="center" mt={4}>
        <Switch
          id="switchColor"
          isChecked={colorMode === "dark"}
          onChange={handleColorSwitch}
        />
        <Text fontSize="sm" ml={2}>
          {mode}
        </Text>
      </HStack>
    </Box>
  );
};

export default Headers;
