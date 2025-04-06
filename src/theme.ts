import { extendTheme } from '@chakra-ui/react';

type ThemeApp = ReturnType<typeof extendTheme>;

const mainTheme: ThemeApp = extendTheme({
    fonts: {
        inter: `'Inter', sans-serif`,
        roboto: `'Roboto', sans-serif`,
    },
    fontSizes: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '30': '30px',
        '36': '36px',
        '48': '48px',
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
});

export default mainTheme;
