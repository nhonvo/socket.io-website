"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[2402],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||g[m]||o;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(6540),r=n(53);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(8168),r=n(6540),o=n(53),l=n(3104),s=n(6347),i=n(7485),c=n(1682),u=n(9466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=g(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,c]=d({queryString:n,groupId:a}),[p,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),y(e)}),[c,y,o]),tabValues:o}}var h=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),g=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:g},l,{className:(0,o.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=y(e);return r.createElement("div",{className:(0,o.A)("tabs-container",v.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(f,(0,a.A)({},e,t)))}function N(e){const t=(0,h.A)();return r.createElement(k,(0,a.A)({key:String(t)},e))}},9209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var a=n(8168),r=(n(6540),n(5680)),o=n(1653),l=n(6025),s=n(1470),i=n(9365);const c={title:"Tutorial - Overview of the API",sidebar_label:"Overview of the API",slug:"api-overview",toc_max_heading_level:4},u="Overview of the API",p={unversionedId:"tutorial/api-overview",id:"tutorial/api-overview",title:"Tutorial - Overview of the API",description:"Before we go any further, let's take a quick tour of the API provided by Socket.IO:",source:"@site/docs/tutorial/07-api-overview.md",sourceDirName:"tutorial",slug:"/tutorial/api-overview",permalink:"/socket.io-website/docs/v4/tutorial/api-overview",draft:!1,editUrl:"https://github.com/socketio/socket.io-website/edit/main/docs/tutorial/07-api-overview.md",tags:[],version:"current",lastUpdatedAt:1702917741,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:7,frontMatter:{title:"Tutorial - Overview of the API",sidebar_label:"Overview of the API",slug:"api-overview",toc_max_heading_level:4},sidebar:"tutorialSidebar",previous:{title:"Step #5: Broadcasting",permalink:"/socket.io-website/docs/v4/tutorial/step-5"},next:{title:"Handling disconnections",permalink:"/socket.io-website/docs/v4/tutorial/handling-disconnections"}},g={},m=[{value:"Common API",id:"common-api",level:2},{value:"Basic emit",id:"basic-emit",level:3},{value:"Acknowledgements",id:"acknowledgements",level:3},{value:"With a callback function",id:"with-a-callback-function",level:4},{value:"With a Promise",id:"with-a-promise",level:4},{value:"Catch-all listeners",id:"catch-all-listeners",level:3},{value:"Server API",id:"server-api",level:2},{value:"Broadcasting",id:"broadcasting",level:3},{value:"Rooms",id:"rooms",level:3}],d={toc:m},y="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"overview-of-the-api"},"Overview of the API"),(0,r.yg)("p",null,"Before we go any further, let's take a quick tour of the API provided by Socket.IO:"),(0,r.yg)("h2",{id:"common-api"},"Common API"),(0,r.yg)("p",null,"The following methods are available for both the client and the server."),(0,r.yg)("h3",{id:"basic-emit"},"Basic emit"),(0,r.yg)("p",null,"As we have seen in ",(0,r.yg)("a",{parentName:"p",href:"/socket.io-website/docs/v4/tutorial/step-4"},"step #4"),", you can send any data to the other side with ",(0,r.yg)("inlineCode",{parentName:"p"},"socket.emit()"),":"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"From client to server",label:"From client to server",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"socket.emit('hello', 'world');\n")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', (socket) => {\n  socket.on('hello', (arg) => {\n    console.log(arg); // 'world'\n  });\n});\n"))),(0,r.yg)(i.A,{value:"From server to client",label:"From server to client",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', (socket) => {\n  socket.emit('hello', 'world');\n});\n")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"socket.on('hello', (arg) => {\n  console.log(arg); // 'world'\n});\n")))),(0,r.yg)("p",null,"You can send any number of arguments, and all serializable data structures are supported, including binary objects like ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"},"ArrayBuffer"),", ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"},"TypedArray")," or ",(0,r.yg)("a",{parentName:"p",href:"https://nodejs.org/docs/latest/api/buffer.html#buffer_buffer"},"Buffer")," (Node.js only):"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"From client to server",label:"From client to server",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"socket.emit('hello', 1, '2', { 3: '4', 5: Uint8Array.from([6]) });\n")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', (socket) => {\n  socket.on('hello', (arg1, arg2, arg3) => {\n    console.log(arg1); // 1\n    console.log(arg2); // '2'\n    console.log(arg3); // { 3: '4', 5: <Buffer 06> }\n  });\n});\n"))),(0,r.yg)(i.A,{value:"From server to client",label:"From server to client",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', (socket) => {\n  socket.emit('hello', 1, '2', { 3: '4', 5: Buffer.from([6]) });\n});\n")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"socket.on('hello', (arg1, arg2, arg3) => {\n  console.log(arg1); // 1\n  console.log(arg2); // '2'\n  console.log(arg3); // { 3: '4', 5: ArrayBuffer (1) [ 6 ] }\n});\n")))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Calling ",(0,r.yg)("inlineCode",{parentName:"p"},"JSON.stringify()")," on objects is not needed:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-js"},"// BAD\nsocket.emit('hello', JSON.stringify({ name: 'John' }));\n\n// GOOD\nsocket.emit('hello', { name: 'John' });\n"))),(0,r.yg)("h3",{id:"acknowledgements"},"Acknowledgements"),(0,r.yg)("p",null,'Events are great, but in some cases you may want a more classic request-response API. In Socket.IO, this feature is named "acknowledgements".'),(0,r.yg)("p",null,"It comes in two flavors:"),(0,r.yg)("h4",{id:"with-a-callback-function"},"With a callback function"),(0,r.yg)("p",null,"You can add a callback as the last argument of the ",(0,r.yg)("inlineCode",{parentName:"p"},"emit()"),", and this callback will be called once the other side has acknowledged the event:"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"From client to server",label:"From client to server",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"socket.timeout(5000).emit('request', { foo: 'bar' }, 'baz', (err, response) => {\n  if (err) {\n    // the server did not acknowledge the event in the given delay\n  } else {\n    console.log(response.status); // 'ok'\n  }\n});\n")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', (socket) => {\n  socket.on('request', (arg1, arg2, callback) => {\n    console.log(arg1); // { foo: 'bar' }\n    console.log(arg2); // 'baz'\n    callback({\n      status: 'ok'\n    });\n  });\n});\n"))),(0,r.yg)(i.A,{value:"From server to client",label:"From server to client",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', (socket) => {\n  socket.timeout(5000).emit('request', { foo: 'bar' }, 'baz', (err, response) => {\n    if (err) {\n      // the client did not acknowledge the event in the given delay\n    } else {\n      console.log(response.status); // 'ok'\n    }\n  });\n});\n")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"socket.on('request', (arg1, arg2, callback) => {\n  console.log(arg1); // { foo: 'bar' }\n  console.log(arg2); // 'baz'\n  callback({\n    status: 'ok'\n  });\n});\n")))),(0,r.yg)("h4",{id:"with-a-promise"},"With a Promise"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"emitWithAck()")," method provides the same functionality, but returns a Promise which will resolve once the other side acknowledges the event:"),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"From client to server",label:"From client to server",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"try {\n  const response = await socket.timeout(5000).emitWithAck('request', { foo: 'bar' }, 'baz');\n  console.log(response.status); // 'ok'\n} catch (e) {\n  // the server did not acknowledge the event in the given delay\n}\n")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', (socket) => {\n  socket.on('request', (arg1, arg2, callback) => {\n    console.log(arg1); // { foo: 'bar' }\n    console.log(arg2); // 'baz'\n    callback({\n      status: 'ok'\n    });\n  });\n});\n"))),(0,r.yg)(i.A,{value:"From server to client",label:"From server to client",mdxType:"TabItem"},(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', async (socket) => {\n  try {\n    const response = await socket.timeout(5000).emitWithAck('request', { foo: 'bar' }, 'baz');\n    console.log(response.status); // 'ok'\n  } catch (e) {\n    // the client did not acknowledge the event in the given delay\n  }\n});\n")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Client")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"socket.on('request', (arg1, arg2, callback) => {\n  console.log(arg1); // { foo: 'bar' }\n  console.log(arg2); // 'baz'\n  callback({\n    status: 'ok'\n  });\n});\n")))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Environments that ",(0,r.yg)("a",{parentName:"p",href:"https://caniuse.com/promises"},"do not support Promises")," (such as Internet Explorer) will need to add a polyfill or use a compiler like ",(0,r.yg)("a",{parentName:"p",href:"https://babeljs.io/"},"babel")," in order to use this feature (but this is out of the scope of this tutorial).")),(0,r.yg)("h3",{id:"catch-all-listeners"},"Catch-all listeners"),(0,r.yg)("p",null,"A catch-all listeners is a listener that will be called for any incoming event. This is useful for debugging your application:"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Sender")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"socket.emit('hello', 1, '2', { 3: '4', 5: Uint8Array.from([6]) });\n")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Receiver")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"socket.onAny((eventName, ...args) => {\n  console.log(eventName); // 'hello'\n  console.log(args); // [ 1, '2', { 3: '4', 5: ArrayBuffer (1) [ 6 ] } ]\n});\n")),(0,r.yg)("p",null,"Similarly, for outgoing packets:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"socket.onAnyOutgoing((eventName, ...args) => {\n  console.log(eventName); // 'hello'\n  console.log(args); // [ 1, '2', { 3: '4', 5: ArrayBuffer (1) [ 6 ] } ]\n});\n")),(0,r.yg)("h2",{id:"server-api"},"Server API"),(0,r.yg)("h3",{id:"broadcasting"},"Broadcasting"),(0,r.yg)("p",null,"As we have seen in ",(0,r.yg)("a",{parentName:"p",href:"/socket.io-website/docs/v4/tutorial/step-5"},"step #5"),", you can broadcast an event to all connected clients with ",(0,r.yg)("inlineCode",{parentName:"p"},"io.emit()"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"io.emit('hello', 'world');\n")),(0,r.yg)(o.A,{alt:"The 'hello' event is sent to all connected clients",sources:{light:(0,l.A)("/images/tutorial/broadcasting.png"),dark:(0,l.A)("/images/tutorial/broadcasting-dark.png")},mdxType:"ThemedImage"}),(0,r.yg)("h3",{id:"rooms"},"Rooms"),(0,r.yg)("p",null,"In Socket.IO jargon, a ",(0,r.yg)("em",{parentName:"p"},"room")," is an arbitrary channel that sockets can join and leave. It can be used to broadcast events to a subset of connected clients:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"io.on('connection', (socket) => {\n  // join the room named 'some room'\n  socket.join('some room');\n  \n  // broadcast to all connected clients in the room\n  io.to('some room').emit('hello', 'world');\n\n  // broadcast to all connected clients except those in the room\n  io.except('some room').emit('hello', 'world');\n\n  // leave the room\n  socket.leave('some room');\n});\n")),(0,r.yg)(o.A,{alt:"The 'hello' event is sent to all connected clients in the targeted room",sources:{light:(0,l.A)("/images/tutorial/room.png"),dark:(0,l.A)("/images/tutorial/room-dark.png")},mdxType:"ThemedImage"}),(0,r.yg)("p",null,"That's basically it! For future reference, the whole API can be found ",(0,r.yg)("a",{parentName:"p",href:"/socket.io-website/docs/v4/server-api/"},"here")," (server) and ",(0,r.yg)("a",{parentName:"p",href:"/socket.io-website/docs/v4/client-api/"},"here")," (client)."))}h.isMDXComponent=!0}}]);