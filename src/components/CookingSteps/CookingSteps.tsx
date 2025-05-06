import { Flex, Heading } from '@chakra-ui/react';

import { Step } from '~/types/recipeType';

import { CookingStep } from './CookingStep/CookingStep';

type CookingStepsPropsType = {
    steps: Step[];
};

export const CookingSteps = ({ steps }: CookingStepsPropsType) => (
    <Flex direction='column' gap={5}>
        <Heading fontSize={{ base: '2xl', lg: '5xl' }}>Шаги приготовления</Heading>
        {steps.map((s, i) => {
            const isLastStep = i === steps.length - 1;
            return <CookingStep key={s.stepNumber} step={s} isLastStep={isLastStep} />;
        })}
    </Flex>
);
