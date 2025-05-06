import { IconButton } from '@chakra-ui/react';
import type { Swiper as SwiperClass } from 'swiper';

import { DATA_TEST_ID } from '~/constants/test-id';
import ArrowLeftIcon from '~/icons/swipeSectionIcons/arrowLeftIcon';
import ArrowRightIcon from '~/icons/swipeSectionIcons/arrowRightIcon';

type NavigationButtonsProps = {
    swiper: React.RefObject<SwiperClass | null>;
};

export const NavigationButtons = ({ swiper }: NavigationButtonsProps) => (
    <>
        <IconButton
            bg='black'
            aria-label='Arrow Left'
            w={{ base: '40px', '2xl': '48px' }}
            h={{ base: '40px', '2xl': '48px' }}
            _hover={{ bg: 'black' }}
            icon={<ArrowLeftIcon boxSize={{ base: '20px', '2xl': '24px' }} />}
            pos='absolute'
            left='-8px'
            top='148px'
            zIndex={9}
            onClick={() => swiper.current?.slidePrev()}
            display={{ base: 'none', xl: 'flex' }}
            data-test-id={DATA_TEST_ID.carouselBack}
        />
        <IconButton
            bg='black'
            aria-label='Arrow Right'
            w={{ base: '40px', '2xl': '48px' }}
            h={{ base: '40px', '2xl': '48px' }}
            _hover={{ bg: 'black' }}
            icon={<ArrowRightIcon boxSize={{ base: '20px', '2xl': '24px' }} />}
            pos='absolute'
            right='-8px'
            top='148px'
            zIndex={9}
            onClick={() => swiper.current?.slideNext()}
            display={{ base: 'none', xl: 'flex' }}
            data-test-id={DATA_TEST_ID.carouselForward}
        />
    </>
);
