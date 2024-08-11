"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[2554],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),g=o,y=s["".concat(c,".").concat(g)]||s[g]||m[g]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(8168),o=(r(6540),r(5680));const a={title:"Socket.IO 1.4.4",slug:"/socket-io-1-4-4/",authors:"rauchg"},i=void 0,l={permalink:"/blog/socket-io-1-4-4/",editUrl:"https://github.com/socketio/nhonvo.github.io/edit/main/blog/2016-01-11-1.4.4.md",source:"@site/blog/2016-01-11-1.4.4.md",title:"Socket.IO 1.4.4",description:"We just published two fixes for socket.io-client:",date:"2016-01-11T00:00:00.000Z",formattedDate:"January 11, 2016",tags:[],readingTime:.295,hasTruncateMarker:!0,authors:[{name:"Guillermo Rauch",title:"Maintainer of Socket.IO",url:"https://twitter.com/rauchg",imageURL:"https://github.com/rauchg.png",key:"rauchg"}],frontMatter:{title:"Socket.IO 1.4.4",slug:"/socket-io-1-4-4/",authors:"rauchg"},prevItem:{title:"Socket.IO 1.4.5",permalink:"/blog/socket-io-1-4-5/"},nextItem:{title:"Socket.IO 1.4.1, 1.4.2 and 1.4.3",permalink:"/blog/socket-io-1-4-1-1-4-2-and-1-4-3/"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(s,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"We just published two fixes for ",(0,o.yg)("inlineCode",{parentName:"p"},"socket.io-client"),":"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Building with ",(0,o.yg)("inlineCode",{parentName:"p"},"browserify")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"webpack")," is now completely straightforward. No need to ",(0,o.yg)("inlineCode",{parentName:"p"},"exclude/ignore")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"noParse/externals")," the ",(0,o.yg)("inlineCode",{parentName:"p"},"ws")," module.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Improved the JSONP transport when ",(0,o.yg)("inlineCode",{parentName:"p"},"socket.io-client")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"engine.io-client")," are lazily evaluated or the ",(0,o.yg)("inlineCode",{parentName:"p"},"<script>")," tag that included them gets removed."))))}m.isMDXComponent=!0}}]);