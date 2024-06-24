import { Box, Center, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import {
  AiOutlineDollar,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const Copyright = () => {
  const direction = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Box p={8} borderWidth="1px" mx={4} my={4} borderRadius={8} flex={1}>
      <Text fontSize="sm" as="cite">
        Check Khodam Online By lanstheprodigy
      </Text>
      <Stack direction={direction} mt={4}>
        <a
          href="https://www.instagram.com/ghufronakbar_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box p={2} borderWidth="1px" borderRadius={8} mt={1}>
            <Center>
              <AiOutlineInstagram />
              <Text ml={2} fontSize="sm">
                ghufronakbar_
              </Text>
            </Center>
          </Box>
        </a>
        <a
          href="https://www.github.com/lanstheprodigy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box p={2} borderWidth="1px" borderRadius={8} mt={1}>
            <Center>
              <AiOutlineGithub />
              <Text ml={2} fontSize="sm">
                lanstheprodigy
              </Text>
            </Center>
          </Box>
        </a>
        <a
          href="https://www.saweria.co/lanstheprodigy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box p={2} borderWidth="1px" borderRadius={8} mt={1}>
            <Center>
              <AiOutlineDollar />
              <Text ml={2} fontSize="sm">
                lanstheprodigy
              </Text>
            </Center>
          </Box>
        </a>
      </Stack>
    </Box>
  );
};

export default Copyright;
