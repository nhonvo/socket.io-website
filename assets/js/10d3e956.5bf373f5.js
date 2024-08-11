"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[9488],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var o=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(8168),a=(n(6540),n(5680));const r={title:"Load testing",sidebar_position:5,slug:"/load-testing/"},i=void 0,s={unversionedId:"categories/Advanced/load-testing",id:"categories/Advanced/load-testing",title:"Load testing",description:"Since Socket.IO has its own protocol, including handshake, heartbeats and custom packet encoding, the easiest way to load test your Socket.IO server is to use the Socket.IO client library and create a lot of clients.",source:"@site/docs/categories/06-Advanced/load-testing.md",sourceDirName:"categories/06-Advanced",slug:"/load-testing/",permalink:"/docs/v4/load-testing/",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/docs/categories/06-Advanced/load-testing.md",tags:[],version:"current",lastUpdatedAt:1631857589,formattedLastUpdatedAt:"Sep 17, 2021",sidebarPosition:5,frontMatter:{title:"Load testing",sidebar_position:5,slug:"/load-testing/"},sidebar:"sidebar",previous:{title:"Usage with PM2",permalink:"/docs/v4/pm2/"},next:{title:"Performance tuning",permalink:"/docs/v4/performance-tuning/"}},l={},c=[{value:"Artillery",id:"artillery",level:2},{value:"Manual client creation",id:"manual-client-creation",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Since Socket.IO has its ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-protocol"},"own protocol"),", including handshake, heartbeats and custom packet encoding, the easiest way to load test your Socket.IO server is to use the Socket.IO client library and create ",(0,a.yg)("em",{parentName:"p"},"a lot of")," clients."),(0,a.yg)("p",null,"There are two classic solutions to do this:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"using ",(0,a.yg)("a",{parentName:"li",href:"#artillery"},"Artillery")),(0,a.yg)("li",{parentName:"ul"},"or ",(0,a.yg)("a",{parentName:"li",href:"#manual-client-creation"},"manually manage the clients"))),(0,a.yg)("h2",{id:"artillery"},"Artillery"),(0,a.yg)("p",null,"Artillery is a great tool for load testing your application. It allows creating connections, sending events and checking acknowledgments."),(0,a.yg)("p",null,"The documentation can be found ",(0,a.yg)("a",{parentName:"p",href:"https://artillery.io/docs/guides/guides/socketio-reference.html"},"here"),"."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Important note"),": the default installation comes with a v2 client, which is ",(0,a.yg)("a",{parentName:"p",href:"/docs/v4/client-installation/#version-compatibility"},"not compatible")," with a v3/v4 server. You need to install a custom engine for this: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ptejada/artillery-engine-socketio-v3"},"https://github.com/ptejada/artillery-engine-socketio-v3")),(0,a.yg)("p",null,"Installation:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ npm install artillery artillery-engine-socketio-v3\n")),(0,a.yg)("p",null,"Sample scenario:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'# my-scenario.yml\nconfig:\n  target: "http://localhost:3000"\n  phases:\n    - duration: 60\n      arrivalRate: 10\n  engines:\n   socketio-v3: {}\n\nscenarios:\n  - name: My sample scenario\n    engine: socketio-v3\n    flow:\n      # wait for the WebSocket upgrade (optional)\n      - think: 1\n\n      # basic emit\n      - emit:\n          channel: "hello"\n          data: "world"\n\n      # emit an object\n      - emit:\n          channel: "hello"\n          data:\n            id: 42\n            status: "in progress"\n            tags:\n              - "tag1"\n              - "tag2"\n\n      # emit in a custom namespace\n      - namespace: "/my-namespace"\n        emit:\n          channel: "hello"\n          data: "world"\n\n      # emit with acknowledgement\n      - emit:\n          channel: "ping"\n        acknowledge:\n          match:\n            value: "pong"\n\n      # do nothing for 30 seconds then disconnect\n      - think: 30\n')),(0,a.yg)("p",null,"To run this scenario:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ npx artillery run my-scenario.yml\n")),(0,a.yg)("p",null,"Artillery also comes with a lot of awesome features, like the ability to ",(0,a.yg)("a",{parentName:"p",href:"https://artillery.io/docs/guides/plugins/plugin-publish-metrics.html"},"publish the metrics to various endpoints")," or ",(0,a.yg)("a",{parentName:"p",href:"https://artillery.io/docs/guides/guides/running-tests-with-artillery-pro.html"},"run the tests from AWS"),"."),(0,a.yg)("p",null,"Its only limitation is that you cannot easily test server-to-client events, as the Artillery DSL is more suited for classic client-to-server communication. Which brings us to ",(0,a.yg)("a",{parentName:"p",href:"#manual-client-creation"},"our next section"),"."),(0,a.yg)("h2",{id:"manual-client-creation"},"Manual client creation"),(0,a.yg)("p",null,"Here's a basic script to create a thousand Socket.IO clients and monitor the number of packets received per second:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const { io } = require("socket.io-client");\n\nconst URL = process.env.URL || "http://localhost:3000";\nconst MAX_CLIENTS = 1000;\nconst POLLING_PERCENTAGE = 0.05;\nconst CLIENT_CREATION_INTERVAL_IN_MS = 10;\nconst EMIT_INTERVAL_IN_MS = 1000;\n\nlet clientCount = 0;\nlet lastReport = new Date().getTime();\nlet packetsSinceLastReport = 0;\n\nconst createClient = () => {\n  // for demonstration purposes, some clients stay stuck in HTTP long-polling\n  const transports =\n    Math.random() < POLLING_PERCENTAGE ? ["polling"] : ["polling", "websocket"];\n\n  const socket = io(URL, {\n    transports,\n  });\n\n  setInterval(() => {\n    socket.emit("client to server event");\n  }, EMIT_INTERVAL_IN_MS);\n\n  socket.on("server to client event", () => {\n    packetsSinceLastReport++;\n  });\n\n  socket.on("disconnect", (reason) => {\n    console.log(`disconnect due to ${reason}`);\n  });\n\n  if (++clientCount < MAX_CLIENTS) {\n    setTimeout(createClient, CLIENT_CREATION_INTERVAL_IN_MS);\n  }\n};\n\ncreateClient();\n\nconst printReport = () => {\n  const now = new Date().getTime();\n  const durationSinceLastReport = (now - lastReport) / 1000;\n  const packetsPerSeconds = (\n    packetsSinceLastReport / durationSinceLastReport\n  ).toFixed(2);\n\n  console.log(\n    `client count: ${clientCount} ; average packets received per second: ${packetsPerSeconds}`\n  );\n\n  packetsSinceLastReport = 0;\n  lastReport = now;\n};\n\nsetInterval(printReport, 5000);\n')),(0,a.yg)("p",null,"You can use it as a starting point for load testing your own application."))}d.isMDXComponent=!0}}]);