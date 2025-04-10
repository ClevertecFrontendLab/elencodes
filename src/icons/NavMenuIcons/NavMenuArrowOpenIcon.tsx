import { ComponentWithAs, createIcon, IconProps } from '@chakra-ui/react';

const NavMenuArrowOpenIcon: ComponentWithAs<'svg', IconProps> = createIcon({
    displayName: 'NavMenuArrowOpenIcon',
    path: (
        <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M7.64614 4.64592C7.69259 4.59935 7.74776 4.56241 7.80851 4.5372C7.86926 4.512 7.93438 4.49902 8.00014 4.49902C8.06591 4.49902 8.13103 4.512 8.19178 4.5372C8.25252 4.56241 8.3077 4.59935 8.35414 4.64592L14.3541 10.6459C14.448 10.7398 14.5008 10.8671 14.5008 10.9999C14.5008 11.1327 14.448 11.26 14.3541 11.3539C14.2603 11.4478 14.1329 11.5005 14.0001 11.5005C13.8674 11.5005 13.74 11.4478 13.6461 11.3539L8.00014 5.70692L2.35414 11.3539C2.26026 11.4478 2.13292 11.5005 2.00014 11.5005C1.86737 11.5005 1.74003 11.4478 1.64614 11.3539C1.55226 11.26 1.49951 11.1327 1.49951 10.9999C1.49951 10.8671 1.55226 10.7398 1.64614 10.6459L7.64614 4.64592Z'
                fill='black'
            />
        </svg>
    ),
    defaultProps: {
        viewBox: '0 0 16 16',
        width: '16px',
        height: '16px',
    },
});

export default NavMenuArrowOpenIcon;
