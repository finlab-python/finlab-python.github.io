(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{531:function(t,e,n){var o=n(10),r=n(234).values;o({target:"Object",stat:!0},{values:function(t){return r(t)}})},660:function(t,e,n){},753:function(t,e,n){"use strict";n(660)},901:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(42),n(61),n(46),n(31),n(531),n(30),n(50),n(38),{head:{title:"台灣股市回測資料庫 - 包含回測基準、財報、注意股和世界指數等多項資訊",meta:[{hid:"description",name:"description",content:"歡迎使用我們的回測資料庫目錄頁，這個網頁提供多種股市回測資料，包括回測基準、董事會決擬議分配股利公告、券商分點名稱對照表、券商分點買賣超前15大券商明細、上櫃減資、上市減資、可轉換公司債每月轉換普通股、可轉換公司債成交資訊、可轉換公司債發行資訊、上市櫃變更交易、企業基本資訊、企業主要經營業務、處置股、除權息資訊公告、上櫃除權息、上市除權息、還原權值股價、排除處置股、大盤市況指標、排除全額交割股、排除注意股、財報、財報電子檔上傳紀錄、財務指標、重訊公告、企業重要子公司資訊、內部人持股轉讓宣告、整體市場三大法人買賣金額統計、三大法人買賣超、內部人持股變化、內部人持股不足數、內部人質押、當沖、整體市場當沖統計、集保餘額、法說會期程、企業依規發布重大訊息之訴訟案件、整體市場融資券統計、融資券、上市、上櫃整體市場成交資訊、上市櫃月營收、國安基金進退場統計、企業海外轉轉資、上櫃變更股票面額恢復買賣參考價格、上市變更股票面額恢復買賣參考價格、上市櫃市場成交資訊、個股日本益比、殖利率及股價淨值比、興櫃分點進出、興櫃月營收、興櫃市場成交資訊、台股證券分類、產業題材、借券、借券賣出、股東會期程、當前 股票期貨/股票選擇權 交易標的、指數資訊、指數成交量資訊、發行量加權股價指數歷史資料、注意股、庫藏股、台灣景氣指標、台灣景氣指標細項、台灣各產業非製造業採購經理人指數、台灣各產業製造業採購經理人指數、貨幣總計數年增率、台灣非製造業採購經理人指數、台灣製造業採購經理人指數、美國失業率(季調)和世界指數。快來探索我們的資料庫，獲取最新、最全面的台灣股市回測數據和資訊！"}]},data:function(){return{dialogOpen:!1}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://asia-east2-fdata-299302.cloudfunctions.net/new_get_data_info");case 3:return o=e.sent,e.abrupt("return",{info:o.data,categories:[]});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){this.expandAllCategories("tw")},computed:{categorizedInfo:function(){var t={};return this.info.forEach((function(e){var n=e.categories.region,main=e.categories.main;t[n]||(t[n]=[]),t[n][main]||(t[n][main]=[]),t[n][main].push(e)})),this.categories=Object.keys(t).map((function(e){return{name:e,items:Object.keys(t[e]).map((function(main){return{name:main,items:t[e][main],open:!1}})),open:!1}})),this.categories}},methods:{toggleSubcategories:function(t){t.open=!t.open},expandAllCategories:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.categories.forEach((function(t){e&&t.name!==e?t.open=!1:t.open=!0,t.items.forEach((function(main){main.open=!0}))}))},hasDescription:function(t){return Array.isArray(t)?Object.values(t).some((function(t){return t&&t.description})):t&&t.description},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},scrollToBottom:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},filters:{translateRegion:function(t){return{tw:"台股",us:"美股",global:"世界"}[t]||t},translateMain:function(t){return{technical:"技術面",fundamental:"基本面",chips:"籌碼面",event:"事件面",macro_economy:"總經面"}[t]||t}}}),c=r,l=(n(753),n(40)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-background-muted",staticStyle:{width:"100%",overflow:"hidden"}},[n("div",{staticClass:"uk-grid-collapse",attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-section uk-width-expand",staticStyle:{"margin-top":"0"}},[n("div",{staticClass:"uk-container uk-container-small"},[n("div",{staticClass:"uk-background-muted",attrs:{"uk-sticky":""}},[n("div",{staticClass:"uk-background-muted",staticStyle:{padding:"0 64px",margin:"0 -64px","padding-top":"32px"}},[n("h1",{staticClass:"uk-text-primary"},[t._v("財經資料庫\n              "),n("a",{staticClass:"uk-icon-button  uk-margin-small-right uk-hidden@m",attrs:{"uk-icon":"table"},on:{click:function(e){t.dialogOpen=!0}}})]),t._v(" "),n("div",{staticClass:"uk-background-muted uk-margin-large-top"},[n("ul",{staticStyle:{"margin-bottom":"0"},attrs:{"uk-tab":""}},[n("li",{staticClass:"uk-active",on:{click:function(e){return t.expandAllCategories(e,"tw")}}},[n("NuxtLink",{attrs:{to:"#tw"}},[t._v("台股")])],1),t._v(" "),n("li",{on:{click:function(e){return t.expandAllCategories(e,"us")}}},[n("NuxtLink",{attrs:{to:"#us"}},[t._v("美股")])],1),t._v(" "),n("li",{on:{click:function(e){return t.expandAllCategories(e,"global")}}},[n("NuxtLink",{attrs:{to:"#global"}},[t._v("世界")])],1)])])]),t._v(" "),n("dialog",{staticClass:"uk-card uk-card-default uk-padding uk-margin",staticStyle:{position:"fixed",top:"10vh","z-index":"100","max-height":"80vh",overflow:"scroll",width:"80%",border:"1px solid #aaa"},attrs:{id:"menu",open:t.dialogOpen}},[n("ul",{staticClass:"uk-nav uk-nav-default"},[t._l(t.categorizedInfo,(function(e){return n("li",{key:e.name},[n("a",{on:{click:function(n){return t.toggleSubcategories(e)}}},[t._v("\n                  "+t._s(t._f("translateRegion")(e.name))+"\n                ")]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"region.open"}],staticClass:"uk-nav uk-nav-sub"},t._l(e.items,(function(main){return n("li",{key:main.name},[n("a",{on:{click:function(e){return t.toggleSubcategories(main)}}},[t._v("\n                      "+t._s(t._f("translateMain")(main.name))+"\n                    ")]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:main.open,expression:"main.open"}],staticClass:"uk-nav"},t._l(main.items,(function(e){return n("li",{key:e.description},[n("a",{key:e.description,attrs:{href:"database#"+e.description},on:{click:function(e){t.dialogOpen=!1}}},[t._v(t._s(e.description))])])})),0)])})),0)])})),t._v(" "),n("li",{staticClass:"uk-active"},[n("a",{on:{click:t.expandAllCategories}},[t._v("全部展開")])]),t._v(" "),n("li",{staticClass:"uk-active"},[n("a",{on:{click:t.scrollToTop}},[t._v("回到頂部")])]),t._v(" "),n("li",{staticClass:"uk-active"},[n("a",{on:{click:t.scrollToBottom}},[t._v("移至底部")])])],2)])]),t._v(" "),n("article",{staticClass:"uk-article"},t._l(t.categories,(function(e){return n("div",{key:e.name},[n("a",{staticStyle:{visibility:"hidden",position:"relative",top:"-170px"},attrs:{id:e.name}},[t._v("_")]),t._v(" "),n("h2",{staticClass:"uk-text-primary uk-margin-large-top"},[t._v(t._s(t._f("translateRegion")(e.name)))]),t._v(" "),t._l(e.items,(function(main){return n("div",{key:main.name},t._l(main.items,(function(e){return n("div",{key:e.description,staticStyle:{"margin-top":"-1rem"}},[n("a",{staticStyle:{visibility:"hidden",position:"relative",top:"-170px"},attrs:{id:e.description}},[t._v("a")]),t._v(" "),n("h4",{staticClass:"uk-text-primary"},[t._v(t._s(e.description)+" "),n("sup",[t._v(t._s(e.auth))])]),t._v(" "),e.note?n("div",{staticClass:"uk-margin-bottom uk-text-light"},[t._v("\n                  "+t._s(e.note)+"\n                ")]):t._e(),t._v(" "),n("div",{staticClass:"uk-card shadow",staticStyle:{border:"1px solid #ccc",background:"#eee",overflow:"hidden","margin-bottom":"20px"}},[n("div",{staticClass:"uk-padding-small"},[n("div",{staticClass:"uk-grid-divider uk-grid-small",attrs:{"uk-grid":""}},[n("div",[n("span",{staticClass:"uk-text-small"},[t._v("近期更新")]),t._v(" "),n("br"),t._v("\n                        "+t._s(e.last_update)+"\n                      ")]),t._v(" "),n("div",[n("span",{staticClass:"uk-text-small"},[t._v("更新時間")]),t._v(" "),n("br"),t._v("\n                        "+t._s(e.schedule)+"\n                      ")]),t._v(" "),e.start_date?n("div",[n("span",{staticClass:"uk-text-small"},[t._v("起始日期")]),t._v(" "),n("br"),t._v(t._s(e.start_date)+"\n                      ")]):t._e(),t._v(" "),e.period?n("div",[n("span",{staticClass:"uk-text-small"},[t._v("資料週期")]),t._v(" "),n("br"),n("span",{staticClass:"uk-text-uppercase"},[t._v(t._s(e.period))])]):t._e()])]),t._v(" "),n("div",{staticClass:"uk-overflow-auto",staticStyle:{background:"white"}},[n("table",{staticClass:"uk-table uk-table-middle uk-table-divider",staticStyle:{"white-space":"nowrap"}},[n("thead",[n("tr",[n("th",[t._v("資料名稱")]),t._v(" "),n("th",[t._v("使用方法")]),t._v(" "),n("th",[t._v("型態")]),t._v(" "),t.hasDescription(e.items)?n("th",[t._v("說明")]):t._e()])]),t._v(" "),n("tbody",t._l(e.items,(function(o,r){return n("tr",{key:r,staticStyle:{"border-top":"1px solid #ccc"}},["tw"===e.categories.region||"global"===e.categories.region?n("td",[t._v(t._s(r))]):"us"===e.categories.region?n("td",[t._v(t._s(o.zh))]):t._e(),t._v(" "),"pivot"===e.style?n("td",[t._v("\n                            data.get('"+t._s(e.name)+":"+t._s(r)+"')\n                          ")]):n("td",[t._v("data.get('"+t._s(e.name)+"')")]),t._v(" "),n("td",[t._v(t._s(o.type))]),t._v(" "),n("td",[t.hasDescription(o)?n("div",{attrs:{"uk-tooltip":o.description}},[n("a",{staticClass:"uk-icon-button",attrs:{href:"","uk-icon":"question"}})]):t._e()])])})),0)])])])])})),0)})),t._v(" "),n("hr",{staticClass:"uk-divider-icon"})],2)})),0)])]),t._v(" "),n("div",{staticClass:"uk-width-1-4 uk-visible@m",staticStyle:{"border-right":"1px solid #ddd"}},[n("div",{staticClass:"uk-padding dark-muted"},[n("div",{staticStyle:{position:"fixed"}},[n("p",[t._v("頁面導覽")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticStyle:{"overflow-y":"scroll",height:"calc(100vh - 200px)"}},[n("ul",{staticClass:"uk-nav uk-nav-default",attrs:{"uk-scrollspy-nav":"closest: li;offset:1"}},[t._l(t.categorizedInfo,(function(e){return n("li",{key:e.name},[n("a",{on:{click:function(n){return t.toggleSubcategories(e)}}},[t._v("\n                  "+t._s(t._f("translateRegion")(e.name))+"\n                ")]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"region.open"}],staticClass:"uk-nav uk-nav-sub"},t._l(e.items,(function(main){return n("li",{key:main.name},[n("a",{on:{click:function(e){return t.toggleSubcategories(main)}}},[t._v("\n                      "+t._s(t._f("translateMain")(main.name))+"\n                    ")]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:main.open,expression:"main.open"}],staticClass:"uk-nav"},t._l(main.items,(function(e){return n("li",{key:e.description},[n("a",{key:e.description,attrs:{href:"database#"+e.description}},[t._v(t._s(e.description))])])})),0)])})),0)])})),t._v(" "),n("li",{staticClass:"uk-active"},[n("a",{on:{click:t.expandAllCategories}},[t._v("全部展開")])]),t._v(" "),n("li",{staticClass:"uk-active"},[n("a",{on:{click:t.scrollToTop}},[t._v("回到頂部")])]),t._v(" "),n("li",{staticClass:"uk-active"},[n("a",{on:{click:t.scrollToBottom}},[t._v("移至底部")])])],2)])])])])])])}),[],!1,null,"4a1597aa",null);e.default=component.exports}}]);