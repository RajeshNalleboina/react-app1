(this["webpackJsonpreact-app1"]=this["webpackJsonpreact-app1"]||[]).push([[0],{18:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(16),l=t.n(r),o=(t(23),t(8)),s=t.n(o),i=(t(24),t(9)),m=t(11),d=t(1);function p(e){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return console.log(e)}));var a=i.profile[e.location.data.id];return console.log(a.career),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-lg-3 m-2"},c.a.createElement("div",{className:"card shadow"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("img",{src:s.a,alt:"profile Icon",style:{width:"30%"}}),c.a.createElement("h2",null,a.basics.name),c.a.createElement("h4",{className:"text-secondary"},a.basics.role),c.a.createElement("a",{href:"tel:"+a.basics.phone},c.a.createElement("h4",null,a.basics.phone)),c.a.createElement("a",{href:"mailto:"+a.basics.email},c.a.createElement("h4",null,a.basics.email))))),c.a.createElement("div",{className:"col-lg-8 m-2"},c.a.createElement("div",{className:"card shadow"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h2",null,"Career Object:"),c.a.createElement("hr",null),c.a.createElement("p",null,a.career)))))}var u=function(){var e=i.profile;return console.log(e),c.a.createElement("div",{className:"row justify-content-center"},e.map((function(e,a){return c.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-10 mt-1",key:a},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("img",{src:s.a,alt:"profile Icon",style:{width:"30%"}}),c.a.createElement("h2",null,e.basics.name),c.a.createElement("h4",{className:"text-secondary"},e.basics.role),c.a.createElement("a",{href:"tel:"+e.basics.phone},c.a.createElement("h4",null,e.basics.phone)),c.a.createElement("a",{href:"mailto:"+e.basics.email},c.a.createElement("h4",null,e.basics.email)),c.a.createElement(m.b,{to:{pathname:"/resume",data:{id:a}},className:"btn btn-primary"},"View Profile"))))})))},h=function(){return c.a.createElement(m.a,null,c.a.createElement(d.a,{exact:!0,path:"/",component:u}),c.a.createElement(d.a,{exact:!0,path:"/resume",component:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t.p+"static/media/profile.6f88fc6b.svg"},9:function(e){e.exports=JSON.parse('{"profile":[{"basics":{"name":"Hanu","role":"MERN","phone":"9817214312","email":"haun@apssdc.in"},"career":"i\' want to expore my entire knowledge to give better O/p or solution"},{"basics":{"name":"Swami","role":"React Developer","phone":"8659354324","email":"swami@apssdc.in"},"career":"i\' want to expore my entire knowledge to give better O/p or solution"}]}')}},[[18,1,2]]]);
//# sourceMappingURL=main.5637ada3.chunk.js.map