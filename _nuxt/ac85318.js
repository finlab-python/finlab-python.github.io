(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{713:function(e,t,o){"use strict";o.r(t);var n=o(8),r=(o(60),o(38),o(323)),c=o(19),l=Object(r.c)({data:function(){return{sid:this.$route.query.sid,uid:this.$route.query.uid,new_public_performance:this.$props.public_performance,new_public_position:this.$props.public_position,new_public_code:this.$props.public_code,generatingSocialImage:!1,shareImage:null}},props:{public_performance:!0,public_position:!1,public_code:!1},watch:{public_performance:function(e){this.new_public_performance=e},public_position:function(e){this.new_public_position=e},public_code:function(e){this.new_public_code=e}},methods:{updatePermission:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$store.state.user){t.next=3;break}return alert("請登入來操作"),t.abrupt("return");case 3:if(e.uid===e.$store.state.user.uid){t.next=6;break}return alert("此策略不屬於您，無法更改權限喔！"),t.abrupt("return");case 6:return o=c.c.collection("users").doc(e.uid).collection("strategies").doc(e.sid),t.next=9,o.update({public_performance:e.new_public_performance,public_position:e.new_public_position,public_code:e.new_public_code});case 9:return n=c.c.collection("users").doc(e.uid),(r={})[e.sid]={public_performance:e.new_public_performance,public_position:e.new_public_position,public_code:e.new_public_code},t.next=14,n.set({strategies:r},{merge:!0});case 14:case"end":return t.stop()}}),t)})))()},generateSocialImage:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,n,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==e.generatingSocialImage){t.next=2;break}return t.abrupt("return");case 2:return e.generatingSocialImage=!0,o=null,t.prev=4,n="https://asia-east1-fdata-299302.cloudfunctions.net/social-image/?sid=".concat(e.$route.query.sid,"&uid=").concat(e.$route.query.uid,"&photoURL=").concat(e.$store.state.user.photoURL,"&author=").concat(e.$store.state.user.displayName,"&force=true"),r="https://asia-east1-fdata-299302.cloudfunctions.net/social-image/?sid=".concat(e.$route.query.sid,"&uid=").concat(e.$route.query.uid,"&photoURL=").concat(e.$store.state.user.photoURL,"&author=").concat(e.$store.state.user.displayName),t.next=9,e.$axios.get(n);case 9:t.sent,o=r,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),console.log("fail to generate image",t.t0);case 16:return t.prev=16,c="https://ai.finlab.tw/strategy/?uid=".concat(e.$route.query.uid,"&sid=").concat(e.$route.query.sid),l={"User-Agent":"facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",Connection:"close"},t.next=21,e.$axios.get(c,{},{headers:l});case 21:t.sent,t.next=27;break;case 24:t.prev=24,t.t1=t.catch(16),console.log("fail to update crawler",t.t1);case 27:o&&(e.shareImage=o),e.generatingSocialImage=!1;case 29:case"end":return t.stop()}}),t,null,[[4,13],[16,24]])})))()}}}),d=o(40),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"modal-permission","uk-modal":""}},[o("div",{staticClass:"uk-modal-dialog uk-modal-body round-border"},[o("h2",{staticClass:"uk-modal-title"},[e._v("分享")]),e._v("\n    分享績效\n    "),o("div",{staticClass:"uk-margin"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.new_public_performance,expression:"new_public_performance"}],staticClass:"uk-select",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.new_public_performance=t.target.multiple?o:o[0]}}},[o("option",{domProps:{value:10}},[e._v("隱藏")]),e._v(" "),o("option",{domProps:{value:3}},[e._v("分享於VIP年用戶")]),e._v(" "),o("option",{domProps:{value:2}},[e._v("分享於VIP月用戶")]),e._v(" "),o("option",{domProps:{value:0}},[e._v("分享於所有用戶")])])]),e._v("\n    分享選股標的\n    "),o("div",{staticClass:"uk-margin"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.new_public_position,expression:"new_public_position"}],staticClass:"uk-select",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.new_public_position=t.target.multiple?o:o[0]}}},[o("option",{domProps:{value:10}},[e._v("隱藏")]),e._v(" "),o("option",{domProps:{value:3}},[e._v("分享於VIP年用戶")]),e._v(" "),o("option",{domProps:{value:2}},[e._v("分享於VIP月用戶")]),e._v(" "),o("option",{domProps:{value:0}},[e._v("分享於所有用戶")])])]),e._v("\n    分享程式碼\n    "),o("div",{staticClass:"uk-margin"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.new_public_code,expression:"new_public_code"}],staticClass:"uk-select",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.new_public_code=t.target.multiple?o:o[0]}}},[o("option",{domProps:{value:10}},[e._v("隱藏")]),e._v(" "),o("option",{domProps:{value:3}},[e._v("分享於VIP年用戶")]),e._v(" "),o("option",{domProps:{value:2}},[e._v("分享於VIP月用戶")]),e._v(" "),o("option",{domProps:{value:0}},[e._v("分享於所有用戶")])])]),e._v(" "),o("div",{staticClass:"uk-margin-large",staticStyle:{border:"1px solid #ddd"}},[0===e.$props.public_performance&&this.$store.state.user?o("button",{staticClass:"uk-button",on:{click:e.generateSocialImage}},[e._v("\n        "+e._s(!1===e.generatingSocialImage?"產生分享圖片":"產生中(約30秒)...")+"\n      ")]):e._e(),e._v(" "),e.shareImage?o("img",{attrs:{width:"100%",src:e.shareImage,alt:"顯示圖片"}}):e._e()]),e._v(" "),o("p",{staticClass:"uk-text-right"},[o("button",{staticClass:"uk-button uk-button-default uk-modal-close",attrs:{type:"button"}},[e._v("\n        取消\n      ")]),e._v(" "),o("button",{staticClass:"uk-button uk-button-primary uk-modal-close",attrs:{type:"button"},on:{click:e.updatePermission}},[e._v("\n        確認\n      ")])])])])}),[],!1,null,null,null);t.default=component.exports}}]);