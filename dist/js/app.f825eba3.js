(function(t){function e(e){for(var n,s,u=e[0],l=e[1],o=e[2],m=0,f=[];m<u.length;m++)s=u[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(f.length)f.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,u=1;u<a.length;u++){var l=a[u];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0bb1":function(t,e,a){},"0d05":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATMAAAA7CAMAAAAgop21AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEmUExURQAAAP///6+PUJ+PUJ+PQJ+AQP///62MUv///6ePUK+HUKeHUKeHSP///////6qPUKqKUKqKSqWKSv///6uLTKeLTP///6yMTKmMTKmMSamJSf///6yMTv///6qNTaqNSq2KTaeNSqqKSv///6yMTqqMTP///6uNTauLTauLS6iLS////6uNTKuNSv///6uLTKmLTP///6uNTauLS////6yMTKqMTKqMSv///6yNTayMTayMS////6uMTKuMS6uLTP///6yNTKyMTKqMTP///6uNTauLS6qLS////6uOTKuMTP///6qLTP///6uMTKuMS6uLS////6qMTKqMS////6yNTaqNS6yLTayLS////6qMS////6yNTayMTayMTKuMTP///6uMTGmR4EMAAABgdFJOUwAQEBAQEB8fICAgICAvMDAwMDBAQEBQUFBQUF9fYGBgYGBgb29vcHBwcHB/f3+AgICPj4+QkJCQn5+fn6CgoKCvr6+vsLCwsL+/v8DAz8/Pz9DQ0N/f39/f4ODv7+/v71e8sYMAAAvxSURBVHja7Ztbd9pIEoBLYBiUsEpsCTzZjfCEyYoh8YIvxHZ82TCOk2iFZCdZIHLkS+v//4k91Te1JCRmcvZhz+J+sBFqdZe+rurqqm6gf/e+Cz9QatvzGFa0bH3q+GHzTz+2PR92ZqvKrHK/Bp3ZtqpBL5pMj67+DrDuzT3Uw9qzllKl+fn3KnTfriozONsB0BVoL+fvZhbA58NHT89PmvPeI4te+oo2NsMh/tFXlpn+rQlQuXwljO5Sh61jaF2iDt5edQBg8xNU7gF6Aloz7APA3iGsbumFa6hpFr3ozqoAJzuwfo9XB/EafvcJ4HYNoOexB06GqI5YcXXL8GoNwGJAQgugOdcB3oRXPTiJ1+Cbh5c7+wDg/RWrtHDufz7TYaXLEK3OszgPZnpgPQUI/7UDuoUKVbncFlyx4svZE1jx0rvdblrHaIyvatvzX8TXe2/pZMf8q+c1K2ihzRm0PF+HlS/62Y1332q1Lt/fSRy1vcsqdMJ1Uacz825ftVp74dz/+YEYlupm+NX3494j8UUr/CcapTXbl2uMTW/m+7ND64GW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"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("Main"),a("Footer")],1)},r=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"container-fluid"},[n("div",{staticClass:"big-container",attrs:{id:"jumbo-nav"}},[n("div",{staticClass:"row d-flex"},[n("div",{staticClass:"col-5 bg-black"},[n("div",{staticClass:"py-4"},[n("img",{attrs:{src:a("0d05"),alt:"AVADA RESTAURANT LOGO"}})]),n("div",{staticClass:"p-5 ms-5"},[n("div",{staticClass:"subtitle pb-3 pt-5"},[t._v("THE BEST TABLE IN TOWN")]),n("div",{staticClass:"section-title text-white py-3"},[t._v(" FINE DINING EXPERIENCE ")]),n("p",{staticClass:"text-silver py-3"},[t._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo unde quaerat molestiae iste error? Dolore animi iure minus eligendi, quaerat velit soluta. ")]),n("div",{staticClass:"pt-3 pb-5"},[n("button",{staticClass:"text-white border-white"},[t._v("EXPLORE THE MENU")])])])]),n("div",{staticClass:"col-7"},[n("div",{attrs:{id:"jumbotron-right-side"}},[n("nav",{staticClass:"d-flex align-items-center py-4"},[n("ul",{staticClass:"d-flex"},[n("li",[n("a",{staticClass:"active",attrs:{href:"#"}},[t._v("Home")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Culinary History")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Our Team")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Our Menu")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Takeout")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Bulletin")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Reservations")])]),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fas fa-shopping-cart"})])])])]),n("div",{staticClass:"d-flex flex-column align-items-end"},[n("div",{staticClass:"\n                square-white\n                rounded\n                mx-2\n                d-flex\n                flex-column\n                justify-content-center\n                align-items-center\n                text-clear-blue\n              "},[n("i",{staticClass:"fas fa-caret-square-up fa-2x"}),n("div",[t._v("Demos")])]),n("div",{staticClass:"square-white rounded mx-2 my-1 text-black"},[t._v("A")])])])])])])])}],l={name:"Header"},o=l,c=(a("be95"),a("2877")),m=Object(c["a"])(o,s,u,!1,null,"8a68f48e",null),f=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main")},T=[],d={name:"Main"},v=d,b=Object(c["a"])(v,p,T,!1,null,null,null),y=b.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer")},M=[],K={name:"Footer"},P=K,h=Object(c["a"])(P,A,M,!1,null,null,null),q=h.exports,C={name:"App",components:{Header:f,Main:y,Footer:q}},E=C,N=(a("5c0b"),Object(c["a"])(E,i,r,!1,null,null,null)),j=N.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){},be95:function(t,e,a){"use strict";a("0bb1")}});
//# sourceMappingURL=app.f825eba3.js.map