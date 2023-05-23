"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6944],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5759:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const o={slug:"crowsnest-v4-breaking-changes-manual-upgrade",title:"Crowsnest v4 contains breaking changes and requires manual steps to upgrade.",authors:["miklschmidt"],tags:["Crowsnest","Mainsail"]},i=void 0,s={permalink:"/blog/crowsnest-v4-breaking-changes-manual-upgrade",editUrl:"https://github.com/Rat-OS/RatOS/edit/v2.x/site/blog/2023-05-23-breaking-crowsnest-changes.mdx",source:"@site/blog/2023-05-23-breaking-crowsnest-changes.mdx",title:"Crowsnest v4 contains breaking changes and requires manual steps to upgrade.",description:"Crowsnest just recently made huge changes to the way it works. This is great news, because it should be much faster and more reliable. Unfortunately, it also means that there are major breaking changes, and you'll need to do some manual steps to upgrade. When you update to V4 through the machine tab in mainsail, crowsnest will stop working until you execute the following steps.",date:"2023-05-23T00:00:00.000Z",formattedDate:"May 23, 2023",tags:[{label:"Crowsnest",permalink:"/blog/tags/crowsnest"},{label:"Mainsail",permalink:"/blog/tags/mainsail"}],readingTime:1.93,hasTruncateMarker:!1,authors:[{name:"Mikkel Schmidt",title:"Creator of RatOS",url:"https://github.com/miklschmidt",imageURL:"https://github.com/miklschmidt.png",key:"miklschmidt"}],frontMatter:{slug:"crowsnest-v4-breaking-changes-manual-upgrade",title:"Crowsnest v4 contains breaking changes and requires manual steps to upgrade.",authors:["miklschmidt"],tags:["Crowsnest","Mainsail"]},nextItem:{title:"RatOS V2.0.0 Released!",permalink:"/blog/ratos-v2-0-0-released"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Crowsnest just recently made huge changes to the way it works. This is great news, because it should be much faster and more reliable. Unfortunately, it also means that there are major breaking changes, and you'll need to do some manual steps to upgrade. When you update to V4 through the machine tab in mainsail, crowsnest will stop working until you execute the following steps."),(0,r.kt)("p",null,"Make sure to read these instructions carefully before starting the process, so you don't miss anything. Just to be safe, download a copy of your crowsnest.conf."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update crowsnest in the machine tab in mainsail. Make sure it's >= v4.0.0."),(0,r.kt)("li",{parentName:"ol"},"Open a terminal window or command prompt (win + r, type cmd, hit enter) and ssh into your printer. The password is ",(0,r.kt)("inlineCode",{parentName:"li"},"raspberry")," unless you changed it.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh pi@<your printer's hostname.local or ip address without the angle brackets>\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Run the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make uninstall\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When asked ",(0,r.kt)("inlineCode",{parentName:"p"},"Do you REALLY want to remove existing 'crowsnest'? (y/N)"),' delete the N and type "y" for "Yes", then hit enter.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When asked ",(0,r.kt)("inlineCode",{parentName:"p"},"do you want to remove crowsnest.conf"),' answer "N" for "No".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ignore the instructions to remove the crowsnest folder.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ignore the instructions to remove ",(0,r.kt)("inlineCode",{parentName:"p"},"[update manager crowsnest]")," from moonraker.conf.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This next part will take a while, and you'll have to answer a couple of questions along the way."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo make install\n")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When asked ",(0,r.kt)("inlineCode",{parentName:"p"},"Do you want to add 'update manager' entry to your moonraker.conf?"),' answer "N" for "No".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ignore the instructions to add the crowsnest update manager entry manually (it's already there).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'When asked to reboot, answer "Y" for "Yes".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After rebooting, go to the Machine tab in mainsail and edit crowsnest.conf. Enter your old settings from the file you downloaded, alternatively crowsnest should have created a backup file called crowsnest.conf.date-of-backup.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Skip if not using a Raspberry Pi) In crowsnest.conf change ",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"camera-streamer"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'(Skip if not using a Raspberry Pi) Back in mainsail, edit your web camera settings and make sure the "Camera Streamer" option is selected.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Skip if not using a Raspberry Pi) Change ",(0,r.kt)("inlineCode",{parentName:"p"},"URL Stream")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"URL Snapshot")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"webcam/webrtc"),"\n",(0,r.kt)("img",{alt:"Camera Stream option enabled",src:n(460).Z,width:"1212",height:"744"})))),(0,r.kt)("p",null,"You're now using Crowsnest v4, which should have much better performance."),(0,r.kt)("p",null,"Thanks to tomlawesome for the image!"))}u.isMDXComponent=!0},460:function(e,t,n){t.Z=n.p+"assets/images/camera-stream-option-8efa573226fa3a0761a81fa77fc1ac4d.png"}}]);