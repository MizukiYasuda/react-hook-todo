(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{4:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),l=a(3),u=a.n(l);a(9);function o(e){return c.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}function s(e){var t=function(t){return c.a.createElement(o,{value:e.squares[t],onClick:function(){return e.onClick(t)}})};return c.a.createElement("div",null,c.a.createElement("div",{className:"board-row"},t(0),t(1),t(2)),c.a.createElement("div",{className:"board-row"},t(3),t(4),t(5)),c.a.createElement("div",{className:"board-row"},t(6),t(7),t(8)))}function i(){var e,t=Object(r.useState)([{squares:Array(9).fill(null)}]),a=Object(n.a)(t,2),l=a[0],u=a[1],o=Object(r.useState)(0),i=Object(n.a)(o,2),v=i[0],f=i[1],E=Object(r.useState)(!0),b=Object(n.a)(E,2),d=b[0],p=b[1],k=l,O=k[v],g=m(O.squares),q=k.map((function(e,t){var a=t?"Go to move #".concat(t):"Go to game start";return c.a.createElement("li",{key:t},c.a.createElement("button",{onClick:function(){return function(e){f(e),p(e%2===0)}(t)}},a))}));return e=g?"winner: ".concat(g):"Next player: ".concat(d?"X":"O"),c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(s,{squares:O.squares,onClick:function(e){return function(e){var t=l.slice(0,v+1),a=t[t.length-1].squares.slice();m(a)||a[e]||(a[e]=d?"X":"O",u(t.concat([{squares:a}])),f(t.length),p(!d))}(e)}})),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null,e),c.a.createElement("ol",null,q)))}function m(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(n.a)(t[a],3),c=r[0],l=r[1],u=r[2];if(e[c]&&e[c]===e[l]&&e[c]===e[u])return e[c]}return null}u.a.render(c.a.createElement(i,null),document.getElementById("root"))},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.1697186d.chunk.js.map