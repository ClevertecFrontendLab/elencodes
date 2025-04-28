import { Box } from '@chakra-ui/icons';
import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';

import { CategoryPage } from '../pages/CategoryPage';
import { HomePage } from '../pages/HomePage';
import { RecipesPage } from '../pages/RecipesPage';
import { TheJuciestPage } from '../pages/TheJuciestPage';
import { mainContainerStyles } from './Main.style';

export const Main = () => (
    <Box as='main'>
        <Container sx={mainContainerStyles}>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path=':category' element={<CategoryPage />}>
                    <Route path=':subcategory' element={<CategoryPage />} />
                </Route>
                <Route path=':category/:subcategory/:id' element={<RecipesPage />} />
                <Route path='the-juiciest' element={<TheJuciestPage />} />
            </Routes>
        </Container>
    </Box>
);
