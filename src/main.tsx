import './index.css';
import './fonts.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './app/App';
import { store } from './store/configure-store';
import mainTheme from './theme';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={mainTheme}>
                <App />
            </ChakraProvider>
        </Provider>
    </StrictMode>,
);
