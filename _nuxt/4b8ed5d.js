(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{611:function(t,e,r){"use strict";r.r(e);var n=r(8),c=(r(49),r(31),r(323)),o=r(19),l=r(94),d=r.n(l),_=Object(c.c)({data:function(){return{willPaid:!1,deals:{merchant:{price:0,total_count:-1,unit:"月",details:"當前無訂閱任何商品"},transactions:[]}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.state.user){e.next=2;break}return e.abrupt("return");case 2:return r=t.$store.state.user.uid,e.next=5,o.c.collection("payments").doc(r).get();case 5:n=e.sent,console.log("hello",n.data()),n.exists&&(t.deals=n.data(),"card_token"in t.deals&&(t.willPaid=!0)),console.log("world");case 9:case"end":return e.stop()}}),e)})))()},methods:{cancelSubscription:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t,d.a.modal.confirm("您將會失去當前方案的優惠，您確定嗎？").then(Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.currentUser.getIdToken();case 2:return t.t0=t.sent,t.t1="Bearer "+t.t0,t.t2={Authorization:t.t1},e={headers:t.t2},console.log(e),t.prev=7,t.next=10,r.$axios.post("https://asia-east1-crypto-296412.cloudfunctions.net/payment-remove-card-token-v1",{},e);case 10:r.willPaid=!1,t.next=18;break;case 13:t.prev=13,t.t3=t.catch(7),console.log(t.t3),void 0!==t.t3.response?d.a.modal.alert("取消訂閱失敗："+t.t3.response.data.msg):alert(t.t3),console.log(t.t3);case 18:case"end":return t.stop()}}),t,null,[[7,13]])}))),(function(){console.log("Rejected.")}));case 2:case"end":return e.stop()}}),e)})))()}},computed:{role:function(){return this.$store.state.role},expireDate:function(){return this.$store.state.expire_date&&"none"!==this.$store.state.expire_date?this.$store.state.expire_date.slice(0,4)+" / "+this.$store.state.expire_date.slice(4,6)+" / "+this.$store.state.expire_date.slice(6,8):"無"}}}),v=r(41),component=Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.deals?r("div",[r("div",{staticClass:"uk-grid-match uk-child-width-1-2@m",attrs:{"uk-grid":""}},[r("div",[r("div",{staticClass:"uk-card uk-background-default shadow uk-padding"},["vip"===t.role?r("h4",{staticClass:"uk-text-primary"},[t._v("\n          目前方案：FinLab VIP\n        ")]):t._e(),t._v(" "),"vip_m"===t.role?r("h4",{staticClass:"uk-text-primary"},[t._v("\n          目前方案：FinLab VIP 月繳\n        ")]):t._e(),t._v(" "),"vip_y"===t.role?r("h4",{staticClass:"uk-text-primary"},[t._v("\n          目前方案：FinLab VIP 年繳\n        ")]):t._e(),t._v(" "),"vip_t"===t.role?r("h4",{staticClass:"uk-text-primary"},[t._v("\n          目前方案：FinLab VIP 試用（僅資料源）\n        ")]):t._e(),t._v(" "),"free"===t.role?r("h4",{staticClass:"uk-text-primary"},[t._v("\n          目前方案：免費試用\n        ")]):t._e(),t._v(" "),t.deals.merchant&&-1!==t.deals.merchant.total_count?r("span",[t._v("\n          會員 ID： "+t._s(t.deals.merchant.total_count)+" "),r("br")]):t._e(),t._v(" "),t.deals.merchant?r("span",[t._v("\n          含"+t._s(t.deals.merchant.details)),r("br"),t._v("\n          NT "+t._s(t.deals.merchant.price)+" / "+t._s(t.deals.merchant.unit)),r("br")]):t._e()])]),t._v(" "),r("div",[t.willPaid?r("div",{staticClass:"uk-card uk-background-default shadow uk-padding"},[r("h4",{staticClass:"uk-text-primary"},[t._v("下期 VIP 付款日 "+t._s(t.expireDate))]),t._v(" "),r("p",[t._v("付款日後的隔天下午會自動授權下一期的 VIP 會員")]),t._v(" "),r("p",{attrs:{"uk-margin":""}},[r("MerchantCard",{attrs:{changeCreditCard:!0}}),t._v(" "),t.deals.transactions&&t.deals.transactions.length>=12||t.$route.query.debug?r("button",{staticClass:"uk-button uk-button-default",on:{click:t.cancelSubscription}},[t._v("\n            取消訂閱(按下瞬間，將無法還原當初訂閱價格)\n          ")]):r("button",{staticClass:"uk-button uk-button-disable",attrs:{disabled:""}},[t._v("\n            取消訂閱（需訂閱滿 12 個月後方可點選）\n          ")])],1)]):r("div",{staticClass:"uk-card uk-background-default shadow uk-padding"},[r("h4",{staticClass:"uk-text-primary"},[t._v("VIP 截止日 "+t._s(t.expireDate))]),t._v(" "),"free"!==t.role?r("p",[t._v("截止日後的零時將變回 Free 用戶")]):t._e(),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"uk-width-1-1"},[r("div",{staticClass:"uk-card uk-background-default shadow uk-padding"},[r("h4",{staticClass:"uk-text-primary"},[t._v("近期訂閱")]),t._v(" "),r("table",{staticClass:"uk-table uk-table-divider"},[t._m(1),t._v(" "),r("tbody",t._l(t.deals.transactions,(function(e){return r("tr",{key:e.rec_trade_id},[r("td",[t._v(t._s(e.card_info.last_four))]),t._v(" "),r("td",[t._v(t._s(e.rec_trade_id))]),t._v(" "),r("td",[t._v("\n                "+t._s(new Date(parseInt(e.bank_transaction_time.end_time_millis)).toLocaleString())+"\n              ")]),t._v(" "),r("td",[t._v("NT $"+t._s(e.amount))]),t._v(" "),r("td",[t._v(t._s(e.InvoiceNumber))])])})),0)])])])])]):t._e()}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{attrs:{else:""}},[t._v("\n          當訂閱後，此處將會顯示"),r("br"),t._v("下次付款日期、換卡、取消訂閱等操作\n        ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("卡片末四碼")]),t._v(" "),r("th",[t._v("交易序號")]),t._v(" "),r("th",[t._v("付款時間")]),t._v(" "),r("th",[t._v("費用")]),t._v(" "),r("th",[t._v("發票號碼")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MerchantCard:r(612).default})}}]);