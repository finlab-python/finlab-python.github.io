(window.webpackJsonp=window.webpackJsonp||[]).push([[24,23],{333:function(e,t,n){"use strict";var o=n(10),l=n(81),r=n(43),c=n(61),d=n(22),m=n(11),f=n(343),h=n(154),y=n(344),v=n(345),_=n(93),k=n(346),C=[],x=C.sort,T=m((function(){C.sort(void 0)})),w=m((function(){C.sort(null)})),P=h("sort"),O=!m((function(){if(_)return _<70;if(!(y&&y>3)){if(v)return!0;if(k)return k<603;var code,e,t,n,o="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(n=0;n<47;n++)C.push({k:e+n,v:t})}for(C.sort((function(a,b){return b.v-a.v})),n=0;n<C.length;n++)e=C[n].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:T||!w||!P||!O},{sort:function(e){void 0!==e&&l(e);var t=r(this);if(O)return void 0===e?x.call(t):x.call(t,e);var n,o,m=[],h=c(t);for(o=0;o<h;o++)o in t&&m.push(t[o]);for(m=f(m,function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:d(t)>d(n)?1:-1}}(e)),n=m.length,o=0;o<n;)t[o]=m[o++];for(;o<h;)delete t[o++];return t}})},343:function(e,t){var n=Math.floor,o=function(e,t){var c=e.length,d=n(c/2);return c<8?l(e,t):r(o(e.slice(0,d),t),o(e.slice(d),t),t)},l=function(e,t){for(var element,n,o=e.length,i=1;i<o;){for(n=i,element=e[i];n&&t(e[n-1],element)>0;)e[n]=e[--n];n!==i++&&(e[n]=element)}return e},r=function(e,t,n){for(var o=e.length,l=t.length,r=0,c=0,d=[];r<o||c<l;)r<o&&c<l?d.push(n(e[r],t[c])<=0?e[r++]:t[c++]):d.push(r<o?e[r++]:t[c++]);return d};e.exports=o},344:function(e,t,n){var o=n(80).match(/firefox\/(\d+)/i);e.exports=!!o&&+o[1]},345:function(e,t,n){var o=n(80);e.exports=/MSIE|Trident/.test(o)},346:function(e,t,n){var o=n(80).match(/AppleWebKit\/(\d+)\./);e.exports=!!o&&+o[1]},441:function(e,t,n){},452:function(e,t,n){"use strict";n.r(t);var o=n(517),l=n.n(o),r={name:"BlocklyComponent",props:["options","value","height"],data:function(){return{workspace:null,initialValue:this.$props.value}},mounted:function(){console.log("start mounted component");var e=this.$props.options||{};e.toolbox||(e.toolbox=this.$refs.blocklyToolbox),this.workspace=l.a.inject(this.$refs.blocklyDiv,e);var t=l.a.Xml.textToDom(this.initialValue);l.a.Xml.domToWorkspace(t,this.workspace),console.log("end mounted component")},methods:{injectCode:function(e){var t=l.a.Xml.textToDom(e);this.workspace.clear(),l.a.Xml.domToWorkspace(t,this.workspace)},injectAdditionCode:function(e){var t=l.a.Xml.textToDom(e);console.log("blockly component get xml",t),l.a.Xml.domToWorkspace(t,this.workspace)},getCode:function(){var e=l.a.Xml.workspaceToDom(this.workspace);return l.a.Xml.domToText(e)}},beforeDestroy:function(){var code=this.getCode();this.$emit("input",code)}},c=(n(473),n(41)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%",height:"100%"}},[n("div",{ref:"blocklyDiv",staticClass:"blocklyDiv",style:"height:"+this.$props.height}),e._v(" "),e._m(0)],1)}),[function(){var e=this,t=e.$createElement;return(e._self._c||t)("xml",{pre:!0,attrs:{ref:"blocklyToolbox",style:"display: none"}},[e._t("default")],2)}],!1,null,"1a7cf05c",null);t.default=component.exports},457:function(e,t,n){},473:function(e,t,n){"use strict";n(441)},479:function(e,t,n){"use strict";n.r(t);n(47),n(60);var o=n(452),l=(n(117),n(123),n(62),n(333),n(433)),r=n(474),c=n.n(r),d=200;function m(e,t){""===(t=t.split("#$"))[t.length-1]&&t.pop();var code=t=t.join("\n###"+e);return"("+(code=(code=code.replace(/ /g,"")).replace(/#/g," "))+")"}l.HSV_SATURATION=.3,l.HSV_VALUE=.8,l.defineBlocksWithJsonArray([{type:"data_type",message0:"資料 %1",args0:[{type:"field_input",name:"dataName",text:"price:收盤價"}],output:null,colour:230,tooltip:"",helpUrl:""},{type:"indicator",message0:"技術指標 %1",args0:[{type:"field_input",name:"dataName",text:"RSI(timeperiod=20)"}],output:null,colour:230,tooltip:"",helpUrl:""},{type:"df_rolling",message0:"近 %1 筆 %2 的 %3",args0:[{type:"field_number",name:"window",value:10},{type:"input_value",name:"df"},{type:"field_dropdown",name:"operation",options:[["平均","mean"],["總和","sum"],["最大值","max"],["最小值","min"]]}],inputsInline:!0,output:null,colour:200,tooltip:"",helpUrl:""},{type:"backtest",message0:"回測條件 %1 %2  %3 換股頻率 %4",args0:[{type:"field_dropdown",name:"operator",options:[["and","&"],["or","|"]]},{type:"input_dummy"},{type:"input_statement",name:"total_conditions"},{type:"field_dropdown",name:"rebalance_frequency",options:[["每日","D"],["每週","W"],["每月","M"],["每季","Q"]]}],inputsInline:!1,colour:0,tooltip:"",helpUrl:""},{type:"numerical_operator",message0:"%1 %2 %3 %4",args0:[{type:"input_value",name:"val_1"},{type:"field_dropdown",name:"operations",options:[["+","+"],["-","-"],["x","*"],["/","/"]]},{type:"input_dummy"},{type:"input_value",name:"val_2"}],inputsInline:!0,output:null,colour:d,tooltip:"",helpUrl:""},{type:"inequality",message0:"%1 %2 %3 %4",args0:[{type:"input_value",name:"val_1"},{type:"field_dropdown",name:"inequality",options:[[">",">"],["≥",">="],["<","<"],["≤","<="],["=","="]]},{type:"input_dummy"},{type:"input_value",name:"val_2"}],previousStatement:null,nextStatement:null,colour:d,tooltip:"",helpUrl:""},{type:"logic_conditions",message0:"%1 條件: %2 %3",args0:[{type:"field_dropdown",name:"operator",options:[["and","&&"],["or","||"]]},{type:"input_dummy"},{type:"input_statement",name:"Condition"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:50,tooltip:"",helpUrl:""},{type:"sort",message0:"%1 %2 %3",args0:[{type:"field_dropdown",name:"option",options:[["前","nlargest"],["後","nsmallest"]]},{type:"field_number",name:"threshold",value:10},{type:"field_dropdown",name:"unit",options:[["名","n"],["%","percent"]]}],message1:"%1",args1:[{type:"input_value",name:"value"}],inputsInline:!0,previousStatement:null,nextStatement:null,colour:200,tooltip:"",helpUrl:""},{type:"sort_condition",message0:"符合條件 %1 %2 %3",args0:[{type:"field_dropdown",name:"operator",options:[["And","&"],["Or","|"]]},{type:"input_dummy",name:"dummy"},{type:"input_statement",name:"statements"}],message1:"的股票中，數值 %1 排名 %2 %3 %4",args1:[{type:"input_value",name:"value"},{type:"field_dropdown",name:"option",options:[["前","nlargest"],["後","nsmallest"]]},{type:"field_number",name:"threshold",value:10},{type:"field_dropdown",name:"unit",options:[["名","n"],["%","percent"]]}],inputsInline:!1,previousStatement:null,nextStatement:null,colour:50,tooltip:"",helpUrl:""},{type:"shift",message0:"前 %1 筆 %2",args0:[{type:"field_number",name:"nshift",value:1,min:0},{type:"input_value",name:"df"}],inputsInline:!1,output:null,colour:d,tooltip:"",helpUrl:""}]),l.Python.sort_condition=function(e){var t=e.getFieldValue("option"),n=e.getFieldValue("threshold"),o=e.getFieldValue("unit"),r=l.Python.valueToCode(e,"value",l.Python.ORDER_ATOMIC),c=l.Python.statementToCode(e,"statements");c=m(e.getFieldValue("operator"),c);var code="(((".concat(r,") * (").concat(c,"))");return"nlargest"===t&&"n"===o?code+=".astype(float).is_largest("+n+"))":"nsmallest"===t&&"n"===o?code+=".astype(float).is_smallest("+n+"))":"nlargest"===t&&"percent"===o?code+=".rank(pct=True) > ".concat(n/100,"))"):"nsmallest"===t&&"percent"===o&&(code+=".rank(pct=True) < ".concat(n/100,"))")),code},l.Python.sort=function(e){var t=e.getFieldValue("option"),n=e.getFieldValue("threshold"),o=e.getFieldValue("unit"),r=l.Python.valueToCode(e,"value",l.Python.ORDER_ATOMIC),code="";return"nlargest"===t&&"n"===o?code=r+".is_largest("+n+")":"nsmallest"===t&&"n"===o?code=r+".is_smallest("+n+")":"nlargest"===t&&"percent"===o?code="("+r+".rank(pct=True) > ".concat(n/100,")"):"nsmallest"===t&&"percent"===o&&(code="("+r+".rank(pct=True) < ".concat(n/100,")")),code},l.Python.backtest=function(e){var t=e.getFieldValue("operator"),n=l.Python.statementToCode(e,"total_conditions"),o=(l.Python.valueToCode(e,"weight",l.Python.ORDER_ATOMIC),e.getFieldValue("rebalance_frequency")),code="from finlab import backtest\n";return code+="from finlab import data\n\n",code+="buy = "+m(t,n)+"\n\n",code+='backtest.sim(buy, resample="'+o+'")\n'},l.Python.df_rolling=function(e){var t=e.getFieldValue("window"),n=l.Python.valueToCode(e,"df",l.Python.ORDER_ATOMIC),o=e.getFieldValue("operation");return["(".concat(n,").rolling(").concat(t,").").concat(o,"()"),l.Python.ORDER_NONE]},l.Python.logic_conditions=function(e){return[m(e.getFieldValue("operator"),l.Python.statementToCode(e,"Condition")),l.Python.ORDER_NONE]},l.Python.data_type=function(e){var t=e.getFieldValue("dataName");return['data.get("'.concat(t,'")'),l.Python.ORDER_NONE]},l.Python.indicator=function(e){var t=e.getFieldValue("dataName"),n=t.split("(")[0],o=t.split("(")[1].replace(")","");return['data.indicator("'.concat(n,'", ').concat(o,")"),l.Python.ORDER_NONE]},l.Python.numerical_operator=function(e){var t=l.Python.valueToCode(e,"val_1",l.Python.ORDER_ATOMIC),n=e.getFieldValue("operations"),o=l.Python.valueToCode(e,"val_2",l.Python.ORDER_ATOMIC);return["(".concat(t).concat(n).concat(o,")"),l.Python.ORDER_NONE]},l.Python.inequality=function(e){var t=l.Python.valueToCode(e,"val_1",l.Python.ORDER_ATOMIC),n=e.getFieldValue("inequality"),o=l.Python.valueToCode(e,"val_2",l.Python.ORDER_ATOMIC);return"(".concat(t).concat(n).concat(o,")")+"#$"},l.Python.shift=function(e){var t=e.getFieldValue("nshift"),n=l.Python.valueToCode(e,"df",l.Python.ORDER_ATOMIC);return["(".concat(n,").shift(").concat(t,")"),l.Python.ORDER_NONE]};var f={name:"app",components:{BlocklyComponent:o.default},props:["value","height"],data:function(){return{xml:this.$props.value,code:"",options:{grid:{spacing:18,length:3,colour:"#ccc",snap:!1},zoom:{controls:!0,wheel:!0,startScale:.9,maxScale:3,minScale:.3,scaleSpeed:1.2},collapse:!0,toolboxPosition:"start",comments:!1,disable:!1,maxBlocks:1/0,trashcan:!0,horizontalLayout:!0,scrollbars:!0,sounds:!0,oneBasedIndex:!1,toolbox:'<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">\n    <block type="data_type">\n      <field name="NAME">price:收盤價</field>\n    </block>\n    <block type="indicator">\n      <field name="NAME"></field>\n    </block>\n    <block type="math_number">\n      <field name="NUM">0</field>\n    </block>\n    <block type="inequality">\n      <field name="inequality">&gt;</field>\n    </block>\n    <block type="numerical_operator">\n      <field name="operations">+</field>\n    </block>\n    <block type="df_rolling">\n      <field name="window">10</field>\n      <field name="operation">mean</field>\n    </block>\n    <block type="sort">\n      <field name="option">nlargest</field>\n      <field name="threshold">10</field>\n      <field name="unit">n</field>\n    </block>\n    <block type="shift">\n      <field name="nshift">1</field>\n    </block>\n    <block type="logic_conditions">\n      <field name="operator">&amp;&amp;</field>\n    </block>\n    <block type="sort_condition">\n      <field name="option">nlargest</field>\n      <field name="threshold">10</field>\n      <field name="unit">n</field>\n    </block>\n    <block type="backtest">\n      <field name="operator">&amp;=</field>\n      <field name="rebalance_frequency">D</field>\n    </block>\n  </xml>'}}},mounted:function(){this.injectCode(this.$props.value)},methods:{getCode:function(){return console.log("get py code"),this.code=c.a.workspaceToCode(this.$refs.foo.workspace),this.code=this.code.replace(/#\$/g,""),console.log(this.code),console.log("get py code done"),[this.code,this.$refs.foo.getCode()]},injectCode:function(e){this.$refs.foo.injectCode(e)},injectAdditionCode:function(e){this.$refs.foo.injectAdditionCode(e)}},beforeDestroy:function(){console.log("before destroy event");var code=this.$refs.foo.getCode();this.$emit("input",code)}},h=(n(518),n(41)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"app"}},[n("BlocklyComponent",{ref:"foo",attrs:{id:"blockly2",options:e.options,height:e.$props.height},model:{value:e.xml,callback:function(t){e.xml=t},expression:"xml"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BlocklyComponent:n(452).default})},518:function(e,t,n){"use strict";n(457)}}]);