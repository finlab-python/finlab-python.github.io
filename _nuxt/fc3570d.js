(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{432:function(t,l,e){"use strict";e.r(l);var o={props:{confirm:{default:null},title:{default:null},value:{default:!1}},methods:{confirmClose:function(){this.confirm&&this.confirm(),this.hide()},hide:function(){this.$emit("input",!1)}}},n=e(40),component=Object(n.a)(o,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"uk-modal uk-open",style:t.value?"display: initial":""},[e("div",{staticClass:"uk-modal-dialog",staticStyle:{"border-radius":"15px",overflow:"hidden"}},[e("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","uk-close":""},on:{click:t.hide}}),t._v(" "),t.title?e("div",{staticClass:"uk-modal-header"},[e("h2",{staticClass:"uk-modal-title uk-text-primary"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),e("div",{staticClass:"uk-modal-body"},[t._t("default")],2),t._v(" "),e("div",{staticClass:"uk-modal-footer uk-text-right"},[t.confirm?e("button",{staticClass:"uk-button uk-button-default",attrs:{type:"button"},on:{click:t.hide}},[t._v("取消")]):t._e(),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary",attrs:{type:"button"},on:{click:t.confirmClose}},[t._v("確定")])])])])}),[],!1,null,null,null);l.default=component.exports}}]);