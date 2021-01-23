(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{64:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return u})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),a=(t(0),t(84)),u={id:"use-guard-hook",title:"useGuard Hook",sidebar_label:"useGuard Hook",slug:"/use-guard-hook"},c={unversionedId:"use-guard-hook",id:"use-guard-hook",isDocsHomePage:!1,title:"useGuard Hook",description:"The hook lets you do a permissions check in the frontend.",source:"@site/docs/use-guard-hook.md",slug:"/use-guard-hook",permalink:"/blitz-guard/docs/use-guard-hook",editUrl:"https://github.com/ntgussoni/blitz-guard/edit/main/docs/docs/use-guard-hook.md",version:"current",sidebar_label:"useGuard Hook",sidebar:"someSidebar",previous:{title:"Secure your endpoints",permalink:"/blitz-guard/docs/secure-your-endpoints"},next:{title:"Middleware",permalink:"/blitz-guard/docs/middleware"}},i=[],s={toc:i};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The hook lets you do a permissions check in the frontend."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import { useGuard } from "app/guard"\n\nconst [[canCreateComment, canDeleteComment], { isLoading }] = useCanCan([\n  ["create", "comment"],\n  ["delete", "comment" /* args */],\n])\n')))}l.isMDXComponent=!0},84:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=n,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?o.a.createElement(f,c(c({ref:r},s),{},{components:t})):o.a.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,u=new Array(a);u[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,u[1]=c;for(var s=2;s<a;s++)u[s]=t[s];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);