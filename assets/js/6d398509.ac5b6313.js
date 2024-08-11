"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[8145],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(8168),r=(a(6540),a(5680));const o={title:"Monthly update #2",slug:"/monthly-update-2/",authors:"darrachequesne"},i=void 0,s={permalink:"/blog/monthly-update-2/",editUrl:"https://github.com/socketio/socket.io-website/edit/main/blog/2020-11-23-monthly-update.md",source:"@site/blog/2020-11-23-monthly-update.md",title:"Monthly update #2",description:"Hi everyone!",date:"2020-11-23T00:00:00.000Z",formattedDate:"November 23, 2020",tags:[],readingTime:1.65,hasTruncateMarker:!0,authors:[{name:"Damien Arrachequesne",title:"Maintainer of Socket.IO",url:"https://github.com/darrachequesne",imageURL:"https://github.com/darrachequesne.png",key:"darrachequesne"}],frontMatter:{title:"Monthly update #2",slug:"/monthly-update-2/",authors:"darrachequesne"},prevItem:{title:"Socket.IO 2.4.0",permalink:"/blog/socket-io-2-4-0/"},nextItem:{title:"Redis Adapter v6.0.0",permalink:"/blog/socket-io-redis-adapter-6-release/"}},l={authorsImageUrls:[void 0]},p=[{value:"Socket.IO v3",id:"socketio-v3",level:2},{value:"Redis Adapter v6",id:"redis-adapter-v6",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Minor bumps",id:"minor-bumps",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],c={toc:p},u="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Hi everyone!"),(0,r.yg)("p",null,"Here's the #2 edition of our Monthly update. This is a new experiment, we will try to stick to this frequency in order to keep you updated of the work in progress and the directions the project is taking."),(0,r.yg)("p",null,"So, what's new in the Socket.IO ecosystem?"),(0,r.yg)("h2",{id:"socketio-v3"},"Socket.IO v3"),(0,r.yg)("p",null,"As announced in the ",(0,r.yg)("a",{parentName:"p",href:"/blog/monthly-update-2/"},"previous")," monthly update, Socket.IO v3 has been released a few days ago."),(0,r.yg)("p",null,"This major version bump is mandated by several necessary changes in the Engine.IO protocol. You can find more information about these changes in the ",(0,r.yg)("a",{parentName:"p",href:"/blog/engine-io-4-release/"},"Engine.IO v4 release notes"),"."),(0,r.yg)("p",null,"You can find the release notes ",(0,r.yg)("a",{parentName:"p",href:"/blog/socket-io-3-release/"},"here")," and the migration guide ",(0,r.yg)("a",{parentName:"p",href:"/docs/v3/migrating-from-2-x-to-3-0/"},"here"),"."),(0,r.yg)("p",null,"Let's discuss about this release here: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io/discussions/3674"},"https://github.com/socketio/socket.io/discussions/3674")),(0,r.yg)("h2",{id:"redis-adapter-v6"},"Redis Adapter v6"),(0,r.yg)("p",null,"Following the ",(0,r.yg)("a",{parentName:"p",href:"/blog/socket-io-3-release/"},"release of Socket.IO v3.0.0"),", the Redis Adapter was updated and a new release is out: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-redis/releases/tag/6.0.0"},"6.0.0")),(0,r.yg)("p",null,"You can find the release notes ",(0,r.yg)("a",{parentName:"p",href:"/blog/socket-io-redis-adapter-6-release/"},"here"),"."),(0,r.yg)("h2",{id:"documentation"},"Documentation"),(0,r.yg)("p",null,"The documentation has always been a weak point of the project, leading to a lot of issues opened on GitHub and questions on StackOverflow."),(0,r.yg)("p",null,"Now that v3 is out, we will focus on this. The following pages have already been created:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/v3/emitting-events/"},"Emitting events")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/v3/broadcasting-events/"},"Broadcasting events")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/v3/server-socket-instance/"},"The Socket instance / server-side")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/v3/middlewares/"},"Middlewares")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/v3/handling-cors/"},"Handling CORS"))),(0,r.yg)("p",null,"If you find a typo, please open an issue here: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-website"},"https://github.com/socketio/socket.io-website")),(0,r.yg)("h2",{id:"minor-bumps"},"Minor bumps"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io/releases/tag/3.0.3"},"socket.io@3.0.3")," (",(0,r.yg)("a",{parentName:"p",href:"/blog/socket-io-3-release/"},"release notes"),")"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io-parser/releases/tag/4.0.1"},"engine.io-parser@4.0.1")," (included in ",(0,r.yg)("inlineCode",{parentName:"li"},"socket.io{% raw %}@{% endraw %}3.0.3"),")"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io/releases/tag/4.0.4"},"engine.io@4.0.4")," (included in ",(0,r.yg)("inlineCode",{parentName:"li"},"socket.io{% raw %}@{% endraw %}3.0.3"),")"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-parser/releases/tag/4.0.1"},"socket.io-parser@4.0.1")," (included in ",(0,r.yg)("inlineCode",{parentName:"li"},"socket.io{% raw %}@{% endraw %}3.0.3"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-client/releases/tag/3.0.3"},"socket.io-client@3.0.3")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io-parser/releases/tag/4.0.1"},"engine.io-parser@4.0.1")," (included in ",(0,r.yg)("inlineCode",{parentName:"li"},"socket.io-client{% raw %}@{% endraw %}3.0.3"),")"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/socketio/engine.io-client/releases/tag/4.0.4"},"engine.io-client@4.0.4")," (included in ",(0,r.yg)("inlineCode",{parentName:"li"},"socket.io-client{% raw %}@{% endraw %}3.0.3"),")"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io-parser/releases/tag/4.0.1"},"socket.io-parser@4.0.1")," (included in ",(0,r.yg)("inlineCode",{parentName:"li"},"socket.io-client{% raw %}@{% endraw %}3.0.3"),")"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-redis/releases/tag/6.0.1"},"socket.io-redis@6.0.1"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-msgpack-parser/releases/tag/3.0.1"},"socket.io-msgpack-parser@3.0.1")))),(0,r.yg)("p",null,"More information about how to use those custom parsers can be found ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io/tree/master/examples/custom-parsers"},"here"),"."),(0,r.yg)("h2",{id:"whats-next"},"What's next"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"the client implementations in other languages will be updated as well")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"a big focus on the documentation (additional code examples, extended guide, ...)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"additional tooling around Socket.IO"))),(0,r.yg)("p",null,"Stay safe!"))}g.isMDXComponent=!0}}]);