(window.webpackJsonp=window.webpackJsonp||[]).push([[85,31,50,51,58],{333:function(t,e,r){"use strict";var n=r(10),o=r(81),c=r(43),l=r(61),d=r(22),v=r(11),_=r(343),f=r(154),h=r(344),m=r(345),k=r(93),y=r(346),x=[],w=x.sort,C=v((function(){x.sort(void 0)})),$=v((function(){x.sort(null)})),I=f("sort"),P=!v((function(){if(k)return k<70;if(!(h&&h>3)){if(m)return!0;if(y)return y<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)x.push({k:t+r,v:e})}for(x.sort((function(a,b){return b.v-a.v})),r=0;r<x.length;r++)t=x[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:C||!$||!I||!P},{sort:function(t){void 0!==t&&o(t);var e=c(this);if(P)return void 0===t?w.call(e):w.call(e,t);var r,n,v=[],f=l(e);for(n=0;n<f;n++)n in e&&v.push(e[n]);for(v=_(v,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:d(e)>d(r)?1:-1}}(t)),r=v.length,n=0;n<r;)e[n]=v[n++];for(;n<f;)delete e[n++];return e}})},343:function(t,e){var r=Math.floor,n=function(t,e){var l=t.length,d=r(l/2);return l<8?o(t,e):c(n(t.slice(0,d),e),n(t.slice(d),e),e)},o=function(t,e){for(var element,r,n=t.length,i=1;i<n;){for(r=i,element=t[i];r&&e(t[r-1],element)>0;)t[r]=t[--r];r!==i++&&(t[r]=element)}return t},c=function(t,e,r){for(var n=t.length,o=e.length,c=0,l=0,d=[];c<n||l<o;)c<n&&l<o?d.push(r(t[c],e[l])<=0?t[c++]:e[l++]):d.push(c<n?t[c++]:e[l++]);return d};t.exports=n},344:function(t,e,r){var n=r(80).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},345:function(t,e,r){var n=r(80);t.exports=/MSIE|Trident/.test(n)},346:function(t,e,r){var n=r(80).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},453:function(t,e,r){},454:function(t,e,r){},460:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(31),r(19)),c={data:function(){return{referrals:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$store.state.user.uid,n=o.c.collection("referrals").doc(r),e.next=4,n.get();case 4:(c=e.sent).exists&&(t.referrals=c.data()),console.log(t.referrals);case 7:case"end":return e.stop()}}),e)})))()},computed:{totalCount:function(){return this.referrals?this.referrals.cashBack.length:0},totalSum:function(){if(!this.referrals)return 0;var t=0;for(var i in this.referrals.cashBack){t+=this.referrals.cashBack[i].cashBack}return t}}},l=r(41),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-card uk-card-default uk-card-body uk-width-2-2@m"},[r("div",{staticClass:"uk-container uk-container-small uk-text-center"},[t._m(0),t._v(" "),r("div",[t._v("分享折扣碼："+t._s(t.$store.state.user.uid))]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("h4",{staticClass:"uk-card-title"},[t._v("推薦獎勵說明")]),t._v(" "),t._m(1),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("h4",{staticClass:"uk-card-title"},[t._v("累計推薦獎勵")]),t._v("\n    累計推薦人數 "),r("span",{staticClass:"title"},[t._v(t._s(t.totalCount))]),t._v(" 人，累計推薦獎勵\n    "),r("span",{staticClass:"title"},[t._v(t._s(t.totalSum))]),t._v(" 元"),r("br"),t._v(" "),r("button",{staticClass:"uk-button uk-button-primary uk-margin-large"},[t._v("\n      申請領取獎勵\n    ")]),t._v(" "),r("table",{staticClass:"uk-table uk-table-divider"},[t._m(2),t._v(" "),this.referrals?r("tbody",{staticStyle:{"text-align":"left"}},t._l(this.referrals.cashBack,(function(p){return r("tr",{key:p.MerchantTradeNo+"-"+p.TotalSuccessTimes},[r("td",[t._v(t._s(p.MerchantTradeNo+"-"+p.TotalSuccessTimes))]),t._v(" "),r("td",[t._v(t._s(p.PaymentDate)+t._s(p.ProcessDate))]),t._v(" "),r("td",[t._v(t._s(p.CustomField2))]),t._v(" "),r("td",[t._v(t._s(p.cashBack))]),t._v(" "),r("td",[t._v(t._s(p.cashBackRatio))])])})),0):t._e()])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("邀請朋友使用 VIP 方案")]),t._v(" "),r("p",{staticStyle:{"font-size":"1.5rem"}},[t._v("\n        他獲得 15％ 折扣，你享有 15%\n        "),r("i",{staticClass:"uk-text-primary"},[t._v("現金獎勵")]),t._v("！\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v("\n        大家在此平台消費，輸入您的折扣碼，享有所有商品 15 ％ 折扣！"),r("br"),t._v("與此同時，FinLab\n        會回饋您此項收入的 15％，用以感謝您的推廣！"),r("br"),t._v("\n        KOL 額外獎勵方案請洽：finlab.company@finlab.tw\n      ")]),t._v(" "),r("table",{staticClass:"uk-table uk-background-muted uk-text-left"},[r("thead",[r("tr",[r("th",[t._v("商品名稱")]),t._v(" "),r("th",[t._v("原始價格")]),t._v(" "),r("th",[t._v("消費者折扣價格")]),t._v(" "),r("th",[t._v("推廣者推薦獎勵")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("FinLab VIP 月繳方案")]),t._v(" "),r("td",[t._v("NT$ 999")]),t._v(" "),r("td",[t._v("NT$ 999 * (1-15%) = 850")]),t._v(" "),r("td",[t._v("每月回饋 NT$ 850 * 15% = NT$127")])]),t._v(" "),r("tr",[r("td",[t._v("FinLab VIP 年繳方案")]),t._v(" "),r("td",[t._v("NT$ 7999")]),t._v(" "),r("td",[t._v("NT$ 7999 * (1-15%) = 6780")]),t._v(" "),r("td",[t._v("每年回饋 NT$ 6780 * 15% = NT$1012")])])])]),t._v(" "),r("p",{staticStyle:{color:"#aaa"}},[t._v("\n        由於法規條件的變化、欺詐風險或我們認為相關的其他因素，FinLab\n        保留隨時更改推薦計劃條款的權利。\n      ")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("h3",[t._v("獎勵領取辦法")]),t._v(" "),r("p",[t._v("\n        獎勵將累計於平台中，顯示於下方，可每月領取 "),r("br"),t._v("\n        假如使用者想要領取獎勵，可以於每月 20 號以前，點選「領取獎勵」，"),r("br"),t._v("\n        我們將當月最後一天以前進行轉帳， 元，建議多累計一點再一次轉喔！"),r("br"),t._v("\n        假如當月超過 20 號才點選「領取獎勵」，則會順延至下個月轉帳。\n        獎金假如超過 2 萬以上，則依法代扣 10% 稅金，轉帳成本費用為 50 元。\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("交易編號")]),t._v(" "),r("th",[t._v("交易日期")]),t._v(" "),r("th",[t._v("商品簡稱")]),t._v(" "),r("th",[t._v("現金獎勵")]),t._v(" "),r("th",[t._v("獎勵比例")])])])}],!1,null,null,null);e.default=component.exports},475:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(333),r(62),r(31),r(159)),c=r(19),l=r(460),d={components:{FirebaseUi:o.default,CompareMerchant:_,Referral:l.default},data:function(){return{strategies:null,finlabUserID:"TJN4FDuqrwU8DML7DAjUYFIMutp2",role:this.$store.state.role}},props:{btnInfo:{default:"VIP 詳細介紹"},url:{default:"/pricing"}},methods:{downloadStrategies:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.c.collection("users").doc(t.finlabUserID).get();case 3:r=e.sent,t.strategies=r.data().strategies,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),alert("cannot fetch finlab strategy"+e.t0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},strategyFilter:function(t){var e=[];for(var r in this.strategies)if(10!==this.strategies[r][t]){var n=this.strategies[r];n.sname=r,e.push(n)}return e.sort((function(a,b){return a.public_code-b.public_code})),e},outOfPermission:function(t,e){var r="free"===this.role?1:2;return this.strategies[t][e]>r},copyFinlabStrategy:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=c.c.collection("users").doc(e.finlabUserID).collection("strategies").doc(t).collection("codes").doc("code"),null,r.prev=2,r.next=5,n.get();case 5:r.sent.data(),r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(2),alert("cannot download post ref "+r.t0),r.abrupt("return");case 13:o=t,e.$router.push("/strategyview/?uid=".concat(e.$store.state.user.uid,"&sid=").concat(o));case 15:case"end":return r.stop()}}),r,null,[[2,9]])})))()},linkFinlabStrategy:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t,e.$router.push("/strategyview/?uid=".concat(e.finlabUserID,"&sid=").concat(n));case 2:case"end":return r.stop()}}),r)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.downloadStrategies();case 1:case"end":return e.stop()}}),e)})))()}},v=(r(489),r(41)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("table",{staticClass:"uk-table uk-table-divider uk-margin-top"},[r("tbody",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._l(t.strategyFilter("public_code"),(function(s){return r("tr",{key:"strategy-"+s.sname,style:t.outOfPermission(s.sname,"public_code")?"color:gray;":""},[r("td",[r("span",{staticStyle:{color:"#d43766"}},[t._v("+"+t._s(Math.round(1e3*s.annual_return)/10)+" ％")]),r("br"),t._v(" "),r("a",{style:"color:gray",on:{click:function(e){return t.linkFinlabStrategy(s.sname)}}},[t._v("\n            "+t._s(s.sname))])]),t._v(" "),r("td",{staticStyle:{"white-space":"nowrap"}},[s.public_code<2?r("div",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})]):t._e()]),t._v(" "),r("td",{staticStyle:{"white-space":"nowrap"}},[s.public_code>=0?r("div",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})]):t._e()])])}))],2)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[r("td",[t._v("歷史資料庫回測")]),t._v(" "),r("td",[t._v("免費")]),t._v(" "),r("td",[t._v("VIP")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"database"}}),t._v("每日用量")]),t._v(" "),r("td",[t._v("500 MB")]),t._v(" "),r("td",[t._v("5000 MB")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"refresh"}}),t._v("最新資料")]),t._v(" "),r("td",[t._v("無")]),t._v(" "),r("td",[t._v("每日")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"file-text"}}),t._v("每日回測")]),t._v(" "),r("td",[t._v("5 次")]),t._v(" "),r("td",[t._v("無限")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[r("td",[t._v("Python 每月教學")]),t._v(" "),r("td",[t._v("免費")]),t._v(" "),r("td",[t._v("VIP")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"tv"}}),t._v("每月不定期直播")]),t._v(" "),r("td",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})]),t._v(" "),r("td",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"tv"}}),t._v("每月教學")]),t._v(" "),r("div"),t._v(" "),r("td",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[r("td",[t._v("Python 影音課程")]),t._v(" "),r("td",[t._v("免費")]),t._v(" "),r("td",[t._v("VIP")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"tv"}}),t._v("製作策略")]),t._v(" "),r("td",[r("span",{attrs:{"uk-icon":"cross"}})]),t._v(" "),r("td",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{attrs:{"uk-icon":"tv"}}),t._v("券商分點")]),t._v(" "),r("td",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"cross"}})]),t._v(" "),r("td",[r("span",{staticStyle:{color:"#17ad8a"},attrs:{"uk-icon":"check"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"uk-background-muted uk-text-primary uk-text-bold"},[r("td",{staticStyle:{"font-weight":"800"}},[t._v("\n          程式範例"),r("br"),r("span",{staticStyle:{color:"#d43766"}},[t._v("歷史年化報酬")])]),t._v(" "),r("td",[t._v("免費")]),t._v(" "),r("td",[t._v("VIP")])])}],!1,null,"8fdb408e",null),_=e.default=component.exports},480:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(31),r(19)),c={data:function(){return{uid:this.$store.state.user.uid}},methods:{setNotification:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=o.c.collection("users").doc(e.uid),r.next=3,n.set({notification_setting:t},{merge:!0}).then((function(){alert("成功修改電子報通知設定!")})).catch((function(t){console.error("Error writing document: ",t)}));case 3:case"end":return r.stop()}}),r)})))()}},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{notificationSetting:function(){return this.$store.state.userInfo&&this.$store.state.userInfo.info&&this.$store.state.userInfo.info.notification_setting?this.$store.state.userInfo.info.notification_setting:"open"}}},l=(r(483),r(41)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-card uk-background-default shadow uk-card-body uk-margin-large"},[r("h4",[t._v("電子報通知設定")]),t._v(" "),t._m(0),t._v(" "),r("br"),t._v(" "),"open"==t.notificationSetting?r("button",{staticClass:"uk-button uk-button-danger",attrs:{type:"button"},on:{click:function(e){return t.setNotification("close")}}},[t._v("\n    取消通知服務\n  ")]):r("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button"},on:{click:function(e){return t.setNotification("open")}}},[t._v("\n    開啟通知服務\n  ")])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("\n    通知服務以 email 提供下列資訊:\n    "),r("br"),t._v(" "),r("ol",[r("li",[t._v("VIP 個人策略的訊號異動提醒")]),t._v(" "),r("li",[t._v("量化平台新功能與教學介紹")]),t._v(" "),r("li",[t._v("量化平台直播與活動預告")])])])}],!1,null,"41e9f572",null);e.default=component.exports},483:function(t,e,r){"use strict";r(453)},489:function(t,e,r){"use strict";r(454)},611:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(49),r(31),r(323)),c=r(19),l=r(94),d=r.n(l),v=Object(o.c)({data:function(){return{willPaid:!1,deals:{merchant:{price:0,total_count:-1,unit:"月",details:"當前無訂閱任何商品"},transactions:[]}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.state.user){e.next=2;break}return e.abrupt("return");case 2:return r=t.$store.state.user.uid,e.next=5,c.c.collection("payments").doc(r).get();case 5:n=e.sent,console.log("hello",n.data()),n.exists&&(t.deals=n.data(),"card_token"in t.deals&&(t.willPaid=!0)),console.log("world");case 9:case"end":return e.stop()}}),e)})))()},methods:{cancelSubscription:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t,d.a.modal.confirm("您將會失去當前方案的優惠，您確定嗎？").then(Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.currentUser.getIdToken();case 2:return t.t0=t.sent,t.t1="Bearer "+t.t0,t.t2={Authorization:t.t1},e={headers:t.t2},console.log(e),t.prev=7,t.next=10,r.$axios.post("https://asia-east1-crypto-296412.cloudfunctions.net/payment-remove-card-token-v1",{},e);case 10:r.willPaid=!1,t.next=18;break;case 13:t.prev=13,t.t3=t.catch(7),console.log(t.t3),void 0!==t.t3.response?d.a.modal.alert("取消訂閱失敗："+t.t3.response.data.msg):alert(t.t3),console.log(t.t3);case 18:case"end":return t.stop()}}),t,null,[[7,13]])}))),(function(){console.log("Rejected.")}));case 2:case"end":return e.stop()}}),e)})))()}},computed:{role:function(){return this.$store.state.role},expireDate:function(){return this.$store.state.expire_date&&"none"!==this.$store.state.expire_date?this.$store.state.expire_date.slice(0,4)+" / "+this.$store.state.expire_date.slice(4,6)+" / "+this.$store.state.expire_date.slice(6,8):"無"}}}),_=r(41),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.deals?r("div",[r("div",{staticClass:"uk-grid-match uk-child-width-1-2@m",attrs:{"uk-grid":""}},[r("div",[r("div",{staticClass:"uk-card uk-background-default shadow uk-padding"},["vip"===t.role?r("h4",{staticClass:"uk-text-primary"},[t._v("\n          目前方案：FinLab VIP\n        ")]):t._e(),t._v(" "),"vip_m"===t.role?r("h4",{staticClass:"uk-text-primary"},[t._v("\n          目前方案：FinLab VIP 月繳\n        ")]):t._e(),t._v(" "),"vip_y"===t.role?r("h4",{staticClass:"uk-text-primary"},[t._v("\n          目前方案：FinLab VIP 年繳\n        ")]):t._e(),t._v(" "),"vip_t"===t.role?r("h4",{staticClass:"uk-text-primary"},[t._v("\n          目前方案：FinLab VIP 試用（僅資料源）\n        ")]):t._e(),t._v(" "),"free"===t.role?r("h4",{staticClass:"uk-text-primary"},[t._v("\n          目前方案：免費試用\n        ")]):t._e(),t._v(" "),t.deals.merchant&&-1!==t.deals.merchant.total_count?r("span",[t._v("\n          會員 ID： "+t._s(t.deals.merchant.total_count)+" "),r("br")]):t._e(),t._v(" "),t.deals.merchant?r("span",[t._v("\n          含"+t._s(t.deals.merchant.details)),r("br"),t._v("\n          NT "+t._s(t.deals.merchant.price)+" / "+t._s(t.deals.merchant.unit)),r("br")]):t._e()])]),t._v(" "),r("div",[t.willPaid?r("div",{staticClass:"uk-card uk-background-default shadow uk-padding"},[r("h4",{staticClass:"uk-text-primary"},[t._v("下期 VIP 付款日 "+t._s(t.expireDate))]),t._v(" "),r("p",[t._v("付款日後的隔天下午會自動授權下一期的 VIP 會員")]),t._v(" "),r("p",{attrs:{"uk-margin":""}},[r("MerchantCard",{attrs:{changeCreditCard:!0}}),t._v(" "),t.deals.transactions&&t.deals.transactions.length>=12||t.$route.query.debug?r("button",{staticClass:"uk-button uk-button-default",on:{click:t.cancelSubscription}},[t._v("\n            取消訂閱(按下瞬間，將無法還原當初訂閱價格)\n          ")]):r("button",{staticClass:"uk-button uk-button-disable",attrs:{disabled:""}},[t._v("\n            取消訂閱（需訂閱滿 12 個月後方可點選）\n          ")])],1)]):r("div",{staticClass:"uk-card uk-background-default shadow uk-padding"},[r("h4",{staticClass:"uk-text-primary"},[t._v("VIP 截止日 "+t._s(t.expireDate))]),t._v(" "),"free"!==t.role?r("p",[t._v("截止日後的零時將變回 Free 用戶")]):t._e(),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"uk-width-1-1"},[r("div",{staticClass:"uk-card uk-background-default shadow uk-padding"},[r("h4",{staticClass:"uk-text-primary"},[t._v("近期訂閱")]),t._v(" "),r("table",{staticClass:"uk-table uk-table-divider"},[t._m(1),t._v(" "),r("tbody",t._l(t.deals.transactions,(function(e){return r("tr",{key:e.rec_trade_id},[r("td",[t._v(t._s(e.card_info.last_four))]),t._v(" "),r("td",[t._v(t._s(e.rec_trade_id))]),t._v(" "),r("td",[t._v("\n                "+t._s(new Date(parseInt(e.bank_transaction_time.end_time_millis)).toLocaleString())+"\n              ")]),t._v(" "),r("td",[t._v("NT $"+t._s(e.amount))]),t._v(" "),r("td",[t._v(t._s(e.InvoiceNumber))])])})),0)])])])])]):t._e()}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{attrs:{else:""}},[t._v("\n          當訂閱後，此處將會顯示"),r("br"),t._v("下次付款日期、換卡、取消訂閱等操作\n        ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("卡片末四碼")]),t._v(" "),r("th",[t._v("交易序號")]),t._v(" "),r("th",[t._v("付款時間")]),t._v(" "),r("th",[t._v("費用")]),t._v(" "),r("th",[t._v("發票號碼")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MerchantCard:r(612).default})},663:function(t,e,r){},741:function(t,e,r){"use strict";r(663)},882:function(t,e,r){"use strict";r.r(e);r(42),r(29),r(44),r(55),r(39),r(56);var n=r(8),o=r(21),c=(r(123),r(18),r(67),r(333),r(62),r(49),r(68),r(47),r(117),r(31),r(46)),l=r(159),d=r(19),v=r(475),_=r(460),f=r(611),h=r(94),m=r.n(h),k=r(480);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={components:{FirebaseUi:l.default,CompareMerchant:v.default,Referral:_.default,PaymentPanel:f.default,NotificationSetting:k.default},data:function(){return{tabs:[{name:"訂閱方案",icon:"info"},{name:"付款設定與紀錄",icon:"credit-card"}],refreshingToken:!1,currentTab:"訂閱方案",strategies:null,finlabUserID:"TJN4FDuqrwU8DML7DAjUYFIMutp2",loadingRole:!0,debug:"true"===this.$route.query.debug,quota:null}},methods:x(x({},Object(c.b)({signOut:"signOut",updateUserClaims:"updateUserClaims",updateUserInfo:"userInfo/setRealtimeUpdate",cancelUserInfo:"userInfo/cancelRealtimeUpdate"})),{},{refreshApiToken:function(){var t=this;m.a.modal.confirm("您確定要重新產生 API 驗證碼嗎？之前的將會不能使用喔！").then(Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.refreshingToken=!0,e.t0=t.$axios,e.t1={},e.next=6,d.a.currentUser.getIdToken();case 6:return e.t2=e.sent,e.t3="Bearer "+e.t2,e.t4={Authorization:e.t3},e.t5={headers:e.t4},e.next=12,e.t0.post.call(e.t0,"https://asia-east2-fdata-299302.cloudfunctions.net/auth_generate_api_token",e.t1,e.t5);case 12:return e.sent,e.next=15,d.a.currentUser.getIdTokenResult(!0);case 15:r=e.sent,"api_token"in(n=r.claims)&&t.$store.commit("set_api_token",n.api_token),t.refreshingToken=!1,e.next=24;break;case 21:e.prev=21,e.t6=e.catch(0),m.a.modal.alert("無法產生新的 API 驗證碼");case 24:case"end":return e.stop()}}),e,null,[[0,21]])}))),(function(){}))},downloadQuota:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.c.collection("download").doc(t.$store.state.user.uid).get();case 3:return r=e.sent,e.abrupt("return",r.data()||{});case 7:return e.prev=7,e.t0=e.catch(0),console.log("cannot fetch finlab quota"+e.t0,t.$store.state.user.uid),e.abrupt("return",{});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},downloadStrategies:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.c.collection("users").doc(t.finlabUserID).get();case 3:r=e.sent,t.strategies=r.data().strategies,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),alert("cannot fetch finlab strategy"+e.t0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},startSell:function(){return!0},signOutAndRedirect:function(){this.signOut(),this.cancelUserInfo(),window.location.href="https://ai.finlab.tw"},copyToken:function(){var t=document.getElementById("idToken");t.select(),t.setSelectionRange(0,99999),document.execCommand("copy")},intToFloat:function(t,e){return Math.round(10*t)%10==0&&0!=t?t+Array(e+1).join("0"):0===t?"0.0":t},format_float:function(t){return this.intToFloat(Math.round(10*t)/10,1)},addSign:function(t){return t>0?"+"+t.toString():t.toString()},addSignColor:function(t){return 0===t?"color:gray":t>0?"color:rgb(255, 82, 121)":"color:#00c9b7"},strategyFilter:function(t){var e=[];for(var r in this.strategies)if(10!==this.strategies[r][t]){var n=this.strategies[r];n.sname=r,e.push(n)}return e.sort((function(a,b){return b.ndays_return[5]-a.ndays_return[5]})),e},outOfPermission:function(t,e){var r="free"===this.role?1:2;return this.strategies[t][e]>r},copyFinlabStrategy:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t,e.$router.push("/notebook/?uid=".concat(e.finlabUserID,"&sid=").concat(n));case 2:case"end":return r.stop()}}),r)})))()},isLastPayment:function(p){if(!this.$store.state.userInfo.info)return!1;if(!this.$store.state.userInfo.info.payments)return!1;var t=p.MerchantTradeNo+p.TotalSuccessTimes,e=this.$store.state.userInfo.info.payments.slice(-1)[0];return t===e.MerchantTradeNo+e.TotalSuccessTimes},test:function(){m.a.modal("#vip-video-tutorial").show()}}),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("expectRole"in t.$route.query||(t.loadingRole=!1),!("rec_trade_id"in t.$route.query)){e.next=15;break}return e.prev=2,e.next=5,t.$axios.post("https://asia-east1-crypto-296412.cloudfunctions.net/payment-user-check-payment",{rec_trade_id:t.$route.query.rec_trade_id});case 5:if(1!==(r=e.sent).data.msg.record_status){e.next=8;break}return e.abrupt("return");case 8:0===r.data.msg.record_status?m.a.modal("#vip-video-tutorial").show():0!==r.data.msg.amount?m.a.modal.alert("信用卡授權失敗，付款沒有成功喔！"):0===r.data.msg.amount&&m.a.modal.alert("更換信用卡成功！"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),void 0!==e.t0.response?m.a.modal.alert("交易失敗，請聯繫客服："+e.t0.response.data.msg):alert(e.t0);case 15:if(t.$store.state.user){e.next=18;break}return m.a.modal("#login-ui").show(),e.abrupt("return");case 18:return e.next=20,t.updateUserClaims();case 20:return"expectRole"in t.$route.query&&(n=function(){l.updateUserClaims(),c+=1,(l.$route.query.expectRole===l.role||c>=10)&&(clearInterval(o),l.loadingRole=!1)},c=0,l=t,n(),o=setInterval(n,3e3)),t.downloadStrategies(),window.history.pushState({},document.title,window.location.pathname),e.next=25,t.downloadQuota();case 25:t.quota=e.sent;case 26:case"end":return e.stop()}}),e,null,[[2,11]])})))()},computed:{user:function(){return this.$store.state.user},apiToken:function(){return!1 in this.$store.state?"":this.$store.state.api_token+"#"+this.$store.state.role},memoryUsage:function(){if(!this.quota||!this.quota.last_date_data_quota)return 0;var t=this.quota.last_date_data_quota.size;return Math.round(10*t)/10},memoryLimit:function(){return"vip"===this.role||"vip_m"===this.role?5e3:"vip_t"===this.role?2e3:500},shortRole:function(){return"free"===this.role?"免費":"VIP"},nextPayDate:function(){if(!this.isPeriodPaymentActivate)return"無";var t=this.$store.state.userInfo.info.payments.slice(-1)[0],e=new Date(t.PaymentDate||t.ProcessDate),r=null;if("M"==t.PeriodType)r=new Date(e.setMonth(e.getMonth()+1));else{if("Y"!=t.PeriodType)return t.PeriodType;r=new Date(e.setYear(e.getFullYear()+1))}return r.toISOString().split("T")[0]},expireDate:function(){if(-1===this.role.indexOf("vip"))return"無";if("none"===this.$store.state.expire_date)return"無";var t=this.$store.state.expire_date,e=Date.UTC(t.slice(0,4),parseInt(t.slice(4,6))-1,t.slice(6,8),0,0);return(e=new Date(e)).toISOString().split("T")[0]},creditCardInformation:function(){if(!this.isPeriodPaymentActivate)return"XXXX XXXX XXXX XXXX";var t=this.$store.state.userInfo.info.payments,e=null;for(var i in t)"card4no"in t[i]&&(e=t[i]);var r=e.card4no,n=e.card6no;return n.slice(0,4)+" "+n.slice(4,6)+"XX XXXX "+r},role:function(){return this.$store.state.role},isPeriodPaymentActivate:function(){return!!this.$store.state.userInfo.info&&(!!this.$store.state.userInfo.info.payments&&(0!==this.$store.state.userInfo.info.payments.length&&"取消訂閱"!=this.$store.state.userInfo.info.payments.slice(-1)[0].TotalSuccessTimes))}}},C=(r(741),r(41)),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"uk-section dark-muted uk-padding-remove-bottom"},[r("div",{staticClass:"uk-container top-container"},[t.user?r("div",{staticClass:"heading"},[r("div",{staticClass:"uk-clearfix"},[r("div",{staticClass:"uk-float-left"},[r("span",[r("img",{staticClass:"uk-border-circle",attrs:{width:"60",height:"60",src:t.$store.state.user.photoURL}})]),t._v(" "),r("span",[r("h1",{staticClass:"uk-text-primary"},[t._v("\n                "+t._s(t.$store.state.user.displayName)+"\n              ")]),t._v(" "),r("span",{staticClass:"uk-label",staticStyle:{"vertical-align":"top"}},[t._v(t._s(t.role.split("_")[0].toUpperCase()))]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"uk-text-primary"},[t._v("\n                "+t._s(t.$store.state.user.email)+"\n              ")])])]),t._v(" "),r("div",{staticClass:"uk-float-right"},[r("button",{staticClass:"uk-button uk-button-primary uk-light",on:{click:t.signOutAndRedirect}},[r("a",[t._v("登出")])])])])]):t._e(),t._v(" "),r("ul",{staticClass:"uk-child-width-expand uk-margin-large-top",attrs:{"uk-switcher":"connect: #nav;","uk-tab":""}},t._l(t.tabs,(function(e){return r("li",{key:"talib."+e.name},[r("a",{on:{click:function(r){t.currentTab=e.name}}},[r("span",{attrs:{"uk-icon":e.icon}}),t._v(" "+t._s(e.name))])])})),0)])]),t._v(" "),t.user?r("div",{staticClass:"uk-section uk-background-muted"},[r("div",{staticClass:"uk-container"},["訂閱方案"===t.currentTab?r("div",[r("div",{staticClass:"uk-height-match uk-child-width-1-2@s uk-child-width-1-1",attrs:{id:"js-oversized","uk-grid":""}},[r("div",[r("div",{staticClass:"\n                                                                              uk-card uk-background-default\n                                                                              shadow\n                                                                              uk-card-body uk-margin-large\n                                                                            "},[t.loadingRole&&t.$route.query.expectRole!==t.role?r("div",[t._v("\n                正在更新方案\n                "),r("div",{attrs:{"uk-spinner":""}})]):r("div",["vip"===t.role?r("h4",[t._v("FinLab VIP")]):t._e(),t._v(" "),"vip_m"===t.role?r("h4",[t._v("FinLab VIP 月繳")]):t._e(),t._v(" "),"vip_y"===t.role?r("h4",[t._v("FinLab VIP 年繳")]):t._e(),t._v(" "),"vip_t"===t.role?r("h4",[t._v("FinLab VIP 資料試用")]):t._e(),t._v(" "),"free"===t.role?r("h4",[t._v("免費試用")]):t._e(),t._v(" "),r("div",[r("label",{staticClass:"uk-form-label"},[t._v("API 驗證碼")]),t._v(" "),r("div",{staticClass:"uk-form-controls uk-grid-small",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-2@s uk-width-1-1"},[t.refreshingToken?r("div",{attrs:{"uk-spinner":""}}):r("input",{staticClass:"uk-input",staticStyle:{"text-overflow":"ellipsis"},attrs:{type:"text",placeholder:"API Token",readonly:"readonly",id:"idToken"},domProps:{value:t.apiToken}})]),t._v(" "),r("div",{staticClass:"uk-width-expand uk-flex"},[r("button",{staticClass:"uk-button uk-margin-right",on:{click:t.copyToken}},[t._v("\n                        複製\n                      ")]),t._v(" "),r("button",{staticClass:"uk-button ",on:{click:t.refreshApiToken}},[t._v("\n                        重置\n                      ")])])])]),t._v(" "),r("div",{staticClass:"uk-margin-large"},[r("label",{staticClass:"uk-form-label"},[t._v("每日資料用量："+t._s(t.memoryUsage)+" / "+t._s(t.memoryLimit)+" MB "),r("nuxt-link",{attrs:{to:"pricing"}},["free"===t.role?r("a",[t._v(" (VIP 升級成 5000 MB) ")]):t._e()])],1),t._v(" "),r("progress",{staticClass:"uk-progress",attrs:{max:t.memoryLimit},domProps:{value:Math.max(t.memoryUsage,20)}}),t._v(" "),"free"!==t.role?r("p",[t._v("假如在正常使用下超過限制，可以於左側 Discord 中的助教提問區提及，我們會幫您暫時設定更高的額度")]):t._e()])])]),t._v(" "),r("div",[r("NotificationSetting")],1)]),t._v(" "),t.startSell()||t.debug?r("div",["free"===this.role?r("div",[r("div",{staticClass:"uk-card uk-background-default shadow uk-card-body"},[r("h3",{staticClass:"uk-text-primary"},[r("span",{staticStyle:{color:"orange"}},[r("font-awesome-icon",{staticClass:"icon",attrs:{icon:"star"}})],1),t._v(" 為什麼要加入 FinLab VIP ？")]),t._v(" "),r("br"),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"uk-margin-large-top",staticStyle:{"text-align":"right"}},[r("nuxt-link",{attrs:{to:"/pricing"}},[r("button",{staticClass:"uk-button uk-background-primary",staticStyle:{height:"64px",color:"white"}},[t._v("\n                      VIP 詳細介紹\n                    ")])])],1),t._v(" "),r("h3",{staticClass:"uk-text-primary"},[t._v("方案比較")]),t._v(" "),r("CompareMerchant"),t._v(" "),r("div",{staticClass:"uk-margin-large-top",staticStyle:{"text-align":"right"}},[r("nuxt-link",{attrs:{to:"/pricing"}},[r("button",{staticClass:"uk-button uk-background-primary",staticStyle:{height:"64px",color:"white"}},[t._v("\n                      VIP 詳細介紹\n                    ")])])],1)],1)]):r("div",[r("LazyVip")],1),t._v("\n            "+t._s(t.debug?"測試VIP：":"")+"\n            "),t.debug?r("div",[r("LazyVip")],1):t._e()]):t._e()])]):t._e(),t._v(" "),"付款設定與紀錄"===t.currentTab?r("div",[r("payment-panel",{key:t.expireDate})],1):t._e()])]):t._e(),t._v(" "),r("div",{attrs:{id:"vip-video-tutorial","uk-modal":""}},[r("div",{staticClass:"uk-modal-dialog uk-modal-body uk-card"},[r("h2",{staticClass:"uk-modal-title uk-text-primary"},[t._v("感謝您訂閱 VIP")]),t._v(" "),r("p",[t._v("怎麼使用平台？趕快來看看！或是之後在「Python 影音教學」中觀看👇")]),t._v(" "),r("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","uk-close":""}}),t._v(" "),r("LazyVideo",{attrs:{src:"https://www.youtube.com/embed/_HAyUzPzxCs"}})],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-padding-small uk-text-primary",staticStyle:{border:"1px solid #252786"}},[r("div",{staticClass:"uk-clearfix"},[r("div",{staticClass:"uk-float-left"},[r("div",{staticStyle:{"font-size":"1.2rem"}},[t._v("\n                        完整資料庫、回測模組、VIP策略"),r("br"),t._v("成為專業的量化投資人！\n                      ")])]),t._v(" "),r("div",{staticClass:"uk-float-right"},[r("div",[r("br"),t._v("\n                        限時 NT$"),r("span",{staticStyle:{"font-size":"2.4rem"}},[t._v("749")]),t._v("/月\n                      ")])])])])}],!1,null,"5d77403e",null);e.default=component.exports;installComponents(component,{NotificationSetting:r(480).default,CompareMerchant:r(475).default,PaymentPanel:r(611).default})}}]);