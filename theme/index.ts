import {
    buttonTheme,
    createTheme,
    tagTheme,
    textLinkTheme,
    typographyTheme,
} from 'anolis-ui';

export const theme = createTheme({
    ...textLinkTheme({
        baseStyle: {
            color: {
                _: 'primary',
                hover: 'secondary',
            },
            backgroundColor: {
                _: 'primary-a25',
                hover: 'secondary-a25',
            },
            textDecoration: 'underline',
        },
    }),
    ...tagTheme({
        baseStyle: {
            borderRadius: 'none',
            border: 'none',
            px: '1rem',
            py: '0.25rem',
        },
        variants: {
            solid: {
                color: 'darker',
                backgroundColor: 'primary',
            },
        },
    }),
    ...buttonTheme({
        baseStyle: {
            borderRadius: 'none',
            fontWeight: '600',
        },
        variants: {
            solid: {
                color: 'dark',
                backgroundColor: {
                    _: 'primary',
                    hover: 'magenta',
                },
            },
        },
    }),
    ...typographyTheme({
        baseStyle: {
            _h1: {
                color: 'white',
                fontSize: '6rem',
                fontWeight: '300',
                lineHeight: '7.25rem',
            },
            _h2: {
                color: 'white',
                fontSize: '3rem',
                lineHeight: '3.625rem',
            },
            _h3: {
                color: 'white',
                fontSize: '2.5rem',
                lineHeight: '3rem',
            },
            _h4: {
                color: 'white',
                fontSize: '2rem',
                fontWeight: '300',
                lineHeight: '2.3rem',
            },
            _h5: {
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: '600',
                lineHeight: '1.8rem',
            },
            _h6: {
                color: 'copy',
                fontSize: '1.25rem',
                lineHeight: '1.75rem',
            },
            _p: {
                color: 'copy',
                fontSize: '1rem',
                lineHeight: '1.5rem',
            },
        },
    }),
});
