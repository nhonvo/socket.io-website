"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[6520],{5680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>m});var n=o(6540);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),g=i,m=u["".concat(l,".").concat(g)]||u[g]||h[g]||a;return o?n.createElement(m,r(r({ref:t},p),{},{components:o})):n.createElement(m,r({ref:t},p))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},3677:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(8168),i=(o(6540),o(5680));const a={title:"Monthly update #1",slug:"/monthly-update-1/",authors:"darrachequesne"},r=void 0,s={permalink:"/socket.io-website/blog/monthly-update-1/",editUrl:"https://github.com/socketio/socket.io-website/edit/main/blog/2020-10-03-monthly-update.md",source:"@site/blog/2020-10-03-monthly-update.md",title:"Monthly update #1",description:"Hi everyone!",date:"2020-10-03T00:00:00.000Z",formattedDate:"October 3, 2020",tags:[],readingTime:2.12,hasTruncateMarker:!0,authors:[{name:"Damien Arrachequesne",title:"Maintainer of Socket.IO",url:"https://github.com/darrachequesne",imageURL:"https://github.com/darrachequesne.png",key:"darrachequesne"}],frontMatter:{title:"Monthly update #1",slug:"/monthly-update-1/",authors:"darrachequesne"},prevItem:{title:"Socket.IO 3 Release",permalink:"/socket.io-website/blog/socket-io-3-release/"},nextItem:{title:"Socket.IO client 2.3.1",permalink:"/socket.io-website/blog/socket-io-2-3-1/"}},l={authorsImageUrls:[void 0]},c=[{value:"Socket.IO v3 (WIP)",id:"socketio-v3-wip",level:2},{value:"Engine.IO v4",id:"engineio-v4",level:2},{value:"Protocol documentation",id:"protocol-documentation",level:2},{value:"GitHub discussions",id:"github-discussions",level:2},{value:"Minor bumps",id:"minor-bumps",level:2},{value:"Going forward",id:"going-forward",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...o}=e;return(0,i.yg)(u,(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Hi everyone!"),(0,i.yg)("p",null,"Here's the #1 edition of our Monthly update. This is a new experiment, we will try to stick to this frequency in order to keep you updated of the work that is in progress and the directions the project is taking."),(0,i.yg)("p",null,"So, what's new in the Socket.IO ecosystem?"),(0,i.yg)("h2",{id:"socketio-v3-wip"},"Socket.IO v3 (WIP)"),(0,i.yg)("p",null,"The work on Socket.IO v3 has started (let's be honest and not say resumed)."),(0,i.yg)("p",null,"This major version bump is mandated by several necessary changes in the Engine.IO protocol. You can find more information about these changes in the ",(0,i.yg)("a",{parentName:"p",href:"/blog/engine-io-4-release/"},"Engine.IO v4 release notes"),"."),(0,i.yg)("p",null,"It mostly impacts the way packets are encoded when sent over the wire (in the request/response body in case of HTTP long-polling, or in the WebSocket frames), so the public API of Socket.IO should not be impacted that much."),(0,i.yg)("p",null,"We will also take advantage of this new version to migrate the codebase to Typescript, so the typings which are currently hosted in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped"},"DefinitelyTyped")," will now always be in sync with the actual code."),(0,i.yg)("p",null,"You can follow the progress ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io/projects/2"},"here"),"."),(0,i.yg)("p",null,"If you have any feedback/feature that you would like to see included, please comment ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io/issues/3250"},"here"),"."),(0,i.yg)("h2",{id:"engineio-v4"},"Engine.IO v4"),(0,i.yg)("p",null,"As part of the work towards Socket v3, Engine.IO v4 has been released."),(0,i.yg)("p",null,"The list of breaking changes can be found in the ",(0,i.yg)("a",{parentName:"p",href:"/blog/engine-io-4-release/"},"release notes"),"."),(0,i.yg)("h2",{id:"protocol-documentation"},"Protocol documentation"),(0,i.yg)("p",null,"The documentation of the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/engine.io-protocol"},"Engine.IO")," and the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-protocol"},"Socket.IO")," protocols has been edited with additional details/examples."),(0,i.yg)("p",null,"This should help greatly when implementing a client in another programming language."),(0,i.yg)("p",null,"If you find that something is not clear/is missing, please open an issue in the repository."),(0,i.yg)("p",null,"For reference, here's the current list of clients in other languages:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Java: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-client-java"},"https://github.com/socketio/socket.io-client-java")),(0,i.yg)("li",{parentName:"ul"},"C++: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-client-cpp"},"https://github.com/socketio/socket.io-client-cpp")),(0,i.yg)("li",{parentName:"ul"},"Swift: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-client-swift"},"https://github.com/socketio/socket.io-client-swift")),(0,i.yg)("li",{parentName:"ul"},"Dart: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rikulo/socket.io-client-dart"},"https://github.com/rikulo/socket.io-client-dart")),(0,i.yg)("li",{parentName:"ul"},"Python: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/miguelgrinberg/python-socketio"},"https://github.com/miguelgrinberg/python-socketio")),(0,i.yg)("li",{parentName:"ul"},".Net: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/Quobject/SocketIoClientDotNet"},"https://github.com/Quobject/SocketIoClientDotNet"))),(0,i.yg)("h2",{id:"github-discussions"},"GitHub discussions"),(0,i.yg)("p",null,"The project is now part of the beta of Github Discussions. Depending on the feedback of the community, it might replace the Slack channel in the future."),(0,i.yg)("p",null,"So, let's ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io/discussions"},"discuss"),"!"),(0,i.yg)("h2",{id:"minor-bumps"},"Minor bumps"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-client/releases/tag/2.3.1"},"socket.io-client@2.3.1")," (",(0,i.yg)("a",{parentName:"p",href:"/blog/socket-io-2-3-1/"},"release notes"),")"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io-parser/releases/tag/2.2.1"},"engine.io-parser@2.2.1")," (included in ",(0,i.yg)("inlineCode",{parentName:"li"},"socket.io-client{% raw %}@{% endraw %}2.3.1"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io-client/releases/tag/3.4.4"},"engine.io-client@3.4.4")," (included in ",(0,i.yg)("inlineCode",{parentName:"li"},"socket.io-client{% raw %}@{% endraw %}2.3.1"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-parser/releases/tag/3.3.1"},"socket.io-parser@3.3.1")," (included in ",(0,i.yg)("inlineCode",{parentName:"li"},"socket.io-client{% raw %}@{% endraw %}2.3.1"),")"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/darrachequesne/socket.io-json-parser/releases/tag/2.1.1"},"socket.io-json-parser@2.1.1"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-msgpack-parser/releases/tag/2.2.1"},"socket.io-msgpack-parser@2.2.1")))),(0,i.yg)("p",null,"More information about how to use those custom parsers can be found ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io/tree/master/examples/custom-parsers"},"here"),"."),(0,i.yg)("h2",{id:"going-forward"},"Going forward"),(0,i.yg)("p",null,"As announced at the bottom of the Engine.IO v4 ",(0,i.yg)("a",{parentName:"p",href:"/blog/engine-io-4-release/#What%E2%80%99s-next"},"release notes"),", I (",(0,i.yg)("a",{parentName:"p",href:"https://github.com/darrachequesne/"},"@darrachequesne"),") am now dedicated full time to the project since the beginning of September. This wouldn't be possible without our ",(0,i.yg)("a",{parentName:"p",href:"https://opencollective.com/socketio/#section-contributors"},"sponsors"),", so again, a big thanks to them!"),(0,i.yg)("p",null,"Stay safe!"))}h.isMDXComponent=!0}}]);