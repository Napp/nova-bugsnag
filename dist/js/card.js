!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(11)},function(t,e,n){Nova.booting(function(t,e){t.component("nova-bugsnag",n(2))})},function(t,e,n){var r=n(8)(n(9),n(10),!1,function(t){n(3)},"data-v-63956894",null);t.exports=r.exports},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(6)("234641cc",r,!0,{})},function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".error-item .error-details[data-v-63956894]{display:none;width:24rem;top:0;left:0;z-index:1}.error-item:hover .error-details[data-v-63956894]{display:block}.error-item:nth-last-child(-n+2) .error-details[data-v-63956894]{left:auto;right:0}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),s=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(s).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(7),s={},a=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,c=0,l=!1,u=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t){for(var e=0;e<t.length;e++){var n=t[e],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(g(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:a}}}}function h(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function g(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(l)return u;r.parentNode.removeChild(r)}if(p){var o=c++;r=i||(i=h()),e=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=h(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);d.ssrId&&t.setAttribute(f,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){l=n,d=r||{};var a=o(t,e);return v(a),function(e){for(var n=[],r=0;r<a.length;r++){var i=a[r];(c=s[i.id]).refs--,n.push(c)}e?v(a=o(t,e)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete s[c.id]}}}};var m,_=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function b(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var s=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var s=e[o],a=s[0],i={id:t+":"+o,css:s[1],media:s[2],sourceMap:s[3]};r[a]?r[a].parts.push(i):n.push(r[a]={id:a,parts:[i]})}return n}},function(t,e){t.exports=function(t,e,n,r,o,s){var a,i=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,i=t.default);var l,u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):r&&(l=r),l){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(t,e){return l.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:i,options:u}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["card"],data:function(){return{loading:!1,data:[]}},mounted:function(){this.fetchData(),console.log(this.card)},methods:{fetchData:function(){var t=this;this.loading=!0,Nova.request().get("/nova-vendor/nova-bugsnag/critical-errors").then(function(e){var n=e.data;t.loading=!1,t.data=n,console.log(n)}).catch(function(e){t.loading=!1,console.log("ERROR")})},formatDate:function(t){return moment(t).fromNow()}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("card",{staticClass:"px-6 py-4 relative"},[n("h1",{staticClass:"mb-4 text-base text-80 font-bold"},[t._v("Critical Errors")]),t._v(" "),t.loading?n("div",{staticClass:"rounded-lg flex items-center justify-center absolute pin z-50 bg-white"},[n("loader",{staticClass:"text-60"})],1):t._e(),t._v(" "),t.loading||t.data.length?t._e():n("div",[n("p",[t._v("I have no data to display")])]),t._v(" "),!t.loading&&t.data.length?n("div",{staticClass:"errors flex"},t._l(t.data,function(e){return n("div",{staticClass:"error-item w-1/4 pr-2 relative"},[n("h2",{staticClass:"mb-1"},[t._v(t._s(e.events)+" "),n("span",{staticClass:"font-normal text-base"},[t._v("events")])]),t._v(" "),n("div",{staticClass:"class-name mb-1 truncate font-mono text-xs"},[t._v(t._s(e.error_class))]),t._v(" "),n("p",{staticClass:"text-sm leading-tight"},[t._v(t._s(e.users)+" Affected users")]),t._v(" "),n("p",{staticClass:"text-sm leading-tight text-80"},[t._v("Last seen "+t._s(t.formatDate(e.last_seen)))]),t._v(" "),n("div",{staticClass:"error-details absolute bg-white shadow-lg"},[n("h5",{staticClass:"px-3 py-2 bg-40 text-danger font-mono font-normal break-words"},[t._v(t._s(e.error_class))]),t._v(" "),n("div",{staticClass:"px-3 py-2"},[n("p",{staticClass:"font-bold text-sm pb-2 break-words"},[t._v(t._s(e.context))]),t._v(" "),n("p",{staticClass:"font-mono text-sm break-words"},[t._v(t._s(e.message))])]),t._v(" "),e.browser_url?n("div",{staticClass:"px-3 py-2 text-center"},[n("a",{staticClass:"btn btn-default btn-primary",attrs:{href:e.browser_url,target:"_blank"}},[t._v("Go to event")])]):t._e()])])})):t._e()])},staticRenderFns:[]}},function(t,e){}]);