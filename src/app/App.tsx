import '/src/styles/fonts.css';

import { Show } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import { SearchingContent } from '~/components/SearchingContent/SearchingContent';
import Header from '~/layout/Header/Header';
import { NavMenu } from '~/layout/NavMenu/NavMenu';
import { SideBar } from '~/layout/SideBar/SideBar';
import mainTheme from '~/styles/theme';

export const App: React.FC = () => (
    <ChakraProvider theme={mainTheme}>
        <Header />
        <SearchingContent title='Приятного аппетита!' />
        <Show above='lg'>
            <NavMenu />
            <SideBar />
        </Show>
    </ChakraProvider>
);
