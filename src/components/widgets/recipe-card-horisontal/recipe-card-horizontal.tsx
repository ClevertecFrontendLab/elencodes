import { VStack } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Card,
    CardBody,
    Heading,
    HStack,
    Image,
    Spacer,
    Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { RecipeStats, SaveButton } from '~/components';
import { useGetRecipePath } from '~/hooks/use-get-recipe-path.tsx';
import { useMapCategoriesToTags } from '~/hooks/use-map-categories-to-tags.tsx';
import { useScreenSize } from '~/hooks/use-screen-size.tsx';
import { Recipe } from '~/query/services/recipes/types.ts';
import { useAppSelector } from '~/redux/hooks.ts';
import { selectSearchValue } from '~/redux/slices/search-slice.ts';
import { buildImageUrl } from '~/utils/build-image-url';

type RecipeCardHorizontalProps = {
    recipe: Recipe;
    index: number;
    dataTestId?: string;
};

export const RecipeCardHorizontal = ({ recipe, index, dataTestId }: RecipeCardHorizontalProps) => {
    const { isTablet } = useScreenSize();
    const navigate = useNavigate();
    const searchQuery = useAppSelector(selectSearchValue);
    const path = useGetRecipePath(recipe);
    const tags = useMapCategoriesToTags(recipe.categoriesIds);

    const handleNavigate = () => {
        navigate(path);
    };

    const getHighlightedTitle = (title: string) => {
        if (!title) return;
        if (!searchQuery.trim()) return title;

        const lowerTitle = title.toLowerCase();
        const lowerQuery = searchQuery.toLowerCase();
        const index = lowerTitle.indexOf(lowerQuery);

        if (index === -1) return title;

        return (
            <>
                {title.slice(0, index)}
                <Box as='span' color='lime.600' fontWeight={500}>
                    {title.slice(index, index + lowerQuery.length)}
                </Box>
                {title.slice(index + lowerQuery.length)}
            </>
        );
    };

    return (
        <Card
            direction='row'
            overflow='hidden'
            variant='outline'
            transition='box-shadow 0.2s ease'
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
            boxShadow='none'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                cursor: 'pointer',
            }}
            minH='128px'
            data-test-id={dataTestId}
        >
            <Box position='relative' maxW='48%' width='346px'>
                <Image
                    src={buildImageUrl(recipe?.image)}
                    alt={recipe?.title}
                    borderBottomRadius='none'
                    borderLeftRadius='lg'
                    w='100%'
                    h='100%'
                    objectFit='cover'
                />
                {isTablet && (
                    <Box position='absolute' top='8px' left='8px'>
                        <VStack align='start' spacing={1}>
                            {tags}
                        </VStack>
                    </Box>
                )}
            </Box>
            <CardBody
                display='flex'
                gap={{ base: 1, sm: 2, md: 5 }}
                flexDirection='column'
                position='relative'
                px={isTablet ? 2 : 4}
                pt={isTablet ? 2 : 5}
                pb={isTablet ? 1 : 5}
            >
                <HStack align='start'>
                    {!isTablet && (
                        <VStack align='start' spacing={1}>
                            {tags}
                        </VStack>
                    )}
                    {!isTablet && <Spacer />}
                    <RecipeStats recipe={recipe} />
                </HStack>
                <VStack align='start' justify='start' gap={isTablet ? 2 : 5}>
                    <Heading
                        noOfLines={{ base: 2, md: 1 }}
                        size={{ base: 'sm', md: 'md' }}
                        fontWeight='500'
                        wordBreak={{ base: 'normal', xl: 'break-all' }}
                    >
                        {getHighlightedTitle(recipe?.title)}
                    </Heading>
                    {!isTablet && (
                        <Text noOfLines={3} fontSize='sm'>
                            {recipe?.description}
                        </Text>
                    )}
                </VStack>
                <HStack justifyContent='end' mt='auto'>
                    <SaveButton recipeId={recipe?._id} />
                    <Button
                        size={isTablet ? 'xs' : 'sm'}
                        variant='solid'
                        bg='black'
                        color='white'
                        onClick={handleNavigate}
                        data-test-id={`card-link-${index}`}
                    >
                        Готовить
                    </Button>
                </HStack>
            </CardBody>
        </Card>
    );
};
