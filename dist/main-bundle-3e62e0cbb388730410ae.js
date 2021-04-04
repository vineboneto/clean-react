/*! For license information please see main-bundle-3e62e0cbb388730410ae.js.LICENSE.txt */
(()=>{var e={679:(e,t,n)=>{"use strict";var r=n(864),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return r.isMemo(e)?i:s[e.$$typeof]||a}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=i;var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(f){var a=m(n);a&&a!==f&&e(t,a,r)}var i=u(n);d&&(i=i.concat(d(n)));for(var s=c(t),h=c(n),A=0;A<i.length;++A){var g=i[A];if(!(o[g]||r&&r[g]||h&&h[g]||s&&s[g])){var y=p(n,g);try{l(t,g,y)}catch(e){}}}}return t}},703:(e,t,n)=>{"use strict";var r=n(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},921:(e,t)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,f=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,y=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,E=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case d:case o:case s:case i:case m:return e;default:switch(e=e&&e.$$typeof){case l:case p:case A:case h:case c:return e;default:return t}}case a:return t}}}function M(e){return w(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=c,t.Element=r,t.ForwardRef=p,t.Fragment=o,t.Lazy=A,t.Memo=h,t.Portal=a,t.Profiler=s,t.StrictMode=i,t.Suspense=m,t.isAsyncMode=function(e){return M(e)||w(e)===u},t.isConcurrentMode=M,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===A},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===s||e===i||e===m||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===A||e.$$typeof===h||e.$$typeof===c||e.$$typeof===l||e.$$typeof===p||e.$$typeof===y||e.$$typeof===v||e.$$typeof===E||e.$$typeof===g)},t.typeOf=w},864:(e,t,n)=>{"use strict";e.exports=n(921)},585:e=>{e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},658:(e,t,n)=>{var r=n(585);e.exports=function e(t,n,a){return r(n)||(a=n||a,n=[]),a=a||{},t instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(t,n):r(t)?function(t,n,r){for(var a=[],o=0;o<t.length;o++)a.push(e(t[o],n,r).source);return u(new RegExp("(?:"+a.join("|")+")",d(r)),n)}(t,n,a):function(e,t,n){return p(o(e,n),t,n)}(t,n,a)},e.exports.parse=o,e.exports.compile=function(e,t){return s(o(e,t),t)},e.exports.tokensToFunction=s,e.exports.tokensToRegExp=p;var a=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function o(e,t){for(var n,r=[],o=0,i=0,s="",u=t&&t.delimiter||"/";null!=(n=a.exec(e));){var d=n[0],p=n[1],m=n.index;if(s+=e.slice(i,m),i=m+d.length,p)s+=p[1];else{var f=e[i],h=n[2],A=n[3],g=n[4],y=n[5],v=n[6],E=n[7];s&&(r.push(s),s="");var w=null!=h&&null!=f&&f!==h,M="+"===v||"*"===v,C="?"===v||"*"===v,N=n[2]||u,b=g||y;r.push({name:A||o++,prefix:h||"",delimiter:N,optional:C,repeat:M,partial:w,asterisk:!!E,pattern:b?l(b):E?".*":"[^"+c(N)+"]+?"})}}return i<e.length&&(s+=e.substr(i)),s&&r.push(s),r}function i(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function s(e,t){for(var n=new Array(e.length),a=0;a<e.length;a++)"object"==typeof e[a]&&(n[a]=new RegExp("^(?:"+e[a].pattern+")$",d(t)));return function(t,a){for(var o="",s=t||{},c=(a||{}).pretty?i:encodeURIComponent,l=0;l<e.length;l++){var u=e[l];if("string"!=typeof u){var d,p=s[u.name];if(null==p){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(r(p)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var m=0;m<p.length;m++){if(d=c(p[m]),!n[l].test(d))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(d)+"`");o+=(0===m?u.prefix:u.delimiter)+d}}else{if(d=u.asterisk?encodeURI(p).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):c(p),!n[l].test(d))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+d+'"');o+=u.prefix+d}}else o+=u}return o}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function d(e){return e&&e.sensitive?"":"i"}function p(e,t,n){r(t)||(n=t||n,t=[]);for(var a=(n=n||{}).strict,o=!1!==n.end,i="",s=0;s<e.length;s++){var l=e[s];if("string"==typeof l)i+=c(l);else{var p=c(l.prefix),m="(?:"+l.pattern+")";t.push(l),l.repeat&&(m+="(?:"+p+m+")*"),i+=m=l.optional?l.partial?p+"("+m+")?":"(?:"+p+"("+m+"))?":p+"("+m+")"}}var f=c(n.delimiter||"/"),h=i.slice(-f.length)===f;return a||(i=(h?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),i+=o?"$":a&&h?"":"(?="+f+"|$)",u(new RegExp("^"+i,d(n)),t)}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=React;var t=n.n(e);const r=ReactDOM;var a=n.n(r);const o=ReactRouterDOM,i=t().memo((()=>t().createElement("footer",{className:"_1TqRhEujVCL11nQVYVTdPj"}))),s={spinner:"fZ6VVQuYWXC6Dh9NXoKCT",spinner1:"_2Gz-wzZ844cqkRopTLaG_f",spinner2:"ACzKRw4thx_F2LaL6KABQ",spinner3:"_24tPJ_vXH-2EoLKG6LyJns"},c=e=>t().createElement("div",{"data-testid":"spinner",className:[s.spinner,e.className].join(" ")},t().createElement("div",null),t().createElement("div",null),t().createElement("div",null),t().createElement("div",null)),l=(0,e.createContext)(null),u=(0,e.createContext)(null),d=()=>{const{state:n}=(0,e.useContext)(l);return t().createElement("div",{"data-testid":"error-wrap",className:"_3aUzkJWYYHG8f0rnE82f3M"},n.isLoading&&t().createElement(c,{className:"_2-IzTwVf4YkQhnltS3gHwr"}),n.mainError&&t().createElement("span",{"data-testid":"main-error",className:"T29K9fY7yNGVsOmx34nIM"},n.mainError))},p=n=>{const{state:r,setState:a}=(0,e.useContext)(l),o=r[`${n.name}Error`],i=(0,e.useRef)();return t().createElement("div",{className:"eWr8uqpQ3PPe2SvbfpPiN","data-status":o?"invalid":"valid","data-testid":`${n.name}-wrap`},t().createElement("input",Object.assign({},n,{ref:i,title:o,placeholder:" ","data-testid":n.name,readOnly:!0,onFocus:e=>{e.target.readOnly=!1},onChange:e=>a(Object.assign(Object.assign({},r),{[e.target.name]:e.target.value})),autoComplete:"off"})),t().createElement("label",{"data-testid":`${n.name}-label`,onClick:()=>{i.current.focus()},title:o},n.placeholder))},m=()=>t().createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTIwcHgiIGhlaWdodD0iODdweCIgdmlld0JveD0iMCAwIDEyMCA4NyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPkdyb3VwIENvcHk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTG9naW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NTIuMDAwMDAwLCAtNzkuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ1Mi4wMDAwMDAsIDc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ2LjQ2NDY0NjUsLTIuMTMxNjI4MjFlLTE0IEw3OC4wNjE3Mzg2LC0yLjEzMTYyODIxZS0xNCBDMTAzLjkwMzAwNCwtMi4xMzE2MjgyMWUtMTQgMTE5LjE5MTkxOSwxNS43MTIyMTU3IDExOS4xOTE5MTksNDMuMjIzNjQzMiBDMTE5LjE5MTkxOSw3MC43MzUwNzA3IDEwMy45NjI5Niw4Ni44Njg2ODY5IDc4LjA2MTczODYsODYuODY4Njg2OSBMNDYuNDY0NjQ2NSw4Ni44Njg2ODY5IEw0Ni40NjQ2NDY1LC0yLjEzMTYyODIxZS0xNCBaIE02MS45MzM0MzE2LDEzLjEyMzYxMzEgTDYxLjkzMzQzMTYsNzMuNzQ1MDczNyBMNzYuNDQyOTEyMiw3My43NDUwNzM3IEM5My44MzAzMDY0LDczLjc0NTA3MzcgMTAzLjQyMzM1MSw2My4wODk2NjMxIDEwMy40MjMzNTEsNDMuMjgzODQzMyBDMTAzLjQyMzM1MSwyMy44MzkyMjM4IDkzLjcxMDM5MzMsMTMuMTIzNjEzMSA3Ni40NDI5MTIyLDEzLjEyMzYxMzEgTDYxLjkzMzQzMTYsMTMuMTIzNjEzMSBaIiBpZD0iRCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ1LjE0MTA2NTgsODYuODY4Njg2OSBMNDUuMTQxMDY1OCw3MC40MzQwNzA0IEwwLDcwLjQzNDA3MDQgTDAsNTcuMDY5NjU3MSBDNy44MzY5OTA2LDQyLjg2MjQ0MjkgMTcuOTMxMDM0NSwyNy4zOTEwMjc0IDM3LjU1NDg1ODksLTIuMTMxNjI4MjFlLTE0IEw2MC41NjQyNjMzLC0yLjEzMTYyODIxZS0xNCBMNjAuNTY0MjYzMyw1Ny43MzE4NTc3IEw3Mi43MjcyNzI3LDU3LjczMTg1NzcgTDcyLjcyNzI3MjcsNzAuNDM0MDcwNCBMNjAuNTY0MjYzMyw3MC40MzQwNzA0IEw2MC41NjQyNjMzLDg2Ljg2ODY4NjkgTDQ1LjE0MTA2NTgsODYuODY4Njg2OSBaIE0xNC42NzA4NDY0LDU3LjY3MTY1NzcgTDE0LjY3MDg0NjQsNTguMDkzMDU4MSBMNDUuMzkxODQ5NSw1OC4wOTMwNTgxIEw0NS4zOTE4NDk1LDExLjQ5ODIxMTUgTDQ1LjE0MTA2NTgsMTEuNDk4MjExNSBDMzAuNTMyOTE1NCwzMS44NDU4MzE4IDIxLjg4MDg3NzcsNDQuNjY4NDQ0NyAxNC42NzA4NDY0LDU3LjY3MTY1NzcgWiIgaWQ9IjQiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",alt:"Logo"}),f=t().memo((()=>t().createElement("header",{className:"_2jDTWfn539Ivape5tRftUJ"},t().createElement(m,null),t().createElement("h1",null,"4Dev - Enquetes para Programadores")))),h=({text:n})=>{const{state:r}=(0,e.useContext)(l);return t().createElement("button",{"data-testid":"submit",disabled:r.isFormInvalid,type:"submit"},n)};class A extends Error{constructor(){super("Credenciais inválidas"),this.name="InvalidCredentialError"}}class g extends Error{constructor(){super("Algo de errado aconteceu. Tente novamente mais tarde"),this.name="UnexpectedError"}}class y extends Error{constructor(){super("Esse e-mail já está em uso"),this.name="EmailInUseError"}}class v extends Error{constructor(){super("Acesso negado!"),this.name="AccessDenied"}}const E=()=>{const t=(0,o.useHistory)(),{setCurrentAccount:n}=(0,e.useContext)(u);return()=>{n(void 0),t.replace("/login")}},w=(0,e.memo)((()=>{const n=E(),{getCurrentAccount:r}=(0,e.useContext)(u);return t().createElement("header",{className:"_2rBF6gRvmr0ba1vNrt8hjx"},t().createElement("div",{className:"_3taVrsm3p09FNaK6SIa0vi"},t().createElement(m,null),t().createElement("div",{className:"_1B01c4_iDZ_ISfa6VTJovC"},t().createElement("span",{"data-testid":"username"},r().name),t().createElement("a",{"data-testid":"logout",href:"#",onClick:e=>{e.preventDefault(),n()}},"Sair"))))}));function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,M(e,t)}var N=n(697),b=n.n(N);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e){return"/"===e.charAt(0)}function D(e,t){for(var n=t,r=n+1,a=e.length;r<a;n+=1,r+=1)e[n]=e[r];e.pop()}function x(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}const T=function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every((function(t,r){return e(t,n[r])}));if("object"==typeof t||"object"==typeof n){var r=x(t),a=x(n);return r!==t||a!==n?e(r,a):Object.keys(Object.assign({},t,n)).every((function(r){return e(t[r],n[r])}))}return!1};function O(e,t,n,r){var a;"string"==typeof e?(a=function(e){var t=e||"/",n="",r="",a=t.indexOf("#");-1!==a&&(r=t.substr(a),t=t.substr(0,a));var o=t.indexOf("?");return-1!==o&&(n=t.substr(o),t=t.substr(0,o)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(a=j({},e)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(a.key=n),r?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],a=t&&t.split("/")||[],o=e&&I(e),i=t&&I(t),s=o||i;if(e&&I(e)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var c=a[a.length-1];n="."===c||".."===c||""===c}else n=!1;for(var l=0,u=a.length;u>=0;u--){var d=a[u];"."===d?D(a,u):".."===d?(D(a,u),l++):l&&(D(a,u),l--)}if(!s)for(;l--;l)a.unshift("..");!s||""===a[0]||a[0]&&I(a[0])||a.unshift("");var p=a.join("/");return n&&"/"!==p.substr(-1)&&(p+="/"),p}(a.pathname,r.pathname)):a.pathname=r.pathname:a.pathname||(a.pathname="/"),a}"undefined"==typeof window||!window.document||window.document.createElement;var S=1073741823,z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:{};function L(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}const P=t().createContext||function(t,n){var r,a,o,i="__create-react-context-"+((z[o="__global_unique_id__"]=(z[o]||0)+1)+"__"),s=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).emitter=L(t.props.value),t}C(t,e);var r=t.prototype;return r.getChildContext=function(){var e;return(e={})[i]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var t,r=this.props.value,a=e.value;((o=r)===(i=a)?0!==o||1/o==1/i:o!=o&&i!=i)?t=0:(t="function"==typeof n?n(r,a):S,0!=(t|=0)&&this.emitter.set(e.value,t))}var o,i},r.render=function(){return this.props.children},t}(e.Component);s.childContextTypes=((r={})[i]=b().object.isRequired,r);var c=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}C(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?S:t},r.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?S:e},r.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},r.getValue=function(){return this.context[i]?this.context[i].get():t},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(e.Component);return c.contextTypes=((a={})[i]=b().object,a),{Provider:s,Consumer:c}};const k=function(e,t){if(!e)throw new Error("Invariant failed")};var Y=n(658),Q=n.n(Y);n(864),n(679);var R=function(e){var t=P();return t.displayName="Router-History",t}(),B=function(e){var t=P();return t.displayName="Router",t}();t().Component;t().Component;var U=function(e){function t(){return e.apply(this,arguments)||this}C(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(e){this.props.onUpdate&&this.props.onUpdate.call(this,this,e)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},t}(t().Component),_={},Z=0;function W(e,t){return void 0===e&&(e="/"),void 0===t&&(t={}),"/"===e?e:function(e){if(_[e])return _[e];var t=Q().compile(e);return Z<1e4&&(_[e]=t,Z++),t}(e)(t,{pretty:!0})}function F(e){var n=e.computedMatch,r=e.to,a=e.push,o=void 0!==a&&a;return t().createElement(B.Consumer,null,(function(e){e||k(!1);var a=e.history,i=e.staticContext,s=o?a.push:a.replace,c=O(n?"string"==typeof r?W(r,n.params):j({},r,{pathname:W(r.pathname,n.params)}):r);return i?(s(c),null):t().createElement(U,{onMount:function(){s(c)},onUpdate:function(e,t){var n,r,a=O(t.to);n=a,r=j({},c,{key:a.key}),n.pathname===r.pathname&&n.search===r.search&&n.hash===r.hash&&n.key===r.key&&T(n.state,r.state)||s(c)},to:r})}))}var H={},V=0;function $(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,a=n.exact,o=void 0!==a&&a,i=n.strict,s=void 0!==i&&i,c=n.sensitive,l=void 0!==c&&c;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=H[n]||(H[n]={});if(r[e])return r[e];var a=[],o={regexp:Q()(e,a,t),keys:a};return V<1e4&&(r[e]=o,V++),o}(n,{end:o,strict:s,sensitive:l}),a=r.regexp,i=r.keys,c=a.exec(e);if(!c)return null;var u=c[0],d=c.slice(1),p=e===u;return o&&!p?null:{path:n,url:"/"===n&&""===u?"/":u,isExact:p,params:i.reduce((function(e,t,n){return e[t.name]=d[n],e}),{})}}),null)}var G=function(e){function n(){return e.apply(this,arguments)||this}return C(n,e),n.prototype.render=function(){var e=this;return t().createElement(B.Consumer,null,(function(n){n||k(!1);var r=e.props.location||n.location,a=j({},n,{location:r,match:e.props.computedMatch?e.props.computedMatch:e.props.path?$(r.pathname,e.props):n.match}),o=e.props,i=o.children,s=o.component,c=o.render;return Array.isArray(i)&&0===i.length&&(i=null),t().createElement(B.Provider,{value:a},a.match?i?"function"==typeof i?i(a):i:s?t().createElement(s,a):c?c(a):null:"function"==typeof i?i(a):null)}))},n}(t().Component);t().Component,t().Component;var K=t().useContext;const J=n=>{var r;const{getCurrentAccount:a}=(0,e.useContext)(u);return(null===(r=a())||void 0===r?void 0:r.accessToken)?t().createElement(G,Object.assign({},n)):t().createElement(G,Object.assign({},n,{component:()=>t().createElement(F,{to:"/login"})}))},X={iconWrap:"_2KFjeX8m8-uXbKAAJZPFGD",red:"_2d69lwXBmLFW_IUeA08Gvu",green:"UTI-CVjQA4ZdkYLgAvCmu"};var q;!function(e){e.thumbDown="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAEgAAAAA9nQVdAAAA70lEQVQ4Ea2RPQoCQQyFZ/w5g72lYOEVPIiV2IkIHmCvIZ5D77BgZWtrYWe1ICiuL8tEwjIZZmYNZCf7knyTzRrjrK7rAfwAr+AheyNZwiei98gNrBkISxYjz5KbZb0V4gXxlN8jzo+1tk91BOT6nhPmOFNg1Nb0UiCNxY0Uu8QW044BuMIZHs3DJzcra3/yOgem3UoT3pEcaQUh3TchAX9/KNTsy/mAtLebrzhXI+AqE/oQl55ErIfYxp5WothW71QyAJ0VWKG06DJAQ/jTA0yH0TUAzf4Gc8BFC5g3GcHI3IQvBy0asesDsB08CfYFB/44kX6+Hj8AAAAASUVORK5CYII=",e.thumbUp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAEgAAAAA9nQVdAAAA0klEQVQ4EWNgIAH8//+/AYhLSNCCWynUMCD1/zcQG+BWSYQMkmEgA0Egjght2JUANYO8iQ4MsasmIAo0BZthP4DirAS0YkrjMAzk0tOYqgmIADUVgnTiADPxakfStAWmECj2DkmcWOYjoEJPRpBqmEGMQABiI4vB5IikH1PbQAYmIm0mVtlLahu4nJpe/gf0hho1XbgVGKd3qWngRFBA4/LyX6AcKZZdBbpOB2QgLk1nQJIkgElwtaBEDAXIOUULKHYSiP/CJHHQX4Hic4CYBWYgADx8PyqFiuhJAAAAAElFTkSuQmCC"}(q||(q={}));const ee=({iconName:e,className:n})=>{const r=e===q.thumbDown?X.red:X.green;return t().createElement("div",{className:[X.iconWrap,r,n].join(" ")},t().createElement("img",{"data-testid":"icon",src:e,alt:"Like"}))};const te=({validation:n,authentication:r})=>{const{setCurrentAccount:a}=(0,e.useContext)(u),s=(0,o.useHistory)(),[c,m]=(0,e.useState)({isLoading:!1,isFormInvalid:!0,email:"",password:"",emailError:"",passwordError:"",mainError:""});(0,e.useEffect)((()=>{A("email")}),[c.email]),(0,e.useEffect)((()=>{A("password")}),[c.password]);const A=e=>{const{email:t,password:r}=c,a={email:t,password:r};m((t=>Object.assign(Object.assign({},t),{[`${e}Error`]:n.validate(e,a)}))),m((e=>Object.assign(Object.assign({},e),{isFormInvalid:!!e.emailError||!!e.passwordError})))};return t().createElement("div",{className:"_2cmpIIEse-5GyRx6OriuUf"},t().createElement(f,null),t().createElement(l.Provider,{value:{state:c,setState:m}},t().createElement("form",{"data-testid":"form",className:"eu5iQqEtujBgD57M3hb2a",onSubmit:e=>{return t=void 0,n=void 0,i=function*(){e.preventDefault();try{if(c.isLoading||c.isFormInvalid)return;m(Object.assign(Object.assign({},c),{isLoading:!0}));const e=yield r.auth({email:c.email,password:c.password});a(e),s.replace("/")}catch(e){m(Object.assign(Object.assign({},c),{isLoading:!1,mainError:e.message}))}},new((o=void 0)||(o=Promise))((function(e,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,s)}c((i=i.apply(t,n||[])).next())}));var t,n,o,i}},t().createElement("h2",null,"Login"),t().createElement(p,{type:"email",name:"email",placeholder:"Digite seu e-mail"}),t().createElement(p,{type:"password",name:"password",placeholder:"Digite a sua senha"}),t().createElement(h,{text:"Entrar"}),t().createElement(o.Link,{"data-testid":"signup-link",to:"/signup",className:"xlXIfXTszA7TUnup6Bres"},"Criar Conta"),t().createElement(d,null))),t().createElement(i,null))};const ne=({validation:n,addAccount:r})=>{const{setCurrentAccount:a}=(0,e.useContext)(u),s=K(R),[c,m]=(0,e.useState)({isLoading:!1,isFormInvalid:!0,name:"",nameError:"",email:"",emailError:"",password:"",passwordError:"",passwordConfirmation:"",passwordConfirmationError:"",mainError:""});(0,e.useEffect)((()=>{A("name")}),[c.name]),(0,e.useEffect)((()=>{A("email")}),[c.email]),(0,e.useEffect)((()=>{A("password")}),[c.password]),(0,e.useEffect)((()=>{A("passwordConfirmation")}),[c.passwordConfirmation]);const A=e=>{const{name:t,email:r,password:a,passwordConfirmation:o}=c,i={name:t,email:r,password:a,passwordConfirmation:o};m((t=>Object.assign(Object.assign({},t),{[`${e}Error`]:n.validate(e,i)}))),m((e=>Object.assign(Object.assign({},e),{isFormInvalid:!!(e.nameError||e.emailError||e.passwordError||e.passwordConfirmationError)})))};return t().createElement("div",{className:"_1uCLpAti3AczQoZ5uDy6_D"},t().createElement(f,null),t().createElement(l.Provider,{value:{state:c,setState:m}},t().createElement("form",{"data-testid":"form",className:"_3ZEa3BJsv-Le4WLGWZZYGc",onSubmit:e=>{return t=void 0,n=void 0,i=function*(){e.preventDefault();try{if(c.isLoading||c.isFormInvalid)return;m(Object.assign(Object.assign({},c),{isLoading:!0}));const e=yield r.add({name:c.name,email:c.email,password:c.password,passwordConfirmation:c.passwordConfirmation});a(e),s.replace("/")}catch(e){m(Object.assign(Object.assign({},c),{mainError:e.message,isLoading:!1}))}},new((o=void 0)||(o=Promise))((function(e,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,s)}c((i=i.apply(t,n||[])).next())}));var t,n,o,i}},t().createElement("h2",null,"Criar Conta 👀"),t().createElement(p,{type:"text",name:"name",placeholder:"Digite seu nome"}),t().createElement(p,{type:"email",name:"email",placeholder:"Digite seu e-mail"}),t().createElement(p,{type:"password",name:"password",placeholder:"Digite a sua senha"}),t().createElement(p,{type:"password",name:"passwordConfirmation",placeholder:"Repita sua senha"}),t().createElement(h,{text:"Cadastrar"}),t().createElement(o.Link,{"data-testid":"login-link",replace:!0,to:"/login",className:"_2XiA2og7pqJ4vTtu2iIMlq"},"Voltar Para Login"),t().createElement(d,null))),t().createElement(i,null))},re=({survey:e})=>{const n=e.didAnswer?q.thumbUp:q.thumbDown;return t().createElement("li",{className:"_1QCK6TfIHcDntVmWHGBAHe"},t().createElement("div",{className:"_1Ul5TldlHNj3AKtvwGvsYW"},t().createElement(ee,{className:"_1Eo9rCNPRvPVCzp1kBdJhV",iconName:n}),t().createElement("time",null,t().createElement("span",{"data-testid":"day",className:"_2aSjrmaF0uJ2uAEBdczJr0"},e.date.getDate().toString().padStart(2,"0")),t().createElement("span",{"data-testid":"month",className:"_1iSbvszdO-tFDjmpEStHn3"},e.date.toLocaleString("pt-BR",{month:"short"}).replace(".","")),t().createElement("span",{"data-testid":"year",className:"THiIbBZiuLNrxg1yJ5ago"},e.date.getFullYear())),t().createElement("p",{"data-testid":"question"},e.question)),t().createElement("footer",null,"Ver Resultado"))},ae="O30S3v7aLgXw1dYF9jdXX",oe=()=>t().createElement(t().Fragment,null,t().createElement("li",{className:ae}),t().createElement("li",{className:ae}),t().createElement("li",{className:ae}),t().createElement("li",{className:ae})),ie=(0,e.createContext)(null),se=()=>{const{state:n}=(0,e.useContext)(ie);return t().createElement("ul",{className:"_1Do1qw0Il0TW2MQeD_3dPY","data-testid":"survey-list"},n.surveys.length?n.surveys.map((e=>t().createElement(re,{key:e.id,survey:e}))):t().createElement(oe,null))},ce=()=>{const{state:n,setState:r}=(0,e.useContext)(ie);return t().createElement("div",{className:"ECnSHpg6u6vLPMbF0ahdd"},t().createElement("span",{"data-testid":"error"},n.error),t().createElement("button",{"data-testid":"reload",onClick:()=>{r({surveys:[],error:"",reload:!n.reload})}},"Tentar novamente"))},le=({loadSurveyList:n})=>{const r=(e=>{const t=E();return e=>{e instanceof v?t():(e=>{o(Object.assign(Object.assign({},a),{error:e.message}))})(e)}})(),[a,o]=(0,e.useState)({surveys:[],error:"",reload:!1});return(0,e.useEffect)((()=>{n.loadAll().then((e=>o(Object.assign(Object.assign({},a),{surveys:e})))).catch((e=>r(e)))}),[a.reload]),t().createElement("div",{className:"HDGl7oE10tRA3OKHhxlPD"},t().createElement(w,null),t().createElement("div",{className:"_256SniNc4GX-BEkqxQki8w"},t().createElement("h2",null,"Enquetes"),t().createElement(ie.Provider,{value:{state:a,setState:o}},a.error?t().createElement(ce,null):t().createElement(se,null))),t().createElement(i,null))};var ue;!function(e){e[e.noContent=201]="noContent",e[e.badRequest=400]="badRequest",e[e.unauthorized=401]="unauthorized",e[e.forbidden=403]="forbidden",e[e.ok=200]="ok",e[e.notFound=404]="notFound",e[e.serverError=500]="serverError"}(ue||(ue={}));class de{constructor(e,t){this.url=e,this.httpPostClient=t}auth(e){return t=this,n=void 0,a=function*(){const t=yield this.httpPostClient.post({url:this.url,body:e});switch(t.statusCode){case ue.ok:return t.body;case ue.unauthorized:throw new A;default:throw new g}},new((r=void 0)||(r=Promise))((function(e,o){function i(e){try{c(a.next(e))}catch(e){o(e)}}function s(e){try{c(a.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,s)}c((a=a.apply(t,n||[])).next())}));var t,n,r,a}}class pe{constructor(e,t){this.url=e,this.httpPostClient=t}add(e){return t=this,n=void 0,a=function*(){const t=yield this.httpPostClient.post({url:this.url,body:e});switch(t.statusCode){case ue.ok:return t.body;case ue.forbidden:throw new y;default:throw new g}},new((r=void 0)||(r=Promise))((function(e,o){function i(e){try{c(a.next(e))}catch(e){o(e)}}function s(e){try{c(a.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,s)}c((a=a.apply(t,n||[])).next())}));var t,n,r,a}}class me{constructor(e,t){this.url=e,this.httpGetClient=t}loadAll(){return e=this,t=void 0,r=function*(){const e=yield this.httpGetClient.get({url:this.url}),t=e.body||[];switch(e.statusCode){case ue.ok:return t.map((e=>Object.assign(e,{date:new Date(e.date)})));case ue.noContent:return[];case ue.forbidden:throw new v;default:throw new g}},new((n=void 0)||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}));var e,t,n,r}}const fe=axios;var he=n.n(fe),Ae=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))};class ge{post(e){return Ae(this,void 0,void 0,(function*(){let t;try{t=yield he().post(e.url,e.body)}catch(e){t=e.response}return this.adapt(t)}))}get(e){return Ae(this,void 0,void 0,(function*(){let t;try{t=yield he().get(e.url,{headers:e.headers})}catch(e){t=e.response}return this.adapt(t)}))}adapt(e){return{statusCode:e.status,body:e.data}}}const ye=()=>new ge,ve=e=>`https://fordevs.herokuapp.com/api${e}`;class Ee{set(e,t){t?localStorage.setItem(e,JSON.stringify(t)):localStorage.removeItem(e)}get(e){return JSON.parse(localStorage.getItem(e))}}const we=()=>new Ee;class Me{constructor(e,t){this.getStorage=e,this.httpGetClient=t}get(e){return t=this,n=void 0,a=function*(){const t=yield this.getStorage.get("account");return(null==t?void 0:t.accessToken)&&Object.assign(e,{headers:Object.assign(e.headers||{},{"x-access-token":t.accessToken})}),yield this.httpGetClient.get(e)},new((r=void 0)||(r=Promise))((function(e,o){function i(e){try{c(a.next(e))}catch(e){o(e)}}function s(e){try{c(a.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,s)}c((a=a.apply(t,n||[])).next())}));var t,n,r,a}}const Ce=()=>t().createElement(te,{authentication:new de(ve("/login"),ye()),validation:Se()});class Ne extends Error{constructor(){super("Campo obrigatório"),this.name="RequiredFieldError"}}class be extends Error{constructor(){super("Valor inválido"),this.name="InvalidFieldError"}}class je{constructor(e){this.field=e}validate(e){return e[this.field]?null:new Ne}}class Ie{constructor(e){this.field=e}validate(e){return!e[this.field]||/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e[this.field])?null:new be}}class De{constructor(e,t){this.field=e,this.minLength=t}validate(e){var t;return(null===(t=e[this.field])||void 0===t?void 0:t.length)<this.minLength?new be:null}}class xe{constructor(e){this.validators=e}static build(e){return new xe(e)}validate(e,t){const n=this.validators.filter((t=>t.field===e));for(const e of n){const n=e.validate(t);if(n)return n.message}}}class Te{constructor(e,t){this.field=e,this.fieldToCompare=t}validate(e){return e[this.field]!==e[this.fieldToCompare]?new be:null}}class Oe{constructor(e,t){this.fieldName=e,this.validations=t}static field(e){return new Oe(e,[])}required(){return this.validations.push(new je(this.fieldName)),this}email(){return this.validations.push(new Ie(this.fieldName)),this}min(e){return this.validations.push(new De(this.fieldName,e)),this}sameAs(e){return this.validations.push(new Te(this.fieldName,e)),this}build(){return this.validations}}const Se=()=>xe.build([...Oe.field("email").required().email().build(),...Oe.field("password").required().min(5).build()]),ze=()=>t().createElement(ne,{addAccount:new pe(ve("/signup"),ye()),validation:xe.build([...Oe.field("name").required().min(5).build(),...Oe.field("email").required().email().build(),...Oe.field("password").required().min(5).build(),...Oe.field("passwordConfirmation").required().sameAs("password").build()])}),Le=()=>t().createElement(le,{loadSurveyList:new me(ve("/surveys"),new Me(we(),ye()))}),Pe=e=>{we().set("account",e)},ke=()=>we().get("account");a().render(t().createElement((()=>t().createElement(u.Provider,{value:{setCurrentAccount:Pe,getCurrentAccount:ke}},t().createElement(o.BrowserRouter,null,t().createElement(o.Switch,null,t().createElement(o.Route,{path:"/login",exact:!0,component:Ce}),t().createElement(o.Route,{path:"/signup",exact:!0,component:ze}),t().createElement(J,{path:"/",exact:!0,component:Le}))))),null),document.getElementById("main"))})()})();