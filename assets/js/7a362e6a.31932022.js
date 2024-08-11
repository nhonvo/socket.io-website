"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[5968],{5680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>h});var r=o(6540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9460:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=o(8168),a=(o(6540),o(5680));const n={title:"Redis Adapter v6.0.0",slug:"/socket-io-redis-adapter-6-release/",authors:"darrachequesne"},i=void 0,s={permalink:"/blog/socket-io-redis-adapter-6-release/",editUrl:"https://github.com/socketio/nhonvo.github.io/edit/main/blog/2020-11-12-socket-io-redis-6.md",source:"@site/blog/2020-11-12-socket-io-redis-6.md",title:"Redis Adapter v6.0.0",description:"Following the release of Socket.IO v3.0.0, the Redis Adapter was updated and a new release is out: 6.0.0",date:"2020-11-12T00:00:00.000Z",formattedDate:"November 12, 2020",tags:[],readingTime:1.14,hasTruncateMarker:!0,authors:[{name:"Damien Arrachequesne",title:"Maintainer of Socket.IO",url:"https://github.com/darrachequesne",imageURL:"https://github.com/darrachequesne.png",key:"darrachequesne"}],frontMatter:{title:"Redis Adapter v6.0.0",slug:"/socket-io-redis-adapter-6-release/",authors:"darrachequesne"},prevItem:{title:"Monthly update #2",permalink:"/blog/monthly-update-2/"},nextItem:{title:"Socket.IO 3 Release",permalink:"/blog/socket-io-3-release/"}},l={authorsImageUrls:[void 0]},c=[{value:"Notable changes",id:"notable-changes",level:2},{value:"All the requests (for inter-node communication) now return a Promise instead of accepting a callback",id:"all-the-requests-for-inter-node-communication-now-return-a-promise-instead-of-accepting-a-callback",level:3},{value:"customHook and customRequest methods were removed",id:"customhook-and-customrequest-methods-were-removed",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.yg)(u,(0,r.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Following the ",(0,a.yg)("a",{parentName:"p",href:"/blog/socket-io-3-release/"},"release of Socket.IO v3.0.0"),", the Redis Adapter was updated and a new release is out: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-redis/releases/tag/6.0.0"},"6.0.0")),(0,a.yg)("p",null,"For reference, the Redis Adapter is used when broadcasting packets across a set of Socket.IO servers. It relies on Redis ",(0,a.yg)("a",{parentName:"p",href:"https://redis.io/topics/pubsub"},"Pub/Sub mechanism"),"."),(0,a.yg)("p",null,"More information about how it works: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-redis/#how-does-it-work-under-the-hood"},"https://github.com/socketio/socket.io-redis/#how-does-it-work-under-the-hood")),(0,a.yg)("p",null,"The release notes can be found here: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-redis/releases/tag/6.0.0"},"https://github.com/socketio/socket.io-redis/releases/tag/6.0.0")),(0,a.yg)("p",null,"Please note that the new release is not compatible with Socket.IO v2, and previous versions are not compatible with Socket.IO v3 (",(0,a.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-redis/#compatibility-table"},"compatibility table"),")."),(0,a.yg)("h2",{id:"notable-changes"},"Notable changes"),(0,a.yg)("h3",{id:"all-the-requests-for-inter-node-communication-now-return-a-promise-instead-of-accepting-a-callback"},"All the requests (for inter-node communication) now return a Promise instead of accepting a callback"),(0,a.yg)("p",null,"The Redis Adapter exposes additional methods for managing sockets and rooms in a multi-node setup:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"RedisAdapter.sockets()"),": returns the list of Socket IDs"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"RedisAdapter.allRooms()"),": returns the list of all rooms."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"RedisAdapter.remoteJoin(id, room)"),": make the socket join the room"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"RedisAdapter.remoteLeave(id, room)"),": make the socket leave the room"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"RedisAdapter.remoteDisconnect(id, close)"),": disconnect the socket with the given id")),(0,a.yg)("p",null,"Those methods used to accept a callback argument, they will now return a Promise."),(0,a.yg)("p",null,"Before:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"io.of('/').adapter.allRooms((err, rooms) => {\n  console.log(rooms); // an array containing all rooms (across all nodes)\n});\n")),(0,a.yg)("p",null,"After:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const rooms = await io.of('/').adapter.allRooms();\nconsole.log(rooms); // a Set containing all rooms (across all nodes)\n")),(0,a.yg)("h3",{id:"customhook-and-customrequest-methods-were-removed"},"customHook and customRequest methods were removed"),(0,a.yg)("p",null,"Those methods will be replaced by a more intuitive API in a future iteration."))}d.isMDXComponent=!0}}]);