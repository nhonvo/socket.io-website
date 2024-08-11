"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[21],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),g=c(n),u=i,m=g["".concat(s,".").concat(u)]||g[u]||p[u]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[g]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(8168),i=(n(6540),n(5680));const o={title:"Version 4.5.0",sidebar_label:"4.5.0 (April 23, 2022)",sidebar_position:107,toc_max_heading_level:4},l=void 0,r={unversionedId:"changelog/4.5.0",id:"changelog/4.5.0",title:"Version 4.5.0",description:"April 23, 2022",source:"@site/docs/changelog/4.5.0.md",sourceDirName:"changelog",slug:"/changelog/4.5.0",permalink:"/docs/v4/changelog/4.5.0",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/docs/changelog/4.5.0.md",tags:[],version:"current",lastUpdatedAt:1679932954,formattedLastUpdatedAt:"Mar 27, 2023",sidebarPosition:107,frontMatter:{title:"Version 4.5.0",sidebar_label:"4.5.0 (April 23, 2022)",sidebar_position:107,toc_max_heading_level:4},sidebar:"changelogSidebar",previous:{title:"4.5.1 (May 17, 2022)",permalink:"/docs/v4/changelog/4.5.1"}},s={},c=[{value:"Server",id:"server",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3},{value:"Catch-all listeners for outgoing packets",id:"catch-all-listeners-for-outgoing-packets",level:4},{value:"Broadcast and expect multiple acknowledgements",id:"broadcast-and-expect-multiple-acknowledgements",level:4},{value:"<code>maxHttpBufferSize</code> value negotiation",id:"maxhttpbuffersize-value-negotiation",level:4},{value:"Dependencies",id:"dependencies",level:3},{value:"Client",id:"client",level:2},{value:"Features",id:"features-1",level:3},{value:"Additional details for the disconnect event",id:"additional-details-for-the-disconnect-event",level:4},{value:"Catch-all listeners for outgoing packets",id:"catch-all-listeners-for-outgoing-packets-1",level:4},{value:"Slice write buffer according to the maxPayload value",id:"slice-write-buffer-according-to-the-maxpayload-value",level:4},{value:"Dependencies",id:"dependencies-1",level:3}],d={toc:c},g="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"April 23, 2022")),(0,i.yg)("h2",{id:"server"},"Server"),(0,i.yg)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"typings:")," ensure compatibility with TypeScript 3.x (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io/issues/4259"},"#4259"),") (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io/commit/02c87a85614e217b8e7b93753f315790ae9d99f6"},"02c87a8"),")")),(0,i.yg)("h3",{id:"features"},"Features"),(0,i.yg)("h4",{id:"catch-all-listeners-for-outgoing-packets"},"Catch-all listeners for outgoing packets"),(0,i.yg)("p",null,"This is similar to ",(0,i.yg)("inlineCode",{parentName:"p"},"onAny()"),", but for outgoing packets."),(0,i.yg)("p",null,"Syntax:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"socket.onAnyOutgoing((event, ...args) => {\n  console.log(event);\n});\n")),(0,i.yg)("p",null,"Added in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io/commit/531104d332690138b7aab84d5583d6204132c8b4"},"531104d"),"."),(0,i.yg)("h4",{id:"broadcast-and-expect-multiple-acknowledgements"},"Broadcast and expect multiple acknowledgements"),(0,i.yg)("p",null,"Syntax:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},'io.timeout(1000).emit("some-event", (err, responses) => {\n  // ...\n});\n')),(0,i.yg)("p",null,"Added in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io/commit/8b204570a94979bbec307f23ca078f30f5cf07b0"},"8b20457"),"."),(0,i.yg)("h4",{id:"maxhttpbuffersize-value-negotiation"},(0,i.yg)("inlineCode",{parentName:"h4"},"maxHttpBufferSize")," value negotiation"),(0,i.yg)("p",null,'A "maxPayload" field is now included in the Engine.IO handshake, so that clients in HTTP long-polling can decide how many packets they have to send to stay under the ',(0,i.yg)("inlineCode",{parentName:"p"},"maxHttpBufferSize")," value."),(0,i.yg)("p",null,"This is a backward compatible change which should not mandate a new major revision of the protocol (we stay in v4), as we only add a field in the JSON-encoded handshake data:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'0{"sid":"lv_VI97HAXpY6yYWAAAC","upgrades":["websocket"],"pingInterval":25000,"pingTimeout":5000,"maxPayload":1000000}\n')),(0,i.yg)("p",null,"Added in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/engine.io/commit/088dcb4dff60df39785df13d0a33d3ceaa1dff38"},"088dcb4"),"."),(0,i.yg)("h3",{id:"dependencies"},"Dependencies"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io/releases/tag/6.2.0"},(0,i.yg)("inlineCode",{parentName:"a"},"engine.io@~6.2.0"))," (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io/compare/6.1.0...6.2.0"},"https://github.com/socketio/engine.io/compare/6.1.0...6.2.0"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/websockets/ws/releases/tag/8.2.3"},(0,i.yg)("inlineCode",{parentName:"a"},"ws@~8.2.3"))," (no change)")),(0,i.yg)("h2",{id:"client"},"Client"),(0,i.yg)("h3",{id:"features-1"},"Features"),(0,i.yg)("h4",{id:"additional-details-for-the-disconnect-event"},"Additional details for the disconnect event"),(0,i.yg)("p",null,'The "disconnect" event will now include additional details to help debugging if anything has gone wrong.'),(0,i.yg)("p",null,"Example when a payload is over the maxHttpBufferSize value in HTTP long-polling mode:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},'socket.on("disconnect", (reason, details) => {\n  console.log(reason); // "transport error"\n\n  // in that case, details is an error object\n  console.log(details.message); "xhr post error"\n  console.log(details.description); // 413 (the HTTP status of the response)\n\n  // details.context refers to the XMLHttpRequest object\n  console.log(details.context.status); // 413\n  console.log(details.context.responseText); // ""\n});\n')),(0,i.yg)("p",null,"Added in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-client/commit/b862924b7f1720979e5db2f0154906b305d420e3"},"b862924"),"."),(0,i.yg)("h4",{id:"catch-all-listeners-for-outgoing-packets-1"},"Catch-all listeners for outgoing packets"),(0,i.yg)("p",null,"This is similar to ",(0,i.yg)("inlineCode",{parentName:"p"},"onAny()"),", but for outgoing packets."),(0,i.yg)("p",null,"Syntax:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"socket.onAnyOutgoing((event, ...args) => {\n  console.log(event);\n});\n")),(0,i.yg)("p",null,"Added in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-client/commit/74e3e601a43133b2c0ea43c3de2764cc55b57b5a"},"74e3e60"),"."),(0,i.yg)("h4",{id:"slice-write-buffer-according-to-the-maxpayload-value"},"Slice write buffer according to the maxPayload value"),(0,i.yg)("p",null,'The server will now include a "maxPayload" field in the handshake details, allowing the clients to decide how many packets they have to send to stay under the ',(0,i.yg)("inlineCode",{parentName:"p"},"maxHttpBufferSize")," value."),(0,i.yg)("p",null,"Added in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/engine.io-client/commit/46fdc2f0ed352b454614247406689edc9d908927"},"46fdc2f"),"."),(0,i.yg)("h3",{id:"dependencies-1"},"Dependencies"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io-client/releases/tag/6.2.1"},(0,i.yg)("inlineCode",{parentName:"a"},"engine.io-client@~6.2.1"))," (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io-client/compare/6.1.1...6.2.1"},"https://github.com/socketio/engine.io-client/compare/6.1.1...6.2.1"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/websockets/ws/releases/tag/8.2.3"},(0,i.yg)("inlineCode",{parentName:"a"},"ws@~8.2.3"))," (no change)")))}p.isMDXComponent=!0}}]);