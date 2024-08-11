"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[83],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(m,o(o({ref:t},g),{},{components:n})):a.createElement(m,o({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(8168),r=(n(6540),n(5680));const i={title:"Delivery guarantees",sidebar_position:3,slug:"/delivery-guarantees",toc_max_heading_level:4},o=void 0,s={unversionedId:"categories/Documentation/delivery-guarantees",id:"categories/Documentation/delivery-guarantees",title:"Delivery guarantees",description:"Message ordering",source:"@site/docs/categories/01-Documentation/delivery-guarantees.md",sourceDirName:"categories/01-Documentation",slug:"/delivery-guarantees",permalink:"/socket.io-website/docs/v4/delivery-guarantees",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/docs/categories/01-Documentation/delivery-guarantees.md",tags:[],version:"current",lastUpdatedAt:1676383985,formattedLastUpdatedAt:"Feb 14, 2023",sidebarPosition:3,frontMatter:{title:"Delivery guarantees",sidebar_position:3,slug:"/delivery-guarantees",toc_max_heading_level:4},sidebar:"sidebar",previous:{title:"How it works",permalink:"/socket.io-website/docs/v4/how-it-works/"},next:{title:"Connection state recovery",permalink:"/socket.io-website/docs/v4/connection-state-recovery"}},l={},c=[{value:"Message ordering",id:"message-ordering",level:2},{value:"Message arrival",id:"message-arrival",level:2},{value:"At most once",id:"at-most-once",level:3},{value:"At least once",id:"at-least-once",level:3},{value:"From client to server",id:"from-client-to-server",level:4},{value:"From server to client",id:"from-server-to-client",level:4}],g={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"message-ordering"},"Message ordering"),(0,r.yg)("p",null,"Socket.IO does guarantee message ordering, no matter which low-level transport is used (even during an upgrade from HTTP long-polling to WebSocket)."),(0,r.yg)("p",null,"This is achieved thanks to:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the guarantees provided by the underlying TCP connection"),(0,r.yg)("li",{parentName:"ul"},"the careful design of the ",(0,r.yg)("a",{parentName:"li",href:"/socket.io-website/docs/v4/how-it-works/#upgrade-mechanism"},"upgrade mechanism"))),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'socket.emit("event1");\nsocket.emit("event2");\nsocket.emit("event3");\n')),(0,r.yg)("p",null,"In the example above, the events will always be received in the same order by the other side (provided that they actually arrive, see ",(0,r.yg)("a",{parentName:"p",href:"#message-arrival"},"below"),")."),(0,r.yg)("h2",{id:"message-arrival"},"Message arrival"),(0,r.yg)("h3",{id:"at-most-once"},"At most once"),(0,r.yg)("p",null,"By default, Socket.IO provides an ",(0,r.yg)("strong",{parentName:"p"},"at most once")," guarantee of delivery:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"if the connection is broken while an event is being sent, then there is no guarantee that the other side has received it and there will be no retry upon reconnection"),(0,r.yg)("li",{parentName:"ul"},"a disconnected client will ",(0,r.yg)("a",{parentName:"li",href:"/socket.io-website/docs/v4/client-offline-behavior/"},"buffer events until reconnection")," (though the previous point still applies)"),(0,r.yg)("li",{parentName:"ul"},"there is no such buffer on the server, which means that any event that was missed by a disconnected client will not be transmitted to that client upon reconnection")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"As of now, additional delivery guarantees must be implemented in your application.")),(0,r.yg)("h3",{id:"at-least-once"},"At least once"),(0,r.yg)("h4",{id:"from-client-to-server"},"From client to server"),(0,r.yg)("p",null,"From the client side, you can achieve an ",(0,r.yg)("strong",{parentName:"p"},"at least once")," guarantee with ",(0,r.yg)("a",{parentName:"p",href:"/socket.io-website/docs/v4/emitting-events/#with-timeout"},"acknowledgements and timeouts"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'function emit(socket, event, arg) {\n  socket.timeout(2000).emit(event, arg, (err) => {\n    if (err) {\n      // no ack from the server, let\'s retry\n      emit(socket, event, arg);\n    }\n  });\n}\n\nemit(socket, "foo", "bar");\n')),(0,r.yg)("p",null,"In the example above, the client will retry to send the event after a given delay, so the server might receive the same event several times."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Even in that case, any pending event will be lost if the user refreshes its tab.")),(0,r.yg)("h4",{id:"from-server-to-client"},"From server to client"),(0,r.yg)("p",null,"For events sent by the server, additional delivery guarantees can be implemented by:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"assigning a unique ID to each event"),(0,r.yg)("li",{parentName:"ul"},"persisting the events in a database"),(0,r.yg)("li",{parentName:"ul"},"storing the offset of the last received event on the client side, and send it upon reconnection")),(0,r.yg)("p",null,"Example:"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'const socket = io({\n  auth: {\n    offset: undefined\n  }\n});\n\nsocket.on("my-event", ({ id, data }) => {\n  // do something with the data, and then update the offset\n  socket.auth.offset = id;\n});\n')),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", async (socket) => {\n  const offset = socket.handshake.auth.offset;\n  if (offset) {\n    // this is a reconnection\n    for (const event of await fetchMissedEventsFromDatabase(offset)) {\n      socket.emit("my-event", event);\n    }\n  } else {\n    // this is a first connection\n  }\n});\n\nsetInterval(async () => {\n  const event = {\n    id: generateUniqueId(),\n    data: new Date().toISOString()\n  }\n\n  await persistEventToDatabase(event);\n  io.emit("my-event", event);\n}, 1000);\n')),(0,r.yg)("p",null,"Implementing the missing methods (",(0,r.yg)("inlineCode",{parentName:"p"},"fetchMissedEventsFromDatabase()"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"generateUniqueId()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"persistEventToDatabase()"),") is database-specific and is left as an exercise for the reader."),(0,r.yg)("p",null,"References:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/socket.io-website/docs/v4/client-options/#socket-options"},(0,r.yg)("inlineCode",{parentName:"a"},"socket.auth"))," (client)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/socket.io-website/docs/v4/server-api/#sockethandshake"},(0,r.yg)("inlineCode",{parentName:"a"},"socket.handshake"))," (server)")))}u.isMDXComponent=!0}}]);