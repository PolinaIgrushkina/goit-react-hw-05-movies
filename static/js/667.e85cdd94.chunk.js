"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[667],{436:function(t,e,r){r.d(e,{Bt:function(){return p},KS:function(){return c},ME:function(){return f},MX:function(){return s},wz:function(){return o}});var n=r(861),a=r(757),u=r.n(a),i=r(44).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"997ea85e86de02db6a9182bda8c38aca"}}),c=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/trending/movie/week");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e,r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/search/movie",{params:{query:e,page:r}});case 2:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},667:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(982),a=r(861),u=r(885),i=r(757),c=r.n(i),s=r(436),o=r(791),p=r(731),f=r(689),l=r(184);function d(){var t,e,r=(0,p.lr)(),i=(0,u.Z)(r,2),d=i[0],v=i[1],h=null!==(t=d.get("page"))&&void 0!==t?t:1,m=null!==(e=d.get("query"))&&void 0!==e?e:"",x=(0,o.useState)(null!==m&&void 0!==m?m:""),g=(0,u.Z)(x,2),w=g[0],b=g[1],y=(0,o.useState)([]),k=(0,u.Z)(y,2),Z=k[0],_=k[1],j=(0,o.useState)([]),C=(0,u.Z)(j,2),S=C[0],q=C[1],E=(0,f.TH)();(0,o.useEffect)((function(){function t(){return(t=(0,a.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.ME)(m,h);case 2:e=t.sent,_(e.results),q(e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}""!==m&&function(){t.apply(this,arguments)}()}),[m,h]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==w.trim()?v({query:w.trim().toLowerCase(),page:1}):alert("Please write what you need.")},children:[(0,l.jsx)("input",{type:"text",onChange:function(t){b(t.currentTarget.value)},value:w}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),(0,l.jsx)("ul",{children:Z.map((function(t){return(0,l.jsx)("li",{children:(0,l.jsx)(p.rU,{to:"/movies/".concat(t.id),state:{from:E},children:t.original_title})},t.id)}))}),(null===S||void 0===S?void 0:S.total_pages)&&(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,n.Z)(Array(null===S||void 0===S?void 0:S.total_pages)).map((function(t,e){return(0,l.jsx)("li",{children:(0,l.jsx)("button",{disabled:e+1===(null===S||void 0===S?void 0:S.page),onClick:function(){return t=e+1,void v({query:w.trim().toLowerCase(),page:t});var t},children:e+1})},e)}))})})]})}}}]);
//# sourceMappingURL=667.e85cdd94.chunk.js.map