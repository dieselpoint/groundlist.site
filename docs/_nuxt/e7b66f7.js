(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{257:function(t,e,n){t.exports=n.p+"img/groundlist_logo6.41b127c.svg"},258:function(t,e,n){t.exports=n.p+"img/undraw_candidate_red.3b3dddc.svg"},259:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-md navbar-light p-0"},[r("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[r("img",{attrs:{src:n(257)}})]),t._v(" "),r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link menu-item",attrs:{href:"/why"}},[t._v("Why?")])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link menu-item",attrs:{href:"/about"}},[t._v("About")])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link menu-item",attrs:{href:"/contact"}},[t._v("Contact")])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link menu-item",attrs:{href:"https://app.groundlist.org",target:"_blank"}},[t._v("Sign In")])])])])}],c=n(32),component=Object(c.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),r,!1,null,null,null);e.default=component.exports},260:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:n(257),height:"15px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"footer-title"},[this._v("Built in Chicago")])])}],c=n(32),component=Object(c.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"5rem"}},[n("hr"),t._v(" "),n("div",{staticClass:"d-flex justify-content-between"},[t._m(0),t._v(" "),n("div",{staticClass:"small"},[t._v("Copyright © 2020 Dieselpoint, Inc.")]),t._v(" "),n("div",{staticClass:"small"},[n("nuxt-link",{attrs:{to:"/privacy_policy"}},[t._v("Privacy Policy")]),t._v(" /\n      "),n("nuxt-link",{attrs:{to:"/terms_of_service"}},[t._v("Terms of Service")])],1),t._v(" "),t._m(1)])])}),r,!1,null,null,null);e.default=component.exports},264:function(t,e,n){var map={"./groundlist_logo6.svg":257,"./undraw_accept_terms_red.svg":265,"./undraw_candidate_red.svg":258,"./undraw_conversation_red.svg":266,"./undraw_mobile_wireframe_red.svg":267,"./undraw_security_red.svg":268,"./undraw_team_chat_red.svg":269,"./undraw_team_spirit_red.svg":270,"./undraw_terms_red.svg":271,"./undraw_things_to_say_red.svg":272,"./undraw_voting_red.svg":273};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=264},265:function(t,e,n){t.exports=n.p+"img/undraw_accept_terms_red.cd4bb75.svg"},266:function(t,e,n){t.exports=n.p+"img/undraw_conversation_red.054c320.svg"},267:function(t,e,n){t.exports=n.p+"img/undraw_mobile_wireframe_red.d28b609.svg"},268:function(t,e,n){t.exports=n.p+"img/undraw_security_red.a85e7ab.svg"},269:function(t,e,n){t.exports=n.p+"img/undraw_team_chat_red.83464ac.svg"},270:function(t,e,n){t.exports=n.p+"img/undraw_team_spirit_red.250a32d.svg"},271:function(t,e,n){t.exports=n.p+"img/undraw_terms_red.b06c739.svg"},272:function(t,e,n){t.exports=n.p+"img/undraw_things_to_say_red.d67a569.svg"},273:function(t,e,n){t.exports=n.p+"img/undraw_voting_red.946807f.svg"},287:function(t,e,n){"use strict";n.r(e);n(33);var r=n(5),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,c=t.error,o=r.slug||"index",e.next=4,n(o).fetch().catch((function(t){c({statusCode:404,message:"Page not found"})}));case 4:return l=e.sent,e.abrupt("return",{page:l});case 6:case"end":return e.stop()}}),e)})))()},methods:{getImage:function(t){return n(264)("./"+t)}}},o=n(32),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("NavBar"),t._v(" "),n("div",{staticClass:"secondary"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("nuxt-content",{attrs:{document:t.page}})],1),t._v(" "),t.page.image?n("div",{staticClass:"col-md-6 "},[n("img",{staticClass:"d-block w-75",attrs:{src:t.getImage(t.page.image)}}),t._v(" "),n("div",{staticClass:"w-75 text-center"},[n("span",{staticClass:"small text-muted"},[t._v(t._s(t.page.image_caption))])])]):t._e()])]),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:n(259).default,Footer:n(260).default})}}]);