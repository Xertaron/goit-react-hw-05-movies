/*! For license information please see 135.d9a5aed9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(439),o=r(791),i=r(689),a=r(87),c={general:"MovieDetails_general__QhCXM",movieDetails:"MovieDetails_movieDetails__EbgQo",movie:"MovieDetails_movie__9X7I7",movieDescription:"MovieDetails_movieDescription__Gu3H0",overView:"MovieDetails_overView__6DlnB",movieAdd:"MovieDetails_movieAdd__GdQgU"},u=r(952),s=r(184),l=(0,o.lazy)((function(){return r.e(328).then(r.bind(r,76))})),f=(0,o.lazy)((function(){return r.e(946).then(r.bind(r,168))}));var h=function(){var t,e,r,h,v=(0,i.UO)().idMovie,p=(0,i.TH)(),d=(0,o.useState)(null),m=(0,n.Z)(d,2),y=m[0],g=m[1];if((0,o.useEffect)((function(){(0,u.Pg)(v).then((function(t){g(t)}))}),[v]),y){var w=y.genres.map((function(t){return t.name})).join(", ");return(0,s.jsxs)("div",{className:c.general,children:[(0,s.jsxs)("div",{className:c.movieDetails,children:[(0,s.jsxs)("div",{className:c.movie,children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+y.poster_path,alt:y.title}),(0,s.jsxs)("div",{className:c.movieDescription,children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"Title: "}),y.title]}),(0,s.jsx)(a.rU,{to:null!==(t=null===(e=p.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/movies",children:(0,s.jsx)("button",{children:"Back"})})]}),(0,s.jsxs)("p",{className:c.overView,children:[(0,s.jsx)("strong",{children:"Overview: "}),y.overview]}),w&&(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"Genres: "}),w]})]})]}),(0,s.jsxs)("div",{className:c.movieAdd,children:[(0,s.jsx)(a.rU,{to:"cast",className:c.movieCast,state:{from:null===(r=p.state)||void 0===r?void 0:r.from},children:(0,s.jsx)("button",{children:"Cast"})}),(0,s.jsx)(a.rU,{to:"reviews",className:c.movieReviews,state:{from:null===(h=p.state)||void 0===h?void 0:h.from},children:(0,s.jsx)("button",{children:"Reviews"})})]})]}),(0,s.jsxs)(i.Z5,{children:[(0,s.jsx)(i.AW,{path:"cast",element:(0,s.jsx)(l,{})}),(0,s.jsx)(i.AW,{path:"reviews",element:(0,s.jsx)(f,{})})]})]})}}},952:function(t,e,r){r.d(e,{JN:function(){return a},Ku:function(){return s},Pg:function(){return u},Ph:function(){return c},W_:function(){return l}});var n=r(861),o=r(243);function i(){i=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new D(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var v="suspendedStart",p="executing",d="completed",m={};function y(){}function g(){}function w(){}var x={};l(x,c,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(G([])));_&&_!==r&&n.call(_,c)&&(x=_);var j=w.prototype=y.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=v;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=N(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function N(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=w,o(j,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=l(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},L(E.prototype),l(E.prototype,u,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),l(j,s,"Generator"),l(j,c,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Z),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Z(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;Z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.params={api_key:"41090f57f5f9fc08e41140c037b23910"};var a=function(){var t=(0,n.Z)(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/trending/movie/day",{params:{page:1}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(i().mark((function t(e){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.d9a5aed9.chunk.js.map