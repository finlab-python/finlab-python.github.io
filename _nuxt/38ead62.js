(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{706:function(t,e,o){"use strict";o.r(e);var n=o(8),r=(o(18),o(66),o(38),o(15)),c={data:function(){return{menu:null,post:"",imgHeader:""}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.c.collection("posts").doc("menu").get();case 2:t.menu=e.sent.data().posts,console.log(t.menu),console.log(t.menu);case 5:case"end":return e.stop()}}),e)})))()},methods:{showPost:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,r.c.collection("posts").doc(t.toString()).get();case 2:n=o.sent.data(),console.log(n),e.post=n.post;case 5:case"end":return o.stop()}}),o)})))()}}},l=o(40),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"uk-width-1-1"},[t.$store.state.user&&"TJN4FDuqrwU8DML7DAjUYFIMutp2"===t.$store.state.user.uid?o("nuxt-link",{attrs:{to:"posts"}},[t._v("設定公告\n  ")]):t._e(),t._v(" "),t.menu?o("div",{staticClass:"uk-overflow-auto",staticStyle:{height:"260px"}},[o("div",{staticClass:"uk-margin-right"},[t._l(t.menu,(function(e){return o("span",{staticStyle:{cursor:"pointer",height:"64px"}},[o("img",{key:e.id,staticClass:"round-border uk-margin-bottom",staticStyle:{width:"100%"},attrs:{src:e.thumbnail,"uk-toggle":"target: #modal-post",alt:"image"},on:{click:function(o){t.showPost(e.id),t.imgHeader=e.thumbnail}}})])})),o("br")],2)]):t._e(),t._v(" "),o("div",{attrs:{id:"modal-post","uk-modal":""}},[o("div",{staticClass:"uk-modal-dialog uk-modal-body",staticStyle:{"border-radius":"15px"}},[o("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","uk-close":""}}),t._v(" "),o("img",{staticClass:"round-border",staticStyle:{"margin-bottom":"12px"},attrs:{width:"100%",src:t.imgHeader,"uk-toggle":"target: #modal-post",alt:"image"}}),t._v(" "),o("div",{domProps:{innerHTML:t._s(t.post)}})])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);