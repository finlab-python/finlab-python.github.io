(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{815:function(t,e,n){"use strict";n.r(e);var r=n(8),d=(n(38),{head:{title:"台灣股市回測資料庫 - 包含回測基準、財報、注意股和世界指數等多項資訊",meta:[{hid:"description",name:"description",content:"歡迎使用我們的回測資料庫目錄頁，這個網頁提供多種股市回測資料，包括回測基準、董事會決擬議分配股利公告、券商分點名稱對照表、券商分點買賣超前15大券商明細、上櫃減資、上市減資、可轉換公司債每月轉換普通股、可轉換公司債成交資訊、可轉換公司債發行資訊、上市櫃變更交易、企業基本資訊、企業主要經營業務、處置股、除權息資訊公告、上櫃除權息、上市除權息、還原權值股價、排除處置股、大盤市況指標、排除全額交割股、排除注意股、財報、財報電子檔上傳紀錄、財務指標、重訊公告、企業重要子公司資訊、內部人持股轉讓宣告、整體市場三大法人買賣金額統計、三大法人買賣超、內部人持股變化、內部人持股不足數、內部人質押、當沖、整體市場當沖統計、集保餘額、法說會期程、企業依規發布重大訊息之訴訟案件、整體市場融資券統計、融資券、上市、上櫃整體市場成交資訊、上市櫃月營收、國安基金進退場統計、企業海外轉轉資、上櫃變更股票面額恢復買賣參考價格、上市變更股票面額恢復買賣參考價格、上市櫃市場成交資訊、個股日本益比、殖利率及股價淨值比、興櫃分點進出、興櫃月營收、興櫃市場成交資訊、台股證券分類、產業題材、借券、借券賣出、股東會期程、當前 股票期貨/股票選擇權 交易標的、指數資訊、指數成交量資訊、發行量加權股價指數歷史資料、注意股、庫藏股、台灣景氣指標、台灣景氣指標細項、台灣各產業非製造業採購經理人指數、台灣各產業製造業採購經理人指數、貨幣總計數年增率、台灣非製造業採購經理人指數、台灣製造業採購經理人指數、美國失業率(季調)和世界指數。快來探索我們的資料庫，獲取最新、最全面的台灣股市回測數據和資訊！"}]},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://asia-east2-fdata-299302.cloudfunctions.net/get_data_info");case 3:return r=e.sent,console.log(r),e.abrupt("return",{info:r.data});case 6:case"end":return e.stop()}}),e)})))()}}),l=n(40),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-background-muted"},[n("div",{staticClass:"uk-grid-collapse",attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-section uk-width-expand"},[n("div",{staticClass:"uk-container uk-container-small"},[n("h1",{staticClass:"uk-text-primary"},[t._v("資料庫目錄")]),t._v(" "),n("article",{staticClass:"uk-article"},t._l(t.info,(function(e){return n("div",{key:e.name,staticStyle:{"padding-top":"95px","margin-top":"-95px"},attrs:{id:e.name}},[n("h3",{staticClass:"uk-text-primary uk-margin-large-top"},[t._v(t._s(e.description)+" "),n("sup",[t._v(t._s(e.auth))])]),t._v(" "),e.note?n("div",{staticClass:"uk-margin-bottom uk-text-light"},[t._v("\n              "+t._s(e.note)+"\n            ")]):t._e(),t._v(" "),n("div",{staticClass:"uk-card shadow",staticStyle:{border:"1px solid #ccc",background:"#eee",overflow:"hidden"}},[n("div",{staticClass:"uk-padding-small"},[n("div",{staticClass:"uk-grid-divider uk-grid-small",attrs:{"uk-grid":""}},[n("div",[n("span",{staticClass:"uk-text-small"},[t._v("近期更新")]),t._v(" "),n("br"),t._v("\n                    "+t._s(e.last_update)+"\n                  ")]),t._v(" "),n("div",[n("span",{staticClass:"uk-text-small"},[t._v("更新時間")]),t._v(" "),n("br"),t._v("\n                    "+t._s(e.schedule)+"\n                  ")]),t._v(" "),e.start_date?n("div",[n("span",{staticClass:"uk-text-small"},[t._v("起始日期")]),t._v(" "),n("br"),t._v(t._s(e.start_date)+"\n                  ")]):t._e(),t._v(" "),e.period?n("div",[n("span",{staticClass:"uk-text-small"},[t._v("資料週期")]),t._v(" "),n("br"),n("span",{staticClass:"uk-text-uppercase"},[t._v(t._s(e.period))])]):t._e()])]),t._v(" "),n("div",{staticClass:"uk-overflow-auto",staticStyle:{background:"white"}},[n("table",{staticClass:"uk-table uk-table-middle uk-table-divider",staticStyle:{"white-space":"nowrap"}},[t._m(0,!0),t._v(" "),n("tbody",t._l(e.type,(function(r,d){return n("tr",{key:d,staticStyle:{"border-top":"1px solid #ccc"}},[n("td",[t._v(t._s(d))]),t._v(" "),"pivot"===e.style?n("td",[t._v("\n                        data.get('"+t._s(e.name)+":"+t._s(d)+"')\n                      ")]):n("td",[t._v("data.get('"+t._s(e.name)+"')")]),t._v(" "),n("td",[t._v(t._s(r))])])})),0)])])])])})),0)])]),t._v(" "),n("div",{staticClass:"uk-width-1-4 uk-visible@m",staticStyle:{"border-right":"1px solid #ddd"}},[n("div",{staticClass:"uk-padding dark-muted"},[n("div",{staticStyle:{position:"fixed"}},[n("p",[t._v("資料類別")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticStyle:{"overflow-y":"scroll",height:"calc(100vh - 200px)"}},[n("ul",{staticClass:"uk-nav uk-nav-default"},t._l(t.info,(function(e){return n("li",{key:e.description+"v"},[n("NuxtLink",{attrs:{to:"#"+e.name}},[t._v(t._s(e.description))])],1)})),0)])])])])]),t._v(" "),n("div",{attrs:{id:"offcanvas-slide","uk-offcanvas":""}},[n("div",{staticClass:"uk-offcanvas-bar uk-padding"},[n("p",[t._v("頁面導覽")]),t._v(" "),n("hr"),t._v(" "),n("ul",{staticClass:"uk-nav uk-nav-default"},t._l(t.info,(function(e){return n("li",{key:e.description+"v"},[n("NuxtLink",{attrs:{to:"#"+e.name}},[t._v(t._s(e.description))])],1)})),0)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("資料名稱")]),t._v(" "),n("th",[t._v("使用方法")]),t._v(" "),n("th",[t._v("型態")])])])}],!1,null,null,null);e.default=component.exports}}]);