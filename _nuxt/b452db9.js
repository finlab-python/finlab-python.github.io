(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{557:function(e,t,h){},613:function(e,t,h){"use strict";h(557)},710:function(e,t,h){"use strict";h.r(t);h(61),h(362);var r=h(325),n=h(483),d=h.n(n),o=Object(r.c)({components:{VueP5:d.a},data:function(){return{nTimeseries:5,timeseries:[],maxTimeseriesLength:0,xTickSize:10,xpadding:0,height:500,ypadding:200,GREEN:"#08c79e",BLUE:"#252786",RED:"#ff3385"}},methods:{setup:function(e){e.createCanvas(e.windowWidth,this.height),e.frameRate(20),this.maxTimeseriesLength=(e.windowWidth-this.xpadding)/this.xTickSize;for(var i=0;i<this.nTimeseries;i++)this.timeseries[i]=[0]},windowresized:function(e){e.resizeCanvas(e.windowWidth,this.height),this.maxTimeseriesLength=e.width/this.xTickSize},appendTimeseries:function(e){var t=this.nTimeseries-1,h=1300/e.width*1.2;this.timeseries[t].length<this.maxTimeseriesLength?this.timeseries[t].push(this.timeseries[t][this.timeseries[t].length-1]+e.random(this.timeseries[t].length*h)-this.timeseries[t].length*h*3/4.5):(this.timeseries.shift(),this.timeseries.push([0]))},renderText:function(e){var t=e.map(0,-100,100,this.ypadding,e.height),h=this.xpadding;e.fill("gray"),e.textSize(16),e.text("累積報酬率",h+10,t-10),e.text("當天報酬",h+10,t+30),e.text("下跌幅度",h+10,t+80)},renderTimeseries:function(e){var t=this.nTimeseries,h=this.timeseries,r=this.xTickSize,n=this.xpadding;this.renderText(e);for(var i=0;i<t;i++)for(var d=1;d<h[i].length;d++){var o=h[i][d-1],m=h[i][d];o=e.map(o,-1e3,1e3,this.ypadding,e.height),m=e.map(m,-1e3,1e3,this.ypadding,e.height);var f=r*(d-1)+n,l=r*d+n,c=e.map(i,0,t,0,255),v=e.map(i,0,t,0,2);e.strokeWeight(v),e.stroke(c),e.line(f,o,l,m)}var w=t-1,x=h[w][h[w].length-1],T=h[w].length*r+n,k=e.map(x,-1e3,1e3,this.ypadding,e.height);e.strokeWeight(0),e.textSize(24),e.fill("#ffff00aa"),e.circle(T,k,30),w=h.length-1;var y=0;for(y=1;y<h[w].length;y++){var z=h[w][y-1],E=h[w][y],W=r*(y-1)+n,R=e.map(100,-1e3,1e3,this.ypadding,e.height);e.strokeWeight(0),e.fill(this.RED+"aa"),e.rect(W,R,r/2,.5*(E-z))}for(w=h.length-2;y<h[w].length;y++){var S=h[w][y-1],L=h[w][y],D=r*(y-1)+n,G=e.map(100,-1e3,1e3,this.ypadding,e.height);e.strokeWeight(0),e.fill(this.RED+"66"),e.rect(D,G,r/2,.5*(L-S))}w=h.length-1;var N=0,dd=[];for(y=0;y<h[w].length;y++){var j=h[w][y];N=e.min(j,N),dd[y]=j-N}w=h.length-2,N=0;for(var C=y;y<h[w].length;y++){var J=h[w][y];N=e.min(J,N),dd[y]=J-N}for(y=1;y<h[w].length;y++){var O=dd[y-1],_=dd[y],A=r*(y-1)+n,B=r*y+n;O=e.map(O,-200,200,this.ypadding,e.height)+60,_=e.map(_,-200,200,this.ypadding,e.height)+60,e.strokeWeight(2),y<C?e.stroke(this.GREEN+"99"):e.stroke(this.GREEN+"33"),e.line(A,O,B,_)}for(var P=0;P<t-1;P++){var U=r*(h[P].length-1)+n,V=h[P][h[P].length-1];V=e.map(V,-1e3,1e3,this.ypadding,e.height);var $=e.map(P,0,t,3,120),F=e.color("white"),H=e.map(P,0,t-1,0,25);F.setAlpha(H),e.fill(F),e.stroke("#ffffff00"),e.circle(U,V,$)}},draw:function(e){e.background("#0a0a24"),this.appendTimeseries(e),this.renderTimeseries(e)}}}),m=(h(613),h(40)),component=Object(m.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("vue-p5",{attrs:{"additional-events":["windowresized"]},on:{windowresized:e.windowresized,setup:e.setup,draw:e.draw}})}),[],!1,null,"6f93fc62",null);t.default=component.exports}}]);