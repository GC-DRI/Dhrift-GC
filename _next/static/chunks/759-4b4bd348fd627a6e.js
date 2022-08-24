"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{30759:function(e,r,n){n.d(r,{Z:function(){return N}});var t=n(26042),o=n(99534),_=n(85893),i=n(86243),a=n(67294),s=n(97762),c=n(27505),l=n(50480),u=n(88641),d=n(85071),p=n(11057),f=n(25935);function m(e){e.className;var r=e.children,n=(0,a.useState)(!1),t=n[0],o=n[1],i=(0,a.useState)(0),m=i[0],g=i[1],E=r[0].props.children.map((function(e,r){var n=s.renderToString(e).replace('<li data-reactroot="">',"").slice(0,-5),t=n.endsWith("*");if(t){var o=n.slice(0,-1);return{index:r,correct:t,li:(0,f.ZP)(o)}}return{index:r,correct:t,li:(0,f.ZP)(n)}})),h=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);return E.some((function(e){return e.correct}))?(0,_.jsxs)("div",{id:h,className:"quiz",children:[(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=Array.from(e.target.querySelectorAll('input[type="checkbox"]:checked')).map((function(e){return e.value})).map((function(e){return parseInt(e)})),n=E.filter((function(e){return e.correct})).map((function(e){return e.index})),t=n.map((function(e){return parseInt(e)})),_=r.every((function(e){return t.includes(e)}))&&r.length===n.length;_?(document.getElementById(h).style.backgroundColor="rgba(0, 170, 100, 0.3)",document.getElementById("".concat(h,"-submit")).remove(),o(!0),g(_)):(document.getElementById(h).style.backgroundColor="rgba(255, 0, 0, 0.3)",document.getElementById("".concat(h,"-submit")).innerHTML="Try again!")},style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,_.jsxs)(c.Z,{component:"fieldset",children:[(0,_.jsx)(u.Z,{component:"legend",children:"Quiz"}),E.map((function(e){return(0,_.jsx)(l.Z,{value:e.index,control:(0,_.jsx)(d.Z,{}),label:e.li,className:"".concat(h,"-checkbox"),disabled:t},e.index)}))]}),(0,_.jsx)(p.Z,{type:"submit",variant:"contained",color:"primary",className:"brutalist-button quizButton",id:"".concat(h,"-submit"),children:"Check my answer"})]}),m?(0,_.jsx)("p",{children:"Correct!"}):(0,_.jsx)("p",{})]}):(0,_.jsx)("ul",{children:r})}var g=n(20637),E=(n(19823),n(25675)),h=n.n(E),x=n(77825),v=(n(91597),n(5726)),C=n(27325),j=n(93270),b=n(94615),M=n(55733),P=n.n(M),D=n(93162);function O(e){console.log(e);var r=e.allUploads,n="string"===typeof e.files?e.files.split(","):[],t=[];void 0!=n&&n.forEach((function(e){var n=r.find((function(r){return r.slug===e.trim()}));void 0!=n&&t.push(n)}));return(0,_.jsxs)("div",{className:"download-button",children:[(0,_.jsx)("button",{onClick:function(){return function(r){if(t.length>1){console.log(t);var n=new(P());t.forEach((function(e){n.file(e.slug,e.content)})),n.generateAsync({type:"blob"}).then((function(r){(0,D.saveAs)(r,e.workshop.slug+".zip")}))}else{var o=t[0],_=new Blob([o.content],{type:"text/plain"});(0,D.saveAs)(_,o.slug)}}()},children:"Download"}),(0,_.jsx)("div",{className:"file-names",children:t.map((function(e){return(0,_.jsx)("div",{children:e.slug},e.slug)}))})]})}var w=n(4298),I=n.n(w),R=n(19755),y=n.n(R);n(60738),n(94099);function L(){var e=Math.random().toString(36).substring(7);return(0,a.useEffect)((function(){var r=y()("#"+e).terminal((function(e){if(""!==e)try{var r=__EVAL(e);void 0!==r&&this.echo(new String(r))}catch(n){this.error(new String(n))}else this.echo("")}),{tabindex:0,greetings:"",prompt:"> "});return r.focus(),function(){return r.destroy()}}),[]),(0,_.jsxs)("div",{className:"terminal-container",style:{width:"50%",height:"100%",minWidth:"400px"},children:[(0,_.jsx)("div",{className:"term",id:e,style:{width:"100%",height:"100%",border:"1px solid #ccc",borderRadius:"5px",overflow:"hidden",backgroundColor:"#fff"}}),(0,_.jsx)(I(),{dangerouslySetInnerHTML:{__html:"\n            var __EVAL = (s) => eval(`void (__EVAL = ${__EVAL.toString()}); ${s}`);\n            "}})]})}var k=function(e){var r=e.className,n=e.children,t=(0,a.useState)(!1),o=t[0],i=t[1],s=n.props.children,c=n.props.className;if(void 0!==c){var l=c.replace("lang-",""),u=g.Z.highlight(s,{language:l,ignoreIllegals:!0}),d=g.Z.getLanguage(u.language).name;return(0,_.jsx)("div",{className:"code-block",onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:(0,_.jsxs)("pre",{className:r+" "+l,children:[o&&(0,_.jsx)(_.Fragment,{children:l&&(0,_.jsx)("span",{className:"language",children:d})}),(0,_.jsx)("code",{className:r,dangerouslySetInnerHTML:{__html:u.value}})]})})}return(0,_.jsx)("pre",{className:r,children:(0,_.jsx)("code",{className:r,dangerouslySetInnerHTML:{__html:s}})})},S=function(e){e.className;var r=(0,o.Z)(e,["className"]),n=(0,t.Z)({},r),i=n.src;return(0,_.jsx)("div",{className:"image-container",children:(0,_.jsx)(x.Z,{children:(0,_.jsx)("div",{className:"markdown-image-container",children:(0,_.jsx)(h(),{className:"markdown-image",src:i,alt:n.alt,layout:"fill",objectFit:"cover"})})})})},T=function(e){var r=e.children,n=(0,o.Z)(e,["children"]);if(r){if(r.length>0){if("object"===typeof r[0]){console.log("children",r);var i=r[0].props.children.join("");return(0,_.jsx)("div",{children:(0,_.jsx)(b.Z,(0,t.Z)({language:n.language,defaultCode:i},n))})}var a=r.join("");return(0,_.jsx)("div",{children:(0,_.jsx)(b.Z,(0,t.Z)({language:n.language,defaultCode:a},n))})}console.log("HERE",r);var s=r.join("");return(0,_.jsx)("div",{children:(0,_.jsx)(b.Z,(0,t.Z)({language:n.language,defaultCode:s},n))})}return(0,_.jsx)("div",{children:(0,_.jsx)(b.Z,(0,t.Z)({language:n.language},n))})},A=function(e){e.className;var r=e.children.join("");return(0,_.jsx)("div",{children:(0,_.jsx)(j.Z,{defaultCode:r})})},B=function(e){e.className,e.children;return(0,_.jsx)("div",{children:(0,_.jsx)(v.Z,{})})},U=function(e){e.className,e.children;return(0,_.jsx)("div",{children:(0,_.jsx)(C.Z,{})})},Z=function(e){e.className;var r=e.children;return(0,_.jsx)("div",{children:(0,_.jsx)(m,{children:r})})},W=function(e){var r=e.children,n=(0,o.Z)(e,["children"]).color||"#d5222c";return(0,_.jsx)("div",{className:"boxed",style:{padding:"1rem",border:"3px solid "+n,boxShadow:n+" 8px 8px 0px"},children:r})},K=function(e){var r=e.children,n=(0,o.Z)(e,["children"]),t=(0,a.useState)(!1),i=t[0],s=t[1],c=n.color||"#9abc4f",l=(0,_.jsxs)("div",{children:[r[0]," (click to reveal)"]});return(0,_.jsx)("div",{className:"boxed",style:{padding:"1rem",border:"3px solid "+c,boxShadow:c+" 8px 8px 0px",marginTop:"2rem",cursor:"pointer"},onClick:function(){return s(!i)},children:i?r:l})};function N(e,r,n){return(0,i.n)(e,{overrides:{pre:{component:k,props:{className:"hljs"}},img:{component:S,props:{className:"image"}},CodeEditor:{component:T,props:{allUploads:r}},Download:{component:O,props:{workshop:n,allUploads:r}},Quiz:Z,PythonREPL:B,Terminal:U,EditorWithTabs:A,JSTerminal:L,Boxed:W,Reveal:K}})}},94615:function(e,r,n){n.d(r,{Z:function(){return a}});var t=n(26042),o=n(85893),_=(n(73935),n(33574)),i=n(69856);n(67294);function a(e){return e.language&&"python"===e.language.toLowerCase()?(0,o.jsx)(_.Z,(0,t.Z)({},e)):e.language&&"javascript"===e.language.toLowerCase()?(0,o.jsx)(i.Z,(0,t.Z)({},e)):(0,o.jsx)(_.Z,(0,t.Z)({},e))}},69856:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return JSEditorComponent}});var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(99534),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),next_dynamic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5152),next_dynamic__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__),allotment_dist_style_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(41722),allotment_dist_style_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(allotment_dist_style_css__WEBPACK_IMPORTED_MODULE_3__),_EditorTopbar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(21552),_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(50594),EditorComponent=next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()((function(){return Promise.all([__webpack_require__.e(281),__webpack_require__.e(569),__webpack_require__.e(149)]).then(__webpack_require__.bind(__webpack_require__,4149))}),{loadableGenerated:{webpack:function(){return[4149]}},ssr:!1}),Frame=next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()((function(){return __webpack_require__.e(561).then(__webpack_require__.bind(__webpack_require__,96561))}),{loadableGenerated:{webpack:function(){return[96561]}},ssr:!1});function JSEditorComponent(_param){var closeOutput=function(){setIsoutput(!1)},closeError=function(){setIsError(!1)},_defaultCode=_param.defaultCode,defaultCode=void 0===_defaultCode?"// Write Javascript Here":_defaultCode,props=(0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_5__.Z)(_param,["defaultCode"]),ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultCode),code=ref[0],setCode=ref[1],ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),runningCode=ref[0],setRunningCode=ref[1],outputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),error=ref[0],setError=ref[1],ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isoutput=ref[0],setIsoutput=ref[1],ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isError=ref[0],setIsError=ref[1],ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((function(e){return e+1}),0),ignored=ref[0],forceUpdate=ref[1],allSnippets=props.allUploads,chosenSnippets="string"===typeof props.snippets?props.snippets.split(","):[],filteredSnippets=[];void 0!=chosenSnippets&&chosenSnippets.forEach((function(e){var r=allSnippets.find((function(r){return r.slug===e.trim()}));void 0!=r&&filteredSnippets.push(r)}));var outputComponent=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:"output",style:{margin:"10px",padding:"10px",border:"1px solid #32c259",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"#32c259",fontSize:"20px",overflow:"auto",font:"1.3rem Inconsolata, monospace",whiteSpace:"pre-wrap"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:closeOutput,style:{float:"right",fontSize:"20px",color:"#32c259",marginRight:"10px",cursor:"pointer"}}),outputRef.current]})},errorComponent=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:"error",style:{font:"1.3rem Inconsolata, monospace",margin:"10px",padding:"10px",border:"1px solid red",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"red",fontSize:"20px",overflow:"auto",whiteSpace:"pre-wrap"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:closeError,style:{float:"right",fontSize:"20px",color:"#32c259",marginRight:"10px",cursor:"pointer"}}),String(error)]})},JSoutput=function(e){var r="[";if("object"==typeof e&&e.length)for(var n=0;n<e.length;n++)if("object"==typeof e[n]&&e[n].length){r+=(0==n?"":" ")+"[";for(var t=0;t<e[n].length;t++)r+=e[n][t]+(t==e[n].length-1?"]"+(n==e.length-1?"]":",")+"\n":", ")}else r+=e[n]+(n==e.length-1?"]":", ");else r=e;return r},writeln=function(e){e||(e=""),outputRef.current+=JSoutput(e)+"\n"},JSrun=function JSrun(){var str;setIsError(!1),setIsoutput(!1),setRunningCode(!0),outputRef.current="";try{console.oldLog=console.log,console.log=function(e){return console.oldLog(e),e};var result=eval(code);writeln(result),forceUpdate(),setIsoutput(!0)}catch(e){setError(e),setIsError(!0)}void 0!=str&&(outputRef.current+=str),console.log=console.oldLog,setRunningCode(!1)},onChangeJavascript=function(e){setCode(e)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"editorContainer",style:{height:"250px",width:"100%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EditorTopbar__WEBPACK_IMPORTED_MODULE_4__.Z,{spinnerNeeded:runningCode,snippets:filteredSnippets,run:JSrun,language:"JavaScript",defaultCode:defaultCode,setCode:setCode}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditorComponent,{code:code,onChange:onChangeJavascript,language:"javascript"})]}),isoutput&&outputComponent(),isError&&errorComponent()]})}}}]);