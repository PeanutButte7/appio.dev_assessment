import { defaultTheme, generateHexAlphaVariants } from '@xstyled/system';
import { anolisXstyledTheme, pipeThemes } from 'anolis-ui';

export const customXstyledTheme = pipeThemes(defaultTheme, anolisXstyledTheme, {
    colors: {
        ...generateHexAlphaVariants({
            primary: '#00D8FF',
            secondary: '#01FF97',
        }),

        'react-blue': '#00D8FF',
        'azure-blue': '#29B5F6',
        'mid-blue': '#5F88EA',
        'dark-magenta': '#C730D3',
        magenta: '#FF00C7',
        violet: '#8D60E0',

        dark: '#080C18',
        darker: '#111624',
        copy: '#7986AF',
        white: '#FFFFFF',
        hero: '#141B31',
    },
    fontSizes: {
        base: '0.875rem',
    },
    fontWeights: {
        normal: '400',
    },
    fonts: {
        sans: 'Inter, sans-serif',
    },
});
