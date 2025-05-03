import { Accordion } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { NavMenuFooter } from '~/components/NavMenuFooter/NavMenuFooter';
import { NavMenuItem } from '~/components/NavMenuItem/NavMenuItem';
import { DATA_TEST_ID } from '~/constants/test-id';
import { selectCategories } from '~/model/selectors';
import { useAppSelector } from '~/store/hooks';

type Props = {
    isBurgerMenu?: boolean;
    children?: ReactNode;
    closeBurgerMenu?: () => void;
};

export const NavMenu = ({ isBurgerMenu = false, children, closeBurgerMenu }: Props) => {
    const categories = useAppSelector(selectCategories);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const location = useLocation();

    // Автоматическое закрытие при переходе на главную
    useEffect(() => {
        if (location.pathname === '/') {
            setExpandedIndex(null);
        }
    }, [location.pathname]);

    return (
        <Flex
            data-test-id={DATA_TEST_ID.nav}
            direction='column'
            pos='fixed'
            left={isBurgerMenu ? 'auto' : 0}
            right={isBurgerMenu ? 2 : 'auto'}
            bottom={isBurgerMenu ? '84px' : 0}
            top={{ base: '64px', xl: '80px' }}
            w={isBurgerMenu ? '344px' : '256px'}
            bg='white'
            zIndex={20}
            borderRadius={isBurgerMenu ? '0 0 12px 12px' : 0}
            overflow='hidden'
        >
            {children && <>{children}</>}
            <Accordion
                index={expandedIndex}
                onChange={(index) => setExpandedIndex(index as number)}
                allowToggle
                sx={{
                    '&::-webkit-scrollbar': {
                        backgroundColor: '#0000000A',
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#00000028',
                        borderRadius: '8px',
                    },
                    '&::-webkit-scrollbar-button': {
                        display: 'none',
                    },
                }}
                m={isBurgerMenu ? '12px 16px 10px 10px' : '34px 16px 10px 10px'}
                flexGrow={1}
                overflowY='auto'
            >
                {categories.map((el) => (
                    <NavMenuItem {...el} key={el.id} closeBurgerMenu={closeBurgerMenu} />
                ))}
            </Accordion>
            <NavMenuFooter />
        </Flex>
    );
};
