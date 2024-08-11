"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[4957],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var o=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),g=a,u=h["".concat(s,".").concat(g)]||h[g]||m[g]||i;return n?o.createElement(u,r(r({ref:t},p),{},{components:n})):o.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(8168),a=(n(6540),n(5680));const i={title:"Introduction",sidebar_position:1,slug:"/"},r=void 0,l={unversionedId:"categories/Documentation/index",id:"version-2.x/categories/Documentation/index",title:"Introduction",description:"What Socket.IO is",source:"@site/versioned_docs/version-2.x/categories/01-Documentation/index.md",sourceDirName:"categories/01-Documentation",slug:"/",permalink:"/socket.io-website/docs/v2/",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/versioned_docs/version-2.x/categories/01-Documentation/index.md",tags:[],version:"2.x",lastUpdatedAt:1631600541,formattedLastUpdatedAt:"Sep 14, 2021",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,slug:"/"},sidebar:"version-2.x/sidebar",next:{title:"Emit cheatsheet",permalink:"/socket.io-website/docs/v2/emit-cheatsheet/"}},s={},c=[{value:"What Socket.IO is",id:"what-socketio-is",level:2},{value:"How does that work?",id:"how-does-that-work",level:3},{value:"What Socket.IO is not",id:"what-socketio-is-not",level:2},{value:"Minimal working example",id:"minimal-working-example",level:2},{value:"To send an event from the server to the client",id:"to-send-an-event-from-the-server-to-the-client",level:3},{value:"To send a message from the client to the server",id:"to-send-a-message-from-the-client-to-the-server",level:3},{value:"Features",id:"features",level:2},{value:"Reliability",id:"reliability",level:3},{value:"Auto-reconnection support",id:"auto-reconnection-support",level:3},{value:"Disconnection detection",id:"disconnection-detection",level:3},{value:"Binary support",id:"binary-support",level:3},{value:"Multiplexing support",id:"multiplexing-support",level:3}],p={toc:c},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(h,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"what-socketio-is"},"What Socket.IO is"),(0,a.yg)("p",null,"Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. It consists of:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"a Node.js server: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io"},"Source")," | ",(0,a.yg)("a",{parentName:"li",href:"/docs/v2/server-api/"},"API")),(0,a.yg)("li",{parentName:"ul"},"a Javascript client library for the browser (which can be also run from Node.js): ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-client"},"Source")," | ",(0,a.yg)("a",{parentName:"li",href:"/docs/v2/client-api/"},"API"))),(0,a.yg)("img",{src:"/images/bidirectional-communication.png",alt:"Diagram for bidirectional communication"}),(0,a.yg)("p",null,"There are also several client implementation in other languages, which are maintained by the community:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Java: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-client-java"},"https://github.com/socketio/socket.io-client-java")),(0,a.yg)("li",{parentName:"ul"},"C++: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-client-cpp"},"https://github.com/socketio/socket.io-client-cpp")),(0,a.yg)("li",{parentName:"ul"},"Swift: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-client-swift"},"https://github.com/socketio/socket.io-client-swift")),(0,a.yg)("li",{parentName:"ul"},"Dart: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rikulo/socket.io-client-dart"},"https://github.com/rikulo/socket.io-client-dart")),(0,a.yg)("li",{parentName:"ul"},"Python: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/miguelgrinberg/python-socketio"},"https://github.com/miguelgrinberg/python-socketio")),(0,a.yg)("li",{parentName:"ul"},".Net: ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/Quobject/SocketIoClientDotNet"},"https://github.com/Quobject/SocketIoClientDotNet"))),(0,a.yg)("h3",{id:"how-does-that-work"},"How does that work?"),(0,a.yg)("p",null,"The client will try to establish a ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"},"WebSocket")," connection if possible, and will fall back on HTTP long polling if not."),(0,a.yg)("p",null,"WebSocket is a communication protocol which provides a full-duplex and low-latency channel between the server and the browser. More information can be found ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket"},"here"),"."),(0,a.yg)("p",null,"So, in the best-case scenario, provided that:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"the browser supports WebSocket (",(0,a.yg)("a",{parentName:"li",href:"https://caniuse.com/#search=websocket"},"97%")," of all browsers in 2020)"),(0,a.yg)("li",{parentName:"ul"},"there is no element (proxy, firewall, ...) preventing WebSocket connections between the client and the server  ")),(0,a.yg)("p",null,'you can consider the Socket.IO client as a "slight" wrapper around the WebSocket API. Instead of writing:'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const socket = new WebSocket('ws://localhost:3000');\n\nsocket.onopen(() => {\n  socket.send('Hello!');\n});\n\nsocket.onmessage(data => {\n  console.log(data);\n});\n")),(0,a.yg)("p",null,"You will have, on the client-side:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const socket = io('ws://localhost:3000');\n\nsocket.on('connect', () => {\n  // either with send()\n  socket.send('Hello!');\n\n  // or with emit() and custom event names\n  socket.emit('salutations', 'Hello!', { 'mr': 'john' }, Uint8Array.from([1, 2, 3, 4]));\n});\n\n// handle the event sent with socket.send()\nsocket.on('message', data => {\n  console.log(data);\n});\n\n// handle the event sent with socket.emit()\nsocket.on('greetings', (elem1, elem2, elem3) => {\n  console.log(elem1, elem2, elem3);\n});\n")),(0,a.yg)("p",null,"The API on the server-side is similar, you also get an ",(0,a.yg)("inlineCode",{parentName:"p"},"socket")," object which extends the Node.js ",(0,a.yg)("a",{parentName:"p",href:"https://nodejs.org/docs/latest/api/events.html#events_class_eventemitter"},"EventEmitter")," class:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const io = require('socket.io')(3000);\n\nio.on('connection', socket => {\n  // either with send()\n  socket.send('Hello!');\n\n  // or with emit() and custom event names\n  socket.emit('greetings', 'Hey!', { 'ms': 'jane' }, Buffer.from([4, 3, 3, 1]));\n\n  // handle the event sent with socket.send()\n  socket.on('message', (data) => {\n    console.log(data);\n  });\n\n  // handle the event sent with socket.emit()\n  socket.on('salutations', (elem1, elem2, elem3) => {\n    console.log(elem1, elem2, elem3);\n  });\n});\n")),(0,a.yg)("p",null,"Socket.IO provides additional features over a plain WebSocket object, which are listed ",(0,a.yg)("a",{parentName:"p",href:"#Features"},"below"),"."),(0,a.yg)("p",null,"But first, let's detail what the Socket.IO library is not."),(0,a.yg)("h2",{id:"what-socketio-is-not"},"What Socket.IO is not"),(0,a.yg)("p",null,"Socket.IO is ",(0,a.yg)("strong",{parentName:"p"},"NOT")," a WebSocket implementation. Although Socket.IO indeed uses WebSocket as a transport when possible, it adds additional metadata to each packet. That is why a WebSocket client will not be able to successfully connect to a Socket.IO server, and a Socket.IO client will not be able to connect to a plain WebSocket server either."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// WARNING: the client will NOT be able to connect!\nconst socket = io('ws://echo.websocket.org');\n")),(0,a.yg)("p",null,"If you are looking for a plain WebSocket server, please take a look at ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/websockets/ws"},"ws")," or ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/uNetworking/uWebSockets.js"},"uWebSockets.js"),"."),(0,a.yg)("p",null,"There are also ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/nodejs/node/issues/19308"},"talks")," to include a WebSocket server in the Node.js core."),(0,a.yg)("p",null,"On the client-side, you might be interested by the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/nathanboktae/robust-websocket"},"robust-websocket")," package."),(0,a.yg)("h2",{id:"minimal-working-example"},"Minimal working example"),(0,a.yg)("p",null,"If you are new to the Node.js ecosystem, please take a look at the ",(0,a.yg)("a",{parentName:"p",href:"/get-started/chat"},"Get Started")," guide, which is ideal for beginners. "),(0,a.yg)("p",null,"Else, let's start right away! The server library can be installed from NPM:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ npm install socket.io\n")),(0,a.yg)("p",null,"More information about the installation can be found in the ",(0,a.yg)("a",{parentName:"p",href:"/docs/v2/server-installation/"},"Server installation")," page."),(0,a.yg)("p",null,"Then, let's create an ",(0,a.yg)("inlineCode",{parentName:"p"},"index.js")," file, with the following content:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const content = require('fs').readFileSync(__dirname + '/index.html', 'utf8');\n\nconst httpServer = require('http').createServer((req, res) => {\n  // serve the index.html file\n  res.setHeader('Content-Type', 'text/html');\n  res.setHeader('Content-Length', Buffer.byteLength(content));\n  res.end(content);\n});\n\nconst io = require('socket.io')(httpServer);\n\nio.on('connection', socket => {\n  console.log('connect');\n});\n\nhttpServer.listen(3000, () => {\n  console.log('go to http://localhost:3000');\n});\n")),(0,a.yg)("p",null,"Here, a classic Node.js ",(0,a.yg)("a",{parentName:"p",href:"https://nodejs.org/docs/latest/api/http.html#http_class_http_server"},"HTTP server")," is started to serve the ",(0,a.yg)("inlineCode",{parentName:"p"},"index.html")," file, and the Socket.IO server is attached to it. Please see the ",(0,a.yg)("a",{parentName:"p",href:"/docs/v2/server-initialization/"},"Server initialization")," page for the various ways to create a server."),(0,a.yg)("p",null,"Let's create the ",(0,a.yg)("inlineCode",{parentName:"p"},"index.html")," file next to it:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Minimal working example</title>\n</head>\n<body>\n    <ul id=\"events\"></ul>\n\n    <script src=\"/socket.io/socket.io.js\"><\/script>\n    <script>\n        const $events = document.getElementById('events');\n\n        const newItem = (content) => {\n          const item = document.createElement('li');\n          item.innerText = content;\n          return item;\n        };\n\n        const socket = io();\n\n        socket.on('connect', () => {\n          $events.appendChild(newItem('connect'));\n        });\n    <\/script>\n</body>\n</html>\n")),(0,a.yg)("p",null,"Finally, let's start our server:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ node index.js\n")),(0,a.yg)("p",null,"And voil\xe0!"),(0,a.yg)("img",{src:"/images/minimal-example-connect.gif",alt:"Minimal working example - connect event on both sides"}),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"socket")," object on both sides extends the EventEmitter class, so:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"sending an event is done with: ",(0,a.yg)("inlineCode",{parentName:"li"},"socket.emit()")),(0,a.yg)("li",{parentName:"ul"},"receiving an event is done by registering a listener: ",(0,a.yg)("inlineCode",{parentName:"li"},"socket.on(<event name>, <listener>)")," ")),(0,a.yg)("h3",{id:"to-send-an-event-from-the-server-to-the-client"},"To send an event from the server to the client"),(0,a.yg)("p",null,"Let's update the ",(0,a.yg)("inlineCode",{parentName:"p"},"index.js")," file (server-side):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', socket => {\n  let counter = 0;\n  setInterval(() => {\n    socket.emit('hello', ++counter);\n  }, 1000);\n});\n")),(0,a.yg)("p",null,"And the ",(0,a.yg)("inlineCode",{parentName:"p"},"index.html")," file (client-side):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const socket = io();\n\nsocket.on('connect', () => {\n  $events.appendChild(newItem('connect'));\n});\n\nsocket.on('hello', (counter) => {\n  $events.appendChild(newItem(`hello - ${counter}`));\n});\n")),(0,a.yg)("p",null,"Demo:"),(0,a.yg)("img",{src:"/images/minimal-example-server-to-client.gif",alt:"Minimal working example - server to client communication"}),(0,a.yg)("h3",{id:"to-send-a-message-from-the-client-to-the-server"},"To send a message from the client to the server"),(0,a.yg)("p",null,"Let's update the ",(0,a.yg)("inlineCode",{parentName:"p"},"index.js")," file (server-side):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', socket => {\n  socket.on('hey', data => {\n    console.log('hey', data);\n  });\n});\n")),(0,a.yg)("p",null,"And the ",(0,a.yg)("inlineCode",{parentName:"p"},"index.html")," file (client-side):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const socket = io();\n\nsocket.on('connect', () => {\n  $events.appendChild(newItem('connect'));\n});\n\nlet counter = 0;\nsetInterval(() => {\n  ++counter;\n  socket.emit('hey', { counter }); // the object will be serialized for you\n}, 1000);\n")),(0,a.yg)("p",null,"Demo:"),(0,a.yg)("img",{src:"/images/minimal-example-client-to-server.gif",alt:"Minimal working example - client to server communication"}),(0,a.yg)("p",null,"Now, let's detail the features provided by Socket.IO."),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("p",null,"Its main features are:"),(0,a.yg)("h3",{id:"reliability"},"Reliability"),(0,a.yg)("p",null,"Connections are established even in the presence of:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"proxies and load balancers."),(0,a.yg)("li",{parentName:"ul"},"personal firewall and antivirus software.")),(0,a.yg)("p",null,"For this purpose, it relies on ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/socketio/engine.io"},"Engine.IO"),', which first establishes a long-polling connection, then tries to upgrade to better transports that are "tested" on the side, like WebSocket. Please see the ',(0,a.yg)("a",{parentName:"p",href:"https://github.com/socketio/engine.io#goals"},"Goals")," section for more information."),(0,a.yg)("h3",{id:"auto-reconnection-support"},"Auto-reconnection support"),(0,a.yg)("p",null,"Unless instructed otherwise a disconnected client will try to reconnect forever, until the server is available again. Please see the available reconnection options ",(0,a.yg)("a",{parentName:"p",href:"/docs/v2/client-api/#new-Manager-url-options"},"here"),"."),(0,a.yg)("h3",{id:"disconnection-detection"},"Disconnection detection"),(0,a.yg)("p",null,"A heartbeat mechanism is implemented at the Engine.IO level, allowing both the server and the client to know when the other one is not responding anymore."),(0,a.yg)("p",null,"That functionality is achieved with timers set on both the server and the client, with timeout values (the pingInterval and pingTimeout parameters) shared during the connection handshake. Those timers require any subsequent client calls to be directed to the same server, hence the sticky-session requirement when using multiples nodes."),(0,a.yg)("h3",{id:"binary-support"},"Binary support"),(0,a.yg)("p",null,"Any serializable data structures can be emitted, including:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"},"ArrayBuffer")," and ",(0,a.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"},"Blob")," in the browser"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"},"ArrayBuffer")," and ",(0,a.yg)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html"},"Buffer")," in Node.js")),(0,a.yg)("h3",{id:"multiplexing-support"},"Multiplexing support"),(0,a.yg)("p",null,"In order to create separation of concerns within your application (for example per module, or based on permissions), Socket.IO allows you to create several ",(0,a.yg)("a",{parentName:"p",href:"/docs/v2/namespaces/"},"Namespaces"),", which will act as separate communication channels but will share the same underlying connection."))}m.isMDXComponent=!0}}]);