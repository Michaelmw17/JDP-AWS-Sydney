(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{21:function(n,e,o){"use strict";var t,r=o(18),i=o(19),a=Object(i.a)(t||(t=Object(r.a)(["\n    body,\n    html,\n    a {\n        font-family: 'Open Sans';\n        font-family: 'Ubuntu', sans-serif;\n        font-display: swap;\n    }\n\n\n    body {\n        margin:0;\n        padding:0;\n        border: 0;\n        outline: 0;\n        overflow-x: hidden;\n      \n        \n    }\n.Span {\n\tcolor: red[500],\n\tfontSize: 20, fontSize: 20,\n\tposition: \"static\"\n}\n        \n    a:hover {\n        color: rgb(209, 29, 50);\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6\n    {\n        font-family: 'Poppins', sans-serif;\n        padding: 3.7rem  0.5rem 0.5rem 0.3rem ;\n        font-size: 3.255rem;\n        line-height: 3.0625rem;\n      \n        @media only screen and (max-width: 414px) {\n          font-size: 1.925rem;\n        }\n        h1,h2,h3,h4,h5,h6::first-letter {\n  text-transform: uppercase;\n}\n   h6 {\n       font-family: 'Poppins', sans-serif;\n        color: red;\n        font-size: 2.975rem;\n        line-height: 3.0625rem;\n      \n        @media only screen and (max-width: 414px) {\n          font-size: 1.925rem;\n           color: red;\n        }\n    p {\n\t\tfont-weight: 200;\n        font-size: 1.625rem;\n    }\n   \n    h1 {\n        font-weight: 600;\n    }\n\n    a {\n        text-decoration: none;\n        outline: none;\n        color: rgb(209, 29, 50);\n\n        :hover {\n            color: rgb(209, 29, 50)\n        }\n    }\n    \n    *:focus {\n        outline: none;\n    }\n\n    .about-block-image svg {\n        text-align: center;\n    }\n\n    .ant-drawer-body {\n        display: flex;\n        flex-direction: column;\n        padding: 1.25rem;\n        padding-top: 2.5rem;\n        padding-right: 2rem;\n        text-align: center;\n    }\n\n    .anticon,\n    .ant-notification-notice-icon-success {\n        color: rgb(209, 29, 50);\n        \n    }\n    Span:hover {\n        color: #000\n    }\n    \n\n"])));e.a=a},40:function(n,e,o){var t={"./About/About":[28,9,0,3,4],"./About/About.js":[28,9,0,3,4],"./About/about.css":[43,7,25],"./Home":[13,9,0,2,1],"./Home/":[13,9,0,2,1],"./Home/homeStyles.css":[42,7,26],"./Home/index":[13,9,0,2,1],"./Home/index.js":[13,9,0,2,1]};function r(n){if(!o.o(t,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=t[n],r=e[0];return Promise.all(e.slice(2).map(o.e)).then((function(){return o.t(r,e[1])}))}r.keys=function(){return Object.keys(t)},r.id=40,n.exports=r},41:function(n,e,o){"use strict";o.r(e);var t=o(0),r=o(11),i=o(20),a=o.n(i),c=(o(33),o(1)),s=[{path:["/","/home"],exact:!0,component:"Home"}],l=o(21),u=o(3),d=Object(t.lazy)((function(){return Promise.all([o.e(0),o.e(2),o.e(1)]).then(o.bind(null,13))})),h=Object(t.lazy)((function(){return Promise.all([o.e(0),o.e(3),o.e(4)]).then(o.bind(null,28))})),f=function(){return Object(u.jsxs)(t.Suspense,{fallback:null,children:[Object(u.jsx)(l.a,{}),Object(u.jsxs)(c.c,{children:[s.map((function(n){return Object(u.jsx)(c.a,{path:n.path,exact:n.exact,component:Object(t.lazy)((function(){return o(40)("./".concat(n.component))}))},n.component)})),Object(u.jsx)(c.a,{exact:!0,path:"/",children:Object(u.jsx)(d,{})}),Object(u.jsx)(c.a,{path:"/About",children:Object(u.jsx)(h,{})})]})]})},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var o=n.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var b=function(){return Object(u.jsx)(r.a,{basename:".",children:Object(u.jsx)(f,{})})};a.a.render(Object(u.jsx)(b,{}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");m?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):p(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):p(e,n)}))}}()}},[[41,9,11]]]);
//# sourceMappingURL=main.8db478b0.chunk.js.map