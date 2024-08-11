"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[5193],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,m=d["".concat(s,".").concat(u)]||d[u]||g[u]||o;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(8168),r=(t(6540),t(5680));const o={title:"Socket.IO 4.1.0",slug:"/socket-io-4-1-0/",authors:"darrachequesne"},l=void 0,i={permalink:"/blog/socket-io-4-1-0/",editUrl:"https://github.com/socketio/socket.io-website/edit/main/blog/2021-05-14-4.1.0.md",source:"@site/blog/2021-05-14-4.1.0.md",title:"Socket.IO 4.1.0",description:"Hello everyone!",date:"2021-05-14T00:00:00.000Z",formattedDate:"May 14, 2021",tags:[],readingTime:3.675,hasTruncateMarker:!0,authors:[{name:"Damien Arrachequesne",title:"Maintainer of Socket.IO",url:"https://github.com/darrachequesne",imageURL:"https://github.com/darrachequesne.png",key:"darrachequesne"}],frontMatter:{title:"Socket.IO 4.1.0",slug:"/socket-io-4-1-0/",authors:"darrachequesne"},prevItem:{title:"Monthly update #5",permalink:"/blog/monthly-update-5/"},nextItem:{title:"Monthly update #4",permalink:"/blog/monthly-update-4/"}},s={authorsImageUrls:[void 0]},p=[{value:"New features",id:"new-features",level:2},{value:"Add support for inter-server communication",id:"add-support-for-inter-server-communication",level:3},{value:"Emit an event when a namespace is created",id:"emit-an-event-when-a-namespace-is-created",level:3},{value:"Add a way to customize the response headers",id:"add-a-way-to-customize-the-response-headers",level:3},{value:"Add a way to get access to the reason of a connection error",id:"add-a-way-to-get-access-to-the-reason-of-a-connection-error",level:3},{value:"Add a way to ignore the <code>beforeunload</code> event",id:"add-a-way-to-ignore-the-beforeunload-event",level:3}],c={toc:p},d="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Hello everyone!"),(0,r.yg)("p",null,"We have just published a new minor version of Socket.IO: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io/releases/tag/4.1.0"},"4.1.0")),(0,r.yg)("h2",{id:"new-features"},"New features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#add-support-for-inter-server-communication"},"Add support for inter-server communication")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#emit-an-event-when-a-namespace-is-created"},"Emit an event when a namespace is created")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#add-a-way-to-customize-the-response-headers"},"Add a way to customize the response headers")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#add-a-way-to-get-access-to-the-reason-of-a-connection-error"},"Add a way to get access to the reason of a connection error")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#add-a-way-to-ignore-the-beforeunload-event"},"Add a way to ignore the ",(0,r.yg)("inlineCode",{parentName:"a"},"beforeunload")," event"))),(0,r.yg)("h3",{id:"add-support-for-inter-server-communication"},"Add support for inter-server communication"),(0,r.yg)("p",null,"This feature might be useful in a multi-server setup: you can now broadcast events between your Socket.IO servers."),(0,r.yg)("p",null,"Syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.serverSideEmit("hello", "world");\n')),(0,r.yg)("p",null,"And on the receiving side:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.on("hello", (arg1) => {\n  console.log(arg1); // prints "world"\n});\n')),(0,r.yg)("p",null,"Acknowledgements are supported too:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// server A\nio.serverSideEmit("ping", (err, responses) => {\n  console.log(responses[0]); // prints "pong"\n});\n\n// server B\nio.on("ping", (cb) => {\n  cb("pong");\n});\n')),(0,r.yg)("p",null,"A few notes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the events are specific to each ",(0,r.yg)("a",{parentName:"li",href:"/docs/v4/namespaces/"},"namespace"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// server A\nio.of("/custom").serverSideEmit("sync");\n\n// server B\nio.of("/custom").on("sync", () => {\n  // ...\n});\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"the ",(0,r.yg)("inlineCode",{parentName:"p"},"connection"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"connect")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"new_namespace")," (see ",(0,r.yg)("a",{parentName:"p",href:"#emit-an-event-when-a-namespace-is-created"},"below"),") strings are reserved and cannot be used in your application.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"you can send any number of arguments, but binary structures are currently not supported (the array of arguments will be ",(0,r.yg)("inlineCode",{parentName:"p"},"JSON.stringify"),"-ed)"))),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.serverSideEmit("hello", "world", 1, "2", { 3: "4" });\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-redis-adapter"},"Redis adapter")," and its ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-redis-emitter"},"associated emitter")," have been updated to support this new functionality."),(0,r.yg)("h3",{id:"emit-an-event-when-a-namespace-is-created"},"Emit an event when a namespace is created"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"new_namespace")," event will be emitted by the Server instance when a new namespace is created:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.on("new_namespace", (namespace) => {\n  // ...\n});\n')),(0,r.yg)("p",null,"This can be useful for example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"to attach a shared middleware to each namespace")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.on("new_namespace", (namespace) => {\n  namespace.use(myMiddleware);\n});\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"to track the ",(0,r.yg)("a",{parentName:"li",href:"/docs/v4/namespaces/#Dynamic-namespaces"},"dynamically created")," namespaces")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.of(/\\/nsp-\\w+/);\n\nio.on("new_namespace", (namespace) => {\n  console.log(namespace.name);\n});\n')),(0,r.yg)("h3",{id:"add-a-way-to-customize-the-response-headers"},"Add a way to customize the response headers"),(0,r.yg)("p",null,"The underlying Engine.IO server, which manages the low-level connection (HTTP long-polling and/or WebSocket), will now emit two additional events:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"initial_headers")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"headers"))),(0,r.yg)("p",null,"Like the name suggests, the ",(0,r.yg)("inlineCode",{parentName:"p"},"initial_headers")," event will be emitted only for the first HTTP request of the session, while the ",(0,r.yg)("inlineCode",{parentName:"p"},"headers")," event will be emitted for each HTTP request (including the WebSocket upgrade)."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.engine.on("initial_headers", (headers, req) => {\n  headers["test"] = "123";\n  headers["set-cookie"] = "mycookie=456";\n});\n\nio.engine.on("headers", (headers, req) => {\n  headers["test"] = "789";\n});\n')),(0,r.yg)("p",null,'Note: it was previously possible to achieve this by listening to the "request" event, but this should be easier with those new events:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'const httpServer = require("http").createServer();\nconst { Server } = require("socket.io");\nconst io = new Server(httpServer);\n\nhttpServer.prependListener("request", (req, res) => {\n  res.setHeader("test", "789");\n});\n')),(0,r.yg)("h3",{id:"add-a-way-to-get-access-to-the-reason-of-a-connection-error"},"Add a way to get access to the reason of a connection error"),(0,r.yg)("p",null,"The underlying Engine.IO server will also emit a new event: ",(0,r.yg)("inlineCode",{parentName:"p"},"connection_error"),"."),(0,r.yg)("p",null,"Syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.engine.on("connection_error", (err) => {\n  console.log(err.req);      // the request object\n  console.log(err.code);     // the error code, for example 1\n  console.log(err.message);  // the error message, for example "Session ID unknown"\n  console.log(err.context);  // some additional error context\n});\n')),(0,r.yg)("p",null,"Here is the list of possible error codes:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Code"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Message"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"0"),(0,r.yg)("td",{parentName:"tr",align:"center"},'"Transport unknown"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},'"Session ID unknown"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"2"),(0,r.yg)("td",{parentName:"tr",align:"center"},'"Bad handshake method"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"3"),(0,r.yg)("td",{parentName:"tr",align:"center"},'"Bad request"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"4"),(0,r.yg)("td",{parentName:"tr",align:"center"},'"Forbidden"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"5"),(0,r.yg)("td",{parentName:"tr",align:"center"},'"Unsupported protocol version"')))),(0,r.yg)("h3",{id:"add-a-way-to-ignore-the-beforeunload-event"},"Add a way to ignore the ",(0,r.yg)("inlineCode",{parentName:"h3"},"beforeunload")," event"),(0,r.yg)("p",null,"A few months ago, a user ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io/issues/3639"},"reported")," a weird behavior when reloading a page: on Firefox, the Socket instance would emit a ",(0,r.yg)("inlineCode",{parentName:"p"},"disconnect")," event, but not on Chrome or Safari."),(0,r.yg)("p",null,"We have published a fix for this issue in ",(0,r.yg)("inlineCode",{parentName:"p"},"socket.io-client@3.1.1"),", by silently closing the connection when receiving a ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event"},(0,r.yg)("inlineCode",{parentName:"a"},"beforeunload"))," event from the browser."),(0,r.yg)("p",null,"Unfortunately, this fix had unintended consequences: if you relied on the ",(0,r.yg)("inlineCode",{parentName:"p"},"beforeunload"),' event to prompt the user for confirmation ("your last modifications are not saved yet, do you really want to leave?"), the Socket.IO connection would now be closed, even if the user decided to stay on the page.'),(0,r.yg)("p",null,"That's why we have added the ",(0,r.yg)("inlineCode",{parentName:"p"},"closeOnBeforeunload")," option, to give you total control over this behavior:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'const socket = io("/", {\n  closeOnBeforeunload: false // defaults to true\n})\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"closeOnBeforeunload: true")," (the default value) will make all browsers behave the same (no ",(0,r.yg)("inlineCode",{parentName:"li"},"disconnect")," event when reloading the page)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"closeOnBeforeunload: false")," will ignore the ",(0,r.yg)("inlineCode",{parentName:"li"},"beforeunload")," event, but you will get a ",(0,r.yg)("inlineCode",{parentName:"li"},"disconnect")," event on Firefox")),(0,r.yg)("p",null,"That's all for this release, thanks for reading!"))}g.isMDXComponent=!0}}]);