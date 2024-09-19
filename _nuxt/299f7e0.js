(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{616:function(e,t,n){"use strict";n.r(t);var r=n(95),o=n(8),l=(n(61),n(333),n(60),n(46),n(47),n(44),n(117),n(155),n(31),n(58),n(38),n(323)),c=n(19),d=n(340),f=n(869),h=n(562),m=n(359);Object(d.a)([f.a,h.a]);var v=Object(l.c)({setup:function(){},components:{VChart:m.b},data:function(){return{nameMapping:{return_ratio_1:"單日報酬",return_ratio_5:"週報酬",return_ratio_10:"10日報酬",return_ratio_20:"月報酬",close:"收盤價",vol_price:"價 x 量",market_value:"市值",volatility:"波動",boss_inv:"CEO佔比",rev_y_growth:"月營收年成長",rev_m_growth:"月營收月成長",cum_rev_y_growt:"累計月營收年成長",pe:"本益比",pb:"股價淨值比",dividend_yield:"殖利率",gross_margin:"毛利率",operating_margin:"營業利益率",roe:"股東權益報酬率",debt_ratio:"負債比率",chairman_inv:"股東佔比"},formatMapping:{"近一日報酬率":function(e){return(e>=0?"+"+e:e)+" %"},"近五日報酬率":function(e){return(e>=0?"+"+e:e)+" %"},"近十日報酬率":function(e){return(e>=0?"+"+e:e)+" %"},"近二十日報酬率":function(e){return(e>=0?"+"+e:e)+" %"},"收盤價":function(e){return e+" 元"},"成交金額":function(e){return e+" 千元"},"市值":function(e){return e+" 億"},"近十日真實波動率":function(e){return e+" %"},"集保四百張以上大戶持股占比":function(e){return e+" %"},"單月營收年增率":function(e){return(e>=0?"+"+e:e)+" %"},"單月營收月增率":function(e){return(e>=0?"+"+e:e)+" %"},"近十二月營收年增率":function(e){return(e>=0?"+"+e:e)+" %"},"殖利率":function(e){return(e>=0?"+"+e:e)+" %"},"營業利益率":function(e){return(e>=0?"+"+e:e)+" %"},"負債比率":function(e){return(e>=0?"+"+e:e)+" %"},"ROE稅後":function(e){return(e>=0?"+"+100*e:100*e)+" %"},"董監持股占比":function(e){return e+" %"}},colorRankingNames:[],colorRankingDisplayNames:[],selectedColorRanking:null,selectedAreaRanking:"資金流",industry:null,maxValues:[],minValues:[],tree:[],option:{toolbox:{top:0},series:[{name:"台股",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",type:"treemap",label:{show:!0,formatter:"{b}",color:"#333",lineHeight:20},leafDepth:2,itemStyle:{borderColor:"#f9f9fd"},breadcrumb:{top:0,left:0,position:"top"},visualDimension:1,visibleMin:1e3,roam:"move",zoomToNodeRatio:.3,levels:[{itemStyle:{borderColor:"#f9f9fd",borderWidth:0,gapWidth:2},upperLabel:{show:!1},textStyle:{color:"#333"}},{color:["#42bd91aa","#ffffff","#ff8985aa"],colorMappingBy:"value",itemStyle:{gapWidth:1,borderColor:"#f9f9fd",borderWidth:10},upperLabel:{show:!0,color:"#252786"},emphasis:{itemStyle:{borderColor:"#ddd"},upperLabel:{color:"#333"}}},{color:["#42bd91aa","#ffffff","#ff8985aa"],colorMappingBy:"value",itemStyle:{gapWidth:3}}],data:[]}]}}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.download();case 2:e.settingChart();case 3:case"end":return t.stop()}}),t)})))()},methods:{quantile:function(e){return(t=e,t.map((function(e,i){return[e,i]})).sort((function(a,b){return b[0]-a[0]})).map((function(a,i){return[].concat(Object(r.a)(a),[i+1])})).sort((function(a,b){return a[1]-b[1]})).map((function(a){return a[2]}))).map((function(i){return 1-i/e.length}));var t},settingChart:function(){var e=this;e.tree=[];var t=e.industry.ids,n=e.industry[e.selectedAreaRanking];console.log(e.industry),console.log("test area",e.selectedAreaRanking),console.log(n);var r=[],o=Object.keys(e.industry);o=o.filter((function(t){return!isNaN(e.industry[t][0])})),e.colorRankingNames=o;var l={};for(var c in e.colorRankingNames){var d=e.colorRankingNames[c];l[d]=this.quantile(this.industry[d])}console.log(l);for(var i=0;i<e.industry.ids.length;i+=1){var f=[];for(var h in f.push(n[i]),o){var m=l[o[h]][i];f.push(m)}f.push(i),r.push(f)}for(var v=[],k=0;k<e.industry.ids.length;k+=1)if(-1!==t[k].indexOf(" ")){var path=t[k].split("/");if(-1===v.indexOf(path[path.length-1])&&(v.push(path[path.length-1]),void 0!==(path=path.splice(-2))[0]))for(var y in e.insertNode(e.tree,path,r[k]),r[k]){var _=r[k][y];_>this.maxValues[y]?this.maxValues[y]=_:_<this.minValues[y]&&(this.minValues[y]=_)}}this.option.series[0].data=this.tree,this.selectedColorRanking="近一日報酬率"},insertNode:function(e,path,t){var n=this.findChildID(e,path[0]);-1===n&&(n=e.length,e.push({name:path[0],value:[],children:[]})),path.shift(),0!=path.length?this.insertNode(e[n].children,path,t):e[n].value=t},findChildID:function(e,t){for(var n in e)if(e[n].name==t)return n;return-1},download:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o,data,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("start render"),e.industryMode,e.featName,e.areaName,console.log("treemap start mount"),e.text=e.value,n=e,r=c.c.collection("twIndustryTest").doc("treemap"),t.next=10,r.get();case 10:if((o=t.sent).exists){t.next=14;break}return console.log("cannot find strategy menu"),t.abrupt("return");case 14:for(l in data=o.data(),console.log(data),data)data[l]=JSON.parse(data[l]);n.industry=data.supply_chain;case 18:case"end":return t.stop()}}),t)})))()},setNodeName:function(e,t,n,r){if(0===e.children.length){var i=e.value[e.value.length-1],o=this.industry.ids[i].split("/").splice(-1)[0],l=this.industry[t][i],c=(t in this.nameMapping&&this.nameMapping[t],t in this.formatMapping?this.formatMapping[t](l):l);e.name=o.replace(" ","\n")+"\n"+c}for(var d in e.children)this.setNodeName(e.children[d],t,n,r)}},watch:{selectedColorRanking:function(){var e=this.colorRankingNames.indexOf(this.selectedColorRanking)+1;for(var t in this.option.series[0].visualDimension=e,this.option.series[0].data)this.setNodeName(this.option.series[0].data[t],this.selectedColorRanking,e,(function(e){return e}));this.option.series[0].visualMin=0,this.option.series[0].visualMax=1},selectedAreaRanking:function(){this.settingChart()}},computed:{}}),k=n(40),component=Object(k.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"uk-container"},[n("div",{staticClass:"uk-text-left uk-margin",staticStyle:{"line-height":"5rem","vertical-align":"middle","font-size":"0.9rem"}},[e._v("\n    板塊大小代表：\n    "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAreaRanking,expression:"selectedAreaRanking"}],staticClass:"uk-radio",attrs:{type:"radio",name:"radio2",checked:""},domProps:{value:"資金流",checked:e._q(e.selectedAreaRanking,"資金流")},on:{change:function(t){e.selectedAreaRanking="資金流"}}}),e._v("\n      資金流")]),e._v(" "),n("label",{staticStyle:{"margin-right":"50px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAreaRanking,expression:"selectedAreaRanking"}],staticClass:"uk-radio",attrs:{type:"radio",name:"radio2"},domProps:{value:"市值",checked:e._q(e.selectedAreaRanking,"市值")},on:{change:function(t){e.selectedAreaRanking="市值"}}}),e._v("\n      市值")]),e._v("\n\n    顏色深淺代表：\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedColorRanking,expression:"selectedColorRanking"}],staticClass:"uk-select uk-margin",staticStyle:{width:"200px","line-height":"1rem",background:"#ffffff33"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedColorRanking=t.target.multiple?n:n[0]}}},e._l(e.colorRankingNames,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n        "+e._s(t in e.nameMapping?e.nameMapping[t]:t)+"\n      ")])})),0)]),e._v(" "),n("div",{staticStyle:{width:"100%",height:"600px","margin-top":"-1rem"}},[n("v-chart",{staticClass:"chart",attrs:{option:e.option}})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);