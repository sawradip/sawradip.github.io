(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63438,e=>{"use strict";var t=e.i(78042),i=e.i(45456),n=e.i(4442),r=e.i(3696),a=e.i(5420),o=e.i(4829);e.i(64485);var s=e.i(90068);let l=a.default.section.withConfig({displayName:"hero__StyledHeroSection",componentId:"sc-a5fcb82b-0"})`
  ${({theme:e})=>e.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({theme:e})=>e.mixins.bigButton};
    margin-top: 50px;
  }
`;e.s(["default",0,()=>{let[e,a]=(0,i.useState)(!1),d=(0,s.usePrefersReducedMotion)();(0,i.useEffect)(()=>{if(a(!0),d)return},[d]);let c=[(0,t.jsx)("h1",{children:"Hi, my name is"}),(0,t.jsx)("h2",{className:"big-heading",children:"Sawradip Saha."}),(0,t.jsx)("h3",{className:"big-heading",children:"I create intelligence."}),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("p",{children:["I'm a machine learning engineer specializing in building complex data processing and model training pipelines. Currently, I'm focused on contributing to open-source projects , in addition to my role at"," ",(0,t.jsx)("a",{href:"https://magicmind.me/",target:"_blank",rel:"noreferrer",children:"MagicMind"}),"."]})}),(0,t.jsx)("a",{className:"email-link",href:"/resume.pdf",target:"_blank",rel:"noreferrer",children:"Check out my CV!"})];return(0,t.jsx)(l,{children:d?(0,t.jsx)(t.Fragment,{children:c.map((e,i)=>(0,t.jsx)("div",{children:e},i))}):(0,t.jsx)(r.TransitionGroup,{component:null,children:c.map((r,a)=>{let s=i.default.createRef();return(0,t.jsx)(n.CSSTransition,{nodeRef:s,classNames:"fadeup",timeout:o.loaderDelay,appear:e,in:e,children:(0,t.jsx)("div",{ref:s,style:e?{transitionDelay:`${a+1}00ms`}:void 0,children:r})},a)})})})}])},21739,e=>{"use strict";let t=function(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},i=function(e){var i=Object.prototype.toString.call(e);return"object"==typeof window.NodeList?e instanceof window.NodeList:null!==e&&"object"==typeof e&&"number"==typeof e.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(i)&&(0===e.length||t(e[0]))},n=function(e,n){if(void 0===n&&(n=document),e instanceof Array)return e.filter(t);if(t(e))return[e];if(i(e))return Array.prototype.slice.call(e);if("string"==typeof e)try{var r=n.querySelectorAll(e);return Array.prototype.slice.call(r)}catch(e){}return[]};function r(e){if(e.constructor!==Array)throw TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=a();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw RangeError("Expected array with either 6 or 16 values.")}function a(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function o(e,t){for(var i=r(e),n=r(t),a=[],o=0;o<4;o++)for(var s=[i[o],i[o+4],i[o+8],i[o+12]],l=0;l<4;l++){var d=4*l,c=[n[d],n[d+1],n[d+2],n[d+3]],u=s[0]*c[0]+s[1]*c[1]+s[2]*c[2]+s[3]*c[3];a[o+d]=u}return a}function s(e,t){var i=a();return i[0]=e,i[5]="number"==typeof t?t:e,i}var l,d,c,u,f,p,h,m,g,x,v=(d=Date.now(),function(e){var t=Date.now();t-d>16?(d=t,e(t)):setTimeout(function(){return v(e)},0)}),b=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||v,y={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}},w=function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})},j=function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}};function _(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function S(e,t){if(_(e))return Object.keys(e).forEach(function(i){return t(e[i],i,e)});if(e instanceof Array)return e.forEach(function(i,n){return t(i,n,e)});throw TypeError("Expected either an array or object literal.")}function C(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];if(this.constructor.debug&&console){var n="%cScrollReveal: "+e;t.forEach(function(e){return n+="\n — "+e}),console.log(n,"color: #ea654b;")}}function E(){var e=this,t=function(){return{active:[],stale:[]}},i=t(),r=t(),a=t();try{S(n("[data-sr-id]"),function(e){var t=parseInt(e.getAttribute("data-sr-id"));i.active.push(t)})}catch(e){throw e}S(this.store.elements,function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)}),S(i.stale,function(t){return delete e.store.elements[t]}),S(this.store.elements,function(e){-1===a.active.indexOf(e.containerId)&&a.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===r.active.indexOf(e.sequence.id)&&r.active.push(e.sequence.id)}),S(this.store.containers,function(e){-1===a.active.indexOf(e.id)&&a.stale.push(e.id)}),S(a.stale,function(t){var i=e.store.containers[t].node;i.removeEventListener("scroll",e.delegate),i.removeEventListener("resize",e.delegate),delete e.store.containers[t]}),S(this.store.sequences,function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)}),S(r.stale,function(t){return delete e.store.sequences[t]})}var k=function(){var e={},t=document.documentElement.style;function i(i,n){if(void 0===n&&(n=t),i&&"string"==typeof i){if(e[i])return e[i];if("string"==typeof n[i])return e[i]=i;if("string"==typeof n["-webkit-"+i])return e[i]="-webkit-"+i;throw RangeError('Unable to find "'+i+'" style property.')}throw TypeError("Expected a string.")}return i.clearCache=function(){return e={}},i}();function I(e,t){t.split(";").forEach(function(t){var i=t.split(":"),n=i[0],r=i.slice(1);n&&r&&(e.style[n.trim()]=r.join(":"))})}function R(e){var t,i=this;try{S(n(e),function(e){var n=e.getAttribute("data-sr-id");if(null!==n){t=!0;var r=i.store.elements[n];r.callbackTimer&&window.clearTimeout(r.callbackTimer.clock),I(r.node,r.styles.inline.generated),e.removeAttribute("data-sr-id"),delete i.store.elements[n]}})}catch(e){return C.call(this,"Clean failed.",e.message)}if(t)try{E.call(this)}catch(e){return C.call(this,"Clean failed.",e.message)}}function z(){var e=this;S(this.store.elements,function(e){I(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),S(this.store.containers,function(t){var i=t.node===document.documentElement?window:t.node;i.removeEventListener("scroll",e.delegate),i.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function N(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];if(_(e))return S(t,function(t){S(t,function(t,i){_(t)?(e[i]&&_(e[i])||(e[i]={}),N(e[i],t)):e[i]=t})}),e;throw TypeError("Target must be an object literal.")}function P(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var O=(l=0,function(){return l++});function M(){var e=this;E.call(this),S(this.store.elements,function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),I(e.node,t.filter(function(e){return""!==e}).join(" "))}),S(this.store.containers,function(t){var i=t.node===document.documentElement?window:t.node;i.addEventListener("scroll",e.delegate),i.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function T(e,t){void 0===t&&(t={});var i=t.pristine||this.pristine,n="always"===e.config.useDelay||"onload"===e.config.useDelay&&i||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,a=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?$.call(this,e,n):t.reset||a?A.call(this,e):void 0}function $(e,t){var i=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?i.push(e.styles.transition.generated.delayed):i.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,I(e.node,i.filter(function(e){return""!==e}).join(" ")),L.call(this,e,t)}function A(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,I(e.node,t.filter(function(e){return""!==e}).join(" ")),L.call(this,e)}function L(e,t){var i=this,n=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,a=e.revealed?e.config.afterReveal:e.config.afterReset,o=0;e.callbackTimer&&(o=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){a(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&R.call(i,e.node)},n-o)}}function D(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return T.call(this,e,{reset:!0});var i=this.store.sequences[e.sequence.id],n=e.sequence.index;if(i){var r=new F(i,"visible",this.store),a=new F(i,"revealed",this.store);if(i.models={visible:r,revealed:a},!a.body.length){var o=i.members[r.body[0]],s=this.store.elements[o];if(s)return H.call(this,i,r.body[0],-1,t),H.call(this,i,r.body[0],1,t),T.call(this,s,{reveal:!0,pristine:t})}if(!i.blocked.head&&n===[].concat(a.head).pop()&&n>=[].concat(r.body).shift())return H.call(this,i,n,-1,t),T.call(this,e,{reveal:!0,pristine:t});if(!i.blocked.foot&&n===[].concat(a.foot).shift()&&n<=[].concat(r.body).pop())return H.call(this,i,n,1,t),T.call(this,e,{reveal:!0,pristine:t})}}function q(e){var t=Math.abs(e);if(isNaN(t))throw RangeError("Invalid sequence interval.");this.id=O(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function F(e,t,i){var n=this;this.head=[],this.body=[],this.foot=[],S(e.members,function(e,r){var a=i.elements[e];a&&a[t]&&n.body.push(r)}),this.body.length&&S(e.members,function(e,r){var a=i.elements[e];a&&!a[t]&&(r<n.body[0]?n.head.push(r):n.foot.push(r))})}function H(e,t,i,n){var r=this,a=["head",null,"foot"][1+i],o=e.members[t+i],s=this.store.elements[o];e.blocked[a]=!0,setTimeout(function(){e.blocked[a]=!1,s&&D.call(r,s,n)},e.interval)}function B(e,t,i){var l,d=this;void 0===t&&(t={}),void 0===i&&(i=!1);var c=[],u=t.interval||y.interval;try{u&&(l=new q(u));var f=n(e);if(!f.length)throw Error("Invalid reveal target.");var p=f.reduce(function(e,i){var u,f={},p=i.getAttribute("data-sr-id");p?(N(f,d.store.elements[p]),I(f.node,f.styles.inline.computed)):(f.id=O(),f.node=i,f.seen=!1,f.revealed=!1,f.visible=!1);var h=N({},f.config||d.defaults,t);if(!h.mobile&&P()||!h.desktop&&!P())return p&&R.call(d,f),e;var m=n(h.container)[0];if(!m)throw Error("Invalid container.");return m.contains(i)&&(u=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var n=null;return S(t,function(t){S(t,function(t){null===n&&t.node===e&&(n=t.id)})}),n}(m,c,d.store.containers),null===u&&(u=O(),c.push({id:u,node:m})),f.config=h,f.containerId=u,f.styles=function(e){var t,i,n,l,d,c,u=window.getComputedStyle(e.node),f=u.position,p=e.config,h={},m=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];h.computed=m.map(function(e){return e.trim()}).join("; ")+";",h.generated=m.some(function(e){return e.match(/visibility\s?:\s?visible/i)})?h.computed:m.concat(["visibility: visible"]).map(function(e){return e.trim()}).join("; ")+";";var g=parseFloat(u.opacity),x=isNaN(parseFloat(p.opacity))?parseFloat(u.opacity):parseFloat(p.opacity),v={computed:g!==x?"opacity: "+g+";":"",generated:g!==x?"opacity: "+x+";":""},b=[];if(parseFloat(p.distance)){var y,w,j,_,S="top"===p.origin||"bottom"===p.origin?"Y":"X",C=p.distance;("top"===p.origin||"left"===p.origin)&&(C=/^-/.test(C)?C.substr(1):"-"+C);var E=C.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),I=E[0];switch(E[1]){case"em":C=parseInt(u.fontSize)*I;break;case"px":C=I;break;case"%":C="Y"===S?e.node.getBoundingClientRect().height*I/100:e.node.getBoundingClientRect().width*I/100;break;default:throw RangeError("Unrecognized or missing distance unit.")}"Y"===S?b.push((y=C,(w=a())[13]=y,w)):b.push((j=C,(_=a())[12]=j,_))}p.rotate.x&&b.push((t=Math.PI/180*p.rotate.x,(i=a())[5]=i[10]=Math.cos(t),i[6]=i[9]=Math.sin(t),i[9]*=-1,i)),p.rotate.y&&b.push((n=Math.PI/180*p.rotate.y,(l=a())[0]=l[10]=Math.cos(n),l[2]=l[8]=Math.sin(n),l[2]*=-1,l)),p.rotate.z&&b.push((d=Math.PI/180*p.rotate.z,(c=a())[0]=c[5]=Math.cos(d),c[1]=c[4]=Math.sin(d),c[4]*=-1,c)),1!==p.scale&&(0===p.scale?b.push(s(2e-4)):b.push(s(p.scale)));var R={};if(b.length){R.property=k("transform"),R.computed={raw:u[R.property],matrix:function(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return r(t[2].split(", ").map(parseFloat))}return a()}(u[R.property])},b.unshift(R.computed.matrix);var z=b.reduce(o);R.generated={initial:R.property+": matrix3d("+z.join(", ")+");",final:R.property+": matrix3d("+R.computed.matrix.join(", ")+");"}}else R.generated={initial:"",final:""};var N={};if(v.generated||R.generated.initial){N.property=k("transition"),N.computed=u[N.property],N.fragments=[];var P=p.delay,O=p.duration,M=p.easing;v.generated&&N.fragments.push({delayed:"opacity "+O/1e3+"s "+M+" "+P/1e3+"s",instant:"opacity "+O/1e3+"s "+M+" 0s"}),R.generated.initial&&N.fragments.push({delayed:R.property+" "+O/1e3+"s "+M+" "+P/1e3+"s",instant:R.property+" "+O/1e3+"s "+M+" 0s"}),N.computed&&!N.computed.match(/all 0s|none 0s/)&&N.fragments.unshift({delayed:N.computed,instant:N.computed});var T=N.fragments.reduce(function(e,t,i){return e.delayed+=0===i?t.delayed:", "+t.delayed,e.instant+=0===i?t.instant:", "+t.instant,e},{delayed:"",instant:""});N.generated={delayed:N.property+": "+T.delayed+";",instant:N.property+": "+T.instant+";"}}else N.generated={delayed:"",instant:""};return{inline:h,opacity:v,position:f,transform:R,transition:N}}(f),l&&(f.sequence={id:l.id,index:l.members.length},l.members.push(f.id)),e.push(f)),e},[]);S(p,function(e){d.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)})}catch(e){return C.call(this,"Reveal failed.",e.message)}S(c,function(e){d.store.containers[e.id]={id:e.id,node:e.node}}),l&&(this.store.sequences[l.id]=l),!0!==i&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(M.bind(this),0))}function W(){var e=this;S(this.store.history,function(t){B.call(e,t.target,t.options,!0)}),M.call(this)}var G=Math.sign||function(e){return(e>0)-(e<0)||+e};function Y(e,t){var i=t?e.node.clientHeight:e.node.offsetHeight,n=t?e.node.clientWidth:e.node.offsetWidth,r=0,a=0,o=e.node;do isNaN(o.offsetTop)||(r+=o.offsetTop),isNaN(o.offsetLeft)||(a+=o.offsetLeft),o=o.offsetParent;while(o)return{bounds:{top:r,right:a+n,bottom:r+i,left:a},height:i,width:n}}function U(e){var t,i;return e.node===document.documentElement?(t=window.pageYOffset,i=window.pageXOffset):(t=e.node.scrollTop,i=e.node.scrollLeft),{top:t,left:i}}function X(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var i=Math.max(0,Math.min(1,e.config.viewFactor)),n=e.config.viewOffset,r={top:e.geometry.bounds.top+e.geometry.height*i,right:e.geometry.bounds.right-e.geometry.width*i,bottom:e.geometry.bounds.bottom-e.geometry.height*i,left:e.geometry.bounds.left+e.geometry.width*i},a={top:t.geometry.bounds.top+t.scroll.top+n.top,right:t.geometry.bounds.right+t.scroll.left-n.right,bottom:t.geometry.bounds.bottom+t.scroll.top-n.bottom,left:t.geometry.bounds.left+t.scroll.left+n.left};return r.top<a.bottom&&r.right>a.left&&r.bottom>a.top&&r.left<a.right||"fixed"===e.styles.position}}function V(e,t){var i=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),b(function(){var n="init"===e.type||"resize"===e.type;S(i.store.containers,function(e){n&&(e.geometry=Y.call(i,e,!0));var t=U.call(i,e);e.scroll&&(e.direction={x:G(t.left-e.scroll.left),y:G(t.top-e.scroll.top)}),e.scroll=t}),S(t,function(e){(n||void 0===e.geometry)&&(e.geometry=Y.call(i,e)),e.visible=X.call(i,e)}),S(t,function(e){e.sequence?D.call(i,e):T.call(i,e)}),i.pristine=!1})}function K(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==K.prototype)return new K(e);if(!K.isSupported())return C.call(this,"Instantiation failed.","This browser is not supported."),j();try{t=m?N({},m,e):N({},y,e)}catch(e){return C.call(this,"Invalid configuration.",e.message),j()}try{if(!n(t.container)[0])throw Error("Invalid container.")}catch(e){return C.call(this,e.message),j()}return!(m=t).mobile&&P()||!m.desktop&&!P()?(C.call(this,"This device is disabled.","desktop: "+m.desktop,"mobile: "+m.mobile),j()):(w(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,c=c||V.bind(this),u=u||z.bind(this),f=f||B.bind(this),p=p||R.bind(this),h=h||W.bind(this),Object.defineProperty(this,"delegate",{get:function(){return c}}),Object.defineProperty(this,"destroy",{get:function(){return u}}),Object.defineProperty(this,"reveal",{get:function(){return f}}),Object.defineProperty(this,"clean",{get:function(){return p}}),Object.defineProperty(this,"sync",{get:function(){return h}}),Object.defineProperty(this,"defaults",{get:function(){return m}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),x||(x=this))}K.isSupported=function(){var e,t;return("transform"in(e=document.documentElement.style)||"WebkitTransform"in e)&&("transition"in(t=document.documentElement.style)||"WebkitTransition"in t)},Object.defineProperty(K,"debug",{get:function(){return g||!1},set:function(e){return g="boolean"==typeof e?e:g}}),K(),e.s(["default",0,K],21739)},16220,e=>{"use strict";let t=null;{let i=e.r(21739);t=i.default?i.default():i({reset:!1})}let i=t;e.s(["default",0,i])},8713,e=>{"use strict";var t=e.i(78042),i=e.i(45456),n=e.i(5420),r=e.i(80926),a=e.i(16220);e.i(64485);var o=e.i(90068);e.i(56669);var s=e.i(94661);let l=n.default.section.withConfig({displayName:"research__StyledResearchSection",componentId:"sc-c01c4c70-0"})`
  max-width: 1000px;
  margin: 0 auto;
`,d=n.default.ul.withConfig({displayName:"research__StyledResearchList",componentId:"sc-c01c4c70-1"})`
  ${({theme:e})=>e.mixins.resetList};
`,c=n.default.li.withConfig({displayName:"research__StyledResearchItem",componentId:"sc-c01c4c70-2"})`
  position: relative;
  padding: 20px 0;
  border-top: 1px solid var(--lightest-navy);
  transition: var(--transition);

  &:last-of-type {
    border-bottom: 1px solid var(--lightest-navy);
  }

  &:hover,
  &:focus-within {
    .research-title {
      color: var(--green);
    }
  }
`,u=n.default.div.withConfig({displayName:"research__StyledResearchContent",componentId:"sc-c01c4c70-3"})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,f=n.default.div.withConfig({displayName:"research__StyledResearchInfo",componentId:"sc-c01c4c70-4"})`
  flex: 1;
`,p=n.default.h3.withConfig({displayName:"research__StyledResearchTitle",componentId:"sc-c01c4c70-5"})`
  margin: 0 0 10px;
  color: var(--lightest-slate);
  font-size: var(--fz-xl);
  font-weight: 500;
  transition: var(--transition);

  a {
    ${({theme:e})=>e.mixins.inlineLink};
  }
`,h=n.default.p.withConfig({displayName:"research__StyledResearchAuthors",componentId:"sc-c01c4c70-6"})`
  margin: 0 0 8px;
  color: var(--light-slate);
  font-size: var(--fz-sm);
  font-style: italic;
`,m=n.default.p.withConfig({displayName:"research__StyledResearchVenue",componentId:"sc-c01c4c70-7"})`
  margin: 0 0 8px;
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
`,g=n.default.p.withConfig({displayName:"research__StyledResearchAbstract",componentId:"sc-c01c4c70-8"})`
  margin: 12px 0 0 0;
  color: var(--slate);
  font-size: var(--fz-sm);
  line-height: 1.6;
`,x=n.default.div.withConfig({displayName:"research__StyledResearchMeta",componentId:"sc-c01c4c70-9"})`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`,v=n.default.div.withConfig({displayName:"research__StyledCitationCount",componentId:"sc-c01c4c70-10"})`
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
`,b=n.default.div.withConfig({displayName:"research__StyledResearchLinks",componentId:"sc-c01c4c70-11"})`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--lightest-slate);

  a {
    ${({theme:e})=>e.mixins.flexCenter};
    padding: 8px;
    transition: var(--transition);

    &:hover,
    &:focus {
      transform: translateY(-2px);
      color: var(--green);
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`,y=n.default.a.withConfig({displayName:"research__StyledGoogleScholarLink",componentId:"sc-c01c4c70-12"})`
  ${({theme:e})=>e.mixins.smallButton};
  margin-top: 30px;
  display: inline-block;
  font-size: var(--fz-sm);
`;e.s(["default",0,({papers:e=[],scholarUrl:n="https://scholar.google.com/citations?user=YdqvDuIAAAAJ&hl=en"})=>{let w=(0,i.useRef)(null),j=(0,i.useRef)([]),_=(0,o.usePrefersReducedMotion)();(0,i.useEffect)(()=>{_||(w.current&&a.default&&a.default.reveal(w.current,r.config.srConfig()),j.current.forEach((e,t)=>{e&&a.default&&a.default.reveal(e,r.config.srConfig(100*t))}))},[_]);let S=e.length>0?e:[],C=S.reduce((e,t)=>e+t.citations,0);return(0,t.jsxs)(l,{id:"research",ref:w,children:[(0,t.jsx)("h2",{className:"numbered-heading",children:"Research Publications"}),(0,t.jsxs)("div",{style:{marginBottom:"20px",color:"var(--slate)",fontFamily:"var(--font-mono)",fontSize:"var(--fz-sm)"},children:["Total Citations:"," ",(0,t.jsx)("span",{style:{color:"var(--green)"},children:C})]}),(0,t.jsx)(d,{children:S.map((e,i)=>(0,t.jsx)(c,{ref:e=>{j.current[i]=e},children:(0,t.jsxs)(u,{children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(p,{className:"research-title",children:e.url?(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.title}):e.title}),(0,t.jsx)(h,{children:e.authors}),(0,t.jsxs)(m,{children:["s",e.venue," • ",e.year]}),e.abstract&&(0,t.jsx)(g,{children:e.abstract})]}),(0,t.jsxs)(x,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)("span",{children:e.citations}),(0,t.jsx)("span",{children:"citations"})]}),(0,t.jsxs)(b,{children:[e.pdf&&(0,t.jsx)("a",{href:e.pdf,target:"_blank",rel:"noopener noreferrer","aria-label":"PDF",children:(0,t.jsx)(s.Icon,{name:"External"})}),e.arxiv&&(0,t.jsx)("a",{href:e.arxiv,target:"_blank",rel:"noopener noreferrer","aria-label":"arXiv",children:(0,t.jsx)(s.Icon,{name:"External"})}),e.code&&(0,t.jsx)("a",{href:e.code,target:"_blank",rel:"noopener noreferrer","aria-label":"Code",children:(0,t.jsx)(s.Icon,{name:"GitHub"})})]})]})]})},i))}),(0,t.jsx)(y,{href:n,target:"_blank",rel:"noopener noreferrer",children:"View All Publications on Google Scholar"})]})}])},36523,(e,t,i)=>{"use strict";function n({widthInt:e,heightInt:t,blurWidth:i,blurHeight:n,blurDataURL:r,objectFit:a}){let o=i?40*i:e,s=n?40*n:t,l=o&&s?`viewBox='0 0 ${o} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${r}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},52245,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={VALID_LOADERS:function(){return a},imageConfigDefault:function(){return o}};for(var r in n)Object.defineProperty(i,r,{enumerable:!0,get:n[r]});let a=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},17022,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return l}}),e.r(87035);let n=e.r(36523),r=e.r(52245),a=["-moz-initial","fill","none","scale-down",void 0];function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l({src:e,sizes:t,unoptimized:i=!1,priority:l=!1,preload:d=!1,loading:c,className:u,quality:f,width:p,height:h,fill:m=!1,style:g,overrideSrc:x,onLoad:v,onLoadingComplete:b,placeholder:y="empty",blurDataURL:w,fetchPriority:j,decoding:_="async",layout:S,objectFit:C,objectPosition:E,lazyBoundary:k,lazyRoot:I,...R},z){var N;let P,O,M,{imgConf:T,showAltText:$,blurComplete:A,defaultLoader:L}=z,D=T||r.imageConfigDefault;if("allSizes"in D)P=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t),i=D.qualities?.sort((e,t)=>e-t);P={...D,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===L)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let q=R.loader||L;delete R.loader,delete R.srcSet;let F="__next_img_default"in q;if(F){if("custom"===P.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=q;q=t=>{let{config:i,...n}=t;return e(n)}}if(S){"fill"===S&&(m=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(g={...g,...e});let i={responsive:"100vw",fill:"100vw"}[S];i&&!t&&(t=i)}let H="",B=s(p),W=s(h);if((N=e)&&"object"==typeof N&&(o(N)||void 0!==N.src)){let t=o(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(O=t.blurWidth,M=t.blurHeight,w=w||t.blurDataURL,H=t.src,!m)if(B||W){if(B&&!W){let e=B/t.width;W=Math.round(t.height*e)}else if(!B&&W){let e=W/t.height;B=Math.round(t.width*e)}}else B=t.width,W=t.height}let G=!l&&!d&&("lazy"===c||void 0===c);(!(e="string"==typeof e?e:H)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,G=!1),P.unoptimized&&(i=!0),F&&!P.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let Y=s(f),U=Object.assign(m?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:E}:{},$?{}:{color:"transparent"},g),X=A||"empty"===y?null:"blur"===y?`url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:B,heightInt:W,blurWidth:O,blurHeight:M,blurDataURL:w||"",objectFit:U.objectFit})}")`:`url("${y}")`,V=a.includes(U.objectFit)?"fill"===U.objectFit?"100% 100%":"cover":U.objectFit,K=X?{backgroundSize:V,backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},J=function({config:e,src:t,unoptimized:i,width:n,quality:r,sizes:a,loader:o}){if(i)return{src:t,srcSet:void 0,sizes:void 0};let{widths:s,kind:l}=function({deviceSizes:e,allSizes:t},i,n){if(n){let i=/(^|\s)(1?\d?\d)vw/g,r=[];for(let e;e=i.exec(n);)r.push(parseInt(e[2]));if(r.length){let i=.01*Math.min(...r);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,n,a),d=s.length-1;return{sizes:a||"w"!==l?a:"100vw",srcSet:s.map((i,n)=>`${o({config:e,src:t,quality:r,width:i})} ${"w"===l?i:n+1}${l}`).join(", "),src:o({config:e,src:t,quality:r,width:s[d]})}}({config:P,src:e,unoptimized:i,width:B,quality:Y,sizes:t,loader:q}),Q=G?"lazy":c;return{props:{...R,loading:Q,fetchPriority:j,width:B,height:W,decoding:_,className:u,style:{...U,...K},sizes:J.sizes,srcSet:J.srcSet,src:x||J.src},meta:{unoptimized:i,preload:d||l,placeholder:y,fill:m}}}},87096,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return s}});let n=e.r(45456),r="undefined"==typeof window,a=r?()=>{}:n.useLayoutEffect,o=r?()=>{}:n.useEffect;function s(e){let{headManager:t,reduceComponentsToState:i}=e;function s(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return r&&(t?.mountedInstances?.add(e.children),s()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},24179,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={default:function(){return m},defaultHead:function(){return u}};for(var r in n)Object.defineProperty(i,r,{enumerable:!0,get:n[r]});let a=e.r(81258),o=e.r(44066),s=e.r(78042),l=o._(e.r(45456)),d=a._(e.r(87096)),c=e.r(55481);function u(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(87035);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,i,n,r;return e.reduce(f,[]).reverse().concat(u().reverse()).filter((t=new Set,i=new Set,n=new Set,r={},e=>{let a=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?a=!1:i.add(e.type);break;case"meta":for(let t=0,i=p.length;t<i;t++){let i=p[t];if(e.props.hasOwnProperty(i))if("charSet"===i)n.has(i)?a=!1:n.add(i);else{let t=e.props[i],n=r[i]||new Set;("name"!==i||!o)&&n.has(t)?a=!1:(n.add(t),r[i]=n)}}}return a})).reverse().map((e,t)=>{let i=e.key||t;return l.default.cloneElement(e,{key:i})})}let m=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,s.jsx)(d.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},2263,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=e.r(81258)._(e.r(45456)),r=e.r(52245),a=n.default.createContext(r.imageConfigDefault)},47118,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return n}});let n=e.r(81258)._(e.r(45456)).default.createContext(null)},67308,(e,t,i)=>{"use strict";function n(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,0):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return n}})},57089,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return a}});let n=e.r(67308);function r({config:e,src:t,width:i,quality:r}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let a=(0,n.findClosestQuality)(r,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${a}${t.startsWith("/_next/static/media/"),""}`}r.__next_img_default=!0;let a=r},36454,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return y}});let n=e.r(81258),r=e.r(44066),a=e.r(78042),o=r._(e.r(45456)),s=n._(e.r(25640)),l=n._(e.r(24179)),d=e.r(17022),c=e.r(52245),u=e.r(2263);e.r(87035);let f=e.r(47118),p=n._(e.r(57089)),h=e.r(94400),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,i,n,r,a,o){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&r(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,r=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}n?.current&&n.current(e)}}))}function x(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,o.forwardRef)(({src:e,srcSet:t,sizes:i,height:n,width:r,decoding:s,className:l,style:d,fetchPriority:c,placeholder:u,loading:f,unoptimized:p,fill:m,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:y,setShowAltText:w,sizesInput:j,onLoad:_,onError:S,...C},E)=>{let k=(0,o.useCallback)(e=>{e&&(S&&(e.src=e.src),e.complete&&g(e,u,v,b,y,p,j))},[e,u,v,b,y,S,p,j]),I=(0,h.useMergedRef)(E,k);return(0,a.jsx)("img",{...C,...x(c),loading:f,width:r,height:n,decoding:s,"data-nimg":m?"fill":"1",className:l,style:d,sizes:i,srcSet:t,src:e,ref:I,onLoad:e=>{g(e.currentTarget,u,v,b,y,p,j)},onError:e=>{w(!0),"empty"!==u&&y(!0),S&&S(e)}})});function b({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...x(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,i),null):(0,a.jsx)(l.default,{children:(0,a.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,o.forwardRef)((e,t)=>{let i=(0,o.useContext)(f.RouterContext),n=(0,o.useContext)(u.ImageConfigContext),r=(0,o.useMemo)(()=>{let e=m||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t),r=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i,qualities:r,localPatterns:"undefined"==typeof window?n?.localPatterns:e.localPatterns}},[n]),{onLoad:s,onLoadingComplete:l}=e,h=(0,o.useRef)(s);(0,o.useEffect)(()=>{h.current=s},[s]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[x,y]=(0,o.useState)(!1),[w,j]=(0,o.useState)(!1),{props:_,meta:S}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:r,blurComplete:x,showAltText:w});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{..._,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:j,sizesInput:e.sizes,ref:t}),S.preload?(0,a.jsx)(b,{isAppRouter:!i,imgAttributes:_}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},65817,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={default:function(){return c},getImageProps:function(){return d}};for(var r in n)Object.defineProperty(i,r,{enumerable:!0,get:n[r]});let a=e.r(81258),o=e.r(17022),s=e.r(36454),l=a._(e.r(57089));function d(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let c=s.Image},61450,(e,t,i)=>{t.exports=e.r(65817)},98621,e=>{"use strict";var t=e.i(78042),i=e.i(45456),n=e.i(61450),r=e.i(5420),a=e.i(80926),o=e.i(16220);e.i(64485);var s=e.i(90068);let l=r.default.section.withConfig({displayName:"about__StyledAboutSection",componentId:"sc-a83c8761-0"})`
  max-width: 1000px;
  margin: 0 auto;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`,d=r.default.div.withConfig({displayName:"about__StyledText",componentId:"sc-a83c8761-1"})`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`,c=r.default.div.withConfig({displayName:"about__StyledPic",componentId:"sc-a83c8761-2"})`
  position: relative;
  max-width: 400px;
  width: 100%;
  aspect-ratio: 3 / 4;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
    max-width: 350px;
  }

  .wrapper {
    ${({theme:e})=>e.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
    overflow: hidden;

    &:focus {
      outline: 0;
    }

    .img {
      position: relative;
      z-index: 0;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
      ${({isHovered:e})=>e&&`
        filter: none !important;
        mix-blend-mode: normal !important;
      `}
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      z-index: 1;
      background-color: var(--navy);
      mix-blend-mode: screen;
      transform: ${({isHovered:e,entryDirection:t})=>e?"top"===t?"translate(0, 100%)":"bottom"===t?"translate(0, -100%)":"left"===t?"translate(100%, 0)":"right"===t?"translate(-100%, 0)":"translate(0, 100%)":"translate(0, 0)"};
      transition: ${({isHovered:e,entrySpeed:t})=>{let i=e?Math.max(.3,Math.min(.8,t)):.5;return`transform ${i}s cubic-bezier(0.645, 0.045, 0.355, 1)`}};
      will-change: transform;
    }

    &:after {
      border: 2px solid var(--green);
      top: ${({isHovered:e})=>e?"15px":"20px"};
      left: ${({isHovered:e})=>e?"15px":"20px"};
      z-index: -1;
      transition: top 0.3s ease, left 0.3s ease;
    }
  }
`;e.s(["default",0,()=>{let e=(0,i.useRef)(null),r=(0,i.useRef)(null),u=(0,s.usePrefersReducedMotion)(),[f,p]=(0,i.useState)(!1),[h,m]=(0,i.useState)("top"),[g,x]=(0,i.useState)(.5),v=(0,i.useRef)(0),b=(0,i.useRef)(0);(0,i.useRef)(0);let y=(0,i.useRef)(0),w=(0,i.useRef)(!1),j=(0,i.useRef)(!1),_=(0,i.useRef)(null),S=(0,i.useRef)(null);(0,i.useEffect)(()=>{!u&&e.current&&o.default&&o.default.reveal(e.current,a.config.srConfig())},[u]),(0,i.useEffect)(()=>{if(u)return;let e=e=>{_.current=e.clientY,S.current=e.clientX};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[u]),(0,i.useEffect)(()=>{if(u)return;let e=()=>{if(!r.current)return;let e=r.current.getBoundingClientRect();if(e.top<window.innerHeight&&e.bottom>0&&!w.current){let t=window.pageYOffset,i=Math.min(1,Math.abs(t-v.current)/100);e.top<window.innerHeight/2?m("top"):m("bottom"),x(Math.max(.3,Math.min(.8,.5+.3*i))),w.current=!0,v.current=t}v.current=window.pageYOffset};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[u]);let C=(0,i.useCallback)(e=>{if(u)return;let t=e.clientY,i=e.clientX,n=_.current,a=S.current,o=r.current?.getBoundingClientRect();if(!o)return;let s=o.top,l=o.bottom,d=o.left,c=o.right,f="top";if(null!==n&&null!==a){let e=t-n,r=i-a;f=Math.abs(e)>Math.abs(r)?e>0?"top":"bottom":r>0?"left":"right"}else t<s+(l-s)*.2?f="top":t>s+(l-s)*.8?f="bottom":i<d+(c-d)*.2?f="left":i>d+(c-d)*.8&&(f="right");m(f),null!==n&&null!==a?x(Math.max(.3,Math.min(.8,.4+.4*Math.min(1,Math.sqrt(Math.pow(t-n,2)+Math.pow(i-a,2))/100)))):x(.5),y.current=Date.now(),j.current=!0,p(!0),_.current=t,S.current=i,b.current=t},[u]),E=(0,i.useCallback)(e=>{u||(_.current=e.clientY,S.current=e.clientX,b.current=e.clientY)},[u]),k=(0,i.useCallback)(()=>{p(!1),j.current=!1},[]),I=["PyTorch","chatGPT","Cuda","GPT3","C#","Dall-E2"];return(0,t.jsxs)(l,{id:"about",ref:t=>{e.current=t,r.current=t},isHovered:f,entryDirection:h,entrySpeed:g,onMouseEnter:C,onMouseMove:E,onMouseLeave:k,children:[(0,t.jsx)("h2",{className:"numbered-heading",children:"About Me"}),(0,t.jsxs)("div",{className:"inner",children:[(0,t.jsxs)(d,{children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{children:["I am ",(0,t.jsx)("b",{children:"Sawradip Saha"}),", a machine learning engineer and researcher from Dhaka, Bangladesh. I did my BSc in Mechanical Engineering at BUET, but most of my work has been in AI, especially deep learning and agentic systems. I have coauthored several papers in IEEE conferences and journals on computer vision, activity recognition, biomedical signals, and document analysis, and I enjoy taking ideas all the way from theory to working systems."]}),(0,t.jsxs)("p",{children:["Professionally, I have worked as a founding or early engineer at AI-focused startups, building large-scale systems for speech, vision and LLM-based workflows. I contributed to"," ",(0,t.jsx)("a",{href:"https://summerofcode.withgoogle.com/",children:"Google Summer of Code 2023"})," ","with Intel's"," ",(0,t.jsx)("a",{href:"https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit/overview.html",children:"OpenVINO Toolkit"}),", and I actively contribute to open source projects such as"," ",(0,t.jsx)("a",{href:"https://github.com/openvinotoolkit/openvino",children:"OpenVINO"}),", ",(0,t.jsx)("a",{href:"https://github.com/pytorch/pytorch",children:"PyTorch"})," and"," ",(0,t.jsx)("a",{href:"https://github.com/skorch-dev/skorch",children:"Skorch"}),"."]}),(0,t.jsxs)("p",{children:["Right now I am building ",(0,t.jsx)("b",{children:"RunAgent"}),", an infrastructure platform for deploying AI agents into real software products. I am especially interested in research at the intersection of LLM agents, tools, and systems: how to make agents reliable, controllable and efficient enough to be used in production."]}),(0,t.jsx)("p",{children:"Here are a few technologies I've been working with recently:"})]}),(0,t.jsx)("ul",{className:"skills-list",children:I&&I.map((e,i)=>(0,t.jsx)("li",{children:e},i))})]}),(0,t.jsx)(c,{isHovered:f,entryDirection:h,entrySpeed:g,children:(0,t.jsx)("div",{className:"wrapper",children:(0,t.jsx)(n.default,{className:"img",src:"/images/sawra.jpeg",width:400,height:533,alt:"Headshot",style:{borderRadius:"var(--border-radius)",width:"100%",height:"100%",objectFit:"cover"}})})})]})]})}])},78697,e=>{"use strict";var t=e.i(78042),i=e.i(45456),n=e.i(4442),r=e.i(5420),a=e.i(80926),o=e.i(4829),s=e.i(16220);e.i(64485);var l=e.i(90068);let d=r.default.section.withConfig({displayName:"education__StyledJobsSection",componentId:"sc-bdcda74d-0"})`
  max-width: 1000px;
  margin: 0 auto;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`,c=r.default.div.withConfig({displayName:"education__StyledTabList",componentId:"sc-bdcda74d-1"})`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }
