"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[4161],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=i,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(8168),i=(n(6540),n(5680));const a={title:"Version 4.5.4",sidebar_label:"4.5.4 (November 22, 2022)",sidebar_position:102,toc_max_heading_level:4},o=void 0,l={unversionedId:"changelog/4.5.4",id:"changelog/4.5.4",title:"Version 4.5.4",description:"November 22, 2022",source:"@site/docs/changelog/4.5.4.md",sourceDirName:"changelog",slug:"/changelog/4.5.4",permalink:"/docs/v4/changelog/4.5.4",draft:!1,editUrl:"https://github.com/socketio/nhonvo.github.io/edit/main/docs/changelog/4.5.4.md",tags:[],version:"current",lastUpdatedAt:1679932954,formattedLastUpdatedAt:"Mar 27, 2023",sidebarPosition:102,frontMatter:{title:"Version 4.5.4",sidebar_label:"4.5.4 (November 22, 2022)",sidebar_position:102,toc_max_heading_level:4},sidebar:"changelogSidebar",previous:{title:"4.6.0 (February 7, 2023)",permalink:"/docs/v4/changelog/4.6.0"},next:{title:"4.5.3 (October 15, 2022)",permalink:"/docs/v4/changelog/4.5.3"}},c={},s=[{value:"Server",id:"server",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Client",id:"client",level:2},{value:"Dependencies",id:"dependencies-1",level:3}],p={toc:s},g="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"November 22, 2022")),(0,i.yg)("h2",{id:"server"},"Server"),(0,i.yg)("p",null,"This release contains a bump of:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"engine.io")," in order to fix ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io/security/advisories/GHSA-r7qp-cfhv-p84w"},"CVE-2022-41940")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"socket.io-parser")," in order to fix ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/advisories/GHSA-qm95-pgcg-qqfq"},"CVE-2022-2421"),".")),(0,i.yg)("h3",{id:"dependencies"},"Dependencies"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io/releases/tag/6.2.1"},(0,i.yg)("inlineCode",{parentName:"a"},"engine.io@~6.2.1"))," (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io/compare/6.2.0...6.2.1"},"https://github.com/socketio/engine.io/compare/6.2.0...6.2.1"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/websockets/ws/releases/tag/8.2.3"},(0,i.yg)("inlineCode",{parentName:"a"},"ws@~8.2.3"))," (no change)")),(0,i.yg)("h2",{id:"client"},"Client"),(0,i.yg)("p",null,"This release contains a bump of the ",(0,i.yg)("inlineCode",{parentName:"p"},"socket.io-parser")," dependency, in order to fix ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/advisories/GHSA-qm95-pgcg-qqfq"},"CVE-2022-2421"),"."),(0,i.yg)("h3",{id:"dependencies-1"},"Dependencies"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io-client/tree/6.2.3"},(0,i.yg)("inlineCode",{parentName:"a"},"engine.io-client@~6.2.3"))," (no change)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/websockets/ws/releases/tag/8.2.3"},(0,i.yg)("inlineCode",{parentName:"a"},"ws@~8.2.3"))," (no change)")))}u.isMDXComponent=!0}}]);