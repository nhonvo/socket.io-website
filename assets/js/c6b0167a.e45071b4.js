"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[9691],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=o,u=g["".concat(s,".").concat(d)]||g[d]||m[d]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var a=n(8168),o=(n(6540),n(5680)),r=n(1653),i=n(6025);const l={title:"Introduction",sidebar_position:1,slug:"/"},s=void 0,c={unversionedId:"categories/Documentation/index",id:"categories/Documentation/index",title:"Introduction",description:"If you are new to Socket.IO, we recommend checking out our tutorial.",source:"@site/docs/categories/01-Documentation/index.md",sourceDirName:"categories/01-Documentation",slug:"/",permalink:"/docs/v4/",draft:!1,editUrl:"https://github.com/socketio/nhonvo.github.io/edit/main/docs/categories/01-Documentation/index.md",tags:[],version:"current",lastUpdatedAt:1707125615,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,slug:"/"},sidebar:"sidebar",next:{title:"How it works",permalink:"/docs/v4/how-it-works/"}},p={},g=[{value:"What Socket.IO is",id:"what-socketio-is",level:2},{value:"Server implementations",id:"server-implementations",level:3},{value:"Client implementations",id:"client-implementations",level:3},{value:"What Socket.IO is not",id:"what-socketio-is-not",level:2},{value:"Features",id:"features",level:2},{value:"HTTP long-polling fallback",id:"http-long-polling-fallback",level:3},{value:"Automatic reconnection",id:"automatic-reconnection",level:3},{value:"Packet buffering",id:"packet-buffering",level:3},{value:"Acknowledgements",id:"acknowledgements",level:3},{value:"Broadcasting",id:"broadcasting",level:3},{value:"Multiplexing",id:"multiplexing",level:3},{value:"Common questions",id:"common-questions",level:2},{value:"Is Socket.IO still needed today?",id:"is-socketio-still-needed-today",level:3},{value:"What is the overhead of the Socket.IO protocol?",id:"what-is-the-overhead-of-the-socketio-protocol",level:3},{value:"Something does not work properly, please help?",id:"something-does-not-work-properly-please-help",level:3},{value:"Next steps",id:"next-steps",level:2}],m={toc:g},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"If you are new to Socket.IO, we recommend checking out our ",(0,o.yg)("a",{parentName:"p",href:"/docs/v4/tutorial/introduction"},"tutorial"),".")),(0,o.yg)("h2",{id:"what-socketio-is"},"What Socket.IO is"),(0,o.yg)("p",null,"Socket.IO is a library that enables ",(0,o.yg)("strong",{parentName:"p"},"low-latency"),", ",(0,o.yg)("strong",{parentName:"p"},"bidirectional")," and ",(0,o.yg)("strong",{parentName:"p"},"event-based")," communication between a client and a server."),(0,o.yg)(r.A,{alt:"Diagram of a communication between a server and a client",sources:{light:(0,i.A)("/images/bidirectional-communication2.png"),dark:(0,i.A)("/images/bidirectional-communication2-dark.png")},mdxType:"ThemedImage"}),(0,o.yg)("p",null,"The Socket.IO connection can be established with different low-level transports:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"HTTP long-polling"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSocket")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API"},"WebTransport"))),(0,o.yg)("p",null,"Socket.IO will automatically pick the best available option, depending on:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"the capabilities of the browser (see ",(0,o.yg)("a",{parentName:"li",href:"https://caniuse.com/websockets"},"here")," and ",(0,o.yg)("a",{parentName:"li",href:"https://caniuse.com/webtransport"},"here"),")"),(0,o.yg)("li",{parentName:"ul"},"the network (some networks block WebSocket and/or WebTransport connections)")),(0,o.yg)("p",null,"You can find more detail about that in the ",(0,o.yg)("a",{parentName:"p",href:"/docs/v4/how-it-works/"},'"How it works" section'),"."),(0,o.yg)("h3",{id:"server-implementations"},"Server implementations"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Language"),(0,o.yg)("th",{parentName:"tr",align:null},"Website"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"JavaScript (Node.js)"),(0,o.yg)("td",{parentName:"tr",align:null},"- ",(0,o.yg)("a",{parentName:"td",href:"/docs/v4/server-installation/"},"Installation steps"),(0,o.yg)("br",null),"- ",(0,o.yg)("a",{parentName:"td",href:"/docs/v4/server-api/"},"API"),(0,o.yg)("br",null),"- ",(0,o.yg)("a",{parentName:"td",href:"https://github.com/socketio/socket.io"},"Source code"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"JavaScript (Deno)"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/socketio/socket.io-deno"},"https://github.com/socketio/socket.io-deno"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Java"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/mrniko/netty-socketio"},"https://github.com/mrniko/netty-socketio"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Java"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/trinopoty/socket.io-server-java"},"https://github.com/trinopoty/socket.io-server-java"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Python"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/miguelgrinberg/python-socketio"},"https://github.com/miguelgrinberg/python-socketio"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Golang"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/googollee/go-socket.io"},"https://github.com/googollee/go-socket.io"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Rust"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/Totodore/socketioxide"},"https://github.com/Totodore/socketioxide"))))),(0,o.yg)("h3",{id:"client-implementations"},"Client implementations"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Language"),(0,o.yg)("th",{parentName:"tr",align:null},"Website"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"JavaScript (browser, Node.js or React Native)"),(0,o.yg)("td",{parentName:"tr",align:null},"- ",(0,o.yg)("a",{parentName:"td",href:"/docs/v4/client-installation/"},"Installation steps"),(0,o.yg)("br",null),"- ",(0,o.yg)("a",{parentName:"td",href:"/docs/v4/client-api/"},"API"),(0,o.yg)("br",null),"- ",(0,o.yg)("a",{parentName:"td",href:"https://github.com/socketio/socket.io-client"},"Source code"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"JavaScript (for WeChat Mini-Programs)"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/weapp-socketio/weapp.socket.io"},"https://github.com/weapp-socketio/weapp.socket.io"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Java"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/socketio/socket.io-client-java"},"https://github.com/socketio/socket.io-client-java"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"C++"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/socketio/socket.io-client-cpp"},"https://github.com/socketio/socket.io-client-cpp"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Swift"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/socketio/socket.io-client-swift"},"https://github.com/socketio/socket.io-client-swift"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Dart"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/rikulo/socket.io-client-dart"},"https://github.com/rikulo/socket.io-client-dart"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Python"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/miguelgrinberg/python-socketio"},"https://github.com/miguelgrinberg/python-socketio"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},".Net"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/doghappy/socket.io-client-csharp"},"https://github.com/doghappy/socket.io-client-csharp"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Rust"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/1c3t3a/rust-socketio"},"https://github.com/1c3t3a/rust-socketio"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Kotlin"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/icerockdev/moko-socket-io"},"https://github.com/icerockdev/moko-socket-io"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"PHP"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://github.com/ElephantIO/elephant.io"},"https://github.com/ElephantIO/elephant.io"))))),(0,o.yg)("h2",{id:"what-socketio-is-not"},"What Socket.IO is not"),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Socket.IO is ",(0,o.yg)("strong",{parentName:"p"},"NOT")," a WebSocket implementation.")),(0,o.yg)("p",null,"Although Socket.IO indeed uses WebSocket for transport when possible, it adds additional metadata to each packet. That is why a WebSocket client will not be able to successfully connect to a Socket.IO server, and a Socket.IO client will not be able to connect to a plain WebSocket server either."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'// WARNING: the client will NOT be able to connect!\nconst socket = io("ws://echo.websocket.org");\n')),(0,o.yg)("p",null,"If you are looking for a plain WebSocket server, please take a look at ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/websockets/ws"},"ws")," or ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/uNetworking/uWebSockets.js"},"\xb5WebSockets.js"),"."),(0,o.yg)("p",null,"There are also ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nodejs/node/issues/19308"},"discussions")," for including a WebSocket server in the Node.js core."),(0,o.yg)("p",null,"On the client-side, you might be interested in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/nathanboktae/robust-websocket"},"robust-websocket")," package."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Socket.IO is not meant to be used in a background service for mobile applications.")),(0,o.yg)("p",null,"The Socket.IO library keeps an open TCP connection to the server, which may result in a high battery drain for your users. Please use a dedicated messaging platform like ",(0,o.yg)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging"},"FCM")," for this use case."),(0,o.yg)("h2",{id:"features"},"Features"),(0,o.yg)("p",null,"Here are the features provided by Socket.IO over plain WebSockets:"),(0,o.yg)("h3",{id:"http-long-polling-fallback"},"HTTP long-polling fallback"),(0,o.yg)("p",null,"The connection will fall back to HTTP long-polling in case the WebSocket connection cannot be established."),(0,o.yg)("p",null,"This feature was the #1 reason people used Socket.IO when the project was created more than ten years ago (!), as the browser support for WebSockets was still in its infancy."),(0,o.yg)("p",null,"Even if most browsers now support WebSockets (more than ",(0,o.yg)("a",{parentName:"p",href:"https://caniuse.com/mdn-api_websocket"},"97%"),"), it is still a great feature as we still receive reports from users that cannot establish a WebSocket connection because they are behind some misconfigured proxy."),(0,o.yg)("h3",{id:"automatic-reconnection"},"Automatic reconnection"),(0,o.yg)("p",null,"Under some particular conditions, the WebSocket connection between the server and the client can be interrupted with both sides being unaware of the broken state of the link."),(0,o.yg)("p",null,"That's why Socket.IO includes a heartbeat mechanism, which periodically checks the status of the connection."),(0,o.yg)("p",null,"And when the client eventually gets disconnected, it automatically reconnects with an exponential back-off delay, in order not to overwhelm the server."),(0,o.yg)("h3",{id:"packet-buffering"},"Packet buffering"),(0,o.yg)("p",null,"The packets are automatically buffered when the client is disconnected, and will be sent upon reconnection."),(0,o.yg)("p",null,"More information ",(0,o.yg)("a",{parentName:"p",href:"/docs/v4/client-offline-behavior/#buffered-events"},"here"),"."),(0,o.yg)("h3",{id:"acknowledgements"},"Acknowledgements"),(0,o.yg)("p",null,"Socket.IO provides a convenient way to send an event and receive a response:"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Sender")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'socket.emit("hello", "world", (response) => {\n  console.log(response); // "got it"\n});\n')),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Receiver")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'socket.on("hello", (arg, callback) => {\n  console.log(arg); // "world"\n  callback("got it");\n});\n')),(0,o.yg)("p",null,"You can also add a timeout:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'socket.timeout(5000).emit("hello", "world", (err, response) => {\n  if (err) {\n    // the other side did not acknowledge the event in the given delay\n  } else {\n    console.log(response); // "got it"\n  }\n});\n')),(0,o.yg)("h3",{id:"broadcasting"},"Broadcasting"),(0,o.yg)("p",null,"On the server-side, you can send an event to ",(0,o.yg)("a",{parentName:"p",href:"/docs/v4/broadcasting-events/"},"all connected clients")," or ",(0,o.yg)("a",{parentName:"p",href:"/docs/v4/rooms/"},"to a subset of clients"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'// to all connected clients\nio.emit("hello");\n\n// to all connected clients in the "news" room\nio.to("news").emit("hello");\n')),(0,o.yg)("p",null,"This also works when ",(0,o.yg)("a",{parentName:"p",href:"/docs/v4/using-multiple-nodes/"},"scaling to multiple nodes"),"."),(0,o.yg)("h3",{id:"multiplexing"},"Multiplexing"),(0,o.yg)("p",null,'Namespaces allow you to split the logic of your application over a single shared connection. This can be useful for example if you want to create an "admin" channel that only authorized users can join.'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", (socket) => {\n  // classic users\n});\n\nio.of("/admin").on("connection", (socket) => {\n  // admin users\n});\n')),(0,o.yg)("p",null,"More on that ",(0,o.yg)("a",{parentName:"p",href:"/docs/v4/namespaces/"},"here"),"."),(0,o.yg)("h2",{id:"common-questions"},"Common questions"),(0,o.yg)("h3",{id:"is-socketio-still-needed-today"},"Is Socket.IO still needed today?"),(0,o.yg)("p",null,"That's a fair question, since WebSockets are supported ",(0,o.yg)("a",{parentName:"p",href:"https://caniuse.com/mdn-api_websocket"},"almost everywhere")," now."),(0,o.yg)("p",null,"That being said, we believe that, if you use plain WebSockets for your application, you will eventually need to implement most of the features that are already included (and battle-tested) in Socket.IO, like ",(0,o.yg)("a",{parentName:"p",href:"#automatic-reconnection"},"reconnection"),", ",(0,o.yg)("a",{parentName:"p",href:"#acknowledgements"},"acknowledgements")," or ",(0,o.yg)("a",{parentName:"p",href:"#broadcasting"},"broadcasting"),"."),(0,o.yg)("h3",{id:"what-is-the-overhead-of-the-socketio-protocol"},"What is the overhead of the Socket.IO protocol?"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},'socket.emit("hello", "world")')," will be sent as a single WebSocket frame containing ",(0,o.yg)("inlineCode",{parentName:"p"},'42["hello","world"]')," with:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"4"),' being Engine.IO "message" packet type'),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"2"),' being Socket.IO "message" packet type'),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},'["hello","world"]')," being the ",(0,o.yg)("inlineCode",{parentName:"li"},"JSON.stringify()"),"-ed version of the arguments array")),(0,o.yg)("p",null,"So, a few additional bytes for each message, which can be further reduced by the usage of a ",(0,o.yg)("a",{parentName:"p",href:"/docs/v4/custom-parser/"},"custom parser"),"."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"The size of the browser bundle itself is ",(0,o.yg)("a",{parentName:"p",href:"https://bundlephobia.com/package/socket.io-client"},(0,o.yg)("inlineCode",{parentName:"a"},"10.4 kB"))," (minified and gzipped).")),(0,o.yg)("p",null,"You can find the details of the Socket.IO protocol ",(0,o.yg)("a",{parentName:"p",href:"/docs/v4/socket-io-protocol/"},"here"),"."),(0,o.yg)("h3",{id:"something-does-not-work-properly-please-help"},"Something does not work properly, please help?"),(0,o.yg)("p",null,"Please check our ",(0,o.yg)("a",{parentName:"p",href:"/docs/v4/troubleshooting-connection-issues/"},"Troubleshooting guide"),"."),(0,o.yg)("h2",{id:"next-steps"},"Next steps"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/get-started/chat"},"Get started example")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/v4/server-installation/"},"Server installation")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/v4/client-installation/"},"Client installation"))))}u.isMDXComponent=!0}}]);