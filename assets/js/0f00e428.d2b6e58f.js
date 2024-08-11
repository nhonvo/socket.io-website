"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[9576],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>u});var o=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,u=p["".concat(s,".").concat(d)]||p[d]||g[d]||i;return t?o.createElement(u,r(r({ref:n},m),{},{components:t})):o.createElement(u,r({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1145:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(8168),a=(t(6540),t(5680));const i={title:"Migrating from 3.x to 4.0",sidebar_position:2,slug:"/migrating-from-3-x-to-4-0/",toc_max_heading_level:4},r=void 0,l={unversionedId:"categories/Migrations/migrating-from-3-to-4",id:"categories/Migrations/migrating-from-3-to-4",title:"Migrating from 3.x to 4.0",description:"The 4.0.0 release adds quite a lot of new features, which are detailed below, but it also contains a few API breaking changes (hence the major bump).",source:"@site/docs/categories/07-Migrations/migrating-from-3-to-4.md",sourceDirName:"categories/07-Migrations",slug:"/migrating-from-3-x-to-4-0/",permalink:"/docs/v4/migrating-from-3-x-to-4-0/",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/docs/categories/07-Migrations/migrating-from-3-to-4.md",tags:[],version:"current",lastUpdatedAt:1687760438,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:2,frontMatter:{title:"Migrating from 3.x to 4.0",sidebar_position:2,slug:"/migrating-from-3-x-to-4-0/",toc_max_heading_level:4},sidebar:"sidebar",previous:{title:"Migrating from 2.x to 3.0",permalink:"/docs/v4/migrating-from-2-x-to-3-0/"},next:{title:"FAQ",permalink:"/docs/v4/faq/"}},s={},c=[{value:"Breaking changes",id:"breaking-changes",level:3},{value:"<code>io.to()</code> is now immutable",id:"ioto-is-now-immutable",level:4},{value:"<code>wsEngine</code> option",id:"wsengine-option",level:4},{value:"Configuration",id:"configuration",level:3},{value:"Ensure compatibility with Swift v15 clients",id:"ensure-compatibility-with-swift-v15-clients",level:4},{value:"The default value of <code>pingTimeout</code> was increased",id:"the-default-value-of-pingtimeout-was-increased",level:4},{value:"New features",id:"new-features",level:3},{value:"Allow excluding specific rooms when broadcasting",id:"allow-excluding-specific-rooms-when-broadcasting",level:4},{value:"Allow to pass an array to <code>io.to()</code>",id:"allow-to-pass-an-array-to-ioto",level:4},{value:"Additional utility methods",id:"additional-utility-methods",level:4},{value:"Typed events",id:"typed-events",level:4},{value:"<code>autoUnref</code> option",id:"autounref-option",level:4},{value:"Known migration issues",id:"known-migration-issues",level:3}],m={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,o.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The 4.0.0 release adds quite a lot of new features, which are detailed ",(0,a.yg)("a",{parentName:"p",href:"#new-features"},"below"),", but it also contains a few API breaking changes (hence the major bump)."),(0,a.yg)("p",null,"Please note that these breaking changes only impact the API on the server side. The Socket.IO protocol itself was not updated, so a v3 client ",(0,a.yg)("strong",{parentName:"p"},"will")," be able to reach a v4 server and vice-versa. Besides, the compatibility mode (",(0,a.yg)("a",{parentName:"p",href:"/docs/v4/server-options/#alloweio3"},(0,a.yg)("inlineCode",{parentName:"a"},"allowEIO3: true")),") is still available between a Socket.IO v2 client and a Socket.IO v4 server."),(0,a.yg)("p",null,"Here is the complete list of changes:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#breaking-changes"},"Breaking changes"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#ioto-is-now-immutable"},(0,a.yg)("inlineCode",{parentName:"a"},"io.to()")," is now immutable")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#wsengine-option"},(0,a.yg)("inlineCode",{parentName:"a"},"wsEngine")," option")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#configuration"},"Configuration"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#ensure-compatibility-with-swift-v15-clients"},"Ensure compatibility with Swift v15 clients")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#the-default-value-of-pingtimeout-was-increased"},"The default value of ",(0,a.yg)("inlineCode",{parentName:"a"},"pingTimeout")," was increased")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#new-features"},"New features"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#allow-excluding-specific-rooms-when-broadcasting"},"Allow excluding specific rooms when broadcasting")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#allow-to-pass-an-array-to-ioto"},"Allow to pass an array to ",(0,a.yg)("inlineCode",{parentName:"a"},"io.to()"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#additional-utility-methods"},"Additional utility methods")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#typed-events"},"Typed events")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#autounref-option"},(0,a.yg)("inlineCode",{parentName:"a"},"autoUnref")," option")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#known-migration-issues"},"Known migration issues"))),(0,a.yg)("h3",{id:"breaking-changes"},"Breaking changes"),(0,a.yg)("h4",{id:"ioto-is-now-immutable"},(0,a.yg)("inlineCode",{parentName:"h4"},"io.to()")," is now immutable"),(0,a.yg)("p",null,"Previously, broadcasting to a given room (by calling ",(0,a.yg)("inlineCode",{parentName:"p"},"io.to()"),") would mutate the io instance, which could lead to surprising behaviors, like:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'io.to("room1");\nio.to("room2").emit(/* ... */); // also sent to room1\n\n// or with async/await\nio.to("room3").emit("details", await fetchDetails()); // random behavior: maybe in room3, maybe to all clients\n')),(0,a.yg)("p",null,"Calling ",(0,a.yg)("inlineCode",{parentName:"p"},"io.to()")," (or any other broadcast modifier) will now return an immutable instance."),(0,a.yg)("p",null,"Examples:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const operator1 = io.to("room1");\nconst operator2 = operator1.to("room2");\nconst operator3 = socket.broadcast;\nconst operator4 = socket.to("room3").to("room4");\n\noperator1.emit(/* ... */); // only to clients in "room1"\noperator2.emit(/* ... */); // to clients in "room1" or in "room2"\noperator3.emit(/* ... */); // to all clients but the sender\noperator4.emit(/* ... */); // to clients in "room3" or in "room4" but the sender\n')),(0,a.yg)("h4",{id:"wsengine-option"},(0,a.yg)("inlineCode",{parentName:"h4"},"wsEngine")," option"),(0,a.yg)("p",null,"The format of the ",(0,a.yg)("a",{parentName:"p",href:"/docs/v4/server-options/#wsengine"},(0,a.yg)("inlineCode",{parentName:"a"},"wsEngine"))," option was updated in order to get rid of the following error:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Critical dependency: the request of a dependency is an expression")),(0,a.yg)("p",null,"when bundling the server with webpack."),(0,a.yg)("p",null,"Before:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const io = require("socket.io")(httpServer, {\n  wsEngine: "eiows"\n});\n')),(0,a.yg)("p",null,"After:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const io = require("socket.io")(httpServer, {\n  wsEngine: require("eiows").Server\n});\n')),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("h4",{id:"ensure-compatibility-with-swift-v15-clients"},"Ensure compatibility with Swift v15 clients"),(0,a.yg)("p",null,"Before version 16.0.0, the Swift client would not include the ",(0,a.yg)("inlineCode",{parentName:"p"},"EIO")," query parameter in the HTTP requests, and the Socket.IO v3 server would infer ",(0,a.yg)("inlineCode",{parentName:"p"},"EIO=4")," by default."),(0,a.yg)("p",null,"That's why a Swift client v15 was not able to connect to the server, even when the compatibility mode was enabled (",(0,a.yg)("a",{parentName:"p",href:"/docs/v4/server-options/#alloweio3"},(0,a.yg)("inlineCode",{parentName:"a"},"allowEIO3: true")),"), unless you explicitly specified the query param:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-swift"},'let manager = SocketManager(socketURL: URL(string: "http://localhost:8080")!, config: [\n  .log(true),\n  .connectParams(["EIO": "3"])\n])\nlet socket = manager.defaultSocket\n')),(0,a.yg)("p",null,"The Socket.IO v4 server will now infer ",(0,a.yg)("inlineCode",{parentName:"p"},"EIO=3")," if the ",(0,a.yg)("inlineCode",{parentName:"p"},"EIO")," query param is not included."),(0,a.yg)("h4",{id:"the-default-value-of-pingtimeout-was-increased"},"The default value of ",(0,a.yg)("inlineCode",{parentName:"h4"},"pingTimeout")," was increased"),(0,a.yg)("p",null,"The default value of ",(0,a.yg)("a",{parentName:"p",href:"/docs/v4/server-options/#pingtimeout"},(0,a.yg)("inlineCode",{parentName:"a"},"pingTimeout"))," (used in the ",(0,a.yg)("a",{parentName:"p",href:"/docs/v4/how-it-works/#disconnection-detection"},"heartbeat mechanism"),") value was updated from 60000 to 5000 in ",(0,a.yg)("inlineCode",{parentName:"p"},"socket.io@2.1.0")," (March 2018)."),(0,a.yg)("p",null,"The reasoning back then:"),(0,a.yg)("p",null,'Some users experienced long delays between disconnection on the server-side and on the client-side. The "disconnect" event would take a long time to fire in the browser, probably due to a timer being delayed. Hence the change.'),(0,a.yg)("p",null,"That being said, the current value (5s) caused unexpected disconnections when a big payload was sent over a slow network, because it prevents the ping-pong packets from being exchanged between the client and the server. This can also happen when a synchronous task blocks the server for more than 5 seconds."),(0,a.yg)("p",null,"The new value (20s) thus seems like a good balance between quick disconnection detection and tolerance to various delays."),(0,a.yg)("h3",{id:"new-features"},"New features"),(0,a.yg)("h4",{id:"allow-excluding-specific-rooms-when-broadcasting"},"Allow excluding specific rooms when broadcasting"),(0,a.yg)("p",null,"Thanks to the awesome work of ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/sebamarynissen"},"Sebastiaan Marynissen"),", you can now exclude a specific room when broadcasting:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'io.except("room1").emit(/* ... */); // to all clients except the ones in "room1"\nio.to("room2").except("room3").emit(/* ... */); // to all clients in "room2" except the ones in "room3"\n\nsocket.broadcast.except("room1").emit(/* ... */); // to all clients except the ones in "room1" and the sender\nsocket.except("room1").emit(/* ... */); // same as above\nsocket.to("room4").except("room5").emit(/* ... */); // to all clients in "room4" except the ones in "room5" and the sender\n')),(0,a.yg)("h4",{id:"allow-to-pass-an-array-to-ioto"},"Allow to pass an array to ",(0,a.yg)("inlineCode",{parentName:"h4"},"io.to()")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"to()")," method now accepts an array of rooms."),(0,a.yg)("p",null,"Before:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const rooms = ["room1", "room2", "room3"];\nfor (const room of rooms) {\n  io.to(room);\n}\n// broadcast to clients in "room1", "room2" or "room3"\n// WARNING !!! this does not work anymore in v4, see the breaking change above\nio.emit(/* ... */);\n')),(0,a.yg)("p",null,"After:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'io.to(["room1", "room2", "room3"]).emit(/* ... */);\n\nsocket.to(["room1", "room2", "room3"]).emit(/* ... */);\n')),(0,a.yg)("h4",{id:"additional-utility-methods"},"Additional utility methods"),(0,a.yg)("p",null,"Some (long-awaited) methods were added:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"socketsJoin"),": makes the matching socket instances join the specified rooms")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'// make all Socket instances join the "room1" room\nio.socketsJoin("room1");\n\n// make all Socket instances of the "admin" namespace in the "room1" room join the "room2" room\nio.of("/admin").in("room1").socketsJoin("room2");\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"socketsLeave"),": makes the matching socket instances leave the specified rooms")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'// make all Socket instances leave the "room1" room\nio.socketsLeave("room1");\n\n// make all Socket instances of the "admin" namespace in the "room1" room leave the "room2" room\nio.of("/admin").in("room1").socketsLeave("room2");\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"disconnectSockets"),": makes the matching socket instances disconnect")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'// make all Socket instances disconnect\nio.disconnectSockets();\n\n// make all Socket instances of the "admin" namespace in the "room1" room disconnect\nio.of("/admin").in("room1").disconnectSockets();\n\n// this also works with a single socket ID\nio.of("/admin").in(theSocketId).disconnectSockets();\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"fetchSockets"),": returns the matching socket instances")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'// return all Socket instances of the main namespace\nconst sockets = await io.fetchSockets();\n\n// return all Socket instances of the "admin" namespace in the "room1" room\nconst sockets = await io.of("/admin").in("room1").fetchSockets();\n\n// this also works with a single socket ID\nconst sockets = await io.in(theSocketId).fetchSockets();\n')),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"sockets")," variable in the example above is an array of objects exposing a subset of the usual Socket class:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"for (const socket of sockets) {\n  console.log(socket.id);\n  console.log(socket.handshake);\n  console.log(socket.rooms);\n  socket.emit(/* ... */);\n  socket.join(/* ... */);\n  socket.leave(/* ... */);\n  socket.disconnect(/* ... */);\n}\n")),(0,a.yg)("p",null,"Those methods share the same semantics as broadcasting, and the same filters apply:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'io.of("/admin").in("room1").except("room2").local.disconnectSockets();\n')),(0,a.yg)("p",null,'Which makes all Socket instances of the "admin" namespace'),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'in the "room1" room (',(0,a.yg)("inlineCode",{parentName:"li"},'in("room1")')," or ",(0,a.yg)("inlineCode",{parentName:"li"},'to("room1")'),")"),(0,a.yg)("li",{parentName:"ul"},'except the ones in "room2" (',(0,a.yg)("inlineCode",{parentName:"li"},'except("room2")'),")"),(0,a.yg)("li",{parentName:"ul"},"and only on the current Socket.IO server (",(0,a.yg)("inlineCode",{parentName:"li"},"local"),")")),(0,a.yg)("p",null,"disconnect."),(0,a.yg)("h4",{id:"typed-events"},"Typed events"),(0,a.yg)("p",null,"Thanks to the awesome work of ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/MaximeKjaer"},"Maxime Kjaer"),", TypeScript users can now type the events sent between the client and the server."),(0,a.yg)("p",null,"First, you declare the signature of each event:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"interface ClientToServerEvents {\n  noArg: () => void;\n  basicEmit: (a: number, b: string, c: number[]) => void;\n}\n\ninterface ServerToClientEvents {\n  withAck: (d: string, cb: (e: number) => void) => void;\n}\n")),(0,a.yg)("p",null,"And you can now use them on the client side:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'import { io, Socket } from "socket.io-client";\n\nconst socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();\n\nsocket.emit("noArg");\n\nsocket.emit("basicEmit", 1, "2", [3]);\n\nsocket.on("withAck", (d, cb) => {\n    cb(4);\n});\n')),(0,a.yg)("p",null,"Your IDE should now properly infer the type of each argument:"),(0,a.yg)("p",null,"Similarly on the server side (the ",(0,a.yg)("inlineCode",{parentName:"p"},"ServerToClientEvents")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ClientToServerEvents")," are reversed):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'import { Server } from "socket.io";\n\nconst io = new Server<ClientToServerEvents, ServerToClientEvents>(3000);\n\nio.on("connection", (socket) => {\n    socket.on("noArg", () => {\n      // ...\n    });\n\n    socket.on("basicEmit", (a, b, c) => {\n      // ...\n    });\n\n    socket.emit("withAck", "42", (e) => {\n        console.log(e);\n    });\n});\n')),(0,a.yg)("p",null,"By default, the events are untyped and the arguments will be inferred as ",(0,a.yg)("inlineCode",{parentName:"p"},"any"),"."),(0,a.yg)("h4",{id:"autounref-option"},(0,a.yg)("inlineCode",{parentName:"h4"},"autoUnref")," option"),(0,a.yg)("p",null,"And finally, thanks to the awesome work of ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/KCErb"},"KC Erb"),", the ",(0,a.yg)("inlineCode",{parentName:"p"},"autoUnref")," option was added."),(0,a.yg)("p",null,"With ",(0,a.yg)("inlineCode",{parentName:"p"},"autoUnref")," set to true (default: false), the Socket.IO client will allow the program to exit if there is no other active timer/TCP socket in the event system (even if the client is connected):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const socket = io({\n  autoUnref: true\n});\n")),(0,a.yg)("p",null,"Note: this option only applies to Node.js clients."),(0,a.yg)("h3",{id:"known-migration-issues"},"Known migration issues"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"cannot get emit of undefined"))),(0,a.yg)("p",null,"The following expression:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'socket.to("room1").broadcast.emit(/* ... */);\n')),(0,a.yg)("p",null,"was working in Socket.IO v3 but is now considered invalid, as the ",(0,a.yg)("inlineCode",{parentName:"p"},"broadcast")," flag is useless because the ",(0,a.yg)("inlineCode",{parentName:"p"},'to("room1")')," method already puts the Socket instance in broadcasting mode."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'// VALID\nsocket.broadcast.emit(/* ... */); // to all clients but the sender\nsocket.to("room1").emit(/* ... */); // to clients in "room1" but the sender\n\n// VALID (but useless \'broadcast\' flag)\nsocket.broadcast.to("room1").emit(/* ... */);\n\n// INVALID\nsocket.to("room1").broadcast.emit(/* ... */);\n')))}g.isMDXComponent=!0}}]);