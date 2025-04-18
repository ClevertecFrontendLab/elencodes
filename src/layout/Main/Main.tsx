import { Box } from '@chakra-ui/icons';
import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';

import { HomePage } from '../pages/HomePage';
import { TheJuciestPage } from '../pages/TheJuciestPage';
import { VeganCuisinePage } from '../pages/VeganCuisinePage';
import { mainContainerStyles } from './Main.style';

export const Main = () => (
    <Box as='main'>
        <Container sx={mainContainerStyles}>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='juciest' element={<TheJuciestPage />} />
                <Route path='vegan' element={<VeganCuisinePage />} />
            </Routes>
        </Container>
    </Box>
);
