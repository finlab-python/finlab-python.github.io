(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{386:function(t,e,o){"use strict";o.d(e,"a",(function(){return h}));var n=o(383),r=o(348),l=o(318);function h(t,e,o){e=Object(l.t)(e)&&{coordDimensions:e}||Object(l.m)({encodeDefine:t.getEncode()},e);var source=t.getSource(),h=Object(n.a)(source,e).dimensions,d=new r.a(h,t);return d.initData(source,o),d}},413:function(t,e,o){"use strict";o.d(e,"a",(function(){return pt}));var n=o(403),r=o(340),l=o(319),h=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.type=e.type,o}return Object(l.a)(e,t),e.type="tooltip",e.dependencies=["axisPointer"],e.defaultOption={zlevel:0,z:60,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",renderMode:"auto",confine:null,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"#fff",shadowBlur:10,shadowColor:"rgba(0, 0, 0, .2)",shadowOffsetX:1,shadowOffsetY:2,borderRadius:4,borderWidth:1,padding:null,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#666",fontSize:14}},e}(o(334).a),d=h,c=o(318),f=o(324),m=o(337),y=o(339),v=o(404),_=o(327);function w(t){var e=t.get("confine");return null!=e?!!e:"richText"===t.get("renderMode")}function x(t){if(f.a.domSupported)for(var style=document.documentElement.style,i=0,e=t.length;i<e;i++)if(t[i]in style)return t[i]}var O=x(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),C=x(["webkitTransition","transition","OTransition","MozTransition","msTransition"]);function S(t,e){if(!t)return e;e=Object(_.h)(e,!0);var o=t.indexOf(e);return(t=-1===o?e:"-"+t.slice(0,o)+"-"+e).toLowerCase()}var k=o(330),M=S(C,"transition"),T=S(O,"transform"),j="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;"+(f.a.transform3dSupported?"will-change:transform;":"");function I(t,e,o){var n=t.toFixed(0)+"px",r=e.toFixed(0)+"px";if(!f.a.transformSupported)return o?"top:"+r+";left:"+n+";":[["top",r],["left",n]];var l=f.a.transform3dSupported,h="translate"+(l?"3d":"")+"("+n+","+r+(l?",0":"")+")";return o?"top:0;left:0;"+T+":"+h+";":[["top",0],["left",0],[O,h]]}function A(t,e,o){var n=[],r=t.get("transitionDuration"),l=t.get("backgroundColor"),h=t.get("shadowBlur"),d=t.get("shadowColor"),y=t.get("shadowOffsetX"),v=t.get("shadowOffsetY"),w=t.getModel("textStyle"),x=Object(k.d)(t,"html"),O=y+"px "+v+"px "+h+"px "+d;return n.push("box-shadow:"+O),e&&r&&n.push(function(t,e){var o="cubic-bezier(0.23,1,0.32,1)",n=" "+t/2+"s "+o,r="opacity"+n+",visibility"+n;return e||(n=" "+t+"s "+o,r+=f.a.transformSupported?","+T+n:",left"+n+",top"+n),M+":"+r}(r,o)),l&&(f.a.canvasSupported?n.push("background-color:"+l):(n.push("background-color:#"+Object(m.i)(l)),n.push("filter:alpha(opacity=70)"))),Object(c.k)(["width","color","radius"],(function(e){var o="border-"+e,r=Object(_.h)(o),l=t.get(r);null!=l&&n.push(o+":"+l+("color"===e?"":"px"))})),n.push(function(t){var e=[],o=t.get("fontSize"),n=t.getTextColor();n&&e.push("color:"+n),e.push("font:"+t.getFont()),o&&e.push("line-height:"+Math.round(3*o/2)+"px");var r=t.get("textShadowColor"),l=t.get("textShadowBlur")||0,h=t.get("textShadowOffsetX")||0,d=t.get("textShadowOffsetY")||0;return r&&l&&e.push("text-shadow:"+h+"px "+d+"px "+l+"px "+r),Object(c.k)(["decoration","align"],(function(o){var n=t.get(o);n&&e.push("text-"+o+":"+n)})),e.join(";")}(w)),null!=x&&n.push("padding:"+Object(_.g)(x).join("px ")+"px"),n.join(";")+";"}function D(t,e,o,n,r){var l=e&&e.painter;if(o){var h=l&&l.getViewportRoot();h&&Object(v.c)(t,h,document.body,n,r)}else{t[0]=n,t[1]=r;var d=l&&l.getViewportRootOffset();d&&(t[0]+=d.offsetLeft,t[1]+=d.offsetTop)}t[2]=t[0]/e.getWidth(),t[3]=t[1]/e.getHeight()}var z=function(){function t(t,e,o){if(this._show=!1,this._styleCoord=[0,0,0,0],this._enterable=!0,this._firstShow=!0,this._longHide=!0,f.a.wxa)return null;var n=document.createElement("div");n.domBelongToZr=!0,this.el=n;var r=this._zr=e.getZr(),l=this._appendToBody=o&&o.appendToBody;D(this._styleCoord,r,l,e.getWidth()/2,e.getHeight()/2),l?document.body.appendChild(n):t.appendChild(n),this._container=t;var h=this;n.onmouseenter=function(){h._enterable&&(clearTimeout(h._hideTimeout),h._show=!0),h._inContent=!0},n.onmousemove=function(t){if(t=t||window.event,!h._enterable){var e=r.handler,o=r.painter.getViewportRoot();Object(y.e)(o,t,!0),e.dispatch("mousemove",t)}},n.onmouseleave=function(){h._inContent=!1,h._enterable&&h._show&&h.hideLater(h._hideDelay)}}return t.prototype.update=function(t){var e,style,o,n=this._container,r=(style="position",(o=(e=n).currentStyle||document.defaultView&&document.defaultView.getComputedStyle(e))?style?o[style]:o:null),l=n.style;"absolute"!==l.position&&"absolute"!==r&&(l.position="relative"),t.get("alwaysShowContent")&&this._moveIfResized(),this.el.className=t.get("className")||""},t.prototype.show=function(t,e){clearTimeout(this._hideTimeout),clearTimeout(this._longHideTimeout);var o=this.el,style=o.style,n=this._styleCoord;o.innerHTML?style.cssText=j+A(t,!this._firstShow,this._longHide)+I(n[0],n[1],!0)+"border-color:"+Object(_.b)(e)+";"+(t.get("extraCssText")||"")+";pointer-events:"+(this._enterable?"auto":"none"):style.display="none",this._show=!0,this._firstShow=!1,this._longHide=!1},t.prototype.setContent=function(content,t,e,o,n){var r=this.el;if(null!=content){var l="";if(Object(c.B)(n)&&"item"===e.get("trigger")&&!w(e)&&(l=function(t,e,o){if(!Object(c.B)(o)||"inside"===o)return"";var n=t.get("backgroundColor"),r=t.get("borderWidth");e=Object(_.b)(e);var l,h,d="left"===(l=o)?"right":"right"===l?"left":"top"===l?"bottom":"top",f=Math.max(1.5*Math.round(r),6),m="",y=T+":";Object(c.r)(["left","right"],d)>-1?(m+="top:50%",y+="translateY(-50%) rotate("+(h="left"===d?-225:-45)+"deg)"):(m+="left:50%",y+="translateX(-50%) rotate("+(h="top"===d?225:45)+"deg)");var v=h*Math.PI/180,w=f+r,x=w*Math.abs(Math.cos(v))+w*Math.abs(Math.sin(v)),O=e+" solid "+r+"px;";return'<div style="'+["position:absolute;width:"+f+"px;height:"+f+"px;",(m+=";"+d+":-"+Math.round(100*((x-Math.SQRT2*r)/2+Math.SQRT2*r-(x-w)/2))/100+"px")+";"+y+";","border-bottom:"+O,"border-right:"+O,"background-color:"+n+";"].join("")+'"></div>'}(e,o,n)),Object(c.B)(content))r.innerHTML=content+l;else if(content){r.innerHTML="",Object(c.t)(content)||(content=[content]);for(var i=0;i<content.length;i++)Object(c.v)(content[i])&&content[i].parentNode!==r&&r.appendChild(content[i]);if(l&&r.childNodes.length){var h=document.createElement("div");h.innerHTML=l,r.appendChild(h)}}}else r.innerHTML=""},t.prototype.setEnterable=function(t){this._enterable=t},t.prototype.getSize=function(){var t=this.el;return[t.offsetWidth,t.offsetHeight]},t.prototype.moveTo=function(t,e){var o=this._styleCoord;if(D(o,this._zr,this._appendToBody,t,e),null!=o[0]&&null!=o[1]){var n=this.el.style,r=I(o[0],o[1]);Object(c.k)(r,(function(t){n[t[0]]=t[1]}))}},t.prototype._moveIfResized=function(){var t=this._styleCoord[2],e=this._styleCoord[3];this.moveTo(t*this._zr.getWidth(),e*this._zr.getHeight())},t.prototype.hide=function(){var t=this,style=this.el.style;style.visibility="hidden",style.opacity="0",f.a.transform3dSupported&&(style.willChange=""),this._show=!1,this._longHideTimeout=setTimeout((function(){return t._longHide=!0}),500)},t.prototype.hideLater=function(time){!this._show||this._inContent&&this._enterable||(time?(this._hideDelay=time,this._show=!1,this._hideTimeout=setTimeout(Object(c.c)(this.hide,this),time)):this.hide())},t.prototype.isShow=function(){return this._show},t.prototype.dispose=function(){this.el.parentNode.removeChild(this.el)},t}(),B=o(388),P=o(349);function L(t){return Math.max(0,t)}function H(style){var t=L(style.shadowBlur||0),e=L(style.shadowOffsetX||0),o=L(style.shadowOffsetY||0);return{left:L(t-e),right:L(t+e),top:L(t-o),bottom:L(t+o)}}function E(t,e,o,n){t[0]=o,t[1]=n,t[2]=t[0]/e.getWidth(),t[3]=t[1]/e.getHeight()}var N=function(){function t(t){this._show=!1,this._styleCoord=[0,0,0,0],this._enterable=!0,this._zr=t.getZr(),E(this._styleCoord,this._zr,t.getWidth()/2,t.getHeight()/2)}return t.prototype.update=function(t){t.get("alwaysShowContent")&&this._moveIfResized()},t.prototype.show=function(){this._hideTimeout&&clearTimeout(this._hideTimeout),this.el.show(),this._show=!0},t.prototype.setContent=function(content,t,e,o,n){c.A(content)&&Object(P.c)(""),this.el&&this._zr.remove(this.el);var r=e.getModel("textStyle");this.el=new B.a({style:{rich:t.richTextStyles,text:content,lineHeight:22,backgroundColor:e.get("backgroundColor"),borderRadius:e.get("borderRadius"),borderWidth:1,borderColor:o,shadowColor:e.get("shadowColor"),shadowBlur:e.get("shadowBlur"),shadowOffsetX:e.get("shadowOffsetX"),shadowOffsetY:e.get("shadowOffsetY"),textShadowColor:r.get("textShadowColor"),textShadowBlur:r.get("textShadowBlur")||0,textShadowOffsetX:r.get("textShadowOffsetX")||0,textShadowOffsetY:r.get("textShadowOffsetY")||0,fill:e.get(["textStyle","color"]),padding:Object(k.d)(e,"richText"),verticalAlign:"top",align:"left"},z:e.get("z")}),this._zr.add(this.el);var l=this;this.el.on("mouseover",(function(){l._enterable&&(clearTimeout(l._hideTimeout),l._show=!0),l._inContent=!0})),this.el.on("mouseout",(function(){l._enterable&&l._show&&l.hideLater(l._hideDelay),l._inContent=!1}))},t.prototype.setEnterable=function(t){this._enterable=t},t.prototype.getSize=function(){var t=this.el,e=this.el.getBoundingRect(),o=H(t.style);return[e.width+o.left+o.right,e.height+o.top+o.bottom]},t.prototype.moveTo=function(t,e){var o=this.el;if(o){var n=this._styleCoord;E(n,this._zr,t,e),t=n[0],e=n[1];var style=o.style,r=L(style.borderWidth||0),l=H(style);o.x=t+r+l.left,o.y=e+r+l.top,o.markRedraw()}},t.prototype._moveIfResized=function(){var t=this._styleCoord[2],e=this._styleCoord[3];this.moveTo(t*this._zr.getWidth(),e*this._zr.getHeight())},t.prototype.hide=function(){this.el&&this.el.hide(),this._show=!1},t.prototype.hideLater=function(time){!this._show||this._inContent&&this._enterable||(time?(this._hideDelay=time,this._show=!1,this._hideTimeout=setTimeout(c.c(this.hide,this),time)):this.hide())},t.prototype.isShow=function(){return this._show},t.prototype.dispose=function(){this._zr.remove(this.el)},t}(),R=o(322),Y=o(528),X=o(402),V=o(331),W=o(354),F=o(401),U=o(351),G=o(400),Z=o(321),J=o(335),Q=o(392),$=o(329),K=o(376),tt=o(399),et=o(355),ot=c.c,it=c.k,nt=R.n,at=new Y.a({shape:{x:-1,y:-1,width:2,height:2}}),st=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.type=e.type,o}return Object(l.a)(e,t),e.prototype.init=function(t,e){if(!f.a.node){var o=t.getComponent("tooltip"),n=o.get("renderMode");this._renderMode=Object(Z.i)(n),this._tooltipContent="richText"===this._renderMode?new N(e):new z(e.getDom(),e,{appendToBody:o.get("appendToBody",!0)})}},e.prototype.render=function(t,e,o){if(!f.a.node){this.group.removeAll(),this._tooltipModel=t,this._ecModel=e,this._api=o,this._alwaysShowContent=t.get("alwaysShowContent");var n=this._tooltipContent;n.update(t),n.setEnterable(t.get("enterable")),this._initGlobalListener(),this._keepShow(),this._updatePosition="html"===this._renderMode?Object(et.c)(ot(this._doUpdatePosition,this),50):this._doUpdatePosition}},e.prototype._initGlobalListener=function(){var t=this._tooltipModel.get("triggerOn");F.a("itemTooltip",this._api,ot((function(e,o,n){"none"!==t&&(t.indexOf(e)>=0?this._tryShow(o,n):"leave"===e&&this._hide(n))}),this))},e.prototype._keepShow=function(){var t=this._tooltipModel,e=this._ecModel,o=this._api;if(null!=this._lastX&&null!=this._lastY&&"none"!==t.get("triggerOn")){var n=this;clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout((function(){!o.isDisposed()&&n.manuallyShowTip(t,e,o,{x:n._lastX,y:n._lastY,dataByCoordSys:n._lastDataByCoordSys})}))}},e.prototype.manuallyShowTip=function(t,e,o,n){if(n.from!==this.uid&&!f.a.node){var r=ht(n,o);this._ticket="";var l=n.dataByCoordSys,h=function(t,e,o){var n=Object(Z.r)(t).queryOptionMap,r=n.keys()[0];if(!r||"series"===r)return;var l,h=Object(Z.t)(e,r,n.get(r),{useDefault:!1,enableAll:!1,enableNone:!1}).models[0];if(!h)return;if(o.getViewOfComponentModel(h).group.traverse((function(e){var o=Object($.a)(e).tooltipConfig;if(o&&o.name===t.name)return l=e,!0})),l)return{componentMainType:r,componentIndex:h.componentIndex,el:l}}(n,e,o);if(h){var rect=h.el.getBoundingRect().clone();rect.applyTransform(h.el.transform),this._tryShow({offsetX:rect.x+rect.width/2,offsetY:rect.y+rect.height/2,target:h.el,position:n.position,positionDefault:"bottom"},r)}else if(n.tooltip&&null!=n.x&&null!=n.y){var d=at;d.x=n.x,d.y=n.y,d.update(),Object($.a)(d).tooltipConfig={name:null,option:n.tooltip},this._tryShow({offsetX:n.x,offsetY:n.y,target:d},r)}else if(l)this._tryShow({offsetX:n.x,offsetY:n.y,position:n.position,dataByCoordSys:l,tooltipOption:n.tooltipOption},r);else if(null!=n.seriesIndex){if(this._manuallyAxisShowTip(t,e,o,n))return;var c=Object(X.a)(n,e),m=c.point[0],y=c.point[1];null!=m&&null!=y&&this._tryShow({offsetX:m,offsetY:y,target:c.el,position:n.position,positionDefault:"bottom"},r)}else null!=n.x&&null!=n.y&&(o.dispatchAction({type:"updateAxisPointer",x:n.x,y:n.y}),this._tryShow({offsetX:n.x,offsetY:n.y,position:n.position,target:o.getZr().findHover(n.x,n.y).target},r))}},e.prototype.manuallyHideTip=function(t,e,o,n){var r=this._tooltipContent;!this._alwaysShowContent&&this._tooltipModel&&r.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=this._lastDataByCoordSys=null,n.from!==this.uid&&this._hide(ht(n,o))},e.prototype._manuallyAxisShowTip=function(t,e,o,n){var r=n.seriesIndex,l=n.dataIndex,h=e.getComponent("axisPointer").coordSysAxesInfo;if(null!=r&&null!=l&&null!=h){var d=e.getSeriesByIndex(r);if(d)if("axis"===lt([d.getData().getItemModel(l),d,(d.coordinateSystem||{}).model],this._tooltipModel).get("trigger"))return o.dispatchAction({type:"updateAxisPointer",seriesIndex:r,dataIndex:l,position:n.position}),!0}},e.prototype._tryShow=function(t,e){var o=t.target;if(this._tooltipModel){this._lastX=t.offsetX,this._lastY=t.offsetY;var n=t.dataByCoordSys;if(n&&n.length)this._showAxisTooltip(n,t);else if(o){var r,l;this._lastDataByCoordSys=null,Object(tt.a)(o,(function(t){return null!=Object($.a)(t).dataIndex?(r=t,!0):null!=Object($.a)(t).tooltipConfig?(l=t,!0):void 0}),!0),r?this._showSeriesItemTooltip(t,r,e):l?this._showComponentItemTooltip(t,l,e):this._hide(e)}else this._lastDataByCoordSys=null,this._hide(e)}},e.prototype._showOrMove=function(t,e){var o=t.get("showDelay");e=c.c(e,this),clearTimeout(this._showTimout),o>0?this._showTimout=setTimeout(e,o):e()},e.prototype._showAxisTooltip=function(t,e){var o=this._ecModel,n=this._tooltipModel,r=[e.offsetX,e.offsetY],l=lt([e.tooltipOption],n),h=this._renderMode,d=[],f=Object(k.c)("section",{blocks:[],noHeader:!0}),m=[],y=new k.a;it(t,(function(t){it(t.dataByAxis,(function(t){var e=o.getComponent(t.axisDim+"Axis",t.axisIndex),n=t.value;if(e&&null!=n){var r=G.d(n,e.axis,o,t.seriesDataIndices,t.valueLabelOpt),l=Object(k.c)("section",{header:r,noHeader:!c.R(r),sortBlocks:!0,blocks:[]});f.blocks.push(l),c.k(t.seriesDataIndices,(function(c){var f=o.getSeriesByIndex(c.seriesIndex),v=c.dataIndexInside,w=f.getDataParams(v);if(!(w.dataIndex<0)){w.axisDim=t.axisDim,w.axisIndex=t.axisIndex,w.axisType=t.axisType,w.axisId=t.axisId,w.axisValue=U.c(e.axis,{value:n}),w.axisValueLabel=r,w.marker=y.makeTooltipMarker("item",_.b(w.color),h);var x=Object(K.b)(f.formatTooltip(v,!0,null));x.markupFragment&&l.blocks.push(x.markupFragment),x.markupText&&m.push(x.markupText),d.push(w)}}))}}))})),f.blocks.reverse(),m.reverse();var v=e.position,w=l.get("order"),x=Object(k.b)(f,y,h,w,o.get("useUTC"),l.get("textStyle"));x&&m.unshift(x);var O="richText"===h?"\n\n":"<br/>",C=m.join(O);this._showOrMove(l,(function(){this._updateContentNotChangedOnAxis(t,d)?this._updatePosition(l,v,r[0],r[1],this._tooltipContent,d):this._showTooltipContent(l,C,d,Math.random()+"",r[0],r[1],v,null,y)}))},e.prototype._showSeriesItemTooltip=function(t,e,o){var n=this._ecModel,r=Object($.a)(e),l=r.seriesIndex,h=n.getSeriesByIndex(l),d=r.dataModel||h,c=r.dataIndex,f=r.dataType,data=d.getData(f),m=this._renderMode,y=t.positionDefault,v=lt([data.getItemModel(c),d,h&&(h.coordinateSystem||{}).model],this._tooltipModel,y?{position:y}:null),w=v.get("trigger");if(null==w||"item"===w){var x=d.getDataParams(c,f),O=new k.a;x.marker=O.makeTooltipMarker("item",_.b(x.color),m);var C=Object(K.b)(d.formatTooltip(c,!1,f)),S=v.get("order"),M=C.markupFragment?Object(k.b)(C.markupFragment,O,m,S,n.get("useUTC"),v.get("textStyle")):C.markupText,T="item_"+d.name+"_"+c;this._showOrMove(v,(function(){this._showTooltipContent(v,M,x,T,t.offsetX,t.offsetY,t.position,t.target,O)})),o({type:"showTip",dataIndexInside:c,dataIndex:data.getRawIndex(c),seriesIndex:l,from:this.uid})}},e.prototype._showComponentItemTooltip=function(t,e,o){var n=Object($.a)(e),r=n.tooltipConfig.option||{};if(c.B(r)){r={content:r,formatter:r}}var l=[r],h=this._ecModel.getComponent(n.componentMainType,n.componentIndex);h&&l.push(h),l.push({formatter:r.content});var d=t.positionDefault,f=lt(l,this._tooltipModel,d?{position:d}:null),m=f.get("content"),y=Math.random()+"",v=new k.a;this._showOrMove(f,(function(){var o=c.d(f.get("formatterParams")||{});this._showTooltipContent(f,m,o,y,t.offsetX,t.offsetY,t.position,e,v)})),o({type:"showTip",from:this.uid})},e.prototype._showTooltipContent=function(t,e,o,n,r,l,h,d,f){if(this._ticket="",t.get("showContent")&&t.get("show")){var m=this._tooltipContent,y=t.get("formatter");h=h||t.get("position");var html=e,v=this._getNearestPoint([r,l],o,t.get("trigger"),t.get("borderColor")).color;if(y)if(c.B(y)){var w=t.ecModel.get("useUTC"),x=c.t(o)?o[0]:o;html=y,x&&x.axisType&&x.axisType.indexOf("time")>=0&&(html=Object(Q.h)(x.axisValue,html,w)),html=_.d(html,o,!0)}else if(c.w(y)){var O=ot((function(e,html){e===this._ticket&&(m.setContent(html,f,t,v,h),this._updatePosition(t,h,r,l,m,o,d))}),this);this._ticket=n,html=y(o,n,O)}else html=y;m.setContent(html,f,t,v,h),m.show(t,v),this._updatePosition(t,h,r,l,m,o,d)}},e.prototype._getNearestPoint=function(t,e,o,n){return"axis"===o||c.t(e)?{color:n||("html"===this._renderMode?"#fff":"none")}:c.t(e)?void 0:{color:n||e.color||e.borderColor}},e.prototype._doUpdatePosition=function(t,e,o,n,content,r,l){var h=this._api.getWidth(),d=this._api.getHeight();e=e||t.get("position");var f=content.getSize(),m=t.get("align"),y=t.get("verticalAlign"),rect=l&&l.getBoundingRect().clone();if(l&&rect.applyTransform(l.transform),c.w(e)&&(e=e([o,n],r,content.el,rect,{viewSize:[h,d],contentSize:f.slice()})),c.t(e))o=nt(e[0],h),n=nt(e[1],d);else if(c.A(e)){var v=e;v.width=f[0],v.height=f[1];var _=V.e(v,{width:h,height:d});o=_.x,n=_.y,m=null,y=null}else if(c.B(e)&&l){var x=function(t,rect,e,o){var n=e[0],r=e[1],l=Math.ceil(Math.SQRT2*o)+8,h=0,d=0,c=rect.width,f=rect.height;switch(t){case"inside":h=rect.x+c/2-n/2,d=rect.y+f/2-r/2;break;case"top":h=rect.x+c/2-n/2,d=rect.y-r-l;break;case"bottom":h=rect.x+c/2-n/2,d=rect.y+f+l;break;case"left":h=rect.x-n-l,d=rect.y+f/2-r/2;break;case"right":h=rect.x+c+l,d=rect.y+f/2-r/2}return[h,d]}(e,rect,f,t.get("borderWidth"));o=x[0],n=x[1]}else{x=function(t,e,content,o,n,r,l){var h=content.getSize(),d=h[0],c=h[1];null!=r&&(t+d+r+2>o?t-=d+r:t+=r);null!=l&&(e+c+l>n?e-=c+l:e+=l);return[t,e]}(o,n,content,h,d,m?null:20,y?null:20);o=x[0],n=x[1]}if(m&&(o-=ct(m)?f[0]/2:"right"===m?f[0]:0),y&&(n-=ct(y)?f[1]/2:"bottom"===y?f[1]:0),w(t)){x=function(t,e,content,o,n){var r=content.getSize(),l=r[0],h=r[1];return t=Math.min(t+l,o)-l,e=Math.min(e+h,n)-h,t=Math.max(t,0),e=Math.max(e,0),[t,e]}(o,n,content,h,d);o=x[0],n=x[1]}content.moveTo(o,n)},e.prototype._updateContentNotChangedOnAxis=function(t,e){var o=this._lastDataByCoordSys,n=this._cbParamsList,r=!!o&&o.length===t.length;return r&&it(o,(function(o,l){var h=o.dataByAxis||[],d=(t[l]||{}).dataByAxis||[];(r=r&&h.length===d.length)&&it(h,(function(t,o){var l=d[o]||{},h=t.seriesDataIndices||[],f=l.seriesDataIndices||[];(r=r&&t.value===l.value&&t.axisType===l.axisType&&t.axisId===l.axisId&&h.length===f.length)&&it(h,(function(t,e){var o=f[e];r=r&&t.seriesIndex===o.seriesIndex&&t.dataIndex===o.dataIndex})),n&&c.k(t.seriesDataIndices,(function(t){var o=t.seriesIndex,l=e[o],h=n[o];l&&h&&h.data!==l.data&&(r=!1)}))}))})),this._lastDataByCoordSys=t,this._cbParamsList=e,!!r},e.prototype._hide=function(t){this._lastDataByCoordSys=null,t({type:"hideTip",from:this.uid})},e.prototype.dispose=function(t,e){f.a.node||(this._tooltipContent.dispose(),F.b("itemTooltip",e))},e.type="tooltip",e}(J.a);function lt(t,e,o){var n,r=e.ecModel;o?(n=new W.a(o,r,r),n=new W.a(e.option,n,r)):n=e;for(var i=t.length-1;i>=0;i--){var l=t[i];l&&(l instanceof W.a&&(l=l.get("tooltip",!0)),c.B(l)&&(l={formatter:l}),l&&(n=new W.a(l,n,r)))}return n}function ht(t,e){return t.dispatchAction||c.c(e.dispatchAction,e)}function ct(t){return"center"===t||"middle"===t}var ut=st;function pt(t){Object(r.a)(n.a),t.registerComponentModel(d),t.registerComponentView(ut),t.registerAction({type:"showTip",event:"showTip",update:"tooltip:manuallyShowTip"},(function(){})),t.registerAction({type:"hideTip",event:"hideTip",update:"tooltip:manuallyHideTip"},(function(){}))}},693:function(t,e,o){},805:function(t,e,o){"use strict";o(693)},870:function(t,e,o){"use strict";o.r(e);var n=o(8),r=(o(31),o(49),o(18),o(28),o(42),o(47),o(60),o(323)),l=o(19),h=o(540),d=o(319),c=o(353),f=function(){this.angle=0,this.width=10,this.r=10,this.x=0,this.y=0},m=function(t){function e(e){var o=t.call(this,e)||this;return o.type="pointer",o}return Object(d.a)(e,t),e.prototype.getDefaultShape=function(){return new f},e.prototype.buildPath=function(t,e){var o=Math.cos,n=Math.sin,r=e.r,l=e.width,h=e.angle,d=e.x-o(h)*l*(l>=r/3?1:2),c=e.y-n(h)*l*(l>=r/3?1:2);h=e.angle-Math.PI/2,t.moveTo(d,c),t.lineTo(e.x+o(h)*l,e.y+n(h)*l),t.lineTo(e.x+o(e.angle)*r,e.y+n(e.angle)*r),t.lineTo(e.x-o(h)*l,e.y-n(h)*l),t.lineTo(d,c)},e}(c.b),y=o(727),v=o(551),_=o(388),w=o(375),x=o(466),O=o(325),C=o(326),S=o(369),k=o(322),M=function(){this.cx=0,this.cy=0,this.r0=0,this.r=0,this.startAngle=0,this.endAngle=2*Math.PI,this.clockwise=!0},T=function(t){function e(e){var o=t.call(this,e)||this;return o.type="sausage",o}return Object(d.a)(e,t),e.prototype.getDefaultShape=function(){return new M},e.prototype.buildPath=function(t,e){var o=e.cx,n=e.cy,r=Math.max(e.r0||0,0),l=Math.max(e.r,0),h=.5*(l-r),d=r+h,c=e.startAngle,f=e.endAngle,m=e.clockwise,y=Math.cos(c),v=Math.sin(c),_=Math.cos(f),w=Math.sin(f);(m?f-c<2*Math.PI:c-f<2*Math.PI)&&(t.moveTo(y*r+o,v*r+n),t.arc(y*d+o,v*d+n,h,-Math.PI+c,c,!m)),t.arc(o,n,l,c,f,!m),t.moveTo(_*l+o,w*l+n),t.arc(_*d+o,w*d+n,h,f-2*Math.PI,f-Math.PI,!m),0!==r&&(t.arc(o,n,r,f,c,m),t.moveTo(y*r+o,w*r+n)),t.closePath()},e}(c.b),symbol=o(328),j=o(336),I=o(318),A=o(329);function D(t,e){var label=null==t?"":t+"";return e&&("string"==typeof e?label=e.replace("{value}",label):"function"==typeof e&&(label=e(t))),label}var z=2*Math.PI,B=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.type=e.type,o}return Object(d.a)(e,t),e.prototype.render=function(t,e,o){this.group.removeAll();var n=t.get(["axisLine","lineStyle","color"]),r=function(t,e){var o=t.get("center"),n=e.getWidth(),r=e.getHeight(),l=Math.min(n,r);return{cx:Object(k.n)(o[0],e.getWidth()),cy:Object(k.n)(o[1],e.getHeight()),r:Object(k.n)(t.get("radius"),l/2)}}(t,o);this._renderMain(t,e,o,n,r),this._data=t.getData()},e.prototype.dispose=function(){},e.prototype._renderMain=function(t,e,o,n,r){for(var l=this.group,h=t.get("clockwise"),d=-t.get("startAngle")/180*Math.PI,c=-t.get("endAngle")/180*Math.PI,f=t.getModel("axisLine"),m=f.get("roundCap")?T:y.a,v=f.get("show"),_=f.getModel("lineStyle"),w=_.get("width"),x=(c-d)%z||c===d?(c-d)%z:z,O=d,i=0;v&&i<n.length;i++){var C=new m({shape:{startAngle:O,endAngle:c=d+x*Math.min(Math.max(n[i][0],0),1),cx:r.cx,cy:r.cy,clockwise:h,r0:r.r-w,r:r.r},silent:!0});C.setStyle({fill:n[i][1]}),C.setStyle(_.getLineStyle(["color","width"])),l.add(C),O=c}var S=function(t){if(t<=0)return n[0][1];var i;for(i=0;i<n.length;i++)if(n[i][0]>=t&&(0===i?0:n[i-1][0])<t)return n[i][1];return n[i-1][1]};if(!h){var k=d;d=c,c=k}this._renderTicks(t,e,o,S,r,d,c,h,w),this._renderTitleAndDetail(t,e,o,S,r),this._renderAnchor(t,r),this._renderPointer(t,e,o,S,r,d,c,h,w)},e.prototype._renderTicks=function(t,e,o,n,r,l,h,d,c){for(var f,m,y=this.group,w=r.cx,x=r.cy,O=r.r,S=+t.get("min"),M=+t.get("max"),T=t.getModel("splitLine"),j=t.getModel("axisTick"),I=t.getModel("axisLabel"),A=t.get("splitNumber"),z=j.get("splitNumber"),B=Object(k.n)(T.get("length"),O),P=Object(k.n)(j.get("length"),O),L=l,H=(h-l)/A,E=H/z,N=T.getModel("lineStyle").getLineStyle(),R=j.getModel("lineStyle").getLineStyle(),Y=T.get("distance"),i=0;i<=A;i++){if(f=Math.cos(L),m=Math.sin(L),T.get("show")){var X=Y?Y+c:c,V=new v.a({shape:{x1:f*(O-X)+w,y1:m*(O-X)+x,x2:f*(O-B-X)+w,y2:m*(O-B-X)+x},style:N,silent:!0});"auto"===N.stroke&&V.setStyle({stroke:n(i/A)}),y.add(V)}if(I.get("show")){X=I.get("distance")+Y;var label=D(Object(k.r)(i/A*(M-S)+S),I.get("formatter")),W=n(i/A);y.add(new _.a({style:Object(C.b)(I,{text:label,x:f*(O-B-X)+w,y:m*(O-B-X)+x,verticalAlign:m<-.8?"top":m>.8?"bottom":"middle",align:f<-.4?"left":f>.4?"right":"center"},{inheritColor:W}),silent:!0}))}if(j.get("show")&&i!==A){X=(X=j.get("distance"))?X+c:c;for(var F=0;F<=z;F++){f=Math.cos(L),m=Math.sin(L);var U=new v.a({shape:{x1:f*(O-X)+w,y1:m*(O-X)+x,x2:f*(O-P-X)+w,y2:m*(O-P-X)+x},silent:!0,style:R});"auto"===R.stroke&&U.setStyle({stroke:n((i+F/z)/A)}),y.add(U),L+=E}L-=E}else L+=H}},e.prototype._renderPointer=function(t,e,o,n,r,l,h,d,c){var f=this.group,v=this._data,_=this._progressEls,x=[],C=t.get(["pointer","show"]),S=t.getModel("progress"),M=S.get("show"),data=t.getData(),D=data.mapDimension("value"),z=+t.get("min"),B=+t.get("max"),P=[z,B],L=[l,h];function H(e,o){var n,l=data.getItemModel(e).getModel("pointer"),h=Object(k.n)(l.get("width"),r.r),d=Object(k.n)(l.get("length"),r.r),c=t.get(["pointer","icon"]),f=l.get("offsetCenter"),y=Object(k.n)(f[0],r.r),v=Object(k.n)(f[1],r.r),_=l.get("keepAspect");return(n=c?Object(symbol.a)(c,y-h/2,v-d,h,d,null,_):new m({shape:{angle:-Math.PI/2,width:h,r:d,x:y,y:v}})).rotation=-(o+Math.PI/2),n.x=r.cx,n.y=r.cy,n}function E(t,e){var o=S.get("roundCap")?T:y.a,n=S.get("overlap"),h=n?S.get("width"):c/data.count(),f=n?r.r-h:r.r-(t+1)*h,m=n?r.r:r.r-t*h,progress=new o({shape:{startAngle:l,endAngle:e,cx:r.cx,cy:r.cy,clockwise:d,r0:f,r:m}});return n&&(progress.z2=B-data.get(D,t)%B),progress}(M||C)&&(data.diff(v).add((function(e){if(C){var o=H(e,l);w.a(o,{rotation:-(Object(k.j)(data.get(D,e),P,L,!0)+Math.PI/2)},t),f.add(o),data.setItemGraphicEl(e,o)}if(M){var progress=E(e,l),n=S.get("clip");w.a(progress,{shape:{endAngle:Object(k.j)(data.get(D,e),P,L,n)}},t),f.add(progress),Object(A.b)(t.seriesIndex,data.dataType,e,progress),x[e]=progress}})).update((function(e,o){if(C){var n=v.getItemGraphicEl(o),r=n?n.rotation:l,h=H(e,r);h.rotation=r,w.f(h,{rotation:-(Object(k.j)(data.get(D,e),P,L,!0)+Math.PI/2)},t),f.add(h),data.setItemGraphicEl(e,h)}if(M){var d=_[o],progress=E(e,d?d.shape.endAngle:l),c=S.get("clip");w.f(progress,{shape:{endAngle:Object(k.j)(data.get(D,e),P,L,c)}},t),f.add(progress),Object(A.b)(t.seriesIndex,data.dataType,e,progress),x[e]=progress}})).execute(),data.each((function(t){var e=data.getItemModel(t),o=e.getModel("emphasis");if(C){var r=data.getItemGraphicEl(t),l=data.getItemVisual(t,"style"),h=l.fill;if(r instanceof j.a){var d=r.style;r.useStyle(Object(I.m)({image:d.image,x:d.x,y:d.y,width:d.width,height:d.height},l))}else r.useStyle(l),"pointer"!==r.type&&r.setColor(h);r.setStyle(e.getModel(["pointer","itemStyle"]).getItemStyle()),"auto"===r.style.fill&&r.setStyle("fill",n(Object(k.j)(data.get(D,t),P,[0,1],!0))),r.z2EmphasisLift=0,Object(O.H)(r,e),Object(O.n)(r,o.get("focus"),o.get("blurScope"))}if(M){var progress=x[t];progress.useStyle(data.getItemVisual(t,"style")),progress.setStyle(e.getModel(["progress","itemStyle"]).getItemStyle()),progress.z2EmphasisLift=0,Object(O.H)(progress,e),Object(O.n)(progress,o.get("focus"),o.get("blurScope"))}})),this._progressEls=x)},e.prototype._renderAnchor=function(t,e){var o=t.getModel("anchor");if(o.get("show")){var n=o.get("size"),r=o.get("icon"),l=o.get("offsetCenter"),h=o.get("keepAspect"),d=Object(symbol.a)(r,e.cx-n/2+Object(k.n)(l[0],e.r),e.cy-n/2+Object(k.n)(l[1],e.r),n,n,null,h);d.z2=o.get("showAbove")?1:0,d.setStyle(o.getModel("itemStyle").getItemStyle()),this.group.add(d)}},e.prototype._renderTitleAndDetail=function(t,e,o,n,r){var l=this,data=t.getData(),h=data.mapDimension("value"),d=+t.get("min"),c=+t.get("max"),f=new x.a,m=[],y=[],v=t.isAnimationEnabled(),w=t.get(["pointer","showAbove"]);data.diff(this._data).add((function(t){m[t]=new _.a({silent:!0}),y[t]=new _.a({silent:!0})})).update((function(t,e){m[t]=l._titleEls[e],y[t]=l._detailEls[e]})).execute(),data.each((function(e){var o=data.getItemModel(e),l=data.get(h,e),_=new x.a,O=n(Object(k.j)(l,[d,c],[0,1],!0)),S=o.getModel("title");if(S.get("show")){var M=S.get("offsetCenter"),T=r.cx+Object(k.n)(M[0],r.r),j=r.cy+Object(k.n)(M[1],r.r);(E=m[e]).attr({z2:w?0:2,style:Object(C.b)(S,{x:T,y:j,text:data.getName(e),align:"center",verticalAlign:"middle"},{inheritColor:O})}),_.add(E)}var I=o.getModel("detail");if(I.get("show")){var A=I.get("offsetCenter"),z=r.cx+Object(k.n)(A[0],r.r),B=r.cy+Object(k.n)(A[1],r.r),P=Object(k.n)(I.get("width"),r.r),L=Object(k.n)(I.get("height"),r.r),H=t.get(["progress","show"])?data.getItemVisual(e,"style").fill:O,E=y[e],N=I.get("formatter");E.attr({z2:w?0:2,style:Object(C.b)(I,{x:z,y:B,text:D(l,N),width:isNaN(P)?null:P,height:isNaN(L)?null:L,align:"center",verticalAlign:"middle"},{inheritColor:H})}),Object(C.g)(E,{normal:I},l,(function(t){return D(t,N)})),v&&Object(C.a)(E,e,data,t,{getFormattedLabel:function(t,e,o,n,r,h){return D(h?h.interpolatedValue:l,N)}}),_.add(E)}f.add(_)})),this.group.add(f),this._titleEls=m,this._detailEls=y},e.type="gauge",e}(S.a),P=B,L=o(386),H=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.type=e.type,o.visualStyleAccessPath="itemStyle",o}return Object(d.a)(e,t),e.prototype.getInitialData=function(option,t){return Object(L.a)(this,["value"])},e.type="series.gauge",e.defaultOption={zlevel:0,z:2,colorBy:"data",center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,roundCap:!1,lineStyle:{color:[[1,"#E6EBF8"]],width:10}},progress:{show:!1,overlap:!0,width:10,roundCap:!1,clip:!0},splitLine:{show:!0,length:10,distance:10,lineStyle:{color:"#63677A",width:3,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:6,distance:10,lineStyle:{color:"#63677A",width:1,type:"solid"}},axisLabel:{show:!0,distance:15,color:"#464646",fontSize:12},pointer:{icon:null,offsetCenter:[0,0],show:!0,showAbove:!0,length:"60%",width:6,keepAspect:!1},anchor:{show:!1,showAbove:!1,size:6,icon:"circle",offsetCenter:[0,0],keepAspect:!1,itemStyle:{color:"#fff",borderWidth:0,borderColor:"#5470c6"}},title:{show:!0,offsetCenter:[0,"20%"],color:"#464646",fontSize:16,valueAnimation:!1},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:"#464646",fontSize:30,fontWeight:"bold",lineHeight:30,valueAnimation:!1}},e}(o(370).a),E=H;var N=o(358),R=o(340),Y=o(413),X=o(869),V=o(867);Object(R.a)([h.a,Y.a,X.a,function(t){t.registerChartView(P),t.registerSeriesModel(E)},V.a]);var W=Object(r.c)({head:function(){return{title:"大盤綜合指標：以台灣總經指標、基本面、技術面、籌碼面數據為依據，避開中長期波段跌勢的指南",meta:[{hid:"description",name:"description",content:"「大盤綜合指標」以多項數據篩選出領先指標，提供投資者作為避開中長期波段跌勢的指南與持股水位判斷。了解台灣股市總經指標、基本面、技術面和籌碼面數據，獲取更穩健的投資策略。"}]}},components:{VChart:N.b},data:function(){var t="#ce0743",e="#00cc88",o="#ffcc00",n=[{gt:-1e6,lte:0,color:e},{gt:0,lte:1e6,color:t}];return{market:null,clockOption:null,colors:{"台股多空排列家數":n,"騰落線指標(ADL)":n,"大盤週線MACD":n,"大盤融資維持率":[{gt:-10,lte:1.6,color:e},{gt:1.6,lte:1.7,color:o},{gt:1.7,lte:100,color:t}],"大盤股價淨值比":[{gt:-10,lte:1.4,color:e},{gt:1.4,lte:2,color:o},{gt:2,lte:100,color:t}],"台灣製造業採購經理人指數(PMI)":[{gt:0,lte:50,color:e},{gt:50,lte:100,color:t}],"台灣製造業採購經理人未來6個月展望":[{gt:-10,lte:40,color:e},{gt:40,lte:60,color:o},{gt:60,lte:100,color:t}],"台灣非製造業採購經理人指數(NMI)":[{gt:0,lte:50,color:e},{gt:50,lte:100,color:t}],"景氣領先指標":[{gt:0,lte:100,color:e},{gt:100,lte:200,color:t}],"台灣景氣對策燈號":[{gt:9,lte:17,color:"blue"},{gt:17,lte:23,color:o},{gt:23,lte:32,color:"green"},{gt:32,lte:38,color:"pink"},{gt:38,lte:50,color:"red"}]}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.d)("twMarket","holdIndicator");case 2:o=e.sent,t.market=o,console.log(o),t.clockOption={series:[{type:"gauge",min:0,max:10,axisLine:{lineStyle:{width:10,color:[[.4,"#00cc88"],[.6,"#ffcc00"],[1,"#ce0743"]]}},pointer:{itemStyle:{color:"auto"}},axisTick:{distance:-30,length:8,lineStyle:{color:"#fff",width:2}},splitLine:{distance:-30,length:30,lineStyle:{color:"#fff",width:4}},axisLabel:{color:"auto",distance:16,fontSize:16},detail:{valueAnimation:!0,formatter:"{value} / 10",color:"auto"},data:[{value:o.data[0].values.ind.slice(-1)}]}]};case 6:case"end":return e.stop()}}),e)})))()},methods:{get_value_array:function(t){console.log("get instance",Object.keys(t));var e=Object.keys(t),o=[];for(var n in e){var r=e[n];"benchmark"!==r&&o.push(t[r])}return o},get_value_names:function(t,title){var e=[],o=Object.keys(t);for(var n in o){var r=o[n];"benchmark"!==r&&e.push(r.replace("ind",title))}return e}}}),F=(o(805),o(41)),component=Object(F.a)(W,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{}},[o("div",{staticClass:"uk-container"},[t.market?o("div",{attrs:{"uk-height-match":"target > div > div","uk-grid":""}},[o("div",{staticClass:"uk-width-1-1"},[o("h1",{staticClass:"uk-text-primary"},[t._v(t._s(t.market.data[0].title))]),t._v(" "),o("p",[t._v("\n          "+t._s(t.market.data[0].description)+"\n          請參考"),o("nuxt-link",{attrs:{to:"/strategyview/?uid=TJN4FDuqrwU8DML7DAjUYFIMutp2&sid=台股總體經濟ETF"}},[t._v("此指標大於等於 4 ，持有大盤的歷史績效\n          ")])],1)]),t._v(" "),o("div",{staticClass:"uk-width-1-3@m uk-width-1-1"},[o("div",{staticClass:"uk-card uk-card-default shadow card-board"},[o("div",{staticClass:"small-header"},[t._v("大盤總分")]),t._v(" "),o("v-chart",{staticStyle:{height:"300px"},attrs:{option:t.clockOption,autoresize:""}})],1)]),t._v(" "),o("div",{staticClass:"uk-width-2-3@m uk-width-1-1"},[o("div",{staticClass:"uk-card uk-card-default shadow card-board"},[o("div",{staticClass:"small-header"},[t._v("大盤總分歷史")]),t._v(" "),o("cumulativeReturnChart",{attrs:{values:[t.market.data[0].values.ind],index:t.market.data[0].index,benchmark:t.market.data[0].values.benchmark,secondaryBenchmark:!0,valueName:"",benchmarkName:"",dataZoom:[{startValue:"2020-01-01"},{type:"inside"}],visualMap:[{show:!1,seriesIndex:0,min:0,max:10,pieces:[{gt:0,lte:4,color:"#00cc88"},{gt:4,lte:6,color:"#ffcc00"},{gt:5,lte:10,color:"#ce0743"}]}],maxSamples:1e4}})],1)])]):t._e(),t._v(" "),t.market?o("div",[t._m(0),t._v(" "),t._l(t.market.data.slice(1),(function(e){return"生命線指標"!==e.title?o("div",{key:e.title,staticClass:"uk-wdith-1-1"},[o("div",{staticClass:"uk-margin-large",attrs:{"uk-grid":""}},[o("div",{staticClass:"uk-width-1-3@m uk-width-1-1"},[o("div",{staticClass:"uk-card uk-card-default shadow uk-padding-small",staticStyle:{"max-height":"300px","overflow-y":"scroll"}},[o("h4",[t._v(t._s(e.title))]),t._v(" "),o("p",[t._v(t._s(e.description))]),t._v(" "),o("span",{staticStyle:{"font-style":"bold","font-size":"2rem"}},[t._v(t._s(e.values.ind?Math.round(100*e.values.ind[e.values.ind.length-1])/100:""))])])]),t._v(" "),o("div",{staticClass:"uk-width-2-3@m uk-width-1-1"},[o("div",{staticClass:"uk-card uk-card-default shadow card-board"},[o("div",{staticClass:"small-header"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),o("cumulativeReturnChart",{attrs:{values:t.get_value_array(e.values),index:e.index,secondaryBenchmark:"生命線指標"!==e.title,rebase:!0,valueName:t.get_value_names(e.values,e.title),benchmarkName:"加權報酬指數",benchmark:e.values.benchmark,visualMap:[{show:!1,seriesIndex:0,pieces:e.title in t.colors?t.colors[e.title]:[]}],dataZoom:[{startValue:"2020-01-01"},{type:"inside"}],maxSamples:1e4}})],1)])])]):t._e()}))],2):t._e()])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"uk-margin-large uk-margin-large-top"},[o("h3",{staticClass:"uk-text-primary"},[t._v("編制參考細項")])])}],!1,null,"694b3176",null);e.default=component.exports}}]);