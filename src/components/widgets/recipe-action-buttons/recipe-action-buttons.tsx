import { Button, HStack } from '@chakra-ui/react';

import { BookmarkIcon } from '~/icons/counter-icons/bookmark-icon';
import { ReactionIcon } from '~/icons/counter-icons/reaction-icon';

export const RecipeActionButtons = () => (
    <HStack>
        <Button
            size={{ base: 'xs', md: 'md' }}
            variant='outline'
            leftIcon={<ReactionIcon />}
            colorScheme='black'
        >
            Оценить рецепт
        </Button>
        <Button
            size={{ base: 'xs', md: 'md' }}
            variant='solid'
            leftIcon={<BookmarkIcon />}
            bgColor='lime.400'
        >
            Сохранить в закладки
        </Button>
    </HStack>
);
