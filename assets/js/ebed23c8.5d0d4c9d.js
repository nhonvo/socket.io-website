"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[3189],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9365:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(6540),a=n(53);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(8168),a=n(6540),o=n(53),i=n(3104),l=n(6347),s=n(7485),c=n(1682),u=n(9466);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:n,groupId:r}),[p,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),y(e)}),[c,y,o]),tabValues:o}}var h=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=y(e);return a.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},a.createElement(f,(0,r.A)({},e,t)),a.createElement(v,(0,r.A)({},e,t)))}function x(e){const t=(0,h.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},3635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(8168),a=(n(6540),n(5680)),o=n(1470),i=n(9365);const l={title:"Tutorial step #6 - Connection state recovery",sidebar_label:"Step #6: Connection state recovery",slug:"step-6"},s="Connection state recovery",c={unversionedId:"tutorial/connection-state-recovery",id:"tutorial/connection-state-recovery",title:"Tutorial step #6 - Connection state recovery",description:'First, let\'s handle disconnections by pretending that there was no disconnection: this feature is called "Connection state recovery".',source:"@site/docs/tutorial/09-connection-state-recovery.md",sourceDirName:"tutorial",slug:"/tutorial/step-6",permalink:"/docs/v4/tutorial/step-6",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/docs/tutorial/09-connection-state-recovery.md",tags:[],version:"current",lastUpdatedAt:1700213561,formattedLastUpdatedAt:"Nov 17, 2023",sidebarPosition:9,frontMatter:{title:"Tutorial step #6 - Connection state recovery",sidebar_label:"Step #6: Connection state recovery",slug:"step-6"},sidebar:"tutorialSidebar",previous:{title:"Handling disconnections",permalink:"/docs/v4/tutorial/handling-disconnections"},next:{title:"Step #7: Server delivery",permalink:"/docs/v4/tutorial/step-7"}},u={},p=[],d={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"connection-state-recovery"},"Connection state recovery"),(0,a.yg)("p",null,'First, let\'s handle disconnections by pretending that there was no disconnection: this feature is called "Connection state recovery". '),(0,a.yg)("p",null,"This feature will ",(0,a.yg)("strong",{parentName:"p"},"temporarily")," store all the events that are sent by the server and will try to restore the state of a client when it reconnects:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"restore its rooms"),(0,a.yg)("li",{parentName:"ul"},"send any missed events")),(0,a.yg)("p",null,"It must be enabled on the server side:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"const io = new Server(server, {\n  // highlight-start\n  connectionStateRecovery: {}\n  // highlight-end\n});\n")),(0,a.yg)("p",null,"Let's see it in action:"),(0,a.yg)("video",{controls:!0,width:"100%"},(0,a.yg)("source",{src:"/videos/tutorial/connection-state-recovery.mp4"})),(0,a.yg)("p",null,'As you can see in the video above, the "realtime" message is eventually delivered when the connection is reestablished.'),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},'The "Disconnect" button was added for demonstration purposes.'),(0,a.yg)("details",{className:"changelog"},(0,a.yg)("summary",null,"Code"),(0,a.yg)(o.A,{groupId:"syntax",mdxType:"Tabs"},(0,a.yg)(i.A,{value:"es6",label:"ES6",default:!0,mdxType:"TabItem"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<form id="form" action="">\n  <input id="input" autocomplete="off" /><button>Send</button>\n  // highlight-start\n  <button id="toggle-btn">Disconnect</button>\n  // highlight-end\n</form>\n\n<script>\n  // highlight-start\n  const toggleButton = document.getElementById(\'toggle-btn\');\n\n  toggleButton.addEventListener(\'click\', (e) => {\n    e.preventDefault();\n    if (socket.connected) {\n      toggleButton.innerText = \'Connect\';\n      socket.disconnect();\n    } else {\n      toggleButton.innerText = \'Disconnect\';\n      socket.connect();\n    }\n  });\n  // highlight-end\n<\/script>\n')),"  "),(0,a.yg)(i.A,{value:"es5",label:"ES5",mdxType:"TabItem"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<form id="form" action="">\n  <input id="input" autocomplete="off" /><button>Send</button>\n  // highlight-start\n  <button id="toggle-btn">Disconnect</button>\n  // highlight-end\n</form>\n\n<script>\n  // highlight-start\n  var toggleButton = document.getElementById(\'toggle-btn\');\n\n  toggleButton.addEventListener(\'click\', function(e) {\n    e.preventDefault();\n    if (socket.connected) {\n      toggleButton.innerText = \'Connect\';\n      socket.disconnect();\n    } else {\n      toggleButton.innerText = \'Disconnect\';\n      socket.connect();\n    }\n  });\n  // highlight-end\n<\/script>\n')),"  ")))),(0,a.yg)("p",null,"Great! Now, you may ask:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"But this is an awesome feature, why isn't this enabled by default?")),(0,a.yg)("p",null,"There are several reasons for this:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"it doesn't always work, for example if the server abruptly crashes or gets restarted, then the client state might not be saved "),(0,a.yg)("li",{parentName:"ul"},"it is not always possible to enable this feature when scaling up")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"That being said, it is indeed a great feature since you don't have to synchronize the state of the client after a temporary disconnection (for example, when the user switches from WiFi to 4G).")),(0,a.yg)("p",null,"We will explore a more general solution in the next step."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)(o.A,{groupId:"lang",mdxType:"Tabs"},(0,a.yg)(i.A,{value:"cjs",label:"CommonJS",default:!0,attributes:{className:"display-none"},mdxType:"TabItem"},(0,a.yg)("p",{parentName:"admonition"},"You can run this example directly in your browser on:"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/cjs/step6?file=index.js"},"CodeSandbox")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://stackblitz.com/github/socketio/chat-example/tree/cjs/step6?file=index.js"},"StackBlitz"))),"  "),(0,a.yg)(i.A,{value:"mjs",label:"ES modules",attributes:{className:"display-none"},mdxType:"TabItem"},(0,a.yg)("p",{parentName:"admonition"},"You can run this example directly in your browser on:"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://codesandbox.io/p/sandbox/github/socketio/chat-example/tree/esm/step6?file=index.js"},"CodeSandbox")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://stackblitz.com/github/socketio/chat-example/tree/esm/step6?file=index.js"},"StackBlitz"))),"  "))))}g.isMDXComponent=!0}}]);