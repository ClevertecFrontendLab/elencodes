import '/src/styles/fonts.css';

import { ChakraProvider } from '@chakra-ui/react';

import Header from '~/layout/Header/Header';
import { SideBar } from '~/layout/SideBar/SideBar';
import mainTheme from '~/styles/theme';

export const App: React.FC = () => (
    <ChakraProvider theme={mainTheme}>
        <Header />
        <SideBar />
    </ChakraProvider>
);
