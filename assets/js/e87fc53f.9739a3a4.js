"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[9864],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=g;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(8168),r=(n(6540),n(5680));const i={title:"FAQ",sidebar_position:1,slug:"/faq/"},s=void 0,a={unversionedId:"categories/Miscellaneous/faq",id:"version-3.x/categories/Miscellaneous/faq",title:"FAQ",description:"Can I use wildcards in events?",source:"@site/versioned_docs/version-3.x/categories/07-Miscellaneous/faq.md",sourceDirName:"categories/07-Miscellaneous",slug:"/faq/",permalink:"/docs/v3/faq/",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/versioned_docs/version-3.x/categories/07-Miscellaneous/faq.md",tags:[],version:"3.x",lastUpdatedAt:1631601618,formattedLastUpdatedAt:"Sep 14, 2021",sidebarPosition:1,frontMatter:{title:"FAQ",sidebar_position:1,slug:"/faq/"},sidebar:"version-3.x/sidebar",previous:{title:"Migrating from 3.x to 4.0",permalink:"/docs/v3/migrating-from-3-x-to-4-0/"},next:{title:"Glossary",permalink:"/docs/v3/glossary/"}},c={},l=[{value:"Can I use wildcards in events?",id:"can-i-use-wildcards-in-events",level:2},{value:"Prevent flooding from single connection?",id:"prevent-flooding-from-single-connection",level:2},{value:"Socket.IO with Apache Cordova?",id:"socketio-with-apache-cordova",level:2},{value:"Socket.IO on iOS?",id:"socketio-on-ios",level:2},{value:"Socket.IO on Android?",id:"socketio-on-android",level:2},{value:"Usage with express-session",id:"usage-with-express-session",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"can-i-use-wildcards-in-events"},"Can I use wildcards in events?"),(0,r.yg)("p",null,"Not in Socket.IO directly, but check out ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/hden/socketio-wildcard"},"this plugin")," by Hao-kang Den. It provides a Socket.IO middleware to deal with wildcards."),(0,r.yg)("h2",{id:"prevent-flooding-from-single-connection"},"Prevent flooding from single connection?"),(0,r.yg)("p",null,"Limit number of events by ",(0,r.yg)("inlineCode",{parentName:"p"},"IP"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"uniqueUserId")," or/and ",(0,r.yg)("inlineCode",{parentName:"p"},"socket.id")," with ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example#websocket-single-connection-prevent-flooding"},"rate-limiter-flexible")," package."),(0,r.yg)("h2",{id:"socketio-with-apache-cordova"},"Socket.IO with Apache Cordova?"),(0,r.yg)("p",null,"Take a look at ",(0,r.yg)("a",{parentName:"p",href:"/socket-io-with-apache-cordova/"},"this tutorial"),"."),(0,r.yg)("h2",{id:"socketio-on-ios"},"Socket.IO on iOS?"),(0,r.yg)("p",null,"Take a look at ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-client-swift"},"socket.io-client-swift"),"."),(0,r.yg)("h2",{id:"socketio-on-android"},"Socket.IO on Android?"),(0,r.yg)("p",null,"Take a look at ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nkzawa/socket.io-client.java"},"socket.io-client.java"),"."),(0,r.yg)("h2",{id:"usage-with-express-session"},"Usage with ",(0,r.yg)("a",{parentName:"h2",href:"https://www.npmjs.com/package/express-session"},"express-session")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst session = require('express-session');\nconst app = express();\n\nconst server = require('http').createServer(app);\nconst io = require('socket.io')(server);\n\nconst sessionMiddleware = session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }});\n// register middleware in Express\napp.use(sessionMiddleware);\n// register middleware in Socket.IO\nio.use((socket, next) => {\n  sessionMiddleware(socket.request, {}, next);\n  // sessionMiddleware(socket.request, socket.request.res, next); will not work with websocket-only\n  // connections, as 'socket.request.res' will be undefined in that case\n});\n\nio.on('connection', (socket) => {\n  const session = socket.request.session;\n  session.connections++;\n  session.save();\n});\n\nconst port = process.env.PORT || 3000;\nserver.listen(port, () => console.log('server listening on port ' + port));\n")))}u.isMDXComponent=!0}}]);