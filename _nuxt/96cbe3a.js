(window.webpackJsonp=window.webpackJsonp||[]).push([[100,48],{435:function(t,e,r){"use strict";r.r(e);var n={props:{confirm:{default:null},title:{default:null},value:{default:!1}},methods:{confirmClose:function(){this.confirm&&this.confirm(),this.hide()},hide:function(){this.$emit("input",!1)}}},o=r(40),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-modal uk-open",style:t.value?"display: initial":""},[r("div",{staticClass:"uk-modal-dialog",staticStyle:{"border-radius":"15px",overflow:"hidden"}},[r("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","uk-close":""},on:{click:t.hide}}),t._v(" "),t.title?r("div",{staticClass:"uk-modal-header"},[r("h2",{staticClass:"uk-modal-title uk-text-primary"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),r("div",{staticClass:"uk-modal-body"},[t._t("default")],2),t._v(" "),r("div",{staticClass:"uk-modal-footer uk-text-right"},[t.confirm?r("button",{staticClass:"uk-button uk-button-default",attrs:{type:"button"},on:{click:t.hide}},[t._v("取消")]):t._e(),t._v(" "),r("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button"},on:{click:t.confirmClose}},[t._v("確定")])])])])}),[],!1,null,null,null);e.default=component.exports},895:function(t,e,r){"use strict";r.r(e);r(46),r(30),r(47),r(62),r(42),r(63);var n=r(37),o=r(25),l=r(8),d=(r(44),r(58),r(18),r(66),r(805),r(807),r(813),r(815),r(816),r(817),r(820),r(821),r(822),r(823),r(824),r(825),r(826),r(827),r(829),r(830),r(831),r(832),r(833),r(834),r(835),r(836),r(837),r(838),r(839),r(67),r(93),r(455),r(333),r(241),r(38),r(435)),c=r(19);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={components:{Modal:d.default},data:function(){return{tab:"我的主題",nameInput:"",thumbnailInput:"",abstractInput:"",userIdeas:{},userOrdered:[],ideas:{xxxx:{name:"測試1",thumbnail:"1231",abstract:"4561"},yyyy:{name:"測試2",thumbnail:"1232",abstract:"4562"}},openModal:!1,modalContent:"",modalId:"",openEditModal:!1,scores:{}}},mounted:function(){this.download()},methods:{shuffle:function(t){for(var e,r=t.length;0!=r;){e=Math.floor(Math.random()*r),r--;var n=[t[e],t[r]];t[r]=n[0],t[e]=n[1]}return t},upload:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$store.state.user.uid,(n={})[r]={ideas:t.userIdeas,order:t.userOrdered},e.next=5,c.c.collection("vote").doc("all").set(n,{merge:!0});case 5:alert("success");case 6:case"end":return e.stop()}}),e)})))()},download:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,i,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null,e.prev=1,e.next=4,c.c.collection("vote").doc("all").get();case 4:r=e.sent.data(),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return");case 10:for(l in console.log(r),n=t.$store.state.user.uid,console.log(n),n in r&&(console.log("uid in download data"),o=r[n],t.userIdeas=o.ideas,t.userOrdered=o.order,t.$forceUpdate()),t.ideas={},t.scores={},0,r)for(i in l!=n&&(t.ideas=v(v({},t.ideas),r[l].ideas)),r[l].order)(d=r[l].order[i])in t.scores||(t.scores[d]=0),t.scores[d]+=parseInt(i),parseInt(i);t.ideas=v(v({},t.ideas),t.userIdeas);case 19:case"end":return e.stop()}}),e,null,[[1,7]])})))()},addIdea:function(){console.log("add user idea"),this.userIdeas[this.uuidv4()]={name:this.nameInput,thumbnail:this.thumbnailInput,abstract:this.abstractInput},this.nameInput="",this.thumbnailInput="",this.abstractInput="",console.log(this.userIdeas),this.$forceUpdate()},uuidv4:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))},addFavorate:function(){this.userOrdered.push(this.modalId),this.openEditModal=!1,this.$forceUpdate()},moveForward:function(){var t=this.userOrdered.indexOf(this.modalId),e=Math.max(t-1,0);this.userOrdered[t]=this.userOrdered[e],this.userOrdered[e]=this.modalId,this.$forceUpdate()},moveBackward:function(){var t=this.userOrdered.indexOf(this.modalId),e=Math.min(t+1,this.userOrdered.length-1);this.userOrdered[t]=this.userOrdered[e],this.userOrdered[e]=this.modalId,this.$forceUpdate()}},computed:{unSelectedIdeas:function(){var t={};for(var e in this.ideas)this.userOrdered.includes(e)||(t[e]=this.ideas[e]);return t},sortedRanking:function(){var t=Object.fromEntries(Object.entries(this.scores).sort((function(t,e){return Object(n.a)(t,2)[1]-Object(n.a)(e,2)[1]})));return console.log(t),t}}},f=r(40),component=Object(f.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dark-muted uk-container uk-section",staticStyle:{"min-height":"100vh"}},[r("h1",{staticClass:"uk-text-primary",on:{click:function(e){t.tab="排序成果",t.$forceUpdate()}}},[t._v("FinLab 主題庫")]),t._v(" "),r("ul",{staticClass:"uk-margin-large-top",attrs:{"uk-tab":""}},[r("li",{on:{click:function(e){t.tab="我的主題",t.$forceUpdate()}}},[r("a",[t._v("我的主題")])]),t._v(" "),r("li",{on:{click:function(e){t.tab="創意擇優",t.$forceUpdate()}}},[r("a",[t._v("創意擇優")])]),t._v(" "),"排序成果"===t.tab?r("li",[r("a",[t._v("排序成果")])]):t._e()]),t._v(" "),"我的主題"===t.tab?r("div",[r("div",{staticClass:"uk-margin"},[r("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("名稱")]),t._v(" "),r("div",{staticClass:"uk-form-controls"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.nameInput,expression:"nameInput"}],staticClass:"uk-input",attrs:{id:"form-stacked-text",type:"text",placeholder:"名稱"},domProps:{value:t.nameInput},on:{input:function(e){e.target.composing||(t.nameInput=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"uk-margin"},[r("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("縮圖")]),t._v(" "),r("div",{staticClass:"uk-form-controls"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.thumbnailInput,expression:"thumbnailInput"}],staticClass:"uk-input",attrs:{id:"form-stacked-text",type:"text",placeholder:"文字、網址、base64"},domProps:{value:t.thumbnailInput},on:{input:function(e){e.target.composing||(t.thumbnailInput=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"uk-margin"},[r("label",{staticClass:"uk-form-label",attrs:{for:"form-stacked-text"}},[t._v("簡介")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.abstractInput,expression:"abstractInput"}],staticClass:"uk-textarea",attrs:{rows:"5",placeholder:"簡介","aria-label":"Textarea"},domProps:{value:t.abstractInput},on:{input:function(e){e.target.composing||(t.abstractInput=e.target.value)}}})]),t._v(" "),r("button",{staticClass:"uk-button uk-button-primary",on:{click:function(e){return t.addIdea()}}},[t._v("新增")]),t._v(" "),r("div",{staticClass:"uk-flex uk-flex-wrap uk-flex-wrap-around uk-margin-large-top"},t._l(t.userIdeas,(function(e,n){return r("div",{staticClass:"uk-card shadow uk-background-default uk-margin-large-right uk-margin-large-bottom",staticStyle:{width:"300px"}},[r("div",{staticClass:"uk-text-right",on:{click:function(e){delete t.userIdeas[n],t.$forceUpdate()}}},[r("a",{staticClass:"uk-icon-button",attrs:{"uk-icon":"close"}})]),t._v(" "),r("div",{on:{click:function(r){t.openModal=!0,t.modalContent=e.abstract}}},["https"===e.thumbnail.slice(0,5)||"data:"===e.thumbnail.slice(0,5)?r("img",{staticStyle:{"aspect-ratio":"16 / 9","border-radius":"15px","margin-bottom":"12px","object-fit":"cover"},attrs:{width:"300px",src:e.thumbnail,alt:"image"}}):r("div",{staticClass:"uk-padding-small round-border",staticStyle:{"aspect-ratio":"16 / 9",background:"gray",color:"white",width:"300px"}},[t._v("\n                        "+t._s(e.thumbnail)+"\n                    ")]),t._v(" "),r("div",{staticClass:"uk-padding-small uk-padding-remove-top",staticStyle:{"font-weight":"500",color:"black","font-size":"1.2rem"}},[t._v("\n                        "+t._s(e.name)+"\n                    ")])])])})),0),t._v(" "),r("button",{staticClass:"uk-button uk-button-primary",on:{click:t.upload}},[t._v("上傳")])]):"創意擇優"===t.tab?r("div",{staticClass:"uk-margin-large-top"},[r("hr",{staticClass:"uk-divider"}),t._v(" "),r("div",{staticClass:"uk-flex uk-flex-middle"},[r("h3",{staticStyle:{margin:"0"}},[t._v("已經排序")]),t._v(" "),r("button",{staticClass:"uk-button uk-button-primary uk-margin-large-left",on:{click:t.upload}},[t._v("上傳排序")])]),t._v(" "),r("div",{staticClass:"uk-flex uk-flex-wrap uk-flex-wrap-around uk-margin-large-top"},t._l(t.userOrdered,(function(e,i){return r("div",{staticClass:"uk-card shadow uk-background-default uk-margin-large-right uk-margin-large-bottom",staticStyle:{width:"300px"}},[r("div",{staticClass:"uk-text-right",on:{click:function(e){t.userOrdered.splice(i,1),t.$forceUpdate()}}},[r("a",{staticClass:"uk-icon-button",attrs:{"uk-icon":"close"}})]),t._v(" "),r("div",{on:{click:function(r){t.openEditModal=!0,t.modalId=e,t.modalContent=t.ideas[e].abstract}}},["https"===t.ideas[e].thumbnail.slice(0,5)||"data:"===t.ideas[e].thumbnail.slice(0,5)?r("img",{staticStyle:{"aspect-ratio":"16 / 9","border-radius":"15px","margin-bottom":"12px","object-fit":"cover"},attrs:{width:"300px",src:t.ideas[e].thumbnail,alt:"image"}}):r("div",{staticClass:"uk-padding-small round-border",staticStyle:{"aspect-ratio":"16 / 9",background:"gray",color:"white",width:"300px"}},[t._v("\n                        "+t._s(t.ideas[e].thumbnail)+"\n                    ")]),t._v(" "),r("div",{staticClass:"uk-padding-small uk-padding-remove-top",staticStyle:{"font-weight":"500",color:"black","font-size":"1.2rem"}},[t._v("\n                        "+t._s(t.ideas[e].name)+"\n                    ")])])])})),0),t._v(" "),r("hr",{staticClass:"uk-divider"}),t._v(" "),r("div",{staticClass:"uk-flex uk-flex-middle"},[r("h3",{staticStyle:{margin:"0"}},[t._v("尚未排序")]),t._v(" "),r("button",{staticClass:"uk-button uk-button-primary uk-margin-large-left",on:{click:t.download}},[t._v("重新整理")])]),t._v(" "),r("div",{staticClass:"uk-flex uk-flex-wrap uk-flex-wrap-around uk-margin-large-top"},t._l(t.shuffle(Object.keys(t.unSelectedIdeas)),(function(e){return r("div",{key:t.shuffle(Object.keys(t.unSelectedIdeas)).join("_"),staticClass:"uk-card shadow uk-background-default uk-margin-large-right uk-margin-large-bottom",staticStyle:{width:"300px"}},[r("div",{on:{click:function(r){t.openEditModal=!0,t.modalId=e,t.modalContent=t.ideas[e].abstract}}},["https"===t.ideas[e].thumbnail.slice(0,5)||"data:"===t.ideas[e].thumbnail.slice(0,5)?r("img",{staticStyle:{"aspect-ratio":"16 / 9","border-radius":"15px","margin-bottom":"12px","object-fit":"cover"},attrs:{width:"300px",src:t.ideas[e].thumbnail,alt:"image"}}):r("div",{staticClass:"uk-padding-small round-border",staticStyle:{"aspect-ratio":"16 / 9",background:"gray",color:"white",width:"300px"}},[t._v("\n                        "+t._s(t.ideas[e].thumbnail)+"\n                    ")]),t._v(" "),r("div",{staticClass:"uk-padding-small uk-padding-remove-top",staticStyle:{"font-weight":"500",color:"black","font-size":"1.2rem"}},[t._v("\n                        "+t._s(t.ideas[e].name)+"\n                    ")])])])})),0)]):r("div",[r("div",{staticClass:"uk-margin-large-top"},t._l(Object.keys(t.sortedRanking),(function(e){return r("div",{staticClass:"uk-card shadow uk-background-default uk-margin-large-right uk-margin-large-bottom",staticStyle:{width:"300px"}},[t.ideas[e]?r("div",{on:{click:function(r){t.openEditModal=!0,t.modalId=e,t.modalContent=t.ideas[e].abstract}}},[r("div",{staticClass:"uk-text-large uk-text-bold uk-padding-small"},[t._v(t._s(t.scores[e]))]),t._v(" "),!t.ideas[e]||"https"!==t.ideas[e].thumbnail.slice(0,5)&&"data:"!==t.ideas[e].thumbnail.slice(0,5)?r("div",{staticClass:"uk-padding-small round-border",staticStyle:{"aspect-ratio":"16 / 9",background:"gray",color:"white",width:"300px"}},[t._v("\n                        "+t._s(t.ideas[e].thumbnail)+"\n                    ")]):r("img",{staticStyle:{"aspect-ratio":"16 / 9","border-radius":"15px","margin-bottom":"12px","object-fit":"cover"},attrs:{width:"300px",src:t.ideas[e].thumbnail,alt:"image"}}),t._v(" "),r("div",{staticClass:"uk-padding-small uk-padding-remove-top",staticStyle:{"font-weight":"500",color:"black","font-size":"1.2rem"}},[t._v("\n                        "+t._s(t.ideas[e].name)+"\n                        "),r("span",{staticClass:"uk-text-small"},[t._v("\n                            "+t._s(e)+"\n                        ")])])]):t._e()])})),0)]),t._v(" "),r("Modal",{attrs:{title:"簡介"},model:{value:t.openModal,callback:function(e){t.openModal=e},expression:"openModal"}},[t._v("\n        "+t._s(t.modalContent)+"\n    ")]),t._v(" "),r("Modal",{attrs:{title:"簡介與設定"},model:{value:t.openEditModal,callback:function(e){t.openEditModal=e},expression:"openEditModal"}},[t.modalId?r("div",["https"===t.ideas[t.modalId].thumbnail.slice(0,5)||"data:"===t.ideas[t.modalId].thumbnail.slice(0,5)?r("img",{staticStyle:{"aspect-ratio":"16 / 9","border-radius":"15px","margin-bottom":"12px","object-fit":"cover"},attrs:{width:"300px",src:t.ideas[t.modalId].thumbnail,alt:"image"}}):r("div",{staticStyle:{"aspect-ratio":"16 / 9",background:"gray",color:"white",width:"300px"}},[t._v("\n                "+t._s(t.ideas[t.modalId].thumbnail)+"\n            ")]),t._v(" "),r("div",{staticStyle:{"font-weight":"500",color:"black","font-size":"1.2rem"}},[t._v("\n                "+t._s(t.ideas[t.modalId].name)+"\n            ")])]):t._e(),t._v("\n        "+t._s(t.modalContent)),r("br"),r("br"),r("br"),r("br"),t._v(" "),t.userOrdered.includes(t.modalId)?r("div",[r("button",{staticClass:"uk-button uk-button-large uk-button-danger",on:{click:function(e){t.moveForward(),t.openEditModal=!1}}},[t._v("向前一名")]),t._v(" "),r("button",{staticClass:"uk-button uk-button-large uk-button-danger",on:{click:function(e){t.moveBackward(),t.openEditModal=!1}}},[t._v("向後一名")])]):r("button",{staticClass:"uk-button uk-button-large uk-button-danger",on:{click:t.addFavorate}},[t._v("新增")])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Modal:r(435).default})}}]);