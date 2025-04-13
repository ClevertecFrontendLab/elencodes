import { Spacer } from '@chakra-ui/icons';
import { Button, HStack } from '@chakra-ui/react';

import { SectionTitle } from '~/components/SectionTitle/SectionTitle';
import ButtonArrowRightIcon from '~/icons/ButtonIcons/ButtonArrowRightIcon';
import { SectionButtonPropsType } from '~/types/SectionButtonType';

import { sectionButtonStyles, titleSectionBoxStyles } from './TitleSectionWithButton.styles';

export const TitleSectionWithButton = ({ onClick }: SectionButtonPropsType) => (
    <HStack sx={titleSectionBoxStyles}>
        <SectionTitle title='Самое сочное ' />
        <Spacer />
        <Button
            rightIcon={<ButtonArrowRightIcon boxSize='16px' color='black' />}
            data-test-id='juiciest-link'
            onClick={onClick}
            sx={sectionButtonStyles}
        >
            Вся подборка
        </Button>
    </HStack>
);
