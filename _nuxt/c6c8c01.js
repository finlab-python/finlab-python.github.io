(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{714:function(e,t,o){"use strict";o.r(t);var n=o(8),r=(o(38),o(323)),l=(o(509),o(510),o(511),o(512)),c=o(19),d=Object(r.c)({setup:function(){},props:{collection:{default:null},document:{default:null}},components:{quillEditor:l.quillEditor},data:function(){return{post:"",editorOption:{theme:"snow",placeholder:"策略研發筆記",modules:{syntax:{highlight:function(text){return window.hljs.highlightAuto(text).value}},toolbar:[["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],[{header:[2,3,!1]}],[{color:[]},{background:[]}],[{size:["small",!1,"large","huge"]}],[{align:[]}],["link","image"],["clean"],["video"],["code-block"]]}}}},methods:{downloadPost:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e.collection){t.next=2;break}return t.abrupt("return");case 2:return o=c.c.collection(e.collection).doc(e.document),n=null,t.prev=4,t.next=7,o.get();case 7:n=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),alert("cannot download post ref"+t.t0.response.data);case 13:n&&n.exists&&(r=n.data(),e.post=r.post,""===e.post&&(e.post=null));case 14:case"end":return t.stop()}}),t,null,[[4,10]])})))()},uploadPost:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e.collection){t.next=2;break}return t.abrupt("return");case 2:if(null!==e.post){t.next=4;break}return t.abrupt("return");case 4:return o=c.c.collection(e.collection).doc(e.document),e.uploadingPost=!0,t.prev=6,t.next=9,o.set({post:e.post},{merge:!0});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(6),alert("上傳 post 失敗："+t.t0.response.data);case 14:e.uploadingPost=!1;case 15:case"end":return t.stop()}}),t,null,[[6,11]])})))()}},mounted:function(){console.log("post mounted"),this.downloadPost()},destroyed:function(){console.log("post destroy"),this.uploadPost()}}),f=o(40),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("quill-editor",{ref:"myQuillEditor",attrs:{options:e.editorOption},model:{value:e.post,callback:function(t){e.post=t},expression:"post"}})],1)}),[],!1,null,"67ef9367",null);t.default=component.exports}}]);