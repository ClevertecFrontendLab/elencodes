import { useMediaQuery } from '@chakra-ui/react';

export const useScreenSize = () => {
    const [isTablet] = useMediaQuery('(max-width: 1439px)');
    const [isMobile] = useMediaQuery('(max-width: 767px)');

    return { isTablet, isMobile };
};
