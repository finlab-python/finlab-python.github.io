(window.webpackJsonp=window.webpackJsonp||[]).push([[82,33],{340:function(t,e,r){"use strict";var n=r(10),o=r(81),c=r(41),d=r(59),l=r(20),v=r(11),f=r(350),h=r(154),k=r(351),_=r(352),m=r(92),y=r(353),C=[],x=C.sort,w=v((function(){C.sort(void 0)})),A=v((function(){C.sort(null)})),L=h("sort"),D=!v((function(){if(m)return m<70;if(!(k&&k>3)){if(_)return!0;if(y)return y<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)C.push({k:t+r,v:e})}for(C.sort((function(a,b){return b.v-a.v})),r=0;r<C.length;r++)t=C[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:w||!A||!L||!D},{sort:function(t){void 0!==t&&o(t);var e=c(this);if(D)return void 0===t?x.call(e):x.call(e,t);var r,n,v=[],h=d(e);for(n=0;n<h;n++)n in e&&v.push(e[n]);for(v=f(v,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:l(e)>l(r)?1:-1}}(t)),r=v.length,n=0;n<r;)e[n]=v[n++];for(;n<h;)delete e[n++];return e}})},350:function(t,e){var r=Math.floor,n=function(t,e){var d=t.length,l=r(d/2);return d<8?o(t,e):c(n(t.slice(0,l),e),n(t.slice(l),e),e)},o=function(t,e){for(var element,r,n=t.length,i=1;i<n;){for(r=i,element=t[i];r&&e(t[r-1],element)>0;)t[r]=t[--r];r!==i++&&(t[r]=element)}return t},c=function(t,e,r){for(var n=t.length,o=e.length,c=0,d=0,l=[];c<n||d<o;)c<n&&d<o?l.push(r(t[c],e[d])<=0?t[c++]:e[d++]):l.push(c<n?t[c++]:e[d++]);return l};t.exports=n},351:function(t,e,r){var n=r(80).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},352:function(t,e,r){var n=r(80);t.exports=/MSIE|Trident/.test(n)},353:function(t,e,r){var n=r(80).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},530:function(t,e,r){},579:function(t,e,r){t.exports=r.p+"img/default-background.56fec8b.png"},580:function(t,e,r){"use strict";r(530)},640:function(t,e,r){},729:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(38),r(60),r(18),r(28),r(325)),c=Object(o.c)({props:{v:{default:null}},methods:{gotoCourse:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.pid){r.next=16;break}n=null,r.t0=regeneratorRuntime.keys(t.episodes);case 3:if((r.t1=r.t0()).done){r.next=10;break}if(o=r.t1.value,!("course_id"in t.episodes[o])){r.next=8;break}return n=t.episodes[o].course_id,r.abrupt("break",10);case 8:r.next=3;break;case 10:if(n){r.next=13;break}return alert("cannot find course ID"),r.abrupt("return");case 13:e.$router.push("/course?cid=".concat(n,"&pid=").concat(t.pid)),r.next=17;break;case 16:t.sid&&t.cid?e.$router.push("/notebook/?uid=TJN4FDuqrwU8DML7DAjUYFIMutp2&sid=".concat(t.sid,"&cid=").concat(t.cid)):t.cid&&e.$router.push("/course?cid=".concat(t.cid));case 17:case"end":return r.stop()}}),r)})))()}}}),d=(r(580),r(40)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-card shadow",style:t.v.display?"":"background: #00000022"},[n("div",{staticClass:"uk-card-media-top",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.gotoCourse(t.v)}}},[t.v.thumbnail?n("img",{staticClass:"background",attrs:{src:t.v.thumbnail,alt:t.v.title}}):n("div",[n("div",{staticClass:"\n          uk-flex uk-flex-middle uk-flex-center\n          background\n          uk-padding-small\n        ",staticStyle:{"aspect-ratio":"17 / 9",color:"white","font-size":"1.2rem"},style:"background:url("+r(579)+");"},[n("b",[t._v(t._s(t.v.title)+" "+t._s(t.v.playlistName))])])])]),t._v(" "),n("div",{staticClass:"uk-card-body uk-padding-small"},[t.v.permission>=2?n("div",{staticClass:"uk-card-badge uk-label uk-label-warning"},[t._v("\n      VIP 限定\n    ")]):t._e(),t._v(" "),n("h3",{staticClass:"uk-text-primary",staticStyle:{"font-size":"1rem",cursor:"pointer"},on:{click:function(e){return t.gotoCourse(t.v)}}},[t._v("\n      "+t._s(t.v.title)+"\n      "+t._s(t.v.playlistName)+"\n    ")]),t._v(" "),t.v.episodes?n("p",[t._v("總共有 "+t._s(t.v.episodes.length)+" 部影片")]):t._e(),t._v(" "),t.v.tags?n("p",{staticStyle:{"font-size":"0.9rem"}},[t._l(t.v.tags,(function(e){return n("span",{key:t.v.vid+"-"+e.text,staticStyle:{"margin-right":"5px",background:"transparent",color:"gray"}},[t._v(t._s(e.text))])})),n("br"),t._v(" "),n("span",[t._v(t._s(t.v.date))])],2):t._e(),t._v(" "),t.$store.state.user&&"TJN4FDuqrwU8DML7DAjUYFIMutp2"===t.$store.state.user.uid?n("div",[t.v.episodes?n("nuxt-link",{attrs:{to:"/course_playlist_edit?pid="+t.v.pid}},[n("button",{staticClass:"uk-button uk-button-primary"},[t._v("設定")])]):n("nuxt-link",{attrs:{to:"/course_edit?cid="+t.v.cid}},[n("button",{staticClass:"uk-button uk-button-primary"},[t._v("設定")])])],1):t._e()])])}),[],!1,null,"b9b8c71e",null);e.default=component.exports},751:function(t,e,r){"use strict";r(640)},899:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(38),r(340),r(47),r(325)),c=r(15),d=Object(o.c)({head:{title:"透過 Python 學習台灣股市回測 - 手把手影音教學",meta:[{hid:"description",name:"description",content:"歡迎參加我們的台灣股市回測 Python 影音教學，這是一個深入且易於理解的教學課程，幫助您學習如何使用 Python 進行股票回測分析。我們的課程涵蓋從基礎到進階的主題，包括如何使用 Python 資料庫讀取股票數據、如何編寫股票交易策略、以及如何進行回測和分析。無論您是初學者還是有經驗的投資者，我們的課程都能幫助您建立更精確和成功的股票投資策略。立即註冊參加我們的台灣股市回測 Python 影音教學，提高您的股票投資技能。"}]},data:function(){return{courses:[],orgCourse:null,orgPlayLists:null,playLists:[],activeTag:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.c.collection("courses").doc("menu").get();case 2:for(n in r=e.sent.data(),t.orgCourse=r,r)t.courses.push(r[n]);return t.courses.sort((function(a,b){return a.date<b.date?1:b.date<a.date?-1:0})),console.log(t.courses),e.next=9,Object(c.d)("courses","playlistMenu");case 9:for(o in t.orgPlayLists=e.sent,t.orgPlayLists)t.playLists.push(t.orgPlayLists[o]);case 11:case"end":return e.stop()}}),e)})))()},methods:{tagClicked:function(t){this.activeTag!==t?this.activeTag=t:this.activeTag=null},hastag:function(t,e){for(var i in t.tags)if(t.tags[i].text===e)return!0;return!1}},computed:{filteredCourses:function(){var t=this;return this.courses?this.activeTag?this.courses.filter((function(e){return t.hastag(e,t.activeTag)})):this.courses:[]},isAdmin:function(){return!!this.$store.state.user&&"TJN4FDuqrwU8DML7DAjUYFIMutp2"===this.$store.state.user.uid},tags:function(){var s={};for(var t in this.courses)if(this.courses[t].display){var e=this.courses[t].tags;for(var r in e)e[r].text in s?s[e[r].text]+=1:s[e[r].text]=1}var n=[];for(var o in s)n.push([o,s[o]]);return n.sort((function(a,b){return a[1]<b[1]?1:b[1]<a[1]?-1:0})),n}}}),l=(r(751),r(40)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"uk-section",staticStyle:{background:"white"}},[r("div",{staticClass:"uk-container uk-container-large"},[t.isAdmin?r("div",{staticClass:"uk-margin-bottom"},[r("nuxt-link",{attrs:{to:"/course_edit"}},[r("button",{staticClass:"uk-button uk-button-primary"},[t._v("\n            新增單元\n          ")])]),t._v(" "),r("nuxt-link",{attrs:{to:"/course_playlist_edit"}},[r("button",{staticClass:"uk-button uk-button-primary"},[t._v("\n            新增課程\n          ")])])],1):t._e(),t._v(" "),r("h2",{staticClass:"mobile-padding"},[t._v("系列課程")]),t._v(" "),r("div",{staticClass:"\n            uk-child-width-1-1\n            uk-child-width-1-4@m\n            uk-child-width-1-4@s\n          ",attrs:{"uk-grid":""}},[t._l(t.playLists,(function(t){return r("div",{key:t.cid},[r("CourseCard",{attrs:{v:t,type:"playList"}})],1)})),t._v(" "),t._m(1)],2),t._v(" "),r("hr",{staticClass:"uk-divider-icon"}),t._v(" "),r("h2",{staticClass:"mobile-padding"},[t._v("教學短影")]),t._v(" "),r("p",{staticClass:"uk-margin-large-bottom",attrs:{"uk-margin":""}},t._l(t.tags,(function(e){return r("button",{key:e[0],staticClass:"uk-button uk-button-small uk-margin-right",class:e[0]===t.activeTag?"uk-button-primary":"",on:{click:function(r){return t.tagClicked(e[0])}}},[t._v(t._s(e[0])+" ("+t._s(e[1])+")")])})),0),t._v(" "),r("div",{staticClass:"\n            uk-grid-small\n            uk-child-width-1-1\n            uk-child-width-1-4@m\n            uk-child-width-1-4@s\n          \n          ",attrs:{"uk-height-match":"target: > div > div > .uk-card","uk-grid":""}},t._l(t.filteredCourses,(function(e){return r("div",{directives:[{name:"show",rawName:"v-show",value:e.display||t.isAdmin,expression:"v.display || isAdmin"}],key:e.cid},[e.display||t.isAdmin?r("div",[r("LazyCourseCard",{attrs:{v:e,type:"video"}})],1):t._e()])})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-section"},[r("div",{staticClass:"uk-container uk-container-large"},[r("h1",{staticClass:"uk-text-primary mobile-padding"},[t._v("影音教學")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-width-expand@m uk-width-1-1 uk-visible@m"},[r("div",[r("h3",[t._v("課程資訊")]),t._v(" "),r("dl",{staticClass:"uk-description-list"},[r("dt",[t._v("課程時長")]),t._v(" "),r("dd",[t._v("約 3 小時，快速學習，有效吸收，成果不馬虎！")]),t._v(" "),r("dt",[t._v("程式難度")]),t._v(" "),r("dd",[t._v("從零開始學習，不用任何預習！有問題歡迎留言～")]),t._v(" "),r("dt",[t._v("需求配備")]),t._v(" "),r("dd",[t._v("\n                使用 Colab 線上寫程式，Windows、MacOS、Linux 皆可配備不限\n              ")])])])])}],!1,null,"4d710b0e",null);e.default=component.exports;installComponents(component,{CourseCard:r(729).default})}}]);