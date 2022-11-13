"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[869],{7806:function(n,t,e){e.d(t,{IQ:function(){return h},HI:function(){return d},XT:function(){return f},Jh:function(){return p},Hg:function(){return s}});var r=e(5861),a=e(4687),i=e.n(a),o=e(4569),u=e.n(o),c="e915ca6542c1415913257f822128d2ab";u().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/movie/day",t={api_key:c},n.next=4,u()("/trending/movie/day",{params:t});case 4:if(200===(null===(e=n.sent)||void 0===e?void 0:e.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",e.data.results);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/search/movie",e={api_key:c,query:t},n.next=4,u()("/search/movie",{params:e});case 4:if(200===(null===(r=n.sent)||void 0===r?void 0:r.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",r.data.results);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t),r={api_key:c},n.next=4,u()(e,{params:r});case 4:if(200===(null===(a=n.sent)||void 0===a?void 0:a.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",a.data);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/credits"),r={api_key:c},n.next=4,u()(e,{params:r});case 4:if(200===(null===(a=n.sent)||void 0===a?void 0:a.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",a.data.cast);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/reviews"),r={api_key:c},n.next=4,u()(e,{params:r});case 4:if(200===(null===(a=n.sent)||void 0===a?void 0:a.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",a.data.results);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},5869:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,a,i,o,u,c=e(885),s=e(2791),f=e(6871),d=e(7806),h=e(168),p=e(82),A=p.ZP.ul(r||(r=(0,h.Z)(["\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));\n\n  list-style: none;\n\n  margin: ",";\n  padding: ",";\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]})),v=p.ZP.li(a||(a=(0,h.Z)(["\n  padding-bottom: ",";\n\n  text-align: center;\n\n  background-color: ",";\n\n  border: ",";\n  border-radius: ",";\n\n  overflow: hidden;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.lightBG}),(function(n){return n.theme.borders.generic}),(function(n){return n.theme.radii.generic})),l=p.ZP.img(i||(i=(0,h.Z)(["\n  display: block;\n\n  width: 100%;\n  height: auto;\n  margin-bottom: ",";\n\n  background-color: ",";\n\n  object-fit: cover;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.whiteBG})),m=p.ZP.p(o||(o=(0,h.Z)(["\n  margin: ",";\n  margin-bottom: ",";\n\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.semiBold})),b=p.ZP.p(u||(u=(0,h.Z)(["\n  margin: ",";\n"])),(function(n){return n.theme.space[0]})),g=e(8465),w=e(184),x=function(n){var t=n.castData;return(0,w.jsx)(A,{children:t.map((function(n){var t,e=n.cast_id,r=n.name,a=n.profile_path,i=n.character;return(0,w.jsxs)(v,{children:[(0,w.jsx)(l,{src:(t=a,t?"https://image.tmdb.org/t/p/w342".concat(t):g),alt:r,width:230,height:345}),(0,w.jsx)(m,{children:r}),(0,w.jsx)(b,{children:i?"Character: ".concat(i):"Character not specified"})]},e)}))})},Z=e(9677),k=e(6615),T=function(){var n=(0,f.UO)().movieID,t=(0,s.useState)(null),e=(0,c.Z)(t,2),r=e[0],a=e[1],i=(0,s.useState)("pending"),o=(0,c.Z)(i,2),u=o[0],h=o[1];return(0,s.useEffect)((function(){(0,d.IQ)(n).then((function(n){a(n),h("resolved")})).catch((function(){return h("rejected")}))}),[n]),"pending"===u?(0,w.jsx)(k.a,{}):"rejected"===u?(0,w.jsx)(Z.v,{children:"Ooops, something went wrong"}):"resolved"===u&&0===r.length?(0,w.jsx)(Z.v,{children:"There is no cast information for that movie"}):"resolved"===u?(0,w.jsx)(x,{castData:r}):void 0}},9677:function(n,t,e){e.d(t,{v:function(){return i}});var r,a=e(168),i=e(82).ZP.p(r||(r=(0,a.Z)(["\n  margin: ",";\n  padding: "," ",";\n\n  font-size: ",";\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semiBold}))},8465:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=869.f28d6ddd.chunk.js.map