`,u=r.default.button.withConfig({displayName:"education__StyledTabButton",componentId:"sc-bdcda74d-2"})`
  ${({theme:e})=>e.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({isActive:e})=>e?"var(--green)":"var(--slate)"};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({theme:e})=>e.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`,f=r.default.div.withConfig({displayName:"education__StyledHighlight",componentId:"sc-bdcda74d-3"})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({activeTabId:e})=>e} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({activeTabId:e})=>e} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`,p=r.default.div.withConfig({displayName:"education__StyledTabPanels",componentId:"sc-bdcda74d-4"})`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`,h=r.default.div.withConfig({displayName:"education__StyledTabPanel",componentId:"sc-bdcda74d-5"})`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({theme:e})=>e.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;e.s(["default",0,({data:e=[]})=>{let[r,m]=(0,i.useState)(0),[g,x]=(0,i.useState)(null),v=(0,i.useRef)([]),b=(0,i.useRef)(null),y=(0,l.usePrefersReducedMotion)();return((0,i.useEffect)(()=>{!y&&b.current&&s.default&&s.default.reveal(b.current,a.config.srConfig())},[y]),(0,i.useEffect)(()=>{v.current[g||0]?v.current[g||0]?.focus():((g||0)>=v.current.length&&x(0),0>(g||0)&&x(v.current.length-1))},[g]),0===e.length)?null:(0,t.jsxs)(d,{id:"education",ref:b,children:[(0,t.jsx)("h2",{className:"numbered-heading",children:"Where I've Learned"}),(0,t.jsxs)("div",{className:"inner",children:[(0,t.jsxs)(c,{role:"tablist","aria-label":"Education tabs",onKeyDown:e=>{switch(e.key){case o.KEY_CODES.ARROW_UP:e.preventDefault(),x((g||0)-1);break;case o.KEY_CODES.ARROW_DOWN:e.preventDefault(),x((g||0)+1)}},children:[e&&e.map(({frontmatter:e},i)=>{let{company:n}=e;return(0,t.jsx)(u,{isActive:r===i,onClick:()=>m(i),ref:e=>{v.current[i]=e},id:`tab-${i}`,role:"tab",tabIndex:r===i?0:-1,"aria-selected":r===i,"aria-controls":`panel-${i}`,children:(0,t.jsx)("span",{children:n})},i)}),(0,t.jsx)(f,{activeTabId:r})]}),(0,t.jsx)(p,{children:e&&e.map(({frontmatter:e,html:a},o)=>{let{title:s,url:l}=e,d=i.default.useRef(null);return(0,t.jsx)(n.CSSTransition,{nodeRef:d,in:r===o,timeout:250,classNames:"fade",children:(0,t.jsxs)(h,{ref:d,id:`panel-${o}`,role:"tabpanel",tabIndex:r===o?0:-1,"aria-labelledby":`tab-${o}`,"aria-hidden":r!==o,hidden:r!==o,children:[(0,t.jsxs)("h3",{children:[(0,t.jsx)("span",{children:s}),(0,t.jsxs)("span",{className:"company",children:[" @ ",(0,t.jsx)("a",{href:l,className:"inline-link",children:e.institution||e.company})]})]}),e.location&&(0,t.jsx)("p",{className:"range",children:e.location}),(0,t.jsx)("p",{className:"range",children:e.range}),(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})]})},o)})})]})]})}])},48691,e=>{"use strict";var t=e.i(78042),i=e.i(45456),n=e.i(4442),r=e.i(5420),a=e.i(80926),o=e.i(4829),s=e.i(16220);e.i(64485);var l=e.i(90068);let d=r.default.section.withConfig({displayName:"jobs__StyledJobsSection",componentId:"sc-390ce96e-0"})`
  max-width: 1000px;
  margin: 0 auto;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`,c=r.default.div.withConfig({displayName:"jobs__StyledTabList",componentId:"sc-390ce96e-1"})`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }
