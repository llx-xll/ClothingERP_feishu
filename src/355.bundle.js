/*! For license information please see 355.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkclothing_erp=self.webpackChunkclothing_erp||[]).push([[355],{355:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Ps});var _chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(794),En=(__webpack_require__(295),(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.d)(((e,t)=>{t.exports=function(n){return null!=n&&null!=n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n)}}))),Ur=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.d)(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,l=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=function(c){return"function"==typeof Array.isArray?Array.isArray(c):"[object Array]"===r.call(c)},a=function(c){if(!c||"[object Object]"!==r.call(c))return!1;var p,u=n.call(c,"constructor"),d=c.constructor&&c.constructor.prototype&&n.call(c.constructor.prototype,"isPrototypeOf");if(c.constructor&&!u&&!d)return!1;for(p in c);return void 0===p||n.call(c,p)},s=function(c,u){l&&"__proto__"===u.name?l(c,u.name,{enumerable:!0,configurable:!0,value:u.newValue,writable:!0}):c[u.name]=u.newValue},f=function(c,u){if("__proto__"===u){if(!n.call(c,u))return;if(i)return i(c,u).value}return c[u]};t.exports=function c(){var u,d,p,y,k,w,m=arguments[0],E=1,S=arguments.length,T=!1;for("boolean"==typeof m&&(T=m,m=arguments[1]||{},E=2),(null==m||"object"!=typeof m&&"function"!=typeof m)&&(m={});E<S;++E)if(null!=(u=arguments[E]))for(d in u)p=f(m,d),m!==(y=f(u,d))&&(T&&y&&(a(y)||(k=o(y)))?(k?(k=!1,w=p&&o(p)?p:[]):w=p&&a(p)?p:{},s(m,{name:d,newValue:c(T,w,y)})):void 0!==y&&s(m,{name:d,newValue:y}));return m}})),qr=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.d)(((e,t)=>{t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"})),Vr=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.d)(((e,t)=>{var n=qr();function r(){}function l(){}l.resetWarningCache=r,t.exports=function(){function i(s,f,c,u,d,p){if(p!==n){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}function o(){return i}i.isRequired=i;var a={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:l,resetWarningCache:r};return a.PropTypes=a,a}})),$r=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.d)(((e,t)=>{t.exports=Vr()()})),Wr=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.d)(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,l=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,f=/^\s+|\s+$/g,p="";function w(m){return m?m.replace(f,p):p}t.exports=function(m,E){if("string"!=typeof m)throw new TypeError("First argument must be a string");if(!m)return[];E=E||{};var S=1,T=1;function P(L){var I=L.match(r);I&&(S+=I.length);var q=L.lastIndexOf("\n");T=~q?L.length-q:T+L.length}function b(){var L={line:S,column:T};return function(I){return I.position=new A(L),x(),I}}function A(L){this.start=L,this.end={line:S,column:T},this.source=E.source}function R(L){var I=new Error(E.source+":"+S+":"+T+": "+L);if(I.reason=L,I.filename=E.source,I.line=S,I.column=T,I.source=m,!E.silent)throw I}function N(L){var I=L.exec(m);if(I){var q=I[0];return P(q),m=m.slice(q.length),I}}function x(){N(l)}function D(L){var I;for(L=L||[];I=O();)!1!==I&&L.push(I);return L}function O(){var L=b();if("/"==m.charAt(0)&&"*"==m.charAt(1)){for(var I=2;p!=m.charAt(I)&&("*"!=m.charAt(I)||"/"!=m.charAt(I+1));)++I;if(I+=2,p===m.charAt(I-1))return R("End of comment missing");var q=m.slice(2,I-2);return T+=2,P(q),m=m.slice(I),T+=2,L({type:"comment",comment:q})}}function U(){var L=b(),I=N(i);if(I){if(O(),!N(o))return R("property missing ':'");var q=N(a),re=L({type:"declaration",property:w(I[0].replace(n,p)),value:q?w(q[0].replace(n,p)):p});return N(s),re}}return A.prototype.content=m,x(),function(){var I,L=[];for(D(L);I=U();)!1!==I&&(L.push(I),D(L));return L}()}})),Qr=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.d)(((e,t)=>{var n=Wr();function r(l,i){var o=null;if(!l||"string"!=typeof l)return o;for(var a,c,u,s=n(l),f="function"==typeof i,d=0,p=s.length;d<p;d++)c=(a=s[d]).property,u=a.value,f?i(c,u,a):u&&(o||(o={}),o[c]=u);return o}t.exports=r,t.exports.default=r})),Kr=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.f)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(),1),Jt=["http","https","mailto","tel"];function Xr(e){let t=(e||"").trim(),n=t.charAt(0);if("#"===n||"/"===n)return t;let r=t.indexOf(":");if(-1===r)return t;let l=-1;for(;++l<Jt.length;){let i=Jt[l];if(r===i.length&&t.slice(0,i.length).toLowerCase()===i)return t}return l=t.indexOf("?"),-1!==l&&r>l||(l=t.indexOf("#"),-1!==l&&r>l)?t:"javascript:void(0)"}var ut=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.f)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(),1),Yr=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(En(),1);function Ue(e){return e&&"object"==typeof e?"position"in e||"type"in e?Zt(e.position):"start"in e||"end"in e?Zt(e):"line"in e||"column"in e?xt(e):"":""}function xt(e){return Gt(e&&e.line)+":"+Gt(e&&e.column)}function Zt(e){return xt(e&&e.start)+"-"+xt(e&&e.end)}function Gt(e){return e&&"number"==typeof e?e:1}var ue=class extends Error{constructor(e,t,n){let r=[null,null],l={start:{line:null,column:null},end:{line:null,column:null}};if(super(),"string"==typeof t&&(n=t,t=void 0),"string"==typeof n){let i=n.indexOf(":");-1===i?r[1]=n:(r[0]=n.slice(0,i),r[1]=n.slice(i+1))}t&&("type"in t||"position"in t?t.position&&(l=t.position):"start"in t||"end"in t?l=t:("line"in t||"column"in t)&&(l.start=t)),this.name=Ue(t)||"1:1",this.message="object"==typeof e?e.message:e,this.stack="","object"==typeof e&&e.stack&&(this.stack=e.stack),this.reason=this.message,this.fatal,this.line=l.start.line,this.column=l.start.column,this.position=l,this.source=r[0],this.ruleId=r[1],this.file,this.actual,this.expected,this.url,this.note}};ue.prototype.file="",ue.prototype.name="",ue.prototype.reason="",ue.prototype.message="",ue.prototype.stack="",ue.prototype.fatal=null,ue.prototype.column=null,ue.prototype.line=null,ue.prototype.source=null,ue.prototype.ruleId=null,ue.prototype.position=null;var he={basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');We(e);let i,n=0,r=-1,l=e.length;if(void 0===t||0===t.length||t.length>e.length){for(;l--;)if(47===e.charCodeAt(l)){if(i){n=l+1;break}}else r<0&&(i=!0,r=l+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,a=t.length-1;for(;l--;)if(47===e.charCodeAt(l)){if(i){n=l+1;break}}else o<0&&(i=!0,o=l+1),a>-1&&(e.charCodeAt(l)===t.charCodeAt(a--)?a<0&&(r=l):(a=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)},dirname:function(e){if(We(e),0===e.length)return".";let r,t=-1,n=e.length;for(;--n;)if(47===e.charCodeAt(n)){if(r){t=n;break}}else r||(r=!0);return t<0?47===e.charCodeAt(0)?"/":".":1===t&&47===e.charCodeAt(0)?"//":e.slice(0,t)},extname:function(e){We(e);let o,t=e.length,n=-1,r=0,l=-1,i=0;for(;t--;){let a=e.charCodeAt(t);if(47!==a)n<0&&(o=!0,n=t+1),46===a?l<0?l=t:1!==i&&(i=1):l>-1&&(i=-1);else if(o){r=t+1;break}}return l<0||n<0||0===i||1===i&&l===n-1&&l===r+1?"":e.slice(l,n)},join:function(...e){let n,t=-1;for(;++t<e.length;)We(e[t]),e[t]&&(n=void 0===n?e[t]:n+"/"+e[t]);return void 0===n?".":function(e){We(e);let t=47===e.charCodeAt(0),n=function(e,t){let a,s,n="",r=0,l=-1,i=0,o=-1;for(;++o<=e.length;){if(o<e.length)a=e.charCodeAt(o);else{if(47===a)break;a=47}if(47===a){if(l!==o-1&&1!==i)if(l!==o-1&&2===i){if(n.length<2||2!==r||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),l=o,i=0;continue}}else if(n.length>0){n="",r=0,l=o,i=0;continue}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(l+1,o):n=e.slice(l+1,o),r=o-l-1;l=o,i=0}else 46===a&&i>-1?i++:i=-1}return n}(e,!t);return 0===n.length&&!t&&(n="."),n.length>0&&47===e.charCodeAt(e.length-1)&&(n+="/"),t?"/"+n:n}(n)},sep:"/"};function We(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}var ri={cwd:function(){return"/"}};function vt(e){return null!==e&&"object"==typeof e&&e.href&&e.origin}function li(e){if("string"==typeof e)e=new URL(e);else if(!vt(e)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if("file:"!==e.protocol){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return function(e){if(""!==e.hostname){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(37===t.charCodeAt(n)&&50===t.charCodeAt(n+1)){let r=t.charCodeAt(n+2);if(70===r||102===r){let l=new TypeError("File URL path must not include encoded / characters");throw l.code="ERR_INVALID_FILE_URL_PATH",l}}return decodeURIComponent(t)}(e)}var st=["history","path","basename","stem","extname","dirname"],An=class{constructor(e){let t;t=e?"string"==typeof e||function(e){return(0,Yr.default)(e)}(e)?{value:e}:vt(e)?{path:e}:e:{},this.data={},this.messages=[],this.history=[],this.cwd=ri.cwd(),this.value,this.stored,this.result,this.map;let r,n=-1;for(;++n<st.length;){let l=st[n];l in t&&void 0!==t[l]&&null!==t[l]&&(this[l]="history"===l?[...t[l]]:t[l])}for(r in t)st.includes(r)||(this[r]=t[r])}get path(){return this.history[this.history.length-1]}set path(e){vt(e)&&(e=li(e)),ft(e,"path"),this.path!==e&&this.history.push(e)}get dirname(){return"string"==typeof this.path?he.dirname(this.path):void 0}set dirname(e){en(this.basename,"dirname"),this.path=he.join(e||"",this.basename)}get basename(){return"string"==typeof this.path?he.basename(this.path):void 0}set basename(e){ft(e,"basename"),ct(e,"basename"),this.path=he.join(this.dirname||"",e)}get extname(){return"string"==typeof this.path?he.extname(this.path):void 0}set extname(e){if(ct(e,"extname"),en(this.dirname,"extname"),e){if(46!==e.charCodeAt(0))throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=he.join(this.dirname,this.stem+(e||""))}get stem(){return"string"==typeof this.path?he.basename(this.path,this.extname):void 0}set stem(e){ft(e,"stem"),ct(e,"stem"),this.path=he.join(this.dirname||"",e+(this.extname||""))}toString(e){return(this.value||"").toString(e||void 0)}message(e,t,n){let r=new ue(e,t,n);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=null,r}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}};function ct(e,t){if(e&&e.includes(he.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+he.sep+"`")}function ft(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function en(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function tn(e){if(e)throw e}var ui=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(En(),1),nn=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(Ur(),1);function wt(e){if("object"!=typeof e||null===e)return!1;let t=Object.getPrototypeOf(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)}function si(){let e=[],t={run:function(...l){let i=-1,o=l.pop();if("function"!=typeof o)throw new TypeError("Expected function as last argument, not "+o);!function a(s,...f){let c=e[++i],u=-1;if(s)o(s);else{for(;++u<l.length;)(null===f[u]||void 0===f[u])&&(f[u]=l[u]);l=f,c?function(e,t){let n;return r;function r(...o){let s,a=e.length>o.length;a&&o.push(l);try{s=e.apply(this,o)}catch(f){if(a&&n)throw f;return l(f)}a||(s&&s.then&&"function"==typeof s.then?s.then(i,l):s instanceof Error?l(s):i(s))}function l(o,...a){n||(n=!0,t(o,...a))}function i(o){l(null,o)}}(c,a)(...f):o(null,...f)}}(null,...l)},use:function(l){if("function"!=typeof l)throw new TypeError("Expected `middelware` to be a function, not "+l);return e.push(l),t}};return t}var fi=function Tn(){let r,e=si(),t=[],n={},l=-1;return i.data=function(k,w){return"string"==typeof k?2===arguments.length?(ht("data",r),n[k]=w,i):Dn.call(n,k)&&n[k]||null:k?(ht("data",r),n=k,i):n},i.Parser=void 0,i.Compiler=void 0,i.freeze=function(){if(r)return i;for(;++l<t.length;){let[k,...w]=t[l];if(!1===w[0])continue;!0===w[0]&&(w[0]=void 0);let m=k.call(i,...w);"function"==typeof m&&e.use(m)}return r=!0,l=Number.POSITIVE_INFINITY,i},i.attachers=t,i.use=function(k,...w){let m;if(ht("use",r),null!=k)if("function"==typeof k)P(k,...w);else{if("object"!=typeof k)throw new TypeError("Expected usable value, not `"+k+"`");Array.isArray(k)?T(k):S(k)}return m&&(n.settings=Object.assign(n.settings||{},m)),i;function E(b){if("function"==typeof b)P(b);else{if("object"!=typeof b)throw new TypeError("Expected usable value, not `"+b+"`");if(Array.isArray(b)){let[A,...R]=b;P(A,...R)}else S(b)}}function S(b){T(b.plugins),b.settings&&(m=Object.assign(m||{},b.settings))}function T(b){let A=-1;if(null!=b){if(!Array.isArray(b))throw new TypeError("Expected a list of plugins, not `"+b+"`");for(;++A<b.length;){E(b[A])}}}function P(b,A){let N,R=-1;for(;++R<t.length;)if(t[R][0]===b){N=t[R];break}N?(wt(N[1])&&wt(A)&&(A=(0,nn.default)(!0,N[1],A)),N[1]=A):t.push([...arguments])}},i.parse=function(k){i.freeze();let w=He(k),m=i.Parser;return pt("parse",m),rn(m,"parse")?new m(String(w),w).parse():m(String(w),w)},i.stringify=function(k,w){i.freeze();let m=He(w),E=i.Compiler;return dt("stringify",E),ln(k),rn(E,"compile")?new E(k,m).compile():E(k,m)},i.run=function(k,w,m){if(ln(k),i.freeze(),!m&&"function"==typeof w&&(m=w,w=void 0),!m)return new Promise(E);function E(S,T){function P(b,A,R){A=A||k,b?T(b):S?S(A):m(null,A,R)}e.run(k,He(w),P)}E(null,m)},i.runSync=function(k,w){let m,E;return i.run(k,w,S),on("runSync","run",E),m;function S(T,P){tn(T),m=P,E=!0}},i.process=function(k,w){if(i.freeze(),pt("process",i.Parser),dt("process",i.Compiler),!w)return new Promise(m);function m(E,S){let T=He(k);function P(b,A){b||!A?S(b):E?E(A):w(null,A)}i.run(i.parse(T),T,((b,A,R)=>{if(!b&&A&&R){let N=i.stringify(A,R);null==N||(function(e){return"string"==typeof e||(0,ui.default)(e)}(N)?R.value=N:R.result=N),P(b,R)}else P(b)}))}m(null,w)},i.processSync=function(k){let w;i.freeze(),pt("processSync",i.Parser),dt("processSync",i.Compiler);let m=He(k);return i.process(m,E),on("processSync","process",w),m;function E(S){w=!0,tn(S)}},i;function i(){let k=Tn(),w=-1;for(;++w<t.length;)k.use(...t[w]);return k.data((0,nn.default)(!0,{},n)),k}}().freeze(),Dn={}.hasOwnProperty;function rn(e,t){return"function"==typeof e&&e.prototype&&(function(e){let t;for(t in e)if(Dn.call(e,t))return!0;return!1}(e.prototype)||t in e.prototype)}function pt(e,t){if("function"!=typeof t)throw new TypeError("Cannot `"+e+"` without `Parser`")}function dt(e,t){if("function"!=typeof t)throw new TypeError("Cannot `"+e+"` without `Compiler`")}function ht(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ln(e){if(!wt(e)||"string"!=typeof e.type)throw new TypeError("Expected node, got `"+e+"`")}function on(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function He(e){return function(e){return!!(e&&"object"==typeof e&&"message"in e&&"messages"in e)}(e)?e:new An(e)}var gi={};function On(e,t,n){if(function(e){return!(!e||"object"!=typeof e)}(e)){if("value"in e)return"html"!==e.type||n?e.value:"";if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return an(e.children,t,n)}return Array.isArray(e)?an(e,t,n):""}function an(e,t,n){let r=[],l=-1;for(;++l<e.length;)r[l]=On(e[l],t,n);return r.join("")}function ne(e,t,n,r){let o,l=e.length,i=0;if(t=t<0?-t>l?0:l+t:t>l?l:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);i<r.length;)o=r.slice(i,i+1e4),o.unshift(t,0),e.splice(...o),i+=1e4,t+=1e4}function oe(e,t){return e.length>0?(ne(e,e.length,0,t),e):t}var un={}.hasOwnProperty;function At(e){let t={},n=-1;for(;++n<e.length;)bi(t,e[n]);return t}function bi(e,t){let n;for(n in t){let i,r=(un.call(e,n)?e[n]:void 0)||(e[n]={}),l=t[n];if(l)for(i in l){un.call(r,i)||(r[i]=[]);let o=l[i];ki(r[i],Array.isArray(o)?o:o?[o]:[])}}}function ki(e,t){let n=-1,r=[];for(;++n<t.length;)("after"===t[n].add?e:r).push(t[n]);ne(e,0,0,r)}var ee=Fe(/[A-Za-z]/),G=Fe(/[\dA-Za-z]/),vi=Fe(/[#-'*+\--9=?A-Z^-~]/);function Ve(e){return null!==e&&(e<32||127===e)}var St=Fe(/\d/),wi=Fe(/[\dA-Fa-f]/),Si=Fe(/[!-/:-@[-`{-~]/);function z(e){return null!==e&&e<-2}function V(e){return null!==e&&(e<0||32===e)}function B(e){return-2===e||-1===e||32===e}var Qe=Fe(/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/),Ce=Fe(/\s/);function Fe(e){return function(n){return null!==n&&e.test(String.fromCharCode(n))}}function H(e,t,n,r){let l=r?r-1:Number.POSITIVE_INFINITY,i=0;return function(s){return B(s)?(e.enter(n),a(s)):t(s)};function a(s){return B(s)&&i++<l?(e.consume(s),a):(e.exit(n),t(s))}}var Ci={tokenize:function(e){let n,t=e.attempt(this.parser.constructs.contentInitial,(function(a){if(null===a)return void e.consume(a);return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),H(e,t,"linePrefix")}),(function(a){return e.enter("paragraph"),i(a)}));return t;function i(a){let s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,o(a)}function o(a){return null===a?(e.exit("chunkText"),e.exit("paragraph"),void e.consume(a)):z(a)?(e.consume(a),e.exit("chunkText"),i):(e.consume(a),o)}}};var Ei={tokenize:function(e){let l,i,o,t=this,n=[],r=0;return a;function a(S){if(r<n.length){let T=n[r];return t.containerState=T[1],e.attempt(T[0].continuation,s,f)(S)}return f(S)}function s(S){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,l&&E();let b,T=t.events.length,P=T;for(;P--;)if("exit"===t.events[P][0]&&"chunkFlow"===t.events[P][1].type){b=t.events[P][1].end;break}m(r);let A=T;for(;A<t.events.length;)t.events[A][1].end=Object.assign({},b),A++;return ne(t.events,P+1,0,t.events.slice(T)),t.events.length=A,f(S)}return a(S)}function f(S){if(r===n.length){if(!l)return d(S);if(l.currentConstruct&&l.currentConstruct.concrete)return y(S);t.interrupt=!(!l.currentConstruct||l._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(sn,c,u)(S)}function c(S){return l&&E(),m(r),d(S)}function u(S){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,y(S)}function d(S){return t.containerState={},e.attempt(sn,p,y)(S)}function p(S){return r++,n.push([t.currentConstruct,t.containerState]),d(S)}function y(S){return null===S?(l&&E(),m(0),void e.consume(S)):(l=l||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:i,_tokenizer:l}),k(S))}function k(S){return null===S?(w(e.exit("chunkFlow"),!0),m(0),void e.consume(S)):z(S)?(e.consume(S),w(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(S),k)}function w(S,T){let P=t.sliceStream(S);if(T&&P.push(null),S.previous=i,i&&(i.next=S),i=S,l.defineSkip(S.start),l.write(P),t.parser.lazy[S.start.line]){let b=l.events.length;for(;b--;)if(l.events[b][1].start.offset<o&&(!l.events[b][1].end||l.events[b][1].end.offset>o))return;let N,x,A=t.events.length,R=A;for(;R--;)if("exit"===t.events[R][0]&&"chunkFlow"===t.events[R][1].type){if(N){x=t.events[R][1].end;break}N=!0}for(m(r),b=A;b<t.events.length;)t.events[b][1].end=Object.assign({},x),b++;ne(t.events,R+1,0,t.events.slice(A)),t.events.length=b}}function m(S){let T=n.length;for(;T-- >S;){let P=n[T];t.containerState=P[1],P[0].exit.call(t,e)}n.length=S}function E(){l.write([null]),i=void 0,l=void 0,t.containerState._closeFlow=void 0}}},sn={tokenize:function(e,t,n){return H(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}};function $e(e){return null===e||V(e)||Ce(e)?1:Qe(e)?2:void 0}function Ke(e,t,n){let r=[],l=-1;for(;++l<e.length;){let i=e[l].resolveAll;i&&!r.includes(i)&&(t=i(t,n),r.push(i))}return t}var Ct={name:"attention",tokenize:function(e,t){let i,n=this.parser.constructs.attentionMarkers.null,r=this.previous,l=$e(r);return function(s){return i=s,e.enter("attentionSequence"),a(s)};function a(s){if(s===i)return e.consume(s),a;let f=e.exit("attentionSequence"),c=$e(s),u=!c||2===c&&l||n.includes(s),d=!l||2===l&&c||n.includes(r);return f._open=!!(42===i?u:u&&(l||!d)),f._close=!!(42===i?d:d&&(c||!u)),t(s)}},resolveAll:function(e,t){let r,l,i,o,a,s,f,c,n=-1;for(;++n<e.length;)if("enter"===e[n][0]&&"attentionSequence"===e[n][1].type&&e[n][1]._close)for(r=n;r--;)if("exit"===e[r][0]&&"attentionSequence"===e[r][1].type&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let u=Object.assign({},e[r][1].end),d=Object.assign({},e[n][1].start);cn(u,-s),cn(d,s),o={type:s>1?"strongSequence":"emphasisSequence",start:u,end:Object.assign({},e[r][1].end)},a={type:s>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:d},i={type:s>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},l={type:s>1?"strong":"emphasis",start:Object.assign({},o.start),end:Object.assign({},a.end)},e[r][1].end=Object.assign({},o.start),e[n][1].start=Object.assign({},a.end),f=[],e[r][1].end.offset-e[r][1].start.offset&&(f=oe(f,[["enter",e[r][1],t],["exit",e[r][1],t]])),f=oe(f,[["enter",l,t],["enter",o,t],["exit",o,t],["enter",i,t]]),f=oe(f,Ke(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),f=oe(f,[["exit",i,t],["enter",a,t],["exit",a,t],["exit",l,t]]),e[n][1].end.offset-e[n][1].start.offset?(c=2,f=oe(f,[["enter",e[n][1],t],["exit",e[n][1],t]])):c=0,ne(e,r-1,n-r+3,f),n=r+f.length-c-2;break}for(n=-1;++n<e.length;)"attentionSequence"===e[n][1].type&&(e[n][1].type="data");return e}};function cn(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var Li={name:"autolink",tokenize:function(e,t,n){let r=0;return function(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i};function i(p){return ee(p)?(e.consume(p),o):f(p)}function o(p){return 43===p||45===p||46===p||G(p)?(r=1,a(p)):f(p)}function a(p){return 58===p?(e.consume(p),r=0,s):(43===p||45===p||46===p||G(p))&&r++<32?(e.consume(p),a):(r=0,f(p))}function s(p){return 62===p?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):null===p||32===p||60===p||Ve(p)?n(p):(e.consume(p),s)}function f(p){return 64===p?(e.consume(p),c):vi(p)?(e.consume(p),f):n(p)}function c(p){return G(p)?u(p):n(p)}function u(p){return 46===p?(e.consume(p),r=0,c):62===p?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):d(p)}function d(p){if((45===p||G(p))&&r++<63){let y=45===p?d:u;return e.consume(p),y}return n(p)}}};var Pe={tokenize:function(e,t,n){return function(i){return B(i)?H(e,l,"linePrefix")(i):l(i)};function l(i){return null===i||z(i)?t(i):n(i)}},partial:!0};var Ln={name:"blockQuote",tokenize:function(e,t,n){let r=this;return function(o){if(62===o){let a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),i}return n(o)};function i(o){return B(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}},continuation:{tokenize:function(e,t,n){let r=this;return function(o){return B(o)?H(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):i(o)};function i(o){return e.attempt(Ln,t,n)(o)}}},exit:function(e){e.exit("blockQuote")}};var In={name:"characterEscape",tokenize:function(e,t,n){return function(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),l};function l(i){return Si(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(i)}}};var fn=document.createElement("i");function Dt(e){let t="&"+e+";";fn.innerHTML=t;let n=fn.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&n!==t&&n}var zn={name:"characterReference",tokenize:function(e,t,n){let i,o,r=this,l=0;return function(u){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),s};function s(u){return 35===u?(e.enter("characterReferenceMarkerNumeric"),e.consume(u),e.exit("characterReferenceMarkerNumeric"),f):(e.enter("characterReferenceValue"),i=31,o=G,c(u))}function f(u){return 88===u||120===u?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(u),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,o=wi,c):(e.enter("characterReferenceValue"),i=7,o=St,c(u))}function c(u){if(59===u&&l){let d=e.exit("characterReferenceValue");return o!==G||Dt(r.sliceSerialize(d))?(e.enter("characterReferenceMarker"),e.consume(u),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):n(u)}return o(u)&&l++<i?(e.consume(u),c):n(u)}}};var pn={tokenize:function(e,t,n){let r=this;return function(o){return null===o?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i)};function i(o){return r.parser.lazy[r.now().line]?n(o):t(o)}},partial:!0},dn={name:"codeFenced",tokenize:function(e,t,n){let a,r=this,l={tokenize:function(b,A,R){let N=0;return x;function x(L){return b.enter("lineEnding"),b.consume(L),b.exit("lineEnding"),D}function D(L){return b.enter("codeFencedFence"),B(L)?H(b,O,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(L):O(L)}function O(L){return L===a?(b.enter("codeFencedFenceSequence"),U(L)):R(L)}function U(L){return L===a?(N++,b.consume(L),U):N>=o?(b.exit("codeFencedFenceSequence"),B(L)?H(b,W,"whitespace")(L):W(L)):R(L)}function W(L){return null===L||z(L)?(b.exit("codeFencedFence"),A(L)):R(L)}},partial:!0},i=0,o=0;return function(b){return function(b){let A=r.events[r.events.length-1];return i=A&&"linePrefix"===A[1].type?A[2].sliceSerialize(A[1],!0).length:0,a=b,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(b)}(b)};function c(b){return b===a?(o++,e.consume(b),c):o<3?n(b):(e.exit("codeFencedFenceSequence"),B(b)?H(e,u,"whitespace")(b):u(b))}function u(b){return null===b||z(b)?(e.exit("codeFencedFence"),r.interrupt?t(b):e.check(pn,k,T)(b)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),d(b))}function d(b){return null===b||z(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),u(b)):B(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),H(e,p,"whitespace")(b)):96===b&&b===a?n(b):(e.consume(b),d)}function p(b){return null===b||z(b)?u(b):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(b))}function y(b){return null===b||z(b)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),u(b)):96===b&&b===a?n(b):(e.consume(b),y)}function k(b){return e.attempt(l,T,w)(b)}function w(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),m}function m(b){return i>0&&B(b)?H(e,E,"linePrefix",i+1)(b):E(b)}function E(b){return null===b||z(b)?e.check(pn,k,T)(b):(e.enter("codeFlowValue"),S(b))}function S(b){return null===b||z(b)?(e.exit("codeFlowValue"),E(b)):(e.consume(b),S)}function T(b){return e.exit("codeFenced"),t(b)}},concrete:!0};var gt={name:"codeIndented",tokenize:function(e,t,n){let r=this;return function(f){return e.enter("codeIndented"),H(e,i,"linePrefix",5)(f)};function i(f){let c=r.events[r.events.length-1];return c&&"linePrefix"===c[1].type&&c[2].sliceSerialize(c[1],!0).length>=4?o(f):n(f)}function o(f){return null===f?s(f):z(f)?e.attempt(Hi,o,s)(f):(e.enter("codeFlowValue"),a(f))}function a(f){return null===f||z(f)?(e.exit("codeFlowValue"),o(f)):(e.consume(f),a)}function s(f){return e.exit("codeIndented"),t(f)}}},Hi={tokenize:function(e,t,n){let r=this;return l;function l(o){return r.parser.lazy[r.now().line]?n(o):z(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l):H(e,i,"linePrefix",5)(o)}function i(o){let a=r.events[r.events.length-1];return a&&"linePrefix"===a[1].type&&a[2].sliceSerialize(a[1],!0).length>=4?t(o):z(o)?l(o):n(o)}},partial:!0};var Vi={name:"codeText",tokenize:function(e,t,n){let l,i,r=0;return function(u){return e.enter("codeText"),e.enter("codeTextSequence"),a(u)};function a(u){return 96===u?(e.consume(u),r++,a):(e.exit("codeTextSequence"),s(u))}function s(u){return null===u?n(u):32===u?(e.enter("space"),e.consume(u),e.exit("space"),s):96===u?(i=e.enter("codeTextSequence"),l=0,c(u)):z(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),s):(e.enter("codeTextData"),f(u))}function f(u){return null===u||32===u||96===u||z(u)?(e.exit("codeTextData"),s(u)):(e.consume(u),f)}function c(u){return 96===u?(e.consume(u),l++,c):l===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(u)):(i.type="codeTextData",f(u))}},resolve:function(e){let r,l,t=e.length-4,n=3;if(!("lineEnding"!==e[n][1].type&&"space"!==e[n][1].type||"lineEnding"!==e[t][1].type&&"space"!==e[t][1].type))for(r=n;++r<t;)if("codeTextData"===e[r][1].type){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}for(r=n-1,t++;++r<=t;)void 0===l?r!==t&&"lineEnding"!==e[r][1].type&&(l=r):(r===t||"lineEnding"===e[r][1].type)&&(e[l][1].type="codeTextData",r!==l+2&&(e[l][1].end=e[r-1][1].end,e.splice(l+2,r-l-2),t-=r-l-2,r=l+2),l=void 0);return e},previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type}};function Pn(e){let r,l,i,o,a,s,f,t={},n=-1;for(;++n<e.length;){for(;n in t;)n=t[n];if(r=e[n],n&&"chunkFlow"===r[1].type&&"listItemPrefix"===e[n-1][1].type&&(s=r[1]._tokenizer.events,i=0,i<s.length&&"lineEndingBlank"===s[i][1].type&&(i+=2),i<s.length&&"content"===s[i][1].type))for(;++i<s.length&&"content"!==s[i][1].type;)"chunkText"===s[i][1].type&&(s[i][1]._isInFirstContentOfListItem=!0,i++);if("enter"===r[0])r[1].contentType&&(Object.assign(t,Ki(e,n)),n=t[n],f=!0);else if(r[1]._container){for(i=n,l=void 0;i--&&(o=e[i],"lineEnding"===o[1].type||"lineEndingBlank"===o[1].type);)"enter"===o[0]&&(l&&(e[l][1].type="lineEndingBlank"),o[1].type="lineEnding",l=i);l&&(r[1].end=Object.assign({},e[l][1].start),a=e.slice(l,n),a.unshift(r),ne(e,l,n-l+1,a))}}return!f}function Ki(e,t){let c,u,n=e[t][1],r=e[t][2],l=t-1,i=[],o=n._tokenizer||r.parser[n.contentType](n.start),a=o.events,s=[],f={},d=-1,p=n,y=0,k=0,w=[k];for(;p;){for(;e[++l][1]!==p;);i.push(l),p._tokenizer||(c=r.sliceStream(p),p.next||c.push(null),u&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(c),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),u=p,p=p.next}for(p=n;++d<a.length;)"exit"===a[d][0]&&"enter"===a[d-1][0]&&a[d][1].type===a[d-1][1].type&&a[d][1].start.line!==a[d][1].end.line&&(k=d+1,w.push(k),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):w.pop(),d=w.length;d--;){let m=a.slice(w[d],w[d+1]),E=i.pop();s.unshift([E,E+m.length-1]),ne(e,E,2,m)}for(d=-1;++d<s.length;)f[y+s[d][0]]=y+s[d][1],y+=s[d][1]-s[d][0]-1;return f}var Xi={tokenize:function(e,t){let n;return function(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),l(a)};function l(a){return null===a?i(a):z(a)?e.check(Yi,o,i)(a):(e.consume(a),l)}function i(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function o(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,l}},resolve:function(e){return Pn(e),e}},Yi={tokenize:function(e,t,n){let r=this;return function(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),H(e,i,"linePrefix")};function i(o){if(null===o||z(o))return n(o);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&"linePrefix"===a[1].type&&a[2].sliceSerialize(a[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}},partial:!0};function Mn(e,t,n,r,l,i,o,a,s){let f=s||Number.POSITIVE_INFINITY,c=0;return function(m){return 60===m?(e.enter(r),e.enter(l),e.enter(i),e.consume(m),e.exit(i),d):null===m||32===m||41===m||Ve(m)?n(m):(e.enter(r),e.enter(o),e.enter(a),e.enter("chunkString",{contentType:"string"}),k(m))};function d(m){return 62===m?(e.enter(i),e.consume(m),e.exit(i),e.exit(l),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return 62===m?(e.exit("chunkString"),e.exit(a),d(m)):null===m||60===m||z(m)?n(m):(e.consume(m),92===m?y:p)}function y(m){return 60===m||62===m||92===m?(e.consume(m),p):p(m)}function k(m){return c||null!==m&&41!==m&&!V(m)?c<f&&40===m?(e.consume(m),c++,k):41===m?(e.consume(m),c--,k):null===m||32===m||40===m||Ve(m)?n(m):(e.consume(m),92===m?w:k):(e.exit("chunkString"),e.exit(a),e.exit(o),e.exit(r),t(m))}function w(m){return 40===m||41===m||92===m?(e.consume(m),k):k(m)}}function Rn(e,t,n,r,l,i){let s,o=this,a=0;return function(p){return e.enter(r),e.enter(l),e.consume(p),e.exit(l),e.enter(i),c};function c(p){return a>999||null===p||91===p||93===p&&!s||94===p&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs?n(p):93===p?(e.exit(i),e.enter(l),e.consume(p),e.exit(l),e.exit(r),t):z(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),u(p))}function u(p){return null===p||91===p||93===p||z(p)||a++>999?(e.exit("chunkString"),c(p)):(e.consume(p),s||(s=!B(p)),92===p?d:u)}function d(p){return 91===p||92===p||93===p?(e.consume(p),a++,u):u(p)}}function jn(e,t,n,r,l,i){let o;return function(d){return 34===d||39===d||40===d?(e.enter(r),e.enter(l),e.consume(d),e.exit(l),o=40===d?41:d,s):n(d)};function s(d){return d===o?(e.enter(l),e.consume(d),e.exit(l),e.exit(r),t):(e.enter(i),f(d))}function f(d){return d===o?(e.exit(i),s(o)):null===d?n(d):z(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),H(e,f,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(d))}function c(d){return d===o||null===d||z(d)?(e.exit("chunkString"),f(d)):(e.consume(d),92===d?u:c)}function u(d){return d===o||92===d?(e.consume(d),c):c(d)}}function qe(e,t){let n;return function r(l){return z(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),n=!0,r):B(l)?H(e,r,n?"linePrefix":"lineSuffix")(l):t(l)}}function ae(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var el={name:"definition",tokenize:function(e,t,n){let l,r=this;return function(p){return e.enter("definition"),function(p){return Rn.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}(p)};function a(p){return l=ae(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),58===p?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),s):n(p)}function s(p){return V(p)?qe(e,f)(p):f(p)}function f(p){return Mn(e,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function c(p){return e.attempt(tl,u,u)(p)}function u(p){return B(p)?H(e,d,"whitespace")(p):d(p)}function d(p){return null===p||z(p)?(e.exit("definition"),r.parser.defined.push(l),t(p)):n(p)}}},tl={tokenize:function(e,t,n){return function(a){return V(a)?qe(e,l)(a):n(a)};function l(a){return jn(e,i,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function i(a){return B(a)?H(e,o,"whitespace")(a):o(a)}function o(a){return null===a||z(a)?t(a):n(a)}},partial:!0};var il={name:"hardBreakEscape",tokenize:function(e,t,n){return function(i){return e.enter("hardBreakEscape"),e.consume(i),l};function l(i){return z(i)?(e.exit("hardBreakEscape"),t(i)):n(i)}}};var ol={name:"headingAtx",tokenize:function(e,t,n){let r=0;return function(c){return e.enter("atxHeading"),function(c){return e.enter("atxHeadingSequence"),o(c)}(c)};function o(c){return 35===c&&r++<6?(e.consume(c),o):null===c||V(c)?(e.exit("atxHeadingSequence"),a(c)):n(c)}function a(c){return 35===c?(e.enter("atxHeadingSequence"),s(c)):null===c||z(c)?(e.exit("atxHeading"),t(c)):B(c)?H(e,a,"whitespace")(c):(e.enter("atxHeadingText"),f(c))}function s(c){return 35===c?(e.consume(c),s):(e.exit("atxHeadingSequence"),a(c))}function f(c){return null===c||35===c||V(c)?(e.exit("atxHeadingText"),a(c)):(e.consume(c),f)}},resolve:function(e,t){let l,i,n=e.length-2,r=3;return"whitespace"===e[r][1].type&&(r+=2),n-2>r&&"whitespace"===e[n][1].type&&(n-=2),"atxHeadingSequence"===e[n][1].type&&(r===n-1||n-4>r&&"whitespace"===e[n-2][1].type)&&(n-=r+1===n?2:4),n>r&&(l={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},i={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},ne(e,r,n-r+1,[["enter",l,t],["enter",i,t],["exit",i,t],["exit",l,t]])),e}};var sl=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],hn=["pre","script","style","textarea"],cl={name:"htmlFlow",tokenize:function(e,t,n){let l,i,o,a,s,r=this;return function(g){return function(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),u}(g)};function u(g){return 33===g?(e.consume(g),d):47===g?(e.consume(g),i=!0,k):63===g?(e.consume(g),l=3,r.interrupt?t:h):ee(g)?(e.consume(g),o=String.fromCharCode(g),w):n(g)}function d(g){return 45===g?(e.consume(g),l=2,p):91===g?(e.consume(g),l=5,a=0,y):ee(g)?(e.consume(g),l=4,r.interrupt?t:h):n(g)}function p(g){return 45===g?(e.consume(g),r.interrupt?t:h):n(g)}function y(g){return g==="CDATA[".charCodeAt(a++)?(e.consume(g),6===a?r.interrupt?t:O:y):n(g)}function k(g){return ee(g)?(e.consume(g),o=String.fromCharCode(g),w):n(g)}function w(g){if(null===g||47===g||62===g||V(g)){let fe=47===g,Te=o.toLowerCase();return fe||i||!hn.includes(Te)?sl.includes(o.toLowerCase())?(l=6,fe?(e.consume(g),m):r.interrupt?t(g):O(g)):(l=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):i?E(g):S(g)):(l=1,r.interrupt?t(g):O(g))}return 45===g||G(g)?(e.consume(g),o+=String.fromCharCode(g),w):n(g)}function m(g){return 62===g?(e.consume(g),r.interrupt?t:O):n(g)}function E(g){return B(g)?(e.consume(g),E):x(g)}function S(g){return 47===g?(e.consume(g),x):58===g||95===g||ee(g)?(e.consume(g),T):B(g)?(e.consume(g),S):x(g)}function T(g){return 45===g||46===g||58===g||95===g||G(g)?(e.consume(g),T):P(g)}function P(g){return 61===g?(e.consume(g),b):B(g)?(e.consume(g),P):S(g)}function b(g){return null===g||60===g||61===g||62===g||96===g?n(g):34===g||39===g?(e.consume(g),s=g,A):B(g)?(e.consume(g),b):R(g)}function A(g){return g===s?(e.consume(g),s=null,N):null===g||z(g)?n(g):(e.consume(g),A)}function R(g){return null===g||34===g||39===g||47===g||60===g||61===g||62===g||96===g||V(g)?P(g):(e.consume(g),R)}function N(g){return 47===g||62===g||B(g)?S(g):n(g)}function x(g){return 62===g?(e.consume(g),D):n(g)}function D(g){return null===g||z(g)?O(g):B(g)?(e.consume(g),D):n(g)}function O(g){return 45===g&&2===l?(e.consume(g),I):60===g&&1===l?(e.consume(g),q):62===g&&4===l?(e.consume(g),ce):63===g&&3===l?(e.consume(g),h):93===g&&5===l?(e.consume(g),me):!z(g)||6!==l&&7!==l?null===g||z(g)?(e.exit("htmlFlowData"),U(g)):(e.consume(g),O):(e.exit("htmlFlowData"),e.check(fl,ye,U)(g))}function U(g){return e.check(pl,W,ye)(g)}function W(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),L}function L(g){return null===g||z(g)?U(g):(e.enter("htmlFlowData"),O(g))}function I(g){return 45===g?(e.consume(g),h):O(g)}function q(g){return 47===g?(e.consume(g),o="",re):O(g)}function re(g){if(62===g){let fe=o.toLowerCase();return hn.includes(fe)?(e.consume(g),ce):O(g)}return ee(g)&&o.length<8?(e.consume(g),o+=String.fromCharCode(g),re):O(g)}function me(g){return 93===g?(e.consume(g),h):O(g)}function h(g){return 62===g?(e.consume(g),ce):45===g&&2===l?(e.consume(g),h):O(g)}function ce(g){return null===g||z(g)?(e.exit("htmlFlowData"),ye(g)):(e.consume(g),ce)}function ye(g){return e.exit("htmlFlow"),t(g)}},resolveTo:function(e){let t=e.length;for(;t--&&("enter"!==e[t][0]||"htmlFlow"!==e[t][1].type););return t>1&&"linePrefix"===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e},concrete:!0},fl={tokenize:function(e,t,n){return function(l){return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),e.attempt(Pe,t,n)}},partial:!0},pl={tokenize:function(e,t,n){let r=this;return function(o){return z(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):n(o)};function i(o){return r.parser.lazy[r.now().line]?n(o):t(o)}},partial:!0};var yl={name:"htmlText",tokenize:function(e,t,n){let l,i,o,r=this;return function(h){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(h),s};function s(h){return 33===h?(e.consume(h),f):47===h?(e.consume(h),P):63===h?(e.consume(h),S):ee(h)?(e.consume(h),R):n(h)}function f(h){return 45===h?(e.consume(h),c):91===h?(e.consume(h),i=0,y):ee(h)?(e.consume(h),E):n(h)}function c(h){return 45===h?(e.consume(h),p):n(h)}function u(h){return null===h?n(h):45===h?(e.consume(h),d):z(h)?(o=u,q(h)):(e.consume(h),u)}function d(h){return 45===h?(e.consume(h),p):u(h)}function p(h){return 62===h?I(h):45===h?d(h):u(h)}function y(h){return h==="CDATA[".charCodeAt(i++)?(e.consume(h),6===i?k:y):n(h)}function k(h){return null===h?n(h):93===h?(e.consume(h),w):z(h)?(o=k,q(h)):(e.consume(h),k)}function w(h){return 93===h?(e.consume(h),m):k(h)}function m(h){return 62===h?I(h):93===h?(e.consume(h),m):k(h)}function E(h){return null===h||62===h?I(h):z(h)?(o=E,q(h)):(e.consume(h),E)}function S(h){return null===h?n(h):63===h?(e.consume(h),T):z(h)?(o=S,q(h)):(e.consume(h),S)}function T(h){return 62===h?I(h):S(h)}function P(h){return ee(h)?(e.consume(h),b):n(h)}function b(h){return 45===h||G(h)?(e.consume(h),b):A(h)}function A(h){return z(h)?(o=A,q(h)):B(h)?(e.consume(h),A):I(h)}function R(h){return 45===h||G(h)?(e.consume(h),R):47===h||62===h||V(h)?N(h):n(h)}function N(h){return 47===h?(e.consume(h),I):58===h||95===h||ee(h)?(e.consume(h),x):z(h)?(o=N,q(h)):B(h)?(e.consume(h),N):I(h)}function x(h){return 45===h||46===h||58===h||95===h||G(h)?(e.consume(h),x):D(h)}function D(h){return 61===h?(e.consume(h),O):z(h)?(o=D,q(h)):B(h)?(e.consume(h),D):N(h)}function O(h){return null===h||60===h||61===h||62===h||96===h?n(h):34===h||39===h?(e.consume(h),l=h,U):z(h)?(o=O,q(h)):B(h)?(e.consume(h),O):(e.consume(h),W)}function U(h){return h===l?(e.consume(h),l=void 0,L):null===h?n(h):z(h)?(o=U,q(h)):(e.consume(h),U)}function W(h){return null===h||34===h||39===h||60===h||61===h||96===h?n(h):47===h||62===h||V(h)?N(h):(e.consume(h),W)}function L(h){return 47===h||62===h||V(h)?N(h):n(h)}function I(h){return 62===h?(e.consume(h),e.exit("htmlTextData"),e.exit("htmlText"),t):n(h)}function q(h){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),re}function re(h){return B(h)?H(e,me,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):me(h)}function me(h){return e.enter("htmlTextData"),o(h)}}};var Tt={name:"labelEnd",tokenize:function(e,t,n){let i,o,r=this,l=r.events.length;for(;l--;)if(("labelImage"===r.events[l][1].type||"labelLink"===r.events[l][1].type)&&!r.events[l][1]._balanced){i=r.events[l][1];break}return function(d){return i?i._inactive?u(d):(o=r.parser.defined.includes(ae(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelEnd"),s):n(d)};function s(d){return 40===d?e.attempt(kl,c,o?c:u)(d):91===d?e.attempt(xl,c,o?f:u)(d):o?c(d):u(d)}function f(d){return e.attempt(vl,c,u)(d)}function c(d){return t(d)}function u(d){return i._balanced=!0,n(d)}},resolveTo:function(e,t){let l,i,o,a,n=e.length,r=0;for(;n--;)if(l=e[n][1],i){if("link"===l.type||"labelLink"===l.type&&l._inactive)break;"enter"===e[n][0]&&"labelLink"===l.type&&(l._inactive=!0)}else if(o){if("enter"===e[n][0]&&("labelImage"===l.type||"labelLink"===l.type)&&!l._balanced&&(i=n,"labelLink"!==l.type)){r=2;break}}else"labelEnd"===l.type&&(o=n);let s={type:"labelLink"===e[i][1].type?"link":"image",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)},f={type:"label",start:Object.assign({},e[i][1].start),end:Object.assign({},e[o][1].end)},c={type:"labelText",start:Object.assign({},e[i+r+2][1].end),end:Object.assign({},e[o-2][1].start)};return a=[["enter",s,t],["enter",f,t]],a=oe(a,e.slice(i+1,i+r+3)),a=oe(a,[["enter",c,t]]),a=oe(a,Ke(t.parser.constructs.insideSpan.null,e.slice(i+r+4,o-3),t)),a=oe(a,[["exit",c,t],e[o-2],e[o-1],["exit",f,t]]),a=oe(a,e.slice(o+1)),a=oe(a,[["exit",s,t]]),ne(e,i,e.length,a),e},resolveAll:function(e){let t=-1;for(;++t<e.length;){let n=e[t][1];("labelImage"===n.type||"labelLink"===n.type||"labelEnd"===n.type)&&(e.splice(t+1,"labelImage"===n.type?4:2),n.type="data",t++)}return e}},kl={tokenize:function(e,t,n){return function(u){return e.enter("resource"),e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),l};function l(u){return V(u)?qe(e,i)(u):i(u)}function i(u){return 41===u?c(u):Mn(e,o,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(u)}function o(u){return V(u)?qe(e,s)(u):c(u)}function a(u){return n(u)}function s(u){return 34===u||39===u||40===u?jn(e,f,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(u):c(u)}function f(u){return V(u)?qe(e,c)(u):c(u)}function c(u){return 41===u?(e.enter("resourceMarker"),e.consume(u),e.exit("resourceMarker"),e.exit("resource"),t):n(u)}}},xl={tokenize:function(e,t,n){let r=this;return function(a){return Rn.call(r,e,i,o,"reference","referenceMarker","referenceString")(a)};function i(a){return r.parser.defined.includes(ae(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function o(a){return n(a)}}},vl={tokenize:function(e,t,n){return function(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),l};function l(i){return 93===i?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),t):n(i)}}};var Dl={name:"labelStartImage",tokenize:function(e,t,n){let r=this;return function(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),i};function i(a){return 91===a?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),o):n(a)}function o(a){return 94===a&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}},resolveAll:Tt.resolveAll};var Ol={name:"labelStartLink",tokenize:function(e,t,n){let r=this;return function(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),i};function i(o){return 94===o&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}},resolveAll:Tt.resolveAll};var mt={name:"lineEnding",tokenize:function(e,t){return function(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),H(e,t,"linePrefix")}}};var Ze={name:"thematicBreak",tokenize:function(e,t,n){let l,r=0;return function(f){return e.enter("thematicBreak"),function(f){return l=f,a(f)}(f)};function a(f){return f===l?(e.enter("thematicBreakSequence"),s(f)):r>=3&&(null===f||z(f))?(e.exit("thematicBreak"),t(f)):n(f)}function s(f){return f===l?(e.consume(f),r++,s):(e.exit("thematicBreakSequence"),B(f)?H(e,a,"whitespace")(f):a(f))}}};var te={name:"list",tokenize:function(e,t,n){let r=this,l=r.events[r.events.length-1],i=l&&"linePrefix"===l[1].type?l[2].sliceSerialize(l[1],!0).length:0,o=0;return function(p){let y=r.containerState.type||(42===p||43===p||45===p?"listUnordered":"listOrdered");if("listUnordered"===y?!r.containerState.marker||p===r.containerState.marker:St(p)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),"listUnordered"===y)return e.enter("listItemPrefix"),42===p||45===p?e.check(Ze,n,f)(p):f(p);if(!r.interrupt||49===p)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(p)}return n(p)};function s(p){return St(p)&&++o<10?(e.consume(p),s):(!r.interrupt||o<2)&&(r.containerState.marker?p===r.containerState.marker:41===p||46===p)?(e.exit("listItemValue"),f(p)):n(p)}function f(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Pe,r.interrupt?n:c,e.attempt(Pl,d,u))}function c(p){return r.containerState.initialBlankLine=!0,i++,d(p)}function u(p){return B(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),d):n(p)}function d(p){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}},continuation:{tokenize:function(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Pe,(function(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,H(e,t,"listItemIndent",r.containerState.size+1)(a)}),(function(a){return r.containerState.furtherBlankLines||!B(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Ml,t,o)(a))}));function o(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,H(e,e.attempt(te,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}},exit:function(e){e.exit(this.containerState.type)}},Pl={tokenize:function(e,t,n){let r=this;return H(e,(function(i){let o=r.events[r.events.length-1];return!B(i)&&o&&"listItemPrefixWhitespace"===o[1].type?t(i):n(i)}),"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5)},partial:!0},Ml={tokenize:function(e,t,n){let r=this;return H(e,(function(i){let o=r.events[r.events.length-1];return o&&"listItemIndent"===o[1].type&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(i):n(i)}),"listItemIndent",r.containerState.size+1)},partial:!0};var gn={name:"setextUnderline",tokenize:function(e,t,n){let l,r=this;return function(f){let u,c=r.events.length;for(;c--;)if("lineEnding"!==r.events[c][1].type&&"linePrefix"!==r.events[c][1].type&&"content"!==r.events[c][1].type){u="paragraph"===r.events[c][1].type;break}return r.parser.lazy[r.now().line]||!r.interrupt&&!u?n(f):(e.enter("setextHeadingLine"),l=f,function(f){return e.enter("setextHeadingLineSequence"),a(f)}(f))};function a(f){return f===l?(e.consume(f),a):(e.exit("setextHeadingLineSequence"),B(f)?H(e,s,"lineSuffix")(f):s(f))}function s(f){return null===f||z(f)?(e.exit("setextHeadingLine"),t(f)):n(f)}},resolveTo:function(e,t){let r,l,i,n=e.length;for(;n--;)if("enter"===e[n][0]){if("content"===e[n][1].type){r=n;break}"paragraph"===e[n][1].type&&(l=n)}else"content"===e[n][1].type&&e.splice(n,1),!i&&"definition"===e[n][1].type&&(i=n);let o={type:"setextHeading",start:Object.assign({},e[l][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[l][1].type="setextHeadingText",i?(e.splice(l,0,["enter",o,t]),e.splice(i+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[i][1].end)):e[r][1]=o,e.push(["exit",o,t]),e}};var ql={tokenize:function(e){let t=this,n=e.attempt(Pe,(function(i){if(null===i)return void e.consume(i);return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}),e.attempt(this.parser.constructs.flowInitial,l,H(e,e.attempt(this.parser.constructs.flow,l,e.attempt(Xi,l)),"linePrefix")));return n;function l(i){if(null!==i)return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t.currentConstruct=void 0,n;e.consume(i)}}};var $l={resolveAll:Bn()},Wl=_n("string"),Ql=_n("text");function _n(e){return{tokenize:function(n){let r=this,l=this.parser.constructs[e],i=n.attempt(l,o,a);return o;function o(c){return f(c)?i(c):a(c)}function a(c){if(null!==c)return n.enter("data"),n.consume(c),s;n.consume(c)}function s(c){return f(c)?(n.exit("data"),i(c)):(n.consume(c),s)}function f(c){if(null===c)return!0;let u=l[c],d=-1;if(u)for(;++d<u.length;){let p=u[d];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}},resolveAll:Bn("text"===e?Kl:void 0)}}function Bn(e){return function(n,r){let i,l=-1;for(;++l<=n.length;)void 0===i?n[l]&&"data"===n[l][1].type&&(i=l,l++):(!n[l]||"data"!==n[l][1].type)&&(l!==i+2&&(n[i][1].end=n[l-1][1].end,n.splice(i+2,l-i-2),l=i+2),i=void 0);return e?e(n,r):n}}function Kl(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){let s,r=e[n-1][1],l=t.sliceStream(r),i=l.length,o=-1,a=0;for(;i--;){let f=l[i];if("string"==typeof f){for(o=f.length;32===f.charCodeAt(o-1);)a++,o--;if(o)break;o=-1}else if(-2===f)s=!0,a++;else if(-1!==f){i++;break}}if(a){let f={type:n===e.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-a,offset:r.end.offset-a,_index:r.start._index+i,_bufferIndex:i?o:r.start._bufferIndex+o},end:Object.assign({},r.end)};r.end=Object.assign({},f.start),r.start.offset===r.end.offset?Object.assign(r,f):(e.splice(n,0,["enter",f,t],["exit",f,t]),n+=2)}n++}return e}function Xl(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1}),l={},i=[],o=[],a=[],s={consume:function(D){z(D)?(r.line++,r.column=1,r.offset+=-3===D?2:1,x()):-1!==D&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),f.previous=D},enter:function(D,O){let U=O||{};return U.type=D,U.start=y(),f.events.push(["enter",U,f]),a.push(U),U},exit:function(D){let O=a.pop();return O.end=y(),f.events.push(["exit",O,f]),O},attempt:A((function(D,O){R(D,O.from)})),check:A(b),interrupt:A(b,{interrupt:!0})},f={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:p,sliceSerialize:function(D,O){return function(e,t){let l,n=-1,r=[];for(;++n<e.length;){let o,i=e[n];if("string"==typeof i)o=i;else switch(i){case-5:o="\r";break;case-4:o="\n";break;case-3:o="\r\n";break;case-2:o=t?" ":"\t";break;case-1:if(!t&&l)continue;o=" ";break;default:o=String.fromCharCode(i)}l=-2===i,r.push(o)}return r.join("")}(p(D),O)},now:y,defineSkip:function(D){l[D.line]=D.column,x()},write:function(D){return o=oe(o,D),function(){let D;for(;r._index<o.length;){let O=o[r._index];if("string"==typeof O)for(D=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===D&&r._bufferIndex<O.length;)m(O.charCodeAt(r._bufferIndex));else m(O)}}(),null!==o[o.length-1]?[]:(R(t,0),f.events=Ke(i,f.events,f),f.events)}},c=t.tokenize.call(f,s);return t.resolveAll&&i.push(t),f;function p(D){return function(e,t){let o,n=t.start._index,r=t.start._bufferIndex,l=t.end._index,i=t.end._bufferIndex;if(n===l)o=[e[n].slice(r,i)];else{if(o=e.slice(n,l),r>-1){let a=o[0];"string"==typeof a?o[0]=a.slice(r):o.shift()}i>0&&o.push(e[l].slice(0,i))}return o}(o,D)}function y(){let{line:D,column:O,offset:U,_index:W,_bufferIndex:L}=r;return{line:D,column:O,offset:U,_index:W,_bufferIndex:L}}function m(D){c=c(D)}function b(D,O){O.restore()}function A(D,O){return function(W,L,I){let q,re,me,h;return Array.isArray(W)?ye(W):"tokenize"in W?ye([W]):function(Z){return Oe;function Oe(ve){let Le=null!==ve&&Z[ve],Ie=null!==ve&&Z.null;return ye([...Array.isArray(Le)?Le:Le?[Le]:[],...Array.isArray(Ie)?Ie:Ie?[Ie]:[]])(ve)}}(W);function ye(Z){return q=Z,re=0,0===Z.length?I:g(Z[re])}function g(Z){return function(ve){return h=function(){let D=y(),O=f.previous,U=f.currentConstruct,W=f.events.length,L=Array.from(a);return{restore:I,from:W};function I(){r=D,f.previous=O,f.currentConstruct=U,f.events.length=W,a=L,x()}}(),me=Z,Z.partial||(f.currentConstruct=Z),Z.name&&f.parser.constructs.disable.null.includes(Z.name)?Te():Z.tokenize.call(O?Object.assign(Object.create(f),O):f,s,fe,Te)(ve)}}function fe(Z){return D(me,h),L}function Te(Z){return h.restore(),++re<q.length?g(q[re]):I}}}function R(D,O){D.resolveAll&&!i.includes(D)&&i.push(D),D.resolve&&ne(f.events,O,f.events.length-O,D.resolve(f.events.slice(O),f)),D.resolveTo&&(f.events=D.resolveTo(f.events,f))}function x(){r.line in l&&r.column<2&&(r.column=l[r.line],r.offset+=l[r.line]-1)}}var Nn={};(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(Nn,{attentionMarkers:()=>lo,contentInitial:()=>Gl,disable:()=>oo,document:()=>Zl,flow:()=>to,flowInitial:()=>eo,insideSpan:()=>io,string:()=>no,text:()=>ro});var Zl={42:te,43:te,45:te,48:te,49:te,50:te,51:te,52:te,53:te,54:te,55:te,56:te,57:te,62:Ln},Gl={91:el},eo={[-2]:gt,[-1]:gt,32:gt},to={35:ol,42:Ze,45:[gn,Ze],60:cl,61:gn,95:Ze,96:dn,126:dn},no={38:zn,92:In},ro={[-5]:mt,[-4]:mt,[-3]:mt,33:Dl,38:zn,42:Ct,60:[Li,yl],91:Ol,92:[il,In],93:Tt,95:Ct,96:Vi},io={null:[Ct,$l]},lo={null:[42,95]},oo={null:[]};var mn=/[\0\t\n\r]/g;function Hn(e,t){let n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||!(65535&~n)||65534==(65535&n)||n>1114111?"�":String.fromCharCode(n)}var co=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ot(e){return e.replace(co,fo)}function fo(e,t,n){if(t)return t;if(35===n.charCodeAt(0)){let r=n.charCodeAt(1),l=120===r||88===r;return Hn(n.slice(l?2:1),l?16:10)}return Dt(n)||e}var Un={}.hasOwnProperty,po=function(e,t,n){return"string"!=typeof t&&(n=t,t=void 0),function(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(Qt),autolinkProtocol:D,autolinkEmail:D,atxHeading:a(Vt),blockQuote:a(lt),characterEscape:D,characterReference:D,codeFenced:a(qt),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:a(qt,s),codeText:a(zr,s),codeTextData:D,data:D,codeFlowValue:D,definition:a(Pr),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:a(Mr),hardBreakEscape:a($t),hardBreakTrailing:a($t),htmlFlow:a(Wt,s),htmlFlowData:D,htmlText:a(Wt,s),htmlTextData:D,image:a(Rr),label:s,link:a(Qt),listItem:a(jr),listItemValue:y,listOrdered:a(Kt,p),listUnordered:a(Kt),paragraph:a(_r),reference:Te,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:a(Vt),strong:a(Br),thematicBreak:a(Hr)},exit:{atxHeading:c(),atxHeadingSequence:A,autolink:c(),autolinkEmail:Ie,autolinkProtocol:Le,blockQuote:c(),characterEscapeValue:O,characterReferenceMarkerHexadecimal:Oe,characterReferenceMarkerNumeric:Oe,characterReferenceValue:ve,codeFenced:c(E),codeFencedFence:m,codeFencedFenceInfo:k,codeFencedFenceMeta:w,codeFlowValue:O,codeIndented:c(S),codeText:c(q),codeTextData:O,data:O,definition:c(),definitionDestinationString:b,definitionLabelString:T,definitionTitleString:P,emphasis:c(),hardBreakEscape:c(W),hardBreakTrailing:c(W),htmlFlow:c(L),htmlFlowData:O,htmlText:c(I),htmlTextData:O,image:c(me),label:ce,labelText:h,lineEnding:U,link:c(re),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:Z,resourceDestinationString:ye,resourceTitleString:g,resource:fe,setextHeading:c(x),setextHeadingLineSequence:N,setextHeadingText:R,strong:c(),thematicBreak:c()}};qn(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(v){let F={type:"root",children:[]},M={stack:[F],tokenStack:[],config:t,enter:f,exit:u,buffer:s,resume:d,setData:i,getData:o},$=[],Q=-1;for(;++Q<v.length;)if("listOrdered"===v[Q][1].type||"listUnordered"===v[Q][1].type)if("enter"===v[Q][0])$.push(Q);else{Q=l(v,$.pop(),Q)}for(Q=-1;++Q<v.length;){let pe=t[v[Q][0]];Un.call(pe,v[Q][1].type)&&pe[v[Q][1].type].call(Object.assign({sliceSerialize:v[Q][2].sliceSerialize},M),v[Q][1])}if(M.tokenStack.length>0){let pe=M.tokenStack[M.tokenStack.length-1];(pe[1]||yn).call(M,void 0,pe[0])}for(F.position={start:Se(v.length>0?v[0][1].start:{line:1,column:1,offset:0}),end:Se(v.length>0?v[v.length-2][1].end:{line:1,column:1,offset:0})},Q=-1;++Q<t.transforms.length;)F=t.transforms[Q](F)||F;return F}function l(v,F,M){let Ee,be,_e,Be,$=F-1,Q=-1,pe=!1;for(;++$<=M;){let X=v[$];if("listUnordered"===X[1].type||"listOrdered"===X[1].type||"blockQuote"===X[1].type?("enter"===X[0]?Q++:Q--,Be=void 0):"lineEndingBlank"===X[1].type?"enter"===X[0]&&(Ee&&!Be&&!Q&&!_e&&(_e=$),Be=void 0):"linePrefix"===X[1].type||"listItemValue"===X[1].type||"listItemMarker"===X[1].type||"listItemPrefix"===X[1].type||"listItemPrefixWhitespace"===X[1].type||(Be=void 0),!Q&&"enter"===X[0]&&"listItemPrefix"===X[1].type||-1===Q&&"exit"===X[0]&&("listUnordered"===X[1].type||"listOrdered"===X[1].type)){if(Ee){let ot=$;for(be=void 0;ot--;){let ke=v[ot];if("lineEnding"===ke[1].type||"lineEndingBlank"===ke[1].type){if("exit"===ke[0])continue;be&&(v[be][1].type="lineEndingBlank",pe=!0),ke[1].type="lineEnding",be=ot}else if("linePrefix"!==ke[1].type&&"blockQuotePrefix"!==ke[1].type&&"blockQuotePrefixWhitespace"!==ke[1].type&&"blockQuoteMarker"!==ke[1].type&&"listItemIndent"!==ke[1].type)break}_e&&(!be||_e<be)&&(Ee._spread=!0),Ee.end=Object.assign({},be?v[be][1].start:X[1].end),v.splice(be||$,0,["exit",Ee,X[2]]),$++,M++}"listItemPrefix"===X[1].type&&(Ee={type:"listItem",_spread:!1,start:Object.assign({},X[1].start),end:void 0},v.splice($,0,["enter",Ee,X[2]]),$++,M++,_e=void 0,Be=!0)}}return v[F][1]._spread=pe,M}function i(v,F){n[v]=F}function o(v){return n[v]}function a(v,F){return M;function M($){f.call(this,v($),$),F&&F.call(this,$)}}function s(){this.stack.push({type:"fragment",children:[]})}function f(v,F,M){return this.stack[this.stack.length-1].children.push(v),this.stack.push(v),this.tokenStack.push([F,M]),v.position={start:Se(F.start)},v}function c(v){return F;function F(M){v&&v.call(this,M),u.call(this,M)}}function u(v,F){let M=this.stack.pop(),$=this.tokenStack.pop();if(!$)throw new Error("Cannot close `"+v.type+"` ("+Ue({start:v.start,end:v.end})+"): it’s not open");return $[0].type!==v.type&&(F?F.call(this,v,$[0]):($[1]||yn).call(this,v,$[0])),M.position.end=Se(v.end),M}function d(){return function(e,t){let n=t||gi;return On(e,"boolean"!=typeof n.includeImageAlt||n.includeImageAlt,"boolean"!=typeof n.includeHtml||n.includeHtml)}(this.stack.pop())}function p(){i("expectingFirstListItemValue",!0)}function y(v){if(o("expectingFirstListItemValue")){this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(v),10),i("expectingFirstListItemValue")}}function k(){let v=this.resume();this.stack[this.stack.length-1].lang=v}function w(){let v=this.resume();this.stack[this.stack.length-1].meta=v}function m(){o("flowCodeInside")||(this.buffer(),i("flowCodeInside",!0))}function E(){let v=this.resume();this.stack[this.stack.length-1].value=v.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),i("flowCodeInside")}function S(){let v=this.resume();this.stack[this.stack.length-1].value=v.replace(/(\r?\n|\r)$/g,"")}function T(v){let F=this.resume(),M=this.stack[this.stack.length-1];M.label=F,M.identifier=ae(this.sliceSerialize(v)).toLowerCase()}function P(){let v=this.resume();this.stack[this.stack.length-1].title=v}function b(){let v=this.resume();this.stack[this.stack.length-1].url=v}function A(v){let F=this.stack[this.stack.length-1];if(!F.depth){let M=this.sliceSerialize(v).length;F.depth=M}}function R(){i("setextHeadingSlurpLineEnding",!0)}function N(v){this.stack[this.stack.length-1].depth=61===this.sliceSerialize(v).charCodeAt(0)?1:2}function x(){i("setextHeadingSlurpLineEnding")}function D(v){let F=this.stack[this.stack.length-1],M=F.children[F.children.length-1];(!M||"text"!==M.type)&&(M=Nr(),M.position={start:Se(v.start)},F.children.push(M)),this.stack.push(M)}function O(v){let F=this.stack.pop();F.value+=this.sliceSerialize(v),F.position.end=Se(v.end)}function U(v){let F=this.stack[this.stack.length-1];if(o("atHardBreak")){return F.children[F.children.length-1].position.end=Se(v.end),void i("atHardBreak")}!o("setextHeadingSlurpLineEnding")&&t.canContainEols.includes(F.type)&&(D.call(this,v),O.call(this,v))}function W(){i("atHardBreak",!0)}function L(){let v=this.resume();this.stack[this.stack.length-1].value=v}function I(){let v=this.resume();this.stack[this.stack.length-1].value=v}function q(){let v=this.resume();this.stack[this.stack.length-1].value=v}function re(){let v=this.stack[this.stack.length-1];if(o("inReference")){let F=o("referenceType")||"shortcut";v.type+="Reference",v.referenceType=F,delete v.url,delete v.title}else delete v.identifier,delete v.label;i("referenceType")}function me(){let v=this.stack[this.stack.length-1];if(o("inReference")){let F=o("referenceType")||"shortcut";v.type+="Reference",v.referenceType=F,delete v.url,delete v.title}else delete v.identifier,delete v.label;i("referenceType")}function h(v){let F=this.sliceSerialize(v),M=this.stack[this.stack.length-2];M.label=Ot(F),M.identifier=ae(F).toLowerCase()}function ce(){let v=this.stack[this.stack.length-1],F=this.resume(),M=this.stack[this.stack.length-1];if(i("inReference",!0),"link"===M.type){let $=v.children;M.children=$}else M.alt=F}function ye(){let v=this.resume();this.stack[this.stack.length-1].url=v}function g(){let v=this.resume();this.stack[this.stack.length-1].title=v}function fe(){i("inReference")}function Te(){i("referenceType","collapsed")}function Z(v){let F=this.resume(),M=this.stack[this.stack.length-1];M.label=F,M.identifier=ae(this.sliceSerialize(v)).toLowerCase(),i("referenceType","full")}function Oe(v){i("characterReferenceType",v.type)}function ve(v){let $,F=this.sliceSerialize(v),M=o("characterReferenceType");M?($=Hn(F,"characterReferenceMarkerNumeric"===M?10:16),i("characterReferenceType")):$=Dt(F);let Q=this.stack.pop();Q.value+=$,Q.position.end=Se(v.end)}function Le(v){O.call(this,v),this.stack[this.stack.length-1].url=this.sliceSerialize(v)}function Ie(v){O.call(this,v),this.stack[this.stack.length-1].url="mailto:"+this.sliceSerialize(v)}function lt(){return{type:"blockquote",children:[]}}function qt(){return{type:"code",lang:null,meta:null,value:""}}function zr(){return{type:"inlineCode",value:""}}function Pr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Mr(){return{type:"emphasis",children:[]}}function Vt(){return{type:"heading",depth:void 0,children:[]}}function $t(){return{type:"break"}}function Wt(){return{type:"html",value:""}}function Rr(){return{type:"image",title:null,url:"",alt:null}}function Qt(){return{type:"link",title:null,url:"",children:[]}}function Kt(v){return{type:"list",ordered:"listOrdered"===v.type,start:null,spread:v._spread,children:[]}}function jr(v){return{type:"listItem",spread:v._spread,checked:null,children:[]}}function _r(){return{type:"paragraph",children:[]}}function Br(){return{type:"strong",children:[]}}function Nr(){return{type:"text",value:""}}function Hr(){return{type:"thematicBreak"}}}(n)(function(e){for(;!Pn(e););return e}(function(e){let n={defined:[],lazy:{},constructs:At([Nn,...(e||{}).extensions||[]]),content:r(Ci),document:r(Ei),flow:r(ql),string:r(Wl),text:r(Ql)};return n;function r(l){return function(o){return Xl(n,l,o)}}}(n).document().write(function(){let r,e=1,t="",n=!0;return function(i,o,a){let f,c,u,d,p,s=[];for(i=t+i.toString(o),u=0,t="",n&&(65279===i.charCodeAt(0)&&u++,n=void 0);u<i.length;){if(mn.lastIndex=u,f=mn.exec(i),d=f&&void 0!==f.index?f.index:i.length,p=i.charCodeAt(d),!f){t=i.slice(u);break}if(10===p&&u===d&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),p){case 0:s.push(65533),e++;break;case 9:for(c=4*Math.ceil(e/4),s.push(-2);e++<c;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return a&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}()(e,t,!0))))};function Se(e){return{line:e.line,column:e.column,offset:e.offset}}function qn(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?qn(e,r):go(e,r)}}function go(e,t){let n;for(n in t)if(Un.call(t,n))if("canContainEols"===n){let r=t[n];r&&e[n].push(...r)}else if("transforms"===n){let r=t[n];r&&e[n].push(...r)}else if("enter"===n||"exit"===n){let r=t[n];r&&Object.assign(e[n],r)}}function yn(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ue({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ue({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ue({start:t.start,end:t.end})+") is still open")}function mo(e){Object.assign(this,{Parser:t=>{let n=this.data("settings");return po(t,Object.assign({},n,e,{extensions:this.data("micromarkExtensions")||[],mdastExtensions:this.data("fromMarkdownExtensions")||[]}))}})}function Me(e){let t=[],n=-1,r=0,l=0;for(;++n<e.length;){let i=e.charCodeAt(n),o="";if(37===i&&G(e.charCodeAt(n+1))&&G(e.charCodeAt(n+2)))l=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(o=String.fromCharCode(i));else if(i>55295&&i<57344){let a=e.charCodeAt(n+1);i<56320&&a>56319&&a<57344?(o=String.fromCharCode(i,a),l=1):o="�"}else o=String.fromCharCode(i);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+l+1,o=""),l&&(n+=l,l=0)}return t.join("")+e.slice(r)}function Vn(e,t){let i,n=String(t.identifier).toUpperCase(),r=Me(n.toLowerCase()),l=e.footnoteOrder.indexOf(n);-1===l?(e.footnoteOrder.push(n),e.footnoteCounts[n]=1,i=e.footnoteOrder.length):(e.footnoteCounts[n]++,i=l+1);let o=e.footnoteCounts[n],a={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fn-"+r,id:e.clobberPrefix+"fnref-"+r+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(i)}]};e.patch(t,a);let s={type:"element",tagName:"sup",properties:{},children:[a]};return e.patch(t,s),e.applyData(t,s)}function $n(e,t){let n=t.referenceType,r="]";if("collapsed"===n?r+="[]":"full"===n&&(r+="["+(t.label||t.identifier)+"]"),"imageReference"===t.type)return{type:"text",value:"!["+t.alt+r};let l=e.all(t),i=l[0];i&&"text"===i.type?i.value="["+i.value:l.unshift({type:"text",value:"["});let o=l[l.length-1];return o&&"text"===o.type?o.value+=r:l.push({type:"text",value:r}),l}function Wn(e){let t=e.spread;return null==t?e.children.length>1:t}var Lt=Qn("start"),It=Qn("end");function Qn(e){return function(n){let r=n&&n.position&&n.position[e]||{};return{line:r.line||null,column:r.column||null,offset:r.offset>-1?r.offset:null}}}function No(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),l=0,i=[];for(;r;)i.push(bn(t.slice(l,r.index),l>0,!0),r[0]),l=r.index+r[0].length,r=n.exec(t);return i.push(bn(t.slice(l),l>0,!1)),i.join("")}function bn(e,t,n){let r=0,l=e.length;if(t){let i=e.codePointAt(r);for(;9===i||32===i;)r++,i=e.codePointAt(r)}if(n){let i=e.codePointAt(l-1);for(;9===i||32===i;)l--,i=e.codePointAt(l-1)}return l>r?e.slice(r,l):""}var qo={blockquote:function(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)},break:function(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:"\n"}]},code:function(e,t){let n=t.value?t.value+"\n":"",r=t.lang?t.lang.match(/^[^ \t]+(?=[ \t]|$)/):null,l={};r&&(l.className=["language-"+r]);let i={type:"element",tagName:"code",properties:l,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i},delete:function(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},emphasis:function(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},footnoteReference:Vn,footnote:function(e,t){let n=e.footnoteById,r=1;for(;r in n;)r++;let l=String(r);return n[l]={type:"footnoteDefinition",identifier:l,children:[{type:"paragraph",children:t.children}],position:t.position},Vn(e,{type:"footnoteReference",identifier:l,position:t.position})},heading:function(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},html:function(e,t){if(e.dangerous){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}return null},imageReference:function(e,t){let n=e.definition(t.identifier);if(!n)return $n(e,t);let r={src:Me(n.url||""),alt:t.alt};null!==n.title&&void 0!==n.title&&(r.title=n.title);let l={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,l),e.applyData(t,l)},image:function(e,t){let n={src:Me(t.url)};null!==t.alt&&void 0!==t.alt&&(n.alt=t.alt),null!==t.title&&void 0!==t.title&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)},inlineCode:function(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)},linkReference:function(e,t){let n=e.definition(t.identifier);if(!n)return $n(e,t);let r={href:Me(n.url||"")};null!==n.title&&void 0!==n.title&&(r.title=n.title);let l={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,l),e.applyData(t,l)},link:function(e,t){let n={href:Me(t.url)};null!==t.title&&void 0!==t.title&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)},listItem:function(e,t,n){let r=e.all(t),l=n?function(e){let t=!1;if("list"===e.type){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Wn(n[r])}return t}(n):Wn(t),i={},o=[];if("boolean"==typeof t.checked){let u,c=r[0];c&&"element"===c.type&&"p"===c.tagName?u=c:(u={type:"element",tagName:"p",properties:{},children:[]},r.unshift(u)),u.children.length>0&&u.children.unshift({type:"text",value:" "}),u.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let a=-1;for(;++a<r.length;){let c=r[a];(l||0!==a||"element"!==c.type||"p"!==c.tagName)&&o.push({type:"text",value:"\n"}),"element"!==c.type||"p"!==c.tagName||l?o.push(c):o.push(...c.children)}let s=r[r.length-1];s&&(l||"element"!==s.type||"p"!==s.tagName)&&o.push({type:"text",value:"\n"});let f={type:"element",tagName:"li",properties:i,children:o};return e.patch(t,f),e.applyData(t,f)},list:function(e,t){let n={},r=e.all(t),l=-1;for("number"==typeof t.start&&1!==t.start&&(n.start=t.start);++l<r.length;){let o=r[l];if("element"===o.type&&"li"===o.tagName&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let i={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,i),e.applyData(t,i)},paragraph:function(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},root:function(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)},strong:function(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},table:function(e,t){let n=e.all(t),r=n.shift(),l=[];if(r){let o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],o),l.push(o)}if(n.length>0){let o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Lt(t.children[1]),s=It(t.children[t.children.length-1]);a.line&&s.line&&(o.position={start:a,end:s}),l.push(o)}let i={type:"element",tagName:"table",properties:{},children:e.wrap(l,!0)};return e.patch(t,i),e.applyData(t,i)},tableCell:function(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},tableRow:function(e,t,n){let r=n?n.children:void 0,l=0===(r?r.indexOf(t):1)?"th":"td",i=n&&"table"===n.type?n.align:void 0,o=i?i.length:t.children.length,a=-1,s=[];for(;++a<o;){let c=t.children[a],u={},d=i?i[a]:void 0;d&&(u.align=d);let p={type:"element",tagName:l,properties:u,children:[]};c&&(p.children=e.all(c),e.patch(c,p),p=e.applyData(t,p)),s.push(p)}let f={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(t,f),e.applyData(t,f)},text:function(e,t){let n={type:"text",value:No(String(t.value))};return e.patch(t,n),e.applyData(t,n)},thematicBreak:function(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)},toml:Ye,yaml:Ye,definition:Ye,footnoteDefinition:Ye};function Ye(){return null}var tt=function(e){if(null==e)return Qo;if("string"==typeof e)return function(e){return nt(t);function t(n){return n&&n.type===e}}(e);if("object"==typeof e)return Array.isArray(e)?function(e){let t=[],n=-1;for(;++n<e.length;)t[n]=tt(e[n]);return nt(r);function r(...l){let i=-1;for(;++i<t.length;)if(t[i].call(this,...l))return!0;return!1}}(e):function(e){return nt(t);function t(n){let r;for(r in e)if(n[r]!==e[r])return!1;return!0}}(e);if("function"==typeof e)return nt(e);throw new Error("Expected function, string, or object as test")};function nt(e){return function(n,...r){return!!(n&&"object"==typeof n&&"type"in n&&e.call(this,n,...r))}}function Qo(){return!0}var zt=function(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null);let l=tt(t),i=r?-1:1;!function o(a,s,f){let c=a&&"object"==typeof a?a:{};if("string"==typeof c.type){let d="string"==typeof c.tagName?c.tagName:"string"==typeof c.name?c.name:void 0;Object.defineProperty(u,"name",{value:"node ("+a.type+(d?"<"+d+">":"")+")"})}return u;function u(){let p,y,k,d=[];if((!t||l(a,s,f[f.length-1]||null))&&(d=function(e){return Array.isArray(e)?e:"number"==typeof e?[true,e]:[e]}(n(a,f)),false===d[0]))return d;if(a.children&&"skip"!==d[0])for(y=(r?a.children.length:-1)+i,k=f.concat(a);y>-1&&y<a.children.length;){if(p=o(a.children[y],y,k)(),false===p[0])return p;y="number"==typeof p[1]?p[1]:y+i}return d}}(e,void 0,[])()};var Pt=function(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null),zt(e,t,(function(i,o){let a=o[o.length-1];return n(i,a?a.children.indexOf(i):null,a)}),r)};var xn={}.hasOwnProperty;function vn(e){return String(e||"").toUpperCase()}var Ge={}.hasOwnProperty;function Go(e,t){let n=t||{},r=n.allowDangerousHtml||!1,l={};return o.dangerous=r,o.clobberPrefix=void 0===n.clobberPrefix||null===n.clobberPrefix?"user-content-":n.clobberPrefix,o.footnoteLabel=n.footnoteLabel||"Footnotes",o.footnoteLabelTagName=n.footnoteLabelTagName||"h2",o.footnoteLabelProperties=n.footnoteLabelProperties||{className:["sr-only"]},o.footnoteBackLabel=n.footnoteBackLabel||"Back to content",o.unknownHandler=n.unknownHandler,o.passThrough=n.passThrough,o.handlers=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({},qo),n.handlers),o.definition=function(e){let t=Object.create(null);if(!e||!e.type)throw new Error("mdast-util-definitions expected node");return Pt(e,"definition",(r=>{let l=vn(r.identifier);l&&!xn.call(t,l)&&(t[l]=r)})),function(r){let l=vn(r);return l&&xn.call(t,l)?t[l]:null}}(e),o.footnoteById=l,o.footnoteOrder=[],o.footnoteCounts={},o.patch=ea,o.applyData=ta,o.one=function(f,c){return Kn(o,f,c)},o.all=function(f){return Mt(o,f)},o.wrap=ra,o.augment=i,Pt(e,"footnoteDefinition",(f=>{let c=String(f.identifier).toUpperCase();Ge.call(l,c)||(l[c]=f)})),o;function i(f,c){if(f&&"data"in f&&f.data){let u=f.data;u.hName&&("element"!==c.type&&(c={type:"element",tagName:"",properties:{},children:[]}),c.tagName=u.hName),"element"===c.type&&u.hProperties&&(c.properties=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({},c.properties),u.hProperties)),"children"in c&&c.children&&u.hChildren&&(c.children=u.hChildren)}if(f){let u="type"in f?f:{position:f};(function(e){return!(e&&e.position&&e.position.start&&e.position.start.line&&e.position.start.column&&e.position.end&&e.position.end.line&&e.position.end.column)})(u)||(c.position={start:Lt(u),end:It(u)})}return c}function o(f,c,u,d){return Array.isArray(u)&&(d=u,u={}),i(f,{type:"element",tagName:c,properties:u||{},children:d||[]})}}function ea(e,t){e.position&&(t.position=function(e){return{start:Lt(e),end:It(e)}}(e))}function ta(e,t){let n=t;if(e&&e.data){let r=e.data.hName,l=e.data.hChildren,i=e.data.hProperties;"string"==typeof r&&("element"===n.type?n.tagName=r:n={type:"element",tagName:r,properties:{},children:[]}),"element"===n.type&&i&&(n.properties=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({},n.properties),i)),"children"in n&&n.children&&null!=l&&(n.children=l)}return n}function Kn(e,t,n){let r=t&&t.type;if(!r)throw new Error("Expected node, got `"+t+"`");return Ge.call(e.handlers,r)?e.handlers[r](e,t,n):e.passThrough&&e.passThrough.includes(r)?"children"in t?(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.b)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({},t),{children:Mt(e,t)}):t:e.unknownHandler?e.unknownHandler(e,t,n):function(e,t){let n=t.data||{},r=!("value"in t)||Ge.call(n,"hProperties")||Ge.call(n,"hChildren")?{type:"element",tagName:"div",properties:{},children:Mt(e,t)}:{type:"text",value:t.value};return e.patch(t,r),e.applyData(t,r)}(e,t)}function Mt(e,t){let n=[];if("children"in t){let r=t.children,l=-1;for(;++l<r.length;){let i=Kn(e,r[l],t);if(i){if(l&&"break"===r[l-1].type&&(!Array.isArray(i)&&"text"===i.type&&(i.value=i.value.replace(/^\s+/,"")),!Array.isArray(i)&&"element"===i.type)){let o=i.children[0];o&&"text"===o.type&&(o.value=o.value.replace(/^\s+/,""))}Array.isArray(i)?n.push(...i):n.push(i)}}}return n}function ra(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:"\n"});++r<e.length;)r&&n.push({type:"text",value:"\n"}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:"\n"}),n}function Xn(e,t){let n=Go(e,t),r=n.one(e,null),l=function(e){let t=[],n=-1;for(;++n<e.footnoteOrder.length;){let r=e.footnoteById[e.footnoteOrder[n]];if(!r)continue;let l=e.all(r),i=String(r.identifier).toUpperCase(),o=Me(i.toLowerCase()),a=0,s=[];for(;++a<=e.footnoteCounts[i];){let u={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fnref-"+o+(a>1?"-"+a:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:e.footnoteBackLabel},children:[{type:"text",value:"↩"}]};a>1&&u.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(a)}]}),s.length>0&&s.push({type:"text",value:" "}),s.push(u)}let f=l[l.length-1];if(f&&"element"===f.type&&"p"===f.tagName){let u=f.children[f.children.length-1];u&&"text"===u.type?u.value+=" ":f.children.push({type:"text",value:" "}),f.children.push(...s)}else l.push(...s);let c={type:"element",tagName:"li",properties:{id:e.clobberPrefix+"fn-"+o},children:e.wrap(l,!0)};e.patch(r,c),t.push(c)}if(0!==t.length)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:e.footnoteLabelTagName,properties:(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.b)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({},JSON.parse(JSON.stringify(e.footnoteLabelProperties))),{id:"footnote-label"}),children:[{type:"text",value:e.footnoteLabel}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:e.wrap(t,!0)},{type:"text",value:"\n"}]}}(n);return l&&r.children.push({type:"text",value:"\n"},l),Array.isArray(r)?{type:"root",children:r}:r}var oa=function(e,t){return e&&"run"in e?function(e,t){return(n,r,l)=>{e.run(Xn(n,t),r,(i=>{l(i)}))}}(e,t):function(e){return t=>Xn(t,e)}(e||t)};var j=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.f)($r(),1),Xe=class{constructor(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}};function Yn(e,t){let n={},r={},l=-1;for(;++l<e.length;)Object.assign(n,e[l].property),Object.assign(r,e[l].normal);return new Xe(n,r,t)}function Ft(e){return e.toLowerCase()}Xe.prototype.property={},Xe.prototype.normal={},Xe.prototype.space=null;var se=class{constructor(e,t){this.property=e,this.attribute=t}};se.prototype.space=null,se.prototype.boolean=!1,se.prototype.booleanish=!1,se.prototype.overloadedBoolean=!1,se.prototype.number=!1,se.prototype.commaSeparated=!1,se.prototype.spaceSeparated=!1,se.prototype.commaOrSpaceSeparated=!1,se.prototype.mustUseProperty=!1,se.prototype.defined=!1;var et={};(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(et,{boolean:()=>_,booleanish:()=>J,commaOrSpaceSeparated:()=>ie,commaSeparated:()=>ze,number:()=>C,overloadedBoolean:()=>Jn,spaceSeparated:()=>K});var sa=0,_=Ae(),J=Ae(),Jn=Ae(),C=Ae(),K=Ae(),ze=Ae(),ie=Ae();function Ae(){return 2**++sa}var yt=Object.keys(et),Rt=class extends se{constructor(e,t,n,r){let l=-1;if(super(e,t),wn(this,"space",r),"number"==typeof n)for(;++l<yt.length;){let i=yt[l];wn(this,yt[l],(n&et[i])===et[i])}}};function wn(e,t,n){n&&(e[t]=n)}Rt.prototype.defined=!0;var ca={}.hasOwnProperty;function Re(e){let r,t={},n={};for(r in e.properties)if(ca.call(e.properties,r)){let l=e.properties[r],i=new Rt(r,e.transform(e.attributes||{},r),l,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[Ft(r)]=r,n[Ft(i.attribute)]=r}return new Xe(t,n,e.space)}var Zn=Re({space:"xlink",transform:(e,t)=>"xlink:"+t.slice(5).toLowerCase(),properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Gn=Re({space:"xml",transform:(e,t)=>"xml:"+t.slice(3).toLowerCase(),properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function er(e,t){return t in e?e[t]:t}function tr(e,t){return er(e,t.toLowerCase())}var nr=Re({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:tr,properties:{xmlns:null,xmlnsXLink:null}}),rr=Re({transform:(e,t)=>"role"===t?t:"aria-"+t.slice(4).toLowerCase(),properties:{ariaActiveDescendant:null,ariaAtomic:J,ariaAutoComplete:null,ariaBusy:J,ariaChecked:J,ariaColCount:C,ariaColIndex:C,ariaColSpan:C,ariaControls:K,ariaCurrent:null,ariaDescribedBy:K,ariaDetails:null,ariaDisabled:J,ariaDropEffect:K,ariaErrorMessage:null,ariaExpanded:J,ariaFlowTo:K,ariaGrabbed:J,ariaHasPopup:null,ariaHidden:J,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:K,ariaLevel:C,ariaLive:null,ariaModal:J,ariaMultiLine:J,ariaMultiSelectable:J,ariaOrientation:null,ariaOwns:K,ariaPlaceholder:null,ariaPosInSet:C,ariaPressed:J,ariaReadOnly:J,ariaRelevant:null,ariaRequired:J,ariaRoleDescription:K,ariaRowCount:C,ariaRowIndex:C,ariaRowSpan:C,ariaSelected:J,ariaSetSize:C,ariaSort:null,ariaValueMax:C,ariaValueMin:C,ariaValueNow:C,ariaValueText:null,role:null}}),fa=Re({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:tr,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ze,acceptCharset:K,accessKey:K,action:null,allow:null,allowFullScreen:_,allowPaymentRequest:_,allowUserMedia:_,alt:null,as:null,async:_,autoCapitalize:null,autoComplete:K,autoFocus:_,autoPlay:_,blocking:K,capture:null,charSet:null,checked:_,cite:null,className:K,cols:C,colSpan:null,content:null,contentEditable:J,controls:_,controlsList:K,coords:C|ze,crossOrigin:null,data:null,dateTime:null,decoding:null,default:_,defer:_,dir:null,dirName:null,disabled:_,download:Jn,draggable:J,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:_,formTarget:null,headers:K,height:C,hidden:_,high:C,href:null,hrefLang:null,htmlFor:K,httpEquiv:K,id:null,imageSizes:null,imageSrcSet:null,inert:_,inputMode:null,integrity:null,is:null,isMap:_,itemId:null,itemProp:K,itemRef:K,itemScope:_,itemType:K,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:_,low:C,manifest:null,max:null,maxLength:C,media:null,method:null,min:null,minLength:C,multiple:_,muted:_,name:null,nonce:null,noModule:_,noValidate:_,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:_,optimum:C,pattern:null,ping:K,placeholder:null,playsInline:_,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:_,referrerPolicy:null,rel:K,required:_,reversed:_,rows:C,rowSpan:C,sandbox:K,scope:null,scoped:_,seamless:_,selected:_,shadowRootDelegatesFocus:_,shadowRootMode:null,shape:null,size:C,sizes:null,slot:null,span:C,spellCheck:J,src:null,srcDoc:null,srcLang:null,srcSet:null,start:C,step:null,style:null,tabIndex:C,target:null,title:null,translate:null,type:null,typeMustMatch:_,useMap:null,value:J,width:C,wrap:null,align:null,aLink:null,archive:K,axis:null,background:null,bgColor:null,border:C,borderColor:null,bottomMargin:C,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:_,declare:_,event:null,face:null,frame:null,frameBorder:null,hSpace:C,leftMargin:C,link:null,longDesc:null,lowSrc:null,marginHeight:C,marginWidth:C,noResize:_,noHref:_,noShade:_,noWrap:_,object:null,profile:null,prompt:null,rev:null,rightMargin:C,rules:null,scheme:null,scrolling:J,standby:null,summary:null,text:null,topMargin:C,valueType:null,version:null,vAlign:null,vLink:null,vSpace:C,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:_,disableRemotePlayback:_,prefix:null,property:null,results:C,security:null,unselectable:null}}),pa=Re({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:er,properties:{about:ie,accentHeight:C,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:C,amplitude:C,arabicForm:null,ascent:C,attributeName:null,attributeType:null,azimuth:C,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:C,by:null,calcMode:null,capHeight:C,className:K,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:C,diffuseConstant:C,direction:null,display:null,dur:null,divisor:C,dominantBaseline:null,download:_,dx:null,dy:null,edgeMode:null,editable:null,elevation:C,enableBackground:null,end:null,event:null,exponent:C,externalResourcesRequired:null,fill:null,fillOpacity:C,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ze,g2:ze,glyphName:ze,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:C,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:C,horizOriginX:C,horizOriginY:C,id:null,ideographic:C,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:C,k:C,k1:C,k2:C,k3:C,k4:C,kernelMatrix:ie,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:C,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:C,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:C,overlineThickness:C,paintOrder:null,panose1:null,path:null,pathLength:C,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:K,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:C,pointsAtY:C,pointsAtZ:C,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ie,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ie,rev:ie,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ie,requiredFeatures:ie,requiredFonts:ie,requiredFormats:ie,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:C,specularExponent:C,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:C,strikethroughThickness:C,string:null,stroke:null,strokeDashArray:ie,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:C,strokeOpacity:C,strokeWidth:null,style:null,surfaceScale:C,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ie,tabIndex:C,tableValues:null,target:null,targetX:C,targetY:C,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ie,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:C,underlineThickness:C,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:C,values:null,vAlphabetic:C,vMathematical:C,vectorEffect:null,vHanging:C,vIdeographic:C,version:null,vertAdvY:C,vertOriginX:C,vertOriginY:C,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:C,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),da=/^data[-\w.:]+$/i,Sn=/-[a-z]/g,ha=/[A-Z]/g;function ma(e){return"-"+e.toLowerCase()}function ya(e){return e.charAt(1).toUpperCase()}var Cn={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},ba=Yn([Gn,Zn,nr,rr,fa],"html"),ka=Yn([Gn,Zn,nr,rr,pa],"svg");function xa(e){if(e.allowedElements&&e.disallowedElements)throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return t=>{Pt(t,"element",((n,r,l)=>{let o,i=l;if(e.allowedElements?o=!e.allowedElements.includes(n.tagName):e.disallowedElements&&(o=e.disallowedElements.includes(n.tagName)),!o&&e.allowElement&&"number"==typeof r&&(o=!e.allowElement(n,r,i)),o&&"number"==typeof r)return e.unwrapDisallowed&&n.children?i.children.splice(r,1,...n.children):i.children.splice(r,1),r}))}}var bt=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.f)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(),1),va=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.f)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(),1);function wa(e){let t=e&&"object"==typeof e&&"text"===e.type?e.value||"":e;return"string"==typeof t&&""===t.replace(/[ \t\n\f\r]/g,"")}var Ea=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.f)(Qr(),1).default,Et={}.hasOwnProperty,Aa=new Set(["table","thead","tbody","tfoot","tr"]);function ir(e,t){let l,n=[],r=-1;for(;++r<t.children.length;)l=t.children[r],"element"===l.type?n.push(Da(e,l,r,t)):"text"===l.type?("element"!==t.type||!Aa.has(t.tagName)||!wa(l))&&n.push(l.value):"raw"===l.type&&!e.options.skipHtml&&n.push(l.value);return n}function Da(e,t,n,r){let c,l=e.options,i=void 0===l.transformLinkUri?Xr:l.transformLinkUri,o=e.schema,a=t.tagName,s={},f=o;if("html"===o.space&&"svg"===a&&(f=ka,e.schema=f),t.properties)for(c in t.properties)Et.call(t.properties,c)&&Oa(s,c,t.properties[c],e);("ol"===a||"ul"===a)&&e.listDepth++;let u=ir(e,t);("ol"===a||"ul"===a)&&e.listDepth--,e.schema=o;let d=t.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},p=l.components&&Et.call(l.components,a)?l.components[a]:a,y="string"==typeof p||p===bt.default.Fragment;if(!va.default.isValidElementType(p))throw new TypeError(`Component for name \`${a}\` not defined or is not renderable`);if(s.key=n,"a"===a&&l.linkTarget&&(s.target="function"==typeof l.linkTarget?l.linkTarget(String(s.href||""),t.children,"string"==typeof s.title?s.title:null):l.linkTarget),"a"===a&&i&&(s.href=i(String(s.href||""),t.children,"string"==typeof s.title?s.title:null)),!y&&"code"===a&&"element"===r.type&&"pre"!==r.tagName&&(s.inline=!0),!y&&("h1"===a||"h2"===a||"h3"===a||"h4"===a||"h5"===a||"h6"===a)&&(s.level=Number.parseInt(a.charAt(1),10)),"img"===a&&l.transformImageUri&&(s.src=l.transformImageUri(String(s.src||""),String(s.alt||""),"string"==typeof s.title?s.title:null)),!y&&"li"===a&&"element"===r.type){let k=function(e){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if("element"===n.type&&"input"===n.tagName)return n}return null}(t);s.checked=k&&k.properties?!!k.properties.checked:null,s.index=kt(r,t),s.ordered="ol"===r.tagName}return!y&&("ol"===a||"ul"===a)&&(s.ordered="ol"===a,s.depth=e.listDepth),("td"===a||"th"===a)&&(s.align&&(s.style||(s.style={}),s.style.textAlign=s.align,delete s.align),y||(s.isHeader="th"===a)),!y&&"tr"===a&&"element"===r.type&&(s.isHeader="thead"===r.tagName),l.sourcePos&&(s["data-sourcepos"]=function(e){return[e.start.line,":",e.start.column,"-",e.end.line,":",e.end.column].map(String).join("")}(d)),!y&&l.rawSourcePos&&(s.sourcePosition=t.position),!y&&l.includeElementIndex&&(s.index=kt(r,t),s.siblingCount=kt(r)),y||(s.node=t),u.length>0?bt.default.createElement(p,s,u):bt.default.createElement(p,s)}function kt(e,t){let n=-1,r=0;for(;++n<e.children.length&&e.children[n]!==t;)"element"===e.children[n].type&&r++;return r}function Oa(e,t,n,r){let l=function(e,t){let n=Ft(t),r=t,l=se;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&"data"===n.slice(0,4)&&da.test(t)){if("-"===t.charAt(4)){let i=t.slice(5).replace(Sn,ya);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{let i=t.slice(4);if(!Sn.test(i)){let o=i.replace(ha,ma);"-"!==o.charAt(0)&&(o="-"+o),t="data"+o}}l=Rt}return new l(r,t)}(r.schema,t),i=n;null==i||i!=i||(Array.isArray(i)&&(i=l.commaSeparated?function(e,t){let n=t||{};return(""===e[e.length-1]?[...e,""]:e).join((n.padRight?" ":"")+","+(!1===n.padLeft?"":" ")).trim()}(i):function(e){return e.join(" ").trim()}(i)),"style"===l.property&&"string"==typeof i&&(i=function(e){let t={};try{Ea(e,n)}catch(r){}return t;function n(r,l){let i="-ms-"===r.slice(0,4)?`ms-${r.slice(4)}`:r;t[i.replace(/-([a-z])/g,Ia)]=l}}(i)),l.space&&l.property?e[Et.call(Cn,l.property)?Cn[l.property]:l.property]=i:l.attribute&&(e[l.attribute]=i))}function Ia(e,t){return t.toUpperCase()}var Fn={}.hasOwnProperty,Je={plugins:{to:"remarkPlugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function lr(e){for(let i in Je)if(Fn.call(Je,i)&&Fn.call(e,i)){let o=Je[i];console.warn(`[react-markdown] Warning: please ${o.to?`use \`${o.to}\` instead of`:"remove"} \`${i}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${o.id}> for more info)`),delete Je[i]}let t=fi().use(mo).use(e.remarkPlugins||[]).use(oa,(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.b)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({},e.remarkRehypeOptions),{allowDangerousHtml:!0})).use(e.rehypePlugins||[]).use(xa,e),n=new An;"string"==typeof e.children?n.value=e.children:void 0!==e.children&&null!==e.children&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);let r=t.runSync(t.parse(n),n);if("root"!==r.type)throw new TypeError("Expected a `root` node");let l=ut.default.createElement(ut.default.Fragment,{},ir({options:e,schema:ba,listDepth:0},r));return e.className&&(l=ut.default.createElement("div",{className:e.className},l)),l}lr.propTypes={children:j.default.string,className:j.default.string,allowElement:j.default.func,allowedElements:j.default.arrayOf(j.default.string),disallowedElements:j.default.arrayOf(j.default.string),unwrapDisallowed:j.default.bool,remarkPlugins:j.default.arrayOf(j.default.oneOfType([j.default.object,j.default.func,j.default.arrayOf(j.default.oneOfType([j.default.bool,j.default.string,j.default.object,j.default.func,j.default.arrayOf(j.default.any)]))])),rehypePlugins:j.default.arrayOf(j.default.oneOfType([j.default.object,j.default.func,j.default.arrayOf(j.default.oneOfType([j.default.bool,j.default.string,j.default.object,j.default.func,j.default.arrayOf(j.default.any)]))])),sourcePos:j.default.bool,rawSourcePos:j.default.bool,skipHtml:j.default.bool,includeElementIndex:j.default.bool,transformLinkUri:j.default.oneOfType([j.default.func,j.default.bool]),linkTarget:j.default.oneOfType([j.default.func,j.default.string]),transformImageUri:j.default.func,components:j.default.object};for(var or=(0,Kr.default)(lr)`
  ${"\n  color-scheme: light;\n  --color-prettylights-syntax-comment: #6e7781;\n  --color-prettylights-syntax-constant: #0550ae;\n  --color-prettylights-syntax-entity: #8250df;\n  --color-prettylights-syntax-storage-modifier-import: #24292f;\n  --color-prettylights-syntax-entity-tag: #116329;\n  --color-prettylights-syntax-keyword: #cf222e;\n  --color-prettylights-syntax-string: #0a3069;\n  --color-prettylights-syntax-variable: #953800;\n  --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;\n  --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;\n  --color-prettylights-syntax-invalid-illegal-bg: #82071e;\n  --color-prettylights-syntax-carriage-return-text: #f6f8fa;\n  --color-prettylights-syntax-carriage-return-bg: #cf222e;\n  --color-prettylights-syntax-string-regexp: #116329;\n  --color-prettylights-syntax-markup-list: #3b2300;\n  --color-prettylights-syntax-markup-heading: #0550ae;\n  --color-prettylights-syntax-markup-italic: #24292f;\n  --color-prettylights-syntax-markup-bold: #24292f;\n  --color-prettylights-syntax-markup-deleted-text: #82071e;\n  --color-prettylights-syntax-markup-deleted-bg: #ffebe9;\n  --color-prettylights-syntax-markup-inserted-text: #116329;\n  --color-prettylights-syntax-markup-inserted-bg: #dafbe1;\n  --color-prettylights-syntax-markup-changed-text: #953800;\n  --color-prettylights-syntax-markup-changed-bg: #ffd8b5;\n  --color-prettylights-syntax-markup-ignored-text: #eaeef2;\n  --color-prettylights-syntax-markup-ignored-bg: #0550ae;\n  --color-prettylights-syntax-meta-diff-range: #8250df;\n  --color-prettylights-syntax-brackethighlighter-angle: #57606a;\n  --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;\n  --color-prettylights-syntax-constant-other-reference-link: #0a3069;\n  --color-fg-default: #24292f;\n  --color-fg-muted: #57606a;\n  --color-fg-subtle: #6e7781;\n  --color-canvas-default: #ffffff;\n  --color-canvas-subtle: #f6f8fa;\n  --color-border-default: #d0d7de;\n  --color-border-muted: hsla(210, 18%, 87%, 1);\n  --color-neutral-muted: rgba(175, 184, 193, 0.2);\n  --color-accent-fg: #0969da;\n  --color-accent-emphasis: #0969da;\n  --color-attention-subtle: #fff8c5;\n  --color-danger-fg: #cf222e;\n"}
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: var(--color-fg-default);
  background-color: var(--color-canvas-default);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;

  .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
  }
  h1:hover .anchor .octicon-link:before,
  h2:hover .anchor .octicon-link:before,
  h3:hover .anchor .octicon-link:before,
  h4:hover .anchor .octicon-link:before,
  h5:hover .anchor .octicon-link:before,
  h6:hover .anchor .octicon-link:before {
    width: 16px;
    height: 16px;
    content: ' ';
    display: inline-block;
    background-color: currentColor;
    -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
    mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  }

  details,
  figcaption,
  figure {
    display: block;
  }

  summary {
    display: list-item;
  }

  [hidden] {
    display: none !important;
  }

  a {
    background-color: transparent;
    color: var(--color-accent-fg);
    text-decoration: none;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: var(--base-text-weight-semibold, 600);
  }

  dfn {
    font-style: italic;
  }

  h1 {
    margin: 0.67em 0;
    font-weight: var(--base-text-weight-semibold, 600);
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid var(--color-border-muted);
  }

  mark {
    background-color: var(--color-attention-subtle);
    color: var(--color-fg-default);
  }

  small {
    font-size: 90%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
    max-width: 100%;
    box-sizing: content-box;
    background-color: var(--color-canvas-default);
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
    font-size: 1em;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    border-bottom: 1px solid var(--color-border-muted);
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: var(--color-border-default);
    border: 0;
  }

  input {
    font: inherit;
    margin: 0;
    overflow: visible;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  ::placeholder {
    color: var(--color-fg-subtle);
    opacity: 1;
  }

  hr::before {
    display: table;
    content: '';
  }

  hr::after {
    display: table;
    clear: both;
    content: '';
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  td,
  th {
    padding: 0;
  }

  details summary {
    cursor: pointer;
  }

  details:not([open]) > *:not(summary) {
    display: none !important;
  }

  a:focus,
  [role='button']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none;
  }

  a:focus:not(:focus-visible),
  [role='button']:focus:not(:focus-visible),
  input[type='radio']:focus:not(:focus-visible),
  input[type='checkbox']:focus:not(:focus-visible) {
    outline: solid 1px transparent;
  }

  a:focus-visible,
  [role='button']:focus-visible,
  input[type='radio']:focus-visible,
  input[type='checkbox']:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none;
  }

  a:not([class]):focus,
  a:not([class]):focus-visible,
  input[type='radio']:focus,
  input[type='radio']:focus-visible,
  input[type='checkbox']:focus,
  input[type='checkbox']:focus-visible {
    outline-offset: 0;
  }

  kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    line-height: 10px;
    color: var(--color-fg-default);
    vertical-align: middle;
    background-color: var(--color-canvas-subtle);
    border: solid 1px var(--color-neutral-muted);
    border-bottom-color: var(--color-neutral-muted);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 var(--color-neutral-muted);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: var(--base-text-weight-semibold, 600);
    line-height: 1.25;
  }

  h2 {
    font-weight: var(--base-text-weight-semibold, 600);
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid var(--color-border-muted);
  }

  h3 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 1.25em;
  }

  h4 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 1em;
  }

  h5 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 0.875em;
  }

  h6 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 0.85em;
    color: var(--color-fg-muted);
  }

  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  blockquote {
    margin: 0;
    padding: 0 1em;
    color: var(--color-fg-muted);
    border-left: 0.25em solid var(--color-border-default);
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ul ul ol,
  ul ol ol,
  ol ul ol,
  ol ol ol {
    list-style-type: lower-alpha;
  }

  dd {
    margin-left: 0;
  }

  tt,
  code,
  samp {
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 12px;
  }

  pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 12px;
    word-wrap: normal;
  }

  .octicon {
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    fill: currentColor;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  .markdown-body::before {
    display: table;
    content: '';
  }

  .markdown-body::after {
    display: table;
    clear: both;
    content: '';
  }

  .markdown-body > *:first-child {
    margin-top: 0 !important;
  }

  .markdown-body > *:last-child {
    margin-bottom: 0 !important;
  }

  a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .absent {
    color: var(--color-danger-fg);
  }

  .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
  }

  .anchor:focus {
    outline: none;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0;
    margin-bottom: 16px;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  h1 .octicon-link,
  h2 .octicon-link,
  h3 .octicon-link,
  h4 .octicon-link,
  h5 .octicon-link,
  h6 .octicon-link {
    color: var(--color-fg-default);
    vertical-align: middle;
    visibility: hidden;
  }

  h1:hover .anchor,
  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor {
    text-decoration: none;
  }

  h1:hover .anchor .octicon-link,
  h2:hover .anchor .octicon-link,
  h3:hover .anchor .octicon-link,
  h4:hover .anchor .octicon-link,
  h5:hover .anchor .octicon-link,
  h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  h1 tt,
  h1 code,
  h2 tt,
  h2 code,
  h3 tt,
  h3 code,
  h4 tt,
  h4 code,
  h5 tt,
  h5 code,
  h6 tt,
  h6 code {
    padding: 0 0.2em;
    font-size: inherit;
  }

  summary h1,
  summary h2,
  summary h3,
  summary h4,
  summary h5,
  summary h6 {
    display: inline-block;
  }

  summary h1 .anchor,
  summary h2 .anchor,
  summary h3 .anchor,
  summary h4 .anchor,
  summary h5 .anchor,
  summary h6 .anchor {
    margin-left: -40px;
  }

  summary h1,
  summary h2 {
    padding-bottom: 0;
    border-bottom: 0;
  }

  ul.no-list,
  ol.no-list {
    padding: 0;
    list-style-type: none;
  }

  ol[type='a'] {
    list-style-type: lower-alpha;
  }

  ol[type='A'] {
    list-style-type: upper-alpha;
  }

  ol[type='i'] {
    list-style-type: lower-roman;
  }

  ol[type='I'] {
    list-style-type: upper-roman;
  }

  ol[type='1'] {
    list-style-type: decimal;
  }

  div > ol:not([type]) {
    list-style-type: decimal;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  li > p {
    margin-top: 16px;
  }

  li + li {
    margin-top: 0.25em;
  }

  dl {
    padding: 0;
  }

  dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: var(--base-text-weight-semibold, 600);
  }

  dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  table th {
    font-weight: var(--base-text-weight-semibold, 600);
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid var(--color-border-default);
  }

  table tr {
    background-color: var(--color-canvas-default);
    border-top: 1px solid var(--color-border-muted);
  }

  table tr:nth-child(2n) {
    background-color: var(--color-canvas-subtle);
  }

  table img {
    background-color: transparent;
  }

  img[align='right'] {
    padding-left: 20px;
  }

  img[align='left'] {
    padding-right: 20px;
  }

  .emoji {
    max-width: none;
    vertical-align: text-top;
    background-color: transparent;
  }

  span.frame {
    display: block;
    overflow: hidden;
  }

  span.frame > span {
    display: block;
    float: left;
    width: auto;
    padding: 7px;
    margin: 13px 0 0;
    overflow: hidden;
    border: 1px solid var(--color-border-default);
  }

  span.frame span img {
    display: block;
    float: left;
  }

  span.frame span span {
    display: block;
    padding: 5px 0 0;
    clear: both;
    color: var(--color-fg-default);
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    display: block;
    margin: 13px 0 0;
    overflow: hidden;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    display: block;
    float: left;
    margin-right: 13px;
    overflow: hidden;
  }

  span.float-left span {
    margin: 13px 0 0;
  }

  span.float-right {
    display: block;
    float: right;
    margin-left: 13px;
    overflow: hidden;
  }

  span.float-right > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: right;
  }

  code,
  tt {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    background-color: var(--color-neutral-muted);
    border-radius: 6px;
  }

  code br,
  tt br {
    display: none;
  }

  del code {
    text-decoration: inherit;
  }

  samp {
    font-size: 85%;
  }

  pre code {
    font-size: 100%;
  }

  pre > code {
    padding: 0;
    margin: 0;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .highlight {
    margin-bottom: 16px;
  }

  .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .highlight pre,
  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: var(--color-canvas-subtle);
    border-radius: 6px;
  }

  pre code,
  pre tt {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .csv-data td,
  .csv-data th {
    padding: 5px;
    overflow: hidden;
    font-size: 12px;
    line-height: 1;
    text-align: left;
    white-space: nowrap;
  }

  .csv-data .blob-num {
    padding: 10px 8px 9px;
    text-align: right;
    background: var(--color-canvas-default);
    border: 0;
  }

  .csv-data tr {
    border-top: 0;
  }

  .csv-data th {
    font-weight: var(--base-text-weight-semibold, 600);
    background: var(--color-canvas-subtle);
    border-top: 0;
  }

  [data-footnote-ref]::before {
    content: '[';
  }

  [data-footnote-ref]::after {
    content: ']';
  }

  .footnotes {
    font-size: 12px;
    color: var(--color-fg-muted);
    border-top: 1px solid var(--color-border-default);
  }

  .footnotes ol {
    padding-left: 16px;
  }

  .footnotes ol ul {
    display: inline-block;
    padding-left: 16px;
    margin-top: 16px;
  }

  .footnotes li {
    position: relative;
  }

  .footnotes li:target::before {
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -24px;
    pointer-events: none;
    content: '';
    border: 2px solid var(--color-accent-emphasis);
    border-radius: 6px;
  }

  .footnotes li:target {
    color: var(--color-fg-default);
  }

  .footnotes .data-footnote-backref g-emoji {
    font-family: monospace;
  }

  .pl-c {
    color: var(--color-prettylights-syntax-comment);
  }

  .pl-c1,
  .pl-s .pl-v {
    color: var(--color-prettylights-syntax-constant);
  }

  .pl-e,
  .pl-en {
    color: var(--color-prettylights-syntax-entity);
  }

  .pl-smi,
  .pl-s .pl-s1 {
    color: var(--color-prettylights-syntax-storage-modifier-import);
  }

  .pl-ent {
    color: var(--color-prettylights-syntax-entity-tag);
  }

  .pl-k {
    color: var(--color-prettylights-syntax-keyword);
  }

  .pl-s,
  .pl-pds,
  .pl-s .pl-pse .pl-s1,
  .pl-sr,
  .pl-sr .pl-cce,
  .pl-sr .pl-sre,
  .pl-sr .pl-sra {
    color: var(--color-prettylights-syntax-string);
  }

  .pl-v,
  .pl-smw {
    color: var(--color-prettylights-syntax-variable);
  }

  .pl-bu {
    color: var(--color-prettylights-syntax-brackethighlighter-unmatched);
  }

  .pl-ii {
    color: var(--color-prettylights-syntax-invalid-illegal-text);
    background-color: var(--color-prettylights-syntax-invalid-illegal-bg);
  }

  .pl-c2 {
    color: var(--color-prettylights-syntax-carriage-return-text);
    background-color: var(--color-prettylights-syntax-carriage-return-bg);
  }

  .pl-sr .pl-cce {
    font-weight: bold;
    color: var(--color-prettylights-syntax-string-regexp);
  }

  .pl-ml {
    color: var(--color-prettylights-syntax-markup-list);
  }

  .pl-mh,
  .pl-mh .pl-en,
  .pl-ms {
    font-weight: bold;
    color: var(--color-prettylights-syntax-markup-heading);
  }

  .pl-mi {
    font-style: italic;
    color: var(--color-prettylights-syntax-markup-italic);
  }

  .pl-mb {
    font-weight: bold;
    color: var(--color-prettylights-syntax-markup-bold);
  }

  .pl-md {
    color: var(--color-prettylights-syntax-markup-deleted-text);
    background-color: var(--color-prettylights-syntax-markup-deleted-bg);
  }

  .pl-mi1 {
    color: var(--color-prettylights-syntax-markup-inserted-text);
    background-color: var(--color-prettylights-syntax-markup-inserted-bg);
  }

  .pl-mc {
    color: var(--color-prettylights-syntax-markup-changed-text);
    background-color: var(--color-prettylights-syntax-markup-changed-bg);
  }

  .pl-mi2 {
    color: var(--color-prettylights-syntax-markup-ignored-text);
    background-color: var(--color-prettylights-syntax-markup-ignored-bg);
  }

  .pl-mdr {
    font-weight: bold;
    color: var(--color-prettylights-syntax-meta-diff-range);
  }

  .pl-ba {
    color: var(--color-prettylights-syntax-brackethighlighter-angle);
  }

  .pl-sg {
    color: var(--color-prettylights-syntax-sublimelinter-gutter-mark);
  }

  .pl-corl {
    text-decoration: underline;
    color: var(--color-prettylights-syntax-constant-other-reference-link);
  }

  g-emoji {
    display: inline-block;
    min-width: 1ch;
    font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1em;
    font-style: normal !important;
    font-weight: var(--base-text-weight-normal, 400);
    line-height: 1;
    vertical-align: -0.075em;
  }

  g-emoji img {
    width: 1em;
    height: 1em;
  }

  .task-list-item {
    list-style-type: none;
  }

  .task-list-item label {
    font-weight: var(--base-text-weight-normal, 400);
  }

  .task-list-item.enabled label {
    cursor: pointer;
  }

  .task-list-item + .task-list-item {
    margin-top: 4px;
  }

  .task-list-item .handle {
    display: none;
  }

  .task-list-item-checkbox {
    margin: 0 0.2em 0.25em -1.4em;
    vertical-align: middle;
  }

  .contains-task-list:dir(rtl) .task-list-item-checkbox {
    margin: 0 -1.6em 0.25em 0.2em;
  }

  .contains-task-list {
    position: relative;
  }

  .contains-task-list:hover .task-list-item-convert-container,
  .contains-task-list:focus-within .task-list-item-convert-container {
    display: block;
    width: auto;
    height: 24px;
    overflow: visible;
    clip: auto;
  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(50%);
  }
`,Ra={tokenize:function(e,t,n){let r=0;return function l(o){return(87===o||119===o)&&r<3?(r++,e.consume(o),l):46===o&&3===r?(e.consume(o),i):n(o)};function i(o){return null===o?n(o):t(o)}},partial:!0},mr={tokenize:function(e,t,n){let r,l,i;return o;function o(f){return 46===f||95===f?e.check(br,s,a)(f):null===f||V(f)||Ce(f)||45!==f&&Qe(f)?s(f):(i=!0,e.consume(f),o)}function a(f){return 95===f?r=!0:(l=r,r=void 0),e.consume(f),o}function s(f){return l||r||!i?n(f):t(f)}},partial:!0},yr={tokenize:function(e,t){let n=0,r=0;return l;function l(o){return 40===o?(n++,e.consume(o),l):41===o&&r<n?i(o):33===o||34===o||38===o||39===o||41===o||42===o||44===o||46===o||58===o||59===o||60===o||63===o||93===o||95===o||126===o?e.check(br,t,i)(o):null===o||V(o)||Ce(o)?t(o):(e.consume(o),l)}function i(o){return 41===o&&r++,e.consume(o),l}},partial:!0},br={tokenize:function(e,t,n){return r;function r(a){return 33===a||34===a||39===a||41===a||42===a||44===a||46===a||58===a||59===a||63===a||95===a||126===a?(e.consume(a),r):38===a?(e.consume(a),i):93===a?(e.consume(a),l):60===a||null===a||V(a)||Ce(a)?t(a):n(a)}function l(a){return null===a||40===a||91===a||V(a)||Ce(a)?t(a):r(a)}function i(a){return ee(a)?o(a):n(a)}function o(a){return 59===a?(e.consume(a),r):ee(a)?(e.consume(a),o):n(a)}},partial:!0},ja={tokenize:function(e,t,n){return function(i){return e.consume(i),l};function l(i){return G(i)?n(i):t(i)}},partial:!0},kr={tokenize:function(e,t,n){let r=this;return function(o){return 87!==o&&119!==o||!vr.call(r,r.previous)||Ut(r.events)?n(o):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Ra,e.attempt(mr,e.attempt(yr,i),n),n)(o))};function i(o){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(o)}},previous:vr},xr={tokenize:function(e,t,n){let r=this,l="",i=!1;return function(u){return 72!==u&&104!==u||!wr.call(r,r.previous)||Ut(r.events)?n(u):(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),l+=String.fromCodePoint(u),e.consume(u),a)};function a(u){if(ee(u)&&l.length<5)return l+=String.fromCodePoint(u),e.consume(u),a;if(58===u){let d=l.toLowerCase();if("http"===d||"https"===d)return e.consume(u),s}return n(u)}function s(u){return 47===u?(e.consume(u),i?f:(i=!0,s)):n(u)}function f(u){return null===u||Ve(u)||V(u)||Ce(u)||Qe(u)?n(u):e.attempt(mr,e.attempt(yr,c),n)(u)}function c(u){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(u)}},previous:wr},xe={tokenize:function(e,t,n){let l,i,r=this;return function(u){return Ht(u)&&Sr.call(r,r.previous)&&!Ut(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(u)):n(u)};function a(u){return Ht(u)?(e.consume(u),a):64===u?(e.consume(u),s):n(u)}function s(u){return 46===u?e.check(ja,c,f)(u):45===u||95===u||G(u)?(i=!0,e.consume(u),s):c(u)}function f(u){return e.consume(u),l=!0,s}function c(u){return i&&l&&ee(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(u)):n(u)}},previous:Sr},ge={},_a={text:ge},De=48;De<123;)ge[De]=xe,58===++De?De=65:91===De&&(De=97);function vr(e){return null===e||40===e||42===e||95===e||91===e||93===e||126===e||V(e)}function wr(e){return!ee(e)}function Sr(e){return!(47===e||Ht(e))}function Ht(e){return 43===e||45===e||46===e||95===e||G(e)}function Ut(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if(("labelLink"===r.type||"labelImage"===r.type)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}ge[43]=xe,ge[45]=xe,ge[46]=xe,ge[95]=xe,ge[72]=[xe,xr],ge[104]=[xe,xr],ge[87]=[xe,kr],ge[119]=[xe,kr];var Qa={tokenize:function(e,t,n){let r=this;return H(e,(function(i){let o=r.events[r.events.length-1];return o&&"gfmFootnoteDefinitionIndent"===o[1].type&&4===o[2].sliceSerialize(o[1],!0).length?t(i):n(i)}),"gfmFootnoteDefinitionIndent",5)},partial:!0};function Xa(e,t,n){let o,r=this,l=r.events.length,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);for(;l--;){let s=r.events[l][1];if("labelImage"===s.type){o=s;break}if("gfmFootnoteCall"===s.type||"labelLink"===s.type||"label"===s.type||"image"===s.type||"link"===s.type)break}return function(s){if(!o||!o._balanced)return n(s);let f=ae(r.sliceSerialize({start:o.end,end:r.now()}));return 94===f.codePointAt(0)&&i.includes(f.slice(1))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s)):n(s)}}function Ya(e,t){let n=e.length;for(;n--;)if("labelImage"===e[n][1].type&&"enter"===e[n][0]){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},l={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};l.end.column++,l.end.offset++,l.end._bufferIndex++;let i={type:"gfmFootnoteCallString",start:Object.assign({},l.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},i.start),end:Object.assign({},i.end)},a=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",l,t],["exit",l,t],["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...a),e}function Ja(e,t,n){let o,r=this,l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),i=0;return function(u){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),s};function s(u){return 94!==u?n(u):(e.enter("gfmFootnoteCallMarker"),e.consume(u),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",f)}function f(u){if(i>999||93===u&&!o||null===u||91===u||V(u))return n(u);if(93===u){e.exit("chunkString");let d=e.exit("gfmFootnoteCallString");return l.includes(ae(r.sliceSerialize(d)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(u)}return V(u)||(o=!0),i++,e.consume(u),92===u?c:f}function c(u){return 91===u||92===u||93===u?(e.consume(u),i++,f):f(u)}}function Za(e,t,n){let i,a,r=this,l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o=0;return function(y){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionLabelMarker"),f};function f(y){return 94===y?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",c):n(y)}function c(y){if(o>999||93===y&&!a||null===y||91===y||V(y))return n(y);if(93===y){e.exit("chunkString");let k=e.exit("gfmFootnoteDefinitionLabelString");return i=ae(r.sliceSerialize(k)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(y),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),d}return V(y)||(a=!0),o++,e.consume(y),92===y?u:c}function u(y){return 91===y||92===y||93===y?(e.consume(y),o++,c):c(y)}function d(y){return 58===y?(e.enter("definitionMarker"),e.consume(y),e.exit("definitionMarker"),l.includes(i)||l.push(i),H(e,p,"gfmFootnoteDefinitionWhitespace")):n(y)}function p(y){return t(y)}}function Ga(e,t,n){return e.check(Pe,t,e.attempt(Qa,t,n))}function eu(e){e.exit("gfmFootnoteDefinition")}function nu(e){let t=(e||{}).singleTilde,n={tokenize:function(i,o,a){let s=this.previous,f=this.events,c=0;return function(p){return 126===s&&"characterEscape"!==f[f.length-1][1].type?a(p):(i.enter("strikethroughSequenceTemporary"),d(p))};function d(p){let y=$e(s);if(126===p)return c>1?a(p):(i.consume(p),c++,d);if(c<2&&!t)return a(p);let k=i.exit("strikethroughSequenceTemporary"),w=$e(p);return k._open=!w||2===w&&!!y,k._close=!y||2===y&&!!w,o(p)}},resolveAll:function(i,o){let a=-1;for(;++a<i.length;)if("enter"===i[a][0]&&"strikethroughSequenceTemporary"===i[a][1].type&&i[a][1]._close){let s=a;for(;s--;)if("exit"===i[s][0]&&"strikethroughSequenceTemporary"===i[s][1].type&&i[s][1]._open&&i[a][1].end.offset-i[a][1].start.offset==i[s][1].end.offset-i[s][1].start.offset){i[a][1].type="strikethroughSequence",i[s][1].type="strikethroughSequence";let f={type:"strikethrough",start:Object.assign({},i[s][1].start),end:Object.assign({},i[a][1].end)},c={type:"strikethroughText",start:Object.assign({},i[s][1].end),end:Object.assign({},i[a][1].start)},u=[["enter",f,o],["enter",i[s][1],o],["exit",i[s][1],o],["enter",c,o]],d=o.parser.constructs.insideSpan.null;d&&ne(u,u.length,0,Ke(d,i.slice(s+1,a),o)),ne(u,u.length,0,[["exit",c,o],["enter",i[a][1],o],["exit",i[a][1],o],["exit",f,o]]),ne(i,s-1,a-s+3,u),a=s+u.length-2;break}}for(a=-1;++a<i.length;)"strikethroughSequenceTemporary"===i[a][1].type&&(i[a][1].type="data");return i}};return null==t&&(t=!0),{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}}}var ru=class{constructor(){this.map=[]}add(e,t,n){!function(e,t,n,r){let l=0;if(0!==n||0!==r.length){for(;l<e.map.length;){if(e.map[l][0]===t)return e.map[l][1]+=n,void e.map[l][2].push(...r);l+=1}e.map.push([t,n,r])}}(this,e,t,n)}consume(e){if(this.map.sort(((l,i)=>l[0]-i[0])),0===this.map.length)return;let t=this.map.length,n=[];for(;t>0;)t-=1,n.push(e.slice(this.map[t][0]+this.map[t][1])),n.push(this.map[t][2]),e.length=this.map[t][0];n.push([...e]),e.length=0;let r=n.pop();for(;r;)e.push(...r),r=n.pop();this.map.length=0}};function lu(e,t){let n=!1,r=[];for(;t<e.length;){let l=e[t];if(n){if("enter"===l[0])"tableContent"===l[1].type&&r.push("tableDelimiterMarker"===e[t+1][1].type?"left":"none");else if("tableContent"===l[1].type){if("tableDelimiterMarker"===e[t-1][1].type){let i=r.length-1;r[i]="left"===r[i]?"center":"right"}}else if("tableDelimiterRow"===l[1].type)break}else"enter"===l[0]&&"tableDelimiterRow"===l[1].type&&(n=!0);t+=1}return r}var ou={flow:{null:{tokenize:function(e,t,n){let o,r=this,l=0,i=0;return function(x){let D=r.events.length-1;for(;D>-1;){let W=r.events[D][1].type;if("lineEnding"!==W&&"linePrefix"!==W)break;D--}let O=D>-1?r.events[D][1].type:null,U="tableHead"===O||"tableRow"===O?b:s;return U===b&&r.parser.lazy[r.now().line]?n(x):U(x)};function s(x){return e.enter("tableHead"),e.enter("tableRow"),function(x){return 124===x||(o=!0,i+=1),c(x)}(x)}function c(x){return null===x?n(x):z(x)?i>1?(i=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),p):n(x):B(x)?H(e,c,"whitespace")(x):(i+=1,o&&(o=!1,l+=1),124===x?(e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),o=!0,c):(e.enter("data"),u(x)))}function u(x){return null===x||124===x||V(x)?(e.exit("data"),c(x)):(e.consume(x),92===x?d:u)}function d(x){return 92===x||124===x?(e.consume(x),u):u(x)}function p(x){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(x):(e.enter("tableDelimiterRow"),o=!1,B(x)?H(e,y,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):y(x))}function y(x){return 45===x||58===x?w(x):124===x?(o=!0,e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),k):P(x)}function k(x){return B(x)?H(e,w,"whitespace")(x):w(x)}function w(x){return 58===x?(i+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(x),e.exit("tableDelimiterMarker"),m):45===x?(i+=1,m(x)):null===x||z(x)?T(x):P(x)}function m(x){return 45===x?(e.enter("tableDelimiterFiller"),E(x)):P(x)}function E(x){return 45===x?(e.consume(x),E):58===x?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(x),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(x))}function S(x){return B(x)?H(e,T,"whitespace")(x):T(x)}function T(x){return 124===x?y(x):(null===x||z(x))&&o&&l===i?(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(x)):P(x)}function P(x){return n(x)}function b(x){return e.enter("tableRow"),A(x)}function A(x){return 124===x?(e.enter("tableCellDivider"),e.consume(x),e.exit("tableCellDivider"),A):null===x||z(x)?(e.exit("tableRow"),t(x)):B(x)?H(e,A,"whitespace")(x):(e.enter("data"),R(x))}function R(x){return null===x||124===x||V(x)?(e.exit("data"),A(x)):(e.consume(x),92===x?N:R)}function N(x){return 92===x||124===x?(e.consume(x),R):R(x)}},resolveAll:function(e,t){let f,c,u,n=-1,r=!0,l=0,i=[0,0,0,0],o=[0,0,0,0],a=!1,s=0,d=new ru;for(;++n<e.length;){let p=e[n],y=p[1];"enter"===p[0]?"tableHead"===y.type?(a=!1,0!==s&&(ar(d,t,s,f,c),c=void 0,s=0),f={type:"table",start:Object.assign({},y.start),end:Object.assign({},y.end)},d.add(n,0,[["enter",f,t]])):"tableRow"===y.type||"tableDelimiterRow"===y.type?(r=!0,u=void 0,i=[0,0,0,0],o=[0,n+1,0,0],a&&(a=!1,c={type:"tableBody",start:Object.assign({},y.start),end:Object.assign({},y.end)},d.add(n,0,[["enter",c,t]])),l="tableDelimiterRow"===y.type?2:c?3:1):!l||"data"!==y.type&&"tableDelimiterMarker"!==y.type&&"tableDelimiterFiller"!==y.type?"tableCellDivider"===y.type&&(r?r=!1:(0!==i[1]&&(o[0]=o[1],u=rt(d,t,i,l,void 0,u)),i=o,o=[i[1],n,0,0])):(r=!1,0===o[2]&&(0!==i[1]&&(o[0]=o[1],u=rt(d,t,i,l,void 0,u),i=[0,0,0,0]),o[2]=n)):"tableHead"===y.type?(a=!0,s=n):"tableRow"===y.type||"tableDelimiterRow"===y.type?(s=n,0!==i[1]?(o[0]=o[1],u=rt(d,t,i,l,n,u)):0!==o[1]&&(u=rt(d,t,o,l,n,u)),l=0):l&&("data"===y.type||"tableDelimiterMarker"===y.type||"tableDelimiterFiller"===y.type)&&(o[3]=n)}for(0!==s&&ar(d,t,s,f,c),d.consume(t.events),n=-1;++n<t.events.length;){let p=t.events[n];"enter"===p[0]&&"table"===p[1].type&&(p[1]._align=lu(t.events,n))}return e}}}};function rt(e,t,n,r,l,i){let o=1===r?"tableHeader":2===r?"tableDelimiter":"tableData";0!==n[0]&&(i.end=Object.assign({},je(t.events,n[0])),e.add(n[0],0,[["exit",i,t]]));let s=je(t.events,n[1]);if(i={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",i,t]]),0!==n[2]){let f=je(t.events,n[2]),c=je(t.events,n[3]),u={type:"tableContent",start:Object.assign({},f),end:Object.assign({},c)};if(e.add(n[2],0,[["enter",u,t]]),2!==r){let d=t.events[n[2]],p=t.events[n[3]];if(d[1].end=Object.assign({},p[1].end),d[1].type="chunkText",d[1].contentType="text",n[3]>n[2]+1){let y=n[2]+1,k=n[3]-n[2]-1;e.add(y,k,[])}}e.add(n[3]+1,0,[["exit",u,t]])}return void 0!==l&&(i.end=Object.assign({},je(t.events,l)),e.add(l,0,[["exit",i,t]]),i=void 0),i}function ar(e,t,n,r,l){let i=[],o=je(t.events,n);l&&(l.end=Object.assign({},o),i.push(["exit",l,t])),r.end=Object.assign({},o),i.push(["exit",r,t]),e.add(n+1,0,i)}function je(e,t){let n=e[t],r="enter"===n[0]?"start":"end";return n[1][r]}var cu={text:{91:{tokenize:function(e,t,n){let r=this;return function(s){return null===r.previous&&r._gfmTasklistFirstContentOfListItem?(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),i):n(s)};function i(s){return V(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),o):88===s||120===s?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),o):n(s)}function o(s){return 93===s?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(s)}function a(s){return z(s)?t(s):B(s)?e.check({tokenize:pu},t,n)(s):n(s)}}}}};function pu(e,t,n){return H(e,(function(l){return null===l?n(l):t(l)}),"whitespace")}function ur(e,t){let n=String(e);if("string"!=typeof t)throw new TypeError("Expected character");let r=0,l=n.indexOf(t);for(;-1!==l;)r++,l=n.indexOf(t,l+t.length);return r}var gu={}.hasOwnProperty,mu=function(e,t,n,r){let l,i;"string"==typeof t||t instanceof RegExp?(i=[[t,n]],l=r):(i=t,l=n),l||(l={});let o=tt(l.ignore||[]),a=function(e){let t=[];if("object"!=typeof e)throw new TypeError("Expected array or object as schema");if(Array.isArray(e)){let n=-1;for(;++n<e.length;)t.push([sr(e[n][0]),cr(e[n][1])])}else{let n;for(n in e)gu.call(e,n)&&t.push([sr(n),cr(e[n])])}return t}(i),s=-1;for(;++s<a.length;)zt(e,"text",f);return e;function f(u,d){let y,p=-1;for(;++p<d.length;){let k=d[p];if(o(k,y?y.children.indexOf(k):void 0,y))return;y=k}if(y)return function(u,d){let p=d[d.length-1],y=a[s][0],k=a[s][1],w=0,m=p.children.indexOf(u),E=!1,S=[];y.lastIndex=0;let T=y.exec(u.value);for(;T;){let P=T.index,b={index:T.index,input:T.input,stack:[...d,u]},A=k(...T,b);if("string"==typeof A&&(A=A.length>0?{type:"text",value:A}:void 0),!1!==A&&(w!==P&&S.push({type:"text",value:u.value.slice(w,P)}),Array.isArray(A)?S.push(...A):A&&S.push(A),w=P+T[0].length,E=!0),!y.global)break;T=y.exec(u.value)}return E?(w<u.value.length&&S.push({type:"text",value:u.value.slice(w)}),p.children.splice(m,1,...S)):S=[u],m+S.length}(u,d)}};function sr(e){return"string"==typeof e?new RegExp(function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(e),"g"):e}function cr(e){return"function"==typeof e?e:()=>e}var jt="phrasing",_t=["autolink","link","image","label"],bu={transforms:[function(e){mu(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Eu],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,Au]],{ignore:["link","linkReference"]})}],enter:{literalAutolink:function(e){this.enter({type:"link",title:null,url:"",children:[]},e)},literalAutolinkEmail:Bt,literalAutolinkHttp:Bt,literalAutolinkWww:Bt},exit:{literalAutolink:function(e){this.exit(e)},literalAutolinkEmail:function(e){this.config.exit.autolinkEmail.call(this,e)},literalAutolinkHttp:function(e){this.config.exit.autolinkProtocol.call(this,e)},literalAutolinkWww:function(e){this.config.exit.data.call(this,e),this.stack[this.stack.length-1].url="http://"+this.sliceSerialize(e)}}},ku={unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:jt,notInConstruct:_t},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:jt,notInConstruct:_t},{character:":",before:"[ps]",after:"\\/",inConstruct:jt,notInConstruct:_t}]};function Bt(e){this.config.enter.autolinkProtocol.call(this,e)}function Eu(e,t,n,r,l){let i="";if(!Cr(l)||(/^w/i.test(t)&&(n=t+n,t="",i="http://"),!function(e){let t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}(n)))return!1;let o=function(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),l=ur(e,"("),i=ur(e,")");for(;-1!==r&&l>i;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),i++;return[e,n]}(n+r);if(!o[0])return!1;let a={type:"link",title:null,url:i+t+o[0],children:[{type:"text",value:t+o[0]}]};return o[1]?[a,{type:"text",value:o[1]}]:a}function Au(e,t,n,r){return!(!Cr(r,!0)||/[-\d_]$/.test(n))&&{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Cr(e,t){let n=e.input.charCodeAt(e.index-1);return(0===e.index||Ce(n)||Qe(n))&&(!t||47!==n)}function Fr(e){return e.label||!e.identifier?e.label||"":Ot(e.identifier)}function Lu(e,t,n,r){let l=r.join.length;for(;l--;){let i=r.join[l](e,t,n,r);if(!0===i||1===i)break;if("number"==typeof i)return"\n".repeat(1+i);if(!1===i)return"\n\n\x3c!----\x3e\n\n"}return"\n\n"}var Iu=/\r?\n|\r/g;function Er(e){if(!e._compiled){let t=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=new RegExp((t?"("+t+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function Pu(e,t){return fr(e,t.inConstruct,!0)&&!fr(e,t.notInConstruct,!1)}function fr(e,t,n){if("string"==typeof t&&(t=[t]),!t||0===t.length)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Ar(e,t,n){let r=(n.before||"")+(t||"")+(n.after||""),l=[],i=[],o={},a=-1;for(;++a<e.unsafe.length;){let c=e.unsafe[a];if(!Pu(e.stack,c))continue;let d,u=Er(c);for(;d=u.exec(r);){let p="before"in c||!!c.atBreak,y="after"in c,k=d.index+(p?d[1].length:0);l.includes(k)?(o[k].before&&!p&&(o[k].before=!1),o[k].after&&!y&&(o[k].after=!1)):(l.push(k),o[k]={before:p,after:y})}}l.sort(Mu);let s=n.before?n.before.length:0,f=r.length-(n.after?n.after.length:0);for(a=-1;++a<l.length;){let c=l[a];c<s||c>=f||c+1<f&&l[a+1]===c+1&&o[c].after&&!o[c+1].before&&!o[c+1].after||l[a-1]===c-1&&o[c].before&&!o[c-1].before&&!o[c-1].after||(s!==c&&i.push(pr(r.slice(s,c),"\\")),s=c,!/[!-/:-@[-`{-~]/.test(r.charAt(c))||n.encode&&n.encode.includes(r.charAt(c))?(i.push("&#x"+r.charCodeAt(c).toString(16).toUpperCase()+";"),s++):i.push("\\"))}return i.push(pr(r.slice(s,f),n.after)),i.join("")}function Mu(e,t){return e-t}function pr(e,t){let s,n=/\\(?=[!-/:-@[-`{-~])/g,r=[],l=[],i=e+t,o=-1,a=0;for(;s=n.exec(i);)r.push(s.index);for(;++o<r.length;)a!==r[o]&&l.push(e.slice(a,r[o])),l.push("\\"),a=r[o];return l.push(e.slice(a)),l.join("")}function it(e){let t=e||{},n=t.now||{},r=t.lineShift||0,l=n.line||1,i=n.column||1;return{move:function(f){let c=f||"",u=c.split(/\r?\n|\r/g),d=u[u.length-1];return l+=u.length-1,i=1===u.length?i+d.length:1+d.length+r,c},current:function(){return{now:{line:l,column:i},lineShift:r}},shift:function(f){r+=f}}}function _u(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function Bu(){this.buffer()}function Nu(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=ae(this.sliceSerialize(e)).toLowerCase()}function Hu(e){this.exit(e)}function Uu(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function qu(){this.buffer()}function Vu(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=ae(this.sliceSerialize(e)).toLowerCase()}function $u(e){this.exit(e)}function Dr(e,t,n,r){let l=it(r),i=l.move("[^"),o=n.enter("footnoteReference"),a=n.enter("reference");return i+=l.move(Ar(n,Fr(e),(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.b)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({},l.current()),{before:i,after:"]"}))),a(),o(),i+=l.move("]"),i}function Qu(e,t,n,r){let l=it(r),i=l.move("[^"),o=n.enter("footnoteDefinition"),a=n.enter("label");return i+=l.move(Ar(n,Fr(e),(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.b)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({},l.current()),{before:i,after:"]"}))),a(),i+=l.move("]:"+(e.children&&e.children.length>0?" ":"")),l.shift(4),i+=l.move(function(e,t){let i,n=[],r=0,l=0;for(;i=Iu.exec(e);)o(e.slice(r,i.index)),n.push(i[0]),r=i.index+i[0].length,l++;return o(e.slice(r)),n.join("");function o(a){n.push(t(a,l,!a))}}(function(e,t,n){let r=t.indexStack,l=e.children||[],i=t.createTracker(n),o=[],a=-1;for(r.push(-1);++a<l.length;){let s=l[a];r[r.length-1]=a,o.push(i.move(t.handle(s,e,t,(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({before:"\n",after:"\n"},i.current())))),"list"!==s.type&&(t.bulletLastUsed=void 0),a<l.length-1&&o.push(i.move(Lu(s,l[a+1],e,t)))}return r.pop(),o.join("")}(e,n,l.current()),Ku)),o(),i}function Ku(e,t,n){return 0===t?e:(n?"":"    ")+e}function Tr(e,t,n){let r=t.indexStack,l=e.children||[],i=[],o=-1,a=n.before;r.push(-1);let s=t.createTracker(n);for(;++o<l.length;){let c,f=l[o];if(r[r.length-1]=o,o+1<l.length){let u=t.handle.handlers[l[o+1].type];u&&u.peek&&(u=u.peek),c=u?u(l[o+1],e,t,(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({before:"",after:""},s.current())).charAt(0):""}else c=n.after;i.length>0&&("\r"===a||"\n"===a)&&"html"===f.type&&(i[i.length-1]=i[i.length-1].replace(/(\r?\n|\r)$/," "),a=" ",s=t.createTracker(n),s.move(i.join(""))),i.push(s.move(t.handle(f,e,t,(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.b)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({},s.current()),{before:a,after:c})))),a=i[i.length-1].slice(-1)}return r.pop(),i.join("")}Dr.peek=function(){return"["};Or.peek=function(){return"~"};var Yu={canContainEols:["delete"],enter:{strikethrough:function(e){this.enter({type:"delete",children:[]},e)}},exit:{strikethrough:function(e){this.exit(e)}}},Ju={unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"]}],handlers:{delete:Or}};function Or(e,t,n,r){let l=it(r),i=n.enter("strikethrough"),o=l.move("~~");return o+=Tr(e,n,(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.b)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({},l.current()),{before:o,after:"~"})),o+=l.move("~~"),i(),o}function Lr(e,t,n){let r=e.value||"",l="`",i=-1;for(;new RegExp("(^|[^`])"+l+"([^`]|$)").test(r);)l+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++i<n.unsafe.length;){let s,o=n.unsafe[i],a=Er(o);if(o.atBreak)for(;s=a.exec(r);){let f=s.index;10===r.charCodeAt(f)&&13===r.charCodeAt(f-1)&&f--,r=r.slice(0,f)+" "+r.slice(s.index+1)}}return l+r+l}function rs(e){return null==e?"":String(e)}function is(e){return e.length}function dr(e){let t="string"==typeof e?e.codePointAt(0):0;return 67===t||99===t?99:76===t||108===t?108:82===t||114===t?114:0}Lr.peek=function(){return"`"};var ls={enter:{table:function(e){let t=e._align;this.enter({type:"table",align:t.map((n=>"none"===n?null:n)),children:[]},e),this.setData("inTable",!0)},tableData:hr,tableHeader:hr,tableRow:function(e){this.enter({type:"tableRow",children:[]},e)}},exit:{codeText:function(e){let t=this.resume();this.getData("inTable")&&(t=t.replace(/\\([\\|])/g,cs)),this.stack[this.stack.length-1].value=t,this.exit(e)},table:function(e){this.exit(e),this.setData("inTable")},tableData:Nt,tableHeader:Nt,tableRow:Nt}};function Nt(e){this.exit(e)}function hr(e){this.enter({type:"tableCell",children:[]},e)}function cs(e,t){return"|"===t?t:e}function fs(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,l=t.stringLength,i=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:"\n",inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[\t :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{table:function(p,y,k,w){return f(function(p,y,k){let w=p.children,m=-1,E=[],S=y.enter("table");for(;++m<w.length;)E[m]=u(w[m],y,k);return S(),E}(p,k,w),p.align)},tableRow:function(p,y,k,w){let E=f([u(p,k,w)]);return E.slice(0,E.indexOf("\n"))},tableCell:s,inlineCode:function(p,y,k){let w=Lr(p,0,k);return k.stack.includes("tableCell")&&(w=w.replace(/\|/g,"\\$&")),w}}};function s(p,y,k,w){let m=k.enter("tableCell"),E=k.enter("phrasing"),S=Tr(p,k,(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.b)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({},w),{before:i,after:i}));return E(),m(),S}function f(p,y){return function(e,t={}){let n=(t.align||[]).concat(),r=t.stringLength||is,l=[],i=[],o=[],a=[],s=0,f=-1;for(;++f<e.length;){let y=[],k=[],w=-1;for(e[f].length>s&&(s=e[f].length);++w<e[f].length;){let m=rs(e[f][w]);if(!1!==t.alignDelimiters){let E=r(m);k[w]=E,(void 0===a[w]||E>a[w])&&(a[w]=E)}y.push(m)}i[f]=y,o[f]=k}let c=-1;if("object"==typeof n&&"length"in n)for(;++c<s;)l[c]=dr(n[c]);else{let y=dr(n);for(;++c<s;)l[c]=y}c=-1;let u=[],d=[];for(;++c<s;){let y=l[c],k="",w="";99===y?(k=":",w=":"):108===y?k=":":114===y&&(w=":");let m=!1===t.alignDelimiters?1:Math.max(1,a[c]-k.length-w.length),E=k+"-".repeat(m)+w;!1!==t.alignDelimiters&&(m=k.length+m+w.length,m>a[c]&&(a[c]=m),d[c]=m),u[c]=E}i.splice(1,0,u),o.splice(1,0,d),f=-1;let p=[];for(;++f<i.length;){let y=i[f],k=o[f];c=-1;let w=[];for(;++c<s;){let m=y[c]||"",E="",S="";if(!1!==t.alignDelimiters){let T=a[c]-(k[c]||0),P=l[c];114===P?E=" ".repeat(T):99===P?T%2?(E=" ".repeat(T/2+.5),S=" ".repeat(T/2-.5)):(E=" ".repeat(T/2),S=E):S=" ".repeat(T)}!1!==t.delimiterStart&&!c&&w.push("|"),!1!==t.padding&&!(!1===t.alignDelimiters&&""===m)&&(!1!==t.delimiterStart||c)&&w.push(" "),!1!==t.alignDelimiters&&w.push(E),w.push(m),!1!==t.alignDelimiters&&w.push(S),!1!==t.padding&&w.push(" "),(!1!==t.delimiterEnd||c!==s-1)&&w.push("|")}p.push(!1===t.delimiterEnd?w.join("").replace(/ +$/,""):w.join(""))}return p.join("\n")}(p,{align:y,alignDelimiters:r,padding:n,stringLength:l})}function u(p,y,k){let w=p.children,m=-1,E=[],S=y.enter("tableRow");for(;++m<w.length;)E[m]=s(w[m],0,y,k);return S(),E}}function hs(e,t,n,r){let l=function(e){let t=e.options.listItemIndent||"tab";if(1===t||"1"===t)return"one";if("tab"!==t&&"one"!==t&&"mixed"!==t)throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}(n),i=n.bulletCurrent||function(e){let t=e.options.bullet||"*";if("*"!==t&&"+"!==t&&"-"!==t)throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}(n);t&&"list"===t.type&&t.ordered&&(i=("number"==typeof t.start&&t.start>-1?t.start:1)+(!1===n.options.incrementListMarker?0:t.children.indexOf(e))+i);let o=i.length+1;("tab"===l||"mixed"===l&&(t&&"list"===t.type&&t.spread||e.spread))&&(o=4*Math.ceil(o/4));let a=n.createTracker(r);a.move(i+" ".repeat(o-i.length)),a.shift(o);let s=n.enter("listItem"),f=n.indentLines(n.containerFlow(e,a.current()),(function(u,d,p){return d?(p?"":" ".repeat(o))+u:(p?i:i+" ".repeat(o-i.length))+u}));return s(),f}var gs={exit:{taskListCheckValueChecked:gr,taskListCheckValueUnchecked:gr,paragraph:function(e){let t=this.stack[this.stack.length-2];if(t&&"listItem"===t.type&&"boolean"==typeof t.checked){let n=this.stack[this.stack.length-1],r=n.children[0];if(r&&"text"===r.type){let o,l=t.children,i=-1;for(;++i<l.length;){let a=l[i];if("paragraph"===a.type){o=a;break}}o===n&&(r.value=r.value.slice(1),0===r.value.length?n.children.shift():n.position&&r.position&&"number"==typeof r.position.start.offset&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}}},ms={unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:function(e,t,n,r){let l=e.children[0],i="boolean"==typeof e.checked&&l&&"paragraph"===l.type,o="["+(e.checked?"x":" ")+"] ",a=it(r);i&&a.move(o);let s=hs(e,t,n,(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.a)({},r),a.current()));return i&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,(function(c){return c+o}))),s}}};function gr(e){this.stack[this.stack.length-2].checked="taskListCheckValueChecked"===e.type}function vs(e={}){let t=this.data();function n(r,l){(t[r]?t[r]:t[r]=[]).push(l)}n("micromarkExtensions",function(e){return At([_a,{document:{91:{tokenize:Za,continuation:{tokenize:Ga},exit:eu}},text:{91:{tokenize:Ja},93:{add:"after",tokenize:Xa,resolveTo:Ya}}},nu(e),ou,cu])}(e)),n("fromMarkdownExtensions",[bu,{enter:{gfmFootnoteDefinition:_u,gfmFootnoteDefinitionLabelString:Bu,gfmFootnoteCall:Uu,gfmFootnoteCallString:qu},exit:{gfmFootnoteDefinition:Hu,gfmFootnoteDefinitionLabelString:Nu,gfmFootnoteCall:$u,gfmFootnoteCallString:Vu}},Yu,ls,gs]),n("toMarkdownExtensions",function(e){return{extensions:[ku,{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:Qu,footnoteReference:Dr}},Ju,fs(e),ms]}}(e))}var Ir=(0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.f)((0,_chunk_UK5ZH5QE_mjs__WEBPACK_IMPORTED_MODULE_0__.j)(),1);function ws(e){return Ir.default.createElement("a",{href:e.href,target:"_blank",rel:"noreferrer"},e.children)}function Ps({source:e}){return Ir.default.createElement(or,{components:{a:ws},rehypePlugins:[vs]},e)}}}]);