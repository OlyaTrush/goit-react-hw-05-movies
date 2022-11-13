"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{7806:function(n,t,e){e.d(t,{IQ:function(){return p},HI:function(){return h},XT:function(){return f},Jh:function(){return d},Hg:function(){return s}});var r=e(5861),i=e(4687),o=e.n(i),a=e(4569),u=e.n(a),c="e915ca6542c1415913257f822128d2ab";u().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/movie/day",t={api_key:c},n.next=4,u()("/trending/movie/day",{params:t});case 4:if(200===(null===(e=n.sent)||void 0===e?void 0:e.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",e.data.results);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/search/movie",e={api_key:c,query:t},n.next=4,u()("/search/movie",{params:e});case 4:if(200===(null===(r=n.sent)||void 0===r?void 0:r.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",r.data.results);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t),r={api_key:c},n.next=4,u()(e,{params:r});case 4:if(200===(null===(i=n.sent)||void 0===i?void 0:i.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",i.data);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/credits"),r={api_key:c},n.next=4,u()(e,{params:r});case 4:if(200===(null===(i=n.sent)||void 0===i?void 0:i.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",i.data.cast);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/reviews"),r={api_key:c},n.next=4,u()(e,{params:r});case 4:if(200===(null===(i=n.sent)||void 0===i?void 0:i.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",i.data.results);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8278:function(n,t,e){e.d(t,{O:function(){return w}});var r,i,o,a,u=e(6871),c=e(168),s=e(82),f=e(501),h=s.ZP.li(r||(r=(0,c.Z)(["\n  text-align: center;\n\n  background-color: ",";\n\n  border: ",";\n  border-radius: ",";\n\n  overflow: hidden;\n"])),(function(n){return n.theme.colors.lightBG}),(function(n){return n.theme.borders.generic}),(function(n){return n.theme.radii.generic})),p=(0,s.ZP)(f.rU)(i||(i=(0,c.Z)(["\n  display: block;\n\n  padding-bottom: ",";\n\n  color: inherit;\n\n  font-weight: ",";\n  text-decoration: none;\n\n  transition: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.transitions.color}),(function(n){return n.theme.colors.mainAccent})),d=s.ZP.img(o||(o=(0,c.Z)(["\n  display: block;\n\n  width: 100%;\n  height: 340px;\n  margin-bottom: ",";\n\n  background-color: ",";\n\n  \n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.whiteBG})),l=e(8586),m=e(184),v=function(n){var t=n.movie,e=t.id,r=t.original_title,i=t.poster_path,o=(0,u.TH)(),a="/movies/".concat(e);return(0,m.jsx)(h,{children:(0,m.jsxs)(p,{to:a,state:o,children:[(0,m.jsx)(d,{src:(0,l.h)(i),alt:r,width:240,height:340}),r]})})},g=s.ZP.ul(a||(a=(0,c.Z)(["\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n\n  margin: ",";\n  padding: ",";\n\n  list-style: none;\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]})),w=function(n){var t=n.moviesData;return(0,m.jsx)(g,{children:t.map((function(n){return(0,m.jsx)(v,{movie:n},n.id)}))})}},9677:function(n,t,e){e.d(t,{v:function(){return o}});var r,i=e(168),o=e(82).ZP.p(r||(r=(0,i.Z)(["\n  margin: ",";\n  padding: "," ",";\n\n  font-size: ",";\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semiBold}))},5266:function(n,t,e){e.d(t,{J:function(){return c},V:function(){return u}});var r,i,o=e(168),a=e(82),u=a.ZP.h2(r||(r=(0,o.Z)(["\n  margin: ",";\n  padding: "," ",";\n\n  font-size: ",";\n  font-weight: ",";\n  text-align: center;\n  text-transform: uppercase;\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semiBold})),c=a.ZP.h2(i||(i=(0,o.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"])))},2919:function(n,t,e){e.d(t,{W:function(){return a.W},$:function(){return o}});var r,i=e(168),o=e(82).ZP.section(r||(r=(0,i.Z)(["\n  width: 100vw;\n  padding: "," 0;\n"])),(function(n){return n.theme.space[4]})),a=e(7659)},8586:function(n,t,e){e.d(t,{h:function(){return i}});var r=e(7828),i=function(n){return n?"https://image.tmdb.org/t/p/w342".concat(n):r}},9544:function(n,t,e){e.r(t);var r=e(885),i=e(2791),o=e(7806),a=e(2919),u=e(5266),c=e(8278),s=e(9677),f=e(6615),h=e(184);t.default=function(){var n=(0,i.useState)(null),t=(0,r.Z)(n,2),e=t[0],p=t[1],d=(0,i.useState)("pending"),l=(0,r.Z)(d,2),m=l[0],v=l[1];return(0,i.useEffect)((function(){(0,o.Hg)().then((function(n){p(n),v("resolved")})).catch((function(){return v("rejected")}))}),[]),(0,h.jsx)(a.$,{children:(0,h.jsxs)(a.W,{children:[(0,h.jsx)(u.V,{children:"Trending today"}),"pending"===m&&(0,h.jsx)(f.a,{}),"rejected"===m&&(0,h.jsx)(s.v,{children:"Ooops, something went wrong"}),"resolved"===m&&(0,h.jsx)(c.O,{moviesData:e})]})})}},7828:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=544.fe0ef975.chunk.js.map