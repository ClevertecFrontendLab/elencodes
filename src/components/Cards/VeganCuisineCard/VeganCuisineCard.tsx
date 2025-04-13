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
    text,
    iconCounters,
    tagTitle,
    tagIcon,
    bgColorTag,
}: VeganCuisineCardPropsType) => (
    <Card sx={lastSectionCardStyles}>
        <CardBody sx={lastSectionCardBodyStyles}>
            <Stack spacing={{ base: 2, xl: 6 }}>
                <CardTextContent
                    title={title}
                    text={text}
                    showTextAbove='base'
                    mobileH='100px'
                    linesTitleOnMobile={1}
                />
                <Flex sx={menuItemTagBoxStyles}>
                    <MenuItemTag
                        icon={tagIcon}
                        title={tagTitle}
                        bgColor={bgColorTag}
                        mobilePos='static'
                    />
                    <Flex sx={actionCounterBox}>
                        {!!iconCounters.length &&
                            iconCounters.map((i, index) => <ActionCounter key={index} {...i} />)}
                    </Flex>
                </Flex>
            </Stack>
        </CardBody>
    </Card>
);
