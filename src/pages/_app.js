import MetaName from "@/components/MetaName";
import { ChakraProvider } from "@chakra-ui/react";
const App = ({ Component, pageProps }) => {

  return (<>
    <ChakraProvider>
      <MetaName />
      <Component {...pageProps} />
    </ChakraProvider>
  </>
  );
};

export default App;
