import MadridMap from './Map.tsx';
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <MantineProvider withNormalizeCSS>
      <MadridMap />
    </MantineProvider>
  )
}

export default App;
