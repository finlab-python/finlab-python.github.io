(window.webpackJsonp=window.webpackJsonp||[]).push([[10,31,61],{340:function(t,r,e){"use strict";var n=e(10),c=e(81),v=e(41),_=e(59),o=e(20),l=e(11),d=e(350),f=e(154),k=e(351),h=e(352),m=e(92),y=e(353),x=[],C=x.sort,S=l((function(){x.sort(void 0)})),w=l((function(){x.sort(null)})),$=f("sort"),E=!l((function(){if(m)return m<70;if(!(k&&k>3)){if(h)return!0;if(y)return y<603;var code,t,r,e,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(e=0;e<47;e++)x.push({k:t+e,v:r})}for(x.sort((function(a,b){return b.v-a.v})),e=0;e<x.length;e++)t=x[e].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:S||!w||!$||!E},{sort:function(t){void 0!==t&&c(t);var r=v(this);if(E)return void 0===t?C.call(r):C.call(r,t);var e,n,l=[],f=_(r);for(n=0;n<f;n++)n in r&&l.push(r[n]);for(l=d(l,function(t){return function(r,e){return void 0===e?-1:void 0===r?1:void 0!==t?+t(r,e)||0:o(r)>o(e)?1:-1}}(t)),e=l.length,n=0;n<e;)r[n]=l[n++];for(;n<f;)delete r[n++];return r}})},350:function(t,r){var e=Math.floor,n=function(t,r){var _=t.length,o=e(_/2);return _<8?c(t,r):v(n(t.slice(0,o),r),n(t.slice(o),r),r)},c=function(t,r){for(var element,e,n=t.length,i=1;i<n;){for(e=i,element=t[i];e&&r(t[e-1],element)>0;)t[e]=t[--e];e!==i++&&(t[e]=element)}return t},v=function(t,r,e){for(var n=t.length,c=r.length,v=0,_=0,o=[];v<n||_<c;)v<n&&_<c?o.push(e(t[v],r[_])<=0?t[v++]:r[_++]):o.push(v<n?t[v++]:r[_++]);return o};t.exports=n},351:function(t,r,e){var n=e(80).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},352:function(t,r,e){var n=e(80);t.exports=/MSIE|Trident/.test(n)},353:function(t,r,e){var n=e(80).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},477:function(t,r,e){},489:function(t,r,e){"use strict";e.r(r);var n=e(8),c=(e(38),e(15)),v={data:function(){return{referrals:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var e,n,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.$store.state.user.uid,n=c.c.collection("referrals").doc(e),r.next=4,n.get();case 4:(v=r.sent).exists&&(t.referrals=v.data()),console.log(t.referrals);case 7:case"end":return r.stop()}}),r)})))()},computed:{totalCount:function(){return this.referrals?this.referrals.cashBack.length:0},totalSum:function(){if(!this.referrals)return 0;var t=0;for(var i in this.referrals.cashBack){t+=this.referrals.cashBack[i].cashBack}return t}}},_=e(40),component=Object(_.a)(v,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"uk-card uk-card-default uk-card-body uk-width-2-2@m"},[e("div",{staticClass:"uk-container uk-container-small uk-text-center"},[t._m(0),t._v(" "),e("div",[t._v("分享折扣碼："+t._s(t.$store.state.user.uid))]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h4",{staticClass:"uk-card-title"},[t._v("推薦獎勵說明")]),t._v(" "),t._m(1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h4",{staticClass:"uk-card-title"},[t._v("累計推薦獎勵")]),t._v("\n    累計推薦人數 "),e("span",{staticClass:"title"},[t._v(t._s(t.totalCount))]),t._v(" 人，累計推薦獎勵\n    "),e("span",{staticClass:"title"},[t._v(t._s(t.totalSum))]),t._v(" 元"),e("br"),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary uk-margin-large"},[t._v("\n      申請領取獎勵\n    ")]),t._v(" "),e("table",{staticClass:"uk-table uk-table-divider"},[t._m(2),t._v(" "),this.referrals?e("tbody",{staticStyle:{"text-align":"left"}},t._l(this.referrals.cashBack,(function(p){return e("tr",{key:p.MerchantTradeNo+"-"+p.TotalSuccessTimes},[e("td",[t._v(t._s(p.MerchantTradeNo+"-"+p.TotalSuccessTimes))]),t._v(" "),e("td",[t._v(t._s(p.PaymentDate)+t._s(p.ProcessDate))]),t._v(" "),e("td",[t._v(t._s(p.CustomField2))]),t._v(" "),e("td",[t._v(t._s(p.cashBack))]),t._v(" "),e("td",[t._v(t._s(p.cashBackRatio))])])})),0):t._e()])])])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("h2",[t._v("邀請朋友使用 VIP 方案")]),t._v(" "),e("p",{staticStyle:{"font-size":"1.5rem"}},[t._v("\n        他獲得 15％ 折扣，你享有 15%\n        "),e("i",{staticClass:"uk-text-primary"},[t._v("現金獎勵")]),t._v("！\n      ")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("p",[t._v("\n        大家在此平台消費，輸入您的折扣碼，享有所有商品 15 ％ 折扣！"),e("br"),t._v("與此同時，FinLab\n        會回饋您此項收入的 15％，用以感謝您的推廣！"),e("br"),t._v("\n        KOL 額外獎勵方案請洽：finlab.company@finlab.tw\n      ")]),t._v(" "),e("table",{staticClass:"uk-table uk-background-muted uk-text-left"},[e("thead",[e("tr",[e("th",[t._v("商品名稱")]),t._v(" "),e("th",[t._v("原始價格")]),t._v(" "),e("th",[t._v("消費者折扣價格")]),t._v(" "),e("th",[t._v("推廣者推薦獎勵")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("FinLab VIP 月繳方案")]),t._v(" "),e("td",[t._v("NT$ 999")]),t._v(" "),e("td",[t._v("NT$ 999 * (1-15%) = 850")]),t._v(" "),e("td",[t._v("每月回饋 NT$ 850 * 15% = NT$127")])]),t._v(" "),e("tr",[e("td",[t._v("FinLab VIP 年繳方案")]),t._v(" "),e("td",[t._v("NT$ 7999")]),t._v(" "),e("td",[t._v("NT$ 7999 * (1-15%) = 6780")]),t._v(" "),e("td",[t._v("每年回饋 NT$ 6780 * 15% = NT$1012")])])])]),t._v(" "),e("p",{staticStyle:{color:"#aaa"}},[t._v("\n        由於法規條件的變化、欺詐風險或我們認為相關的其他因素，FinLab\n        保留隨時更改推薦計劃條款的權利。\n      ")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",[t._v("獎勵領取辦法")]),t._v(" "),e("p",[t._v("\n        獎勵將累計於平台中，顯示於下方，可每月領取 "),e("br"),t._v("\n        假如使用者想要領取獎勵，可以於每月 20 號以前，點選「領取獎勵」，"),e("br"),t._v("\n        我們將當月最後一天以前進行轉帳， 元，建議多累計一點再一次轉喔！"),e("br"),t._v("\n        假如當月超過 20 號才點選「領取獎勵」，則會順延至下個月轉帳。\n        獎金假如超過 2 萬以上，則依法代扣 10% 稅金，轉帳成本費用為 50 元。\n      ")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("thead",[e("tr",[e("th",[t._v("交易編號")]),t._v(" "),e("th",[t._v("交易日期")]),t._v(" "),e("th",[t._v("商品簡稱")]),t._v(" "),e("th",[t._v("現金獎勵")]),t._v(" "),e("th",[t._v("獎勵比例")])])])}],!1,null,null,null);r.default=component.exports},518:function(t,r,e){"use strict";e.r(r);var n=e(8),c=(e(340),e(60),e(38),e(163)),v=e(15),_=e(489),o={components:{FirebaseUi:c.default,CompareMerchant:d,Referral:_.default},data:function(){return{strategies:null,finlabUserID:"TJN4FDuqrwU8DML7DAjUYFIMutp2",role:this.$store.state.role}},props:{btnInfo:{default:"VIP 詳細介紹"},url:{default:"/pricing"}},methods:{downloadStrategies:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.c.collection("users").doc(t.finlabUserID).get();case 3:e=r.sent,t.strategies=e.data().strategies,r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(0),alert("cannot fetch finlab strategy"+r.t0),r.abrupt("return");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))()},strategyFilter:function(t){var r=[];for(var e in this.strategies)if(10!==this.strategies[e][t]){var n=this.strategies[e];n.sname=e,r.push(n)}return r.sort((function(a,b){return a.public_code-b.public_code})),r},outOfPermission:function(t,r){var e="free"===this.role?1:2;return this.strategies[t][r]>e},copyFinlabStrategy:function(t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.c.collection("users").doc(r.finlabUserID).collection("strategies").doc(t).collection("codes").doc("code"),null,e.prev=2,e.next=5,n.get();case 5:e.sent.data(),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(2),alert("cannot download post ref "+e.t0),e.abrupt("return");case 13:c=t,r.$router.push("/strategyview/?uid=".concat(r.$store.state.user.uid,"&sid=").concat(c));case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))()},linkFinlabStrategy:function(t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t,r.$router.push("/strategyview/?uid=".concat(r.finlabUserID,"&sid=").concat(n));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.downloadStrategies();case 1:case"end":return r.stop()}}),r)})))()}},l=(e(535),e(40)),component=Object(l.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("table",{staticClass:"uk-table uk-table-divider uk-margin-top"},[e("tbody",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._l(t.strategyFilter("public_code"),(function(s){return e("tr",{key:"strategy-"+s.sname,style:t.outOfPermission(s.sname,"public_code")?"color:gray;":""},[e("td",[e("span",{staticStyle:{color:"#d43766"}},[t._v("+"+t._s(Math.round(1e3*s.annual_return)/10)+" ％")]),e("br"),t._v(" "),e("a",{style:"color:gray",on:{click:function(r){return t.linkFinlabStrategy(s.sname)}}},[t._v("\n            "+t._s(s.sname))])]),t._v(" "),e("td",{staticStyle:{"white-space":"nowrap"}},[s.public_code<2?e("div",[e("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})]):t._e()]),t._v(" "),e("td",{staticStyle:{"white-space":"nowrap"}},[s.public_code>=0?e("div",[e("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})]):t._e()])])}))],2)])])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[e("td",[t._v("歷史資料庫回測")]),t._v(" "),e("td",[t._v("免費")]),t._v(" "),e("td",[t._v("VIP")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tr",[e("td",[e("span",{attrs:{"uk-icon":"database"}}),t._v("每日用量")]),t._v(" "),e("td",[t._v("500 MB")]),t._v(" "),e("td",[t._v("5000 MB")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tr",[e("td",[e("span",{attrs:{"uk-icon":"refresh"}}),t._v("最新資料")]),t._v(" "),e("td",[t._v("無")]),t._v(" "),e("td",[t._v("每日")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tr",[e("td",[e("span",{attrs:{"uk-icon":"file-text"}}),t._v("每日回測")]),t._v(" "),e("td",[t._v("5 次")]),t._v(" "),e("td",[t._v("無限")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[e("td",[t._v("Python 每月教學")]),t._v(" "),e("td",[t._v("免費")]),t._v(" "),e("td",[t._v("VIP")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tr",[e("td",[e("span",{attrs:{"uk-icon":"tv"}}),t._v("每月不定期直播")]),t._v(" "),e("td",[e("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})]),t._v(" "),e("td",[e("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tr",[e("td",[e("span",{attrs:{"uk-icon":"tv"}}),t._v("每月教學")]),t._v(" "),e("div"),t._v(" "),e("td",[e("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[e("td",[t._v("Python 影音課程")]),t._v(" "),e("td",[t._v("免費")]),t._v(" "),e("td",[t._v("VIP")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tr",[e("td",[e("span",{attrs:{"uk-icon":"tv"}}),t._v("製作策略")]),t._v(" "),e("td",[e("span",{attrs:{"uk-icon":"cross"}})]),t._v(" "),e("td",[e("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tr",[e("td",[e("span",{attrs:{"uk-icon":"tv"}}),t._v("券商分點")]),t._v(" "),e("td",[e("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"cross"}})]),t._v(" "),e("td",[e("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[e("td",{staticStyle:{"font-weight":"800"}},[t._v("\n          程式範例"),e("br"),e("span",{staticStyle:{color:"#d43766"}},[t._v("歷史年化報酬")])]),t._v(" "),e("td",[t._v("免費")]),t._v(" "),e("td",[t._v("VIP")])])}],!1,null,"8fdb408e",null),d=r.default=component.exports},535:function(t,r,e){"use strict";e(477)},685:function(t,r,e){},734:function(t,r,e){"use strict";e.r(r);var n=e(163),c=e(518),v=e(489),_={components:{FirebaseUi:n.default,CompareMerchant:c.default,Referral:v.default}},o=(e(765),e(40)),component=Object(o.a)(_,(function(){var t=this,r=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("table",{staticClass:"uk-table uk-table-divider uk-margin-top"},[e("tbody",[e("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[e("td",{staticStyle:{width:"30%"}},[e("br"),t._v("費用範圍")]),t._v(" "),e("td",{staticStyle:{width:"40%"}},[t._v("FinLab"),e("br"),t._v("量化平台")]),t._v(" "),e("td",{staticStyle:{width:"30%"}},[t._v("其他"),e("br"),t._v("量化軟體")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"uk-visible@s",attrs:{"uk-icon":"cart"}}),t._v("費用比較")]),t._v(" "),e("td",[t._v("全功能"),e("br"),t._v(" 749 /月")]),t._v(" "),e("td",[t._v("每模組"),e("br"),t._v(" 1000 /月")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"uk-visible@s",attrs:{"uk-icon":"folder"}}),e("br"),t._v("方案範圍")]),t._v(" "),e("td",[t._v("資料庫"),e("br"),t._v("數據分析"),e("br"),t._v("策略範例"),e("br"),t._v("量化投資教學")]),t._v(" "),e("td",[t._v("回測"),e("br"),t._v("盤面資訊")])]),t._v(" "),e("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[e("td",[e("br"),t._v("程式模組")]),t._v(" "),e("td",[t._v("FinLab"),e("br"),t._v("量化平台")]),t._v(" "),e("td",[t._v("其他"),e("br"),t._v("量化軟體")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"uk-visible@s",attrs:{"uk-icon":"code"}}),t._v("程式語言")]),t._v(" "),e("td",[t._v("人生何苦"),e("br"),t._v("我愛Python")]),t._v(" "),e("td",[t._v("侷限之"),e("br"),t._v("功能性語言")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"uk-visible@s",attrs:{"uk-icon":"code"}}),t._v("上手難度")]),t._v(" "),e("td",[t._v("世上最易上手的"),e("br"),t._v("程式語言")]),t._v(" "),e("td",[t._v("交易語法")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"uk-visible@s",attrs:{"uk-icon":"file-text"}}),t._v("應用範圍")]),t._v(" "),e("td",[t._v("\n        高"),e("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}}),e("br"),t._v("可應用到"),e("br"),t._v("數據分析"),e("br"),t._v("資料視覺化"),e("br"),t._v("網頁工程"),e("br"),t._v("機器學習...\n      ")]),t._v(" "),e("td",[t._v("低"),e("span",{staticStyle:{color:"#c41919"},attrs:{"uk-icon":"close"}}),e("br"),t._v("跟軟體綁定")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"uk-visible@s",attrs:{"uk-icon":"file-text"}}),t._v("量化分析")]),t._v(" "),e("td",[t._v("\n        豐富"),e("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}}),e("br"),t._v("提供:歷史回測"),e("br"),t._v("流動性風險檢測"),e("br"),t._v("MAE\n        波動分析"),e("br"),t._v("機器學習..."),e("br"),t._v("等高階功能\n      ")]),t._v(" "),e("td",[t._v("基礎"),e("span",{staticStyle:{color:"#c41919"},attrs:{"uk-icon":"close"}}),e("br"),t._v("提供:歷史回測")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"uk-visible@s",attrs:{"uk-icon":"code"}}),t._v("是否開源")]),t._v(" "),e("td",[t._v("\n        半開源"),e("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}}),e("br"),t._v("方便開發者串接與延伸應用\n      ")]),t._v(" "),e("td",[t._v("\n        機密"),e("span",{staticStyle:{color:"#c41919"},attrs:{"uk-icon":"close"}})])]),t._v(" "),e("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[e("td",[e("br"),t._v("資料庫")]),t._v(" "),e("td",[t._v("FinLab"),e("br"),t._v("量化平台")]),t._v(" "),e("td",[t._v("其他"),e("br"),t._v("量化軟體")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"uk-visible@s",attrs:{"uk-icon":"database"}}),t._v("資料範圍")]),t._v(" "),e("td",[t._v("\n        基本面"),e("br"),t._v("技術面"),e("br"),t._v("籌碼面"),e("br"),t._v("產業面"),e("br"),t._v("事件面"),e("br"),t._v("總體經濟"),e("br"),t._v("日週期資料全都\n      ")]),t._v(" "),e("td",[t._v("基本面"),e("br"),t._v("技術面"),e("br"),t._v("其他資料"),e("br"),t._v("需購買其他模組")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"uk-visible@s",attrs:{"uk-icon":"database"}}),t._v("資料下載")]),t._v(" "),e("td",[t._v("自由開放")]),t._v(" "),e("td",[t._v("限軟體使用")])]),t._v(" "),e("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[e("td",[e("br"),t._v("教學社群")]),t._v(" "),e("td",[t._v("FinLab"),e("br"),t._v("量化平台")]),t._v(" "),e("td",[t._v("其他"),e("br"),t._v("量化軟體")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"uk-visible@s",attrs:{"uk-icon":"users"}}),t._v("教學內容")]),t._v(" "),e("td",[t._v("\n        YT、Blog、Discord、FB 定期更新，都有許多高含金量內容與高互動率\n      ")]),t._v(" "),e("td",[t._v("不定")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"uk-visible@s",attrs:{"uk-icon":"reply"}}),t._v("問題回覆")]),t._v(" "),e("td",[t._v("快～不會像很多線上課程放生用戶")]),t._v(" "),e("td",[t._v("不定")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"uk-visible@s",attrs:{"uk-icon":"heart"}}),t._v("功能許願池")]),t._v(" "),e("td",[e("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}}),e("br"),t._v("與開發者溝通"),e("br"),t._v("願望成真率較高\n      ")]),t._v(" "),e("td",[e("span",{staticStyle:{color:"#c41919"},attrs:{"uk-icon":"close"}}),e("br"),t._v("碰碰運氣\n      ")])])])])}],!1,null,"075010b5",null);r.default=component.exports},765:function(t,r,e){"use strict";e(685)}}]);