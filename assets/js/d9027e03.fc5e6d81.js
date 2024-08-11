"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[3507],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>v});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(v,i(i({ref:n},p),{},{components:t})):r.createElement(v,i({ref:n},p))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9906:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(8168),a=(t(6540),t(5680));const o={title:"The Server instance",sidebar_position:3,slug:"/server-instance/"},i=void 0,s={unversionedId:"categories/Server/server-instance",id:"version-3.x/categories/Server/server-instance",title:"The Server instance",description:"The Server instance (often called io in the code examples) has a few attributes that may be of use in your application.",source:"@site/versioned_docs/version-3.x/categories/02-Server/server-instance.md",sourceDirName:"categories/02-Server",slug:"/server-instance/",permalink:"/docs/v3/server-instance/",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/versioned_docs/version-3.x/categories/02-Server/server-instance.md",tags:[],version:"3.x",lastUpdatedAt:1631600541,formattedLastUpdatedAt:"Sep 14, 2021",sidebarPosition:3,frontMatter:{title:"The Server instance",sidebar_position:3,slug:"/server-instance/"},sidebar:"version-3.x/sidebar",previous:{title:"Installation",permalink:"/docs/v3/server-installation/"},next:{title:"The Socket instance",permalink:"/docs/v3/server-socket-instance/"}},c={},l=[{value:"Server#engine",id:"serverengine",level:2},{value:"Events",id:"events",level:2},{value:"<code>connection</code>",id:"connection",level:3},{value:"Complete API",id:"complete-api",level:2}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The Server instance (often called ",(0,a.yg)("inlineCode",{parentName:"p"},"io")," in the code examples) has a few attributes that may be of use in your application."),(0,a.yg)("p",null,"It also inherits all the methods of the ",(0,a.yg)("a",{parentName:"p",href:"/docs/v3/namespaces/#Main-namespace"},"main namespace"),", like ",(0,a.yg)("a",{parentName:"p",href:"/docs/v3/server-api/#namespace-use-fn"},(0,a.yg)("inlineCode",{parentName:"a"},"namespace.use()"))," (see ",(0,a.yg)("a",{parentName:"p",href:"/docs/v3/middlewares/"},"here"),") or ",(0,a.yg)("a",{parentName:"p",href:"/docs/v3/server-api/#namespace-allSockets"},(0,a.yg)("inlineCode",{parentName:"a"},"namespace.allSockets()")),"."),(0,a.yg)("h2",{id:"serverengine"},"Server#engine"),(0,a.yg)("p",null,"A reference to the underlying Engine.IO server."),(0,a.yg)("p",null,"It can be used to fetch the number of currently connected clients:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const count = io.engine.clientsCount;\n// may or may not be similar to the count of Socket instances in the main namespace, depending on your usage\nconst count2 = io.of("/").sockets.size;\n')),(0,a.yg)("p",null,"Or to generate a custom session ID (the ",(0,a.yg)("inlineCode",{parentName:"p"},"sid")," query parameter):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const uuid = require("uuid");\n\nio.engine.generateId = (req) => {\n  return uuid.v4(); // must be unique across all Socket.IO servers\n}\n')),(0,a.yg)("h2",{id:"events"},"Events"),(0,a.yg)("p",null,"The Server instance emits one single event (well, technically two, but ",(0,a.yg)("inlineCode",{parentName:"p"},"connect")," is an alias for ",(0,a.yg)("inlineCode",{parentName:"p"},"connection"),"):"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#connection"},(0,a.yg)("inlineCode",{parentName:"a"},"connection")))),(0,a.yg)("h3",{id:"connection"},(0,a.yg)("inlineCode",{parentName:"h3"},"connection")),(0,a.yg)("p",null,"This event is fired upon a new connection. The first argument is a ",(0,a.yg)("a",{parentName:"p",href:"/docs/v3/server-socket-instance/"},"Socket instance"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", (socket) => {\n  // ...\n});\n')),(0,a.yg)("h2",{id:"complete-api"},"Complete API"),(0,a.yg)("p",null,"The complete API exposed by the Server instance can be found ",(0,a.yg)("a",{parentName:"p",href:"/docs/v3/server-api/#Server"},"here"),"."))}d.isMDXComponent=!0}}]);