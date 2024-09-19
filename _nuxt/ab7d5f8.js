(window.webpackJsonp=window.webpackJsonp||[]).push([[82,22,27,38,43],{552:function(t,e,n){},611:function(t,e,n){"use strict";n(552)},617:function(t,e,n){"use strict";n.r(e);var r=n(96),h=(n(61),n(353),n(18),n(66),n(323)),o=n(473),d=n.n(o),l=Object(h.c)({components:{VueP5:d.a},props:{},data:function(){return{time:0,nbars:100,maxTime:50,lineSize:20,padding:100,height:.9*window.innerHeight,RED:"#ff3385",GREEN:"#08c79e",BLUE:"#252786",prices:[100],signals:[0],fr:30,frCnt:0,addKbarTime:5}},methods:{generateNewPrice:function(t,e){var n=(t.random(100)-50)/10+e[e.length-1];return n=t.min(2e4,n),(n=t.max(0,n))+(this.time>this.maxTime/2?t.random(2):-t.random(2))},appendArray:function(t,e,n){return t.push(e),t.length>n&&t.shift(),t},generateNewSignal:function(){return 0===this.time?-1:this.time===this.maxTime/2?1:0},drawArrow:function(t,base,e){t.triangle(base.x-10,base.y,base.x+10,base.y,e.x,e.y)},windowresized:function(t){t.resizeCanvas(t.windowWidth,this.height)},setup:function(t){t.createCanvas(t.windowWidth,this.height)},draw:function(t){t.background(255),t.frameRate(this.fr),this.kbarMargin=.5*t.width/this.nbars,this.kbarDistance=t.width/this.nbars;var e=this.kbarDistance/this.addKbarTime*(this.frCnt%this.addKbarTime);if(this.prices.length<this.nbars&&(e=0),this.frCnt%this.addKbarTime==0||this.prices.length!==this.nbars){var p=this.generateNewPrice(t,this.prices);this.prices=this.appendArray(this.prices,p,this.nbars);var n=this.generateNewSignal();this.signals=this.appendArray(this.signals,n,this.nbars),this.time+=1}for(var h=this.prices,o=t.max.apply(t,Object(r.a)(h))+10,d=t.min.apply(t,Object(r.a)(h))-10,i=1;i<h.length;i++){var l=t.map(h[i-1],d,o,this.padding,t.height-this.padding),c=t.map(h[i],d,o,this.padding,t.height-this.padding),f=t.map(h[h.length-1],d,o,this.padding,t.height-this.padding),m=l<c?this.GREEN:this.RED;t.fill(m),t.stroke(m),t.strokeWeight(.5);var v=this.kbarDistance,w=this.kbarMargin,k=this.lineSize;if(t.line(i*v+(v-w)/2-e,t.min(l,c)-k,i*v+(v-w)/2-e,t.max(l,c)+k),t.rect(i*v-e,l,v-w,c-l),i===h.length-1&&(t.stroke("#666"),t.line(0,c,t.width,c)),0!==this.signals[i]){var x=1===this.signals[i]?this.GREEN:this.RED,y=i*v+(v-w)/2-e,_=1===this.signals[i]?1:-1,S=t.min(c,l),C=t.max(c,l),z=1===this.signals[i]?S:C,O=z-30*_,E=z-50*_,j=z-90*_+30*t.max(_,0),W=z-120*_+30*t.max(_,0),D=1===this.signals[i]?"SELL":"BUY",R=_*Math.round((h[h.length-1]-h[i])/300*1e3)/10,T=R>0?this.RED:this.GREEN,N=R>0;R=R.toString()+"%",N&&(R="+"+R);var P=(c+l)/2;t.noFill(),t.stroke(x),t.strokeWeight(2),t.circle(y,P,50),t.fill(this.BLUE),t.stroke(this.BLUE);var A=t.createVector(y,E),L=t.createVector(y,O);this.drawArrow(t,A,L,x),t.strokeWeight(.1),t.textSize(30),t.text(D,A.x-30,j),t.fill(T),t.text(R,A.x-40,W),t.stroke("#666"),t.strokeWeight(1),t.line(y,c,y,f),t.stroke("white"),t.circle(y,f,10)}}this.frCnt+=1,this.time===this.maxTime&&(this.time=0),1e3*this.fr===this.frCnt&&(this.frCnt=0)}}}),c=n(40),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("vue-p5",{attrs:{"additional-events":["windowresized"]},on:{windowresized:t.windowresized,setup:t.setup,draw:t.draw}})}),[],!1,null,"282a7a42",null);e.default=component.exports},698:function(t,e,n){},721:function(t,e,n){"use strict";n.r(e);n(353);var r=n(323),h=n(473),o=n.n(h),d=Object(r.c)({components:{VueP5:o.a},data:function(){return{NROWS:10,NCOLS:10,size:[],alphas:[],sizeFinals:[],alphaFinals:[],paddingx:100,paddingy:130,randomWidth:30,dataWidth:40,dataHeight:40,dataMargin:20,FR:10,SPEED:.3,dataTypes:["收盤價","調整後收盤價","股價淨值比","本益比","營業利益","外資自營商買進股數","集保庫存","月營收","當沖成交數","融資融券","殖利率"],columns:["1101","1102","1103","1104","1107","1108","1109","1110","1201","........."],stockNames:{1101:"台泥",1102:"亞泥",1103:"嘉泥",1104:"環泥",1107:"建台",1108:"幸福",1109:"信大",1110:"東泥",1201:"味全",1203:"味王",1207:"嘉食化",1210:"大成",1213:"大飲",".........":""},dates:["2010-01-04","2010-01-05","2010-01-06","2010-01-07","2010-01-08","2010-01-11","2010-01-12","2010-01-13",":","2021-01-15"],timer:0,maxTimer:15,cnt:0}},methods:{renderColumns:function(t){for(var e=this.paddingy-30,i=0;i<this.NROWS;i++){var n=i*(this.dataWidth+this.dataMargin)+this.paddingx-10;t.fill("white"),t.text(this.columns[i]+" "+this.stockNames[this.columns[i]],n,e)}},renderCode:function(t,i){var code='data.get("'+this.dataTypes[i%this.dataTypes.length]+'")';t.fill("white"),t.textSize(24),t.text(code,20,50),t.textSize(12)},renderRows:function(t){for(var e=this.paddingx/5,i=0;i<this.NCOLS;i++){var n=i*(this.dataHeight+this.dataMargin)+this.paddingy+this.dataHeight/2;t.fill("white"),t.text(this.dates[i],e,n)}},initializeArray:function(t,e){for(var i=0;i<this.NROWS;i++){t[i]=[];for(var n=0;n<this.NCOLS;n++)t[i][n]=e}},setup:function(t){var e=window.visualViewport.width<600?t.windowWidth:t.windowWidth/2;t.createCanvas(e-64,800),this.initializeArray(this.size,0),this.initializeArray(this.alphas,100),this.initializeArray(this.sizeFinals,100),this.initializeArray(this.alphaFinals,100)},windowresized:function(t){var e=window.visualViewport.width<600?t.windowWidth:t.windowWidth/2;t.resizeCanvas(e-64,t.height)},generateRandomStyle:function(t){for(var i=0;i<this.NROWS;i++)for(var e=0;e<this.NCOLS;e++)this.sizeFinals[i][e]=t.random(this.randomWidth)-this.randomWidth/2,this.alphaFinals[i][e]=t.random(200)},step:function(){for(var i=0;i<this.NROWS;i++)for(var t=0;t<this.NCOLS;t++)this.size[i][t]=this.sizeFinals[i][t]*this.SPEED+(1-this.SPEED)*this.size[i][t],this.alphas[i][t]=this.alphaFinals[i][t]*this.SPEED+(1-this.SPEED)*this.alphas[i][t]},rander:function(t){for(var i=0;i<this.NROWS;i++)for(var e=0;e<this.NCOLS;e++){var n=this.size[i][e],r=this.alphas[i][e],h=i*(this.dataWidth+this.dataMargin)+this.paddingx,o=e*(this.dataHeight+this.dataMargin)+this.paddingy,d=t.color("#ffffff");t.noFill(),t.stroke(t.color("#ffffff66")),t.rect(h,o,this.dataWidth,this.dataHeight),d.setAlpha(r),t.stroke(d),t.fill(d),t.rect(h-n/2,o-n/2,this.dataWidth+n,this.dataHeight+n)}},draw:function(t){t.clear(),t.frameRate(this.FR),0===this.timer&&this.generateRandomStyle(t),this.renderCode(t,this.cnt),this.renderColumns(t),this.renderRows(t),this.rander(t),this.step(),this.timer=(this.timer+1)%this.maxTimer,0===this.timer&&(this.cnt+=1)}}}),l=n(40),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("vue-p5",{attrs:{"additional-events":["windowresized"]},on:{windowresized:t.windowresized,setup:t.setup,draw:t.draw}})}),[],!1,null,null,null);e.default=component.exports},722:function(t,e,n){"use strict";n.r(e);n(61),n(353);var r=n(323),h=n(473),o=n.n(h),d=Object(r.c)({components:{VueP5:o.a},data:function(){return{nTimeseries:5,timeseries:[],maxTimeseriesLength:0,xTickSize:10,xpadding:0,height:500,ypadding:200,GREEN:"#08c79e",BLUE:"#252786",RED:"#ff3385"}},methods:{setup:function(t){t.createCanvas(t.windowWidth,this.height),t.frameRate(20),this.maxTimeseriesLength=(t.windowWidth-this.xpadding)/this.xTickSize;for(var i=0;i<this.nTimeseries;i++)this.timeseries[i]=[0]},windowresized:function(t){t.resizeCanvas(t.windowWidth,this.height),this.maxTimeseriesLength=t.width/this.xTickSize},appendTimeseries:function(t){var e=this.nTimeseries-1,n=1300/t.width*1.2;this.timeseries[e].length<this.maxTimeseriesLength?this.timeseries[e].push(this.timeseries[e][this.timeseries[e].length-1]+t.random(this.timeseries[e].length*n)-this.timeseries[e].length*n*3/4.5):(this.timeseries.shift(),this.timeseries.push([0]))},renderText:function(t){var e=t.map(0,-100,100,this.ypadding,t.height),n=this.xpadding;t.fill("gray"),t.textSize(16),t.text("累積報酬率",n+10,e-10),t.text("當天報酬",n+10,e+30),t.text("下跌幅度",n+10,e+80)},renderTimeseries:function(t){var e=this.nTimeseries,n=this.timeseries,r=this.xTickSize,h=this.xpadding;this.renderText(t);for(var i=0;i<e;i++)for(var o=1;o<n[i].length;o++){var d=n[i][o-1],l=n[i][o];d=t.map(d,-1e3,1e3,this.ypadding,t.height),l=t.map(l,-1e3,1e3,this.ypadding,t.height);var c=r*(o-1)+h,f=r*o+h,m=t.map(i,0,e,0,255),v=t.map(i,0,e,0,2);t.strokeWeight(v),t.stroke(m),t.line(c,d,f,l)}var w=e-1,k=n[w][n[w].length-1],x=n[w].length*r+h,y=t.map(k,-1e3,1e3,this.ypadding,t.height);t.strokeWeight(0),t.textSize(24),t.fill("#ffff00aa"),t.circle(x,y,30),w=n.length-1;var _=0;for(_=1;_<n[w].length;_++){var S=n[w][_-1],C=n[w][_],z=r*(_-1)+h,O=t.map(100,-1e3,1e3,this.ypadding,t.height);t.strokeWeight(0),t.fill(this.RED+"aa"),t.rect(z,O,r/2,.5*(C-S))}for(w=n.length-2;_<n[w].length;_++){var E=n[w][_-1],j=n[w][_],W=r*(_-1)+h,D=t.map(100,-1e3,1e3,this.ypadding,t.height);t.strokeWeight(0),t.fill(this.RED+"66"),t.rect(W,D,r/2,.5*(j-E))}w=n.length-1;var R=0,dd=[];for(_=0;_<n[w].length;_++){var T=n[w][_];R=t.min(T,R),dd[_]=T-R}w=n.length-2,R=0;for(var N=_;_<n[w].length;_++){var P=n[w][_];R=t.min(P,R),dd[_]=P-R}for(_=1;_<n[w].length;_++){var A=dd[_-1],L=dd[_],F=r*(_-1)+h,V=r*_+h;A=t.map(A,-200,200,this.ypadding,t.height)+60,L=t.map(L,-200,200,this.ypadding,t.height)+60,t.strokeWeight(2),_<N?t.stroke(this.GREEN+"99"):t.stroke(this.GREEN+"33"),t.line(F,A,V,L)}for(var $=0;$<e-1;$++){var M=r*(n[$].length-1)+h,G=n[$][n[$].length-1];G=t.map(G,-1e3,1e3,this.ypadding,t.height);var H=t.map($,0,e,3,120),K=t.color("white"),B=t.map($,0,e-1,0,25);K.setAlpha(B),t.fill(K),t.stroke("#ffffff00"),t.circle(M,G,H)}},draw:function(t){t.background("#0a0a24"),this.appendTimeseries(t),this.renderTimeseries(t)}}}),l=(n(611),n(40)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("vue-p5",{attrs:{"additional-events":["windowresized"]},on:{windowresized:t.windowresized,setup:t.setup,draw:t.draw}})}),[],!1,null,"6f93fc62",null);e.default=component.exports},723:function(t,e,n){"use strict";n.r(e);var r=n(96),h=(n(353),n(60),n(61),n(323)),o=n(473),d=n.n(o),l=Object(h.c)({components:{VueP5:d.a},data:function(){return{nClouds:5,objs:[],objSizes:[],renderObjs:[],renderObjSizes:[],nData:20,datas:[],dataSizes:[]}},methods:{randomNewData:function(t){for(var e=this.datas,n=t.width,r=t.height,i=0;i<this.nData;i++)if(void 0===e[i]){e[i]=[t.random(n),3*r/4],this.dataSizes[i]=t.random(n/5);break}},randomCloud:function(t){for(var e=this.objs,n=this.objSizes,r=t.width,h=t.height,i=0;i<this.nClouds;i++)e[i]=[t.random(r/2)-r/4+r/2,t.random(h/5)-h/10+h/4],n[i]=t.random(r/6)+r/6},randerCloud:function(t){for(var i=0;i<this.nClouds;i++)if(void 0!==this.renderObjs[i]){var e="white";t.stroke(e),t.fill(e),t.circle.apply(t,Object(r.a)(this.renderObjs[i]).concat([this.renderObjSizes[i]]))}},randerData:function(t){for(var e=this.datas,n=t.height,i=0;i<this.nData;i++)if(void 0!==e[i]){var r=t.map(e[i][1],n/4,3*n/4,0,100),h=t.color("white");h.setAlpha(r),t.stroke(h),t.fill(h),t.circle(e[i][0],e[i][1],this.dataSizes[i])}},approximateCloud:function(){for(var t=this.renderObjs,e=this.renderObjSizes,n=this.objs,r=this.objSizes,i=0;i<this.nClouds;i++)void 0===t[i]&&(t[i]=n[i],e[i]=0);for(var h=0;h<this.nClouds;h++)void 0===n[h]&&(delete t[h],delete e[h]);for(var o=.99,d=0;d<this.nClouds;d++)t[d][0]=t[d][0]*o+n[d][0]*(1-o),t[d][1]=t[d][1]*o+n[d][1]*(1-o),e[d]=.8*e[d]+r[d]*(1-.8)},uploadData:function(t){for(var e=t.width/2,n=this.datas,r=t.height,i=0;i<this.nData;i++)if(void 0!==n[i])if(n[i][0]+=.05*(e-n[i][0]),n[i][1]>r/4){var h=t.map(n[i][1],4*r/5,r/4,0,30);n[i][1]-=h}else delete n[i],delete this.dataSizes[i]},setup:function(t){var e=window.visualViewport.width<600?t.windowWidth-100:t.windowWidth/2-100;console.log(e,window.visualViewport.width),t.createCanvas(e,500),this.randomCloud(t)},windowresized:function(t){var e=window.visualViewport.width<600?t.windowWidth-100:t.windowWidth/2-100;t.resizeCanvas(e,500)},draw:function(t){t.background("#252786"),t.clear(),t.frameRate(20),t.frameCount%20==0&&this.randomCloud(t),t.frameCount%5==0&&this.randomNewData(t),this.approximateCloud(t),this.randerCloud(t),this.randerData(t),this.uploadData(t)}}}),c=n(40),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vue-p5",{attrs:{"additional-events":["windowresized"]},on:{windowresized:t.windowresized,setup:t.setup,draw:t.draw}})],1)}),[],!1,null,null,null);e.default=component.exports},840:function(t,e,n){t.exports=n.p+"img/robot2.5c18d17.png"},841:function(t,e,n){t.exports=n.p+"img/human.ad987b2.png"},842:function(t,e,n){t.exports=n.p+"img/group.ffea69f.png"},843:function(t,e,n){"use strict";n(698)},896:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"uk-text-primary"},[t._v("科學。簡單")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-section uk-padding-small",staticStyle:{background:"#f2f6fb",overflow:"hidden","z-index":"2"},attrs:{id:"robot-section"}},[r("div",{staticClass:"uk-container uk-container-small top-container"},[r("div",{staticClass:"uk-child-width-1-2@m uk-child-width-1-1 uk-grid-collapse",attrs:{"uk-grid":""}},[r("div",{staticStyle:{"z-index":"2"}},[r("div",{staticStyle:{"margin-top":"100px"}},[r("h2",{staticClass:"uk-text-primary"},[t._v("\n              策略經過歷史模擬，更能歷久不衰，獲取超額報酬！\n            ")]),t._v(" "),r("p",[t._v("\n              FinLab 提供台股 Python\n              量化交易最前瞻的技術、資料庫、演算法，幫助您開發選股策略，獲取超額報酬：\n            ")]),t._v(" "),r("ul",[r("li",[t._v("完整的股價、營收、籌碼、財報資料庫")]),t._v(" "),r("li",[t._v("超多範例，快速程式碼開發策略")]),t._v(" "),r("li",[t._v("策略儀表版")])]),t._v(" "),r("a",{attrs:{href:"https://doc.finlab.tw/getting-start/",target:"_blank"}},[r("button",{staticClass:"\n                      uk-button\n                      uk-button-large\n                      uk-button-primary\n                      uk-margin-large-top\n                    ",staticStyle:{"font-weight":"500","font-size":"1rem"}},[t._v("\n                超簡單程式碼\n              ")])])])]),t._v(" "),r("div",{staticClass:"parallax",attrs:{"uk-parallax":"target: #robot-section;y: 60vh;"}},[r("div",{staticStyle:{width:"1200px","margin-left":"-200px"}},[r("img",{attrs:{src:n(840),width:"800px"}})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("現成策略範例，實戰直接使用。")]),t._v(" "),n("li",[t._v("程式自動執行，線上監控績效。")]),t._v(" "),n("li",[t._v("策略自動下單（2023 Q1）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"parallax",attrs:{"uk-parallax":"target: #human-section;y: 70vh"}},[e("div",{staticStyle:{width:"1200px","margin-left":"-200px"}},[e("img",{attrs:{src:n(841),width:"800px"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("超過 3 小時影音課程")]),t._v(" "),n("li",[t._v("超過 20 個程式碼範例")]),t._v(" "),n("li",[t._v("Discord 社團與助教輔導")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"parallax",attrs:{"uk-parallax":"target: #group-section;y: 30vh"}},[e("div",{staticStyle:{width:"800px","margin-left":"-150px"}},[e("img",{attrs:{src:n(842),width:"1000px"}})])])}],h=(n(46),n(30),n(47),n(62),n(42),n(63),n(25)),o=n(55),d=n(617),l=n(721),c=n(722),f=n(723);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={head:{title:"打造成功的投資策略 - 台灣股市 Python 回測平台的分析工具",meta:[{hid:"description",name:"description",content:"歡迎使用我們的台灣股市回測平台，這是一個強大的工具，可幫助您測試股票交易策略的效果。我們的平台提供豐富的歷史股市數據和分析工具，讓您能夠輕鬆地模擬過去的股票交易，並了解您的策略在不同市況下的表現。這個平台適用於股票投資者、交易員、教育機構或是任何想要研究股票市場的人。註冊使用我們的台灣股市回測平台，讓您的投資決策更明智。"}]},name:"Login",components:{KbarAnimation:d.default,DataAnimation:l.default,BacktestAnimation:c.default,CloudAnimation:f.default},methods:v({copyString:function(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e)}},Object(o.b)({signOut:"signOut"})),computed:v({},Object(o.c)({user:"user"})),watch:{user:function(t,e){null===e&&t&&this.$router.push("/strategies")}}},k=(n(843),n(40)),component=Object(k.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"-64px"}},[n("div",{staticClass:"uk-inline",staticStyle:{"z-index":"1",height:"70vh",overflow:"hidden"}},[n("div",{staticStyle:{height:"70vh"},attrs:{"uk-parallax":"target: #main-section; y: 30vh; easing: 0"}},[n("KbarAnimation")],1),t._v(" "),n("div",{staticClass:"gradient-background uk-position-cover",staticStyle:{height:"70vh"}}),t._v(" "),n("div",{staticClass:"uk-overlay uk-position-center-left uk-padding-remove-left",staticStyle:{width:"100%"},attrs:{id:"main-section"}},[n("div",{staticClass:"uk-container uk-container-small top-container"},[t._m(0),t._v(" "),n("h1",{staticClass:"uk-text-primary"},[t._v("Python 程式選股最佳方案")]),t._v(" "),n("div",{staticStyle:{margin:"1rem 0"}},[t._v("\n          從頭開始學習，提供完整教學，是你重新體驗 Python 強大的新契機。\n        ")]),t._v(" "),n("nuxt-link",{attrs:{to:"/strategies"}},[n("button",{staticClass:"uk-button uk-button-large uk-button-primary",staticStyle:{"font-weight":"500","font-size":"1rem"}},[t._v("\n            開始使用\n          ")])])],1)])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"uk-section",staticStyle:{"overflow-y":"hidden",background:"white",padding:"0"},attrs:{id:"human-section"}},[n("div",{staticClass:"uk-container uk-container-small top-container",staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"uk-child-width-1-2@m uk-child-width-1-1",attrs:{"uk-grid":""}},[n("div",{staticStyle:{"z-index":"2"}},[n("div",{staticStyle:{"margin-top":"100px"}},[n("h2",{staticClass:"uk-text-primary bold"},[t._v("\n              解放你的時間，增加投資效率，績效更穩定。\n            ")]),t._v(" "),n("p",[t._v("\n              每天盯盤股票，有讓你的交易技術變好嗎？你可以讓程式幫你決斷買賣股票時機點。\n            ")]),t._v(" "),t._m(2),t._v(" "),n("nuxt-link",{attrs:{to:"/strategies"}},[n("button",{staticClass:"\n                      uk-button\n                      uk-button-large\n                      uk-button-primary\n                      uk-margin-large-top\n                    ",staticStyle:{"font-weight":"500","font-size":"1rem"}},[t._v("\n                策略績效公開\n              ")])])],1)]),t._v(" "),t._m(3)])])]),t._v(" "),n("div",{staticClass:"uk-section",staticStyle:{background:"#f2f6fb",overflow:"hidden","padding-bottom":"200px"},attrs:{id:"group-section"}},[n("div",{staticClass:"uk-container uk-container-small top-container"},[n("div",{staticClass:"uk-child-width-1-2@m uk-child-width-1-1",attrs:{"uk-grid":""}},[n("div",{staticStyle:{"z-index":"2","margin-top":"100px"}},[n("div",[n("h2",{staticClass:"uk-text-primary"},[t._v("\n              影音教學，VIP 社團，讓你的學習更有效率。\n            ")]),t._v(" "),n("p",[t._v("\n              不論是學習\n              Python，還是學習投資，我們都有充足的影片介紹，程式碼範例，只要你有心，每天\n              30 分鐘，變成 Python 投資高手。\n            ")]),t._v(" "),t._m(4),t._v(" "),n("nuxt-link",{attrs:{to:"/courses"}},[n("button",{staticClass:"\n                      uk-button\n                      uk-button-large\n                      uk-button-primary\n                      uk-margin-large-top\n                    ",staticStyle:{"font-weight":"500","font-size":"1rem"}},[t._v("\n                完整影音教學\n              ")])])],1)]),t._v(" "),t._m(5)])])])])}),r,!1,null,"e9b8b506",null);e.default=component.exports;installComponents(component,{KbarAnimation:n(617).default})}}]);