import { CardBody, Icon } from '@chakra-ui/icons';
import { IconProps } from '@chakra-ui/icons';
import { Button, Card, Heading, HStack } from '@chakra-ui/react';
import { ComponentWithAs } from '@chakra-ui/react';

import { recipeCardBodyStyles, recipeCardStyles, recipeCardTitleStyles } from './RecipeCard.styles';

type RecipeCardPropsType = {
    title: string;
    icon: ComponentWithAs<'svg', IconProps>;
};

export const RecipeCard = ({ title, icon }: RecipeCardPropsType) => (
    <Card sx={recipeCardStyles}>
        <CardBody sx={recipeCardBodyStyles}>
            <HStack spacing={{ base: 2, xl: 3 }}>
                <Icon as={icon} boxSize='24px' flexShrink={0} />
                <Heading as='h3' sx={recipeCardTitleStyles} noOfLines={1}>
                    {title}
                </Heading>
                <Button
                    flexShrink={0}
                    variant='outline'
                    colorScheme='lime'
                    size={{ base: 'xs', xxl: 'sm' }}
                >
                    Готовить
                </Button>
            </HStack>
        </CardBody>
    </Card>
);
