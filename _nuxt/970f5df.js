(window.webpackJsonp=window.webpackJsonp||[]).push([[62,50],{340:function(t,e,r){"use strict";var n=r(10),o=r(81),l=r(41),c=r(59),d=r(20),f=r(11),h=r(350),v=r(154),m=r(351),w=r(352),x=r(92),_=r(353),y=[],k=y.sort,C=f((function(){y.sort(void 0)})),M=f((function(){y.sort(null)})),S=v("sort"),D=!f((function(){if(x)return x<70;if(!(m&&m>3)){if(w)return!0;if(_)return _<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)y.push({k:t+r,v:e})}for(y.sort((function(a,b){return b.v-a.v})),r=0;r<y.length;r++)t=y[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:C||!M||!S||!D},{sort:function(t){void 0!==t&&o(t);var e=l(this);if(D)return void 0===t?k.call(e):k.call(e,t);var r,n,f=[],v=c(e);for(n=0;n<v;n++)n in e&&f.push(e[n]);for(f=h(f,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:d(e)>d(r)?1:-1}}(t)),r=f.length,n=0;n<r;)e[n]=f[n++];for(;n<v;)delete e[n++];return e}})},350:function(t,e){var r=Math.floor,n=function(t,e){var c=t.length,d=r(c/2);return c<8?o(t,e):l(n(t.slice(0,d),e),n(t.slice(d),e),e)},o=function(t,e){for(var element,r,n=t.length,i=1;i<n;){for(r=i,element=t[i];r&&e(t[r-1],element)>0;)t[r]=t[--r];r!==i++&&(t[r]=element)}return t},l=function(t,e,r){for(var n=t.length,o=e.length,l=0,c=0,d=[];l<n||c<o;)l<n&&c<o?d.push(r(t[l],e[c])<=0?t[l++]:e[c++]):d.push(l<n?t[l++]:e[c++]);return d};t.exports=n},351:function(t,e,r){var n=r(80).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},352:function(t,e,r){var n=r(80);t.exports=/MSIE|Trident/.test(n)},353:function(t,e,r){var n=r(80).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},420:function(t,e,r){},428:function(t,e,r){"use strict";r.r(e);var n=r(25),o=(r(18),r(28),r(344)),l=r(574),c=r(443),d=r(415),f=r(889),h=r(888),v=r(366);Object(o.a)([l.a,d.a,f.a,c.a,h.a]);var m={name:"Maxdrawdown",props:{values:{default:[1,2,3,4]},benchmark:{default:[1,2,3,4]},index:{default:["2020-01-01","2020-02-01","2020-03-01","2020-04-01"]}},components:{VChart:v.b},provide:Object(n.a)({},v.a,"light"),data:function(){return{option:{legend:{bottom:50,left:-5,orient:"vertical"},tooltip:{trigger:"axis",position:function(t){return[t[0]-100,t[1]-100]},axisPointer:{type:"line",snap:!0,axis:"x"},formatter:function(t){for(var e,r=t[0].value[0]+"<br/>",i=0,n=t.length;i<n;i++)e=Math.round(100*t[i].value[1])/100+"%",r+=t[i].marker+t[i].seriesName+"："+e+"<br/>";return r}},grid:{left:0,right:0,top:"12px",bottom:"10px"},xAxis:{type:"time",name:"日期",minorTick:{show:!1},minorSplitLine:{show:!1},axisLabel:{inside:!0},inverval:1},yAxis:{type:"value",name:"下跌幅度",axisLabel:{formatter:"{value}%",inside:!0,position:"right"},show:!0,minorTick:{show:!1},minorSplitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},lineStyle:{width:0},position:"right"},series:[{name:"策略",data:[],type:"line",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(232, 56, 115, 0)"},{offset:1,color:"rgba(232, 56, 115, 1)",alpha:1}],global:!1}},itemStyle:{color:"rgba(232, 56, 115, 0.5)",borderColor:"rgba(232, 56, 115, 0.5)",opacity:0},lineStyle:{color:"rgba(232, 56, 115, 0.5)"}},{name:"大盤",data:[],type:"line",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(209, 204, 204, 0)"},{offset:1,color:"#aaa",alpha:1}],global:!1}},itemStyle:{color:"#aaa",borderColor:"#aaa",opacity:0},lineStyle:{color:"#aaa"}}],backgroundColor:"transparent"}}},mounted:function(){this.option.series[0].data=this.calDD(this.values),this.option.series[1].data=this.calDD(this.benchmark)},methods:{calDD:function(t){var e=[],r=0;for(var i in t)r=Math.max(t[i],r),e.push(t[i]/r);var n=this.index,o=[];for(var l in n)o.push([n[l],100*e[l]-100]);return o}}},w=(r(454),r(40)),component=Object(w.a)(m,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-chart",{staticClass:"chart",staticStyle:{"z-index":"0"},attrs:{option:t.option,autoresize:""}})}),[],!1,null,"bb9fd992",null);e.default=component.exports},436:function(t,e,r){},454:function(t,e,r){"use strict";r(420)},458:function(t,e,r){"use strict";r.r(e);r(60),r(340),r(46);var n=r(325),o=r(428),l=Object(n.c)({components:{Maxdrawdown:o.default},props:{returns:{default:function(){return{value:[],time:[]}}},benchmark:[],drawdown_details:{default:function(){return{}}},dailyMean:{default:0},max_drawdown:{default:0}},data:function(){return{investCapital:20,investPercentage:80}},methods:{drawdownColor:function(t){var e=255-Math.min(255,t/10),r=Math.min(255,e-5);return"background: rgba(".concat(e,", ").concat(r,", 255, 0.5)")}},computed:{sortedDrawdownDetail:function(){var t=this;return Object.keys(this.drawdown_details).sort().reduce((function(e,r){return e[r]=t.drawdown_details[r],e}),{})},simulated_maxdrawdown:function(){var t=parseInt(this.investPercentage)*parseInt(this.investCapital)*this.max_drawdown;return Math.round(t/10)/10},simulated_stock_investment:function(){return Math.round(parseInt(this.investCapital)*parseInt(this.investPercentage)/10)/10},simulated_annual_return:function(){return Math.round(parseInt(this.investPercentage)*parseInt(this.investCapital)*this.dailyMean/10)/10}}}),c=(r(471),r(40)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h5",{staticClass:"uk-margin-large-top uk-text-primary"},[t._v("下跌幅度")]),t._v(" "),r("Maxdrawdown",{attrs:{values:t.returns.value,benchmark:t.benchmark,index:t.returns.time}}),t._v(" "),r("h5",{staticClass:"uk-margin-large-top uk-text-primary"},[t._v("歷史最大下跌風險")]),t._v(" "),r("table",{staticClass:"uk-table uk-table-small uk-table-divider"},[t._m(0),t._v(" "),r("tbody",t._l(t.sortedDrawdownDetail,(function(e,n){return r("tr",{key:n,style:t.drawdownColor(e.Length)},[r("td",[t._v(t._s(n))]),t._v(" "),r("td",[t._v(t._s(Math.round(1e3*e.drawdown)/10)+"%")]),t._v(" "),r("td",[t._v(t._s(e.Length)+" 天")])])})),0)])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("起始時間")]),t._v(" "),r("th",[t._v("虧損程度")]),t._v(" "),r("th",[t._v("時間長度")])])])}],!1,null,"3cd09cae",null);e.default=component.exports;installComponents(component,{Maxdrawdown:r(428).default})},471:function(t,e,r){"use strict";r(436)}}]);