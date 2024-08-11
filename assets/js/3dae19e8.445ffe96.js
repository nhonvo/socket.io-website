"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[2325],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(d,o(o({ref:t},g),{},{components:n})):a.createElement(d,o({ref:t},g))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(8168),i=(n(6540),n(5680));const r={title:"Version 4.7.3",sidebar_label:"4.7.3 (January 3, 2024)",sidebar_position:95,toc_max_heading_level:4},o=void 0,l={unversionedId:"changelog/4.7.3",id:"changelog/4.7.3",title:"Version 4.7.3",description:"January 3, 2024",source:"@site/docs/changelog/4.7.3.md",sourceDirName:"changelog",slug:"/changelog/4.7.3",permalink:"/docs/v4/changelog/4.7.3",draft:!1,editUrl:"https://github.com/socketio/nhonvo.github.io/edit/main/docs/changelog/4.7.3.md",tags:[],version:"current",lastUpdatedAt:1704828108,formattedLastUpdatedAt:"Jan 9, 2024",sidebarPosition:95,frontMatter:{title:"Version 4.7.3",sidebar_label:"4.7.3 (January 3, 2024)",sidebar_position:95,toc_max_heading_level:4},sidebar:"changelogSidebar",previous:{title:"4.7.4 (January 12, 2024)",permalink:"/docs/v4/changelog/4.7.4"},next:{title:"4.7.2 (August 2, 2023)",permalink:"/docs/v4/changelog/4.7.2"}},c={},s=[{value:"Server",id:"server",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Client",id:"client",level:2},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"Dependencies",id:"dependencies-1",level:3}],g={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"January 3, 2024")),(0,i.yg)("h2",{id:"server"},"Server"),(0,i.yg)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"return the first response when broadcasting to a single socket (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io/issues/4878"},"#4878"),") (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io/commit/df8e70f79822e3887b4f21ca718af8a53bbda2c4"},"df8e70f"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"typings:")," allow to bind to a non-secure Http2Server (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io/issues/4853"},"#4853"),") (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io/commit/8c9ebc30e5452ff9381af5d79f547394fa55633c"},"8c9ebc3"),")")),(0,i.yg)("h3",{id:"dependencies"},"Dependencies"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io/releases/tag/6.5.2"},(0,i.yg)("inlineCode",{parentName:"a"},"engine.io@~6.5.2"))," (no change)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/websockets/ws/releases/tag/8.11.0"},(0,i.yg)("inlineCode",{parentName:"a"},"ws@~8.11.0"))," (no change)")),(0,i.yg)("h2",{id:"client"},"Client"),(0,i.yg)("h3",{id:"bug-fixes-1"},"Bug Fixes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"improve compatibility with node16 module resolution (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-client/issues/1595"},"#1595"),") (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-client/commit/605de78d2cd7303bf25d9e2146e2b707dbf63d4f"},"605de78"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"typings:")," accept string | undefined as init argument (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-client/commit/5a3eafed1c4118ac3a06ec81a24491eec7d0655f"},"5a3eafe"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"typings:")," fix the type of the socket#id attribute (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-client/commit/f9c16f226512fc8a8df461e3a07e392720462165"},"f9c16f2"),")")),(0,i.yg)("h3",{id:"dependencies-1"},"Dependencies"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io-client/releases/tag/6.5.2"},(0,i.yg)("inlineCode",{parentName:"a"},"engine.io-client@~6.5.2"))," (no change)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/websockets/ws/releases/tag/8.11.0"},(0,i.yg)("inlineCode",{parentName:"a"},"ws@~8.11.0"))," (no change)")))}u.isMDXComponent=!0}}]);