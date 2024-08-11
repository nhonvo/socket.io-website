"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[4961],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(8168),o=(n(6540),n(5680));const i={title:"Server Initialization",sidebar_label:"Initialization",sidebar_position:2,slug:"/server-initialization/"},a=void 0,s={unversionedId:"categories/Server/server-initialization",id:"version-2.x/categories/Server/server-initialization",title:"Server Initialization",description:"Once you have installed the Socket.IO server library, you can now init the server. The complete list of options can be found here.",source:"@site/versioned_docs/version-2.x/categories/02-Server/server-initialization.md",sourceDirName:"categories/02-Server",slug:"/server-initialization/",permalink:"/docs/v2/server-initialization/",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/versioned_docs/version-2.x/categories/02-Server/server-initialization.md",tags:[],version:"2.x",lastUpdatedAt:1674026091,formattedLastUpdatedAt:"Jan 18, 2023",sidebarPosition:2,frontMatter:{title:"Server Initialization",sidebar_label:"Initialization",sidebar_position:2,slug:"/server-initialization/"},sidebar:"version-2.x/sidebar",previous:{title:"Installation",permalink:"/docs/v2/server-installation/"},next:{title:"Rooms",permalink:"/docs/v2/rooms/"}},l={},p=[{value:"Syntax",id:"syntax",level:2},{value:"CommonJS",id:"commonjs",level:3},{value:"ES modules",id:"es-modules",level:3},{value:"TypeScript",id:"typescript",level:3},{value:"Initialization",id:"initialization",level:2},{value:"Standalone",id:"standalone",level:3},{value:"Attached to an existing HTTP server",id:"attached-to-an-existing-http-server",level:3},{value:"With Express",id:"with-express",level:3},{value:"With Koa",id:"with-koa",level:3},{value:"Notable options",id:"notable-options",level:2},{value:"<code>perMessageDeflate</code> option",id:"permessagedeflate-option",level:3},{value:"<code>maxHttpBufferSize</code> option",id:"maxhttpbuffersize-option",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Once you have ",(0,o.yg)("a",{parentName:"p",href:"/docs/v2/server-installation/"},"installed")," the Socket.IO server library, you can now init the server. The complete list of options can be found ",(0,o.yg)("a",{parentName:"p",href:"/docs/v2/server-api/#new-Server-httpServer-options"},"here"),"."),(0,o.yg)("h2",{id:"syntax"},"Syntax"),(0,o.yg)("h3",{id:"commonjs"},"CommonJS"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'const httpServer = require("http").createServer();\nconst io = require("socket.io")(httpServer, {\n  // ...\n});\n\nio.on("connection", (socket) => {\n  // ...\n});\n\nhttpServer.listen(3000);\n')),(0,o.yg)("h3",{id:"es-modules"},"ES modules"),(0,o.yg)("p",null,"Please see ",(0,o.yg)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_enabling"},"here")," for enabling ECMAScript modules in your Node.js project."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'import { createServer } from "http";\nimport Server from "socket.io";\n\nconst httpServer = createServer();\nconst io = new Server(httpServer, {\n  // ...\n});\n\nio.on("connection", (socket) => {\n  // ...\n});\n\nhttpServer.listen(3000);\n')),(0,o.yg)("h3",{id:"typescript"},"TypeScript"),(0,o.yg)("p",null,"First, you need to install the types: ",(0,o.yg)("inlineCode",{parentName:"p"},"npm i --save-dev @types/socket.io")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},'import { createServer } from "http";\nimport Server = require("socket.io");\nimport { Socket } from "socket.io";\n\nconst httpServer = createServer();\nconst io = new Server(httpServer, {\n  // ...\n});\n\nio.on("connection", (socket: Socket) => {\n  // ...\n});\n\nhttpServer.listen(3000);\n')),(0,o.yg)("h2",{id:"initialization"},"Initialization"),(0,o.yg)("h3",{id:"standalone"},"Standalone"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const options = { /* ... */ };\nconst io = require('socket.io')(options);\n\nio.on('connection', socket => { /* ... */ });\n\nio.listen(3000);\n")),(0,o.yg)("p",null,"You can also pass the port as the first argument:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const options = { /* ... */ };\nconst io = require('socket.io')(3000, options);\n\nio.on('connection', socket => { /* ... */ });\n")),(0,o.yg)("p",null,"This implicitly starts a Node.js ",(0,o.yg)("a",{parentName:"p",href:"https://nodejs.org/docs/latest/api/http.html#http_class_http_server"},"HTTP server"),", which can be accessed through ",(0,o.yg)("inlineCode",{parentName:"p"},"io.httpServer"),"."),(0,o.yg)("h3",{id:"attached-to-an-existing-http-server"},"Attached to an existing HTTP server"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const server = require('http').createServer();\nconst options = { /* ... */ };\nconst io = require('socket.io')(server, options);\n\nio.on('connection', socket => { /* ... */ });\n\nserver.listen(3000);\n")),(0,o.yg)("p",null,"With HTTPS:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nconst server = require('https').createServer({\n  key: fs.readFileSync('/tmp/key.pem'),\n  cert: fs.readFileSync('/tmp/cert.pem')\n});\nconst options = { /* ... */ };\nconst io = require('socket.io')(server, options);\n\nio.on('connection', socket => { /* ... */ });\n\nserver.listen(3000);\n")),(0,o.yg)("h3",{id:"with-express"},"With Express"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const app = require('express')();\nconst server = require('http').createServer(app);\nconst options = { /* ... */ };\nconst io = require('socket.io')(server, options);\n\nio.on('connection', socket => { /* ... */ });\n\nserver.listen(3000);\n")),(0,o.yg)("p",null,"More information ",(0,o.yg)("a",{parentName:"p",href:"http://expressjs.com/"},"here"),"."),(0,o.yg)("h3",{id:"with-koa"},"With Koa"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const app = require('koa')();\nconst server = require('http').createServer(app.callback());\nconst options = { /* ... */ };\nconst io = require('socket.io')(server, options);\n\nio.on('connection', socket => { /* ... */ });\n\nserver.listen(3000);\n")),(0,o.yg)("p",null,"More information ",(0,o.yg)("a",{parentName:"p",href:"https://koajs.com/"},"here"),"."),(0,o.yg)("h2",{id:"notable-options"},"Notable options"),(0,o.yg)("p",null,"The complete list of options can be found ",(0,o.yg)("a",{parentName:"p",href:"/docs/v2/server-api/#new-Server-httpServer-options"},"here"),". Here are those which you will most likely use:"),(0,o.yg)("h3",{id:"permessagedeflate-option"},(0,o.yg)("inlineCode",{parentName:"h3"},"perMessageDeflate")," option"),(0,o.yg)("p",null,"Default value: ",(0,o.yg)("inlineCode",{parentName:"p"},"false")),(0,o.yg)("p",null,"The WebSocket server provided by the ",(0,o.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/ws"},"ws")," package supports the ",(0,o.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7692"},"permessage-deflate extension"),", which enables the client and server to negotiate a compression algorithm and its parameters, and then selectively apply it to the data payloads of each WebSocket message."),(0,o.yg)("p",null,"Starting from Socket.IO v2.4.0 (and in v3), this extension is now disabled by default, because it adds a significant overhead in terms of performance and memory consumption (and the ws maintainers ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/websockets/ws#websocket-compression"},"suggest")," to only enable it if it is really needed)."),(0,o.yg)("p",null,"For previous versions, you can disable it with:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const io = require('socket.io')({\n  perMessageDeflate: false\n});\n")),(0,o.yg)("h3",{id:"maxhttpbuffersize-option"},(0,o.yg)("inlineCode",{parentName:"h3"},"maxHttpBufferSize")," option"),(0,o.yg)("p",null,"Default value: ",(0,o.yg)("inlineCode",{parentName:"p"},"1e6")),(0,o.yg)("p",null,"This defines how many bytes a single message can be, before closing the socket. It defaults to ",(0,o.yg)("inlineCode",{parentName:"p"},"1e6")," (1MB). You may increase or decrease this value depending on your needs."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const io = require('socket.io')({\n  maxHttpBufferSize: 1e8\n});\n")),(0,o.yg)("p",null,"It matches the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketserveroptions-callback"},"maxPayload")," option of the ws package."))}d.isMDXComponent=!0}}]);