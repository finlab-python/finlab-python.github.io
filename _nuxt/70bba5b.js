(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{472:function(t,n,e){},520:function(t,n,e){"use strict";e.r(n);var r=e(8),o=(e(38),e(15)),c={data:function(){return{uid:this.$store.state.user.uid}},methods:{setNotification:function(t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.c.collection("users").doc(n.uid),e.next=3,r.set({notification_setting:t},{merge:!0}).then((function(){alert("成功修改電子報通知設定!")})).catch((function(t){console.error("Error writing document: ",t)}));case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{notificationSetting:function(){return this.$store.state.userInfo&&this.$store.state.userInfo.info&&this.$store.state.userInfo.info.notification_setting?this.$store.state.userInfo.info.notification_setting:"open"}}},f=(e(523),e(40)),component=Object(f.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"uk-card uk-background-default shadow uk-card-body uk-margin-large"},[e("h4",[t._v("電子報通知設定")]),t._v(" "),t._m(0),t._v(" "),e("br"),t._v(" "),"open"==t.notificationSetting?e("button",{staticClass:"uk-button uk-button-danger",attrs:{type:"button"},on:{click:function(n){return t.setNotification("close")}}},[t._v("\n    取消通知服務\n  ")]):e("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button"},on:{click:function(n){return t.setNotification("open")}}},[t._v("\n    開啟通知服務\n  ")])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v("\n    通知服務以 email 提供下列資訊:\n    "),e("br"),t._v(" "),e("ol",[e("li",[t._v("VIP 個人策略的訊號異動提醒")]),t._v(" "),e("li",[t._v("量化平台新功能與教學介紹")]),t._v(" "),e("li",[t._v("量化平台直播與活動預告")])])])}],!1,null,"41e9f572",null);n.default=component.exports},523:function(t,n,e){"use strict";e(472)}}]);