(window.webpackJsonp=window.webpackJsonp||[]).push([[91,35,55],{565:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(38),n(325)),c=n(15),l="Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",d=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],f=["name","button","icon","url","logout","width","height"],i=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],s=function(t){return requestAnimationFrame((function(){return requestAnimationFrame(t)}))};function v(t,e,n,i,s,r,o,a,u,c){"boolean"!=typeof o&&(u=a,a=o,o=!1);var l,d="function"==typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),i&&(d._scopeId=i),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=l):e&&(l=o?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),l)if(d.functional){var f=d.render;d.render=function(t,e){return l.call(e),f(t,e)}}else{var v=d.beforeCreate;d.beforeCreate=v?[].concat(v,l):[l]}return n}var h=v({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"min-height":"200px"},attrs:{id:"disqus_thread"}})},staticRenderFns:[]},void 0,{name:"Disqus",props:{shortname:String,pageConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return d.includes(t)}))}},ssoConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return f.includes(t)}))}},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:function(){return{root:null,rootMargin:"300px",threshold:.5}}}},data:function(){return{observer:null}},computed:{getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(l);return t}},watch:{lang:function(){this.reset()}},mounted:function(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init:function(){var t=this;if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();var e=this.setBaseConfig;window.disqus_config=function(){e(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",(function(){return t.reset()}))},reset:function(t){void 0===t&&(t=window.DISQUS);var e=this.setBaseConfig;t.reset({reload:!0,config:function(){e(this)}})},observerDisqus:function(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&(e.observer.disconnect(),e.init())}))},loadEmbedScript:function(){var t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src="//"+this.getShortname+".disqus.com/embed.js",(t.head||t.body).appendChild(e)},setBaseConfig:function(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig:function(t){var e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus:function(t){var e=this;i.forEach((function(n){t.callbacks[n]=[function(t){e.$emit(n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),t)}]}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0),a=v({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"disqus-comment-count",attrs:{href:this.getHref,"data-disqus-url":this.getUrl,"data-disqus-identifier":this.identifier}})},staticRenderFns:[]},void 0,{name:"DisqusCount",inheritAttrs:!1,props:{url:String,shortname:String,identifier:{type:String,required:!0},tag:{type:String,default:"span"}},mounted:function(){this.init()},computed:{getHref:function(){return"a"===this.tag?this.url+"#disqus_thread":null},getUrl:function(){return"span"===this.tag?this.url:null},getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(l);return t}},methods:{init:function(){var t=this;if("DISQUSWIDGETS"in window)return s((function(){return t.reset()}));this.loadCountScript(),this.$route&&this.$watch("$route.path",(function(){return s((function(){return t.reset()}))}))},reset:function(t){void 0===t&&(t=window.DISQUSWIDGETS),t.getCount({reset:!0})},loadCountScript:function(){if(!document.getElementById("dsq-count-scr")){var t=document,e=t.createElement("script");e.async=!0,e.id="dsq-count-scr",e.src="//"+this.getShortname+".disqus.com/count.js",(t.head||t.body).appendChild(e)}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function u(t,e){void 0===e&&(e={}),t.component("Disqus",h),t.component("DisqusCount",a),t.prototype.$disqus={shortname:e.shortname||null,reset:null}}"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(u);var m=Object(o.c)({components:{Disqus:h},props:{fullPage:{default:!1}},data:function(){return{cid:this.$route.query.cid,course:null,pid:this.$route.query.pid}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.c.collection("courses").doc(t.cid).get();case 3:t.course=e.sent.data(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t.course={src:""};case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{changeVideo:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("change video",t),e.cid=t,n.prev=2,n.next=5,c.c.collection("courses").doc(t).get();case 5:e.course=n.sent.data(),r="/course?",e.$route.query.cid&&(r+="cid=".concat(t)),e.$route.query.pid&&(r+="&pid=".concat(e.$route.query.pid)),e.$router.push(r),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),e.course={src:""};case 15:case"end":return n.stop()}}),n,null,[[2,12]])})))()}},computed:{sectionHeight:function(){var t=window.innerWidth;if(t>600)return 9*(t-200)*3/4/16},isAdmin:function(){return!!this.$store.state.user&&"TJN4FDuqrwU8DML7DAjUYFIMutp2"===this.$store.state.user.uid}}}),_=n(40),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.course?n("div",[t.fullPage&&t.pid?n("div",{staticClass:"uk-grid-collapse",style:"height: "+t.sectionHeight+"px",attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-width-3-4@m uk-width-1-1 uk-background-secondary",attrs:{id:"video"}},[n("div",{staticClass:"uk-margin-large-left@m"},[n("LazyVideo",{key:t.cid,attrs:{src:t.course.src}})],1)]),t._v(" "),t.pid?n("div",{staticClass:"uk-width-1-4@m uk-width-1-1 uk-background-secondary",staticStyle:{"overflow-y":"scroll"},style:"height: "+t.sectionHeight+"px"},[n("LazyCoursePlayList",{attrs:{playListId:t.pid,activateCourseId:t.cid},on:{clickVideo:t.changeVideo}})],1):t._e()]):t.fullPage?n("div",{staticClass:"\n      uk-section\n      uk-section-secondary\n      uk-padding-remove-top\n      uk-padding-remove-bottom\n    "},[n("div",{staticClass:"uk-background-secondary uk-container uk-container-small"},[n("LazyVideo",{attrs:{src:t.course.src}})],1)]):n("div",[n("LazyVideo",{attrs:{src:t.course.src}})],1),t._v(" "),t.isAdmin?n("div",{staticClass:"uk-section"},[n("div",{staticClass:"uk-container uk-container-small"},[n("nuxt-link",{attrs:{to:"/course_edit?cid="+t.cid}},[n("button",{staticClass:"uk-button uk-button-primary"},[t._v("設定")])])],1)]):t._e(),t._v(" "),t.fullPage?n("div",{staticClass:"uk-section"},[n("div",{staticClass:"uk-container uk-container-small top-container"},[t.course.post?n("div",{staticClass:"uk-card uk-card-default uk-card-body post"},[n("h3",[t._v(t._s(t.course.title)+" 老師的話：")]),t._v(" "),n("div",{staticClass:"post",domProps:{innerHTML:t._s(t.course.post)}})]):t._e(),t._v(" "),n("div",{key:t.cid,staticClass:"uk-card uk-card-default uk-card-body"},[n("Disqus",{attrs:{shortname:"ai-finlab",pageConfig:{url:"https://ai.finlab.tw?cid"+t.cid,identifier:t.cid,title:t.course.title},language:"zh_TW"}})],1)])]):t._e(),t._v(" "),t.fullPage?t._e():n("a",{staticClass:"uk-button uk-button-default uk-width-1-1 uk-margin",attrs:{href:"#modal-sections","uk-toggle":""}},[t._v("講義與課程討論")]),t._v(" "),t.fullPage?t._e():n("div",{attrs:{id:"modal-sections","uk-modal":""}},[n("div",{staticClass:"uk-modal-dialog"},[n("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","uk-close":""}}),t._v(" "),n("div",{staticClass:"uk-modal-body post"},[n("div",{staticClass:"post",staticStyle:{"font-size":"1.5rem"},domProps:{innerHTML:t._s(t.course.post)}}),t._v(" "),n("div",{staticClass:"uk-margin-large"},[n("Disqus",{attrs:{shortname:"ai-finlab",pageConfig:{url:"https://ai.finlab.tw?cid"+t.cid,identifier:t.cid,title:t.course.title},language:"zh_TW"}})],1)])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},667:function(t,e,n){"use strict";n.r(e),n.d(e,"asyncRun",(function(){return y})),n.d(e,"interruptExecution",(function(){return v})),n.d(e,"setOutputCallBack",(function(){return m}));var r=n(25),o=n(621),c=(n(588),n(508),n(18),n(46),n(30),n(47),n(62),n(42),n(63),["id"]);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=new Worker("/webworker.js");function v(){}var h=function(data){return console.log(data.content)};function m(t){h=t}var _={};f.onmessage=function(t){if(t.data.finish){var e=t.data,n=e.id,data=Object(o.a)(e,c),r=_[n];delete _[n],r(data)}h(t.data)};var k,y=(k=0,function(script,t){return k=(k+1)%Number.MAX_SAFE_INTEGER,new Promise((function(e){_[k]=e,f.postMessage(d(d({},t),{},{python:script,id:k}))}))})},668:function(t,e,n){},669:function(t,e,n){},699:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(60),n(38),n(325)),c=n(15),l=Object(o.c)({data:function(){return{sid:this.$route.query.sid,uid:this.$route.query.uid,new_public_performance:this.$props.public_performance,new_public_position:this.$props.public_position,new_public_code:this.$props.public_code,generatingSocialImage:!1,shareImage:null}},props:{public_performance:!0,public_position:!1,public_code:!1},watch:{public_performance:function(t){this.new_public_performance=t},public_position:function(t){this.new_public_position=t},public_code:function(t){this.new_public_code=t}},methods:{updatePermission:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.state.user){e.next=3;break}return alert("請登入來操作"),e.abrupt("return");case 3:if(t.uid===t.$store.state.user.uid){e.next=6;break}return alert("此策略不屬於您，無法更改權限喔！"),e.abrupt("return");case 6:return n=c.c.collection("users").doc(t.uid).collection("strategies").doc(t.sid),e.next=9,n.update({public_performance:t.new_public_performance,public_position:t.new_public_position,public_code:t.new_public_code});case 9:return r=c.c.collection("users").doc(t.uid),(o={})[t.sid]={public_performance:t.new_public_performance,public_position:t.new_public_position,public_code:t.new_public_code},e.next=14,r.set({strategies:o},{merge:!0});case 14:case"end":return e.stop()}}),e)})))()},generateSocialImage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==t.generatingSocialImage){e.next=2;break}return e.abrupt("return");case 2:return t.generatingSocialImage=!0,n=null,e.prev=4,r="https://asia-east1-fdata-299302.cloudfunctions.net/social-image/?sid=".concat(t.$route.query.sid,"&uid=").concat(t.$route.query.uid,"&photoURL=").concat(t.$store.state.user.photoURL,"&author=").concat(t.$store.state.user.displayName,"&force=true"),o="https://asia-east1-fdata-299302.cloudfunctions.net/social-image/?sid=".concat(t.$route.query.sid,"&uid=").concat(t.$route.query.uid,"&photoURL=").concat(t.$store.state.user.photoURL,"&author=").concat(t.$store.state.user.displayName),e.next=9,t.$axios.get(r);case 9:e.sent,n=o,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log("fail to generate image",e.t0);case 16:return e.prev=16,c="https://ai.finlab.tw/strategy/?uid=".concat(t.$route.query.uid,"&sid=").concat(t.$route.query.sid),l={"User-Agent":"facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",Connection:"close"},e.next=21,t.$axios.get(c,{},{headers:l});case 21:e.sent,e.next=27;break;case 24:e.prev=24,e.t1=e.catch(16),console.log("fail to update crawler",e.t1);case 27:n&&(t.shareImage=n),t.generatingSocialImage=!1;case 29:case"end":return e.stop()}}),e,null,[[4,13],[16,24]])})))()}}}),d=n(40),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"modal-permission","uk-modal":""}},[n("div",{staticClass:"uk-modal-dialog uk-modal-body round-border"},[n("h2",{staticClass:"uk-modal-title"},[t._v("分享")]),t._v("\n    分享績效\n    "),n("div",{staticClass:"uk-margin"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.new_public_performance,expression:"new_public_performance"}],staticClass:"uk-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.new_public_performance=e.target.multiple?n:n[0]}}},[n("option",{domProps:{value:10}},[t._v("隱藏")]),t._v(" "),n("option",{domProps:{value:3}},[t._v("分享於VIP年用戶")]),t._v(" "),n("option",{domProps:{value:2}},[t._v("分享於VIP月用戶")]),t._v(" "),n("option",{domProps:{value:0}},[t._v("分享於所有用戶")])])]),t._v("\n    分享選股標的\n    "),n("div",{staticClass:"uk-margin"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.new_public_position,expression:"new_public_position"}],staticClass:"uk-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.new_public_position=e.target.multiple?n:n[0]}}},[n("option",{domProps:{value:10}},[t._v("隱藏")]),t._v(" "),n("option",{domProps:{value:3}},[t._v("分享於VIP年用戶")]),t._v(" "),n("option",{domProps:{value:2}},[t._v("分享於VIP月用戶")]),t._v(" "),n("option",{domProps:{value:0}},[t._v("分享於所有用戶")])])]),t._v("\n    分享程式碼\n    "),n("div",{staticClass:"uk-margin"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.new_public_code,expression:"new_public_code"}],staticClass:"uk-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.new_public_code=e.target.multiple?n:n[0]}}},[n("option",{domProps:{value:10}},[t._v("隱藏")]),t._v(" "),n("option",{domProps:{value:3}},[t._v("分享於VIP年用戶")]),t._v(" "),n("option",{domProps:{value:2}},[t._v("分享於VIP月用戶")]),t._v(" "),n("option",{domProps:{value:0}},[t._v("分享於所有用戶")])])]),t._v(" "),n("div",{staticClass:"uk-margin-large",staticStyle:{border:"1px solid #ddd"}},[0===t.$props.public_performance&&this.$store.state.user?n("button",{staticClass:"uk-button",on:{click:t.generateSocialImage}},[t._v("\n        "+t._s(!1===t.generatingSocialImage?"產生分享圖片":"產生中(約30秒)...")+"\n      ")]):t._e(),t._v(" "),t.shareImage?n("img",{attrs:{width:"100%",src:t.shareImage,alt:"顯示圖片"}}):t._e()]),t._v(" "),n("p",{staticClass:"uk-text-right"},[n("button",{staticClass:"uk-button uk-button-default uk-modal-close",attrs:{type:"button"}},[t._v("\n        取消\n      ")]),t._v(" "),n("button",{staticClass:"uk-button uk-button-primary uk-modal-close",attrs:{type:"button"},on:{click:t.updatePermission}},[t._v("\n        確認\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},728:function(t,e,n){},729:function(t,e,n){"use strict";n(668)},730:function(t,e,n){"use strict";n(669)},820:function(t,e,n){"use strict";n.r(e);n(46),n(30),n(47),n(62),n(42),n(63);var r=n(8),o=n(25),c=(n(38),n(60),n(48),n(155),n(362),n(489),n(18),n(33),n(490),n(491),n(492),n(493),n(494),n(495),n(497),n(498),n(499),n(500),n(501),n(502),n(503),n(28),n(463),n(325)),l=n(504),d=(n(505),n(728),n(506),n(507),n(15)),f=n(54),v=n(94),h=n.n(v),m=n(164),_=n(667);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=Object(c.c)({setup:function(){},components:{codemirror:l.codemirror},data:function(){var t=this;return{sid:this.$route.query.sid,uid:this.$route.query.uid,editsid:this.$route.query.sid,playgroundEnabled:!1,newsid:this.$route.query.sid,isChangingName:!1,strategyBuilder:{numVars:[],boolVars:[],sorting:{target:null,topn:20,type:"largest"},backtest:{resample:"M",stop_loss:"",take_profit:"",position_limit:"",trade_at_price:"close"}},idle:!1,initialized:!1,isFirstRound:!0,lastOutputId:0,cells:[],saveInfo:"",isUploading:!1,runningInfo:"",uniqueCellId:0,currentEditor:null,downloadError:!1,showBlockly:!1,blockly:'<xml><block type="backtest"></block></xml>',panels:["回測結果","插入語法","策略筆記"],currentPanel:"default",cmOptions:{autofocus:!1,tabSize:2,mode:"python",lineNumbers:!0,theme:"idle",line:!0,autoCloseBrackets:!0,scrollbarStyle:"native",viewportMargin:1/0,extraKeys:{"Ctrl-Enter":function(e){var n=t.findCellId(e);t.runCell(n)},"Shift-Enter":function(e){var n=t.findCellId(e);if(t.runCell(n),n==t.cells.length-1)t.addCell(t.cells.length);else{var r=t.cells[parseInt(n)+1].cellId;t.$refs["editor".concat(r)][0].codemirror.focus()}}}}}},mounted:function(){this.initalize()},beforeDestroy:function(){this.isAuthor()&&this.upload()},destroyed:function(){this.cancelRealTimeUpdate()},methods:y({updateStrategyBuilder:function(t){this.strategyBuilder=JSON.parse(t)},callbackStrategyBuilderInsertBlock:function(t){this.$refs.strategyBuilder&&this.$refs.strategyBuilder.addCodeAndType(t)},backtestStrategyBuilder:function(code){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.state.user){e.next=3;break}return h.a.modal("#login-ui").show(),e.abrupt("return");case 3:if(!t.isFirstRound){e.next=7;break}return e.next=6,Object(_.asyncRun)("\nimport os\nos.environ['FINLAB_FORCED_STRATEGY_NAME'] = \"".concat(t.editsid,"\"\nos.environ['finlab_id_token'] = \"").concat(t.$store.state.api_token,"\"\nos.environ['FINLAB_API_TOKEN'] = \"").concat(t.$store.state.api_token,'"\n'));case 6:t.isFirstRound=!1;case 7:return t.lastOutputId+=1,t.cells[0].output=[],t.cells[0].outputId=t.lastOutputId,t.cells[0].isRunning=!0,t.idle=!1,e.next=14,Object(_.asyncRun)(code);case 14:t.idle=!0;case 15:case"end":return e.stop()}}),e)})))()},initalize:function(){this.isAuthor()||(this.editsid="playground");var t=this;window.addEventListener("message",(function(e){console.log("receive message event"),"string"==typeof e.data&&"resize"===e.data.slice(0,6)&&t.resizeIframe(e.data.slice(7))})),this.$store.commit("setSidebar",!1),this.initializeUI()},resizeIframe:function(t){var e=document.getElementById(t);e&&(e.style.height=e.contentWindow.document.documentElement.scrollHeight+"px",console.log(e.contentWindow.document.documentElement.scrollHeight))},initializeUI:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0==t.cells.length&&t.addCell(),e.next=3,t.download();case 3:return-1===window.navigator.userAgent.indexOf("Prerender")&&t.setRealTimeUpdate({uid:t.uid,sid:t.sid}),e.next=6,t.setupPyodide();case 6:case"end":return e.stop()}}),e)})))()},addCell:function(i){this.cells.splice(i,0,this.createCell())},removeCell:function(i){var t=Math.min(i,this.cells.length-1);this.cells.splice(t,1)},createCell:function(){return this.uniqueCellId+=1,{code:"",output:[],outputId:-1,cellId:this.uniqueCellId,isRunning:!1}},onCellFocus:function(t){this.currentEditor=t},findCellId:function(t){for(var e in this.cells)if(this.$refs["editor".concat(this.cells[e].cellId)][0].codemirror===t)return e},download:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.uid&&t.sid){e.next=2;break}return e.abrupt("return");case 2:return n=null,e.prev=3,e.next=6,Object(d.d)("users/".concat(t.uid,"/strategies/").concat(t.sid,"/codes"),"code",!1);case 6:null===(n=e.sent)&&(n={code:'# 沒有程式碼在雲端喔！\n# 此編輯器只能支援簡易策略，進階功能可以到 Colab 上使用喔！\n# https://colab.research.google.com/ \nprint("hello world")'}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),t.downloadError=!0,t.cells[0].code="# 程式碼需較高權限才能察看";case 14:if(null!==n){e.next=16;break}return e.abrupt("return");case 16:if(n.code&&("string"==typeof n.code||n.code instanceof String))t.cells[0].code=n.code;else if(Array.isArray(n.code)){for(r in n.code)t.addCell(t.cells.length),t.cells[t.cells.length-1].code=n.code[r];t.removeCell(0)}t.$nextTick((function(){if(console.log("ticks"),!t.$route.query.cid&&!t.showBlockly){var e=t.cells[0].cellId;console.log(t.$refs["editor".concat(e)]),t.$refs["editor".concat(e)][0].codemirror.focus()}})),console.log("download",n),void 0!==n.strategyBuilder&&null!==n.strategyBuilder&&(console.log("parsing"),t.strategyBuilder=JSON.parse(n.strategyBuilder),console.log("showing"),"strategyBuilder"===n.mode&&(t.showBlockly=!0)),t.saveInfo="程式下載成功";case 21:case"end":return e.stop()}}),e,null,[[3,10]])})))()},author:function(){return this.$store.state.user?this.$store.state.user.uid:null},isAuthor:function(){return!!this.$store.state.user&&this.uid===this.$store.state.user.uid},upload:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,f,v,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.uid&&t.editsid){e.next=2;break}return e.abrupt("return");case 2:if(t.$store.state.userInfo.info){e.next=5;break}return alert("請登入來使用儲存功能"),e.abrupt("return");case 5:if(t.isAuthor()){e.next=8;break}return alert("此策略並非您所有，請使用重新命名，來儲存成您的策略喔！"),e.abrupt("return");case 8:for(r in t.isUploading=!0,t.saveInfo="上傳中...",n=[],t.cells)n.push(t.cells[r].code);return o=null,c=null,t.$refs.strategyBuilder&&(o=t.$refs.strategyBuilder.generateCode(),c=JSON.stringify(t.strategyBuilder)),e.prev=15,l=t.$store.state.user.uid,f=d.c.collection("users").doc(l),v=d.c.collection("users").doc(l).collection("strategies").doc(t.editsid),e.next=21,v.collection("codes").doc("code").set({code:n,strategyBuilder:c,strategyBuilderCode:o,mode:t.showBlockly?"strategyBuilder":"code"},{merge:!0});case 21:(h=t.$store.state.userInfo.info.strategies)||(h={}),t.editsid in h||(m={annual_return:0,max_drawdown:0,sharpe_ratio:0,cumulative_return:new Array(20).fill(0),last_updated:new Date,ndays_return:{1:0,5:0,20:0,60:0},public_performance:10,public_code:10,public_position:10,next_trading_date:new Date,stop_actions:!1,codeOnly:!0},h[t.editsid]=m,f.set({strategies:h},{merge:!0})),e.next=30;break;case 26:e.prev=26,e.t0=e.catch(15),alert("上傳失敗：".concat(e.t0.message)),console.log(e.t0);case 30:void 0!==t.$refs.postPanel&&t.$refs.postPanel.uploadPost(),t.isUploading=!1,t.saveInfo="上傳成功";case 33:case"end":return e.stop()}}),e,null,[[15,26]])})))()},rename:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var script;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.state.userInfo.info){e.next=3;break}return alert("請登入來使用命名功能"),e.abrupt("return");case 3:return t.isChangingName=!0,e.prev=4,e.next=7,Object(m.b)(t.$route.query.uid,t.$route.query.sid,t.$store.state.user.uid,t.newsid);case 7:e.next=15;break;case 9:return e.prev=9,e.t0=e.catch(4),alert(e.t0),t.isChangingName=!1,h.a.modal("#modal-rename").hide(),e.abrupt("return");case 15:if(!t.isAuthor()){e.next=18;break}return e.next=18,Object(m.c)(t.$route.query.uid,t.$route.query.sid);case 18:return e.next=20,t.cancelRealTimeUpdate();case 20:return e.next=22,t.setRealTimeUpdate({uid:t.$store.state.user.uid,sid:t.newsid});case 22:h.a.modal("#modal-rename").hide(),t.isChangingName=!1,t.$router.push("/notebook/?uid=".concat(t.$store.state.user.uid,"&sid=").concat(t.newsid)),t.sid=t.newsid,t.uid=t.$store.state.user.uid,script="import os;os.environ['FINLAB_FORCED_STRATEGY_NAME'] = \"".concat(t.editsid,'"'),Object(_.asyncRun)(script),t.editsid=t.newsid;case 30:case"end":return e.stop()}}),e,null,[[4,9]])})))()},setupPyodide:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,Object(_.setOutputCallBack)((function(data){for(var e in data instanceof Map&&(data=Object.fromEntries(data)),"py_global_update"===data.type&&((null===n.strategy||null===n.strategy.info||n.editsid!==n.sid&&!n.playgroundEnabled)&&-1===window.navigator.userAgent.indexOf("Prerender")&&(n.setRealTimeUpdate({uid:n.$store.state.user.uid,sid:n.editsid}),n.playgroundEnabled=!0),n.currentPanel="回測結果",n.$store.commit("strategy/setUploading",!0)),t.cells)if(t.cells[e].outputId===data.id){"content"in data&&void 0!==data.content&&t.cells[e].output.push(data),data.finish&&(t.cells[e].isRunning=!1);break}data.finish&&(t.lastOutputId=data.id,t.checkIdle())})),"\nfrom finlab import data\ndata.universe_stocks = {}",e.next=5,Object(_.asyncRun)("\nfrom finlab import data\ndata.universe_stocks = {}",{});case 5:r=e.sent,r.result,r.error,t.idle=!0,console.log("7. end pyodide");case 10:case"end":return e.stop()}}),e)})))()},runCell:function(i){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.state.user){e.next=3;break}return h.a.modal("#login-ui").show(),e.abrupt("return");case 3:if(!t.isFirstRound){e.next=7;break}return e.next=6,Object(_.asyncRun)("\nimport os\nos.environ['FINLAB_FORCED_STRATEGY_NAME'] = \"".concat(t.editsid,"\"\nos.environ['finlab_id_token'] = \"").concat(t.$store.state.api_token,"\"\nos.environ['FINLAB_API_TOKEN'] = \"").concat(t.$store.state.api_token,'"\n'));case 6:t.isFirstRound=!1;case 7:t.lastOutputId+=1,t.cells[i].output=[],t.cells[i].outputId=t.lastOutputId,t.cells[i].isRunning=!0,t.idle=!1,Object(_.asyncRun)(t.cells[i].code);case 13:case"end":return e.stop()}}),e)})))()},runBlockly:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,code;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,null,void 0!==t.$refs.blocklyEditor&&(code=t.$refs.blocklyEditor.getCode(),n=code[0],code[1]),t.idle=!1,e.next=6,Object(_.asyncRun)(n);case 6:t.idle=!0;case 7:case"end":return e.stop()}}),e)})))()},resetPyodide:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.idle=!1,e.next=3,t.setupPyodide();case 3:t.idle=!0;case 4:case"end":return e.stop()}}),e)})))()},checkIdle:function(){var t=!0;for(var e in this.cells)if(this.cells[e].isRunning){t=!1;break}this.idle=t},insertSnippist:function(t){if(null!==this.currentEditor||this.showBlockly){if(null!==this.currentEditor)try{var e=this.currentEditor,n=e.getDoc(),cursor=n.getCursor(),line=n.getLine(cursor.line),r={line:cursor.line,ch:line.length};0!==r.ch?t="\n"+t:t+="\n",n.replaceRange(t,r),e.focus()}catch(t){alert(t)}}else alert("請先點選想要插入語法的地方")}},Object(f.b)({setRealTimeUpdate:"strategy/setRealTimeUpdate",cancelRealTimeUpdate:"strategy/cancelRealtimeUpdate"})),computed:y(y({},Object(f.c)({strategy:"strategy",api_token:"api_token"})),{},{displayPanel:function(){return"default"===this.currentPanel?this.strategy&&this.strategy.info?"回測結果":"插入語法":this.currentPanel},renameInfo:function(){var t=Object(m.a)(this.newsid);return t[0]?"":t[1]}}),watch:{idle:function(t){!0===t&&(this.initialized=!0)},api_token:function(){this.isFirstRound=!0}}}),C=(n(729),n(730),n(40)),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-background-muted",staticStyle:{height:"calc(100vh - 64px)"}},[n("div",{staticClass:"dark-muted"},[n("div",{staticClass:"uk-margin-large-left uk-margin-large-right"},[n("div",{staticClass:"uk-flex uk-flex-middle",attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-margin-top"},[n("ul",{attrs:{"uk-tab":""}},[n("li",[n("h1",{staticClass:"uk-text-primary",staticStyle:{margin:"0","font-size":"1.3rem"}},[t._v(t._s(t.sid))])]),t._v(" "),n("li",[n("div",{staticClass:"uk-button-group dark-dark-muted"},[t.isAuthor()?[n("button",{staticClass:"uk-button uk-button-default uk-button-small",attrs:{disabled:t.isUploading},on:{click:t.upload}},[t._v("\n                    存檔"),t.isUploading?n("span",[t._v("中")]):t._e()])]:t._e(),t._v(" "),n("button",{staticClass:"uk-button uk-button-default uk-button-small ",attrs:{disabled:!t.idle,"uk-toggle":"target: #modal-rename"}},[t._v("\n                  "+t._s(t.isAuthor()?"重新命名":"複製策略")+"\n                ")]),t.isAuthor()?n("button",{staticClass:"uk-button uk-button-default uk-button-small",attrs:{"uk-toggle":"target: #modal-permission"}},[t._v("\n                  權限\n                ")]):t._e()],2)]),t._v(" "),n("li",{class:{"uk-active":!t.showBlockly},on:{click:function(e){t.showBlockly=!1}}},[n("a",[t._v("撰寫程式")])]),t._v(" "),n("li",{class:{"uk-active":t.showBlockly},on:{click:function(e){t.showBlockly=!0}}},[n("a",[t._v("策略拼圖 BETA")])])])]),t._v(" "),n("div",{staticClass:"uk-width-expand"}),t._v(" "),n("div",[n("div",[n("ul",{staticClass:"uk-flex-right",staticStyle:{margin:"0"},attrs:{"uk-tab":""}},t._l(t.panels,(function(p){return n("li",{key:"panel "+p,staticClass:"uk-padding-remove-bottom",class:{"uk-active":p===t.displayPanel},staticStyle:{height:"1.4rem"},on:{click:function(e){t.currentPanel=p===t.currentPanel?"":p}}},[n("a",[t._v(t._s(p))])])})),0)])])])])]),t._v(" "),n("div",{staticClass:"uk-grid-collapse",attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-width-expand coding-panel",staticStyle:{"padding-right":"24px"}},[t.$route.query.cid?n("div",{staticStyle:{"padding-left":"36px"}},[n("CoursePanel",{key:t.api_token,attrs:{fullPage:!1}})],1):t._e(),t._v(" "),n("div",{staticClass:"uk-text-right uk-text-small"},[t._v("\n        "+t._s(t.initialized?"Python":"正在啟動中，第一次可能需要 1 ~ 5 分鐘...")+"\n\n        "),t.idle?n("span",{staticClass:"uk-icon-button",staticStyle:{color:"#18b89b"},attrs:{"uk-icon":"icon: check"}}):n("div",{staticClass:"uk-icon-button",attrs:{"uk-spinner":""}})]),t._v(" "),t.showBlockly?n("div",[n("LazyStrategyBuilder",{ref:"strategyBuilder",attrs:{initStrategy:t.strategyBuilder,isLoading:!t.idle},on:{onChangeStrategy:t.updateStrategyBuilder,backtest:t.backtestStrategyBuilder}}),t._v(" "),n("div",{staticClass:"uk-margin-large-left uk-margin-top",staticStyle:{"min-height":"80vh"}},t._l(t.cells[0].output,(function(e,r){return n("div",{key:"output-strategy-builder-"+r},["text"===e.type&&""!==e.content?n("div",[n("div",{staticClass:"uk-overflow-auto"},[n("div",[t._v("\n                  "+t._s(e.content)+"\n                ")])])]):t._e(),t._v(" "),"html"===e.type?n("div",{staticClass:"uk-overflow-auto"},[n("div",{domProps:{innerHTML:t._s(e.content)}})]):t._e(),t._v(" "),"iframe"===e.type?n("div",{staticClass:"uk-overflow-auto"},[n("iframe",{attrs:{id:"iframe-"+e.id,srcdoc:e.content,width:"100%",scrolling:"auto"}})]):t._e(),t._v(" "),"error"===e.type?n("div",{staticStyle:{"white-space":"pre"}},[n("div",{staticClass:"uk-overflow-auto"},[n("div",{domProps:{innerHTML:t._s(e.content)}})])]):t._e()])})),0)],1):n("div",{staticClass:"notebook uk-resize"},[t._l(t.cells,(function(e,i){return n("div",{key:"cell"+e.cellId},[n("div",{staticClass:"uk-grid uk-grid-collapse"},[n("div",[!e.isRunning&&t.initialized?n("a",{staticClass:"uk-icon-button",staticStyle:{"font-size":"1.5rem",color:"#333"},attrs:{"uk-tooltip":"title: 執行; pos: top"},on:{click:function(e){return t.runCell(i)}}},[n("font-awesome-icon",{attrs:{icon:"play-circle"}})],1):n("div",{staticClass:"uk-icon-button",attrs:{"uk-spinner":""},on:{click:function(e){return t.interruptExecution()}}})]),t._v(" "),n("div",{staticClass:"shadow uk-width-expand"},[n("codemirror",{ref:"editor"+e.cellId,refInFor:!0,attrs:{options:t.cmOptions},on:{focus:t.onCellFocus},model:{value:e.code,callback:function(n){t.$set(e,"code",n)},expression:"c.code"}})],1)]),t._v(" "),0!==e.output.length?n("div",{staticClass:"\n              uk-padding-small uk-padding-remove-left uk-padding-remove-right\n            "},[n("div",{staticClass:"uk-grid-collapse",attrs:{"uk-grid":""}},[n("div",{staticStyle:{width:"36px","text-align":"center"}},[t._v("\n                "+t._s("["+e.outputId+"]")+"\n              ")]),t._v(" "),n("div",{staticClass:"uk-width-expand"},t._l(e.output,(function(e,r){return n("div",{key:"output"+r+" "+i},["text"===e.type&&""!==e.content?n("div",[n("div",{staticClass:"uk-overflow-auto"},[n("div",[t._v("\n                        "+t._s(e.content)+"\n                      ")])])]):t._e(),t._v(" "),"html"===e.type?n("div",{staticClass:"uk-overflow-auto"},[n("div",{domProps:{innerHTML:t._s(e.content)}})]):t._e(),t._v(" "),"iframe"===e.type?n("div",{staticClass:"uk-overflow-auto"},[n("iframe",{attrs:{id:"iframe-"+e.id,srcdoc:e.content,width:"100%",scrolling:"auto"}})]):t._e(),t._v(" "),"error"===e.type?n("div",{staticStyle:{"white-space":"pre"}},[n("div",{staticClass:"uk-overflow-auto"},[n("div",{domProps:{innerHTML:t._s(e.content)}})])]):t._e()])})),0)])]):t._e(),t._v(" "),n("div",{staticClass:"uk-text-center"},[n("a",{staticClass:"uk-icon-button",attrs:{"uk-icon":"plus","uk-tooltip":"新增下方程式"},on:{click:function(e){return t.addCell(i+1)}}}),t._v(" "),n("a",{staticClass:"uk-icon-button",attrs:{"uk-icon":"minus","uk-tooltip":"刪除下方程式"},on:{click:function(e){return t.removeCell(i+1)}}})])])})),t._v(" "),n("div",{staticClass:"uk-height-large"})],2)]),t._v(" "),""!==t.displayPanel?n("div",{staticClass:"uk-width-2-5@m uk-width-1-1 coding-panel shadow"},[n("div",[n("div",{staticClass:"uk-card uk-card-default",staticStyle:{"min-height":"calc(100vh - 128px)"}},["插入語法"===t.displayPanel?n("div",{staticClass:"uk-padding-small"},[n("LazyCodeSnippist",{on:{insertCode:t.insertSnippist,insertCodeAndType:t.callbackStrategyBuilderInsertBlock}})],1):t._e(),t._v(" "),"回測結果"===t.displayPanel?n("div",{staticClass:"uk-padding-small uk-padding-remove-right uk-padding-remove-top",staticStyle:{"overflow-x":"hidden"}},[t.strategy&&t.strategy.info?n("LazyStrategyPanel",{ref:"strategyPanel",attrs:{strategy:t.strategy.info,uid:t.playgroundEnabled?t.author():this.uid,sid:t.playgroundEnabled?this.editsid:this.sid,viewmode:!0}}):n("div",{staticClass:"uk-text-center"},[t.isUploading?n("span",{attrs:{"uk-spinner":"ratio: 4.5"}}):t._e()])],1):t._e(),t._v(" "),"策略筆記"===t.displayPanel?n("div",{staticClass:"uk-padding-small"},[n("LazyPostPanel",{ref:"postPanel",attrs:{collection:"users/"+this.uid+"/strategies/"+this.sid+"/articles",document:"article"}})],1):t._e()])])]):t._e()]),t._v(" "),n("div",{attrs:{id:"modal-rename","uk-modal":""}},[n("div",{staticClass:"uk-modal-dialog uk-modal-body round-border"},[n("h3",{staticClass:"uk-modal-title",staticStyle:{"font-weight":"300"}},[t._v("\n        "+t._s(t.isAuthor()?"重新命名":"複製策略")+"\n      ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newsid,expression:"newsid"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"複製的策略名稱",autocomplete:"off"},domProps:{value:t.newsid},on:{input:function(e){e.target.composing||(t.newsid=e.target.value)}}}),t._v(" "),n("span",{staticStyle:{color:"#c9187a"}},[t._v(t._s(t.renameInfo))]),t._v(" "),n("p",{staticClass:"uk-text-right"},[n("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button",disabled:t.isChangingName||""!==t.renameInfo},on:{click:t.rename}},[t._v("\n          "+t._s(t.isChangingName?"命名中...":t.isAuthor()?"重新命名":"複製策略")+"\n        ")])])])]),t._v(" "),t.strategy&&t.strategy.info?[n("PermissionPanel",{attrs:{public_performance:t.strategy.info.public_performance,public_code:t.strategy.info.public_code,public_position:t.strategy.info.public_position}})]:[n("PermissionPanel",{attrs:{public_performance:0,public_code:0,public_position:0}})]],2)}),[],!1,null,"a11cd400",null);e.default=component.exports;installComponents(component,{CoursePanel:n(565).default,PermissionPanel:n(699).default})}}]);