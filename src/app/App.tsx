import '/src/styles/fonts.css';

import { Show } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import { ScrollToTop } from '~/components/ScrollToTop/ScrollToTop';
import { Footer } from '~/layout/footer/footer';
import { Header } from '~/layout/header/header';
import { Main } from '~/layout/main/main';
import { NavMenu } from '~/layout/navMenu/navMenu';
import { SideBar } from '~/layout/sideBar/sideBar';
import mainTheme from '~/styles/theme';

export const App: React.FC = () => (
    <ChakraProvider theme={mainTheme}>
        <ScrollToTop />
        <Header />
        <Main />
        <Show above='lg'>
            <NavMenu />
            <SideBar />
        </Show>
        <Footer />
    </ChakraProvider>
);
