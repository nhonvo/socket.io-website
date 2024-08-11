"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[1185],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var o=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?o.createElement(y,r(r({ref:n},p),{},{components:t})):o.createElement(y,r({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(8168),a=(t(6540),t(5680));const i={title:"Client Initialization",sidebar_label:"Initialization",sidebar_position:2,slug:"/client-initialization/"},r=void 0,l={unversionedId:"categories/Client/client-initialization",id:"version-2.x/categories/Client/client-initialization",title:"Client Initialization",description:"Once you have installed the Socket.IO client library, you can now init the client. The complete list of options can be found here.",source:"@site/versioned_docs/version-2.x/categories/03-Client/client-initialization.md",sourceDirName:"categories/03-Client",slug:"/client-initialization/",permalink:"/docs/v2/client-initialization/",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/versioned_docs/version-2.x/categories/03-Client/client-initialization.md",tags:[],version:"2.x",lastUpdatedAt:1631600541,formattedLastUpdatedAt:"Sep 14, 2021",sidebarPosition:2,frontMatter:{title:"Client Initialization",sidebar_label:"Initialization",sidebar_position:2,slug:"/client-initialization/"},sidebar:"version-2.x/sidebar",previous:{title:"Installation",permalink:"/docs/v2/client-installation/"},next:{title:"Internals overview",permalink:"/docs/v2/internals/"}},s={},c=[{value:"From the same domain",id:"from-the-same-domain",level:2},{value:"From a different domain",id:"from-a-different-domain",level:2},{value:"Custom namespace",id:"custom-namespace",level:2},{value:"Notable options",id:"notable-options",level:2},{value:"<code>transports</code> option",id:"transports-option",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Once you have ",(0,a.yg)("a",{parentName:"p",href:"/docs/v2/client-installation/"},"installed")," the Socket.IO client library, you can now init the client. The complete list of options can be found ",(0,a.yg)("a",{parentName:"p",href:"/docs/v2/client-api/#new-Manager-url-options"},"here"),"."),(0,a.yg)("p",null,"In the examples below, the ",(0,a.yg)("inlineCode",{parentName:"p"},"io")," object comes either from:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"the ",(0,a.yg)("inlineCode",{parentName:"li"},"<script>")," import")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<script src="/socket.io/socket.io.js"><\/script>\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"NPM")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// ES6 import\nimport io from 'socket.io-client';\n// CommonJS\nconst io = require('socket.io-client');\n")),(0,a.yg)("h2",{id:"from-the-same-domain"},"From the same domain"),(0,a.yg)("p",null,"If your front is served on the same domain as your server, you can simply use:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const socket = io();\n")),(0,a.yg)("p",null,"The server URL will be deduced from the ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/location"},"window.location")," object."),(0,a.yg)("p",null,"Additional options can be passed:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// default values\nconst socket = io({\n  path: '/socket.io',\n  reconnection: true,\n  reconnectionAttempts: Infinity,\n  reconnectionDelay: 1000,\n  reconnectionDelayMax: 5000,\n  randomizationFactor: 0.5,\n  timeout: 20000,\n  autoConnect: true,\n  query: {},\n  // options of the Engine.IO client\n  upgrade: true,\n  forceJSONP: false,\n  jsonp: true,\n  forceBase64: false,\n  enablesXDR: false,\n  timestampRequests: true,\n  timestampParam: 't',\n  policyPort: 843,\n  transports: ['polling', 'websocket'],\n  transportOptions: {},\n  rememberUpgrade: false,\n  onlyBinaryUpgrades: false,\n  requestTimeout: 0,\n  protocols: [],\n  // options for Node.js\n  agent: false,\n  pfx: null,\n  key: null,\n  passphrase: null,\n  cert: null,\n  ca: null,\n  ciphers: [],\n  rejectUnauthorized: true,\n  perMessageDeflate: true,\n  forceNode: false,\n  localAddress: null,\n  // options for Node.js / React Native\n  extraHeaders: {},\n});\n")),(0,a.yg)("h2",{id:"from-a-different-domain"},"From a different domain"),(0,a.yg)("p",null,"In case your front is not served from the same domain as your server, you have to pass the URL of your server."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const socket = io('https://server-domain.com');\n")),(0,a.yg)("h2",{id:"custom-namespace"},"Custom namespace"),(0,a.yg)("p",null,"In the examples above, the client will connect to the default namespace. Using only the default namespace should be sufficient for most use cases, but you can specify the namespace with:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// same origin version\nconst socket = io('/admin');\n// cross origin version\nconst socket = io('https://server-domain.com/admin');\n")),(0,a.yg)("p",null,"You can find more details about namespaces ",(0,a.yg)("a",{parentName:"p",href:"/docs/v2/namespaces/"},"here"),"."),(0,a.yg)("h2",{id:"notable-options"},"Notable options"),(0,a.yg)("h3",{id:"transports-option"},(0,a.yg)("inlineCode",{parentName:"h3"},"transports")," option"),(0,a.yg)("p",null,"By default, the client will try to establish a WebSocket connection, and fall back to XHR/JSONP polling."),(0,a.yg)("p",null,"If you are sure the WebSocket connection will succeed, you can disable the polling transport:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const socket = io({\n  transports: ['websocket']\n});\n")),(0,a.yg)("p",null,"In that case, due to the nature of the WebSocket connection, you can have several server instances without sticky sessions. More information ",(0,a.yg)("a",{parentName:"p",href:"/docs/v2/using-multiple-nodes/"},"here"),"."))}m.isMDXComponent=!0}}]);