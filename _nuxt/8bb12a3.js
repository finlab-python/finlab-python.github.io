(window.webpackJsonp=window.webpackJsonp||[]).push([[63,44],{353:function(t,n,e){var r=e(10),o=e(362),d=e(120);r({target:"Array",proto:!0},{fill:o}),d("fill")},362:function(t,n,e){"use strict";var r=e(41),o=e(119),d=e(59);t.exports=function(t){for(var n=r(this),e=d(n),l=arguments.length,c=o(l>1?arguments[1]:void 0,e),v=l>2?arguments[2]:void 0,h=void 0===v?e:o(v,e);h>c;)n[c++]=t;return n}},456:function(t,n){var e=1..valueOf;t.exports=function(t){return e.call(t)}},461:function(t,n,e){"use strict";e.r(n);var r=e(95),o=(e(353),{props:{data:{default:function(){return[1,3,2,4,6,5,3,3,6,7]}},canvasId:{default:"id"},width:{default:250},height:{default:100},gradient:{default:!0}},methods:{mapy:function(t){return(this.ymax-t)/(this.ymax-this.ymin)*this.height},mapx:function(t){return(t-this.xmin)/(this.xmax-this.xmin)*this.width},getRealWidth:function(){document.getElementById(this.$props.canvasId);return this.width}},data:function(){return{ymax:0,ymin:0,xmax:0,xmin:0}},mounted:function(){var t=this.getRealWidth();this.ymax=Math.max.apply(Math,Object(r.a)(this.data)),this.ymin=Math.min.apply(Math,Object(r.a)(this.data)),this.xmax=this.data.length-1,this.xmin=0;var n=document.getElementById(this.canvasId).getContext("2d");for(var i in n.beginPath(),n.moveTo(this.mapx(0),this.mapy(this.data[0])),this.data){var e=this.mapx(i),o=this.mapy(this.data[i]);n.lineTo(e,o)}n.lineTo(this.mapx(this.xmax),this.mapy(this.data[0])),n.lineTo(this.mapx(this.xmax),this.mapy(this.ymin)),n.lineTo(this.mapx(0),this.mapy(this.ymin)),n.strokeStyle="#ffffff",n.stroke();var d=n.createRadialGradient(t/2,0,0,t/2,0,60);for(var l in d.addColorStop(0,"#3f42ba44"),this.gradient?d.addColorStop(1,"#25278600"):d.addColorStop(1,"#3f42ba44"),n.fillStyle=d,n.fill(),n.closePath(),n.beginPath(),n.lineWidth=1,n.strokeStyle="#252786",n.moveTo(this.mapx(0),this.mapy(this.data[0])),this.data){var c=this.mapx(l),v=this.mapy(this.data[l]);n.lineTo(c,v)}n.stroke(),n.closePath()}}),d=e(40),component=Object(d.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("canvas",{attrs:{id:t.canvasId,width:t.width,height:t.height}})}),[],!1,null,null,null);n.default=component.exports},499:function(t,n,e){"use strict";var r=e(23),o=e(12),d=e(122),l=e(34),c=e(26),v=e(229),h=e(124),f=e(232),_=e(11),m=e(96).f,k=e(56).f,y=e(32).f,x=e(456),w=e(230).trim,S="Number",C=o.Number,I=C.prototype,N=function(t){var n=f(t,"number");return"bigint"==typeof n?n:F(n)},F=function(t){var n,e,r,o,d,l,c,code,v=f(t,"number");if(h(v))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(43===(n=(v=w(v)).charCodeAt(0))||45===n){if(88===(e=v.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(v.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+v}for(l=(d=v.slice(2)).length,c=0;c<l;c++)if((code=d.charCodeAt(c))<48||code>o)return NaN;return parseInt(d,r)}return+v};if(d(S,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var E,T=function(t){var n=arguments.length<1?0:C(N(t)),e=this;return e instanceof T&&_((function(){x(e)}))?v(Object(n),e,T):n},A=r?m(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;A.length>M;M++)c(C,E=A[M])&&!c(T,E)&&y(T,E,k(C,E));T.prototype=I,I.constructor=T,l(o,S,T)}},533:function(t,n,e){},605:function(t,n,e){"use strict";var r=e(10),o=e(69),d=e(456),l=e(235),c=e(11),v=1..toFixed,h=Math.floor,f=function(t,n,e){return 0===n?e:n%2==1?f(t,n-1,e*t):f(t*t,n/2,e)},_=function(data,t,n){for(var e=-1,r=n;++e<6;)r+=t*data[e],data[e]=r%1e7,r=h(r/1e7)},m=function(data,t){for(var n=6,e=0;--n>=0;)e+=data[n],data[n]=h(e/t),e=e%t*1e7},k=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var n=String(data[t]);s=""===s?n:s+l.call("0",7-n.length)+n}return s};r({target:"Number",proto:!0,forced:v&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){v.call({})}))},{toFixed:function(t){var n,e,r,c,v=d(this),h=o(t),data=[0,0,0,0,0,0],y="",x="0";if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(v!=v)return"NaN";if(v<=-1e21||v>=1e21)return String(v);if(v<0&&(y="-",v=-v),v>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(v*f(2,69,1))-69)<0?v*f(2,-n,1):v/f(2,n,1),e*=4503599627370496,(n=52-n)>0){for(_(data,0,e),r=h;r>=7;)_(data,1e7,0),r-=7;for(_(data,f(10,r,1),0),r=n-1;r>=23;)m(data,1<<23),r-=23;m(data,1<<r),_(data,1,1),m(data,2),x=k(data)}else _(data,0,e),_(data,1<<-n,0),x=k(data)+l.call("0",h);return x=h>0?y+((c=x.length)<=h?"0."+l.call("0",h-c)+x:x.slice(0,c-h)+"."+x.slice(c-h)):y+x}})},606:function(t,n,e){var r=e(10),o=e(607);r({target:"Number",stat:!0,forced:Number.parseFloat!=o},{parseFloat:o})},607:function(t,n,e){var r=e(12),o=e(11),d=e(21),l=e(230).trim,c=e(167),v=r.parseFloat,h=r.Symbol,f=h&&h.iterator,_=1/v(c+"-0")!=-1/0||f&&!o((function(){v(Object(f))}));t.exports=_?function(t){var n=l(d(t)),e=v(n);return 0===e&&"-"==n.charAt(0)?-0:e}:v},608:function(t,n,e){"use strict";e(533)},721:function(t,n,e){"use strict";e.r(n);e(605),e(606),e(499),e(18),e(67),e(44),e(117),e(58);var r={props:{sid:{default:"下載中"},uid:{default:""},cid:{default:null},stats:{default:{annual_return:0,max_drawdown:0,cumulative_return:[0,0,0],last_updated:"2022-10-10",next_trading_date:"2022-10-10",ndays_return:{5:0,20:0,60:0}}}},data:function(){return{showSetting:!1}},methods:{format_float:function(t){return Number.parseFloat(Math.round(10*t)/10).toFixed(1)},addSignColor:function(t){return 0===t?"color:gray":t>0?"color:rgb(255, 82, 121)":"color:#18b89b"},addSign:function(t){return t>0?"+"+t.toString():t.toString()},shouldUpdate:function(){var s=this.stats;if(!1 in s)return!1;if(!1 in s)return!1;var t=new Date,n=t-new Date(s.next_trading_date)+288e5,e=t.getDay(),r=Math.ceil(n/864e5),o=r>0;return o=1===e?o&&r<=4:o&&r<=2,s.stop_actions||o},formatDate:function(t){if(null===t)return"無法顯示時間";if("string"==typeof t)return t;t=t.toDate();var n=new Date,e=t.toLocaleString("en-us").replace(/(\d+)\/(\d+)\/(\d+)/,"$3-$1-$2").replace(/(\d+):(\d+):(\d+)/,"$1:$2").split(", ");return t.getDate()===n.getDate()&&t.getMonth()===n.getMonth()&&t.getFullYear()===n.getFullYear()?e[1]:e[0]}},computed:{gradient:function(){var t=0,s=this.sid;if(0===s.length)return t;for(var i=0,n=s.length;i<n;i++){t=(t<<5)-t+s.charCodeAt(i),t|=0}function e(){for(var t="",n="0123456789abcdef",i=0;i<6;i++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}return"linear-gradient("+(t%10+100)+"deg, #"+e()+"77, #"+e()+"77)"}}},o=(e(608),e(40)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"uk-card round-border shadow uk-margin-large uk-padding-small",staticStyle:{background:"white"}},[e("div",{staticClass:"uk-grid-collapse",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-1-4@l uk-width-1-3@m uk-width-1-1",staticStyle:{display:"grid","align-items":"center"}},[e("div",[e("div",[e("nuxt-link",{attrs:{to:"/strategyview/?uid="+t.uid+"&sid="+t.sid}},[e("span",{staticClass:"uk-text-primary"},[t._v(t._s(t.sid)+" ")]),e("sup",[t._v(t._s(t.stats.public_code>=2?"VIP":""))]),t._v(" "),t.shouldUpdate()?e("span",{staticStyle:{color:"#54e3a5"}},[t._v("●")]):t._e()]),t._v(" "),e("hr",{staticClass:"uk-hidden@s"}),t._v(" "),e("div",{staticClass:"uk-visible@s"},[t.stats.codeOnly?t._e():e("nuxt-link",{attrs:{to:"/strategyview/?uid="+t.uid+"&sid="+t.sid}},[e("button",{staticClass:"uk-button uk-button-default uk-button-small"},[e("span",{attrs:{"uk-icon":"icon: history; ratio: 1"}}),t._v("\n                績效\n              ")])]),t._v(" "),e("nuxt-link",{attrs:{to:"/notebook/?uid="+t.uid+"&sid="+t.sid}},[e("button",{staticClass:"uk-button uk-button-default  uk-button-small"},[e("span",{attrs:{"uk-icon":"icon: file-edit; ratio: 1"}}),t._v("\n                編輯\n              ")])]),t._v(" "),t.cid?e("nuxt-link",{attrs:{to:"/notebook/?uid="+t.uid+"&sid="+t.sid+"&cid="+t.cid}},[e("button",{staticClass:"uk-button uk-button-default  uk-button-small"},[e("span",{attrs:{"uk-icon":"icon: video-camera; ratio: 1"}}),t._v("\n                教學\n              ")])]):t._e(),t._v(" "),this.$store.state.user&&t.uid===this.$store.state.user.uid?e("button",{staticClass:"uk-button uk-button-small uk-button-default",on:{click:function(n){t.showSetting=!0}}},[e("span",{attrs:{"uk-icon":"icon: cog; ratio: 1"}})]):t._e()],1)],1)])]),t._v(" "),t.stats.ndays_return_benchmark?e("div",{staticClass:"uk-width-expand@m uk-width-1-1"},[e("div",{staticClass:"uk-overflow-auto"},[e("div",{staticClass:"uk-child-width-auto@s uk-child-width-1-3 uk-grid-small uk-grid-divider uk-text-small uk-text-center",attrs:{"uk-grid":""}},[e("div",[e("div",{staticClass:"uk-margin",staticStyle:{width:"5.5rem"}},[t._v("年化報酬")]),t._v(" "),e("div",{staticStyle:{color:"gray"}},[e("div",[e("span",{staticClass:"uk-text-lead uk-text-bold",style:t.addSignColor(t.stats.annual_return)},[t._v("\n                  "+t._s(t.addSign(t.format_float(100*t.stats.annual_return))))]),t._v(" %\n              ")])])]),t._v(" "),e("div",{staticClass:"uk-visible@s"},[e("div",{staticClass:"uk-margin",staticStyle:{width:"5.5rem"}},[t._v("最大虧損")]),t._v(" "),e("div",{staticStyle:{color:"gray"}},[e("div",[e("span",{staticClass:"uk-text-lead uk-text-bold",style:t.addSignColor(t.stats.max_drawdown)},[t._v("\n                  "+t._s(t.format_float(100*t.stats.max_drawdown)))]),t._v(" %\n              ")])])]),t._v(" "),e("div",{staticClass:"uk-visible@s"},[e("div",{staticClass:"uk-margin"},[t._v("夏普值")]),t._v(" "),e("span",{staticClass:"uk-text-lead uk-text-bold uk-text-muted"},[t._v("\n              "+t._s(t.format_float(t.stats.sharpe_ratio))+"\n            ")])]),t._v(" "),t.stats.ndays_return_benchmark?e("div",[e("div",{staticStyle:{"margin-bottom":"0.4rem"}},[t._v("大盤比較")]),t._v(" "),e("span",[t._v("  週   月   季   ")]),e("br"),t._v("\n             \n            "),t._l([5,20,60],(function(n){return e("span",{key:"ndays-return"+n,style:t.addSignColor(t.stats.ndays_return[n]-t.stats.ndays_return_benchmark[n])},[t._v("\n              "+t._s(t.stats.ndays_return[n]>t.stats.ndays_return_benchmark[n]?"勝":"負")+"  \n            ")])}))],2):t._e(),t._v(" "),e("div",[e("div",{staticClass:"uk-margin"},[t._v("當月走勢")]),t._v(" "),e("LineCanvas",{attrs:{data:t.stats.cumulative_return,canvasId:"canvas2-"+t.sid.toString(),width:80,height:36}})],1),t._v(" "),e("div",{staticClass:"uk-visible@l",staticStyle:{color:"#888"}},[e("div",{staticStyle:{"margin-bottom":"0.4rem"}},[t._v("近期報酬")]),t._v(" "),t._l([20,60],(function(n){return e("div",{key:"ndays-return-stats"+n},[e("span",[t._v(t._s({5:"週",20:"月",60:"季"}[n]))]),t._v(" "),e("span",{style:t.addSignColor(t.stats.ndays_return[n])},[t._v("\n                "+t._s(t.addSign(t.format_float(100*t.stats.ndays_return[n])))+"\n              ")]),e("span",[t._v("%")])])}))],2),t._v(" "),t.stats.ndays_return_benchmark?e("div",{staticClass:"uk-visible@l uk-text-left",staticStyle:{color:"#888"}},[e("div",{staticStyle:{"margin-bottom":"0.4rem"}},[t._v("重要日期")]),t._v("\n            近期換股： "+t._s(t.stats.next_trading_date.split("T")[0])),e("br"),t._v("\n            策略更新： "+t._s(t.formatDate(t.stats.last_updated))+"\n          ")]):t._e()]),t._v(" "),e("hr",{staticClass:"uk-hidden@s"}),t._v(" "),e("div",{staticClass:"uk-hidden@s uk-child-width-1-3 uk-text-center",attrs:{"uk-grid":""}},[t.stats.codeOnly?t._e():e("nuxt-link",{attrs:{to:"/strategyview/?uid="+t.uid+"&sid="+t.sid}},[e("span",{attrs:{"uk-icon":"icon: history; ratio: 1"}}),t._v("\n            績效\n          ")]),t._v(" "),e("nuxt-link",{attrs:{to:"/notebook/?uid="+t.uid+"&sid="+t.sid}},[e("span",{attrs:{"uk-icon":"icon: file-edit; ratio: 1"}}),t._v("\n            編輯\n          ")]),t._v(" "),t.cid?e("nuxt-link",{attrs:{to:"/notebook/?uid="+t.uid+"&sid="+t.sid+"&cid="+t.cid}},[e("span",{attrs:{"uk-icon":"icon: video-camera; ratio: 1"}}),t._v("\n            教學\n          ")]):t._e(),t._v(" "),this.$store.state.user&&t.uid===this.$store.state.user.uid?e("div",{staticClass:"uk-text-primary",on:{click:function(n){t.showSetting=!0}}},[e("span",{attrs:{"uk-icon":"icon: cog; ratio: 1"}}),t._v(" 設定\n          ")]):t._e()],1)])]):t._e()]),t._v(" "),e("strategyTags",{attrs:{sid:t.sid,uid:t.uid},model:{value:t.showSetting,callback:function(n){t.showSetting=n},expression:"showSetting"}})],1)}),[],!1,null,"5439dd30",null);n.default=component.exports;installComponents(component,{LineCanvas:e(461).default})}}]);