(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,78281,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});function a(e){let t={};for(let[n,r]of e.entries()){let e=t[n];void 0===e?t[n]=r:Array.isArray(e)?e.push(r):t[n]=[e,r]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(n,i(e));else t.set(n,i(r));return t}function l(e,...t){for(let n of t){for(let t of n.keys())e.delete(t);for(let[t,r]of n.entries())e.append(t,r)}return e}},16033,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=e.r(44066)._(e.r(78281)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:n}=e,r=e.protocol||"",o=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||i.test(r))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${r}${c}${o}${u}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},89134,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return v},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return y},NormalizeError:function(){return x},PageNotFoundError:function(){return b},SP:function(){return g},ST:function(){return m},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return f},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return d},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return k}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&d(n))return r;if(!r)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return r}let g="undefined"!=typeof performance,m=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class v extends Error{}class x extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function k(e){return JSON.stringify({message:e.message,stack:e.stack})}},72489,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return a}});let r=e.r(89134),o=e.r(65421);function a(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},88464,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},27112,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return v},useLinkStatus:function(){return b}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=e.r(44066),i=e.r(78042),s=a._(e.r(45456)),l=e.r(16033),c=e.r(54080),u=e.r(94400),f=e.r(89134),d=e.r(29401);e.r(87035);let p=e.r(52055),h=e.r(72489),g=e.r(22204);function m(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function v(t){var n;let r,o,a,[l,v]=(0,s.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,s.useRef)(null),{href:y,as:w,children:k,prefetch:j=null,passHref:S,replace:C,shallow:M,scroll:z,onClick:$,onMouseEnter:E,onTouchStart:I,legacyBehavior:O=!1,onNavigate:P,ref:T,unstable_dynamicOnHover:L,..._}=t;r=k,O&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let N=s.default.useContext(c.AppRouterContext),F=!1!==j,R=!1!==j?null===(n=j)||"auto"===n?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,{href:D,as:B}=s.default.useMemo(()=>{let e=m(y);return{href:e,as:w?m(w):e}},[y,w]);if(O){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(r)}let A=O?o&&"object"==typeof o&&o.ref:T,H=s.default.useCallback(e=>(null!==N&&(b.current=(0,p.mountLinkInstance)(e,D,N,R,F,v)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[F,D,N,R,v]),U={ref:(0,u.useMergedRef)(H,A),onClick(t){O||"function"!=typeof $||$(t),O&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!N||t.defaultPrevented||function(t,n,r,o,a,i,l){if("undefined"!=typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(n)){a&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(21229);s.default.startTransition(()=>{f(r||n,a?"replace":"push",i??!0,o.current)})}}(t,D,B,b,C,z,P)},onMouseEnter(e){O||"function"!=typeof E||E(e),O&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),N&&F&&(0,p.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){O||"function"!=typeof I||I(e),O&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),N&&F&&(0,p.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,f.isAbsoluteUrl)(B)?U.href=B:O&&!S&&("a"!==o.type||"href"in o.props)||(U.href=(0,d.addBasePath)(B)),a=O?s.default.cloneElement(o,U):(0,i.jsx)("a",{..._,...U,children:r}),(0,i.jsx)(x.Provider,{value:l,children:a})}e.r(88464);let x=(0,s.createContext)(p.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(x);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},45227,(e,t,n)=>{t.exports=e.r(8077)},2567,e=>{"use strict";e.s(["default",()=>eY],2567);var t,n,r=e.i(78042),o=e.i(45456),a=e.i(5420);let i=a.css`
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
`,s=a.css`
  :root {
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`,l=a.css`
  /* Fade up */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  /* Fade down */
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--easing);
  }
`,c="#112340",u="#1d2d50",f="#a2aabc",d=a.css`
  /**
  * Add back the container background-color, border-radius, padding, margin
  * and overflow that we removed from <pre>.
  */
  .gatsby-highlight {
    background-color: ${c};
    color: ${f};
    border-radius: var(--border-radius);
    margin: 2em 0;
    padding: 1.25em;
    overflow: auto;
    position: relative;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .gatsby-highlight code[class*='language-'],
  .gatsby-highlight pre[class*='language-'] {
    height: auto !important;
    font-size: var(--fz-sm);
    line-height: 1.5;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 2;
    hyphens: none;
  }

  /**
  * Remove the default PrismJS theme background-color, border-radius, margin,
  * padding and overflow.
  * 1. Make the element just wide enough to fit its content.
  * 2. Always fill the visible space in .gatsby-highlight.
  * 3. Adjust the position of the line numbers
  */
  .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
    padding-top: 2em;
  }

  /* File names */
  .gatsby-code-title {
    padding: 1em 1.5em;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    background-color: ${c};
    color: ${f};
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    border-bottom: 1px solid ${u};

    & + .gatsby-highlight {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  /* Line highlighting */
  .gatsby-highlight-code-line {
    display: block;
    background-color: ${u};
    border-left: 2px solid var(--green);
    padding-left: calc(1em + 2px);
    padding-right: 1em;
    margin-right: -1.35em;
    margin-left: -1.35em;
  }

  /* Language badges */
  .gatsby-highlight pre[class*='language-']::before {
    background: var(--lightest-navy);
    color: var(--white);
    font-size: var(--fz-xxs);
    font-family: var(--font-mono);
    line-height: 1.5;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 0 0 3px 3px;
    position: absolute;
    top: 0;
    left: 1.25rem;
    padding: 0.25rem 0.5rem;
  }
  .gatsby-highlight pre[class='language-javascript']::before {
    content: 'js';
  }
  .gatsby-highlight pre[class='language-js']::before {
    content: 'js';
  }
  .gatsby-highlight pre[class='language-jsx']::before {
    content: 'jsx';
  }
  .gatsby-highlight pre[class='language-graphql']::before {
    content: 'GraphQL';
  }
  .gatsby-highlight pre[class='language-html']::before {
    content: 'html';
  }
  .gatsby-highlight pre[class='language-css']::before {
    content: 'css';
  }
  .gatsby-highlight pre[class='language-mdx']::before {
    content: 'mdx';
  }
  .gatsby-highlight pre[class='language-shell']::before {
    content: 'shell';
  }
  .gatsby-highlight pre[class='language-sh']::before {
    content: 'sh';
  }
  .gatsby-highlight pre[class='language-bash']::before {
    content: 'bash';
  }
  .gatsby-highlight pre[class='language-yaml']::before {
    content: 'yaml';
  }
  .gatsby-highlight pre[class='language-markdown']::before {
    content: 'md';
  }
  .gatsby-highlight pre[class='language-json']::before,
  .gatsby-highlight pre[class='language-json5']::before {
    content: 'json';
  }
  .gatsby-highlight pre[class='language-diff']::before {
    content: 'diff';
  }
  .gatsby-highlight pre[class='language-text']::before {
    content: 'text';
  }
  .gatsby-highlight pre[class='language-flow']::before {
    content: 'flow';
  }

  /* Prism Styles */
  .token {
    display: inline;
  }
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${"#8695b799"};
  }
  .token.punctuation {
    color: ${f};
  }
  .token.namespace,
  .token.deleted {
    color: ${"#ef6b73"};
  }
  .token.function-name,
  .token.function,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: ${"#ffd580"};
  }
  .token.attr-name,
  .token.operator,
  .token.rule {
    color: ${"#ffae57"};
  }
  .token.keyword,
  .token.boolean,
  .token.number,
  .token.property {
    color: ${"#c3a6ff"};
  }
  .token.tag,
  .token.selector,
  .token.important,
  .token.atrule,
  .token.builtin,
  .token.entity,
  .token.url {
    color: ${"#5ccfe6"};
  }
  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable,
  .token.inserted {
    color: ${"#bae67e"};
  }
  .token.important,
  .token.bold {
    font-weight: 600;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .namespace {
    opacity: 0.7;
  }
`,p=a.createGlobalStyle`
  ${i}
  ${s}

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
  }

  /* Provide basic, default focus styles.*/
  :focus {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
  }

  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }

  /*
    Optionally: If :focus-visible is supported on this
    platform, provide enhanced focus styles for keyboard
    focus.
  */
  :focus-visible {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--navy);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--navy);
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--navy);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }

    /* Ensure sections are properly contained */
    section {
      width: 100%;
      box-sizing: border-box;
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 768px) {
      padding: 80px 0;
      min-height: 400px;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
      min-height: 300px;
    }

    /* Hero section should be full height */
    &#hero {
      min-height: 100vh;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }

  img,
  svg {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--green);
    }

    &.inline-link {
      ${({theme:e})=>e.mixins.inlineLink};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      ${({theme:e})=>e.mixins.inlineLink};
    }

    & > code {
      background-color: var(--light-navy);
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--green);
        }
      }
    }
  }

  blockquote {
    border-left-color: var(--green);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: var(--lightest-navy);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .skip-to-content {
    ${({theme:e})=>e.mixins.button};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:focus,
    &:active {
      background-color: var(--green);
      color: var(--navy);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
    }
  }

  #logo {
    color: var(--green);
  }

  .overline {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {
    color: var(--green);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      ${({theme:e})=>e.mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: var(--green);

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      ${({theme:e})=>e.mixins.inlineLink};
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  ${l};

  ${d};
`,h={bp:{mobileS:"max-width: 330px",mobileM:"max-width: 400px",mobileL:"max-width: 480px",tabletS:"max-width: 600px",tabletL:"max-width: 768px",desktopXS:"max-width: 900px",desktopS:"max-width: 1080px",desktopM:"max-width: 1200px",desktopL:"max-width: 1400px"},mixins:{flexCenter:a.css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,flexBetween:a.css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,link:a.css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: var(--green);
      outline: 0;
    }
  `,inlineLink:a.css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--green);
    &:hover,
    &:focus,
    &:active {
      color: var(--green);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--green) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--green);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,button:a.css`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 1.25rem 1.75rem;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,smallButton:a.css`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,bigButton:a.css`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,boxShadow:a.css`
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
  `,fancyList:a.css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  `,resetList:a.css`
    list-style: none;
    padding: 0;
    margin: 0;
  `}};var g=e.i(27112),m=e.i(45227),v=e.i(4442),x=e.i(3696),b=e.i(80926),y=e.i(4829);e.i(64485);var w=e.i(30718),w=w,k=e.i(90068),j=e.i(54753),j=j;let S=a.default.div.withConfig({displayName:"menu__StyledMenu",componentId:"sc-f1e7dd52-0"})`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,C=a.default.button.withConfig({displayName:"menu__StyledHamburgerButton",componentId:"sc-f1e7dd52-1"})`
  display: none;

  @media (max-width: 768px) {
    ${({theme:e})=>e.mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--green);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${e=>e.menuOpen?"0.12s":"0s"};
    transform: rotate(${e=>e.menuOpen?"225deg":"0deg"});
    transition-timing-function: cubic-bezier(
      ${e=>e.menuOpen?"0.215, 0.61, 0.355, 1":"0.55, 0.055, 0.675, 0.19"}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--green);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${e=>e.menuOpen?"100%":"120%"};
      top: ${e=>e.menuOpen?"0":"-10px"};
      opacity: ${e=>+!e.menuOpen};
      transition: ${({menuOpen:e})=>e?"var(--ham-before-active)":"var(--ham-before)"};
    }
    &:after {
      width: ${e=>e.menuOpen?"100%":"80%"};
      bottom: ${e=>e.menuOpen?"0":"-10px"};
      transform: rotate(${e=>e.menuOpen?"-90deg":"0"});
      transition: ${({menuOpen:e})=>e?"var(--ham-after-active)":"var(--ham-after)"};
    }
  }
`,M=a.default.aside.withConfig({displayName:"menu__StyledSidebar",componentId:"sc-f1e7dd52-2"})`
  display: none;

  @media (max-width: 768px) {
    ${({theme:e})=>e.mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--light-navy);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: translateX(${e=>100*!e.menuOpen}vw);
    visibility: ${e=>e.menuOpen?"visible":"hidden"};
    transition: var(--transition);
  }

  nav {
    ${({theme:e})=>e.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: var(--green);
        font-size: var(--fz-sm);
      }
    }

    a {
      ${({theme:e})=>e.mixins.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }

  .resume-link {
    ${({theme:e})=>e.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`,z=()=>{let[e,t]=(0,o.useState)(!1),n=(0,o.useRef)(null),a=(0,o.useRef)(null),i=(0,o.useRef)(null),s=[],l=null,c=null,u=e=>{switch(e.key){case y.KEY_CODES.ESCAPE:case y.KEY_CODES.ESCAPE_IE11:t(!1);break;case y.KEY_CODES.TAB:if(s&&1===s.length){e.preventDefault();break}e.shiftKey?document.activeElement===l&&(e.preventDefault(),c?.focus()):document.activeElement===c&&(e.preventDefault(),l?.focus())}},f=e=>{e.currentTarget.innerWidth>768&&t(!1)};return(0,o.useEffect)(()=>(document.addEventListener("keydown",u),window.addEventListener("resize",f),n.current&&a.current&&(l=(s=[n.current,...Array.from(a.current.querySelectorAll("a"))])[0],c=s[s.length-1]),()=>{document.removeEventListener("keydown",u),window.removeEventListener("resize",f)}),[]),(0,o.useEffect)(()=>{e?document.body.classList.add("blur"):document.body.classList.remove("blur")},[e]),(0,j.default)(i,()=>t(!1)),(0,r.jsx)(S,{children:(0,r.jsxs)("div",{ref:i,children:[(0,r.jsx)(C,{onClick:()=>t(!e),menuOpen:e,ref:n,"aria-label":"Menu",children:(0,r.jsx)("div",{className:"ham-box",children:(0,r.jsx)("div",{className:"ham-box-inner"})})}),(0,r.jsx)(M,{menuOpen:e,"aria-hidden":!e,tabIndex:e?1:-1,children:(0,r.jsxs)("nav",{ref:a,children:[b.config.navLinks&&(0,r.jsx)("ol",{children:b.config.navLinks.map(({url:e,name:n},o)=>(0,r.jsx)("li",{children:(0,r.jsx)(g.default,{href:e,onClick:()=>t(!1),children:n})},o))}),(0,r.jsx)("a",{href:"/resume.pdf",className:"resume-link",children:"Resume"})]})})]})})};e.i(56669);var $=e.i(54223),$=$;let E=a.default.header.withConfig({displayName:"nav__StyledHeader",componentId:"sc-3c1b47db-0"})`
  ${({theme:e})=>e.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${e=>"up"===e.scrollDirection&&!e.scrolledToTop&&a.css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${e=>"down"===e.scrollDirection&&!e.scrolledToTop&&a.css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`,I=a.default.nav.withConfig({displayName:"nav__StyledNav",componentId:"sc-3c1b47db-1"})`
  ${({theme:e})=>e.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({theme:e})=>e.mixins.flexCenter};

    a {
      color: var(--green);
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: var(--green-tint);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`,O=a.default.div.withConfig({displayName:"nav__StyledLinks",componentId:"sc-3c1b47db-2"})`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({theme:e})=>e.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({theme:e})=>e.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`,P=({isHome:e=!1})=>{let[t,n]=(0,o.useState)(!1),a=(0,w.default)({initialDirection:"down"}),[i,s]=(0,o.useState)(!0),l=(0,k.usePrefersReducedMotion)();(0,m.usePathname)();let c=o.default.useRef(null),u=o.default.useRef(null),f=o.default.useRef(null),d=()=>{s(window.pageYOffset<50)};(0,o.useEffect)(()=>{if(n(!0),!l)return window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}},[l]);let p=e?y.loaderDelay:0,h=e?"fade":"",j=e?"fadedown":"",S=(0,r.jsx)("div",{className:"logo",tabIndex:-1,ref:c,children:(0,r.jsx)(g.default,{href:"/","aria-label":"home",children:(0,r.jsx)($.default,{})})}),C=(0,r.jsx)("a",{className:"resume-button",href:"/resume.pdf",target:"_blank",rel:"noopener noreferrer",children:"Resume"});return(0,r.jsx)(E,{scrollDirection:a,scrolledToTop:i,children:(0,r.jsx)(I,{children:l?(0,r.jsxs)(r.Fragment,{children:[S,(0,r.jsxs)(O,{children:[(0,r.jsx)("ol",{children:b.config.navLinks&&b.config.navLinks.map(({url:e,name:t},n)=>(0,r.jsx)("li",{children:(0,r.jsx)(g.default,{href:e,children:t})},n))}),(0,r.jsx)("div",{children:C})]}),(0,r.jsx)(z,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.TransitionGroup,{component:null,children:(0,r.jsx)(v.CSSTransition,{nodeRef:c,classNames:h,timeout:p,appear:t&&e,in:t||!e,children:(0,r.jsx)(r.Fragment,{children:S})})}),(0,r.jsxs)(O,{children:[(0,r.jsx)("ol",{children:(0,r.jsx)(x.TransitionGroup,{component:null,children:b.config.navLinks&&b.config.navLinks.map(({url:n,name:a},i)=>{let s=o.default.createRef();return(0,r.jsx)(v.CSSTransition,{nodeRef:s,classNames:j,timeout:p,appear:t&&e,in:t||!e,children:(0,r.jsx)("li",{ref:s,style:t&&e?{transitionDelay:`${100*i}ms`}:void 0,children:(0,r.jsx)(g.default,{href:n,children:a})})},i)})})}),(0,r.jsx)(x.TransitionGroup,{component:null,children:(0,r.jsx)(v.CSSTransition,{nodeRef:u,classNames:j,timeout:p,appear:t&&e,in:t||!e,children:(0,r.jsx)("div",{ref:u,style:t&&e?{transitionDelay:`${100*(b.config.navLinks?.length||0)}ms`}:void 0,children:C})})})]}),(0,r.jsx)(x.TransitionGroup,{component:null,children:(0,r.jsx)(v.CSSTransition,{nodeRef:f,classNames:h,timeout:p,appear:t&&e,in:t||!e,children:(0,r.jsx)("div",{ref:f,children:(0,r.jsx)(z,{})})})})]})})})};e.i(96241);var T=e.i(94661);let L=a.default.footer.withConfig({displayName:"footer__StyledFooter",componentId:"sc-13f1fada-0"})`
  ${({theme:e})=>e.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`,_=a.default.div.withConfig({displayName:"footer__StyledSocialLinks",componentId:"sc-13f1fada-1"})`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({theme:e})=>e.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`,N=a.default.div.withConfig({displayName:"footer__StyledCredit",componentId:"sc-13f1fada-2"})`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`,F=()=>{let[e,t]=(0,o.useState)({stars:null,forks:null});return(0,o.useEffect)(()=>{fetch("https://api.github.com/repos/sawradip/v4").then(e=>e.json()).then(e=>{let{stargazers_count:n,forks_count:r}=e;t({stars:n,forks:r})}).catch(e=>console.error(e))},[]),(0,r.jsxs)(L,{children:[(0,r.jsx)(_,{children:(0,r.jsx)("ul",{children:b.config.socialMedia&&b.config.socialMedia.map(({name:e,url:t},n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:t,"aria-label":e,children:(0,r.jsx)(T.Icon,{name:e})})},n))})}),(0,r.jsx)(N,{tabIndex:-1,children:(0,r.jsxs)("a",{href:"https://github.com/sawradip/v4",children:[(0,r.jsx)("div",{children:" Built by Sawradip Saha ( Designed by Brittany Chiang )"}),e.stars&&e.forks&&(0,r.jsxs)("div",{className:"github-stats",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)(T.Icon,{name:"Star"}),(0,r.jsx)("span",{children:e.stars.toLocaleString()})]}),(0,r.jsxs)("span",{children:[(0,r.jsx)(T.Icon,{name:"Fork"}),(0,r.jsx)("span",{children:e.forks.toLocaleString()})]})]})]})})]})},R=a.default.div.withConfig({displayName:"side__StyledSideElement",componentId:"sc-abef2831-0"})`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${e=>"left"===e.orientation?"40px":"auto"};
  right: ${e=>"left"===e.orientation?"auto":"40px"};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${e=>"left"===e.orientation?"20px":"auto"};
    right: ${e=>"left"===e.orientation?"auto":"20px"};
  }

  @media (max-width: 768px) {
    display: none;
  }
`,D=({children:e,isHome:t=!1,orientation:n})=>{let[a,i]=(0,o.useState)(!1),s=(0,k.usePrefersReducedMotion)(),l=o.default.useRef(null);return(0,o.useEffect)(()=>{if(i(!0),!t||s)return},[t,s]),(0,r.jsx)(R,{orientation:n,children:s?(0,r.jsx)(r.Fragment,{children:e}):(0,r.jsx)(x.TransitionGroup,{component:null,children:(0,r.jsx)(v.CSSTransition,{nodeRef:l,classNames:t?"fade":"",timeout:t?y.loaderDelay:0,appear:a&&t,in:a||!t,children:(0,r.jsx)("div",{ref:l,children:e})})})})},B=a.default.ul.withConfig({displayName:"social__StyledSocialList",componentId:"sc-d9539dea-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`,A=({isHome:e=!1})=>(0,r.jsx)(D,{isHome:e,orientation:"left",children:(0,r.jsx)(B,{children:b.config.socialMedia&&b.config.socialMedia.map(({url:e,name:t},n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:e,"aria-label":t,target:"_blank",rel:"noreferrer",children:(0,r.jsx)(T.Icon,{name:t})})},n))})}),H=a.default.div.withConfig({displayName:"email__StyledLinkWrapper",componentId:"sc-15010866-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`,U=({isHome:e=!1})=>(0,r.jsx)(D,{isHome:e,orientation:"right",children:(0,r.jsx)(H,{children:(0,r.jsx)("a",{href:`mailto:${b.config.email}`,children:b.config.email})})});var Y={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},q={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},K=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],G={},Q={};function W(e,t,n){return Math.min(Math.max(e,t),n)}function V(e,t){return e.indexOf(t)>-1}function X(e,t){return e.apply(null,t)}var Z={arr:function(e){return Array.isArray(e)},obj:function(e){return V(Object.prototype.toString.call(e),"Object")},pth:function(e){return Z.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||Z.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return Z.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return Z.hex(e)||Z.rgb(e)||Z.hsl(e)},key:function(e){return!Y.hasOwnProperty(e)&&!q.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function J(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(e){return parseFloat(e)}):[]}function ee(e,t){var n=J(e),r=W(Z.und(n[0])?1:n[0],.1,100),o=W(Z.und(n[1])?100:n[1],.1,100),a=W(Z.und(n[2])?10:n[2],.1,100),i=W(Z.und(n[3])?0:n[3],.1,100),s=Math.sqrt(o/r),l=a/(2*Math.sqrt(o*r)),c=l<1?s*Math.sqrt(1-l*l):0,u=l<1?(l*s+-i)/c:-i+s;function f(e){var n=t?t*e/1e3:e;return(n=l<1?Math.exp(-n*l*s)*(+Math.cos(c*n)+u*Math.sin(c*n)):(1+u*n)*Math.exp(-n*s),0===e||1===e)?e:1-n}return t?f:function(){var t=Q[e];if(t)return t;for(var n=1/6,r=0,o=0;;)if(1===f(r+=n)){if(++o>=16)break}else o=0;var a=r*n*1e3;return Q[e]=a,a}}function et(e){return void 0===e&&(e=10),function(t){return Math.ceil(W(t,1e-6,1)*e)*(1/e)}}var en=function(){function e(e,t,n){return(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e}function t(e,t,n){return 3*(1-3*n+3*t)*e*e+2*(3*n-6*t)*e+3*t}return function(n,r,o,a){if(0<=n&&n<=1&&0<=o&&o<=1){var i=new Float32Array(11);if(n!==r||o!==a)for(var s=0;s<11;++s)i[s]=e(.1*s,n,o);return function(s){return n===r&&o===a||0===s||1===s?s:e(function(r){for(var a=0,s=1;10!==s&&i[s]<=r;++s)a+=.1;var l=a+(r-i[--s])/(i[s+1]-i[s])*.1,c=t(l,n,o);if(c>=.001){for(var u=l,f=0;f<4;++f){var d=t(u,n,o);if(0===d)break;var p=e(u,n,o)-r;u-=p/d}return u}return 0===c?l:function(t,n,r,o,a){var i,s,l=0;do(i=e(s=n+(r-n)/2,o,a)-t)>0?r=s:n=s;while(Math.abs(i)>1e-7&&++l<10)return s}(r,a,a+.1,n,o)}(s),r,a)}}}}(),er=(t={linear:function(){return function(e){return e}}},n={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Expo:function(){return function(e){return e?Math.pow(2,10*e-10):0}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=W(e,1,10),r=W(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin(2*Math.PI*(e-1-r/(2*Math.PI)*Math.asin(1/n))/r)}}},["Quad","Cubic","Quart","Quint"].forEach(function(e,t){n[e]=function(){return function(e){return Math.pow(e,t+2)}}}),Object.keys(n).forEach(function(e){var r=n[e];t["easeIn"+e]=r,t["easeOut"+e]=function(e,t){return function(n){return 1-r(e,t)(1-n)}},t["easeInOut"+e]=function(e,t){return function(n){return n<.5?r(e,t)(2*n)/2:1-r(e,t)(-2*n+2)/2}},t["easeOutIn"+e]=function(e,t){return function(n){return n<.5?(1-r(e,t)(1-2*n))/2:(r(e,t)(2*n-1)+1)/2}}}),t);function eo(e,t){if(Z.fnc(e))return e;var n=e.split("(")[0],r=er[n],o=J(e);switch(n){case"spring":return ee(e,t);case"cubicBezier":return X(en,o);case"steps":return X(et,o);default:return X(r,o)}}function ea(e){try{return document.querySelectorAll(e)}catch(e){return}}function ei(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,o=[],a=0;a<n;a++)if(a in e){var i=e[a];t.call(r,i,a,e)&&o.push(i)}return o}function es(e){return e.reduce(function(e,t){return e.concat(Z.arr(t)?es(t):t)},[])}function el(e){return Z.arr(e)?e:(Z.str(e)&&(e=ea(e)||e),e instanceof NodeList||e instanceof HTMLCollection)?[].slice.call(e):[e]}function ec(e,t){return e.some(function(e){return e===t})}function eu(e){var t={};for(var n in e)t[n]=e[n];return t}function ef(e,t){var n=eu(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function ed(e,t){var n=eu(e);for(var r in t)n[r]=Z.und(e[r])?t[r]:e[r];return n}function ep(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function eh(e,t){return Z.fnc(e)?e(t.target,t.id,t.total):e}function eg(e,t){return e.getAttribute(t)}function em(e,t,n){if(ec([n,"deg","rad","turn"],ep(t)))return t;var r=G[t+n];if(!Z.und(r))return r;var o=document.createElement(e.tagName),a=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=100+n;var i=100/o.offsetWidth;a.removeChild(o);var s=i*parseFloat(t);return G[t+n]=s,s}function ev(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?em(e,o,n):o}}function ex(e,t){return Z.dom(e)&&!Z.inp(e)&&(!Z.nil(eg(e,t))||Z.svg(e)&&e[t])?"attribute":Z.dom(e)&&ec(K,t)?"transform":Z.dom(e)&&"transform"!==t&&ev(e,t)?"css":null!=e[t]?"object":void 0}function eb(e){if(Z.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,o=new Map;t=r.exec(n);)o.set(t[1],t[2]);return o}}function ey(e,t,n,r){switch(ex(e,t)){case"transform":var o,a;return o=V(t,"scale")?1:0+(V(t,"translate")||"perspective"===t?"px":V(t,"rotate")||V(t,"skew")?"deg":void 0),a=eb(e).get(t)||o,r&&(r.transforms.list.set(t,a),r.transforms.last=t),n?em(e,a,n):a;case"css":return ev(e,t,n);case"attribute":return eg(e,t);default:return e[t]||0}}function ew(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=ep(e)||0,o=parseFloat(t),a=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return o+a+r;case"-":return o-a+r;case"*":return o*a+r}}function ek(e,t){if(Z.col(e)){var n,r,o;return Z.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e))?"rgba("+n[1]+",1)":e:Z.hex(e)?(r=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r}),"rgba("+parseInt((o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r))[1],16)+","+parseInt(o[2],16)+","+parseInt(o[3],16)+",1)"):Z.hsl(e)?function(e){var t,n,r,o=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),a=parseInt(o[1],10)/360,i=parseInt(o[2],10)/100,s=parseInt(o[3],10)/100,l=o[4]||1;function c(e,t,n){return(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==i)t=n=r=s;else{var u=s<.5?s*(1+i):s+i-s*i,f=2*s-u;t=c(f,u,a+1/3),n=c(f,u,a),r=c(f,u,a-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+l+")"}(e):void 0}if(/\s/g.test(e))return e;var a=ep(e),i=a?e.substr(0,e.length-a.length):e;return t?i+t:i}function ej(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function eS(e){for(var t,n=e.points,r=0,o=0;o<n.numberOfItems;o++){var a=n.getItem(o);o>0&&(r+=ej(t,a)),t=a}return r}function eC(e){var t;if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return 2*Math.PI*eg(e,"r");case"rect":return 2*eg(e,"width")+2*eg(e,"height");case"line":return ej({x:eg(e,"x1"),y:eg(e,"y1")},{x:eg(e,"x2"),y:eg(e,"y2")});case"polyline":return eS(e);case"polygon":return t=e.points,eS(e)+ej(t.getItem(t.numberOfItems-1),t.getItem(0))}}function eM(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;Z.svg(t)&&Z.svg(t.parentNode);)t=t.parentNode;return t}(e),o=r.getBoundingClientRect(),a=eg(r,"viewBox"),i=o.width,s=o.height,l=n.viewBox||(a?a.split(" "):[0,0,i,s]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:i,h:s,vW:l[2],vH:l[3]}}function ez(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=ek(Z.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:Z.str(e)||t?r.split(n):[]}}function e$(e){return ei(e?es(Z.arr(e)?e.map(el):el(e)):[],function(e,t,n){return n.indexOf(e)===t})}function eE(e){var t=e$(e);return t.map(function(e,n){return{target:e,id:n,total:t.length,transforms:{list:eb(e)}}})}var eI={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,o){if(r.list.set(t,n),t===r.last||o){var a="";r.list.forEach(function(e,t){a+=t+"("+e+") "}),e.style.transform=a}}};function eO(e,t){eE(e).forEach(function(e){for(var n in t){var r=eh(t[n],e),o=e.target,a=ep(r),i=ey(o,n,a,e),s=ew(ek(r,a||ep(i)),i);eI[ex(o,n)](o,n,s,e.transforms,!0)}})}function eP(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},o={};return o.duration=n?Math.max.apply(Math,e.map(function(e){return r(e)+e.duration})):t.duration,o.delay=n?Math.min.apply(Math,e.map(function(e){return r(e)+e.delay})):t.delay,o.endDelay=n?o.duration-Math.max.apply(Math,e.map(function(e){return r(e)+e.duration-e.endDelay})):t.endDelay,o}var eT=0,eL=[],e_=function(){var e;function t(n){for(var r=eL.length,o=0;o<r;){var a=eL[o];a.paused?(eL.splice(o,1),r--):(a.tick(n),o++)}e=o>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){eF.suspendWhenDocumentHidden&&(eN()?e=cancelAnimationFrame(e):(eL.forEach(function(e){return e._onDocumentVisibility()}),e_()))}),function(){e||eN()&&eF.suspendWhenDocumentHidden||!(eL.length>0)||(e=requestAnimationFrame(t))}}();function eN(){return!!document&&document.hidden}function eF(e){void 0===e&&(e={});var t,n,r,o,a,i,s,l,c,u,f=0,d=0,p=0,h=0,g=null;function m(e){var t=window.Promise&&new Promise(function(e){return g=e});return e.finished=t,t}var v=(n=ef(Y,t=e),o=function(e,t){var n=[],r=t.keyframes;for(var o in r&&(t=ed(function(e){for(var t=ei(es(e.map(function(e){return Object.keys(e)})),function(e){return Z.key(e)}).reduce(function(e,t){return 0>e.indexOf(t)&&e.push(t),e},[]),n={},r=0;r<t.length;r++)!function(r){var o=t[r];n[o]=e.map(function(e){var t={};for(var n in e)Z.key(n)?n==o&&(t.value=e[n]):t[n]=e[n];return t})}(r);return n}(r),t)),t)Z.key(o)&&n.push({name:o,tweens:function(e,t){var n=eu(t);if(/^spring/.test(n.easing)&&(n.duration=ee(n.easing)),Z.arr(e)){var r=e.length;2!==r||Z.obj(e[0])?Z.fnc(t.duration)||(n.duration=t.duration/r):e={value:e}}var o=Z.arr(e)?e:[e];return o.map(function(e,n){var r=Z.obj(e)&&!Z.pth(e)?e:{value:e};return Z.und(r.delay)&&(r.delay=n?0:t.delay),Z.und(r.endDelay)&&(r.endDelay=n===o.length-1?t.endDelay:0),r}).map(function(e){return ed(e,n)})}(t[o],e)});return n}(r=ef(q,t),t),l=eP((i=a=eE(t.targets),s=ei(es(i.map(function(e){return o.map(function(t){return function(e,t){var n=ex(e.target,t.name);if(n){var r,o=t.tweens.map(function(n){var o=function(e,t){var n={};for(var r in e){var o=eh(e[r],t);Z.arr(o)&&1===(o=o.map(function(e){return eh(e,t)})).length&&(o=o[0]),n[r]=o}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(n,e),a=o.value,i=Z.arr(a)?a[1]:a,s=ep(i),l=ey(e.target,t.name,s,e),c=r?r.to.original:l,u=Z.arr(a)?a[0]:c,f=ep(u)||ep(l),d=s||f;return Z.und(i)&&(i=c),o.from=ez(u,d),o.to=ez(ew(i,u),d),o.start=r?r.end:0,o.end=o.start+o.delay+o.duration+o.endDelay,o.easing=eo(o.easing,o.duration),o.isPath=Z.pth(a),o.isPathTargetInsideSVG=o.isPath&&Z.svg(e.target),o.isColor=Z.col(o.from.original),o.isColor&&(o.round=1),r=o,o}),a=o[o.length-1];return{type:n,property:t.name,animatable:e,tweens:o,duration:a.end,delay:o[0].delay,endDelay:a.endDelay}}}(e,t)})})),function(e){return!Z.und(e)})),r),c=eT,eT++,ed(n,{id:c,children:[],animatables:a,animations:s,duration:l.duration,delay:l.delay,endDelay:l.endDelay}));function x(){var e=v.direction;"alternate"!==e&&(v.direction="normal"!==e?"normal":"reverse"),v.reversed=!v.reversed,u.forEach(function(e){return e.reversed=v.reversed})}function b(e){return v.reversed?v.duration-e:e}function y(){f=0,d=b(v.currentTime)*(1/eF.speed)}function w(e,t){t&&t.seek(e-t.timelineOffset)}function k(e){for(var t=0,n=v.animations,r=n.length;t<r;){var o=n[t],a=o.animatable,i=o.tweens,s=i.length-1,l=i[s];s&&(l=ei(i,function(t){return e<t.end})[0]||l);for(var c=W(e-l.start-l.delay,0,l.duration)/l.duration,u=isNaN(c)?1:l.easing(c),f=l.to.strings,d=l.round,p=[],h=l.to.numbers.length,g=void 0,m=0;m<h;m++){var x=void 0,b=l.to.numbers[m],y=l.from.numbers[m]||0;x=l.isPath?function(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var o=eM(e.el,e.svg),a=r(),i=r(-1),s=r(1),l=n?1:o.w/o.vW,c=n?1:o.h/o.vH;switch(e.property){case"x":return(a.x-o.x)*l;case"y":return(a.y-o.y)*c;case"angle":return 180*Math.atan2(s.y-i.y,s.x-i.x)/Math.PI}}(l.value,u*b,l.isPathTargetInsideSVG):y+u*(b-y),d&&!(l.isColor&&m>2)&&(x=Math.round(x*d)/d),p.push(x)}var w=f.length;if(w){g=f[0];for(var k=0;k<w;k++){f[k];var j=f[k+1],S=p[k];isNaN(S)||(j?g+=S+j:g+=S+" ")}}else g=p[0];eI[o.type](a.target,o.property,g,a.transforms),o.currentValue=g,t++}}function j(e){v[e]&&!v.passThrough&&v[e](v)}function S(e){var t=v.duration,n=v.delay,r=t-v.endDelay,o=b(e);v.progress=W(o/t*100,0,100),v.reversePlayback=o<v.currentTime,u&&function(e){if(v.reversePlayback)for(var t=h;t--;)w(e,u[t]);else for(var n=0;n<h;n++)w(e,u[n])}(o),!v.began&&v.currentTime>0&&(v.began=!0,j("begin")),!v.loopBegan&&v.currentTime>0&&(v.loopBegan=!0,j("loopBegin")),o<=n&&0!==v.currentTime&&k(0),(o>=r&&v.currentTime!==t||!t)&&k(t),o>n&&o<r?(v.changeBegan||(v.changeBegan=!0,v.changeCompleted=!1,j("changeBegin")),j("change"),k(o)):v.changeBegan&&(v.changeCompleted=!0,v.changeBegan=!1,j("changeComplete")),v.currentTime=W(o,0,t),v.began&&j("update"),e>=t&&(d=0,v.remaining&&!0!==v.remaining&&v.remaining--,v.remaining?(f=p,j("loopComplete"),v.loopBegan=!1,"alternate"===v.direction&&x()):(v.paused=!0,!v.completed&&(v.completed=!0,j("loopComplete"),j("complete"),!v.passThrough&&"Promise"in window&&(g(),m(v)))))}return m(v),v.reset=function(){var e=v.direction;v.passThrough=!1,v.currentTime=0,v.progress=0,v.paused=!0,v.began=!1,v.loopBegan=!1,v.changeBegan=!1,v.completed=!1,v.changeCompleted=!1,v.reversePlayback=!1,v.reversed="reverse"===e,v.remaining=v.loop,h=(u=v.children).length;for(var t=h;t--;)v.children[t].reset();(v.reversed&&!0!==v.loop||"alternate"===e&&1===v.loop)&&v.remaining++,k(v.reversed?v.duration:0)},v._onDocumentVisibility=y,v.set=function(e,t){return eO(e,t),v},v.tick=function(e){p=e,f||(f=p),S((p+(d-f))*eF.speed)},v.seek=function(e){S(b(e))},v.pause=function(){v.paused=!0,y()},v.play=function(){v.paused&&(v.completed&&v.reset(),v.paused=!1,eL.push(v),y(),e_())},v.reverse=function(){x(),v.completed=!v.reversed,y()},v.restart=function(){v.reset(),v.play()},v.remove=function(e){eD(e$(e),v)},v.reset(),v.autoplay&&v.play(),v}function eR(e,t){for(var n=t.length;n--;)ec(e,t[n].animatable.target)&&t.splice(n,1)}function eD(e,t){var n=t.animations,r=t.children;eR(e,n);for(var o=r.length;o--;){var a=r[o],i=a.animations;eR(e,i),i.length||a.children.length||r.splice(o,1)}n.length||r.length||t.pause()}eF.version="3.2.1",eF.speed=1,eF.suspendWhenDocumentHidden=!0,eF.running=eL,eF.remove=function(e){for(var t=e$(e),n=eL.length;n--;)eD(t,eL[n])},eF.get=ey,eF.set=eO,eF.convertPx=em,eF.path=function(e,t){var n=Z.str(e)?ea(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:eM(n),totalLength:eC(n)*(r/100)}}},eF.setDashoffset=function(e){var t=eC(e);return e.setAttribute("stroke-dasharray",t),t},eF.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?eo(t.easing):null,o=t.grid,a=t.axis,i=t.from||0,s="first"===i,l="center"===i,c="last"===i,u=Z.arr(e),f=u?parseFloat(e[0]):parseFloat(e),d=u?parseFloat(e[1]):0,p=ep(u?e[1]:e)||0,h=t.start||0+(u?f:0),g=[],m=0;return function(e,t,v){if(s&&(i=0),l&&(i=(v-1)/2),c&&(i=v-1),!g.length){for(var x=0;x<v;x++){if(o){var b=l?(o[0]-1)/2:i%o[0],y=l?(o[1]-1)/2:Math.floor(i/o[0]),w=x%o[0],k=Math.floor(x/o[0]),j=b-w,S=y-k,C=Math.sqrt(j*j+S*S);"x"===a&&(C=-j),"y"===a&&(C=-S),g.push(C)}else g.push(Math.abs(i-x));m=Math.max.apply(Math,g)}r&&(g=g.map(function(e){return r(e/m)*m})),"reverse"===n&&(g=g.map(function(e){return a?e<0?-1*e:-e:Math.abs(m-e)}))}return h+(u?(d-f)/m:f)*(Math.round(100*g[t])/100)+p}},eF.timeline=function(e){void 0===e&&(e={});var t=eF(e);return t.duration=0,t.add=function(n,r){var o=eL.indexOf(t),a=t.children;function i(e){e.passThrough=!0}o>-1&&eL.splice(o,1);for(var s=0;s<a.length;s++)i(a[s]);var l=ed(n,ef(q,e));l.targets=l.targets||e.targets;var c=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=Z.und(r)?c:ew(r,c),i(t),t.seek(l.timelineOffset);var u=eF(l);i(u),a.push(u);var f=eP(a,e);return t.delay=f.delay,t.endDelay=f.endDelay,t.duration=f.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},eF.easing=eo,eF.penner=er,eF.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var eB=e.i(52435),eB=eB;let eA=a.default.div.withConfig({displayName:"loader__StyledLoader",componentId:"sc-f4d0ec3d-0"})`
  ${({theme:e})=>e.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${e=>+!!e.isMounted};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }
`,eH=({finishLoading:e})=>{let[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=setTimeout(()=>n(!0),10);return eF.timeline({complete:()=>e()}).add({targets:"#logo path",delay:300,duration:1500,easing:"easeInOutQuart",strokeDashoffset:[eF.setDashoffset,0]}).add({targets:"#logo #B",duration:700,easing:"easeInOutQuart",opacity:1}).add({targets:"#logo",delay:500,duration:300,easing:"easeInOutQuart",opacity:0,scale:.1}).add({targets:".loader",duration:200,easing:"easeInOutQuart",opacity:0,zIndex:-1}),()=>clearTimeout(t)},[]),(0,r.jsx)(eA,{className:"loader",isMounted:t,children:(0,r.jsx)("div",{className:"logo-wrapper",children:(0,r.jsx)(eB.default,{})})})},eU=a.default.div.withConfig({displayName:"layout-wrapper__StyledContent",componentId:"sc-f4567bb7-0"})`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;function eY({children:e}){let t="/"===(0,m.usePathname)(),[n,i]=(0,o.useState)(!1),[s,l]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{l(!0),t&&i(!0)},[t]),(0,o.useEffect)(()=>{if(s&&!n){let e;if(window.location.hash){let e=window.location.hash.substring(1);setTimeout(()=>{let t=document.getElementById(e);t&&(t.scrollIntoView(),t.focus())},0)}(e=Array.from(document.querySelectorAll("a"))).length>0&&e.forEach(e=>{e.host!==window.location.host&&(e.setAttribute("rel","noopener noreferrer"),e.setAttribute("target","_blank"))})}},[n,s]),s)?(0,r.jsxs)(a.ThemeProvider,{theme:h,children:[(0,r.jsx)(p,{}),(0,r.jsx)("a",{className:"skip-to-content",href:"#content",children:"Skip to Content"}),n&&t?(0,r.jsx)(eH,{finishLoading:()=>i(!1)}):(0,r.jsxs)(eU,{children:[(0,r.jsx)(P,{isHome:t}),(0,r.jsx)(A,{isHome:t}),(0,r.jsx)(U,{isHome:t}),(0,r.jsxs)("div",{id:"content",children:[e,(0,r.jsx)(F,{})]})]})]}):(0,r.jsxs)(a.ThemeProvider,{theme:h,children:[(0,r.jsx)(p,{}),(0,r.jsx)("a",{className:"skip-to-content",href:"#content",children:"Skip to Content"}),(0,r.jsxs)(eU,{children:[(0,r.jsx)(P,{isHome:t}),(0,r.jsx)(A,{isHome:t}),(0,r.jsx)(U,{isHome:t}),(0,r.jsxs)("div",{id:"content",children:[e,(0,r.jsx)(F,{})]})]})]})}}]);