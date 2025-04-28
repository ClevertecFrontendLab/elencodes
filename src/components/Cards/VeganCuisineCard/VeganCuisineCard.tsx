import { CardBody } from '@chakra-ui/icons';
import { Card, Flex, Stack } from '@chakra-ui/react';

import { ActionCounter } from '~/components/ActionCounter/ActionCounter';
import { CardTextContent } from '~/components/CardTextContent/CardTextContent';
import { MenuItemTag } from '~/components/MenuItemTag/MenuItemTag';
import { VeganCuisineCardPropsType } from '~/types/VeganCuisineCardType';

import {
    actionCounterBox,
    lastSectionCardBodyStyles,
    lastSectionCardStyles,
    menuItemTagBoxStyles,
} from './VeganCuisineCard.styles';

export const VeganCuisineCard = ({
    title,
    description,
    iconCounters,
    category,
    bgColorTag,
}: VeganCuisineCardPropsType) => (
    <Card sx={lastSectionCardStyles}>
        <CardBody sx={lastSectionCardBodyStyles}>
            <Stack spacing={{ base: 2, xl: 6 }}>
                <CardTextContent
                    title={title}
                    description={description}
                    showTextAbove='base'
                    mobileH='100px'
                    linesTitleOnMobile={1}
                    isMainCard={false}
                />
                <Flex sx={menuItemTagBoxStyles}>
                    <MenuItemTag category={category} bgColor={bgColorTag} mobilePos='static' />
                    <Flex sx={actionCounterBox}>
                        {!!iconCounters.length &&
                            iconCounters.map((i, index) => <ActionCounter key={index} {...i} />)}
                    </Flex>
                </Flex>
            </Stack>
        </CardBody>
    </Card>
);
