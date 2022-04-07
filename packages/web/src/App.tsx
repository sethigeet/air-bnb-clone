import { Provider } from "./apollo";
import { ChakraProvider } from "@chakra-ui/react";

import Routes from "./routes";

function App() {
  return (
    <ChakraProvider resetCSS>
      <Provider>
        <Routes />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
