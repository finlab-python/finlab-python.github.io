(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{484:function(t,e,r){},543:function(t,e,r){t.exports=r.p+"img/default-background.56fec8b.png"},544:function(t,e,r){"use strict";r(484)},712:function(t,e,r){"use strict";r.r(e);var n=r(8),c=(r(31),r(62),r(18),r(28),r(323)),o=Object(c.c)({props:{v:{default:null}},methods:{gotoCourse:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.pid){r.next=16;break}n=null,r.t0=regeneratorRuntime.keys(t.episodes);case 3:if((r.t1=r.t0()).done){r.next=10;break}if(c=r.t1.value,!("course_id"in t.episodes[c])){r.next=8;break}return n=t.episodes[c].course_id,r.abrupt("break",10);case 8:r.next=3;break;case 10:if(n){r.next=13;break}return alert("cannot find course ID"),r.abrupt("return");case 13:e.$router.push("/course?cid=".concat(n,"&pid=").concat(t.pid)),r.next=17;break;case 16:t.sid&&t.cid?e.$router.push("/notebook/?uid=TJN4FDuqrwU8DML7DAjUYFIMutp2&sid=".concat(t.sid,"&cid=").concat(t.cid)):t.cid&&e.$router.push("/course?cid=".concat(t.cid));case 17:case"end":return r.stop()}}),r)})))()}}}),d=(r(544),r(41)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-card shadow",style:t.v.display?"":"background: #00000022"},[n("div",{staticClass:"uk-card-media-top",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.gotoCourse(t.v)}}},[t.v.thumbnail?n("img",{staticClass:"background",attrs:{src:t.v.thumbnail,alt:t.v.title}}):n("div",[n("div",{staticClass:"\n          uk-flex uk-flex-middle uk-flex-center\n          background\n          uk-padding-small\n        ",staticStyle:{"aspect-ratio":"17 / 9",color:"white","font-size":"1.2rem"},style:"background:url("+r(543)+");"},[n("b",[t._v(t._s(t.v.title)+" "+t._s(t.v.playlistName))])])])]),t._v(" "),n("div",{staticClass:"uk-card-body uk-padding-small"},[t.v.permission>=2?n("div",{staticClass:"uk-card-badge uk-label uk-label-warning"},[t._v("\n      VIP 限定\n    ")]):t._e(),t._v(" "),n("h3",{staticClass:"uk-text-primary",staticStyle:{"font-size":"1rem",cursor:"pointer"},on:{click:function(e){return t.gotoCourse(t.v)}}},[t._v("\n      "+t._s(t.v.title)+"\n      "+t._s(t.v.playlistName)+"\n    ")]),t._v(" "),t.v.episodes?n("p",[t._v("總共有 "+t._s(t.v.episodes.length)+" 部影片")]):t._e(),t._v(" "),t.v.tags?n("p",{staticStyle:{"font-size":"0.9rem"}},[t._l(t.v.tags,(function(e){return n("span",{key:t.v.vid+"-"+e.text,staticStyle:{"margin-right":"5px",background:"transparent",color:"gray"}},[t._v(t._s(e.text))])})),n("br"),t._v(" "),n("span",[t._v(t._s(t.v.date))])],2):t._e(),t._v(" "),t.$store.state.user&&"TJN4FDuqrwU8DML7DAjUYFIMutp2"===t.$store.state.user.uid?n("div",[t.v.episodes?n("nuxt-link",{attrs:{to:"/course_playlist_edit?pid="+t.v.pid}},[n("button",{staticClass:"uk-button uk-button-primary"},[t._v("設定")])]):n("nuxt-link",{attrs:{to:"/course_edit?cid="+t.v.cid}},[n("button",{staticClass:"uk-button uk-button-primary"},[t._v("設定")])])],1):t._e()])])}),[],!1,null,"b9b8c71e",null);e.default=component.exports}}]);