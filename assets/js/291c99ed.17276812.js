"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[4129],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(t),u=r,y=g["".concat(i,".").concat(u)]||g[u]||m[u]||o;return t?a.createElement(y,l(l({ref:n},p),{},{components:t})):a.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[g]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(8168),r=(t(6540),t(5680));const o={title:"Emitting events",sidebar_position:1,slug:"/emitting-events/"},l=void 0,s={unversionedId:"categories/Events/emitting-events",id:"categories/Events/emitting-events",title:"Emitting events",description:"There are several ways to send events between the server and the client.",source:"@site/docs/categories/04-Events/emitting-events.md",sourceDirName:"categories/04-Events",slug:"/emitting-events/",permalink:"/docs/v4/emitting-events/",draft:!1,editUrl:"https://github.com/socketio/nhonvo.github.io/edit/main/docs/categories/04-Events/emitting-events.md",tags:[],version:"current",lastUpdatedAt:1700216184,formattedLastUpdatedAt:"Nov 17, 2023",sidebarPosition:1,frontMatter:{title:"Emitting events",sidebar_position:1,slug:"/emitting-events/"},sidebar:"sidebar",previous:{title:"Usage with bundlers",permalink:"/docs/v4/client-with-bundlers/"},next:{title:"Listening to events",permalink:"/docs/v4/listening-to-events/"}},i={},c=[{value:"Basic emit",id:"basic-emit",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"With timeout",id:"with-timeout",level:2},{value:"Volatile events",id:"volatile-events",level:2}],p={toc:c},g="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"There are several ways to send events between the server and the client."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For TypeScript users, it is possible to provide type hints for the events. Please check ",(0,r.yg)("a",{parentName:"p",href:"/docs/v4/typescript/"},"this"),".")),(0,r.yg)("h2",{id:"basic-emit"},"Basic emit"),(0,r.yg)("p",null,"The Socket.IO API is inspired from the Node.js ",(0,r.yg)("a",{parentName:"p",href:"https://nodejs.org/docs/latest/api/events.html#events_events"},"EventEmitter"),", which means you can emit events on one side and register listeners on the other:"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", (socket) => {\n  socket.emit("hello", "world");\n});\n')),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'socket.on("hello", (arg) => {\n  console.log(arg); // world\n});\n')),(0,r.yg)("p",null,"This also works in the other direction:"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", (socket) => {\n  socket.on("hello", (arg) => {\n    console.log(arg); // world\n  });\n});\n')),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'socket.emit("hello", "world");\n')),(0,r.yg)("p",null,"You can send any number of arguments, and all serializable data structures are supported, including binary objects like ",(0,r.yg)("a",{parentName:"p",href:"https://nodejs.org/docs/latest/api/buffer.html#buffer_buffer"},"Buffer")," or ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"},"TypedArray"),"."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", (socket) => {\n  socket.emit("hello", 1, "2", { 3: \'4\', 5: Buffer.from([6]) });\n});\n')),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// client-side\nsocket.on("hello", (arg1, arg2, arg3) => {\n  console.log(arg1); // 1\n  console.log(arg2); // "2"\n  console.log(arg3); // { 3: \'4\', 5: ArrayBuffer (1) [ 6 ] }\n});\n')),(0,r.yg)("p",null,"There is no need to run ",(0,r.yg)("inlineCode",{parentName:"p"},"JSON.stringify()")," on objects as it will be done for you."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// BAD\nsocket.emit("hello", JSON.stringify({ name: "John" }));\n\n// GOOD\nsocket.emit("hello", { name: "John" });\n')),(0,r.yg)("p",null,"Notes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date")," objects will be converted to (and received as) their string representation, e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"1970-01-01T00:00:00.000Z"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"},"Map")," and ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"},"Set")," must be manually serialized:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const serializedMap = [...myMap.entries()];\nconst serializedSet = [...mySet.keys()];\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"you can use the ",(0,r.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior"},(0,r.yg)("inlineCode",{parentName:"a"},"toJSON()"))," method to customize the serialization of an object")),(0,r.yg)("p",null,"Example with a class:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'class Hero {\n  #hp;\n\n  constructor() {\n    this.#hp = 42;\n  }\n\n  toJSON() {\n    return { hp: this.#hp };\n  }\n}\n\nsocket.emit("here\'s a hero", new Hero());\n')),(0,r.yg)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,r.yg)("p",null,"Events are great, but in some cases you may want a more classic request-response API. In Socket.IO, this feature is named acknowledgements."),(0,r.yg)("p",null,"You can add a callback as the last argument of the ",(0,r.yg)("inlineCode",{parentName:"p"},"emit()"),", and this callback will be called once the other side acknowledges the event:"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", (socket) => {\n  socket.on("update item", (arg1, arg2, callback) => {\n    console.log(arg1); // 1\n    console.log(arg2); // { name: "updated" }\n    callback({\n      status: "ok"\n    });\n  });\n});\n')),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'socket.emit("update item", "1", { name: "updated" }, (response) => {\n  console.log(response.status); // ok\n});\n')),(0,r.yg)("h2",{id:"with-timeout"},"With timeout"),(0,r.yg)("p",null,"Starting with Socket.IO v4.4.0, you can now assign a timeout to each emit:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'socket.timeout(5000).emit("my-event", (err) => {\n  if (err) {\n    // the other side did not acknowledge the event in the given delay\n  }\n});\n')),(0,r.yg)("p",null,"You can also use both a timeout and an ",(0,r.yg)("a",{parentName:"p",href:"#acknowledgements"},"acknowledgement"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'socket.timeout(5000).emit("my-event", (err, response) => {\n  if (err) {\n    // the other side did not acknowledge the event in the given delay\n  } else {\n    console.log(response);\n  }\n});\n')),(0,r.yg)("h2",{id:"volatile-events"},"Volatile events"),(0,r.yg)("p",null,"Volatile events are events that will not be sent if the underlying connection is not ready (a bit like ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/User_Datagram_Protocol"},"UDP"),", in terms of reliability)."),(0,r.yg)("p",null,"This can be interesting for example if you need to send the position of the characters in an online game (as only the latest values are useful)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'socket.volatile.emit("hello", "might or might not be received");\n')),(0,r.yg)("p",null,"Another use case is to discard events when the client is not connected (by default, the events are buffered until reconnection)."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", (socket) => {\n  console.log("connect");\n\n  socket.on("ping", (count) => {\n    console.log(count);\n  });\n});\n')),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'let count = 0;\nsetInterval(() => {\n  socket.volatile.emit("ping", ++count);\n}, 1000);\n')),(0,r.yg)("p",null,"If you restart the server, you will see in the console:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"connect\n1\n2\n3\n4\n# the server is restarted, the client automatically reconnects\nconnect\n9\n10\n11\n")),(0,r.yg)("p",null,"Without the ",(0,r.yg)("inlineCode",{parentName:"p"},"volatile")," flag, you would see:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"connect\n1\n2\n3\n4\n# the server is restarted, the client automatically reconnects and sends its buffered events\nconnect\n5\n6\n7\n8\n9\n10\n11\n")))}m.isMDXComponent=!0}}]);