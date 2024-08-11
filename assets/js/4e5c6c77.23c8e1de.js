"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[1361],{5680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>m});var t=r(6540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),g=o,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return r?t.createElement(m,a(a({ref:n},p),{},{components:r})):t.createElement(m,a({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5735:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(8168),o=(r(6540),r(5680));const i={title:"Handling CORS",sidebar_position:6,slug:"/handling-cors/"},a=void 0,l={unversionedId:"categories/Server/handling-cors",id:"version-2.x/categories/Server/handling-cors",title:"Handling CORS",description:"Configuration",source:"@site/versioned_docs/version-2.x/categories/02-Server/handling-cors.md",sourceDirName:"categories/02-Server",slug:"/handling-cors/",permalink:"/docs/v2/handling-cors/",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/versioned_docs/version-2.x/categories/02-Server/handling-cors.md",tags:[],version:"2.x",lastUpdatedAt:1631600541,formattedLastUpdatedAt:"Sep 14, 2021",sidebarPosition:6,frontMatter:{title:"Handling CORS",sidebar_position:6,slug:"/handling-cors/"},sidebar:"version-2.x/sidebar",previous:{title:"Using multiple nodes",permalink:"/docs/v2/using-multiple-nodes/"},next:{title:"Installation",permalink:"/docs/v2/client-installation/"}},s={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...r}=e;return(0,o.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"configuration"},"Configuration"),(0,o.yg)("p",null,"As of Socket.IO v2, the server will automatically add the necessary headers in order to support ",(0,o.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"Cross-Origin Resource Sharing")," (CORS)"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"origins")," option should be used to provide a list of authorized domains:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'const io = require("socket.io")(httpServer, {\n  origins: ["https://example.com"]\n});\n')),(0,o.yg)("p",null,"Please note that by default, ",(0,o.yg)("strong",{parentName:"p"},"ALL")," domains are authorized. You should explicitly allow/disallow cross-origin requests in order to keep your application secure:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"without CORS (server and client are served from the same domain):")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'const io = require("socket.io")(httpServer, {\n  allowRequest: (req, callback) => {\n    callback(null, req.headers.origin === undefined); // cross-origin requests will not be allowed\n  }\n});\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"with CORS (server and client are served from distinct domains):")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'io.origins(["http://localhost:3000"]); // for local development\nio.origins(["https://example.com"]);\n')),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"handlePreflightRequest")," option can be used to customize the ",(0,o.yg)("inlineCode",{parentName:"p"},"Access-Control-Allow-xxx")," headers sent in response to the preflight request."),(0,o.yg)("p",null,"Example with cookies (",(0,o.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials"},"withCredentials"),") and additional headers:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'// server-side\nconst io = require("socket.io")(httpServer, {\n  origins: ["https://example.com"],\n\n  handlePreflightRequest: (req, res) => {\n    res.writeHead(200, {\n      "Access-Control-Allow-Origin": "https://example.com",\n      "Access-Control-Allow-Methods": "GET,POST",\n      "Access-Control-Allow-Headers": "my-custom-header",\n      "Access-Control-Allow-Credentials": true\n    });\n    res.end();\n  }\n});\n\n// client-side\nconst io = require("socket.io-client");\nconst socket = io("https://api.example.com", {\n  withCredentials: true,\n  transportOptions: {\n    polling: {\n      extraHeaders: {\n        "my-custom-header": "abcd"\n      }\n    }\n  }\n});\n')),(0,o.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at xxx/socket.io/?EIO=3&transport=polling&t=NMnp2WI. (Reason: CORS header \u2018Access-Control-Allow-Origin\u2019 missing).\n")),(0,o.yg)("p",null,"If you have properly configured your server (see ",(0,o.yg)("a",{parentName:"p",href:"#Configuration"},"above"),"), this could mean that your browser wasn't able to reach the Socket.IO server."),(0,o.yg)("p",null,"The following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'curl "https://api.example.com/socket.io/?EIO=3&transport=polling"\n')),(0,o.yg)("p",null,"should return something like:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'96:0{"sid":"Lbo5JLzTotvW3g2LAAAA","upgrades":["websocket"],"pingInterval":25000,"pingTimeout":5000}\n')),(0,o.yg)("p",null,"If that's not the case, please check that your server is listening and is actually reachable on the given port."))}d.isMDXComponent=!0}}]);