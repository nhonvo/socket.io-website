"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[1250],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=i,u=g["".concat(l,".").concat(m)]||g[m]||d[m]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(8168),i=(n(6540),n(5680));const o={title:"Native Socket.IO and Android",slug:"/native-socket-io-and-android/",authors:[{name:"Naoyuki Kanezawa",title:"Maintainer of Socket.IO",url:"https://twitter.com/nkzawa",image_url:"https://github.com/nkzawa.png"}]},r=void 0,s={permalink:"/blog/native-socket-io-and-android/",editUrl:"https://github.com/socketio/socket.io-website/edit/main/blog/2015-01-20-native-socket-io-and-android.md",source:"@site/blog/2015-01-20-native-socket-io-and-android.md",title:"Native Socket.IO and Android",description:"In this tutorial well learn how to create a chat client that communicates with a Socket.IO Node.JS chat server, with our native Android Client! If you want to jump straight to the code, it's on GitHub. Otherwise, read on!",date:"2015-01-20T00:00:00.000Z",formattedDate:"January 20, 2015",tags:[],readingTime:3.47,hasTruncateMarker:!0,authors:[{name:"Naoyuki Kanezawa",title:"Maintainer of Socket.IO",url:"https://twitter.com/nkzawa",image_url:"https://github.com/nkzawa.png",imageURL:"https://github.com/nkzawa.png"}],frontMatter:{title:"Native Socket.IO and Android",slug:"/native-socket-io-and-android/",authors:[{name:"Naoyuki Kanezawa",title:"Maintainer of Socket.IO",url:"https://twitter.com/nkzawa",image_url:"https://github.com/nkzawa.png",imageURL:"https://github.com/nkzawa.png"}]},prevItem:{title:"Socket.IO 1.3.3",permalink:"/blog/socket-io-1-3-3/"},nextItem:{title:"Introducing Socket.IO 1.0",permalink:"/blog/introducing-socket-io-1-0/"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installing the Dependencies",id:"installing-the-dependencies",level:2},{value:"Using socket in Activity and Fragment",id:"using-socket-in-activity-and-fragment",level:2},{value:"Emitting events",id:"emitting-events",level:2},{value:"Listening on events",id:"listening-on-events",level:2},{value:"Managing Socket State",id:"managing-socket-state",level:2},{value:"Further reading",id:"further-reading",level:2}],p={toc:c},g="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("img",{class:"aligncenter size-full wp-image-626",src:"/images/androidchat.gif",alt:"android chat demo",width:"338",height:"600"}),(0,i.yg)("p",null,"In this tutorial well learn how to create a chat client that communicates with a Socket.IO ",(0,i.yg)("a",{href:"https://github.com/socketio/socket.io/blob/master/examples/chat/index.js"},"Node.JS chat server"),", with our ",(0,i.yg)("a",{href:"https://github.com/socketio/socket.io-client-java"},"native Android Client"),"! If you want to jump straight to the code, it's on ",(0,i.yg)("a",{href:"https://github.com/nkzawa/socket.io-android-chat"},"GitHub"),". Otherwise, read on!"),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"To follow along, start by cloning the repository: ",(0,i.yg)("a",{title:"socket.io-android-chat",href:"https://github.com/nkzawa/socket.io-android-chat",target:"_blank"},"socket.io-android-chat"),"."),(0,i.yg)("p",null,"The app has the following features:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Sending a message to all users joining to the room."),(0,i.yg)("li",{parentName:"ul"},"Notifies when each user joins or leaves."),(0,i.yg)("li",{parentName:"ul"},"Notifies when an user start typing a message.")),(0,i.yg)("p",null,"Socket.IO provides an event-oriented API that works across all networks, devices and browsers. It's incredibly robust (works even behind corporate proxies!) and highly performant, which is very suitable for multiplayer games or realtime communication."),(0,i.yg)("h2",{id:"installing-the-dependencies"},"Installing the Dependencies"),(0,i.yg)("p",null,"The first step is to install the Java Socket.IO client with ",(0,i.yg)("a",{href:"https://developer.android.com/tools/building/configuring-gradle.html",target:"_blank"},"Gradle"),"."),(0,i.yg)("p",null,"For this app, we just add the dependency to ",(0,i.yg)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-gradle"},"dependencies {\n    implementation ('io.socket:socket.io-client:2.0.0') {\n        exclude group: 'org.json', module: 'json'\n    }\n}\n")),(0,i.yg)("p",null,"We must remember adding the internet permission to ",(0,i.yg)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- app/AndroidManifest.xml --\x3e\n<manifest xmlns:android="http://schemas.android.com/apk/res/android">\n    <uses-permission android:name="android.permission.INTERNET" />\n    ...\n</manifest>\n')),(0,i.yg)("p",null,"Now we can use Socket.IO on Android!"),(0,i.yg)("h2",{id:"using-socket-in-activity-and-fragment"},"Using socket in Activity and Fragment"),(0,i.yg)("p",null,"First, we have to initialize a new instance of Socket.IO as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'import io.socket.client.IO;\nimport io.socket.client.Socket;\n\nprivate Socket mSocket;\n{\n    try {\n        mSocket = IO.socket("http://chat.socket.io");\n    } catch (URISyntaxException e) {}\n}\n\n@Override\npublic void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    mSocket.connect();\n}\n')),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"IO.socket()")," returns a socket for ",(0,i.yg)("inlineCode",{parentName:"p"},"http://chat.socket.io")," with the default options. Notice that the method caches the result, so you can always get a same ",(0,i.yg)("inlineCode",{parentName:"p"},"Socket")," instance for an url from any Activity or Fragment.\nAnd we explicitly call ",(0,i.yg)("inlineCode",{parentName:"p"},"connect()")," to establish the connection here (unlike the JavaScript client). In this app, we use ",(0,i.yg)("inlineCode",{parentName:"p"},"onCreate")," lifecycle callback for that, but it actually depends on your application."),(0,i.yg)("h2",{id:"emitting-events"},"Emitting events"),(0,i.yg)("p",null,"Sending data looks as follows. In this case, we send a string but you can do JSON data too with the ",(0,i.yg)("a",{href:"http://developer.android.com/reference/org/json/package-summary.html",target:"_blank"},"org.json")," package, and even binary data is supported as well!"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'private EditText mInputMessageView;\n\nprivate void attemptSend() {\n    String message = mInputMessageView.getText().toString().trim();\n    if (TextUtils.isEmpty(message)) {\n        return;\n    }\n\n    mInputMessageView.setText("");\n    mSocket.emit("new message", message);\n}\n')),(0,i.yg)("h2",{id:"listening-on-events"},"Listening on events"),(0,i.yg)("p",null,"Like I mentioned earlier, Socket.IO is ",(0,i.yg)("strong",{parentName:"p"},"bidirectional"),", which means we can send events to the server, but also at any time during the communication the server can send events to us."),(0,i.yg)("p",null,"We then can make the socket listen an event on ",(0,i.yg)("inlineCode",{parentName:"p"},"onCreate")," lifecycle callback."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'@Override\npublic void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n\n    mSocket.on("new message", onNewMessage);\n    mSocket.connect();\n}\n')),(0,i.yg)("p",null,"With this we listen on the ",(0,i.yg)("inlineCode",{parentName:"p"},"new message")," event to receive messages from other users."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'import io.socket.emitter.Emitter;\n\nprivate Emitter.Listener onNewMessage = new Emitter.Listener() {\n    @Override\n    public void call(final Object... args) {\n        getActivity().runOnUiThread(new Runnable() {\n            @Override\n            public void run() {\n                JSONObject data = (JSONObject) args[0];\n                String username;\n                String message;\n                try {\n                    username = data.getString("username");\n                    message = data.getString("message");\n                } catch (JSONException e) {\n                    return;\n                }\n\n                // add the message to view\n                addMessage(username, message);\n            }\n        });\n    }\n};\n')),(0,i.yg)("p",null,"This is what ",(0,i.yg)("inlineCode",{parentName:"p"},"onNewMessage")," looks like. A listener is an instance of ",(0,i.yg)("inlineCode",{parentName:"p"},"Emitter.Listener")," and must be implemented the ",(0,i.yg)("inlineCode",{parentName:"p"},"call")," method. Youll notice that inside of ",(0,i.yg)("inlineCode",{parentName:"p"},"call()")," is wrapped by ",(0,i.yg)("inlineCode",{parentName:"p"},"Activity#runOnUiThread()"),", that is because the callback is always called on another thread from Android UI thread, thus we have to make sure that adding a message to view happens on the UI thread."),(0,i.yg)("h2",{id:"managing-socket-state"},"Managing Socket State"),(0,i.yg)("p",null,"Since an Android Activity has its own lifecycle, we should carefully manage the state of the socket also to avoid problems like memory leaks. In this app, we\u2019ll close the socket connection and remove all listeners on ",(0,i.yg)("inlineCode",{parentName:"p"},"onDestroy")," callback of Activity."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'@Override\npublic void onDestroy() {\n    super.onDestroy();\n\n    mSocket.disconnect();\n    mSocket.off("new message", onNewMessage);\n}\n')),(0,i.yg)("p",null,"Calling ",(0,i.yg)("inlineCode",{parentName:"p"},"off()")," removes the listener of the ",(0,i.yg)("inlineCode",{parentName:"p"},"new message")," event."),(0,i.yg)("h2",{id:"further-reading"},"Further reading"),(0,i.yg)("p",null,"If you want to explore more, I recommend you look into:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Other features of this app. They are just implemented with ",(0,i.yg)("inlineCode",{parentName:"p"},"emit()"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"on()")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"off()"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The ",(0,i.yg)("a",{parentName:"p",href:"https://socketio.github.io/socket.io-client-java/installation.html"},"documentation")," of the Java Socket.IO client")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Many other great Socket.IO implementations created by the community!"))))}d.isMDXComponent=!0}}]);