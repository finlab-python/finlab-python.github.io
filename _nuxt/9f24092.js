(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{726:function(t,e,n){},874:function(t,e,n){"use strict";n(726)},929:function(t,e,n){"use strict";n.r(e);var c=n(325),r=Object(c.c)({setup:function(){},props:{src:{default:""}},data:function(){return{loadScript:!1}},watch:{src:function(){this.setVideo()}},mounted:function(){this.setVideo()},computed:{isSwarmify:function(){return-1!==this.src.indexOf("swarmify")},isYoutube:function(){return-1!==this.src.indexOf("youtube")},noVideo:function(){return""===this.src}},methods:{setVideo:function(){if(this.isSwarmify){if(!this.loadScript){window.swarmoptions={swarmcdnkey:"bed84697-66e9-4361-aa06-2c2ec46b7ac2",iframeReplacement:"iframe",theme:{button:"circle",primaryColor:"#093080"},autoreplace:{youtube:!1}};var t=document.createElement("script");t.setAttribute("src","https://assets.swarmcdn.com/cross/swarmdetect.js"),t.async=!1,document.head.appendChild(t),this.loadScript=!0}document.getElementById("swarmify-container").innerHTML='\n        <smartvideo\n          class="swarm-fluid"\n          controls\n          playsinline\n          width="1280"\n          height="720"\n          src="'.concat(this.src,'"\n        >\n        </smartvideo>')}}}}),o=(n(874),n(40)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"aspect-ratio":"16 / 9",background:"black"}},[t.isSwarmify?n("div",{attrs:{id:"swarmify-container"}}):t._e(),t._v(" "),t.isYoutube?n("div",{staticClass:"video-container"},[n("iframe",{staticClass:"video",attrs:{src:t.src,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope;",allowfullscreen:""}})]):t._e(),t._v(" "),t.noVideo?n("div",{staticClass:"uk-text-center uk-light uk-flex uk-flex-middle uk-flex-center uk-background-secondary",staticStyle:{"aspect-ratio":"16 / 9"}},[n("nuxt-link",{attrs:{to:"/pricing"}},[n("div",[n("span",{attrs:{"uk-icon":"icon: lock; ratio: 3.5"}}),t._v(" "),n("h2",[t._v("馬上升級來上課囉！")]),t._v(" "),n("p",[t._v("\n          可以考慮\n\n          "),n("span",{staticStyle:{color:"yellow"}},[t._v("VIP")]),t._v("\n\n          來獲得觀看權限\n        ")])])])],1):t._e()])}),[],!1,null,"0ffc37d6",null);e.default=component.exports}}]);