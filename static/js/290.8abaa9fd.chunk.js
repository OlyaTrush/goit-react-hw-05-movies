"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[290],{5569:function(e,t,r){r.d(t,{Df:function(){return u},TP:function(){return l},tx:function(){return p},z1:function(){return o},zv:function(){return d}});var n=r(5861),a=r(4687),s=r.n(a),c=r(4569),i=r.n(c);i().defaults.baseURL="https://api.themoviedb.org/3/",i().defaults.params={api_key:"121fad3c6c9b7bc3d8e43ee646e86854",language:"en-US",include_adult:!1};var u=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("trending/movie/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/search/movie?query=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},9290:function(e,t,r){r.r(t),r.d(t,{MovieDetailsPage:function(){return v}});var n=r(5861),a=r(885),s=r(4687),c=r.n(s),i=r(2791),u=r(6871),o=r(501),l=r(9738),d=r(5569),p=r(7846),f=r(184),v=function(){var e,t,r=(0,i.useState)({}),s=(0,a.Z)(r,2),v=s[0],h=s[1],x=(0,i.useState)(null),m=(0,a.Z)(x,2),g=m[0],w=m[1],j=(0,u.UO)().movieId,y=(0,u.s0)(),k=(0,u.TH)(),_=null!==(e=null===k||void 0===k||null===(t=k.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.TP)(j);case 3:t=e.sent,h(t),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),w(e.t0),y("*",{replace:!0});case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[j,y]),(0,f.jsx)(l.$0,{children:(0,f.jsxs)(l.W2,{children:[(0,f.jsx)("div",{style:{marginBottom:"60px",color:"#0052d4",letterSpacing:"0.06em",textDecoration:"underline",borderColor:"gray"},children:(0,f.jsx)(o.rU,{to:_,children:"Back"})}),g&&(0,f.jsx)("h2",{children:g.message}),(0,f.jsxs)("div",{style:{display:"flex",gap:50},children:[(0,f.jsx)("img",{src:(0,p.h)(v.poster_path),alt:v.original_title,width:"300"}),(0,f.jsxs)("div",{style:{paddingTop:30,paddingBottom:30},children:[(0,f.jsx)("h2",{children:v.original_title}),(0,f.jsxs)("ul",{style:{display:"flex",flexDirection:"column",gap:30},children:[(0,f.jsx)("li",{children:v.status}),(0,f.jsx)("li",{children:v.overview}),(0,f.jsx)("li",{children:v.release_date})]})]})]}),(0,f.jsxs)("ul",{style:{display:"flex",justifyContent:"center",gap:30},children:[(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"/movies/".concat(j,"/cast"),state:{from:_},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"/movies/".concat(j,"/reviews"),state:{from:_},children:"Reviews"})})]}),(0,f.jsx)(u.j3,{})]})})}}}]);
//# sourceMappingURL=290.8abaa9fd.chunk.js.map