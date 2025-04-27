import { Box } from '@chakra-ui/icons';
import { Flex, Image, Text } from '@chakra-ui/react';

import { Step } from '~/types/recipeType';

type Props = {
    step: Step;
    isLastStep: boolean;
};
export const CookingStep = ({ step, isLastStep }: Props) => {
    const { stepNumber, description, image } = step;
    const stepBg = isLastStep ? 'lime.50' : 'blackAlpha.100';

    return (
        <Flex
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
            overflow='hidden'
            maxH={{ base: '128px', lg: '244px' }}
        >
            {image && (
                <Image
                    src={image}
                    objectFit='cover'
                    w={{ base: '158px', lg: '346px' }}
                    h={{ base: '128px', lg: '244px' }}
                    flexShrink={0}
                />
            )}
            <Box p={{ base: '8px', lg: '20px 24px' }}>
                <Box as='span' borderRadius='4px' bg={stepBg} p='2px 8px'>
                    {`Шаг ${stepNumber}`}
                </Box>
                <Text mt={{ base: 3, lg: 4 }} fontSize='sm' noOfLines={{ base: 4, lg: 9 }}>
                    {description}
                </Text>
            </Box>
        </Flex>
    );
};
