"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[5005],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>p});var a=t(6540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(t),g=l,p=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return t?a.createElement(p,o(o({ref:n},m),{},{components:t})):a.createElement(p,o({ref:n},m))}));function p(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9365:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(6540),l=t(53);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,o),hidden:t},n)}},1470:(e,n,t)=>{t.d(n,{A:()=>N});var a=t(8168),l=t(6540),r=t(53),o=t(3104),i=t(6347),s=t(7485),c=t(1682),m=t(9466);function u(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}function d(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=d(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[s,c]=p({queryString:t,groupId:a}),[u,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,m.Dv)(t);return[a,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),h=(()=>{const e=s??u;return g({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),y(e)}),[c,y,r]),tabValues:r}}var h=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=m.indexOf(n),a=c[t].value;a!==i&&(u(n),s(a))},g=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;n=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;n=m[t]??m[m.length-1];break}}n?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:o}=e;return l.createElement("li",(0,a.A)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>m.push(e),onKeyDown:g,onClick:d},o,{className:(0,r.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":i===n})}),t??n)})))}function f(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=y(e);return l.createElement("div",{className:(0,r.A)("tabs-container",v.tabList)},l.createElement(b,(0,a.A)({},e,n)),l.createElement(f,(0,a.A)({},e,n)))}function N(e){const n=(0,h.A)();return l.createElement(w,(0,a.A)({key:String(n)},e))}},1286:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=t(8168),l=(t(6540),t(5680)),r=t(1470),o=t(9365);const i={title:"Emit cheatsheet",slug:"/emit-cheatsheet/",toc_max_heading_level:4},s=void 0,c={unversionedId:"emit-cheatsheet",id:"emit-cheatsheet",title:"Emit cheatsheet",description:"The following event names are reserved and must not be used in your application:",source:"@site/docs/emit-cheatsheet.md",sourceDirName:".",slug:"/emit-cheatsheet/",permalink:"/docs/v4/emit-cheatsheet/",draft:!1,editUrl:"https://github.com/socketio/nhonvo.github.io/edit/main/docs/emit-cheatsheet.md",tags:[],version:"current",lastUpdatedAt:1712319740,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"Emit cheatsheet",slug:"/emit-cheatsheet/",toc_max_heading_level:4}},m={},u=[{value:"Server",id:"server",level:2},{value:"Single client",id:"single-client",level:3},{value:"Basic emit",id:"basic-emit",level:4},{value:"Acknowledgement",id:"acknowledgement",level:4},{value:"Acknowledgement and timeout",id:"acknowledgement-and-timeout",level:4},{value:"Broadcasting",id:"broadcasting",level:3},{value:"To all connected clients",id:"to-all-connected-clients",level:4},{value:"Except the sender",id:"except-the-sender",level:4},{value:"Acknowledgements",id:"acknowledgements",level:4},{value:"In a room",id:"in-a-room",level:4},{value:"In a namespace",id:"in-a-namespace",level:4},{value:"Between servers",id:"between-servers",level:3},{value:"Basic emit",id:"basic-emit-1",level:4},{value:"Acknowledgements",id:"acknowledgements-1",level:4},{value:"Client",id:"client",level:2},{value:"Basic emit",id:"basic-emit-2",level:3},{value:"Acknowledgement",id:"acknowledgement-1",level:3},{value:"Acknowledgement and timeout",id:"acknowledgement-and-timeout-1",level:3}],d={toc:u},g="wrapper";function p(e){let{components:n,...t}=e;return(0,l.yg)(g,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("admonition",{type:"caution"},(0,l.yg)("p",{parentName:"admonition"},"The following event names are reserved and must not be used in your application:"),(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"connect")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"connect_error")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"disconnect")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"disconnecting")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"newListener")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"removeListener"))),(0,l.yg)("pre",{parentName:"admonition"},(0,l.yg)("code",{parentName:"pre",className:"language-js"},'// BAD, will throw an error\nsocket.emit("disconnecting");\n'))),(0,l.yg)("h2",{id:"server"},"Server"),(0,l.yg)("h3",{id:"single-client"},"Single client"),(0,l.yg)("h4",{id:"basic-emit"},"Basic emit"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", (socket) => {\n  socket.emit("hello", 1, "2", { 3: "4", 5: Buffer.from([6]) });\n});\n')),(0,l.yg)("h4",{id:"acknowledgement"},"Acknowledgement"),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"callback",label:"Callback",default:!0,mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", (socket) => {\n  socket.emit("hello", "world", (arg1, arg2, arg3) => {\n    // ...\n  });\n});\n'))),(0,l.yg)(o.A,{value:"promise",label:"Promise",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", async (socket) => {\n  const response = await socket.emitWithAck("hello", "world");\n});\n')))),(0,l.yg)("h4",{id:"acknowledgement-and-timeout"},"Acknowledgement and timeout"),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"callback",label:"Callback",default:!0,mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", (socket) => {\n  socket.timeout(5000).emit("hello", "world", (err, arg1, arg2, arg3) => {\n    if (err) {\n      // the client did not acknowledge the event in the given delay\n    } else {\n      // ...\n    }\n  });\n});\n'))),(0,l.yg)(o.A,{value:"promise",label:"Promise",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", async (socket) => {\n  try {\n    const response = await socket.timeout(5000).emitWithAck("hello", "world");\n  } catch (e) {\n    // the client did not acknowledge the event in the given delay\n  }\n});\n')))),(0,l.yg)("h3",{id:"broadcasting"},"Broadcasting"),(0,l.yg)("h4",{id:"to-all-connected-clients"},"To all connected clients"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.emit("hello");\n')),(0,l.yg)("h4",{id:"except-the-sender"},"Except the sender"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.on("connection", (socket) => {\n  socket.broadcast.emit("hello");\n});\n')),(0,l.yg)("h4",{id:"acknowledgements"},"Acknowledgements"),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"callback",label:"Callback",default:!0,mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.timeout(5000).emit("hello", "world", (err, responses) => {\n  if (err) {\n    // some clients did not acknowledge the event in the given delay\n  } else {\n    console.log(responses); // one response per client\n  }\n});\n'))),(0,l.yg)(o.A,{value:"promise",label:"Promise",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'try {\n  const responses = await io.timeout(5000).emitWithAck("hello", "world");\n  console.log(responses); // one response per client\n} catch (e) {\n  // some clients did not acknowledge the event in the given delay\n}\n')))),(0,l.yg)("h4",{id:"in-a-room"},"In a room"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},'to all connected clients in the room named "my room"')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.to("my room").emit("hello");\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},'to all connected clients except the ones in the room named "my room"')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.except("my room").emit("hello");\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"with multiple clauses")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.to("room1").to(["room2", "room3"]).except("room4").emit("hello");\n')),(0,l.yg)("h4",{id:"in-a-namespace"},"In a namespace"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.of("/my-namespace").emit("hello");\n')),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"The modifiers can absolutely be chained:"),(0,l.yg)("pre",{parentName:"admonition"},(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.of("/my-namespace").on("connection", (socket) => {\n  socket\n    .timeout(5000)\n    .to("room1")\n    .to(["room2", "room3"])\n    .except("room4")\n    .emit("hello", (err, responses) => {\n      // ...\n    });\n});\n')),(0,l.yg)("p",{parentName:"admonition"},'This will emit a "hello" event to all connected clients:'),(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"in the namespace named ",(0,l.yg)("inlineCode",{parentName:"li"},"my-namespace")),(0,l.yg)("li",{parentName:"ul"},"in at least one of the rooms named ",(0,l.yg)("inlineCode",{parentName:"li"},"room1"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"room2")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"room3"),", but not in ",(0,l.yg)("inlineCode",{parentName:"li"},"room4")),(0,l.yg)("li",{parentName:"ul"},"except the sender")),(0,l.yg)("p",{parentName:"admonition"},"And expect an acknowledgement in the next 5 seconds.")),(0,l.yg)("h3",{id:"between-servers"},"Between servers"),(0,l.yg)("h4",{id:"basic-emit-1"},"Basic emit"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.serverSideEmit("hello", "world");\n')),(0,l.yg)("p",null,"Receiving side:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.on("hello", (value) => {\n  console.log(value); // "world"\n});\n')),(0,l.yg)("h4",{id:"acknowledgements-1"},"Acknowledgements"),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"callback",label:"Callback",default:!0,mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.serverSideEmit("hello", "world", (err, responses) => {\n  if (err) {\n    // some servers did not acknowledge the event in the given delay\n  } else {\n    console.log(responses); // one response per server (except the current one)\n  }\n});\n'))),(0,l.yg)(o.A,{value:"promise",label:"Promise",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'try {\n  const responses = await io.serverSideEmitWithAck("hello", "world");\n  console.log(responses); // one response per server (except the current one)\n} catch (e) {\n  // some servers did not acknowledge the event in the given delay\n}\n')))),(0,l.yg)("p",null,"Receiving side:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'io.on("hello", (value, callback) => {\n  console.log(value); // "world"\n  callback("hi");\n});\n')),(0,l.yg)("h2",{id:"client"},"Client"),(0,l.yg)("h3",{id:"basic-emit-2"},"Basic emit"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'socket.emit("hello", 1, "2", { 3: "4", 5: Uint8Array.from([6]) });\n')),(0,l.yg)("h3",{id:"acknowledgement-1"},"Acknowledgement"),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"callback",label:"Callback",default:!0,mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'socket.emit("hello", "world", (arg1, arg2, arg3) => {\n  // ...\n});\n'))),(0,l.yg)(o.A,{value:"promise",label:"Promise",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'const response = await socket.emitWithAck("hello", "world");\n')))),(0,l.yg)("h3",{id:"acknowledgement-and-timeout-1"},"Acknowledgement and timeout"),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"callback",label:"Callback",default:!0,mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'socket.timeout(5000).emit("hello", "world", (err, arg1, arg2, arg3) => {\n  if (err) {\n    // the server did not acknowledge the event in the given delay\n  } else {\n    // ...\n  }\n});\n'))),(0,l.yg)(o.A,{value:"promise",label:"Promise",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'try {\n  const response = await socket.timeout(5000).emitWithAck("hello", "world");\n} catch (e) {\n  // the server did not acknowledge the event in the given delay\n}\n')))))}p.isMDXComponent=!0}}]);