(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{725:function(e,t,n){},873:function(e,t,n){"use strict";n(725)},928:function(e,t,n){"use strict";n.r(t);var r,o=n(25),l=n(8),c=(n(38),n(18),n(33),n(28),n(61),n(44),n(117),n(121),n(48),n(67),n(68),n(325)),d=n(15),m=Object(c.c)((r={setup:function(){},watch:{industryMode:function(){console.log("change!"),this.render()},featName:function(){console.log("change!"),this.render()},areaName:function(){console.log("change!"),this.render()}},data:function(){return{industryMode:"normal",featName:"近1日報酬率",areaName:"資金流",industry:null,loading:!0,displaySetting:window.innerWidth>600,height:650,colorRankingNames:[]}},mounted:function(){this.render()},methods:{render:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,o,c,m,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(16).then(n.t.bind(null,886,7));case 2:r=t.sent,console.log("start render"),o=e.industryMode,c=e.featName,m=e.areaName,console.log("treemap start mount"),e.text=e.value,v=e,d.c.collection("twIndustry").doc("treemap").get().then((function(e){if(e.exists){var data=e.data();for(var t in console.log(data),data)data[t]=JSON.parse(data[t]);console.log(data),v.industry=data[o];var n=v.industry.ids,d=v.industry["收盤價"],f=v.industry[c],h=v.industry[m];v.colorRankingNames=[];var y=["ids","資金流","市值","融資餘額市值","融券餘額市值","收盤價","成交張數"];for(var _ in v.industry)-1==y.indexOf(_)&&v.colorRankingNames.push(_);var k=d.map((function(e,i){return[e,f[i]]}));console.log("custom data",k);for(var N=[],x=[],w=[],i=0;i<n.length;i++){var C=n[i].split("/"),M=C.slice(0,-1).join("/"),label=C.slice(-1),O=f[i];O>50?O=50:O<-50&&(O=-50),N.push(M),x.push(label),w.push(O)}var P=null;["近1日報酬率","近5日報酬率","近20日報酬率","近1月營收年增率","近3月營收年增率","近12月營收年增率","存貨季增率","外資買賣超/成交張數","投信買賣超/成交張數","融資增減張數/成交張數","融券增減張數/成交張數","借券賣出增減張數/成交張數"].includes(c)?P=0:["近1日震幅","近10日真實波動率","殖利率"].includes(c)?P=4:["本益比","融資使用率","券資比"].includes(c)?P=15:["現股當沖率","集保50張以下散戶持股占比"].includes(c)&&(P=25);var S="%{label}<br>%{customdata[1]}",j="標的名稱:%{label}<br>收盤價:%{customdata[0]}<br>"+c+":%{customdata[1]}<extra></extra>";["本益比","股價淨值比","成交張數"].includes(c)||(S+="%",j+="%"),-1==[""].indexOf(m)&&(j+="<br>"+m+":%{value}");var R=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.newPlot("myDiv",[{branchvalues:"total",customdata:k,level:"",domain:{x:[0,1],y:[0,1]},hovertemplate:j,ids:n,labels:x,marker:{coloraxis:"coloraxis",colors:w},name:"",parents:N,values:h,type:"treemap",textfont:{size:18},textposition:"middle center",texttemplate:S}],{template:{layout:{annotationdefaults:{arrowcolor:"#2a3f5f",arrowhead:0,arrowwidth:1},marker:{autocolorscale:!0},coloraxis:{colorbar:{ticks:"%"}},hoverlabel:{align:"left"},paper_bgcolor:"white",plot_bgcolor:"rgba(0,0,0,0)",scene:{}}},coloraxis:{showscale:!1,xpad:0,colorbar:{title:{text:c,side:"top"},x:.5,y:-.15,orientation:"h"},colorscale:[[0,"#0c753d"],[.2,"#00ad68"],[.5,"rgb(255,255,255)"],[.7,"#f995ad"],[1,"#b3192d"]],cmid:P},pad:{b:0,l:0,r:0,t:0},margin:{b:0,l:0,r:0,t:0},height:v.height},{responsive:!0});case 2:e.sent,v.$refs.myDiv.on("plotly_click",(function(data){var e=data.points[0].label[0],t=-1===e.indexOf(" "),n=data.points[0].id.split("/").slice(0,-1).join("/");if(v.$emit("clickItem",[e,t]),!t){var o={level:n};setTimeout((function(){r.update("myDiv",o,0)}),1e3)}})),v.loading=!1;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();setTimeout(R,0)}else console.log("cannot find strategy menu")}));case 12:case"end":return t.stop()}}),t)})))()}}},Object(o.a)(r,"watch",{industryMode:function(){this.render()},areaName:function(){this.render()},featName:function(){this.render()}}),Object(o.a)(r,"computed",{}),r)),v=m,f=(n(873),n(40)),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"top-container uk-margin-large-top"},[n("div",{staticClass:"uk-card uk-card-body uk-padding-small shadow"},[n("div",{staticClass:"uk-card-badge uk-label",staticStyle:{height:"30px","padding-top":"8px",cursor:"pointer"},on:{click:function(t){e.displaySetting=!e.displaySetting}}},[n("span",{attrs:{"uk-icon":"icon: settings"}})]),e._v(" "),e._m(0),e._v(" "),e.displaySetting?n("div",[n("table",{staticClass:"uk-table uk-table-small"},[n("tr",[n("td",{staticStyle:{width:"7rem","padding-left":"0"}},[e._v("產業分類")]),e._v(" "),n("td",[n("div",{staticClass:"uk-flex uk-flex-wrap"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.industryMode,expression:"industryMode"}],staticClass:"uk-radio",attrs:{type:"radio",name:"radio1",checked:""},domProps:{value:"normal",checked:e._q(e.industryMode,"normal")},on:{change:function(t){e.industryMode="normal"}}}),e._v("\n                  主產業")]),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.industryMode,expression:"industryMode"}],staticClass:"uk-radio",attrs:{type:"radio",name:"radio1"},domProps:{value:"supply_chain",checked:e._q(e.industryMode,"supply_chain")},on:{change:function(t){e.industryMode="supply_chain"}}}),e._v("\n                  產業鏈")])])])]),e._v(" "),n("tr",[n("td",{staticStyle:{"padding-left":"0"}},[e._v("板塊大小代表")]),e._v(" "),n("td",[n("div",{staticClass:"uk-flex uk-flex-wrap"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.areaName,expression:"areaName"}],staticClass:"uk-radio",attrs:{type:"radio",name:"radio2",checked:""},domProps:{value:"資金流",checked:e._q(e.areaName,"資金流")},on:{change:function(t){e.areaName="資金流"}}}),e._v("\n                  資金流(億)")]),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.areaName,expression:"areaName"}],staticClass:"uk-radio",attrs:{type:"radio",name:"radio2",checked:""},domProps:{value:"成交張數",checked:e._q(e.areaName,"成交張數")},on:{change:function(t){e.areaName="成交張數"}}}),e._v("\n                  成交張數")]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.areaName,expression:"areaName"}],staticClass:"uk-radio",attrs:{type:"radio",name:"radio2"},domProps:{value:"市值",checked:e._q(e.areaName,"市值")},on:{change:function(t){e.areaName="市值"}}}),e._v("\n                  市值(百億)")]),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.areaName,expression:"areaName"}],staticClass:"uk-radio",attrs:{type:"radio",name:"radio2"},domProps:{value:"融資餘額市值",checked:e._q(e.areaName,"融資餘額市值")},on:{change:function(t){e.areaName="融資餘額市值"}}}),e._v("\n                  融資餘額市值(億)")]),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.areaName,expression:"areaName"}],staticClass:"uk-radio",attrs:{type:"radio",name:"radio2"},domProps:{value:"融券餘額市值",checked:e._q(e.areaName,"融券餘額市值")},on:{change:function(t){e.areaName="融券餘額市值"}}}),e._v("\n                  融券餘額市值(億)")]),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.areaName,expression:"areaName"}],staticClass:"uk-radio",attrs:{type:"radio",name:"radio2"},domProps:{value:"",checked:e._q(e.areaName,"")},on:{change:function(t){e.areaName=""}}}),e._v("\n                  家數")])])])]),e._v(" "),n("tr",[n("td",{staticStyle:{"padding-left":"0"}},[e._v("顏色深淺代表")]),e._v(" "),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.featName,expression:"featName"}],staticClass:"uk-select uk-margin",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.featName=t.target.multiple?n:n[0]}}},e._l(e.colorRankingNames,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n                  "+e._s(t)+"\n                ")])})),0)])])])]):e._e()]),e._v(" "),n("div",{staticClass:"uk-margin uk-text-center"},[e._v("每日19:30、21:30更新")])]),e._v(" "),e.loading?n("div",{key:e.featName,staticStyle:{"text-align":"center","padding-top":"20vh"}},[n("span",{attrs:{"uk-spinner":"ratio: 4.5"}})]):e._e(),e._v(" "),n("div",{ref:"myDiv",attrs:{id:"myDiv"}})])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"uk-margin"},[e._v("\n        如何使用？請參考"),n("a",{attrs:{href:"https://www.finlab.tw/%e5%8f%b2%e4%b8%8a%e6%9c%80%e5%bc%b7%e5%a4%a7%e7%9a%84%e5%8f%b0%e8%82%a1%e6%9d%bf%e5%a1%8a%e5%9c%96-%e6%93%8d%e4%bd%9c%e8%aa%aa%e6%98%8e%e6%9b%b8/",target:"_blank"}},[e._v("最完整板塊圖使用指南")])])}],!1,null,"56b5d7b0",null);t.default=component.exports}}]);