(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{333:function(t,e,r){"use strict";var n=r(10),o=r(81),c=r(41),l=r(59),d=r(21),f=r(11),h=r(343),v=r(154),_=r(344),w=r(345),k=r(92),m=r(346),y=[],x=y.sort,C=f((function(){y.sort(void 0)})),P=f((function(){y.sort(null)})),S=v("sort"),z=!f((function(){if(k)return k<70;if(!(_&&_>3)){if(w)return!0;if(m)return m<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)y.push({k:t+r,v:e})}for(y.sort((function(a,b){return b.v-a.v})),r=0;r<y.length;r++)t=y[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:C||!P||!S||!z},{sort:function(t){void 0!==t&&o(t);var e=c(this);if(z)return void 0===t?x.call(e):x.call(e,t);var r,n,f=[],v=l(e);for(n=0;n<v;n++)n in e&&f.push(e[n]);for(f=h(f,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:d(e)>d(r)?1:-1}}(t)),r=f.length,n=0;n<r;)e[n]=f[n++];for(;n<v;)delete e[n++];return e}})},343:function(t,e){var r=Math.floor,n=function(t,e){var l=t.length,d=r(l/2);return l<8?o(t,e):c(n(t.slice(0,d),e),n(t.slice(d),e),e)},o=function(t,e){for(var element,r,n=t.length,i=1;i<n;){for(r=i,element=t[i];r&&e(t[r-1],element)>0;)t[r]=t[--r];r!==i++&&(t[r]=element)}return t},c=function(t,e,r){for(var n=t.length,o=e.length,c=0,l=0,d=[];c<n||l<o;)c<n&&l<o?d.push(r(t[c],e[l])<=0?t[c++]:e[l++]):d.push(c<n?t[c++]:e[l++]);return d};t.exports=n},344:function(t,e,r){var n=r(80).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},345:function(t,e,r){var n=r(80);t.exports=/MSIE|Trident/.test(n)},346:function(t,e,r){var n=r(80).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},708:function(t,e,r){},853:function(t,e,r){"use strict";r(708)},906:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(121),r(18),r(66),r(333),r(38),r(323)),c=r(19),l=Object(o.c)({data:function(){return{finlabUserID:"TJN4FDuqrwU8DML7DAjUYFIMutp2",strategies:null,customerPhone:"",updatedPhone:!1,course:[{title:"從頭開始新手教程",link:"https://ai.finlab.tw/course?cid=LqYTLW3KkXRSPnci47xe&pid=UHnZjS2vQDzKzOV9CQT1",icon:"star"},{title:"策略撰寫基礎知識",link:"https://ai.finlab.tw/course?cid=hFOcgSlvBHEHJa5m91hP&pid=UHnZjS2vQDzKzOV9CQT1",icon:"puzzle-piece"},{title:"券商力道板塊圖",link:"https://ai.finlab.tw/course?cid=WfzZUtynQzMnDhooPXvl&pid=UHnZjS2vQDzKzOV9CQT1",icon:"shapes"},{title:"券商力道策略範例",link:"https://ai.finlab.tw/course?cid=PA0FghtPqbGObR007NQ7&pid=UHnZjS2vQDzKzOV9CQT1",icon:"chart-line"}]}},mounted:function(){this.downloadStrategies()},methods:{downloadStrategies:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.c.collection("users").doc(t.finlabUserID).get();case 3:r=e.sent,t.strategies=r.data().strategies,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),alert("cannot fetch finlab strategy"+e.t0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},uploadCustomerPhoneNumber:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.c.collection("users").doc(t.$store.state.user.uid).set({phoneNumber:t.customerPhone},{merge:!0});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0);case 8:t.updatedPhone=!0;case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()},intToFloat:function(t,e){return Math.round(10*t)%10==0&&0!=t?t+Array(e+1).join("0"):0===t?"0.0":t},format_float:function(t){return this.intToFloat(Math.round(10*t)/10,1)},addSign:function(t){return t>0?"+"+t.toString():t.toString()},addSignColor:function(t){return 0===t?"color:gray":t>0?"color:rgb(255, 82, 121)":"color:#00c9b7"},strategyFilter:function(t){var e=[];for(var r in this.strategies)if(10!==this.strategies[r][t]){var n=this.strategies[r];n.sname=r,e.push(n)}return e.sort((function(a,b){return b.ndays_return[60]-a.ndays_return[60]})),e},outOfPermission:function(t,e){var r="free"===this.role?1:2;return this.strategies[t][e]>r}}}),d=(r(853),r(40)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"\n        uk-card uk-background-default\n        shadow\n        uk-padding uk-margin-large-bottom\n      "},[r("h4",{staticClass:"uk-text-primary"},[t._v("VIP 專屬課程")]),t._v("\n      券商分點的奧秘，學 Python 從 0 到 100% 只需要三小時！"),r("br"),t._v("\n      課程重點：\n      "),r("div",{staticClass:"uk-flex uk-flex-wrap uk-flex-wrap-around"},t._l(t.course,(function(e){return r("a",{key:"course_"+e.title,attrs:{href:e.link,target:"_blank"}},[r("div",{staticClass:"\n              uk-card uk-card-hover\n              shadow\n              uk-padding-small uk-text-center\n              round-border\n            ",staticStyle:{width:"100px","margin-top":"12px","margin-right":"10px","margin-left":"0","margin-bottom":"0"}},[r("div",{staticStyle:{"margin-bottom":"12px"}},[r("font-awesome-icon",{staticClass:"icon",attrs:{icon:e.icon,size:"2x"}})],1),t._v("\n            "+t._s(e.title)+"\n          ")])])})),0)]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"uk-card uk-background-default shadow uk-padding"},[r("h4",{staticClass:"uk-text-primary"},[t._v("VIP 專屬程式碼")]),t._v(" "),r("p",[t._v("FinLab 的多年實戰經驗，化作程式，都將歸你所有，一次學會！")]),t._v(" "),r("div",{staticClass:"uk-overflow-auto"},[r("table",{staticClass:"uk-table uk-table-small",staticStyle:{"min-width":"300px"}},[t._m(1),t._v(" "),r("tbody",t._l(t.strategyFilter("public_code"),(function(s){return r("tr",{key:"strategy-"+s.sname,style:t.outOfPermission(s.sname,"public_code")?"background:#eee;cursor: not-allowed":""},[r("td",{staticStyle:{"white-space":"nowrap"}},[r("nuxt-link",{attrs:{to:"/notebook?sid="+s.sname+"&uid="+t.finlabUserID}},[r("a",{style:t.outOfPermission(s.sname,"public_code")?"color:gray;cursor:not-allowed":""},[t._v("\n                    "+t._s(s.sname)+t._s(1===s.public_code||0===s.public_code?"":"(VIP)")+"\n                  ")])])],1),t._v(" "),t._l([20,60],(function(e){return r("td",{key:s.sname+"-"+e+"-return",staticClass:"uk-text-right",style:t.addSignColor(s.ndays_return[e])},[t._v("\n                "+t._s(t.addSign(t.format_float(10*s.ndays_return[e])))+" %\n              ")])}))],2)})),0)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"\n        uk-card uk-background-default\n        shadow\n        uk-padding uk-margin-large-bottom\n      "},[r("h4",{staticClass:"uk-text-primary"},[t._v("VIP 專屬文章")]),t._v(" "),r("p",[t._v("\n        每月於"),r("a",{attrs:{href:"https://www.finlab.tw/category/vip%e9%99%90%e5%ae%9a/"}},[t._v("部落格")]),t._v("發佈研究文章，結合學術與實戰，讓你可以從中掘金！VIP 限定文章:\n      ")]),t._v(" "),r("ul",[r("li",{staticClass:"has-line-data",attrs:{"data-line-start":"22","data-line-end":"25"}},[r("a",{attrs:{href:"https://www.finlab.tw/index_filter/",target:"_blank"}},[t._v("4種均線指標 | 讓你在大盤崩崩前高歌離席!")])]),t._v(" "),r("li",{staticClass:"has-line-data",attrs:{"data-line-start":"22","data-line-end":"25"}},[r("a",{attrs:{href:"https://www.finlab.tw/finlab-tw-stock-peg-strategy/",target:"_blank"}},[t._v("進化後的本益比｜本益成長比選股策略")])]),t._v(" "),r("li",{staticClass:"has-line-data",attrs:{"data-line-start":"22","data-line-end":"25"}},[r("a",{attrs:{href:"https://www.finlab.tw/peg/",target:"_blank"}},[t._v("七七四十九種本益成長比 | 製作年報酬率 30% 的選股策略！")])]),t._v(" "),r("li",{staticClass:"has-line-data",attrs:{"data-line-start":"22","data-line-end":"25"}},[r("a",{attrs:{href:"https://www.finlab.tw/research_expense_ratio_strategy/",target:"_blank"}},[t._v("研發費用率選股策略")])]),t._v(" "),r("li",{staticClass:"has-line-data",attrs:{"data-line-start":"22","data-line-end":"25"}},[r("a",{attrs:{href:"https://www.finlab.tw/treasury-stock-signal/",target:"_blank"}},[t._v("庫藏股實施家數｜崩盤後的長線抄底訊號｜左側交易")])])]),t._v("\n      更多文章請參考\n      "),r("a",{attrs:{href:"https://www.finlab.tw/category/vip限定/"}},[t._v("VIP專頁")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th",[t._v("策略名稱")]),t._v(" "),r("th",{staticClass:"uk-text-right"},[t._v("月報酬")]),t._v(" "),r("th",{staticClass:"uk-text-right"},[t._v("季報酬")])])}],!1,null,"327667ee",null);e.default=component.exports}}]);