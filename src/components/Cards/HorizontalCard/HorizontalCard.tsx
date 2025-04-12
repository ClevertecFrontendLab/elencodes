import { Box, CardBody } from '@chakra-ui/icons';
import { Card, Flex, Image, Stack } from '@chakra-ui/react';

import { ActionCounter } from '~/components/ActionCounter/ActionCounter';
import { SaveButton } from '~/components/Buttons/SaveButton/SaveButton';
import { StartCookButton } from '~/components/Buttons/StartCookButton/StartCookButton';
import { CardTextContent } from '~/components/CardTextContent/CardTextContent';
import { MenuItemTag } from '~/components/MenuItemTag/MenuItemTag';
import { HorizontalCardType } from '~/types/HorizontalCardType';

import {
    actionCounterBox,
    horizontalCardBodyStyles,
    horizontalCardBoxButtonStyles,
    horizontalCardBoxImgStyles,
    horizontalCardHeaderStyles,
    horizontalCardImgStyles,
    horizontalCardStyles,
} from './HorizontalCard.styles';

export const HorizontalCard = ({
    img,
    altImg,
    title,
    text,
    iconCounters,
    tagTitle,
    tagIcon,
    bgColorTag,
}: HorizontalCardType) => (
    <Card sx={horizontalCardStyles}>
        <Box sx={horizontalCardBoxImgStyles}>
            <Image src={img} alt={altImg} sx={horizontalCardImgStyles} />
        </Box>
        <CardBody sx={horizontalCardBodyStyles}>
            <Stack spacing={{ base: 2, lg: 6 }}>
                <Flex sx={horizontalCardHeaderStyles}>
                    <MenuItemTag icon={tagIcon} title={tagTitle} bgColor={bgColorTag} />
                    <Flex sx={actionCounterBox}>
                        {!!iconCounters.length &&
                            iconCounters.map((i, index) => <ActionCounter key={index} {...i} />)}
                    </Flex>
                </Flex>
                <CardTextContent title={title} text={text} />
                <Flex sx={horizontalCardBoxButtonStyles}>
                    <SaveButton />
                    <StartCookButton />
                </Flex>
            </Stack>
        </CardBody>
    </Card>
);
