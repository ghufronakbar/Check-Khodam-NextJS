import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const App = ({ Component, pageProps }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io();
    setSocket(socket);
    return () => socket.disconnect();
  }, []);

  return (
    <ChakraProvider>
      {socket ? <Component {...pageProps} socket={socket} /> : <div>Loading...</div>}
    </ChakraProvider>
  );
};

export default App;
