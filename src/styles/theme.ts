import { extendTheme } from '@chakra-ui/react';

type ThemeApp = ReturnType<typeof extendTheme>;

const breakpoints = {
    base: '0px',
    sm: '359px',
    md: '767px',
    lg: '1199px',
    xl: '1439px',
    xxl: '1919px',
};

const fonts = {
    inter: `'Inter', sans-serif`,
    roboto: `'Roboto', sans-serif`,
};

const fontSizes = {
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '18': '18px',
    '20': '20px',
    '24': '24px',
    '30': '30px',
    '36': '36px',
    '48': '48px',
};

const fontWeights = {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
};

const lineHeights = {
    normal: 'normal',
    base: '143%',
};

const colors = {
    lime: {
        50: '#FFFFD3',
        100: '#EAFFC7',
        150: '#D7FF94',
        300: '#C4FF61',
        600: '#2DB100',
        700: '#207E00',
        800: '#134B00',
    },
};

const mainTheme: ThemeApp = extendTheme({
    breakpoints,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    colors,
    styles: {
        global: {
            'html, body': {
                lineHeight: 'base',
                fontFamily: 'inter',
                fontSize: '14',
                fontWeight: 'normal',
                color: 'black',
            },
            ':root': {
                fontSynthesis: 'none',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
            },
            '*, *::before, *::after': {
                boxSizing: 'border-box',
                WebkitBoxSizing: 'border-box',
                MozOsxBoxSizing: 'border-box',
                padding: '0',
                margin: '0',
                border: '0',
            },
            html: {
                scrollBehavior: 'smooth',
            },
            a: {
                backgroundColor: 'transparent',
                textDecoration: 'none',
                _hover: {
                    textDecoration: 'none',
                },
            },
            'nav, main, footer, header, aside': {
                display: 'block',
            },
            'section, article': {
                mb: { base: '2rem', lg: '2.5rem' },
            },
        },
    },
    components: {
        Switch: {
            baseStyle: {
                track: {
                    bg: 'blackAlpha.300',
                    _checked: {
                        bg: 'lime.700',
                    },
                },
            },
        },
    },
});

export default mainTheme;
