import { Box } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';

import { HorizontalCard } from '~/components/Cards/HorizontalCard/HorizontalCard';
import ButtonArrowRightIcon from '~/icons/ButtonIcons/ButtonArrowRightIcon';
import { MainSectionPropsType } from '~/types/MainSectionType';

import { mainSectionBoxStyles, mainSectionButtonStyles } from './MainSection.styles';

export const MainSection = ({
    mainSectionData,
    buttonTitle,
    sizeButton,
    displayButton,
    showRightIcon = false,
    onClick,
    dataTestId = undefined,
}: MainSectionPropsType) => (
    <Box as='section'>
        <Flex sx={mainSectionBoxStyles}>
            {mainSectionData.map((el) => (
                <HorizontalCard key={el.id} {...el} />
            ))}
        </Flex>
        <Button
            size={sizeButton}
            rightIcon={
                showRightIcon ? <ButtonArrowRightIcon boxSize='16px' color='black' /> : undefined
            }
            data-test-id={dataTestId}
            display={displayButton}
            onClick={onClick}
            sx={mainSectionButtonStyles}
        >
            {buttonTitle}
        </Button>
    </Box>
);
