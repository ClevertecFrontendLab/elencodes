import { VStack } from '@chakra-ui/icons';
import { Box, IconButton, Text } from '@chakra-ui/react';

import { AddRecipeIcon } from '~/icons/sidebar-icons/add-recipe-icon';

export const WriteRecipeBtn = () => (
    <Box bottom='50px' textAlign='center'>
        <VStack spacing={2}>
            <IconButton
                aria-label='Записать рецепт'
                icon={<AddRecipeIcon color='#FFFFD3' />}
                isRound
                size='lg'
                fontSize='24px'
                bg='black'
                boxShadow='0 0 40px 10px #c4ff61'
                _hover={{ boxShadow: '0 0 50px 12px #baff45' }}
            />
            <Text fontSize='sm' color='gray.700'>
                Записать рецепт
            </Text>
        </VStack>
    </Box>
);
