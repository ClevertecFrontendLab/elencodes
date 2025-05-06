import { Box } from '@chakra-ui/icons';
import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';

import { CategoryPage } from '../../pages/categoryPage';
import { HomePage } from '../../pages/homePage';
import { RecipesPage } from '../../pages/recipesPage';
import { TheJuciestPage } from '../../pages/theJuciestPage';
import { mainContainerStyles } from './main.style';

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
