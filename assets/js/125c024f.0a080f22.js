"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[4054],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=n(8168),r=(n(6540),n(5680));const i={title:"Testing",sidebar_position:4,slug:"/testing/"},a=void 0,c={unversionedId:"categories/Documentation/testing",id:"version-3.x/categories/Documentation/testing",title:"Testing",description:"You will find below some code examples with common testing libraries:",source:"@site/versioned_docs/version-3.x/categories/01-Documentation/testing.md",sourceDirName:"categories/01-Documentation",slug:"/testing/",permalink:"/docs/v3/testing/",draft:!1,editUrl:"https://github.com/socketio/nhonvo.github.io/edit/main/versioned_docs/version-3.x/categories/01-Documentation/testing.md",tags:[],version:"3.x",lastUpdatedAt:1669369385,formattedLastUpdatedAt:"Nov 25, 2022",sidebarPosition:4,frontMatter:{title:"Testing",sidebar_position:4,slug:"/testing/"},sidebar:"version-3.x/sidebar",previous:{title:"Logging and debugging",permalink:"/docs/v3/logging-and-debugging/"},next:{title:"Troubleshooting",permalink:"/docs/v3/troubleshooting-connection-issues/"}},l={},s=[{value:"Example with <code>mocha</code>",id:"example-with-mocha",level:2},{value:"Example with <code>jest</code>",id:"example-with-jest",level:2},{value:"Example with <code>tape</code>",id:"example-with-tape",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You will find below some code examples with common testing libraries:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#Example-with-mocha"},"mocha")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#Example-with-jest"},"jest")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#Example-with-tape"},"tape"))),(0,r.yg)("h2",{id:"example-with-mocha"},"Example with ",(0,r.yg)("inlineCode",{parentName:"h2"},"mocha")),(0,r.yg)("p",null,"Installation: ",(0,r.yg)("inlineCode",{parentName:"p"},"npm i -D mocha chai")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'// with { "type": "module" } in your package.json\nimport { createServer } from "http";\nimport { io as Client } from "socket.io-client";\nimport { Server } from "socket.io";\nimport { assert } from "chai";\n\n// with { "type": "commonjs" } in your package.json\n// const { createServer } = require("http");\n// const { Server } = require("socket.io");\n// const Client = require("socket.io-client");\n// const assert = require("chai").assert;\n\ndescribe("my awesome project", () => {\n  let io, serverSocket, clientSocket;\n\n  before((done) => {\n    const httpServer = createServer();\n    io = new Server(httpServer);\n    httpServer.listen(() => {\n      const port = httpServer.address().port;\n      io.on("connection", (socket) => {\n        serverSocket = socket;\n      });\n      clientSocket = new Client(`http://localhost:${port}`);\n      clientSocket.on("connect", done);\n    });\n  });\n\n  after(() => {\n    io.close();\n    clientSocket.close();\n  });\n\n  it("should work", (done) => {\n    clientSocket.on("hello", (arg) => {\n      assert.equal(arg, "world");\n      done();\n    });\n    serverSocket.emit("hello", "world");\n  });\n\n  it("should work (with ack)", (done) => {\n    serverSocket.on("hi", (cb) => {\n      cb("hola");\n    });\n    clientSocket.emit("hi", (arg) => {\n      assert.equal(arg, "hola");\n      done();\n    });\n  });\n});\n')),(0,r.yg)("h2",{id:"example-with-jest"},"Example with ",(0,r.yg)("inlineCode",{parentName:"h2"},"jest")),(0,r.yg)("p",null,"Installation: ",(0,r.yg)("inlineCode",{parentName:"p"},"npm i -D jest")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'const { createServer } = require("http");\nconst { Server } = require("socket.io");\nconst Client = require("socket.io-client");\n\ndescribe("my awesome project", () => {\n  let io, serverSocket, clientSocket;\n\n  beforeAll((done) => {\n    const httpServer = createServer();\n    io = new Server(httpServer);\n    httpServer.listen(() => {\n      const port = httpServer.address().port;\n      io.on("connection", (socket) => {\n        serverSocket = socket;\n      });\n      clientSocket = new Client(`http://localhost:${port}`);\n      clientSocket.on("connect", done);\n    });\n  });\n\n  afterAll(() => {\n    io.close();\n    clientSocket.close();\n  });\n\n  test("should work", (done) => {\n    clientSocket.on("hello", (arg) => {\n      expect(arg).toBe("world");\n      done();\n    });\n    serverSocket.emit("hello", "world");\n  });\n\n  test("should work (with ack)", (done) => {\n    serverSocket.on("hi", (cb) => {\n      cb("hola");\n    });\n    clientSocket.emit("hi", (arg) => {\n      expect(arg).toBe("hola");\n      done();\n    });\n  });\n});\n')),(0,r.yg)("h2",{id:"example-with-tape"},"Example with ",(0,r.yg)("inlineCode",{parentName:"h2"},"tape")),(0,r.yg)("p",null,"Installation: ",(0,r.yg)("inlineCode",{parentName:"p"},"npm i -D tape")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'const { createServer } = require("http");\nconst { Server } = require("socket.io");\nconst Client = require("socket.io-client");\nconst test = require("tape");\n\nlet io, serverSocket, clientSocket;\n\ntest("setup", (t) => {\n  const httpServer = createServer();\n  io = new Server(httpServer);\n  httpServer.listen(() => {\n    const port = httpServer.address().port;\n    io.on("connection", (socket) => {\n      serverSocket = socket;\n    });\n    clientSocket = new Client(`http://localhost:${port}`);\n    clientSocket.on("connect", t.end);\n  });\n});\n\ntest("it works", (t) => {\n  t.plan(1);\n  clientSocket.on("hello", (arg) => {\n    t.equal(arg, "world");\n  });\n  serverSocket.emit("hello", "world");\n});\n\ntest("it works (with ack)", (t) => {\n  t.plan(1);\n  serverSocket.on("hi", (cb) => {\n    cb("hola");\n  });\n  clientSocket.emit("hi", (arg) => {\n    t.equal(arg, "hola");\n  });\n});\n\ntest.onFinish(() => {\n  io.close();\n  clientSocket.close();\n});\n')))}u.isMDXComponent=!0}}]);