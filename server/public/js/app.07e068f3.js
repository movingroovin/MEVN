(function(t){function e(e){for(var r,s,u=e[0],a=e[1],i=e[2],f=0,p=[];f<u.length;f++)s=u[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},c=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var l=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("Posts",{attrs:{msg:"POSTS"}})],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("div",[n("h4",[t._v("Say something")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{on:{click:t.createPost}},[t._v("Submit")])]),n("hr"),t._l(t.posts,(function(e,r){return n("div",{key:r},[n("h3",[t._v(t._s(e.text))]),n("p",[t._v(t._s(e.createTime))]),n("button",{on:{click:function(n){return t.deletePost(e._id)}}},[t._v("Delete")])])}))],2)},u=[],a=(n("96cf"),n("1da1")),i=(n("d3b7"),n("d4ec")),l=n("bee2"),f=n("bc3a"),p=n.n(f),d="api/posts/",v=function(){function t(){Object(i["a"])(this,t)}return Object(l["a"])(t,null,[{key:"getPosts",value:function(){return new Promise((function(t,e){p.a.get(d).then((function(e){t(e.data)})).catch((function(t){e(t)}))}))}},{key:"insertPost",value:function(t){return p.a.post(d,{text:t})}},{key:"deletePost",value:function(t){return p.a.delete("".concat(d).concat(t))}}]),t}(),h=v,g={name:"Posts",props:{msg:String},data:function(){return{posts:[],error:"",text:""}},created:function(){var t=this;try{h.getPosts().then((function(e){t.posts=e}))}catch(e){this.error=e.message}},methods:{createPost:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.insertPost(t.text);case 2:return e.next=4,h.getPosts();case 4:t.posts=e.sent;case 5:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,h.deletePost(t);case 2:return n.next=4,h.getPosts();case 4:e.posts=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}},m=g,b=(n("b0fe"),n("2877")),x=Object(b["a"])(m,s,u,!1,null,"cc26f59c",null),P=x.exports,y={name:"App",components:{Posts:P}},_=y,w=(n("034f"),Object(b["a"])(_,o,c,!1,null,null,null)),O=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(O)}}).$mount("#app")},"64f7":function(t,e,n){},"85ec":function(t,e,n){},b0fe:function(t,e,n){"use strict";var r=n("64f7"),o=n.n(r);o.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.07e068f3.js.map