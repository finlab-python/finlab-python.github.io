(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{873:function(t,e,o){"use strict";o.r(e);var n={components:{FirebaseUi:o(159).default},methods:{copyToken:function(){var t=document.getElementById("idToken");t.select(),t.setSelectionRange(0,99999),document.execCommand("copy")}},computed:{value:function(){return this.$store.state.api_token?this.$store.state.api_token+"#"+this.$store.state.role:"正在幫您產生驗證碼..."}}},c=o(41),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("div",{staticClass:"uk-background-default"},[o("div",{staticClass:"uk-padding"},[this.$store.state.user?o("div",[o("div",[o("p",[t._v("複製驗證碼，並且貼於下方")]),t._v(" "),o("input",{staticClass:"uk-input uk-form-width-medium",attrs:{type:"text",placeholder:"API Token",readonly:"readonly",id:"idToken"},domProps:{value:t.value}}),t._v(" "),o("button",{staticClass:"uk-icon-button",staticStyle:{"margin-left":"20px"},attrs:{"uk-icon":"copy"},on:{click:t.copyToken}})])]):o("div",[o("FirebaseUi")],1)])])])])}),[],!1,null,"ce7ad7e0",null);e.default=component.exports}}]);