(window.webpackJsonp=window.webpackJsonp||[]).push([[79,35],{575:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(38),n(325)),c=n(15),d="Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",l=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],h=["name","button","icon","url","logout","width","height"],i=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],s=function(t){return requestAnimationFrame((function(){return requestAnimationFrame(t)}))};function f(t,e,n,i,s,r,o,a,u,c){"boolean"!=typeof o&&(u=a,a=o,o=!1);var d,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),i&&(l._scopeId=i),r?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=d):e&&(d=o?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),d)if(l.functional){var h=l.render;l.render=function(t,e){return d.call(e),h(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,d):[d]}return n}var v=f({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"min-height":"200px"},attrs:{id:"disqus_thread"}})},staticRenderFns:[]},void 0,{name:"Disqus",props:{shortname:String,pageConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return l.includes(t)}))}},ssoConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return h.includes(t)}))}},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:function(){return{root:null,rootMargin:"300px",threshold:.5}}}},data:function(){return{observer:null}},computed:{getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(d);return t}},watch:{lang:function(){this.reset()}},mounted:function(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init:function(){var t=this;if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();var e=this.setBaseConfig;window.disqus_config=function(){e(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",(function(){return t.reset()}))},reset:function(t){void 0===t&&(t=window.DISQUS);var e=this.setBaseConfig;t.reset({reload:!0,config:function(){e(this)}})},observerDisqus:function(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&(e.observer.disconnect(),e.init())}))},loadEmbedScript:function(){var t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src="//"+this.getShortname+".disqus.com/embed.js",(t.head||t.body).appendChild(e)},setBaseConfig:function(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig:function(t){var e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus:function(t){var e=this;i.forEach((function(n){t.callbacks[n]=[function(t){e.$emit(n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),t)}]}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0),a=f({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"disqus-comment-count",attrs:{href:this.getHref,"data-disqus-url":this.getUrl,"data-disqus-identifier":this.identifier}})},staticRenderFns:[]},void 0,{name:"DisqusCount",inheritAttrs:!1,props:{url:String,shortname:String,identifier:{type:String,required:!0},tag:{type:String,default:"span"}},mounted:function(){this.init()},computed:{getHref:function(){return"a"===this.tag?this.url+"#disqus_thread":null},getUrl:function(){return"span"===this.tag?this.url:null},getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(d);return t}},methods:{init:function(){var t=this;if("DISQUSWIDGETS"in window)return s((function(){return t.reset()}));this.loadCountScript(),this.$route&&this.$watch("$route.path",(function(){return s((function(){return t.reset()}))}))},reset:function(t){void 0===t&&(t=window.DISQUSWIDGETS),t.getCount({reset:!0})},loadCountScript:function(){if(!document.getElementById("dsq-count-scr")){var t=document,e=t.createElement("script");e.async=!0,e.id="dsq-count-scr",e.src="//"+this.getShortname+".disqus.com/count.js",(t.head||t.body).appendChild(e)}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function u(t,e){void 0===e&&(e={}),t.component("Disqus",v),t.component("DisqusCount",a),t.prototype.$disqus={shortname:e.shortname||null,reset:null}}"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(u);var m=Object(o.c)({components:{Disqus:v},props:{fullPage:{default:!1}},data:function(){return{cid:this.$route.query.cid,course:null,pid:this.$route.query.pid}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.c.collection("courses").doc(t.cid).get();case 3:t.course=e.sent.data(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t.course={src:""};case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{changeVideo:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("change video",t),e.cid=t,n.prev=2,n.next=5,c.c.collection("courses").doc(t).get();case 5:e.course=n.sent.data(),r="/course?",e.$route.query.cid&&(r+="cid=".concat(t)),e.$route.query.pid&&(r+="&pid=".concat(e.$route.query.pid)),e.$router.push(r),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),e.course={src:""};case 15:case"end":return n.stop()}}),n,null,[[2,12]])})))()}},computed:{sectionHeight:function(){var t=window.innerWidth;if(t>600)return 9*(t-200)*3/4/16},isAdmin:function(){return!!this.$store.state.user&&"TJN4FDuqrwU8DML7DAjUYFIMutp2"===this.$store.state.user.uid}}}),k=n(40),component=Object(k.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.course?n("div",[t.fullPage&&t.pid?n("div",{staticClass:"uk-grid-collapse",style:"height: "+t.sectionHeight+"px",attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-width-3-4@m uk-width-1-1 uk-background-secondary",attrs:{id:"video"}},[n("div",{staticClass:"uk-margin-large-left@m"},[n("LazyVideo",{key:t.cid,attrs:{src:t.course.src}})],1)]),t._v(" "),t.pid?n("div",{staticClass:"uk-width-1-4@m uk-width-1-1 uk-background-secondary",staticStyle:{"overflow-y":"scroll"},style:"height: "+t.sectionHeight+"px"},[n("LazyCoursePlayList",{attrs:{playListId:t.pid,activateCourseId:t.cid},on:{clickVideo:t.changeVideo}})],1):t._e()]):t.fullPage?n("div",{staticClass:"\n      uk-section\n      uk-section-secondary\n      uk-padding-remove-top\n      uk-padding-remove-bottom\n    "},[n("div",{staticClass:"uk-background-secondary uk-container uk-container-small"},[n("LazyVideo",{attrs:{src:t.course.src}})],1)]):n("div",[n("LazyVideo",{attrs:{src:t.course.src}})],1),t._v(" "),t.isAdmin?n("div",{staticClass:"uk-section"},[n("div",{staticClass:"uk-container uk-container-small"},[n("nuxt-link",{attrs:{to:"/course_edit?cid="+t.cid}},[n("button",{staticClass:"uk-button uk-button-primary"},[t._v("設定")])])],1)]):t._e(),t._v(" "),t.fullPage?n("div",{staticClass:"uk-section"},[n("div",{staticClass:"uk-container uk-container-small top-container"},[t.course.post?n("div",{staticClass:"uk-card uk-card-default uk-card-body post"},[n("h3",[t._v(t._s(t.course.title)+" 老師的話：")]),t._v(" "),n("div",{staticClass:"post",domProps:{innerHTML:t._s(t.course.post)}})]):t._e(),t._v(" "),n("div",{key:t.cid,staticClass:"uk-card uk-card-default uk-card-body"},[n("Disqus",{attrs:{shortname:"ai-finlab",pageConfig:{url:"https://ai.finlab.tw?cid"+t.cid,identifier:t.cid,title:t.course.title},language:"zh_TW"}})],1)])]):t._e(),t._v(" "),t.fullPage?t._e():n("a",{staticClass:"uk-button uk-button-default uk-width-1-1 uk-margin",attrs:{href:"#modal-sections","uk-toggle":""}},[t._v("講義與課程討論")]),t._v(" "),t.fullPage?t._e():n("div",{attrs:{id:"modal-sections","uk-modal":""}},[n("div",{staticClass:"uk-modal-dialog"},[n("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","uk-close":""}}),t._v(" "),n("div",{staticClass:"uk-modal-body post"},[n("div",{staticClass:"post",staticStyle:{"font-size":"1.5rem"},domProps:{innerHTML:t._s(t.course.post)}}),t._v(" "),n("div",{staticClass:"uk-margin-large"},[n("Disqus",{attrs:{shortname:"ai-finlab",pageConfig:{url:"https://ai.finlab.tw?cid"+t.cid,identifier:t.cid,title:t.course.title},language:"zh_TW"}})],1)])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},932:function(t,e,n){"use strict";n.r(e);var r=n(40),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("CoursePanel",{attrs:{fullPage:!0}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CoursePanel:n(575).default})}}]);