(window.webpackJsonp=window.webpackJsonp||[]).push([[31,58],{333:function(t,e,r){"use strict";var n=r(10),c=r(81),o=r(41),v=r(59),_=r(21),l=r(11),d=r(343),f=r(154),h=r(344),k=r(345),m=r(93),y=r(346),x=[],w=x.sort,$=l((function(){x.sort(void 0)})),S=l((function(){x.sort(null)})),C=f("sort"),E=!l((function(){if(m)return m<70;if(!(h&&h>3)){if(k)return!0;if(y)return y<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)x.push({k:t+r,v:e})}for(x.sort((function(a,b){return b.v-a.v})),r=0;r<x.length;r++)t=x[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:$||!S||!C||!E},{sort:function(t){void 0!==t&&c(t);var e=o(this);if(E)return void 0===t?w.call(e):w.call(e,t);var r,n,l=[],f=v(e);for(n=0;n<f;n++)n in e&&l.push(e[n]);for(l=d(l,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:_(e)>_(r)?1:-1}}(t)),r=l.length,n=0;n<r;)e[n]=l[n++];for(;n<f;)delete e[n++];return e}})},343:function(t,e){var r=Math.floor,n=function(t,e){var v=t.length,_=r(v/2);return v<8?c(t,e):o(n(t.slice(0,_),e),n(t.slice(_),e),e)},c=function(t,e){for(var element,r,n=t.length,i=1;i<n;){for(r=i,element=t[i];r&&e(t[r-1],element)>0;)t[r]=t[--r];r!==i++&&(t[r]=element)}return t},o=function(t,e,r){for(var n=t.length,c=e.length,o=0,v=0,_=[];o<n||v<c;)o<n&&v<c?_.push(r(t[o],e[v])<=0?t[o++]:e[v++]):_.push(o<n?t[o++]:e[v++]);return _};t.exports=n},344:function(t,e,r){var n=r(80).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},345:function(t,e,r){var n=r(80);t.exports=/MSIE|Trident/.test(n)},346:function(t,e,r){var n=r(80).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},464:function(t,e,r){},475:function(t,e,r){"use strict";r.r(e);var n=r(8),c=(r(38),r(19)),o={data:function(){return{referrals:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$store.state.user.uid,n=c.c.collection("referrals").doc(r),e.next=4,n.get();case 4:(o=e.sent).exists&&(t.referrals=o.data()),console.log(t.referrals);case 7:case"end":return e.stop()}}),e)})))()},computed:{totalCount:function(){return this.referrals?this.referrals.cashBack.length:0},totalSum:function(){if(!this.referrals)return 0;var t=0;for(var i in this.referrals.cashBack){t+=this.referrals.cashBack[i].cashBack}return t}}},v=r(40),component=Object(v.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-width-2-2@m"},[r("div",{staticClass:"uk-container uk-container-small uk-text-center"},[t._m(0),t._v(" "),r("div",[t._v("分享折扣碼："+t._s(t.$store.state.user.uid))]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("h4",{staticClass:"uk-card-title"},[t._v("推薦獎勵說明")]),t._v(" "),t._m(1),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("h4",{staticClass:"uk-card-title"},[t._v("累計推薦獎勵")]),t._v("\n    累計推薦人數 "),r("span",{staticClass:"title"},[t._v(t._s(t.totalCount))]),t._v(" 人，累計推薦獎勵\n    "),r("span",{staticClass:"title"},[t._v(t._s(t.totalSum))]),t._v(" 元"),r("br"),t._v(" "),r("button",{staticClass:"uk-button uk-button-primary uk-margin-large"},[t._v("\n      申請領取獎勵\n    ")]),t._v(" "),r("table",{staticClass:"uk-table uk-table-divider"},[t._m(2),t._v(" "),this.referrals?r("tbody",{staticStyle:{"text-align":"left"}},t._l(this.referrals.cashBack,(function(p){return r("tr",{key:p.MerchantTradeNo+"-"+p.TotalSuccessTimes},[r("td",[t._v(t._s(p.MerchantTradeNo+"-"+p.TotalSuccessTimes))]),t._v(" "),r("td",[t._v(t._s(p.PaymentDate)+t._s(p.ProcessDate))]),t._v(" "),r("td",[t._v(t._s(p.CustomField2))]),t._v(" "),r("td",[t._v(t._s(p.cashBack))]),t._v(" "),r("td",[t._v(t._s(p.cashBackRatio))])])})),0):t._e()])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("邀請朋友使用 VIP 方案")]),t._v(" "),r("p",{staticStyle:{"font-size":"1.5rem"}},[t._v("\n        他獲得 15％ 折扣，你享有 15%\n        "),r("i",{staticClass:"uk-text-primary"},[t._v("現金獎勵")]),t._v("！\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v("\n        大家在此平台消費，輸入您的折扣碼，享有所有商品 15 ％ 折扣！"),r("br"),t._v("與此同時，FinLab\n        會回饋您此項收入的 15％，用以感謝您的推廣！"),r("br"),t._v("\n        KOL 額外獎勵方案請洽：finlab.company@finlab.tw\n      ")]),t._v(" "),r("table",{staticClass:"uk-table uk-background-muted uk-text-left"},[r("thead",[r("tr",[r("th",[t._v("商品名稱")]),t._v(" "),r("th",[t._v("原始價格")]),t._v(" "),r("th",[t._v("消費者折扣價格")]),t._v(" "),r("th",[t._v("推廣者推薦獎勵")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("FinLab VIP 月繳方案")]),t._v(" "),r("td",[t._v("NT$ 999")]),t._v(" "),r("td",[t._v("NT$ 999 * (1-15%) = 850")]),t._v(" "),r("td",[t._v("每月回饋 NT$ 850 * 15% = NT$127")])]),t._v(" "),r("tr",[r("td",[t._v("FinLab VIP 年繳方案")]),t._v(" "),r("td",[t._v("NT$ 7999")]),t._v(" "),r("td",[t._v("NT$ 7999 * (1-15%) = 6780")]),t._v(" "),r("td",[t._v("每年回饋 NT$ 6780 * 15% = NT$1012")])])])]),t._v(" "),r("p",{staticStyle:{color:"#aaa"}},[t._v("\n        由於法規條件的變化、欺詐風險或我們認為相關的其他因素，FinLab\n        保留隨時更改推薦計劃條款的權利。\n      ")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("h3",[t._v("獎勵領取辦法")]),t._v(" "),r("p",[t._v("\n        獎勵將累計於平台中，顯示於下方，可每月領取 "),r("br"),t._v("\n        假如使用者想要領取獎勵，可以於每月 20 號以前，點選「領取獎勵」，"),r("br"),t._v("\n        我們將當月最後一天以前進行轉帳， 元，建議多累計一點再一次轉喔！"),r("br"),t._v("\n        假如當月超過 20 號才點選「領取獎勵」，則會順延至下個月轉帳。\n        獎金假如超過 2 萬以上，則依法代扣 10% 稅金，轉帳成本費用為 50 元。\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("交易編號")]),t._v(" "),r("th",[t._v("交易日期")]),t._v(" "),r("th",[t._v("商品簡稱")]),t._v(" "),r("th",[t._v("現金獎勵")]),t._v(" "),r("th",[t._v("獎勵比例")])])])}],!1,null,null,null);e.default=component.exports},505:function(t,e,r){"use strict";r.r(e);var n=r(8),c=(r(333),r(60),r(38),r(162)),o=r(19),v=r(475),_={components:{FirebaseUi:c.default,CompareMerchant:d,Referral:v.default},data:function(){return{strategies:null,finlabUserID:"TJN4FDuqrwU8DML7DAjUYFIMutp2",role:this.$store.state.role}},props:{btnInfo:{default:"VIP 詳細介紹"},url:{default:"/pricing"}},methods:{downloadStrategies:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.c.collection("users").doc(t.finlabUserID).get();case 3:r=e.sent,t.strategies=r.data().strategies,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),alert("cannot fetch finlab strategy"+e.t0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},strategyFilter:function(t){var e=[];for(var r in this.strategies)if(10!==this.strategies[r][t]){var n=this.strategies[r];n.sname=r,e.push(n)}return e.sort((function(a,b){return a.public_code-b.public_code})),e},outOfPermission:function(t,e){var r="free"===this.role?1:2;return this.strategies[t][e]>r},copyFinlabStrategy:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=o.c.collection("users").doc(e.finlabUserID).collection("strategies").doc(t).collection("codes").doc("code"),null,r.prev=2,r.next=5,n.get();case 5:r.sent.data(),r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(2),alert("cannot download post ref "+r.t0),r.abrupt("return");case 13:c=t,e.$router.push("/strategyview/?uid=".concat(e.$store.state.user.uid,"&sid=").concat(c));case 15:case"end":return r.stop()}}),r,null,[[2,9]])})))()},linkFinlabStrategy:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t,e.$router.push("/strategyview/?uid=".concat(e.finlabUserID,"&sid=").concat(n));case 2:case"end":return r.stop()}}),r)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.downloadStrategies();case 1:case"end":return e.stop()}}),e)})))()}},l=(r(522),r(40)),component=Object(l.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("table",{staticClass:"uk-table uk-table-divider uk-margin-top"},[r("tbody",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._l(t.strategyFilter("public_code"),(function(s){return r("tr",{key:"strategy-"+s.sname,style:t.outOfPermission(s.sname,"public_code")?"color:gray;":""},[r("td",[r("span",{staticStyle:{color:"#d43766"}},[t._v("+"+t._s(Math.round(1e3*s.annual_return)/10)+" ％")]),r("br"),t._v(" "),r("a",{style:"color:gray",on:{click:function(e){return t.linkFinlabStrategy(s.sname)}}},[t._v("\n            "+t._s(s.sname))])]),t._v(" "),r("td",{staticStyle:{"white-space":"nowrap"}},[s.public_code<2?r("div",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})]):t._e()]),t._v(" "),r("td",{staticStyle:{"white-space":"nowrap"}},[s.public_code>=0?r("div",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})]):t._e()])])}))],2)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[r("td",[t._v("歷史資料庫回測")]),t._v(" "),r("td",[t._v("免費")]),t._v(" "),r("td",[t._v("VIP")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"database"}}),t._v("每日用量")]),t._v(" "),r("td",[t._v("500 MB")]),t._v(" "),r("td",[t._v("5000 MB")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"refresh"}}),t._v("最新資料")]),t._v(" "),r("td",[t._v("無")]),t._v(" "),r("td",[t._v("每日")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"file-text"}}),t._v("每日回測")]),t._v(" "),r("td",[t._v("5 次")]),t._v(" "),r("td",[t._v("無限")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[r("td",[t._v("Python 每月教學")]),t._v(" "),r("td",[t._v("免費")]),t._v(" "),r("td",[t._v("VIP")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"tv"}}),t._v("每月不定期直播")]),t._v(" "),r("td",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})]),t._v(" "),r("td",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"tv"}}),t._v("每月教學")]),t._v(" "),r("div"),t._v(" "),r("td",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[r("td",[t._v("Python 影音課程")]),t._v(" "),r("td",[t._v("免費")]),t._v(" "),r("td",[t._v("VIP")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"tv"}}),t._v("製作策略")]),t._v(" "),r("td",[r("span",{attrs:{"uk-icon":"cross"}})]),t._v(" "),r("td",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"tv"}}),t._v("券商分點")]),t._v(" "),r("td",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"cross"}})]),t._v(" "),r("td",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[r("td",{staticStyle:{"font-weight":"800"}},[t._v("\n          程式範例"),r("br"),r("span",{staticStyle:{color:"#d43766"}},[t._v("歷史年化報酬")])]),t._v(" "),r("td",[t._v("免費")]),t._v(" "),r("td",[t._v("VIP")])])}],!1,null,"8fdb408e",null),d=e.default=component.exports},522:function(t,e,r){"use strict";r(464)}}]);