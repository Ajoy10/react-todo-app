(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{18:function(e,t,o){},20:function(e,t,o){"use strict";o.r(t);var n=o(1),c=o.n(n),r=o(11),i=o.n(r),s=(o(18),o(7)),a=o(6),d=o(0),l=Object(n.createContext)();function u(e){var t=Object(n.useState)((function(){var e=localStorage.getItem("isLightTheme");return{isLightTheme:!e||JSON.parse(e),light:{text:"#2A2B2F",accent:"#D0D0D0",background:"#ECECEC",secondary:"#E2DFDF",good:"#35834F",bad:"#B54141"},dark:{text:"#DDD",accent:"#121212",background:"#222",secondary:"#444444",good:"#35834F",bad:"#B54141"}}})),o=Object(a.a)(t,2),c=o[0],r=o[1];return Object(n.useEffect)((function(){localStorage.setItem("isLightTheme",JSON.stringify(c.isLightTheme))}),[c]),Object(d.jsx)(l.Provider,{value:Object(s.a)(Object(s.a)({},c),{},{toggleTheme:function(){r(Object(s.a)(Object(s.a)({},c),{},{isLightTheme:!c.isLightTheme}))}}),children:e.children})}var j=o(22);function b(){return Object(d.jsx)(l.Consumer,{children:function(e){var t=e.isLightTheme,o=e.light,n=e.dark,c=e.toggleTheme,r=t?o:n;return Object(d.jsxs)("nav",{style:{color:r.text,backgroundColor:r.secondary},children:[Object(d.jsx)("h3",{children:"Todo App"}),Object(d.jsx)("button",{style:{backgroundColor:r.background},onClick:function(){return c()},children:Object(d.jsx)(j.a,{style:{color:r.text}})})]})}})}var h=o(9),O=o(23),g=o(24);function x(e){var t=e.refId,o=e.todo,c=e.onDone,r=e.onDelete,i=Object(n.useContext)(l),s=i.isLightTheme,a=i.light,u=i.dark,j=s?a:u;return Object(d.jsxs)("div",{style:{color:j.text,backgroundColor:j.accent},className:"todo-item"+(o.done?" todo-done":""),children:[Object(d.jsx)("div",{className:"todo-text",children:o.text}),Object(d.jsxs)("div",{className:"todo-actions",children:[Object(d.jsx)("button",{onClick:function(){return r(t)},children:Object(d.jsx)(O.a,{style:{color:j.bad}})}),Object(d.jsx)("button",{onClick:function(){return c(t)},children:Object(d.jsx)(g.a,{style:{color:j.good}})})]})]})}function f(){var e=Object(n.useState)((function(){var e=localStorage.getItem("todos");return e?JSON.parse(e):[]})),t=Object(a.a)(e,2),o=t[0],c=t[1],r=Object(n.useContext)(l),i=r.isLightTheme,s=r.light,u=r.dark,j=i?s:u;return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(d.jsxs)("div",{style:{color:j.text,backgroundColor:j.background},className:"todo-view",children:[Object(d.jsx)(v,{theme:j,AddTodo:function(e){c([].concat(Object(h.a)(o),[{text:e,done:!1}]))}}),Object(d.jsx)(m,{theme:j,DeleteTodo:function(e){c(Object(h.a)(o.filter((function(t,n){return t!==o[e]}))))},DoneTodo:function(e){c(Object(h.a)(o.map((function(t,o){return o===e&&(t.done=!0),t}))))},todos:o})]})}function m(e){e.theme;var t=e.todos,o=e.DeleteTodo,n=e.DoneTodo;return Object(d.jsx)("div",{className:"todo-list",children:Object(d.jsx)("ul",{children:t.map((function(e,t){return Object(d.jsx)(x,{refId:t,todo:e,onDelete:o,onDone:n},t)}))})})}function v(e){var t=e.theme,o=e.AddTodo,c=Object(n.useState)(""),r=Object(a.a)(c,2),i=r[0],s=r[1];return Object(d.jsxs)("form",{className:"todo-add",onSubmit:function(e){e.preventDefault(),o(i),s("")},children:[Object(d.jsx)("input",{type:"text",value:i,onChange:function(e){return s(e.target.value)},required:!0,placeholder:"Type something...",style:{color:t.text,backgroundColor:t.secondary}}),Object(d.jsx)("button",{style:{color:t.text,backgroundColor:t.accent},type:"submit",children:"Add"})]})}var p=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(u,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(f,{})]})})},T=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,25)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;o(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),T()}},[[20,1,2]]]);
//# sourceMappingURL=main.53a457dd.chunk.js.map