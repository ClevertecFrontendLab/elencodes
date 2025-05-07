import { HStack } from '@chakra-ui/react';

import { StatItem } from '~/components';
import { BookmarkIcon } from '~/icons/counter-icons/bookmark-icon';
import { ReactionIcon } from '~/icons/counter-icons/reaction-icon';
import { Recipe } from '~/query/services/recipes/types.ts';

type RecipeStatsProps = {
    recipe: Recipe;
};

export const RecipeStats = ({ recipe }: RecipeStatsProps) => (
    <HStack align='start' spacing={1}>
        {recipe?.bookmarks > 0 && (
            <StatItem
                icon={<BookmarkIcon w={{ base: 3, sm: 4 }} h={{ base: 3, sm: 4 }} />}
                value={recipe.bookmarks}
            />
        )}
        {recipe?.likes > 0 && (
            <StatItem
                icon={<ReactionIcon w={{ base: 3, sm: 4 }} h={{ base: 3, sm: 4 }} />}
                value={recipe.likes}
            />
        )}
    </HStack>
);
