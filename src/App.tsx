import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PopupPage from './pages/popup';
import './App.css';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Routes>
          <Route path='/dashboard' element={<h1>Hello from dashboard</h1>} />
          <Route path='*' element={<PopupPage />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;