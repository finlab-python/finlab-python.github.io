(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{700:function(t,e,n){},845:function(t,e,n){"use strict";n(700)},899:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(31),n(123),n(34),n(47),n(117),n(323)),c=(n(245),Object(r.c)({components:{},props:{code:{default:[]},update_date:{default:""},next_trading_date:{default:""},name:{default:""}},data:function(){return{fileUrl:"",fileName:"",cellTemplate:{cell_type:"code",execution_count:null,metadata:{},outputs:[],source:[""]},ipynbTemplate:{cells:[],metadata:{kernelspec:{display_name:"Python 3",language:"python",name:"python3"},language_info:{codemirror_mode:{name:"ipython",version:3},file_extension:".py",mimetype:"text/x-python",name:"python",nbconvert_exporter:"python",pygments_lexer:"ipython3",version:"3.7.9"}},nbformat:4,nbformat_minor:4}}},methods:{generatePyFile:function(){this.fileUrl="data:application/octet-stream;charset=utf-8,"+encodeURI([this.code].join("\n")),this.fileName=this.name+".py"},generateIpynbFile:function(){var t=Object.assign({},this.ipynbTemplate);for(var i in this.code){var e=this.code[i].split("\n");for(var n in e)n!==e.length-1&&(e[n]+="\n");var o=Object.assign({},this.cellTemplate);o.source=e,t.cells.push(o)}this.fileUrl="data:application/octet-stream;charset=utf-8,"+JSON.stringify(t),this.fileName=this.name+".ipynb"},openIpynbOnColab:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("https://asia-northeast1-fdata-299302.cloudfunctions.net/generate_colab_strategy",{uid:t.$store.state.user.uid,sid:t.name});case 2:n=e.sent,console.log(n);try{window.open(n.data)}catch(t){}case 5:case"end":return e.stop()}}),e)})))()}}})),l=(n(845),n(41)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"chart-title"},[t._v("程式碼")]),t._v(" "),n("div",{attrs:{"uk-grid":"","uk-height-match":""}},[t.code.constructor===Array?n("div",t._l(t.code,(function(t,i){return n("div",{key:i,staticStyle:{"margin-bottom":"24px"}},[n("highlightjs",{attrs:{language:"python",code:t}})],1)})),0):n("div",[n("highlightjs",{attrs:{language:"python",code:t.c}})],1)])])}),[],!1,null,"0a02b43d",null);e.default=component.exports}}]);