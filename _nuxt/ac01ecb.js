(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{807:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(38),n(19)),c=n(94),l=n.n(c),d={data:function(){return{coupon:""}},mounted:function(){this.$store.state.user||l.a.modal("#login-ui").show()},methods:{useCoupon:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://asia-east2-fdata-299302.cloudfunctions.net/auth_use_coupon",e.next=3,r.a.currentUser.getIdToken();case 3:return e.t0=e.sent,e.t1="Bearer "+e.t0,o={Authorization:e.t1},e.prev=6,e.next=9,t.$axios.post(n,{coupon:t.coupon},{headers:o});case 9:e.sent,e.next=17;break;case 12:return e.prev=12,e.t2=e.catch(6),console.log(e.t2),void 0!==e.t2.response?l.a.modal.alert("驗證失敗："+e.t2.response.data.msg):alert(e.t2),e.abrupt("return");case 17:t.$router.push("/member_info?expect_role=vip_m");case 18:case"end":return e.stop()}}),e,null,[[6,12]])})))()}}},m=n(40),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"calc(100vh - 64px)",width:"100%"}},[n("div",{staticClass:"uk-container",staticStyle:{"padding-top":"calc(calc(calc(100vh - 64px) / 2) - 150px)"}},[this.$store.state.user?n("div",[n("h1",{staticClass:"uk-text-primary"},[t._v("FinLab VIP 優惠碼")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon,expression:"coupon"}],staticClass:"uk-input uk-form-width-large uk-margin-right uk-margin-bottom",attrs:{type:"text",placeholder:"輸入序號","aria-label":"Input"},domProps:{value:t.coupon},on:{input:function(e){e.target.composing||(t.coupon=e.target.value)}}}),t._v(" "),n("button",{staticClass:"uk-button uk-button-primary uk-margin-bottom",on:{click:t.useCoupon}},[t._v("成為 VIP")])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);