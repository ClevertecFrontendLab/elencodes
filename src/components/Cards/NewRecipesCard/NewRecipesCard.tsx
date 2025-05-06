import { Box, CardBody } from '@chakra-ui/icons';
import { IconProps } from '@chakra-ui/icons';
import { Card, Flex, Image, Stack } from '@chakra-ui/react';
import { ComponentWithAs } from '@chakra-ui/react';

import { ActionCounter } from '~/components/ActionCounter/ActionCounter';
import { CardTextContent } from '~/components/CardTextContent/CardTextContent';
import { MenuItemTag } from '~/components/MenuItemTag/MenuItemTag';
import { ActionCounterPropsType } from '~/types/actionCounterType';

import {
    cardBodyStyles,
    cardBoxImageStyles,
    cardImageStyles,
    cardItemTagBoxStyles,
    cardItemTagCounterBoxStyles,
    cardStyles,
} from './NewRecipesCard.styles';

type NewRecipesCardPropsType = {
    img: string;
    altImg: string;
    title: string;
    text: string;
    iconCounters: ActionCounterPropsType[];
    tagIcon: ComponentWithAs<'svg', IconProps>;
    tagTitle: string;
    bgColorTag: string;
};

export const NewRecipesCard = ({
    img,
    altImg,
    title,
    text,
    iconCounters,
    tagTitle,
    tagIcon,
    bgColorTag,
}: NewRecipesCardPropsType) => (
    <Card flexShrink={0} sx={cardStyles}>
        <Box sx={cardBoxImageStyles}>
            <Image src={img} alt={altImg} sx={cardImageStyles} />
        </Box>
        <CardBody sx={cardBodyStyles}>
            <Stack spacing={{ base: 2, xl: 6 }}>
                <CardTextContent title={title} description={text} />
                <Flex sx={cardItemTagBoxStyles}>
                    <MenuItemTag icon={tagIcon} title={tagTitle} bgColor={bgColorTag} />
                    <Flex sx={cardItemTagCounterBoxStyles}>
                        {!!iconCounters.length &&
                            iconCounters.map((i, index) => <ActionCounter key={index} {...i} />)}
                    </Flex>
                </Flex>
            </Stack>
        </CardBody>
    </Card>
);
