(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{333:function(t,r,e){"use strict";var n=e(10),o=e(81),c=e(41),l=e(59),f=e(21),d=e(11),v=e(343),h=e(154),k=e(344),w=e(345),x=e(93),m=e(346),_=[],C=_.sort,y=d((function(){_.sort(void 0)})),A=d((function(){_.sort(null)})),j=h("sort"),M=!d((function(){if(x)return x<70;if(!(k&&k>3)){if(w)return!0;if(m)return m<603;var code,t,r,e,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(e=0;e<47;e++)_.push({k:t+e,v:r})}for(_.sort((function(a,b){return b.v-a.v})),e=0;e<_.length;e++)t=_[e].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:y||!A||!j||!M},{sort:function(t){void 0!==t&&o(t);var r=c(this);if(M)return void 0===t?C.call(r):C.call(r,t);var e,n,d=[],h=l(r);for(n=0;n<h;n++)n in r&&d.push(r[n]);for(d=v(d,function(t){return function(r,e){return void 0===e?-1:void 0===r?1:void 0!==t?+t(r,e)||0:f(r)>f(e)?1:-1}}(t)),e=d.length,n=0;n<e;)r[n]=d[n++];for(;n<h;)delete r[n++];return r}})},343:function(t,r){var e=Math.floor,n=function(t,r){var l=t.length,f=e(l/2);return l<8?o(t,r):c(n(t.slice(0,f),r),n(t.slice(f),r),r)},o=function(t,r){for(var element,e,n=t.length,i=1;i<n;){for(e=i,element=t[i];e&&r(t[e-1],element)>0;)t[e]=t[--e];e!==i++&&(t[e]=element)}return t},c=function(t,r,e){for(var n=t.length,o=r.length,c=0,l=0,f=[];c<n||l<o;)c<n&&l<o?f.push(e(t[c],r[l])<=0?t[c++]:r[l++]):f.push(c<n?t[c++]:r[l++]);return f};t.exports=n},344:function(t,r,e){var n=e(80).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},345:function(t,r,e){var n=e(80);t.exports=/MSIE|Trident/.test(n)},346:function(t,r,e){var n=e(80).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},530:function(t,r,e){},599:function(t,r,e){"use strict";e(530)},719:function(t,r,e){"use strict";e.r(r);var n=e(8),o=(e(38),e(333),e(46),e(323)),c=e(19),l=Object(o.c)({data:function(){return{content:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var e,n,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=c.c.collection("global").doc("bulletinBoard"),n=null,r.prev=2,r.next=5,e.get();case 5:n=(n=r.sent).data(),r.next=13;break;case 9:throw r.prev=9,r.t0=r.catch(2),alert("Mounted: cannot download list of posts"+r.t0),r.t0;case 13:for(l in o=Object.keys(n).sort().reduce((function(t,r){return t[r]=n[r],t}),{}),o)t.content.push(o[l]);case 15:case"end":return r.stop()}}),r,null,[[2,9]])})))()}}),f=(e(599),e(40)),component=Object(f.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"uk-alert-primary round-border shadow",attrs:{"uk-alert":""}},[e("a",{staticClass:"uk-alert-close",attrs:{"uk-close":""}}),t._v(" "),e("p",[e("nuxt-link",{attrs:{to:"/course?cid=LqYTLW3KkXRSPnci47xe"}},[e("span",{staticStyle:{"text-decoration":"underline"}},[t._v("平台速成教學")])]),t._v("\n      ！\n    ")],1)]),t._v(" "),t._l(t.content,(function(r){return e("div",{key:r,staticClass:"uk-alert-primary round-border shadow",attrs:{"uk-alert":""}},[e("a",{staticClass:"uk-alert-close",attrs:{"uk-close":""}}),t._v(" "),e("div",{domProps:{innerHTML:t._s(r)}})])}))],2)}),[],!1,null,"269b9e6b",null);r.default=component.exports}}]);