`,u=r.default.button.withConfig({displayName:"jobs__StyledTabButton",componentId:"sc-390ce96e-2"})`
  ${({theme:e})=>e.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({isActive:e})=>e?"var(--green)":"var(--slate)"};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({theme:e})=>e.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`,f=r.default.div.withConfig({displayName:"jobs__StyledHighlight",componentId:"sc-390ce96e-3"})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({activeTabId:e})=>e} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({activeTabId:e})=>e} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`,p=r.default.div.withConfig({displayName:"jobs__StyledTabPanels",componentId:"sc-390ce96e-4"})`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`,h=r.default.div.withConfig({displayName:"jobs__StyledTabPanel",componentId:"sc-390ce96e-5"})`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({theme:e})=>e.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;e.s(["default",0,({data:e=[]})=>{let[r,m]=(0,i.useState)(0),[g,x]=(0,i.useState)(null),v=(0,i.useRef)([]),b=(0,i.useRef)(null),y=(0,l.usePrefersReducedMotion)();return(0,i.useEffect)(()=>{!y&&b.current&&s.default&&s.default.reveal(b.current,a.config.srConfig())},[y]),(0,i.useEffect)(()=>{v.current[g||0]?v.current[g||0]?.focus():((g||0)>=v.current.length&&x(0),0>(g||0)&&x(v.current.length-1))},[g]),(0,t.jsxs)(d,{id:"jobs",ref:b,children:[(0,t.jsx)("h2",{className:"numbered-heading",children:"Where I've Worked"}),(0,t.jsxs)("div",{className:"inner",children:[(0,t.jsxs)(c,{role:"tablist","aria-label":"Job tabs",onKeyDown:e=>{switch(e.key){case o.KEY_CODES.ARROW_UP:e.preventDefault(),x((g||0)-1);break;case o.KEY_CODES.ARROW_DOWN:e.preventDefault(),x((g||0)+1)}},children:[e&&e.map(({frontmatter:e},i)=>{let{company:n}=e;return(0,t.jsx)(u,{isActive:r===i,onClick:()=>m(i),ref:e=>{v.current[i]=e},id:`tab-${i}`,role:"tab",tabIndex:r===i?0:-1,"aria-selected":r===i,"aria-controls":`panel-${i}`,children:(0,t.jsx)("span",{children:n})},i)}),(0,t.jsx)(f,{activeTabId:r})]}),(0,t.jsx)(p,{children:e&&e.map(({frontmatter:e,html:a},o)=>{let{title:s,url:l,company:d,range:c,location:u}=e,f=i.default.useRef(null);return(0,t.jsx)(n.CSSTransition,{nodeRef:f,in:r===o,timeout:250,classNames:"fade",children:(0,t.jsxs)(h,{ref:f,id:`panel-${o}`,role:"tabpanel",tabIndex:r===o?0:-1,"aria-labelledby":`tab-${o}`,"aria-hidden":r!==o,hidden:r!==o,children:[(0,t.jsxs)("h3",{children:[(0,t.jsx)("span",{children:s}),(0,t.jsxs)("span",{className:"company",children:[" @ ",(0,t.jsx)("a",{href:l,className:"inline-link",children:d})]})]}),u&&(0,t.jsx)("p",{className:"range",children:u}),(0,t.jsx)("p",{className:"range",children:c}),(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})]})},o)})})]})]})}])},80591,e=>{"use strict";var t=e.i(78042),i=e.i(45456),n=e.i(61450),r=e.i(5420),a=e.i(16220),o=e.i(80926);e.i(56669);var s=e.i(94661);e.i(64485);var l=e.i(90068);let d=r.default.ul.withConfig({displayName:"competitions__StyledProjectsGrid",componentId:"sc-506f9b21-0"})`
  ${({theme:e})=>e.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`,c=r.default.li.withConfig({displayName:"competitions__StyledProject",componentId:"sc-506f9b21-1"})`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({theme:e})=>e.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({theme:e})=>e.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({theme:e})=>e.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({theme:e})=>e.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .cta {
      ${({theme:e})=>e.mixins.smallButton};
      margin: 10px;
    }
  }

  .project-image {
    ${({theme:e})=>e.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`;e.s(["default",0,({data:e=[]})=>{let r=e.map(e=>({node:{frontmatter:e.frontmatter,html:e.html}})),u=(0,i.useRef)(null),f=(0,i.useRef)([]),p=(0,l.usePrefersReducedMotion)();return((0,i.useEffect)(()=>{p||(u.current&&a.default&&a.default.reveal(u.current,o.config.srConfig()),f.current.forEach((e,t)=>{e&&a.default&&a.default.reveal(e,o.config.srConfig(100*t))}))},[p]),0===r.length)?null:(0,t.jsxs)("section",{id:"competitions",style:{margin:"0 auto",maxWidth:"1000px"},children:[(0,t.jsx)("h2",{className:"numbered-heading",ref:u,children:"Some Competitions I've Cracked"}),(0,t.jsx)(d,{children:r&&r.map(({node:e},i)=>{let{frontmatter:r,html:a}=e,{external:o,title:l,tech:d,github:u,cover:p,position:h}=r;return(0,t.jsxs)(c,{ref:e=>{f.current[i]=e},children:[(0,t.jsx)("div",{className:"project-content",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"project-overline",children:h}),(0,t.jsx)("h3",{className:"project-title",children:(0,t.jsx)("a",{href:o,children:l})}),(0,t.jsx)("div",{className:"project-description",dangerouslySetInnerHTML:{__html:a}}),d&&d.length>0&&(0,t.jsx)("ul",{className:"project-tech-list",children:d.map((e,i)=>(0,t.jsx)("li",{children:e},i))}),(0,t.jsxs)("div",{className:"project-links",children:[u&&(0,t.jsx)("a",{href:u,"aria-label":"GitHub Link",children:(0,t.jsx)(s.Icon,{name:"GitHub"})}),o&&(0,t.jsx)("a",{href:o,"aria-label":"External Link",className:"external",children:(0,t.jsx)(s.Icon,{name:"External"})})]})]})}),(0,t.jsx)("div",{className:"project-image",children:(0,t.jsx)("a",{href:o||u||"#",children:p&&(0,t.jsx)(n.default,{src:p.startsWith("/")?p:`/images/${p.replace("./","")}`,alt:l,className:"img",width:700,height:400,style:{borderRadius:"var(--border-radius)"}})})})]},i)})})]})}])},57286,e=>{"use strict";var t=e.i(78042),i=e.i(45456),n=e.i(5420),r=e.i(80926),a=e.i(16220);e.i(64485);var o=e.i(90068);let s=n.default.section.withConfig({displayName:"contact__StyledContactSection",componentId:"sc-d1f8579b-0"})`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({theme:e})=>e.mixins.bigButton};
    margin-top: 50px;
  }
`;e.s(["default",0,()=>{let e=(0,i.useRef)(null),n=(0,o.usePrefersReducedMotion)();return(0,i.useEffect)(()=>{!n&&e.current&&a.default&&a.default.reveal(e.current,r.config.srConfig())},[n]),(0,t.jsxs)(s,{id:"contact",ref:e,children:[(0,t.jsx)("h2",{className:"numbered-heading overline",children:"What's Next?"}),(0,t.jsx)("h2",{className:"title",children:"Get In Touch"}),(0,t.jsx)("p",{children:"I am passionate about continuing to grow and develop my skills in the field of machine learning and am open to discussing any potential projects, including open-source projects, or opportunities."}),(0,t.jsx)("a",{className:"email-link",href:`mailto:${r.config.email}`,children:"Say Hello"})]})}])},4715,e=>{"use strict";var t=e.i(78042),i=e.i(5420);let n=i.default.main.withConfig({displayName:"main-container__StyledMainContainer",componentId:"sc-95d8e0fa-0"})`
  counter-reset: section;
`;function r({children:e}){return(0,t.jsx)(n,{className:"fillHeight",children:e})}e.s(["default",()=>r])}]);