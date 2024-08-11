"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[8728],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={title:"Socket.IO 4.4.0",slug:"/socket-io-4-4-0/",authors:"darrachequesne"},i=void 0,l={permalink:"/blog/socket-io-4-4-0/",editUrl:"https://github.com/socketio/nhonvo.github.io/edit/main/blog/2021-11-18-4.4.0.md",source:"@site/blog/2021-11-18-4.4.0.md",title:"Socket.IO 4.4.0",description:"Hello everyone!",date:"2021-11-18T00:00:00.000Z",formattedDate:"November 18, 2021",tags:[],readingTime:1.635,hasTruncateMarker:!0,authors:[{name:"Damien Arrachequesne",title:"Maintainer of Socket.IO",url:"https://github.com/darrachequesne",imageURL:"https://github.com/darrachequesne.png",key:"darrachequesne"}],frontMatter:{title:"Socket.IO 4.4.0",slug:"/socket-io-4-4-0/",authors:"darrachequesne"},prevItem:{title:"Socket.IO 4.5.0",permalink:"/blog/socket-io-4-5-0/"},nextItem:{title:"Socket.IO 4.3.0",permalink:"/blog/socket-io-4-3-0/"}},s={authorsImageUrls:[void 0]},c=[{value:"Support for \xb5WebSockets.js",id:"support-for-\xb5websocketsjs",level:2},{value:"Emit with timeout",id:"emit-with-timeout",level:2},{value:"<code>socket.data</code> can now be typed",id:"socketdata-can-now-be-typed",level:2},{value:"Links",id:"links",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Hello everyone!"),(0,a.yg)("p",null,"We have just published a new minor version of Socket.IO: ",(0,a.yg)("inlineCode",{parentName:"p"},"4.4.0")),(0,a.yg)("p",null,"After a big focus on the client in the ",(0,a.yg)("a",{parentName:"p",href:"/blog/socket-io-4-3-0/"},"latest release"),", this release is more oriented towards the server."),(0,a.yg)("h2",{id:"support-for-\xb5websocketsjs"},"Support for \xb5WebSockets.js"),(0,a.yg)("p",null,"Why should one choose between performance and reliability? Starting with ",(0,a.yg)("inlineCode",{parentName:"p"},"socket.io@4.4.0"),", you can now use the HTTP/WebSocket server provided by the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/uNetworking/uWebSockets.js"},(0,a.yg)("inlineCode",{parentName:"a"},"\xb5WebSockets.js"))," package:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const { App } = require("uWebSockets.js");\nconst { Server } = require("socket.io");\n\nconst app = new App();\nconst io = new Server();\n\nio.attachApp(app);\n\nio.on("connection", (socket) => {\n  // ...\n});\n\napp.listen(3000, (token) => {\n  if (!token) {\n    console.warn("port already in use");\n  }\n});\n')),(0,a.yg)("p",null,"It acts as a replacement for both the default Node.js HTTP server and the WebSocket server provided by the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/websockets/ws"},(0,a.yg)("inlineCode",{parentName:"a"},"ws"))," package, and should improve the memory footprint and the latency of your application. Benchmarks coming soon!"),(0,a.yg)("h2",{id:"emit-with-timeout"},"Emit with timeout"),(0,a.yg)("p",null,"There is a new ",(0,a.yg)("inlineCode",{parentName:"p"},"socket.timeout()")," method available on both sides:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'socket.timeout(5000).emit("my-event", (err) => {\n  if (err) {\n    // the other side did not acknowledge the event in the given delay\n  }\n});\n')),(0,a.yg)("h2",{id:"socketdata-can-now-be-typed"},(0,a.yg)("inlineCode",{parentName:"h2"},"socket.data")," can now be typed"),(0,a.yg)("p",null,"For TypeScript users, the ",(0,a.yg)("inlineCode",{parentName:"p"},"socket.data")," can now be typed:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'interface SocketData {\n  name: string;\n  age: number;\n}\n\nconst io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>();\n\nio.on("connection", (socket) => {\n  socket.data.name = "john";\n  socket.data.age = 42;\n});\n')),(0,a.yg)("p",null,"This release also includes some bug fixes, please see the complete diff below."),(0,a.yg)("h2",{id:"links"},"Links"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Server: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io/releases/tag/4.4.0"},"GitHub release")," / ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io/compare/4.3.2...4.4.0"},"Diff")," / ",(0,a.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/socket.io/v/4.4.0"},"npm")),(0,a.yg)("li",{parentName:"ul"},"Client: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-client/releases/tag/4.4.0"},"GitHub release")," / ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-client/compare/4.3.2...4.4.0"},"Diff")," / ",(0,a.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/socket.io-client/v/4.4.0"},"npm"))),(0,a.yg)("p",null,"Size of the bundles:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null},"min"),(0,a.yg)("th",{parentName:"tr",align:null},"min+gzip"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"socket.io.min.js"),(0,a.yg)("td",{parentName:"tr",align:null},"40.4 KB (+ 0.4 KB \u2b06\ufe0f)"),(0,a.yg)("td",{parentName:"tr",align:null},"13.1 KB (+ 0.1 KB \u2b06\ufe0f)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"socket.io.msgpack.min.js"),(0,a.yg)("td",{parentName:"tr",align:null},"45.6 KB (+ 0.4 KB \u2b06\ufe0f)"),(0,a.yg)("td",{parentName:"tr",align:null},"14.2 KB (-)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"socket.io.esm.min.js"),(0,a.yg)("td",{parentName:"tr",align:null},"33.1 KB (+ 0.3 KB \u2b06\ufe0f)"),(0,a.yg)("td",{parentName:"tr",align:null},"11.3 KB (+ 0.2 KB \u2b06\ufe0f)")))),(0,a.yg)("p",null,"That's all for this release, thanks for reading!"))}m.isMDXComponent=!0}}]);