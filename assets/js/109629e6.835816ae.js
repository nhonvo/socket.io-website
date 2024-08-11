"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[943],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var o=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),g=a,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||i;return t?o.createElement(d,r(r({ref:n},p),{},{components:t})):o.createElement(d,r({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9452:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(8168),a=(t(6540),t(5680));const i={title:"How to use with Vue 3"},r="How to use with Vue 3",s={type:"mdx",permalink:"/how-to/use-with-vue",source:"@site/src/pages/how-to/use-with-vue.md",title:"How to use with Vue 3",description:"This guide shows how to use Socket.IO within a Vue 3 application.",frontMatter:{title:"How to use with Vue 3"}},c=[{value:"Example",id:"example",level:2},{value:"Important notes",id:"important-notes",level:2},{value:"Hot module reloading",id:"hot-module-reloading",level:3},{value:"Listeners in a child component",id:"listeners-in-a-child-component",level:3},{value:"Temporary disconnections",id:"temporary-disconnections",level:3},{value:"With Pinia",id:"with-pinia",level:2},{value:"Sample projects",id:"sample-projects",level:2}],l={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,o.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"how-to-use-with-vue-3"},"How to use with Vue 3"),(0,a.yg)("p",null,"This guide shows how to use Socket.IO within a ",(0,a.yg)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue 3")," application."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"Structure:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"src\n\u251c\u2500\u2500 App.vue\n\u251c\u2500\u2500 components\n\u2502   \u251c\u2500\u2500 ConnectionManager.vue\n\u2502   \u251c\u2500\u2500 ConnectionState.vue\n\u2502   \u2514\u2500\u2500 MyForm.vue\n\u251c\u2500\u2500 main.js\n\u2514\u2500\u2500 socket.js\n")),(0,a.yg)("p",null,"The Socket.IO client is initialized in the ",(0,a.yg)("inlineCode",{parentName:"p"},"src/socket.js")," file:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"src/socket.js")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'import { reactive } from "vue";\nimport { io } from "socket.io-client";\n\nexport const state = reactive({\n  connected: false,\n  fooEvents: [],\n  barEvents: []\n});\n\n// "undefined" means the URL will be computed from the `window.location` object\nconst URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";\n\nexport const socket = io(URL);\n\nsocket.on("connect", () => {\n  state.connected = true;\n});\n\nsocket.on("disconnect", () => {\n  state.connected = false;\n});\n\nsocket.on("foo", (...args) => {\n  state.fooEvents.push(args);\n});\n\nsocket.on("bar", (...args) => {\n  state.barEvents.push(args);\n});\n')),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"During development, you will need to enable CORS on your server:"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const io = new Server({\n  cors: {\n    origin: "http://localhost:8080"\n  }\n});\n')),(0,a.yg)("p",{parentName:"admonition"},"Reference: ",(0,a.yg)("a",{parentName:"p",href:"/docs/v4/handling-cors/"},"Handling CORS"))),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The event listeners are registered in the ",(0,a.yg)("inlineCode",{parentName:"p"},"src/socket.js")," file, as we strongly advise against registering listeners in your components. More on that ",(0,a.yg)("a",{parentName:"p",href:"#listeners-in-a-child-component"},"below"),".")),(0,a.yg)("p",null,"You can then use it in your components:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"src/components/ConnectionState.vue"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<template>\n  <p>State: {{ connected }}</p>\n</template>\n\n<script>\nimport { state } from "@/socket";\n\nexport default {\n  name: "ConnectionState",\n\n  computed: {\n    connected() {\n      return state.connected;\n    }\n  }\n}\n<\/script>\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"src/components/ConnectionManager.vue"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<template>\n  <button @click="connect()">Connect</button>\n  <button @click="disconnect()">Disconnect</button>\n</template>\n\n<script>\nimport { socket } from "@/socket";\n\nexport default {\n  name: "ConnectionManager",\n\n  methods: {\n    connect() {\n      socket.connect();\n    },\n    disconnect() {\n      socket.disconnect();\n    }\n  }\n}\n<\/script>\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"socket")," object can also be initialized without connecting right away with the ",(0,a.yg)("a",{parentName:"p",href:"/docs/v4/client-options/#autoconnect"},(0,a.yg)("inlineCode",{parentName:"a"},"autoConnect"))," option:"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-js"},"export const socket = io(URL, {\n  autoConnect: false\n});\n")),(0,a.yg)("p",{parentName:"admonition"},"This can be useful for example when the user must provide some credentials before connecting.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"src/components/MyForm.vue"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<template>\n  <form @submit.prevent="onSubmit">\n    <input v-model="value" />\n\n    <button type="submit" :disabled="isLoading">Submit</button>\n  </form>\n</template>\n\n<script>\nimport { socket } from "@/socket";\n\nexport default {\n  name: "MyForm",\n\n  data() {\n    return {\n      isLoading: false,\n      value: ""\n    }\n  },\n\n  methods: {\n    onSubmit() {\n      this.isLoading = true;\n\n      socket.timeout(5000).emit("create-something", this.value, () => {\n        this.isLoading = false;\n      });\n    },\n  }\n}\n<\/script>\n')),(0,a.yg)("p",null,"Reference: ",(0,a.yg)("a",{parentName:"p",href:"https://vuejs.org/guide/scaling-up/state-management.html"},"https://vuejs.org/guide/scaling-up/state-management.html")),(0,a.yg)("h2",{id:"important-notes"},"Important notes"),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"These remarks are valid for any front-end framework.")),(0,a.yg)("h3",{id:"hot-module-reloading"},"Hot module reloading"),(0,a.yg)("p",null,"The hot reloading of a file that contains the initialization of a Socket.IO client (i.e. the ",(0,a.yg)("inlineCode",{parentName:"p"},"src/socket.js")," file in the example above) might leave the previous Socket.IO connection alive, which means that:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"you might have multiple connections on your Socket.IO server"),(0,a.yg)("li",{parentName:"ul"},"you might receive events from the previous connection")),(0,a.yg)("p",null,"The only known workaround is to do a ",(0,a.yg)("strong",{parentName:"p"},"full-page reload")," when this specific file is updated (or disable hot reloading altogether, but that might be a bit extreme)."),(0,a.yg)("p",null,"Reference: ",(0,a.yg)("a",{parentName:"p",href:"https://vue-loader.vuejs.org/guide/hot-reload.html"},"https://vue-loader.vuejs.org/guide/hot-reload.html")),(0,a.yg)("h3",{id:"listeners-in-a-child-component"},"Listeners in a child component"),(0,a.yg)("p",null,"We strongly advise against registering event listeners in your child components, because it ties the state of the UI with the time of reception of the events: if the component is not mounted, then some messages might be missed."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"src/components/MyComponent.vue")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<script>\nimport { socket } from "@/socket";\n\nexport default {\n  name: "MyComponent",\n\n  data() {\n    return {\n      fooEvents: []\n    }\n  },\n\n  mounted() {\n    // BAD\n    socket.on("foo", (...args) => {\n      this.fooEvents.push(args);\n    });\n  }\n}\n<\/script>\n')),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"This is fine in your root component though (since it is always mounted).")),(0,a.yg)("h3",{id:"temporary-disconnections"},"Temporary disconnections"),(0,a.yg)("p",null,"While very powerful, WebSocket connections are not always up and running:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"anything between the user and the Socket.IO server may encounter a temporary failure or be restarted"),(0,a.yg)("li",{parentName:"ul"},"the server itself may be killed as part of an autoscaling policy"),(0,a.yg)("li",{parentName:"ul"},"the user may lose connection or switch from Wi-Fi to 4G, in case of a mobile browser")),(0,a.yg)("p",null,"Which means you will need to properly handle the temporary disconnections, in order to provide a great experience to your users."),(0,a.yg)("p",null,"The good news is that Socket.IO includes some features that can help you. Please check:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/v4/connection-state-recovery"},"Connection state recovery")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/v4/delivery-guarantees"},"Delivery guarantees"))),(0,a.yg)("h2",{id:"with-pinia"},"With Pinia"),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Pinia is a store library for Vue, it allows you to share a state across components/pages."),(0,a.yg)("p",{parentName:"admonition"},"More information can be found ",(0,a.yg)("a",{parentName:"p",href:"https://pinia.vuejs.org/core-concepts/"},"here"),".")),(0,a.yg)("p",null,"Pinia's stores and Socket.IO connection can be synced with the following pattern:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="stores/item.js"',title:'"stores/item.js"'},'import { defineStore } from "pinia";\nimport { socket } from "@/socket";\n\nexport const useItemStore = defineStore("item", {\n  state: () => ({\n    items: [],\n  }),\n\n  actions: {\n    bindEvents() {\n      // sync the list of items upon connection\n      socket.on("connect", () => {\n        socket.emit("item:list", (res) => {\n          this.items = res.data;\n        });\n      });\n\n      // update the store when an item was created\n      socket.on("item:created", (item) => {\n        this.items.push(item);\n      });\n    },\n\n    createItem(label) {\n      const item = {\n        id: Date.now(), // temporary ID for v-for key\n        label\n      };\n      this.items.push(item);\n\n      socket.emit("item:create", { label }, (res) => {\n        item.id = res.data;\n      });\n    },\n  },\n});\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="stores/connection.js"',title:'"stores/connection.js"'},'import { defineStore } from "pinia";\nimport { socket } from "@/socket";\n\nexport const useConnectionStore = defineStore("connection", {\n  state: () => ({\n    isConnected: false,\n  }),\n\n  actions: {\n    bindEvents() {\n      socket.on("connect", () => {\n        this.isConnected = true;\n      });\n\n      socket.on("disconnect", () => {\n        this.isConnected = false;\n      });\n    },\n\n    connect() {\n      socket.connect();\n    }\n  },\n});\n')),(0,a.yg)("p",null,"And then in your root component:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="App.vue"',title:'"App.vue"'},'<script setup>\nimport { useItemStore } from "@/stores/item";\nimport { useConnectionStore } from "@/stores/connection";\nimport { socket } from "@/socket";\n\nconst itemStore = useItemStore();\nconst connectionStore = useConnectionStore();\n\n// remove any existing listeners (after a hot module replacement)\nsocket.off();\n\nitemStore.bindEvents();\nconnectionStore.bindEvents();\n<\/script>\n')),(0,a.yg)("h2",{id:"sample-projects"},"Sample projects"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/socketio/socket.io/tree/main/examples/basic-crud-application/vue-client"},"TODO application"))),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/get-started/"},"Back to the list of examples")))}m.isMDXComponent=!0}}]);