(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5795504"],{"0a06":function(t,e,r){"use strict";var n=r("c532"),o=r("30b5"),a=r("f6b4"),i=r("5270"),s=r("4a7b");function c(t){this.defaults=t,this.interceptors={request:new a,response:new a}}c.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=s(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[i,void 0],r=Promise.resolve(t);this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));while(e.length)r=r.then(e.shift(),e.shift());return r},c.prototype.getUri=function(t){return t=s(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,r){return this.request(n.merge(r||{},{method:t,url:e}))}})),n.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,r,o){return this.request(n.merge(o||{},{method:t,url:e,data:r}))}})),t.exports=c},"0acb":function(t,e,r){t.exports=r.p+"img/carousel1.16ab8767.jpg"},"0df6":function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},1441:function(t,e,r){},"18cf":function(t,e,r){t.exports=r.p+"img/carousel3.4e8782c7.jpg"},"1d2b":function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},2444:function(t,e,r){"use strict";(function(e){var n=r("c532"),o=r("c8af"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function s(){var t;return"undefined"!==typeof XMLHttpRequest?t=r("b50d"):"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e)&&(t=r("b50d")),t}var c={adapter:s(),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(i(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)?(i(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){c.headers[t]=n.merge(a)})),t.exports=c}).call(this,r("4362"))},"2d83":function(t,e,r){"use strict";var n=r("387f");t.exports=function(t,e,r,o,a){var i=new Error(t);return n(i,e,r,o,a)}},"2e67":function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,r){"use strict";var n=r("c532");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var a;if(r)a=r(e);else if(n.isURLSearchParams(e))a=e.toString();else{var i=[];n.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),i.push(o(e)+"="+o(t))})))})),a=i.join("&")}if(a){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+a}return t}},"387f":function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},3934:function(t,e,r){"use strict";var n=r("c532");t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},4362:function(t,e,r){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,n="/";e.cwd=function(){return n},e.chdir=function(e){t||(t=r("df7c")),n=t.resolve(e,n)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"467f":function(t,e,r){"use strict";var n=r("2d83");t.exports=function(t,e,r){var o=r.config.validateStatus;!o||o(r.status)?t(r):e(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},"4a7b":function(t,e,r){"use strict";var n=r("c532");t.exports=function(t,e){e=e||{};var r={},o=["url","method","params","data"],a=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,(function(t){"undefined"!==typeof e[t]&&(r[t]=e[t])})),n.forEach(a,(function(o){n.isObject(e[o])?r[o]=n.deepMerge(t[o],e[o]):"undefined"!==typeof e[o]?r[o]=e[o]:n.isObject(t[o])?r[o]=n.deepMerge(t[o]):"undefined"!==typeof t[o]&&(r[o]=t[o])})),n.forEach(i,(function(n){"undefined"!==typeof e[n]?r[n]=e[n]:"undefined"!==typeof t[n]&&(r[n]=t[n])}));var s=o.concat(a).concat(i),c=Object.keys(e).filter((function(t){return-1===s.indexOf(t)}));return n.forEach(c,(function(n){"undefined"!==typeof e[n]?r[n]=e[n]:"undefined"!==typeof t[n]&&(r[n]=t[n])})),r}},5270:function(t,e,r){"use strict";var n=r("c532"),o=r("c401"),a=r("2e67"),i=r("2444");function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){s(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||i.adapter;return e(t).then((function(e){return s(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return a(e)||(s(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},"7a77":function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},"7aac":function(t,e,r){"use strict";var n=r("c532");t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,a,i){var s=[];s.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"7eb4":function(t,e,r){t.exports=r.p+"img/carousel2.328a8761.jpg"},"83b9":function(t,e,r){"use strict";var n=r("d925"),o=r("e683");t.exports=function(t,e){return t&&!n(e)?o(t,e):e}},"8df4":function(t,e,r){"use strict";var n=r("7a77");function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t,e=new o((function(e){t=e}));return{token:e,cancel:t}},t.exports=o},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=k(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var f="suspendedStart",l="suspendedYield",p="executing",d="completed",h={};function v(){}function m(){}function g(){}var y={};y[a]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==r&&n.call(w,a)&&(y=w);var x=g.prototype=v.prototype=Object.create(y);function C(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(r,o,a,i){var s=u(t[r],t,o);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,i)}))}i(s.arg)}var r;function o(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=o}function k(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return A()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=_(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?d:l,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,g[s]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},C(E.prototype),E.prototype[i]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,o){var a=new E(c(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(x),x[s]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},b4cc:function(t,e,r){"use strict";var n=r("1441"),o=r.n(n);o.a},b50d:function(t,e,r){"use strict";var n=r("c532"),o=r("467f"),a=r("30b5"),i=r("83b9"),s=r("c345"),c=r("3934"),u=r("2d83");t.exports=function(t){return new Promise((function(e,f){var l=t.data,p=t.headers;n.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",v=t.auth.password||"";p.Authorization="Basic "+btoa(h+":"+v)}var m=i(t.baseURL,t.url);if(d.open(t.method.toUpperCase(),a(m,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?d.response:d.responseText,a={data:n,status:d.status,statusText:d.statusText,headers:r,config:t,request:d};o(e,f,a),d=null}},d.onabort=function(){d&&(f(u("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){f(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),f(u(e,t,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var g=r("7aac"),y=(t.withCredentials||c(m))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;y&&(p[t.xsrfHeaderName]=y)}if("setRequestHeader"in d&&n.forEach(p,(function(t,e){"undefined"===typeof l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),t.responseType)try{d.responseType=t.responseType}catch(b){if("json"!==t.responseType)throw b}"function"===typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){d&&(d.abort(),f(t),d=null)})),void 0===l&&(l=null),d.send(l)}))}},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._m(1),r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),r("div",[r("h4",[t._v("Say something")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),r("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.createPost}},[t._v("Submit")])]),r("hr"),t._l(t.posts,(function(e,n){return r("div",{key:n},[r("h3",[t._v(t._s(e.text))]),r("p",[t._v(t._s(e.createTime))]),r("button",{on:{click:function(r){return t.deletePost(e._id)}}},[t._v("Delete")])])}))],2)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-light navbar-transparent"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("凍洋")]),r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"},[r("i",{staticClass:"fas fa-bars",staticStyle:{color:"#fff","font-size":"28px"}})])]),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo02"}},[r("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-lg-0"},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("關於凍洋"),r("span",{staticClass:"sr-only"},[t._v("(current)")])])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("最新消息")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("商品選購")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("常見問題")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("聯絡我們")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"carousel slide ",attrs:{id:"carouselIndicators","data-ride":"carousel"}},[n("ol",{staticClass:"carousel-indicators"},[n("li",{staticClass:"active",attrs:{"data-target":"#carouselIndicators","data-slide-to":"0"}}),n("li",{attrs:{"data-target":"#carouselIndicators","data-slide-to":"1"}}),n("li",{attrs:{"data-target":"#carouselIndicators","data-slide-to":"2"}})]),n("div",{staticClass:"carousel-inner"},[n("div",{staticClass:"carousel-item active"},[n("img",{staticClass:"d-block img-fluid",attrs:{src:r("0acb"),alt:"..."}}),n("div",{staticClass:"carousel-caption"},[n("h1",[n("span",{staticClass:"d-none d-sm-block"},[t._v("極凍，大海的饗宴")])]),n("h3",[n("span",{staticClass:"d-block d-sm-none"},[t._v("極凍，大海的饗宴")])]),n("p",{staticClass:"d-none d-lg-block"},[t._v("凍洋致力於將海中最極致的鮮美原封不動地呈現在您的餐桌上。漁產從離開海面起，便進入極低溫環境運作。從加工，封裝，到運送。完整地將大海的鮮美冰封保存，直到您的餐桌前重現。")]),n("p",{staticClass:"d-none d-sm-block"},[t._v("不僅急凍，更是極凍。")])])]),n("div",{staticClass:"carousel-item"},[n("img",{staticClass:"d-block img-fluid",attrs:{src:r("7eb4"),alt:"..."}}),n("div",{staticClass:"carousel-caption"},[n("h1",[n("span",{staticClass:"d-none d-sm-block"},[t._v("極凍，大海的饗宴")])]),n("h3",[n("span",{staticClass:"d-block d-sm-none"},[t._v("極凍，大海的饗宴")])]),n("p",{staticClass:"d-none d-lg-block"},[t._v("凍洋致力於將海中最極致的鮮美原封不動地呈現在您的餐桌上。漁產從離開海面起，便進入極低溫環境運作。從加工，封裝，到運送。完整地將大海的鮮美冰封保存，直到您的餐桌前重現。")]),n("p",{staticClass:"d-none d-sm-block"},[t._v("不僅急凍，更是極凍。")])])]),n("div",{staticClass:"carousel-item"},[n("img",{staticClass:"d-block img-fluid",attrs:{src:r("18cf"),alt:"..."}}),n("div",{staticClass:"carousel-caption"},[n("h1",[n("span",{staticClass:"d-none d-sm-block"},[t._v("極凍，大海的饗宴")])]),n("h3",[n("span",{staticClass:"d-block d-sm-none"},[t._v("極凍，大海的饗宴")])]),n("p",{staticClass:"d-none d-lg-block"},[t._v("凍洋致力於將海中最極致的鮮美原封不動地呈現在您的餐桌上。漁產從離開海面起，便進入極低溫環境運作。從加工，封裝，到運送。完整地將大海的鮮美冰封保存，直到您的餐桌前重現。")]),n("p",{staticClass:"d-none d-sm-block"},[t._v("不僅急凍，更是極凍。")])])])]),n("a",{staticClass:"carousel-control-prev d-none d-sm-flex",attrs:{href:"#carouselIndicators",role:"button","data-slide":"prev"}},[n("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"sr-only"},[t._v("Previous")])]),n("a",{staticClass:"carousel-control-next d-none d-sm-flex",attrs:{href:"#carouselIndicators",role:"button","data-slide":"next"}},[n("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"sr-only"},[t._v("Next")])])])])])}];r("96cf"),r("d3b7"),r("e6cf");function a(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),t}var f=r("bc3a"),l=r.n(f),p="api/posts/",d=function(){function t(){s(this,t)}return u(t,null,[{key:"getPosts",value:function(){return new Promise((function(t,e){l.a.get(p).then((function(e){t(e.data)})).catch((function(t){e(t)}))}))}},{key:"insertPost",value:function(t){return l.a.post(p,{text:t})}},{key:"deletePost",value:function(t){return l.a.delete("".concat(p).concat(t))}}]),t}(),h=d,v={name:"Posts",props:{msg:String},data:function(){return{posts:[],error:"",text:""}},created:function(){var t=this;try{h.getPosts().then((function(e){t.posts=e}))}catch(e){this.error=e.message}},methods:{createPost:function(){var t=this;return i(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.insertPost(t.text);case 2:return e.next=4,h.getPosts();case 4:t.posts=e.sent;case 5:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return i(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,h.deletePost(t);case 2:return r.next=4,h.getPosts();case 4:e.posts=r.sent;case 5:case"end":return r.stop()}}),r)})))()}}},m=v,g=(r("b4cc"),r("2877")),y=Object(g["a"])(m,n,o,!1,null,"4a1c6969",null);e["default"]=y.exports},bc3a:function(t,e,r){t.exports=r("cee4")},c345:function(t,e,r){"use strict";var n=r("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,a,i={};return t?(n.forEach(t.split("\n"),(function(t){if(a=t.indexOf(":"),e=n.trim(t.substr(0,a)).toLowerCase(),r=n.trim(t.substr(a+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([r]):i[e]?i[e]+", "+r:r}})),i):i}},c401:function(t,e,r){"use strict";var n=r("c532");t.exports=function(t,e,r){return n.forEach(r,(function(r){t=r(t,e)})),t}},c532:function(t,e,r){"use strict";var n=r("1d2b"),o=Object.prototype.toString;function a(t){return"[object Array]"===o.call(t)}function i(t){return"undefined"===typeof t}function s(t){return null!==t&&!i(t)&&null!==t.constructor&&!i(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function c(t){return"[object ArrayBuffer]"===o.call(t)}function u(t){return"undefined"!==typeof FormData&&t instanceof FormData}function f(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function l(t){return"string"===typeof t}function p(t){return"number"===typeof t}function d(t){return null!==t&&"object"===typeof t}function h(t){return"[object Date]"===o.call(t)}function v(t){return"[object File]"===o.call(t)}function m(t){return"[object Blob]"===o.call(t)}function g(t){return"[object Function]"===o.call(t)}function y(t){return d(t)&&g(t.pipe)}function b(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function w(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function C(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function E(){var t={};function e(e,r){"object"===typeof t[r]&&"object"===typeof e?t[r]=E(t[r],e):t[r]=e}for(var r=0,n=arguments.length;r<n;r++)C(arguments[r],e);return t}function k(){var t={};function e(e,r){"object"===typeof t[r]&&"object"===typeof e?t[r]=k(t[r],e):t[r]="object"===typeof e?k({},e):e}for(var r=0,n=arguments.length;r<n;r++)C(arguments[r],e);return t}function _(t,e,r){return C(e,(function(e,o){t[o]=r&&"function"===typeof e?n(e,r):e})),t}t.exports={isArray:a,isArrayBuffer:c,isBuffer:s,isFormData:u,isArrayBufferView:f,isString:l,isNumber:p,isObject:d,isUndefined:i,isDate:h,isFile:v,isBlob:m,isFunction:g,isStream:y,isURLSearchParams:b,isStandardBrowserEnv:x,forEach:C,merge:E,deepMerge:k,extend:_,trim:w}},c8af:function(t,e,r){"use strict";var n=r("c532");t.exports=function(t,e){n.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))}},cee4:function(t,e,r){"use strict";var n=r("c532"),o=r("1d2b"),a=r("0a06"),i=r("4a7b"),s=r("2444");function c(t){var e=new a(t),r=o(a.prototype.request,e);return n.extend(r,a.prototype,e),n.extend(r,e),r}var u=c(s);u.Axios=a,u.create=function(t){return c(i(u.defaults,t))},u.Cancel=r("7a77"),u.CancelToken=r("8df4"),u.isCancel=r("2e67"),u.all=function(t){return Promise.all(t)},u.spread=r("0df6"),t.exports=u,t.exports.default=u},d925:function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},df7c:function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var o=t[n];"."===o?t.splice(n,1):".."===o?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function n(t){"string"!==typeof t&&(t+="");var e,r=0,n=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){r=e+1;break}}else-1===n&&(o=!1,n=e+1);return-1===n?"":t.slice(r,n)}function o(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",n=!1,a=arguments.length-1;a>=-1&&!n;a--){var i=a>=0?arguments[a]:t.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,n="/"===i.charAt(0))}return e=r(o(e.split("/"),(function(t){return!!t})),!n).join("/"),(n?"/":"")+e||"."},e.normalize=function(t){var n=e.isAbsolute(t),i="/"===a(t,-1);return t=r(o(t.split("/"),(function(t){return!!t})),!n).join("/"),t||n||(t="."),t&&i&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var r=t.length-1;r>=0;r--)if(""!==t[r])break;return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var o=n(t.split("/")),a=n(r.split("/")),i=Math.min(o.length,a.length),s=i,c=0;c<i;c++)if(o[c]!==a[c]){s=c;break}var u=[];for(c=s;c<o.length;c++)u.push("..");return u=u.concat(a.slice(s)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),r=47===e,n=-1,o=!0,a=t.length-1;a>=1;--a)if(e=t.charCodeAt(a),47===e){if(!o){n=a;break}}else o=!1;return-1===n?r?"/":".":r&&1===n?"/":t.slice(0,n)},e.basename=function(t,e){var r=n(t);return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,r=0,n=-1,o=!0,a=0,i=t.length-1;i>=0;--i){var s=t.charCodeAt(i);if(47!==s)-1===n&&(o=!1,n=i+1),46===s?-1===e?e=i:1!==a&&(a=1):-1!==e&&(a=-1);else if(!o){r=i+1;break}}return-1===e||-1===n||0===a||1===a&&e===n-1&&e===r+1?"":t.slice(e,n)};var a="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r("4362"))},e683:function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},f6b4:function(t,e,r){"use strict";var n=r("c532");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o}}]);
//# sourceMappingURL=chunk-d5795504.86bad364.js.map