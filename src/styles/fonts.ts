import { css } from 'styled-components';

// Font files will be in public/fonts
// For now, we'll use a simplified approach with CSS @font-face
// The actual font files should be copied to public/fonts directory

const fonts = css`
  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/Calibre/Calibre-Regular.woff2') format('woff2'),
         url('/fonts/Calibre/Calibre-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/Calibre/Calibre-Medium.woff2') format('woff2'),
         url('/fonts/Calibre/Calibre-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/Calibre/Calibre-Semibold.woff2') format('woff2'),
         url('/fonts/Calibre/Calibre-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/Calibre/Calibre-RegularItalic.woff2') format('woff2'),
         url('/fonts/Calibre/Calibre-RegularItalic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
    font-display: auto;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/Calibre/Calibre-MediumItalic.woff2') format('woff2'),
         url('/fonts/Calibre/Calibre-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: auto;
  }

  @font-face {
    font-family: 'Calibre';
    src: url('/fonts/Calibre/Calibre-SemiboldItalic.woff2') format('woff2'),
         url('/fonts/Calibre/Calibre-SemiboldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: auto;
  }

  @font-face {
    font-family: 'SF Mono';
    src: url('/fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
         url('/fonts/SFMono/SFMono-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'SF Mono';
    src: url('/fonts/SFMono/SFMono-Semibold.woff2') format('woff2'),
         url('/fonts/SFMono/SFMono-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'SF Mono';
    src: url('/fonts/SFMono/SFMono-RegularItalic.woff2') format('woff2'),
         url('/fonts/SFMono/SFMono-RegularItalic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
    font-display: auto;
  }

  @font-face {
    font-family: 'SF Mono';
    src: url('/fonts/SFMono/SFMono-SemiboldItalic.woff2') format('woff2'),
         url('/fonts/SFMono/SFMono-SemiboldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: auto;
  }
`;

export default fonts;

