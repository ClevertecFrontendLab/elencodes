import '/src/styles/fonts.css';

import { Show } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import { Footer } from '~/layout/Footer/Footer';
import Header from '~/layout/Header/Header';
import { Main } from '~/layout/Main/Main';
import { NavMenu } from '~/layout/NavMenu/NavMenu';
import { SideBar } from '~/layout/SideBar/SideBar';
import mainTheme from '~/styles/theme';

export const App: React.FC = () => (
    <ChakraProvider theme={mainTheme}>
        <Header />
        <Main />
        <Show above='lg'>
            <NavMenu />
            <SideBar />
        </Show>
        <Show below='lg'>
            <Footer />
        </Show>
    </ChakraProvider>
);
