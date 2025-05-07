import { useMediaQuery } from '@chakra-ui/react';

export const useScreenSize = () => {
    const [isTablet] = useMediaQuery('(max-width: 768px)');
    const [isMobile] = useMediaQuery('(max-width: 360px)');

    return { isTablet, isMobile };
};
