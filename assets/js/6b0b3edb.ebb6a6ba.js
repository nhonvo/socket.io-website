"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[2155],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var o=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(t),d=r,m=g["".concat(i,".").concat(d)]||g[d]||u[d]||a;return t?o.createElement(m,s(s({ref:n},p),{},{components:t})):o.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[g]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1032:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(8168),r=(t(6540),t(5680));const a={title:"Emitting events",sidebar_position:1,slug:"/emitting-events/"},s=void 0,l={unversionedId:"categories/Events/emitting-events",id:"version-3.x/categories/Events/emitting-events",title:"Emitting events",description:"There are several ways to send events between the server and the client.",source:"@site/versioned_docs/version-3.x/categories/04-Events/emitting-events.md",sourceDirName:"categories/04-Events",slug:"/emitting-events/",permalink:"/docs/v3/emitting-events/",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/versioned_docs/version-3.x/categories/04-Events/emitting-events.md",tags:[],version:"3.x",lastUpdatedAt:1673088133,formattedLastUpdatedAt:"Jan 7, 2023",sidebarPosition:1,frontMatter:{title:"Emitting events",sidebar_position:1,slug:"/emitting-events/"},sidebar:"version-3.x/sidebar",previous:{title:"Offline behavior",permalink:"/docs/v3/client-offline-behavior/"},next:{title:"Listening to events",permalink:"/docs/v3/listening-to-events/"}},i={},c=[{value:"Basic emit",id:"basic-emit",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"Volatile events",id:"volatile-events",level:2}],p={toc:c},g="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"There are several ways to send events between the server and the client."),(0,r.yg)("h2",{id:"basic-emit"},"Basic emit"),(0,r.yg)("p",null,"The Socket.IO API is inspired from the Node.js ",(0,r.yg)("a",{parentName:"p",href:"https://nodejs.org/docs/latest/api/events.html#events_events"},"EventEmitter"),", which means you can emit events on one side and register listeners on the other:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// server-side\nio.on("connection", (socket) => {\n  socket.emit("hello", "world");\n});\n\n// client-side\nsocket.on("hello", (arg) => {\n  console.log(arg); // world\n});\n')),(0,r.yg)("p",null,"This also works in the other direction:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// server-side\nio.on("connection", (socket) => {\n  socket.on("hello", (arg) => {\n    console.log(arg); // world\n  });\n});\n\n// client-side\nsocket.emit("hello", "world");\n')),(0,r.yg)("p",null,"You can send any number of arguments, and all serializable data structures are supported, including binary objects like ",(0,r.yg)("a",{parentName:"p",href:"https://nodejs.org/docs/latest/api/buffer.html#buffer_buffer"},"Buffer")," or ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"},"TypedArray"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// server-side\nio.on("connection", (socket) => {\n  socket.emit("hello", 1, "2", { 3: \'4\', 5: Buffer.from([6]) });\n});\n\n// client-side\nsocket.on("hello", (arg1, arg2, arg3) => {\n  console.log(arg1); // 1\n  console.log(arg2); // "2"\n  console.log(arg3); // { 3: \'4\', 5: ArrayBuffer (1) [ 6 ] }\n});\n')),(0,r.yg)("p",null,"There is no need to run ",(0,r.yg)("inlineCode",{parentName:"p"},"JSON.stringify()")," on objects as it will be done for you."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// BAD\nsocket.emit("hello", JSON.stringify({ name: "John" }));\n\n// GOOD\nsocket.emit("hello", { name: "John" });\n')),(0,r.yg)("p",null,"Note: ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"},"Map")," and ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"},"Set")," are not serializable and must be manually serialized:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const serializedMap = [...myMap.entries()];\nconst serializedSet = [...mySet.keys()];\n")),(0,r.yg)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,r.yg)("p",null,"Events are great, but in some cases you may want a more classic request-response API. In Socket.IO, this feature is named acknowledgements."),(0,r.yg)("p",null,"You can add a callback as the last argument of the ",(0,r.yg)("inlineCode",{parentName:"p"},"emit()"),", and this callback will be called once the other side acknowledges the event:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// server-side\nio.on("connection", (socket) => {\n  socket.on("update item", (arg1, arg2, callback) => {\n    console.log(arg1); // 1\n    console.log(arg2); // { name: "updated" }\n    callback({\n      status: "ok"\n    });\n  });\n});\n\n// client-side\nsocket.emit("update item", "1", { name: "updated" }, (response) => {\n  console.log(response.status); // ok\n});\n')),(0,r.yg)("p",null,"Timeout are not supported by default, but it is quite straightforward to implement:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'const withTimeout = (onSuccess, onTimeout, timeout) => {\n  let called = false;\n\n  const timer = setTimeout(() => {\n    if (called) return;\n    called = true;\n    onTimeout();\n  }, timeout);\n\n  return (...args) => {\n    if (called) return;\n    called = true;\n    clearTimeout(timer);\n    onSuccess.apply(this, args);\n  }\n}\n\nsocket.emit("hello", 1, 2, withTimeout(() => {\n  console.log("success!");\n}, () => {\n  console.log("timeout!");\n}, 1000));\n')),(0,r.yg)("h2",{id:"volatile-events"},"Volatile events"),(0,r.yg)("p",null,"Volatile events are events that will not be sent if the underlying connection is not ready (a bit like ",(0,r.yg)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/User_Datagram_Protocol"},"UDP"),", in terms of reliability)."),(0,r.yg)("p",null,"This can be interesting for example if you need to send the position of the characters in an online game (as only the latest values are useful)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'socket.volatile.emit("hello", "might or might not be received");\n')),(0,r.yg)("p",null,"Another use case is to discard events when the client is not connected (by default, the events are buffered until reconnection)."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// server-side\nio.on("connection", (socket) => {\n  console.log("connect");\n\n  socket.on("ping", (count) => {\n    console.log(count);\n  });\n});\n\n// client-side\nlet count = 0;\nsetInterval(() => {\n  socket.volatile.emit("ping", ++count);\n}, 1000);\n')),(0,r.yg)("p",null,"If you restart the server, you will see in the console:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"connect\n1\n2\n3\n4\n# the server is restarted, the client automatically reconnects\nconnect\n9\n10\n11\n")),(0,r.yg)("p",null,"Without the ",(0,r.yg)("inlineCode",{parentName:"p"},"volatile")," flag, you would see:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"connect\n1\n2\n3\n4\n# the server is restarted, the client automatically reconnects and sends its buffered events\nconnect\n5\n6\n7\n8\n9\n10\n11\n")))}u.isMDXComponent=!0}}]);