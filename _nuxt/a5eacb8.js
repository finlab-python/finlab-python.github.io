(window.webpackJsonp=window.webpackJsonp||[]).push([[88,55],{714:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(38),n(323)),c=(n(509),n(510),n(511),n(512)),l=n(19),d=Object(o.c)({setup:function(){},props:{collection:{default:null},document:{default:null}},components:{quillEditor:c.quillEditor},data:function(){return{post:"",editorOption:{theme:"snow",placeholder:"策略研發筆記",modules:{syntax:{highlight:function(text){return window.hljs.highlightAuto(text).value}},toolbar:[["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],[{header:[2,3,!1]}],[{color:[]},{background:[]}],[{size:["small",!1,"large","huge"]}],[{align:[]}],["link","image"],["clean"],["video"],["code-block"]]}}}},methods:{downloadPost:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.collection){e.next=2;break}return e.abrupt("return");case 2:return n=l.c.collection(t.collection).doc(t.document),r=null,e.prev=4,e.next=7,n.get();case 7:r=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),alert("cannot download post ref"+e.t0.response.data);case 13:r&&r.exists&&(o=r.data(),t.post=o.post,""===t.post&&(t.post=null));case 14:case"end":return e.stop()}}),e,null,[[4,10]])})))()},uploadPost:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.collection){e.next=2;break}return e.abrupt("return");case 2:if(null!==t.post){e.next=4;break}return e.abrupt("return");case 4:return n=l.c.collection(t.collection).doc(t.document),t.uploadingPost=!0,e.prev=6,e.next=9,n.set({post:t.post},{merge:!0});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),alert("上傳 post 失敗："+e.t0.response.data);case 14:t.uploadingPost=!1;case 15:case"end":return e.stop()}}),e,null,[[6,11]])})))()}},mounted:function(){console.log("post mounted"),this.downloadPost()},destroyed:function(){console.log("post destroy"),this.uploadPost()}}),m=n(40),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},model:{value:t.post,callback:function(e){t.post=e},expression:"post"}})],1)}),[],!1,null,"67ef9367",null);e.default=component.exports},885:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(18),n(28),n(155),n(66),n(38),n(19)),c={data:function(){return{p:{thumbnail:"",id:this.$route.query.postId||Date.now()},postExist:!1,menu:null}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.download(t.p.id);case 2:case"end":return e.stop()}}),e)})))()},methods:{upload:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!1,e.t0=regeneratorRuntime.keys(t.menu);case 2:if((e.t1=e.t0()).done){e.next=10;break}if(i=e.t1.value,t.menu[i].id!==t.p.id){e.next=8;break}return t.menu[i]=t.p,n=!0,e.abrupt("break",10);case 8:e.next=2;break;case 10:return n||t.menu.unshift(t.p),e.next=13,o.c.collection("posts").doc("menu").set({posts:t.menu});case 13:t.$refs.post.uploadPost();case 14:case"end":return e.stop()}}),e)})))()},download:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.p.id=t,n.prev=1,n.next=4,o.c.collection("posts").doc("menu").get();case 4:e.menu=n.sent.data().posts,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),alert(n.t0,t,"not found");case 10:n.t1=regeneratorRuntime.keys(e.menu);case 11:if((n.t2=n.t1()).done){n.next=21;break}if(i=n.t2.value,e.menu[i].id!==t){n.next=19;break}return e.p.id=e.menu[i].id,e.p.thumbnail=e.menu[i].thumbnail,e.postExist=!0,console.log("find p",e.p),n.abrupt("break",21);case 19:n.next=11;break;case 21:e.$refs.post.downloadPost();case 22:case"end":return n.stop()}}),n,null,[[1,7]])})))()},remove:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null,e.t0=regeneratorRuntime.keys(t.menu);case 2:if((e.t1=e.t0()).done){e.next=9;break}if(i=e.t1.value,t.menu[i].id!==t.p.id){e.next=7;break}return n=i,e.abrupt("break",9);case 7:e.next=2;break;case 9:return t.menu.splice(n,1),e.next=12,o.c.collection("posts").doc("menu").set({posts:t.menu});case 12:return e.next=14,o.c.collection("posts").doc(t.p.id.toString()).delete();case 14:case"end":return e.stop()}}),e)})))()}}},l=n(40),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{background:"white"}},[n("div",{staticClass:"uk-container uk-padding"},[n("div",{attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-width-2-3"},[n("h2",[t._v(t._s(t.postExist?"修改":"新增")+"公告")]),t._v(" "),n("p",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("公告編號："+t._s(t.p.id))]),t._v(" "),t.p.thumbnail?n("img",{staticStyle:{"border-radius":"15px"},attrs:{width:"300px",src:t.p.thumbnail,alt:"image"}}):t._e(),n("br"),t._v(" "),n("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("縮圖網址")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.p.thumbnail,expression:"p.thumbnail"}],staticClass:"uk-input",attrs:{type:"text",name:"image",id:""},domProps:{value:t.p.thumbnail},on:{input:function(e){e.target.composing||t.$set(t.p,"thumbnail",e.target.value)}}}),t._v(" "),n("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("內文")]),t._v(" "),n("PostPanel",{ref:"post",attrs:{collection:"posts",document:t.p.id.toString()}}),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"uk-button uk-button-primary",on:{click:function(e){return t.upload()}}},[t._v(t._s(t.postExist?"修改":"新增"))]),t._v(" "),n("button",{staticClass:"uk-button uk-button-danger",on:{click:function(e){return t.remove()}}},[t._v("移除")])],1),t._v(" "),n("div",{staticClass:"uk-width-1-3"},t._l(t.menu,(function(e){return n("img",{key:e.id,staticStyle:{"border-radius":"15px","margin-bottom":"12px"},attrs:{width:"300px",src:e.thumbnail,alt:"image"},on:{click:function(n){return t.download(e.id)}}})})),0)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostPanel:n(714).default})}}]);