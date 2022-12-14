export const theme = Object.freeze({
  colors: {
    darkText: '#212121',
    lightText: '#6e6e6e',
    whiteText: '#fff',

    darkBG: '#ddd',
    lightBG: '#eee',
    whiteBG: '#fff',

    mainAccent: '#b32d19',
  },
  space: [0, '2px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],
  sizes: {},
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '20px',
    l: '22px',
    xl: '26px',
    xxl: '32px',
  },
  fontWeights: {
    normal: 400,
    semiBold: 600,
    bold: 700,
  },
  borders: {
    generic: '1px solid #ccc',
  },
  radii: {
    none: '0',
    generic: '6px',
    round: '50%',
  },
  shadows: {
    generic:
      '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)',
    text: '0px 0px 10px rgba(0, 0, 0, 1)',
  },
 
  transitions: {
    color: 'color 300ms ease',
    backgroundColor: 'background-color 300ms ease',
  },
});
