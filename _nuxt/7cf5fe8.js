(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{887:function(t,e,n){"use strict";n.r(e);n(18);var o={components:{FirebaseUi:n(159).default},data:function(){return{result:"processing"}},moutned:function(){},computed:{value:function(){return this.$store.state.api_token?this.$store.state.api_token+"#"+this.$store.state.role:"正在幫您產生驗證碼..."}},watch:{value:function(){var t=this;this.$store.state.api_token&&fetch("http://localhost:8000/receive_token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customToken:this.$store.state.api_token})}).then((function(e){e.ok&&(t.result="success")})).catch((function(e){t.result="error",console.log(e)}))}}},r=n(41),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[this.$store.state.user?n("div",[t._v("\n        Hello "+t._s(t.result)+"\n        "),n("br"),t._v("\n        "+t._s(this.$store.state.api_token)+"\n    ")]):n("div",[n("FirebaseUi")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);