(self.webpackChunkbootstrap=self.webpackChunkbootstrap||[]).push([[509],{2309:(O,I,r)=>{"use strict";r.d(I,{M:()=>x});var c=r(5e3),v=r(4366),o=r(9444);let x=(()=>{class s{constructor(){}get anchor(){return this._anchor}set anchor(_){this._anchor=_}get heading(){return this._heading}set heading(_){this._heading=_,this.anchor=_.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(w,E)=>E.toUpperCase())}ngOnInit(){}}return s.\u0275fac=function(_){return new(_||s)},s.\u0275cmp=c.Xpm({type:s,selectors:[["app-anchor-heading"]],inputs:{heading:"heading"},decls:4,vars:3,consts:[["routerLink",".",3,"name","fragment"],[1,"card-header"],["icon","link",1,"ml-2"]],template:function(_,w){1&_&&(c.TgZ(0,"a",0)(1,"h4",1),c._uU(2),c._UZ(3,"fa-icon",2),c.qZA()()),2&_&&(c.s9C("fragment",w.anchor),c.Q6J("name",w.anchor),c.xp6(2),c.Oqu(w.heading))},directives:[v.yS,o.BN],styles:["h4[_ngcontent-%COMP%]{cursor:pointer;display:inline-block}h4[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{opacity:0}h4[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%]{-webkit-animation:fadeIn .15s linear;animation:fadeIn .15s linear;opacity:1}"]}),s})()},5509:(O,I,r)=>{"use strict";r.d(I,{L:()=>_}),r(5083);var o=r(5e3),x=r(3838),s=r(2309),y=r(9444);let _=(()=>{class w{constructor(p){this.utilities=p,this._scssImports="",this._type="styles",this.activeSnippet="default"}get type(){return this._type}set type(p){this._type=p}get component(){return this._component}set component(p){this._component=p}get scssImports(){return"styles"===this.type?this._scssImports:""}set components(p){!p||(this._component=p[0],this._scssImports=p.reduce((m,S)=>m+`@import '~@sebgroup/bootstrap/scss/styles/${S.fileName}'; /* styles for ${S.comment} */\n`,"@import '~@sebgroup/bootstrap/scss/core'; /* variables, mixins and functions (no added size) */\n"))}showSnippet(p,m){p.preventDefault(),this.activeSnippet=m,"minimal"===m?this.updateSnippet(this.scssImports):this.updateSnippet()}updateSnippet(p="@import '~@sebgroup/bootstrap/scss/bootstrap';"){this.snip=p,this.importContent=`<pre class="language-css"><code class="language-css">${Prism.highlight(p.trim(),Prism.languages.css)}</code></pre>`}copyToClipboard(p){this.utilities.copyToClipboard(p)}ngOnInit(){this.updateSnippet()}}return w.\u0275fac=function(p){return new(p||w)(o.Y36(x.e))},w.\u0275cmp=o.Xpm({type:w,selectors:[["app-include"]],inputs:{type:"type",components:"components"},decls:19,vars:9,consts:[[1,"card","mb-4","mx-n3","mx-sm-0"],[3,"heading"],[1,"card-body"],[1,"btn","btn-link","position-absolute",3,"click"],["icon","copy"],[1,"nav","nav-tabs","mb-0"],[1,"nav-item"],["href","#",1,"nav-link",3,"click"],[3,"innerHTML"]],template:function(p,m){1&p&&(o.TgZ(0,"div",0),o._UZ(1,"app-anchor-heading",1),o.TgZ(2,"div",2)(3,"p"),o._uU(4),o.TgZ(5,"code"),o._uU(6,"'~@sebgroup/bootstrap/scss/bootstrap'"),o.qZA(),o._uU(7," in your project (import to styles.scss if you're using angular-cli), to optimize your app you should however only import the parts you need (see import with minimal dependencies below)."),o.qZA(),o.TgZ(8,"button",3),o.NdJ("click",function(){return m.copyToClipboard(m.snip)}),o._uU(9,"Copy "),o._UZ(10,"fa-icon",4),o.qZA(),o.TgZ(11,"ul",5)(12,"li",6)(13,"a",7),o.NdJ("click",function(h){return m.showSnippet(h,"default")}),o._uU(14,"All"),o.qZA()(),o.TgZ(15,"li",6)(16,"a",7),o.NdJ("click",function(h){return m.showSnippet(h,"minimal")}),o._uU(17,"Minimal dependencies"),o.qZA()()(),o._UZ(18,"div",8),o.qZA()()),2&p&&(o.xp6(1),o.MGl("heading","Include ",m.component.title," in your project"),o.xp6(3),o.lnq("The ",m.component.fileName," ",m.type," ","styles"===m.type?"are":"is"," included by default if you import "),o.xp6(9),o.ekj("active","default"===m.activeSnippet),o.xp6(3),o.ekj("active","minimal"===m.activeSnippet),o.xp6(2),o.Q6J("innerHTML",m.importContent,o.oJD))},directives:[s.M,y.BN],styles:[".btn.btn-link.position-absolute[_ngcontent-%COMP%]{right:1rem}"],changeDetection:0}),w})()},5083:O=>{var r=function(c){var v=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,x={},s={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof y?new y(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++o}),t.__id},clone:function t(e,n){var a,i;switch(n=n||{},s.util.type(e)){case"Object":if(i=s.util.objId(e),n[i])return n[i];for(var l in n[i]=a={},e)e.hasOwnProperty(l)&&(a[l]=t(e[l],n));return a;case"Array":return i=s.util.objId(e),n[i]?n[i]:(n[i]=a=[],e.forEach(function(g,u){a[u]=t(g,n)}),a);default:return e}},getLanguage:function(t){for(;t;){var e=v.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(v,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var a="no-"+e;t;){var i=t.classList;if(i.contains(e))return!0;if(i.contains(a))return!1;t=t.parentElement}return!!n}},languages:{plain:x,plaintext:x,text:x,txt:x,extend:function(t,e){var n=s.util.clone(s.languages[t]);for(var a in e)n[a]=e[a];return n},insertBefore:function(t,e,n,a){var i=(a=a||s.languages)[t],l={};for(var g in i)if(i.hasOwnProperty(g)){if(g==e)for(var u in n)n.hasOwnProperty(u)&&(l[u]=n[u]);n.hasOwnProperty(g)||(l[g]=i[g])}var f=a[t];return a[t]=l,s.languages.DFS(s.languages,function(A,T){T===f&&A!=t&&(this[A]=l)}),l},DFS:function t(e,n,a,i){i=i||{};var l=s.util.objId;for(var g in e)if(e.hasOwnProperty(g)){n.call(e,g,e[g],a||g);var u=e[g],f=s.util.type(u);"Object"!==f||i[l(u)]?"Array"===f&&!i[l(u)]&&(i[l(u)]=!0,t(u,n,g,i)):(i[l(u)]=!0,t(u,n,null,i))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var a={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),s.hooks.run("before-all-elements-highlight",a);for(var l,i=0;l=a.elements[i++];)s.highlightElement(l,!0===e,a.callback)},highlightElement:function(t,e,n){var a=s.util.getLanguage(t),i=s.languages[a];s.util.setLanguage(t,a);var l=t.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&s.util.setLanguage(l,a);var u={element:t,language:a,grammar:i,code:t.textContent};function f(T){u.highlightedCode=T,s.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,s.hooks.run("after-highlight",u),s.hooks.run("complete",u),n&&n.call(u.element)}if(s.hooks.run("before-sanity-check",u),(l=u.element.parentElement)&&"pre"===l.nodeName.toLowerCase()&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!u.code)return s.hooks.run("complete",u),void(n&&n.call(u.element));if(s.hooks.run("before-highlight",u),u.grammar)if(e&&c.Worker){var A=new Worker(s.filename);A.onmessage=function(T){f(T.data)},A.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else f(s.highlight(u.code,u.grammar,u.language));else f(s.util.encode(u.code))},highlight:function(t,e,n){var a={code:t,grammar:e,language:n};if(s.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=s.tokenize(a.code,a.grammar),s.hooks.run("after-tokenize",a),y.stringify(s.util.encode(a.tokens),a.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var a in n)e[a]=n[a];delete e.rest}var i=new E;return p(i,i.head,t),w(t,i,e,i.head,0),function S(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}(i)},hooks:{all:{},add:function(t,e){var n=s.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=s.hooks.all[t];if(n&&n.length)for(var i,a=0;i=n[a++];)i(e)}},Token:y};function y(t,e,n,a){this.type=t,this.content=e,this.alias=n,this.length=0|(a||"").length}function _(t,e,n,a){t.lastIndex=e;var i=t.exec(n);if(i&&a&&i[1]){var l=i[1].length;i.index+=l,i[0]=i[0].slice(l)}return i}function w(t,e,n,a,i,l){for(var g in n)if(n.hasOwnProperty(g)&&n[g]){var u=n[g];u=Array.isArray(u)?u:[u];for(var f=0;f<u.length;++f){if(l&&l.cause==g+","+f)return;var A=u[f],T=A.inside,B=!!A.lookbehind,H=!!A.greedy,q=A.alias;if(H&&!A.pattern.global){var K=A.pattern.toString().match(/[imsuy]*$/)[0];A.pattern=RegExp(A.pattern.source,K+"g")}for(var W=A.pattern||A,F=a.next,C=i;F!==e.tail&&!(l&&C>=l.reach);C+=F.value.length,F=F.next){var M=F.value;if(e.length>t.length)return;if(!(M instanceof y)){var k,D=1;if(H){if(!(k=_(W,C,t,B))||k.index>=t.length)break;var L=k.index,J=k.index+k[0].length,$=C;for($+=F.value.length;L>=$;)$+=(F=F.next).value.length;if(C=$-=F.value.length,F.value instanceof y)continue;for(var P=F;P!==e.tail&&($<J||"string"==typeof P.value);P=P.next)D++,$+=P.value.length;D--,M=t.slice(C,$),k.index-=C}else if(!(k=_(W,0,M,B)))continue;var U=k[0],R=M.slice(0,L=k.index),G=M.slice(L+U.length),z=C+M.length;l&&z>l.reach&&(l.reach=z);var Z=F.prev;if(R&&(Z=p(e,Z,R),C+=R.length),m(e,Z,D),F=p(e,Z,new y(g,T?s.tokenize(U,T):U,q,U)),G&&p(e,F,G),D>1){var j={cause:g+","+f,reach:z};w(t,e,n,F.prev,C,j),l&&j.reach>l.reach&&(l.reach=j.reach)}}}}}}function E(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function p(t,e,n){var a=e.next,i={value:n,prev:e,next:a};return e.next=i,a.prev=i,t.length++,i}function m(t,e,n){for(var a=e.next,i=0;i<n&&a!==t.tail;i++)a=a.next;e.next=a,a.prev=e,t.length-=i}if(c.Prism=s,y.stringify=function t(e,n){if("string"==typeof e)return e;if(Array.isArray(e)){var a="";return e.forEach(function(f){a+=t(f,n)}),a}var i={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),s.hooks.run("wrap",i);var g="";for(var u in i.attributes)g+=" "+u+'="'+(i.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+g+">"+i.content+"</"+i.tag+">"},!c.document)return c.addEventListener&&(s.disableWorkerMessageHandler||c.addEventListener("message",function(t){var e=JSON.parse(t.data),n=e.language,i=e.immediateClose;c.postMessage(s.highlight(e.code,s.languages[n],n)),i&&c.close()},!1)),s;var h=s.util.currentScript();function d(){s.manual||s.highlightAll()}if(h&&(s.filename=h.src,h.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var b=document.readyState;"loading"===b||"interactive"===b&&h&&h.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return s}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});O.exports&&(O.exports=r),"undefined"!=typeof global&&(global.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(c){"entity"===c.type&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(v,o){var x={};x["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[o]},x.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:x}};s["language-"+o]={pattern:/[\s\S]+/,inside:r.languages[o]};var y={};y[v]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return v}),"i"),lookbehind:!0,greedy:!0,inside:s},r.languages.insertBefore("markup","cdata",y)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(c,v){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+c+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[v,"language-"+v],inside:r.languages[v]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(c){var v=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+v.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+v.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+v.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:v,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var o=c.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(void 0!==r&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var x={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",y="loading",_="loaded",E="pre[data-src]:not(["+s+'="'+_+'"]):not(['+s+'="'+y+'"])';r.hooks.add("before-highlightall",function(h){h.selector+=", "+E}),r.hooks.add("before-sanity-check",function(h){var d=h.element;if(d.matches(E)){h.code="",d.setAttribute(s,y);var b=d.appendChild(document.createElement("CODE"));b.textContent="Loading\u2026";var t=d.getAttribute("data-src"),e=h.language;if("none"===e){var n=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=x[n]||n}r.util.setLanguage(b,e),r.util.setLanguage(d,e);var a=r.plugins.autoloader;a&&a.loadLanguages(e),function p(h,d,b){var t=new XMLHttpRequest;t.open("GET",h,!0),t.onreadystatechange=function(){4==t.readyState&&(t.status<400&&t.responseText?d(t.responseText):b(t.status>=400?function(h,d){return"\u2716 Error "+h+" while fetching file: "+d}(t.status,t.statusText):"\u2716 Error: File does not exist or is empty"))},t.send(null)}(t,function(i){d.setAttribute(s,_);var l=function m(h){var d=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(h||"");if(d){var b=Number(d[1]),e=d[3];return d[2]?e?[b,Number(e)]:[b,void 0]:[b,b]}}(d.getAttribute("data-range"));if(l){var g=i.split(/\r\n?|\n/g),u=l[0],f=null==l[1]?g.length:l[1];u<0&&(u+=g.length),u=Math.max(0,Math.min(u-1,g.length)),f<0&&(f+=g.length),f=Math.max(0,Math.min(f,g.length)),i=g.slice(u,f).join("\n"),d.hasAttribute("data-start")||d.setAttribute("data-start",String(u+1))}b.textContent=i,r.highlightElement(b)},function(i){d.setAttribute(s,"failed"),b.textContent=i})}}),r.plugins.fileHighlight={highlight:function(d){for(var e,b=(d||document).querySelectorAll(E),t=0;e=b[t++];)r.highlightElement(e)}};var S=!1;r.fileHighlight=function(){S||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),S=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}}()}}]);