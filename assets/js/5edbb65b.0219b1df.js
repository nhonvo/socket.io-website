"use strict";(self.webpackChunksample_website=self.webpackChunksample_website||[]).push([[3426],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=l(t),m=r,h=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[g]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=t(8168),r=(t(6540),t(5680));const o={title:"npm package provenance",slug:"/npm-package-provenance/",authors:["darrachequesne"]},i=void 0,p={permalink:"/socket.io-website/blog/npm-package-provenance/",editUrl:"https://github.com/socketio/socket.io-website/edit/main/blog/2024-07-25-npm-provenance-statements.md",source:"@site/blog/2024-07-25-npm-provenance-statements.md",title:"npm package provenance",description:"Hello everyone!",date:"2024-07-25T00:00:00.000Z",formattedDate:"July 25, 2024",tags:[],readingTime:1.915,hasTruncateMarker:!0,authors:[{name:"Damien Arrachequesne",title:"Maintainer of Socket.IO",url:"https://github.com/darrachequesne",imageURL:"https://github.com/darrachequesne.png",key:"darrachequesne"}],frontMatter:{title:"npm package provenance",slug:"/npm-package-provenance/",authors:["darrachequesne"]},nextItem:{title:"Socket.IO monorepo",permalink:"/socket.io-website/blog/monorepo/"}},s={authorsImageUrls:[void 0]},l=[{value:"Notes",id:"notes",level:2},{value:"Workflow trigger",id:"workflow-trigger",level:3},{value:"Compilation step",id:"compilation-step",level:3},{value:"First verified version",id:"first-verified-version",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:l},g="wrapper";function u(e){let{components:n,...o}=e;return(0,r.yg)(g,(0,a.A)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Hello everyone!"),(0,r.yg)("p",null,"We are happy to announce that Socket.IO packages will now be published with a provenance statement."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Package provenance is a npm feature which was introduced last year to increase trust in the npm supply chain."),(0,r.yg)("p",{parentName:"admonition"},"The idea is that the package is published and signed from a trusted CI/CD platform (such as GitHub Actions), so the code that ends up in the registry cannot be tampered with."),(0,r.yg)("p",{parentName:"admonition"},"More info: ",(0,r.yg)("a",{parentName:"p",href:"https://github.blog/security/supply-chain-security/introducing-npm-package-provenance/"},"https://github.blog/security/supply-chain-security/introducing-npm-package-provenance/"))),(0,r.yg)("p",null,"Starting today, new Socket.IO versions will be published directly from GitHub Actions and no longer from a maintainer machine."),(0,r.yg)("p",null,"The publication workflow can be found here: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/socketio/socket.io/blob/main/.github/workflows/publish.yml"},(0,r.yg)("inlineCode",{parentName:"a"},"publish.yml"))),(0,r.yg)("h2",{id:"notes"},"Notes"),(0,r.yg)("p",null,"There are a few notable differences from the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.npmjs.com/generating-provenance-statements"},"reference workflow"),":"),(0,r.yg)("h3",{id:"workflow-trigger"},"Workflow trigger"),(0,r.yg)("p",null,"The workflow is triggered when pushing a tag to GitHub:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},"on:\n  push:\n    tags:\n      - '**@*'\n")),(0,r.yg)("p",null,"The expected format is ",(0,r.yg)("inlineCode",{parentName:"p"},"<package>@<version>"),", for example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"socket.io@1.2.3")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@socket.io/redis-adapter@3.4.5")," (hence the ",(0,r.yg)("inlineCode",{parentName:"li"},"**")," to match the ",(0,r.yg)("inlineCode",{parentName:"li"},"/")," char)")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"<package>")," part is then used to select the right workspace (since we are using ",(0,r.yg)("a",{parentName:"p",href:"/blog/monorepo/"},"a monorepo"),"):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},"jobs:\n  publish:\n    steps:\n      # [...]\n\n      - name: Publish package\n        run: npm publish --workspace=${GITHUB_REF_NAME%@*} --provenance --access public\n        env:\n          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}\n")),(0,r.yg)("p",null,"Reference: ",(0,r.yg)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions"},"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions")),(0,r.yg)("h3",{id:"compilation-step"},"Compilation step"),(0,r.yg)("p",null,"A TypeScript compilation step is necessary, since some packages depend on the types of other packages:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},"jobs:\n  publish:\n    steps:\n      # [...]\n\n      - name: Compile each package\n        run: npm run compile --workspaces --if-present\n\n      - name: Publish package\n      # [...]\n")),(0,r.yg)("h2",{id:"first-verified-version"},"First verified version"),(0,r.yg)("p",null,"The latest version of the ",(0,r.yg)("inlineCode",{parentName:"p"},"engine.io-parser")," package has been released this way."),(0,r.yg)("p",null,"On the ",(0,r.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/engine.io-parser"},"npmjs.com")," website, you can find:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the details of the build, at the bottom of the page:")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Provenance details on www.npmjs.com",src:t(1606).A,width:"855",height:"162"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'a checked badge, in the "Versions" tab')),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Provenance badge on www.npmjs.com",src:t(3753).A,width:"779",height:"543"})),(0,r.yg)("p",null,"You can also verify the attestations of your dependencies:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ npm i socket.io\n\nadded 22 packages, and audited 23 packages in 853ms\n\nfound 0 vulnerabilities\n\n$ npm audit signatures\n\naudited 22 packages in 1s\n\n22 packages have verified registry signatures\n\n1 package has a verified attestation # <-- it's a good start!\n")),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"This is a big step forward in increasing trust in the JS ecosystem, congratulations to the npm team!"),(0,r.yg)("p",null,"Some big names have already joined the club:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/axios"},"axios")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/next"},"next")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/vite"},"vite"))),(0,r.yg)("p",null,"That's all folks, thanks for reading!"))}u.isMDXComponent=!0},3753:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/provenance-badge-a4562f3cf67c33da2090d3a2cbaaf4d7.png"},1606:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/provenance-details-a3af0d987e0389724c5e0244055abe9a.png"}}]);