import '~/fonts.css';

import { ChakraProvider } from '@chakra-ui/react';

import Header from '~/layout/Header/Header';
import mainTheme from '~/styles/theme';

export const App: React.FC = () => (
    <ChakraProvider theme={mainTheme}>
        <Header />
    </ChakraProvider>
);
