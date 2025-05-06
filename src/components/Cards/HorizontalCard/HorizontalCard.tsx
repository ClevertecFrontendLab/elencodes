import { Box, CardBody } from '@chakra-ui/icons';
import { IconProps } from '@chakra-ui/icons';
import { Card, Flex, Image, Stack } from '@chakra-ui/react';
import { ComponentWithAs } from '@chakra-ui/react';

import { ActionCounter } from '~/components/ActionCounter/ActionCounter';
import { SaveButton } from '~/components/Buttons/SaveButton/SaveButton';
import { StartCookButton } from '~/components/Buttons/StartCookButton/StartCookButton';
import { CardTextContent } from '~/components/CardTextContent/CardTextContent';
import { MenuItemTag } from '~/components/MenuItemTag/MenuItemTag';
import { ActionCounterPropsType } from '~/types/actionCounterType';

import {
    actionCounterBox,
    horizontalCardBodyStyles,
    horizontalCardBoxButtonStyles,
    horizontalCardBoxImgStyles,
    horizontalCardHeaderStyles,
    horizontalCardImgStyles,
    horizontalCardStyles,
} from './HorizontalCard.styles';

type HorizontalCardPropsType = {
    img: string;
    altImg: string;
    title: string;
    description: string;
    iconCounters: ActionCounterPropsType[];
    tagIcon: ComponentWithAs<'svg', IconProps>;
    tagTitle: string;
    bgColorTag: string;
};

export const HorizontalCard = ({
    img,
    altImg,
    title,
    description,
    iconCounters,
    tagTitle,
    tagIcon,
    bgColorTag,
}: HorizontalCardPropsType) => (
    <Card sx={horizontalCardStyles}>
        <Box sx={horizontalCardBoxImgStyles}>
            <Image src={img} alt={altImg} sx={horizontalCardImgStyles} />
        </Box>
        <CardBody sx={horizontalCardBodyStyles}>
            <Stack spacing={{ base: 3, lg: 7, xxl: 8 }}>
                <Flex sx={horizontalCardHeaderStyles}>
                    <MenuItemTag icon={tagIcon} title={tagTitle} bgColor={bgColorTag} />
                    <Flex sx={actionCounterBox}>
                        {!!iconCounters.length &&
                            iconCounters.map((i, index) => <ActionCounter key={index} {...i} />)}
                    </Flex>
                </Flex>
                <CardTextContent title={title} description={description} />
                <Flex sx={horizontalCardBoxButtonStyles}>
                    <SaveButton />
                    <StartCookButton />
                </Flex>
            </Stack>
        </CardBody>
    </Card>
);
