"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[628],{5680:(t,e,n)=>{n.d(e,{xA:()=>u,yg:()=>h});var r=n(6540);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:e},u),{},{components:n})):r.createElement(h,i({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[p]="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6545:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const o={title:"Native Socket.IO and Android",slug:"/native-socket-io-and-android/",authors:[{name:"Naoyuki Kanezawa",title:"Maintainer of Socket.IO",url:"https://twitter.com/nkzawa",image_url:"https://github.com/nkzawa.png"}]},i=void 0,c={permalink:"/blog/native-socket-io-and-android/",editUrl:"https://github.com/socketio/socket.io-website/edit/main/blog/2015-01-20-native-socket-io-and-android.md",source:"@site/blog/2015-01-20-native-socket-io-and-android.md",title:"Native Socket.IO and Android",description:"In this tutorial well learn how to create a chat client that communicates with a Socket.IO Node.JS chat server, with our native Android Client! If you want to jump straight to the code, it's on GitHub. Otherwise, read on!",date:"2015-01-20T00:00:00.000Z",formattedDate:"January 20, 2015",tags:[],readingTime:3.47,hasTruncateMarker:!0,authors:[{name:"Naoyuki Kanezawa",title:"Maintainer of Socket.IO",url:"https://twitter.com/nkzawa",image_url:"https://github.com/nkzawa.png",imageURL:"https://github.com/nkzawa.png"}],frontMatter:{title:"Native Socket.IO and Android",slug:"/native-socket-io-and-android/",authors:[{name:"Naoyuki Kanezawa",title:"Maintainer of Socket.IO",url:"https://twitter.com/nkzawa",image_url:"https://github.com/nkzawa.png",imageURL:"https://github.com/nkzawa.png"}]},prevItem:{title:"Socket.IO 1.3.3",permalink:"/blog/socket-io-1-3-3/"},nextItem:{title:"Introducing Socket.IO 1.0",permalink:"/blog/introducing-socket-io-1-0/"}},l={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function d(t){let{components:e,...n}=t;return(0,a.yg)(p,(0,r.A)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("img",{class:"aligncenter size-full wp-image-626",src:"/images/androidchat.gif",alt:"android chat demo",width:"338",height:"600"}),(0,a.yg)("p",null,"In this tutorial well learn how to create a chat client that communicates with a Socket.IO ",(0,a.yg)("a",{href:"https://github.com/socketio/socket.io/blob/master/examples/chat/index.js"},"Node.JS chat server"),", with our ",(0,a.yg)("a",{href:"https://github.com/socketio/socket.io-client-java"},"native Android Client"),"! If you want to jump straight to the code, it's on ",(0,a.yg)("a",{href:"https://github.com/nkzawa/socket.io-android-chat"},"GitHub"),". Otherwise, read on!"))}d.isMDXComponent=!0}}]);