(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{333:function(t,o,e){"use strict";var n=e(10),r=e(81),c=e(43),l=e(61),d=e(22),v=e(11),f=e(343),h=e(154),m=e(344),_=e(345),y=e(93),k=e(346),C=[],w=C.sort,x=v((function(){C.sort(void 0)})),O=v((function(){C.sort(null)})),j=h("sort"),A=!v((function(){if(y)return y<70;if(!(m&&m>3)){if(_)return!0;if(k)return k<603;var code,t,o,e,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:o=3;break;case 68:case 71:o=4;break;default:o=2}for(e=0;e<47;e++)C.push({k:t+e,v:o})}for(C.sort((function(a,b){return b.v-a.v})),e=0;e<C.length;e++)t=C[e].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:x||!O||!j||!A},{sort:function(t){void 0!==t&&r(t);var o=c(this);if(A)return void 0===t?w.call(o):w.call(o,t);var e,n,v=[],h=l(o);for(n=0;n<h;n++)n in o&&v.push(o[n]);for(v=f(v,function(t){return function(o,e){return void 0===e?-1:void 0===o?1:void 0!==t?+t(o,e)||0:d(o)>d(e)?1:-1}}(t)),e=v.length,n=0;n<e;)o[n]=v[n++];for(;n<h;)delete o[n++];return o}})},343:function(t,o){var e=Math.floor,n=function(t,o){var l=t.length,d=e(l/2);return l<8?r(t,o):c(n(t.slice(0,d),o),n(t.slice(d),o),o)},r=function(t,o){for(var element,e,n=t.length,i=1;i<n;){for(e=i,element=t[i];e&&o(t[e-1],element)>0;)t[e]=t[--e];e!==i++&&(t[e]=element)}return t},c=function(t,o,e){for(var n=t.length,r=o.length,c=0,l=0,d=[];c<n||l<r;)c<n&&l<r?d.push(e(t[c],o[l])<=0?t[c++]:o[l++]):d.push(c<n?t[c++]:o[l++]);return d};t.exports=n},344:function(t,o,e){var n=e(80).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},345:function(t,o,e){var n=e(80);t.exports=/MSIE|Trident/.test(n)},346:function(t,o,e){var n=e(80).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},622:function(t,o,e){},730:function(t,o,e){"use strict";e(622)},874:function(t,o,e){"use strict";e.r(o);e(29),e(44),e(55),e(39),e(56);var n=e(21),r=(e(333),e(42),e(49),e(18),e(67),e(47),e(117),e(60),e(123),e(323)),c=e(19);function l(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,e)}return o}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(o){Object(n.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}var v=Object(r.c)({data:function(){return{coupons:null,coupon:null,days:10,ncoupons:0,role:"vip_m",uid:null,activity:null,uids:null}},mounted:function(){var t=c.c.collection("global").doc("coupon"),o=this;t.get().then((function(t){if(t.exists){console.log("Document data:",t.data());var e=t.data().coupons,r=(Object.keys(e).sort(),t.data().coupons),c=Object.keys(r).sort().reduce((function(t,o){return d(d({},t),{},Object(n.a)({},o,r[o]))}),{});o.coupons=c}else console.log("No such document!")})).catch((function(t){console.log("Error getting document:",t)}))},methods:{batchAddCoupon:function(){for(var t={},i=0;i<this.ncoupons;i+=1){var o=Math.random().toString(36).slice(2,7);t[this.coupon+"-"+i+"-"+o]={days:parseInt(this.days,10),ncoupons:1,role:this.role,uid:this.uid}}c.c.collection("global").doc("coupon").set({coupons:t},{merge:!0}).then((function(){console.log("Coupon successfully created!"),alert("Coupon successfully created!")})).catch((function(t){console.error("Error writing document: ",t)}))},addCoupon:function(){var t=c.c.collection("global").doc("coupon");if(this.coupon){var o={};o[this.coupon]={days:parseInt(this.days,10),ncoupons:parseInt(this.ncoupons,10),role:this.role,uid:this.uid},t.set({coupons:o},{merge:!0}).then((function(){console.log("Coupon successfully created!"),alert("Coupon successfully created!")})).catch((function(t){console.error("Error writing document: ",t)}))}else alert("coupon field is Null!")},addActivityCoupons:function(){if(this.activity&&this.uids){for(var t=c.c.collection("global").doc("coupon"),o=this.uids.split(" "),e={},i=0;i<o.length;i++){var n=this.activity+"_"+o[i];e[n]={days:parseInt(this.days,10),ncoupons:parseInt(this.ncoupons,10),role:this.role,uid:n}}t.set({coupons:e},{merge:!0}).then((function(){console.log("Activty coupons successfully created!"),alert("Activty coupons successfully created!")})).catch((function(t){console.error("Error writing document: ",t)}))}else alert("activity or uids field is Null!")},removeCoupon:function(t){var o=c.c.collection("global").doc("coupon"),e=this.coupons;delete e[t],o.set({coupons:e}).then((function(){console.log("Coupon successfully deleted!"),alert("Coupon successfully deleted!")})).catch((function(t){console.error("Error deleting coupon: ",t)}))},download_table_as_csv:function(t){for(var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",e=document.querySelectorAll("table#"+t+" tr"),n=[],i=0;i<e.length;i++){for(var r=[],c=e[i].querySelectorAll("td, th"),l=0;l<c.length;l++){var data=c[l].innerText.replace(/(\r\n|\n|\r)/gm,"").replace(/(\s\s)/gm," ");data=data.replace(/"/g,'""'),r.push('"'+data+'"')}n.push(r.join(o))}var d=n.join("\n"),v="export_"+t+"_"+(new Date).toLocaleDateString()+".csv",link=document.createElement("a");link.style.display="none",link.setAttribute("target","_blank"),link.setAttribute("href","data:text/csv;charset=utf-8,"+encodeURIComponent(d)),link.setAttribute("download",v),document.body.appendChild(link),link.click(),document.body.removeChild(link)}}}),f=v,h=(e(730),e(41)),component=Object(h.a)(f,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"uk-container uk-container-small uk-padding"},[e("h2",[t._v("Coupon資料庫清單")]),t._v(" "),e("table",{staticStyle:{width:"80%"},attrs:{id:"coupon"}},[t._m(0),t._v(" "),t._l(t.coupons,(function(o,n,r){return e("tr",{key:o.id},[e("td",[t._v(t._s(r))]),t._v(" "),e("td",[t._v(t._s(n))]),t._v(" "),e("td",[t._v(t._s(o.days))]),t._v(" "),e("td",[t._v(t._s(o.ncoupons))]),t._v(" "),e("td",[t._v(t._s(o.role))]),t._v(" "),e("td",[e("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button"},on:{click:function(o){return t.removeCoupon(n)}}},[t._v("\n          刪除\n        ")])])])}))],2),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",on:{click:function(o){return t.download_table_as_csv("coupon")}}},[t._v("\n    Download CSV\n  ")]),t._v(" "),e("h2",[t._v("批次新增 coupon")]),t._v(" "),e("div",{staticClass:"uk-width-1-4"},[e("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("coupon名稱(必填)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon,expression:"coupon"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"finlab_gift"},domProps:{value:t.coupon},on:{input:function(o){o.target.composing||(t.coupon=o.target.value)}}})]),t._v(" "),e("div",{staticClass:"uk-width-1-4"},[e("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("權限天數")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.days,expression:"days"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"10"},domProps:{value:t.days},on:{input:function(o){o.target.composing||(t.days=o.target.value)}}})]),t._v(" "),e("div",{staticClass:"uk-width-1-4"},[e("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("coupon數量")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.ncoupons,expression:"ncoupons"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"0"},domProps:{value:t.ncoupons},on:{input:function(o){o.target.composing||(t.ncoupons=o.target.value)}}})]),t._v(" "),e("div",{staticClass:"uk-width-1-4"},[e("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("權限")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.role,expression:"role"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"vip_m"},domProps:{value:t.role},on:{input:function(o){o.target.composing||(t.role=o.target.value)}}})]),t._v(" "),e("div",{staticClass:"uk-width-1-4"},[e("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("限定uid(非必填)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.uid,expression:"uid"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"m7MjPkpT5bYTeqYzMgtwiJcogOC2"},domProps:{value:t.uid},on:{input:function(o){o.target.composing||(t.uid=o.target.value)}}})]),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button"},on:{click:t.batchAddCoupon}},[t._v("\n    儲存\n  ")])])}),[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("tr",[e("th",[t._v("index")]),t._v(" "),e("th",[t._v("name")]),t._v(" "),e("th",[t._v("days")]),t._v(" "),e("th",[t._v("ncoupons")]),t._v(" "),e("th",[t._v("role")]),t._v(" "),e("th",[t._v("刪除")])])}],!1,null,null,null);o.default=component.exports}}]);