"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[8798],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(8168),o=(n(6540),n(5680));const a={title:"Socket.IO server for Deno",slug:"/socket-io-deno/",authors:"darrachequesne"},i=void 0,l={permalink:"/blog/socket-io-deno/",editUrl:"https://github.com/socketio/nhonvo.github.io/edit/main/blog/2022-09-13-deno.md",source:"@site/blog/2022-09-13-deno.md",title:"Socket.IO server for Deno",description:"Hello everyone!",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[],readingTime:.61,hasTruncateMarker:!1,authors:[{name:"Damien Arrachequesne",title:"Maintainer of Socket.IO",url:"https://github.com/darrachequesne",imageURL:"https://github.com/darrachequesne.png",key:"darrachequesne"}],frontMatter:{title:"Socket.IO server for Deno",slug:"/socket-io-deno/",authors:"darrachequesne"},prevItem:{title:"Redis Streams adapter",permalink:"/blog/socket-io-redis-streams-adapter/"},nextItem:{title:"Socket.IO 4.5.0",permalink:"/blog/socket-io-4-5-0/"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Hello everyone!"),(0,o.yg)("p",null,"I'm happy to announce that Socket.IO is now compatible with ",(0,o.yg)("a",{parentName:"p",href:"https://deno.land/"},"Deno"),", which is a runtime for JavaScript and TypeScript written in Rust."),(0,o.yg)("p",null,"Usage:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'import { serve } from "https://deno.land/std@0.150.0/http/server.ts";\nimport { Server } from "https://deno.land/x/socket_io@0.1.1/mod.ts";\n\nconst io = new Server();\n\nio.on("connection", (socket) => {\n  console.log(`socket ${socket.id} connected`);\n\n  socket.emit("hello", "world");\n\n  socket.on("disconnect", (reason) => {\n    console.log(`socket ${socket.id} disconnected due to ${reason}`);\n  });\n});\n\nawait serve(io.handler(), {\n  port: 3000,\n});\n')),(0,o.yg)("p",null,"And then run with:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"$ deno run --allow-net index.ts\n")),(0,o.yg)("p",null,"The API is very similar to the one exposed by the Node.js implementation."),(0,o.yg)("p",null,"Next steps:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"client implementation"),(0,o.yg)("li",{parentName:"ul"},"compatibility with the Node.js ecosystem (msgpack parser, adapters, admin UI, ...)")),(0,o.yg)("p",null,"Feedback is welcome!"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Source code: ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-deno"},"https://github.com/socketio/socket.io-deno")),(0,o.yg)("li",{parentName:"ul"},"Module: ",(0,o.yg)("a",{parentName:"li",href:"https://deno.land/x/socket_io"},"https://deno.land/x/socket_io"))))}m.isMDXComponent=!0}}]);