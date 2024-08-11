"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[1675],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=i,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(8168),i=(n(6540),n(5680));const a={title:"Version 2.5.0",sidebar_label:"2.5.0 (June 26, 2022)",sidebar_position:105,toc_max_heading_level:4},o=void 0,l={unversionedId:"changelog/2.5.0",id:"changelog/2.5.0",title:"Version 2.5.0",description:"June 26, 2022",source:"@site/docs/changelog/2.5.0.md",sourceDirName:"changelog",slug:"/changelog/2.5.0",permalink:"/docs/v4/changelog/2.5.0",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/docs/changelog/2.5.0.md",tags:[],version:"current",lastUpdatedAt:1679932954,formattedLastUpdatedAt:"Mar 27, 2023",sidebarPosition:105,frontMatter:{title:"Version 2.5.0",sidebar_label:"2.5.0 (June 26, 2022)",sidebar_position:105,toc_max_heading_level:4},sidebar:"changelogSidebar",previous:{title:"4.5.2 (September 2, 2022)",permalink:"/docs/v4/changelog/4.5.2"},next:{title:"4.5.1 (May 17, 2022)",permalink:"/docs/v4/changelog/4.5.1"}},c={},s=[{value:"Server",id:"server",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Client",id:"client",level:2},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"Dependencies",id:"dependencies-1",level:3}],p={toc:s},g="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"June 26, 2022")),(0,i.yg)("h2",{id:"server"},"Server"),(0,i.yg)("p",null,"\u26a0\ufe0f WARNING \u26a0\ufe0f"),(0,i.yg)("p",null,"The default value of the ",(0,i.yg)("inlineCode",{parentName:"p"},"maxHttpBufferSize")," option has been decreased from 100 MB to 1 MB, in order to prevent attacks by denial of service."),(0,i.yg)("p",null,"Security advisory: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/advisories/GHSA-j4f2-536g-r55m"},"GHSA-j4f2-536g-r55m")),(0,i.yg)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"fix race condition in dynamic namespaces (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io/commit/05e1278cfa99f3ecf3f8f0531ffe57d850e9a05b"},"05e1278"),")"),(0,i.yg)("li",{parentName:"ul"},"ignore packet received after disconnection (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io/commit/22d4bdf00d1a03885dc0171125faddfaef730066"},"22d4bdf"),")"),(0,i.yg)("li",{parentName:"ul"},"only set 'connected' to true after middleware execution (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io/commit/226cc16165f9fe60f16ff4d295fb91c8971cde35"},"226cc16"),")"),(0,i.yg)("li",{parentName:"ul"},"prevent the socket from joining a room after disconnection (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io/commit/f223178eb655a7713303b21a78f9ef9e161d6458"},"f223178"),")")),(0,i.yg)("h3",{id:"dependencies"},"Dependencies"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io/releases/tag/3.6.0"},(0,i.yg)("inlineCode",{parentName:"a"},"engine.io@~3.6.0"))," (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io/compare/3.5.0...3.6.0"},"https://github.com/socketio/engine.io/compare/3.5.0...3.6.0"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/websockets/ws/releases/tag/7.4.2"},(0,i.yg)("inlineCode",{parentName:"a"},"ws@~7.4.2"))," (no change)")),(0,i.yg)("h2",{id:"client"},"Client"),(0,i.yg)("h3",{id:"bug-fixes-1"},"Bug Fixes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ensure buffered events are sent in order (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/Automattic/socket.io-client/commit/991eb0b0289bbbf680099e6d42b302beee7568b8"},"991eb0b"),")")),(0,i.yg)("h3",{id:"dependencies-1"},"Dependencies"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io-client/releases/tag/3.5.0"},(0,i.yg)("inlineCode",{parentName:"a"},"engine.io-client@~3.5.0"))," (no change)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/websockets/ws/releases/tag/7.4.2"},(0,i.yg)("inlineCode",{parentName:"a"},"ws@~7.4.2"))," (no change)")))}u.isMDXComponent=!0}}]);