(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{811:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(38),n(44),n(117),n(325)),c=n(15),l=n(625),d=n.n(l),m=Object(o.c)({components:{VueTagsInput:d.a},setup:function(){},watchQuery:["cid"],data:function(){return{cid:this.$route.query.cid||null,title:"",thumbnail:"",src:"",date:(new Date).toISOString().split("T")[0],author:"",tags:[],sid:"",permission:0,display:!1,processing:!1,tag:""}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.cid){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,c.c.collection("courses").doc(t.cid).get();case 5:n=e.sent.data(),t.title=n.title,t.thumbnail=n.thumbnail,t.date=n.date,t.src=n.src,t.$refs.postPanel.post=n.post,t.author=n.author,t.tags=n.tags,t.sid=n.sid,t.permission=n.permission,t.display=n.display,e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),t.cid=null,alert(e.t0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})))()},methods:{upload:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,menu;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.processing=!0,n={title:t.title,src:t.src,thumbnail:t.thumbnail,post:t.$refs.postPanel.post,date:t.date,author:t.author,tags:t.tags,sid:t.sid,permission:t.permission,display:t.display},console.log("upload obj"),console.log(n),!t.cid){e.next=9;break}return e.next=7,c.c.collection("courses").doc(t.cid).set(n);case 7:e.next=13;break;case 9:return e.next=11,c.c.collection("courses").add(n);case 11:r=e.sent,t.cid=r.id;case 13:return o={cid:t.cid,title:t.title,thumbnail:t.thumbnail,author:t.author,date:t.date,tags:t.tags,sid:t.sid,permission:t.permission,display:t.display},(menu={})[t.cid]=o,e.next=18,c.c.collection("courses").doc("menu").set(menu,{merge:!0});case 18:window.history.pushState({},null,window.location.href.split("?")[0]+"?cid="+t.cid),t.processing=!1;case 20:case"end":return e.stop()}}),e)})))()},del:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var menu;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.cid){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,c.c.collection("courses").doc(t.vid).delete();case 4:return e.next=6,c.c.collection("courses").doc("menu").get();case 6:delete(menu=e.sent.data())[t.cid],c.c.collection("courses").doc("menu").set(menu),window.history.pushState({},null,window.location.href.split("?")[0]);case 10:case"end":return e.stop()}}),e)})))()}}}),v=n(40),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"uk-section"},[n("div",{staticClass:"uk-container"},[n("h1",[t._v("影片"+t._s(t.cid?"設定":"新增"))])])]),t._v(" "),n("div",{staticClass:"uk-section uk-section-default"},[n("div",{staticClass:"uk-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"date",id:"start"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),t._v(" "),n("div",{staticClass:"uk-margin"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"影片名稱"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"作者"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.thumbnail,expression:"thumbnail"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"縮圖網址"},domProps:{value:t.thumbnail},on:{input:function(e){e.target.composing||(t.thumbnail=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.src,expression:"src"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"影片連結"},domProps:{value:t.src},on:{input:function(e){e.target.composing||(t.src=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.sid,expression:"sid"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"策略名稱 SID"},domProps:{value:t.sid},on:{input:function(e){e.target.composing||(t.sid=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"uk-margin"},[n("vue-tags-input",{attrs:{tags:t.tags},on:{"tags-changed":function(e){return t.tags=e}},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}})],1),t._v(" "),n("div",{staticClass:"uk-margin"},[n("div",{staticClass:"uk-form-controls"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.permission,expression:"permission"}],staticClass:"uk-select",attrs:{id:"form-stacked-select"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.permission=e.target.multiple?n:n[0]}}},[n("option",{domProps:{value:0}},[t._v("所有用戶")]),t._v(" "),n("option",{domProps:{value:1}},[t._v("登入用戶")]),t._v(" "),n("option",{domProps:{value:2}},[t._v("VIP 月方案")]),t._v(" "),n("option",{domProps:{value:3}},[t._v("VIP 年方案")])])]),t._v("\n        "+t._s(t.permission)+"\n      ")]),t._v(" "),n("div",{staticClass:"uk-margin uk-grid-small uk-child-width-auto uk-grid"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.display,expression:"display"}],staticClass:"uk-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.display)?t._i(t.display,null)>-1:t.display},on:{change:function(e){var n=t.display,r=e.target,o=!!r.checked;if(Array.isArray(n)){var c=t._i(n,null);r.checked?c<0&&(t.display=n.concat([null])):c>-1&&(t.display=n.slice(0,c).concat(n.slice(c+1)))}else t.display=o}}}),t._v("\n          顯示影片")])]),t._v(" "),n("LazyPostPanel",{ref:"postPanel"}),t._v(" "),n("div",{staticClass:"uk-margin"},[n("button",{staticClass:"uk-button uk-button-primary",on:{click:t.upload}},[t._v("\n          "+t._s(t.processing?"上傳中":"儲存")+"\n        ")]),t._v(" "),t.cid?n("button",{staticClass:"uk-button uk-button-danger",on:{click:t.del}},[t._v("\n          刪除\n        ")]):t._e()])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);