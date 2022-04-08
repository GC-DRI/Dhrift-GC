(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{24905:function(e,n,r){"use strict";r.d(n,{Z:function(){return M}});var t=r(96156),c=r(81253),i=r(85893),s=r(86243),a=r(67294),o=r(97762),l=r(18397),u=r(50542),d=r(69964),p=r(22887),h=r(72642),m=r(15020);function f(e){e.className;var n=e.children,r=(0,a.useState)(!1),t=r[0],c=r[1],s=(0,a.useState)(0),f=s[0],g=s[1],j=n[0].props.children.map((function(e,n){var r=o.renderToString(e).replace('<li data-reactroot="">',"").slice(0,-5),t=r.endsWith("*");if(t){var c=r.slice(0,-1);return{index:n,correct:t,li:(0,m.ZP)(c)}}return{index:n,correct:t,li:(0,m.ZP)(r)}})),x=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);return j.some((function(e){return e.correct}))?(0,i.jsxs)("div",{id:x,className:"quiz",children:[(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=Array.from(e.target.querySelectorAll('input[type="checkbox"]:checked')).map((function(e){return e.value})).map((function(e){return parseInt(e)})),r=j.filter((function(e){return e.correct})).map((function(e){return e.index})),t=r.map((function(e){return parseInt(e)})),i=n.every((function(e){return t.includes(e)}))&&n.length===r.length;i?(document.getElementById(x).style.backgroundColor="rgba(0, 170, 100, 0.3)",document.getElementById("".concat(x,"-submit")).remove(),c(!0),g(i)):(document.getElementById(x).style.backgroundColor="rgba(255, 0, 0, 0.3)",document.getElementById("".concat(x,"-submit")).innerHTML="Try again!")},style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,i.jsxs)(l.Z,{component:"fieldset",children:[(0,i.jsx)(d.Z,{component:"legend",children:"Quiz"}),j.map((function(e){return(0,i.jsx)(u.Z,{value:e.index,control:(0,i.jsx)(p.Z,{}),label:e.li,className:"".concat(x,"-checkbox"),disabled:t},e.index)}))]}),(0,i.jsx)(h.Z,{type:"submit",variant:"contained",color:"primary",className:"quizButton",id:"".concat(x,"-submit"),children:"Check my answer"})]}),f?(0,i.jsx)("p",{children:"Correct!"}):(0,i.jsx)("p",{})]}):(0,i.jsx)("ul",{children:n})}var g=r(28579),j=(r(17658),r(25675)),x=r(72165),v=(r(36063),r(40947)),y=r(81365),b=r(69260),N=r(81215),Z=r(35595);function S(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function O(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?S(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var _=function(e){var n=e.className,r=e.children,t=(0,a.useState)(!1),c=t[0],s=t[1],o=r.props.children,l=r.props.className;if(void 0!==l){var u=l.replace("lang-",""),d=g.Z.highlight(o,{language:u,ignoreIllegals:!0}),p=g.Z.getLanguage(d.language).name;return(0,i.jsxs)("div",{className:"code-block",onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:[c&&(0,i.jsx)("div",{className:"hljs",children:u&&(0,i.jsx)("span",{className:"language",children:p})}),(0,i.jsx)("pre",{className:n+" "+u,children:(0,i.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:d.value}})})]})}return(0,i.jsx)("pre",{className:n,children:(0,i.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:o}})})},k=function(e){e.className;var n=O({},(0,c.Z)(e,["className"])),r=n.src;return(0,i.jsx)("div",{className:"image-container",children:(0,i.jsx)(x.Z,{children:(0,i.jsx)("div",{className:"markdown-image-container",children:(0,i.jsx)(j.default,{className:"markdown-image",src:r,alt:n.alt,layout:"fill",objectFit:"cover"})})})})},w=function(e){var n=e.children,r=(0,c.Z)(e,["children"]);if(n.length>0&&"object"===typeof n[0]){var t=n[0].props.children.join("");return(0,i.jsx)("div",{children:(0,i.jsx)(v.Z,O({defaultCode:t},r))})}var s=n.join("");return(0,i.jsx)("div",{children:(0,i.jsx)(v.Z,O({defaultCode:s},r))})},E=function(e){e.className;var n=e.children.join("");return(0,i.jsx)("div",{children:(0,i.jsx)(Z.Z,{defaultCode:n})})},P=function(e){e.className,e.children;return(0,i.jsx)("div",{children:(0,i.jsx)(y.Z,{})})},C=function(e){e.className,e.children;return(0,i.jsx)("div",{children:(0,i.jsx)(N.Z,{})})},I=function(e){e.className,e.children;return(0,i.jsx)("div",{children:(0,i.jsx)(b.Z,{})})},T=function(e){e.className;var n=e.children;return(0,i.jsx)("div",{children:(0,i.jsx)(f,{children:n})})};function M(e,n){return(0,s.n)(e,{overrides:{pre:{component:_,props:{className:"hljs"}},img:{component:k,props:{className:"image"}},CodeEditor:{component:w,props:{allSnippets:n}},Quiz:T,PythonREPL:P,Terminal:C,JSInterpreter:I,EditorWithTabs:E}})}},515:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return o},default:function(){return l}});var t=r(85893),c=(r(41664),r(67294)),i=r(24905),s=r(11163),a=(r(28579),r(25675),r(54065)),o=!0;function l(e){e.workshops,e.guides,e.insights;var n=e.authors,r=(0,s.useRouter)().query.slug,o=n.find((function(e){return e.slug===r})).content,l=function(e){var n=(0,i.Z)(e),r=[];n.props.children.reduce((function(e,n){return"string"===typeof n||("h1"===n.type?r.push([n]):r[r.length-1].push(n)),e}),[]);return r.map((function(e,n){return(0,t.jsx)("div",{children:e.map((function(e,n){return(0,t.jsx)(c.Fragment,{children:e},n)}))},n)}))},u=(0,c.useState)(1),d=u[0],p=(u[1],(0,c.useState)([])),h=p[0],m=p[1],f=(0,c.useState)([]),g=f[0],j=f[1],x=(0,c.useState)([]),v=(x[0],x[1]),y=h.map((function(e,n){var r=void 0;return r=0===n?e.props.children[0].props.children:e.props.children[0].props.children.props.children[0],(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:d===n+1?"active":"",onClick:function(){return handlePageChange(event,n+1)},children:r})},n)}));return(0,c.useEffect)((function(){m(l(o)),j(l(o)[0]),v(y)}),[o]),(0,t.jsx)(a.Z,{disableGutters:!0,maxWidth:"xl",style:{display:"flex",marginTop:"1rem"},children:(0,t.jsx)("div",{className:"content card-page",children:(0,t.jsx)("div",{className:"workshop-container",children:g})})})}},47076:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authors/[slug]",function(){return r(515)}])}},function(e){e.O(0,[774,164,635,757,571,598,432,636,888,179],(function(){return n=47076,e(e.s=n);var n}));var n=e.O();_N_E=n}]);