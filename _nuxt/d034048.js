(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{364:function(t,e,n){},372:function(t,e,n){"use strict";n.r(e);n(44),n(47),n(60);var r=n(19),o={props:{value:{type:String},autocomplete:{type:String,default:"true"}},data:function(){return{sid:[],sdict:{},candidates:[],currentStock:"",text:"",target:0,composing:!1,history:[]}},created:function(){this.text=this.value;var t=this;r.c.collection("twStock").doc("searchTree").get().then((function(e){if(e.exists){var data=e.data();t.sdict=data.searchTree.sdict,t.slist=data.searchTree.slist}else console.log("cannot find strategy menu")}))},methods:{moveCursor:function(t){0!=this.candidates.length?this.target+=t:this.target=-1},selectStock:function(t){t.preventDefault(),-1!=this.target&&this.chooseStock(this.candidates[this.target])},chooseStock:function(s){if(!this.composing){var t=this;console.log("emit",s),this.$emit("input",s),this.history.unshift(s),this.history=this.history.filter((function(e,n){return t.history.indexOf(e)==n})),this.history.length>3&&(this.history=[this.history[0],this.history[1],this.history[2]]),this.currentStock=s,this.candidates=[],this.text=s,this.target=-1,document.getElementById("search-box").blur()}},clearStock:function(t){this.text="",this.candidates=[],this.target=-1,this.$emit("update","")},digitupdate:function(t){var s,e=t.target.value;this.$emit("update",e),(s=e).replace(/[^\x00-\xff]/g,"rr").length==s.length&&this.update(t)},update:function(t){var e=event.target.value;if(this.text=e,""!=e){var n=this.sdict;for(var i in e){var r=e[i];if(!(r in n))return void(this.candidates=["找不到此股票代號"]);n=n[r]}for(var o=[],c=[n];c&&0!=c.length&&!((n=c.pop())===parseInt(n,10)&&(o.push(this.slist[n]),o.length>20));)for(var d in n)c.unshift(n[d]);this.candidates=o,1==this.candidates.length&&this.chooseStock(this.candidates[0])}else this.candidates=[]}}},c=(n(390),n(41)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"uk-search uk-search-navbar uk-card uk-flex",staticStyle:{width:"100%",border:"1px solid #ddd",background:"rgba(255, 255, 255, 0.2)"}},[n("span",{staticStyle:{"padding-left":"10px"},attrs:{"uk-search-icon":""}}),t._v(" "),n("input",{staticClass:"uk-search-input uk-text-primary uk-text-light",staticStyle:{"padding-left":"60px"},attrs:{id:"search-box",name:"Search",type:"search",placeholder:"股票代號",autocomplete:"off"},domProps:{value:t.text},on:{change:t.digitupdate,input:t.digitupdate,compositionstart:function(e){t.composing=!0},compositionend:function(e){t.composing=!1,t.update()},focus:t.clearStock,keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.moveCursor(1)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.moveCursor(-1)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.selectStock.apply(null,arguments))}]}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.candidates.length>0&&"true"==t.autocomplete,expression:"candidates.length > 0 && autocomplete == 'true'"}],staticClass:"uk-flex uk-flex-wrap uk-flex-wrap-around"},t._l(t.candidates,(function(e,i){return n("div",{key:e,staticClass:"\n          uk-card uk-card-default uk-card-body uk-padding-small uk-card-hover\n        ",staticStyle:{cursor:"pointer","border-radius":"10px",margin:"20px 20px 0 0"},on:{click:function(n){return t.chooseStock(e)}}},[t._v("\n        "+t._s(i==t.target?e+" * ":e)+"\n      ")])})),0)])}),[],!1,null,"3c0325ef",null);e.default=component.exports},390:function(t,e,n){"use strict";n(364)}}]);