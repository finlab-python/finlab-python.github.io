(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{617:function(t,e,n){"use strict";n.r(e);var r=n(96),h=(n(63),n(352),n(18),n(67),n(323)),d=n(458),o=n.n(d),c=Object(h.c)({components:{VueP5:o.a},props:{},data:function(){return{time:0,nbars:100,maxTime:50,lineSize:20,padding:100,height:.9*window.innerHeight,RED:"#ff3385",GREEN:"#08c79e",BLUE:"#252786",prices:[100],signals:[0],fr:30,frCnt:0,addKbarTime:5}},methods:{generateNewPrice:function(t,e){var n=(t.random(100)-50)/10+e[e.length-1];return n=t.min(2e4,n),(n=t.max(0,n))+(this.time>this.maxTime/2?t.random(2):-t.random(2))},appendArray:function(t,e,n){return t.push(e),t.length>n&&t.shift(),t},generateNewSignal:function(){return 0===this.time?-1:this.time===this.maxTime/2?1:0},drawArrow:function(t,base,e){t.triangle(base.x-10,base.y,base.x+10,base.y,e.x,e.y)},windowresized:function(t){t.resizeCanvas(t.windowWidth,this.height)},setup:function(t){t.createCanvas(t.windowWidth,this.height)},draw:function(t){t.background(255),t.frameRate(this.fr),this.kbarMargin=.5*t.width/this.nbars,this.kbarDistance=t.width/this.nbars;var e=this.kbarDistance/this.addKbarTime*(this.frCnt%this.addKbarTime);if(this.prices.length<this.nbars&&(e=0),this.frCnt%this.addKbarTime==0||this.prices.length!==this.nbars){var p=this.generateNewPrice(t,this.prices);this.prices=this.appendArray(this.prices,p,this.nbars);var n=this.generateNewSignal();this.signals=this.appendArray(this.signals,n,this.nbars),this.time+=1}for(var h=this.prices,d=t.max.apply(t,Object(r.a)(h))+10,o=t.min.apply(t,Object(r.a)(h))-10,i=1;i<h.length;i++){var c=t.map(h[i-1],o,d,this.padding,t.height-this.padding),l=t.map(h[i],o,d,this.padding,t.height-this.padding),m=t.map(h[h.length-1],o,d,this.padding,t.height-this.padding),w=c<l?this.GREEN:this.RED;t.fill(w),t.stroke(w),t.strokeWeight(.5);var f=this.kbarDistance,x=this.kbarMargin,k=this.lineSize;if(t.line(i*f+(f-x)/2-e,t.min(c,l)-k,i*f+(f-x)/2-e,t.max(c,l)+k),t.rect(i*f-e,c,f-x,l-c),i===h.length-1&&(t.stroke("#666"),t.line(0,l,t.width,l)),0!==this.signals[i]){var E=1===this.signals[i]?this.GREEN:this.RED,v=i*f+(f-x)/2-e,R=1===this.signals[i]?1:-1,y=t.min(l,c),z=t.max(l,c),C=1===this.signals[i]?y:z,N=C-30*R,T=C-50*R,D=C-90*R+30*t.max(R,0),S=C-120*R+30*t.max(R,0),W=1===this.signals[i]?"SELL":"BUY",A=R*Math.round((h[h.length-1]-h[i])/300*1e3)/10,L=A>0?this.RED:this.GREEN,j=A>0;A=A.toString()+"%",j&&(A="+"+A);var B=(l+c)/2;t.noFill(),t.stroke(E),t.strokeWeight(2),t.circle(v,B,50),t.fill(this.BLUE),t.stroke(this.BLUE);var G=t.createVector(v,T),K=t.createVector(v,N);this.drawArrow(t,G,K,E),t.strokeWeight(.1),t.textSize(30),t.text(W,G.x-30,D),t.fill(L),t.text(A,G.x-40,S),t.stroke("#666"),t.strokeWeight(1),t.line(v,l,v,m),t.stroke("white"),t.circle(v,m,10)}}this.frCnt+=1,this.time===this.maxTime&&(this.time=0),1e3*this.fr===this.frCnt&&(this.frCnt=0)}}}),l=n(41),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("vue-p5",{attrs:{"additional-events":["windowresized"]},on:{windowresized:t.windowresized,setup:t.setup,draw:t.draw}})}),[],!1,null,"282a7a42",null);e.default=component.exports}}]);