(window.webpackJsonp=window.webpackJsonp||[]).push([[21,48],{435:function(t,e,n){"use strict";n.r(e);var r={props:{confirm:{default:null},title:{default:null},value:{default:!1}},methods:{confirmClose:function(){this.confirm&&this.confirm(),this.hide()},hide:function(){this.$emit("input",!1)}}},o=n(40),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-modal uk-open",style:t.value?"display: initial":""},[n("div",{staticClass:"uk-modal-dialog",staticStyle:{"border-radius":"15px",overflow:"hidden"}},[n("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","uk-close":""},on:{click:t.hide}}),t._v(" "),t.title?n("div",{staticClass:"uk-modal-header"},[n("h2",{staticClass:"uk-modal-title uk-text-primary"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),n("div",{staticClass:"uk-modal-body"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"uk-modal-footer uk-text-right"},[t.confirm?n("button",{staticClass:"uk-button uk-button-default",attrs:{type:"button"},on:{click:t.hide}},[t._v("取消")]):t._e(),t._v(" "),n("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button"},on:{click:t.confirmClose}},[t._v("確定")])])])])}),[],!1,null,null,null);e.default=component.exports},615:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(18),n(67),n(46),n(38),n(323)),l=n(19),c=n(94),d=n.n(c),v=Object(o.c)({props:{strategies:[],value:{default:!1}},data:function(){return{selectedStrategy:"",updateTime:"19:00",settings:{}}},mounted:function(){this.init()},methods:{init:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.generateRandomTime(),t.$props.strategies.length>0&&(t.selectedStrategy=t.$props.strategies[0]),n=null,e.prev=3,n="schedule"in t.$store.state.userInfo.info?t.$store.state.userInfo.info.schedule:{},e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(3),alert("cannot view schedule"+e.t0),e.t0;case 11:t.settings={},t.settings=Object.assign({},t.settings,n);case 13:case"end":return e.stop()}}),e,null,[[3,7]])})))()},generateRandomTime:function(){var time=Math.round(59*Math.random()),t=time<10?"0"+time.toString():time.toString();this.updateTime="19:"+t},addStrategy:function(){"free"!==this.$store.state.role?10!==Object.keys(this.settings).length||"TJN4FDuqrwU8DML7DAjUYFIMutp2"===this.$store.state.user.uid?(this.settings[this.selectedStrategy]=this.updateTime,this.generateRandomTime()):alert("最多只能更新 10 個策略"):alert("免費用戶無法使用此功能喔！")},removeStrategy:function(t){this.$delete(this.settings,t)},setSchedule:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("free"!==t.$store.state.role){e.next=3;break}return alert("免費用戶無法使用此功能喔！"),e.abrupt("return");case 3:return{api_token:t.$store.state.api_token,sids:t.settings},e.prev=4,n=l.c.batch(),r=l.c.collection("global").doc("schedule"),o=l.c.collection("users").doc(t.$store.state.user.uid),n.update(o,{schedule:t.settings}),(c={})[t.$store.state.user.uid]=t.settings,n.update(r,c),e.next=14,n.commit();case 14:d.a.modal.alert("儲存成功!"),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),console.log(e.t0),d.a.modal.alert("cannot set schedule "+e.t0);case 21:case"end":return e.stop()}}),e,null,[[4,17]])})))()}}}),m=n(40),component=Object(m.a)(v,(function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("Modal",{attrs:{title:"自動更新策略",confirm:e.setSchedule,value:e.value},on:{input:function(e){return t.$emit("input",!1)}}},[this.$store.state.userInfo.info&&this.$store.state.userInfo.info.strategies?r("div",[r("div",[r("div",{attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-1"},[r("p",[e._v("建議於晚上7點之後執行，才能獲取最新的資料喔！")]),e._v(" "),r("p",[e._v("建議將策略更新時間錯開，來避免回測塞車！")]),e._v(" "),r("p",[e._v("\n            當設定完成後，系統不會即時更新，而是在每個整點更新您的新設定喔！\n          ")])]),e._v(" "),r("div",{staticClass:"uk-width-1-2"},[r("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[e._v("策略")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedStrategy,expression:"selectedStrategy"}],staticClass:"uk-select",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));e.selectedStrategy=t.target.multiple?n:n[0]}}},e._l(e.strategies,(function(s){return r("option",{key:s},[e._v(e._s(s))])})),0)]),e._v(" "),r("div",{staticClass:"uk-width-1-4@m uk-width-1-2"},[r("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[e._v("自動更新時間")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.updateTime,expression:"updateTime"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"19:30"},domProps:{value:e.updateTime},on:{input:function(t){t.target.composing||(e.updateTime=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"uk-width-expand uk-margin-bottom"},[r("br",{staticClass:"uk-visible@m"}),e._v(" "),r("button",{staticClass:"uk-button uk-button-primary uk-width-1-1",on:{click:e.addStrategy}},[e._v("\n            新增\n          ")])])])]),e._v(" "),r("hr"),e._v(" "),0===Object.keys(e.settings).length?r("div",{staticStyle:{padding:"48px 0"}},[e._v("\n      尚未新增策略\n    ")]):r("div",[r("ul",{staticClass:"uk-list"},e._l(e.settings,(function(time,t){return r("li",{key:t+"_select"},[r("button",{staticClass:"uk-button",staticStyle:{"margin-right":"12px"},on:{click:function(n){return e.removeStrategy(t)}}},[e._v("\n            刪除\n          ")]),e._v("\n          每天 "+e._s(time)+" 自動執行\n          "),r("span",{staticClass:"uk-text-primary"},[e._v(e._s(t))])])})),0)]),e._v(" "),r("hr")]):r("div",[e._v("尚未登入")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Modal:n(435).default})}}]);