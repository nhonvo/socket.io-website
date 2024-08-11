"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[9503],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={title:"Performance tuning",sidebar_position:6,slug:"/performance-tuning/"},i=void 0,l={unversionedId:"categories/Advanced/performance-tuning",id:"categories/Advanced/performance-tuning",title:"Performance tuning",description:"Here are some tips to improve the performance of your Socket.IO server:",source:"@site/docs/categories/06-Advanced/performance-tuning.md",sourceDirName:"categories/06-Advanced",slug:"/performance-tuning/",permalink:"/docs/v4/performance-tuning/",draft:!1,editUrl:"https://github.com/socketio/nhonvo.github.io/edit/main/docs/categories/06-Advanced/performance-tuning.md",tags:[],version:"current",lastUpdatedAt:1700652112,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:6,frontMatter:{title:"Performance tuning",sidebar_position:6,slug:"/performance-tuning/"},sidebar:"sidebar",previous:{title:"Load testing",permalink:"/docs/v4/load-testing/"},next:{title:"Migrating from 2.x to 3.0",permalink:"/docs/v4/migrating-from-2-x-to-3-0/"}},s={},c=[{value:"At the Socket.IO level",id:"at-the-socketio-level",level:2},{value:"Install <code>ws</code> native add-ons",id:"install-ws-native-add-ons",level:3},{value:"Use another WebSocket server implementation",id:"use-another-websocket-server-implementation",level:3},{value:"Use a custom parser",id:"use-a-custom-parser",level:3},{value:"Discard the initial HTTP request",id:"discard-the-initial-http-request",level:3},{value:"At the OS level",id:"at-the-os-level",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.yg)(u,(0,r.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Here are some tips to improve the performance of your Socket.IO server:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#at-the-socketio-level"},"at the Socket.IO level")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#at-the-os-level"},"at the OS level"))),(0,a.yg)("p",null,"You might also be interested in ",(0,a.yg)("a",{parentName:"p",href:"/docs/v4/using-multiple-nodes/"},"scaling to multiple nodes"),"."),(0,a.yg)("h2",{id:"at-the-socketio-level"},"At the Socket.IO level"),(0,a.yg)("p",null,"Since, in most cases, the Socket.IO connection will be established with WebSocket, the performance of your Socket.IO server will be strongly linked to the performance of the underlying WebSocket server (",(0,a.yg)("a",{parentName:"p",href:"https://github.com/websockets/ws"},(0,a.yg)("inlineCode",{parentName:"a"},"ws")),", by default)."),(0,a.yg)("h3",{id:"install-ws-native-add-ons"},"Install ",(0,a.yg)("inlineCode",{parentName:"h3"},"ws")," native add-ons"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ws")," comes with two optional binary add-ons which improve certain operations. Prebuilt binaries are available for the most popular platforms so you don't necessarily need to have a C++ compiler installed on your machine."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/bufferutil"},"bufferutil"),": Allows to efficiently perform operations such as masking and unmasking the data payload of the WebSocket frames."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/utf-8-validate"},"utf-8-validate"),": Allows to efficiently check if a message contains valid UTF-8 as required by the spec.")),(0,a.yg)("p",null,"To install those packages:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ npm install --save-optional bufferutil utf-8-validate\n")),(0,a.yg)("p",null,"Please note that these packages are optional, the WebSocket server will fallback to the Javascript implementation if they are not available. More information can be found ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/websockets/ws/#opt-in-for-performance-and-spec-compliance"},"here"),"."),(0,a.yg)("h3",{id:"use-another-websocket-server-implementation"},"Use another WebSocket server implementation"),(0,a.yg)("p",null,"For example, you can use the ",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/eiows"},"eiows")," package, which is a fork of the (now deprecated) ",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/uws"},"uws")," package:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ npm install eiows\n")),(0,a.yg)("p",null,"And then use the ",(0,a.yg)("a",{parentName:"p",href:"/docs/v4/server-options/#wsengine"},(0,a.yg)("inlineCode",{parentName:"a"},"wsEngine"))," option:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const { createServer } = require("http");\nconst { Server } = require("socket.io");\n\nconst httpServer = createServer();\nconst io = new Server(httpServer, {\n  wsEngine: require("eiows").Server\n});\n')),(0,a.yg)("h3",{id:"use-a-custom-parser"},"Use a custom parser"),(0,a.yg)("p",null,"If you send binary data over the Socket.IO connection, using a ",(0,a.yg)("a",{parentName:"p",href:"/docs/v4/custom-parser/"},"custom parser")," like the one based on ",(0,a.yg)("a",{parentName:"p",href:"/docs/v4/custom-parser/#the-msgpack-parser"},"msgpack")," might be interesting, as by default each buffer will be sent in its own WebSocket frame."),(0,a.yg)("p",null,"Usage:"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Server")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const { createServer } = require("http");\nconst { Server } = require("socket.io");\nconst parser = require("socket.io-msgpack-parser");\n\nconst httpServer = createServer();\nconst io = new Server(httpServer, {\n  parser\n});\n')),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Client")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const { io } = require("socket.io-client");\nconst parser = require("socket.io-msgpack-parser");\n\nconst socket = io("https://example.com", {\n  parser\n});\n')),(0,a.yg)("h3",{id:"discard-the-initial-http-request"},"Discard the initial HTTP request"),(0,a.yg)("p",null,"By default, a reference to the first HTTP request of each session is kept in memory. This reference is needed when working with ",(0,a.yg)("inlineCode",{parentName:"p"},"express-session")," for example (see ",(0,a.yg)("a",{parentName:"p",href:"/how-to/use-with-express-session"},"here"),"), but can be discarded to save memory:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'io.engine.on("connection", (rawSocket) => {\n  rawSocket.request = null;\n});\n')),(0,a.yg)("p",null,"Before:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Memory usage before",src:n(4538).A,width:"901",height:"400"})),(0,a.yg)("p",null,"After:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Memory usage with request discarded",src:n(4724).A,width:"902",height:"401"})),(0,a.yg)("h2",{id:"at-the-os-level"},"At the OS level"),(0,a.yg)("p",null,"There are lots of good articles on how to tune your OS to accept a large number of connections. Please see ",(0,a.yg)("a",{parentName:"p",href:"https://blog.jayway.com/2015/04/13/600k-concurrent-websocket-connections-on-aws-using-node-js/"},"this one")," or ",(0,a.yg)("a",{parentName:"p",href:"https://medium.com/@elliekang/scaling-to-a-millions-websocket-concurrent-connections-at-spoon-radio-bbadd6ec1901"},"this one")," for example."),(0,a.yg)("p",null,"While ",(0,a.yg)("a",{parentName:"p",href:"/docs/v4/load-testing/"},"load testing")," your Socket.IO server, you will likely reach the two following limits:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"maximum number of open files")),(0,a.yg)("p",null,"If you can't go over 1000 concurrent connections (new clients are not able to connect), you have most certainly reached the maximum number of open files:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ ulimit -n\n1024\n")),(0,a.yg)("p",null,"To increase this number, create a new file ",(0,a.yg)("inlineCode",{parentName:"p"},"/etc/security/limits.d/custom.conf")," with the following content (requires root privileges):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"* soft nofile 1048576\n* hard nofile 1048576\n")),(0,a.yg)("p",null,"And then reload your session. Your new limit should now be updated:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ ulimit -n\n1048576\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"maximum number of available local ports")),(0,a.yg)("p",null,"If you can't go over 28000 concurrent connections, you have most certainly reached the maximum number of available local ports:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ cat /proc/sys/net/ipv4/ip_local_port_range\n32768   60999\n")),(0,a.yg)("p",null,"To increase this number, create a new file ",(0,a.yg)("inlineCode",{parentName:"p"},"/etc/sysctl.d/net.ipv4.ip_local_port_range.conf")," with the following content (again, requires root privileges):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"net.ipv4.ip_local_port_range = 10000 65535\n")),(0,a.yg)("p",null,"Note: we used ",(0,a.yg)("inlineCode",{parentName:"p"},"10000")," as a lower bound so it does not include the ports that are used by the services on the machine (like ",(0,a.yg)("inlineCode",{parentName:"p"},"5432")," for a PostgreSQL server), but you can totally use a lower value (down to ",(0,a.yg)("inlineCode",{parentName:"p"},"1024"),")."),(0,a.yg)("p",null,"Once you reboot your machine, you will now be able to happily go to 55k concurrent connections (per incoming IP)."),(0,a.yg)("p",null,"See also:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://unix.stackexchange.com/a/130798"},"https://unix.stackexchange.com/a/130798")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://making.pusher.com/ephemeral-port-exhaustion-and-how-to-avoid-it/"},"https://making.pusher.com/ephemeral-port-exhaustion-and-how-to-avoid-it/"))))}m.isMDXComponent=!0},4538:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/memory-usage-with-request-b554b6f42f70ccccc481b2b70b3f7faa.png"},4724:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/memory-usage-without-request-bd0c586f131951e79f68c17a29104e98.png"}}]);