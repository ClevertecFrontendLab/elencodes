import { Box } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';

import { NutritionValueItem } from './NutritionValueItem/NutritionValueItem';

type NutritionValuePropsType = {
    nutritionValue: {
        calories: number;
        proteins: number;
        fats: number;
        carbohydrates: number;
    };
};

export const NutritionValue = ({ nutritionValue }: NutritionValuePropsType) => {
    const { calories, proteins, fats, carbohydrates } = nutritionValue;
    const nutritionValueArr = [
        {
            id: 1,
            title: 'калорийность',
            value: calories,
            measureUnit: 'ккал',
        },
        {
            id: 2,
            title: 'белки',
            value: proteins,
            measureUnit: 'грамм',
        },
        {
            id: 3,
            title: 'жиры',
            value: fats,
            measureUnit: 'грамм',
        },
        {
            id: 4,
            title: 'углеводы',
            value: carbohydrates,
            measureUnit: 'грамм',
        },
    ];

    return (
        <Box
            m='0 auto'
            maxW={{ base: '100%', lg: '578px', '2xl': '668px' }}
            mt={{ base: 6, xl: 10 }}
        >
            <Text color='blackAlpha.800' fontSize='sm' mb={{ base: 3, xl: 5 }}>
                * Калорийность на 1 порцию
            </Text>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 3, xl: 6 }}
                justifyContent='space-between'
            >
                {nutritionValueArr.map((item) => (
                    <NutritionValueItem key={item.id} {...item} />
                ))}
            </Flex>
        </Box>
    );
};
