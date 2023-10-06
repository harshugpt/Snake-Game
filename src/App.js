import "./App.css";
import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import CanvasBoard from "./components/CanvasBoard";
import ScoreCard from "./components/ScoreCard";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.lg" centerContent>
        <Heading as="h1" size="xl">
          Snake Game
        </Heading>
        <ScoreCard />
        <CanvasBoard height={600} width={1000} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
