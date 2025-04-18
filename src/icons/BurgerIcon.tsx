import { ComponentWithAs, createIcon, IconProps } from '@chakra-ui/react';

const BurgerIcon: ComponentWithAs<'svg', IconProps> = createIcon({
    displayName: 'BurgerIcon',
    path: (
        <svg
            width='16'
            height='12'
            viewBox='0 0 16 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M0 0H16V2H0V0ZM0 5H16V7H0V5ZM0 10H16V12H0V10Z' fill='black' />
        </svg>
    ),
    defaultProps: {
        viewBox: '0 0 16 12',
        width: '16px',
        height: '12px',
    },
});

export default BurgerIcon;
