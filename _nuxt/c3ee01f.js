(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{720:function(t,e,n){},868:function(t,e,n){"use strict";n(720)},923:function(t,e,n){"use strict";n.r(e);var l=n(8),c=(n(38),n(325)),r=n(15),o=Object(c.c)({props:{activateCourseId:"",playListId:""},data:function(){return{playlist:null,courseMenu:null}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(r.d)("courses","menu");case 3:return t.courseMenu=e.sent,e.next=6,Object(r.d)("courses",t.playListId);case 6:t.playlist=e.sent,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))()},methods:{clickVideo:function(t){this.$emit("clickVideo",t)}},computed:{playlistDisplay:function(){var t=[];if(!this.playlist||!this.courseMenu)return t;for(var i in this.playlist.episodes)if("subtitle"in this.playlist.episodes[i])t.push({type:"subtitle",title:this.playlist.episodes[i].subtitle,courses:[]});else{var e=this.playlist.episodes[i].course_id;t[t.length-1].courses.push({cid:e,title:this.courseMenu[e].title})}return t}}}),d=(n(868),n(40)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-background-secondary uk-light"},[t.playlist?n("h3",{staticClass:"uk-padding-small subtitle uk-margin-remove-bottom"},[t._v("\n    "+t._s(t.playlist.playlistName)+"\n  ")]):t._e(),t._v(" "),n("ul",{staticClass:"uk-nav",attrs:{id:"nav","uk-nav":"multiple: true"}},t._l(t.playlistDisplay,(function(p,e){return n("li",{key:p.title+e,staticClass:"uk-parent",class:{"uk-open":p.courses.map((function(t){return t.cid})).includes(t.activateCourseId)}},[n("a",{staticClass:"subtitle"},[n("div",{staticClass:"uk-grid-collapse",attrs:{"uk-grid":""}},[n("div",[n("span",{staticStyle:{width:"20px",height:"20px"},attrs:{"uk-icon":"list"}}),t._v(t._s(e+1)+" \n          ")]),t._v(" "),n("div",{staticClass:"uk-width-expand"},[t._v(t._s(p.title))])]),t._v(" "),n("span",{attrs:{"uk-nav-parent-icon":""}})]),t._v(" "),n("ul",{staticClass:"uk-nav-sub"},t._l(p.courses,(function(l,i){return n("li",{key:p.title+"_"+l.title+i,staticClass:"divider uk-background-secondary",staticStyle:{display:"block"},style:t.activateCourseId===l.cid?"background: #19b394 !important":""},[n("a",{on:{click:function(e){return t.clickVideo(l.cid)}}},[n("div",{staticClass:"uk-grid-collapse",staticStyle:{pointer:"cursor"},attrs:{"uk-grid":""}},[n("div",[n("span",{staticStyle:{width:"20px",height:"20px"},attrs:{"uk-icon":"play-circle"}}),t._v("\n                "+t._s(e+1)+"."+t._s(i+1)+"  \n              ")]),t._v(" "),n("div",{staticClass:"uk-width-expand"},[t._v(t._s(l.title))])])])])})),0)])})),0)])}),[],!1,null,"2b804c26",null);e.default=component.exports}}]);