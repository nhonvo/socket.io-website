"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[697],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var o=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),g=a,u=m["".concat(c,".").concat(g)]||m[g]||d[g]||r;return t?o.createElement(u,s(s({ref:n},p),{},{components:t})):o.createElement(u,s({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(8168),a=(t(6540),t(5680));const r={title:"Rooms",sidebar_position:3,slug:"/rooms/"},s=void 0,i={unversionedId:"categories/Server/rooms",id:"version-2.x/categories/Server/rooms",title:"Rooms",description:'Within each Namespace, you can define arbitrary channels called "Rooms" that sockets can join and leave.',source:"@site/versioned_docs/version-2.x/categories/02-Server/rooms.md",sourceDirName:"categories/02-Server",slug:"/rooms/",permalink:"/docs/v2/rooms/",draft:!1,editUrl:"https://github.com/socketio/nhonvo.github.io/edit/main/versioned_docs/version-2.x/categories/02-Server/rooms.md",tags:[],version:"2.x",lastUpdatedAt:1695803994,formattedLastUpdatedAt:"Sep 27, 2023",sidebarPosition:3,frontMatter:{title:"Rooms",sidebar_position:3,slug:"/rooms/"},sidebar:"version-2.x/sidebar",previous:{title:"Initialization",permalink:"/docs/v2/server-initialization/"},next:{title:"Namespaces",permalink:"/docs/v2/namespaces/"}},c={},l=[{value:"Joining and leaving",id:"joining-and-leaving",level:2},{value:"Default room",id:"default-room",level:2},{value:"Sample use cases",id:"sample-use-cases",level:2},{value:"Disconnection",id:"disconnection",level:2},{value:"Sending messages from the outside-world",id:"sending-messages-from-the-outside-world",level:2}],p={toc:l},m="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(m,(0,o.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Within each ",(0,a.yg)("a",{parentName:"p",href:"/docs/v2/namespaces/"},"Namespace"),', you can define arbitrary channels called "Rooms" that sockets can ',(0,a.yg)("inlineCode",{parentName:"p"},"join")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"leave"),"."),(0,a.yg)("p",null,"This is useful to broadcast data to a subset of sockets:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Room diagram",src:t(4358).A,width:"688",height:"331"})),(0,a.yg)("h2",{id:"joining-and-leaving"},"Joining and leaving"),(0,a.yg)("p",null,"You can call ",(0,a.yg)("inlineCode",{parentName:"p"},"join")," to subscribe the socket to a given channel:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', socket => {\n  socket.join('some room');\n});\n")),(0,a.yg)("p",null,"And then simply use ",(0,a.yg)("inlineCode",{parentName:"p"},"to")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"in")," (they are the same) when broadcasting or emitting:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"io.to('some room').emit('some event');\n")),(0,a.yg)("p",null,"You can emit to several rooms at the same time:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"io.to('room1').to('room2').to('room3').emit('some event');\n")),(0,a.yg)("p",null,"In that case, an ",(0,a.yg)("a",{href:"https://en.wikipedia.org/wiki/Union_(set_theory)"},"union")," is performed: every socket that is at least in one of the rooms will get the event ",(0,a.yg)("strong",{parentName:"p"},"once")," (even if the socket is in two or more rooms)."),(0,a.yg)("p",null,"You can also broadcast to a room from a given socket:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', function(socket){\n  socket.to('some room').emit('some event');\n});\n")),(0,a.yg)("p",null,"In that case, every socket in the room ",(0,a.yg)("strong",{parentName:"p"},"excluding")," the sender will get the event."),(0,a.yg)("p",null,"To leave a channel you call ",(0,a.yg)("inlineCode",{parentName:"p"},"leave")," in the same fashion as ",(0,a.yg)("inlineCode",{parentName:"p"},"join"),". Both methods are asynchronous and accept a ",(0,a.yg)("inlineCode",{parentName:"p"},"callback")," argument."),(0,a.yg)("h2",{id:"default-room"},"Default room"),(0,a.yg)("p",null,"Each ",(0,a.yg)("inlineCode",{parentName:"p"},"Socket")," in Socket.IO is identified by a random, unguessable, unique identifier ",(0,a.yg)("inlineCode",{parentName:"p"},"Socket#id"),". For your convenience, each socket automatically joins a room identified by its own id."),(0,a.yg)("p",null,"This makes it easy to broadcast messages to other sockets:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', socket => {\n  socket.on('say to someone', (id, msg) => {\n    socket.to(id).emit('my message', msg);\n  });\n});\n")),(0,a.yg)("h2",{id:"sample-use-cases"},"Sample use cases"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"broadcast data to each device / tab of a given user")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', async (socket) => {\n  const userId = await computeUserIdFromHeaders(socket);\n\n  socket.join(userId);\n\n  // and then later\n  io.to(userId).emit('hi');\n});\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"send notifications about a given entity")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', async (socket) => {\n  const projects = await fetchProjects(socket);\n\n  projects.forEach(project => socket.join('project:' + project.id));\n\n  socket.on('update project', async (payload) => {\n    const project = await updateProject(payload);\n    io.to('project:' + project.id).emit('project updated', project);\n  });\n});\n")),(0,a.yg)("h2",{id:"disconnection"},"Disconnection"),(0,a.yg)("p",null,"Upon disconnection, sockets ",(0,a.yg)("inlineCode",{parentName:"p"},"leave")," all the channels they were part of automatically, and no special teardown is needed on your part."),(0,a.yg)("p",null,"You can fetch the rooms the Socket was in by listening to the ",(0,a.yg)("inlineCode",{parentName:"p"},"disconnecting")," event:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', socket => {\n  socket.on('disconnecting', () => {\n    const rooms = Object.keys(socket.rooms);\n    // the rooms array contains at least the socket ID\n  });\n\n  socket.on('disconnect', () => {\n    // socket.rooms === {}\n  });\n});\n")),(0,a.yg)("h2",{id:"sending-messages-from-the-outside-world"},"Sending messages from the outside-world"),(0,a.yg)("p",null,"In some cases, you might want to emit events to sockets in Socket.IO namespaces / rooms from outside the context of your Socket.IO processes."),(0,a.yg)("p",null,"There are several ways to tackle this problem, like implementing your own channel to send messages into the process."),(0,a.yg)("p",null,"To facilitate this use case, we created two modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-redis"},"socket.io-redis")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-emitter"},"socket.io-emitter"))),(0,a.yg)("p",null,"By implementing the Redis ",(0,a.yg)("inlineCode",{parentName:"p"},"Adapter"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const io = require('socket.io')(3000);\nconst redis = require('socket.io-redis');\nio.adapter(redis({ host: 'localhost', port: 6379 }));\n")),(0,a.yg)("p",null,"you can then ",(0,a.yg)("inlineCode",{parentName:"p"},"emit")," messages from any other process to any channel"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const io = require('socket.io-emitter')({ host: '127.0.0.1', port: 6379 });\nsetInterval(function(){\n  io.emit('time', new Date);\n}, 5000);\n")))}d.isMDXComponent=!0},4358:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/rooms-f6c5bed4af42026ff12f6a16574a300b.png"}}]);