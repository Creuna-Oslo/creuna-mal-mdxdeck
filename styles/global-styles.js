import { injectGlobal } from "styled-components";

injectGlobal` 
  @font-face {
     font-family: 'SourceSansPro';
     src: url('../assets/fonts/SourceSansPro-Regular.ttf');
     font-weight: "normal";
     font-style: "normal";
  } 
  
  @font-face {
    font-family: 'SourceSansProItalic';
    src: url('../assets/fonts/SourceSansPro-Italic.ttf');
    font-weight: 'normal';
    font-style: 'italic';
  }

  @font-face {
     font-family: 'SourceSansProBold';
     src: url('../assets/fonts/SourceSansPro-Bold.ttf');
     font-weight: 'bold';
     font-style: 'normal';
  }

  @font-face {
    font-family: 'SourceSansProBoldItalic';
    src: url('../assets/fonts/SourceSansPro-BoldItalic.ttf');
    font-weight: 'bold';
    font-style: 'italic';
  }

  @font-face {
    font-family: 'SourceSansProLight';
    src: url('../assets/fonts/SourceSansPro-Light.ttf');
    font-weight: 'lighter';
    font-style: 'normal';
  }

  @font-face {
    font-family: 'SourceSansProLightItalic';
    src: url('../assets/fonts/SourceSansPro-LightItalic.ttf');
    font-weight: 'lighter';
    font-style: 'italic';
  }


`;
