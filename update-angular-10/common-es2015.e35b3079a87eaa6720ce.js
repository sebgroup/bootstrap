(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{BlS4:function(n,t,e){"use strict";e.r(t),e.d(t,"AnimationsModule",(function(){return m}));var a=e("ofXK"),i=e("xFhg"),o=e("PCNd"),s=e("fXoL");let m=(()=>{class n{}return n.\u0275mod=s.Ib({type:n}),n.\u0275inj=s.Hb({factory:function(t){return new(t||n)},imports:[[a.c,i.AnimationsRoutingModule,o.a]]}),n})()},HQzN:function(n,t,e){"use strict";e.r(t),e.d(t,"AnimationsComponent",(function(){return c}));var a=e("fXoL"),i=e("cjcD"),o=e("cPb8"),s=e("ofXK");function m(n,t){if(1&n&&(a.Pb(0,"tr"),a.Pb(1,"td"),a.Cc(2),a.fc(3,"titlecase"),a.Ob(),a.Pb(4,"td"),a.Pb(5,"code"),a.Cc(6),a.Ob(),a.Ob(),a.Ob()),2&n){const n=t.$implicit;a.xb(2),a.Dc(a.gc(3,2,n.name)),a.xb(4),a.Ec("@include add-transition('",n.importName,"');")}}function r(n,t){if(1&n&&(a.Nb(0),a.Pb(1,"div",10),a.Pb(2,"button",11),a.Cc(3),a.Ob(),a.Pb(4,"div",12),a.Lb(5,"div"),a.Ob(),a.Ob(),a.Mb()),2&n){const n=t.$implicit;a.xb(3),a.Dc(n.name),a.xb(2),a.Ab("bg-primary animate-example animate-",n.class,"")}}let c=(()=>{class n{constructor(){this.components=[{title:"animations",fileName:"animations",comment:"animations"}],this.animations=[{name:"fade in",class:"fade-in",importName:"fadeIn"},{name:"fade in up",class:"fade-in-up",importName:"fadeInUp"},{name:"fade in down",class:"fade-in-down",importName:"fadeInDown"},{name:"slide in left",class:"slide-in-left",importName:"slideInLeft"},{name:"slide in right",class:"slide-in-right",importName:"slideInRight"},{name:"slide in down",class:"slide-in-down",importName:"slideInDown"},{name:"slide in up",class:"slide-in-up",importName:"slideInUp"},{name:"expand x",class:"expand-x",importName:"expandX"},{name:"expand y",class:"expand-y",importName:"expandY"},{name:"rotate 180",class:"rotate-180",importName:"rotate180"}]}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.Eb({type:n,selectors:[["app-animations"]],decls:31,vars:5,consts:[["name","buttons"],[1,"my-3"],[3,"components"],[1,"card","mx-n3","mx-sm-0","mb-4"],["heading","Animations"],[1,"card-body"],[1,"mt-3"],[1,"table"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col-12","col-sm-6","col-md-3"],[1,"btn","btn-sm","btn-dark"],[1,"animation-wrapper","mt-3"]],template:function(n,t){1&n&&(a.Pb(0,"a",0),a.Pb(1,"h2",1),a.Cc(2,"Animations"),a.Ob(),a.Ob(),a.Lb(3,"app-include",2),a.Pb(4,"div",3),a.Lb(5,"app-anchor-heading",4),a.Pb(6,"div",5),a.Pb(7,"p"),a.Cc(8,"Once the animations mixin has been imported you can add animations like this in your scss file:"),a.Lb(9,"br"),a.Pb(10,"code"),a.Cc(11,"@include add-transition('fadeIn');"),a.Ob(),a.Ob(),a.Cc(12," E.g."),a.Lb(13,"br"),a.Pb(14,"code"),a.Cc(15),a.Ob(),a.Pb(16,"p",6),a.Cc(17,"Below is a list of animations currently available."),a.Ob(),a.Pb(18,"table",7),a.Pb(19,"tr"),a.Pb(20,"th"),a.Cc(21,"Animation"),a.Ob(),a.Pb(22,"th"),a.Cc(23,"Usage"),a.Ob(),a.Ob(),a.Ac(24,m,7,4,"tr",8),a.Ob(),a.Pb(25,"h4"),a.Cc(26,"Demo"),a.Ob(),a.Pb(27,"p"),a.Cc(28,'Hover "buttons" to show animation.'),a.Ob(),a.Pb(29,"div",9),a.Ac(30,r,6,4,"ng-container",8),a.Ob(),a.Ob(),a.Ob()),2&n&&(a.xb(3),a.jc("components",t.components),a.xb(12),a.Fc(" .fade-in-element ","{"," @include add-transition('fadeIn'); ","}"," "),a.xb(9),a.jc("ngForOf",t.animations),a.xb(6),a.jc("ngForOf",t.animations))},directives:[i.a,o.a,s.l],pipes:[s.r],styles:[".animation-wrapper[_ngcontent-%COMP%]{height:120px;pointer-events:none}.btn[_ngcontent-%COMP%]:hover + .animation-wrapper[_ngcontent-%COMP%] > .animate-example[_ngcontent-%COMP%]{width:100px;height:100px}.btn[_ngcontent-%COMP%]:hover + .animation-wrapper[_ngcontent-%COMP%] > .animate-example.animate-fade-in[_ngcontent-%COMP%]{-webkit-animation:fadeIn .15s linear;animation:fadeIn .15s linear}.btn[_ngcontent-%COMP%]:hover + .animation-wrapper[_ngcontent-%COMP%] > .animate-example.animate-fade-in-up[_ngcontent-%COMP%]{-webkit-animation:fadeInUp .15s linear;animation:fadeInUp .15s linear}.btn[_ngcontent-%COMP%]:hover + .animation-wrapper[_ngcontent-%COMP%] > .animate-example.animate-fade-in-down[_ngcontent-%COMP%]{-webkit-animation:fadeInDown .15s linear;animation:fadeInDown .15s linear}.btn[_ngcontent-%COMP%]:hover + .animation-wrapper[_ngcontent-%COMP%] > .animate-example.animate-slide-in-left[_ngcontent-%COMP%]{-webkit-animation:slideInLeft .4s ease-in-out;animation:slideInLeft .4s ease-in-out}.btn[_ngcontent-%COMP%]:hover + .animation-wrapper[_ngcontent-%COMP%] > .animate-example.animate-slide-in-right[_ngcontent-%COMP%]{-webkit-animation:slideInRight .4s ease-in-out;animation:slideInRight .4s ease-in-out}.btn[_ngcontent-%COMP%]:hover + .animation-wrapper[_ngcontent-%COMP%] > .animate-example.animate-slide-in-up[_ngcontent-%COMP%]{-webkit-animation:slideInUp .4s ease-in-out;animation:slideInUp .4s ease-in-out}.btn[_ngcontent-%COMP%]:hover + .animation-wrapper[_ngcontent-%COMP%] > .animate-example.animate-slide-in-down[_ngcontent-%COMP%]{-webkit-animation:slideInDown .4s ease-in-out;animation:slideInDown .4s ease-in-out}.btn[_ngcontent-%COMP%]:hover + .animation-wrapper[_ngcontent-%COMP%] > .animate-example.animate-expand-x[_ngcontent-%COMP%]{-webkit-animation:expandX .15s linear;animation:expandX .15s linear}.btn[_ngcontent-%COMP%]:hover + .animation-wrapper[_ngcontent-%COMP%] > .animate-example.animate-expand-y[_ngcontent-%COMP%]{-webkit-animation:expandY .15s linear;animation:expandY .15s linear}.btn[_ngcontent-%COMP%]:hover + .animation-wrapper[_ngcontent-%COMP%] > .animate-example.animate-rotate-180[_ngcontent-%COMP%]{-webkit-animation:rotate180 .4s ease-in-out;animation:rotate180 .4s ease-in-out}"]}),n})()},MCSo:function(n,t,e){"use strict";e.r(t),e.d(t,"FormsModule",(function(){return m}));var a=e("ofXK"),i=e("pD6f"),o=e("PCNd"),s=e("fXoL");let m=(()=>{class n{}return n.\u0275mod=s.Ib({type:n}),n.\u0275inj=s.Hb({factory:function(t){return new(t||n)},imports:[[a.c,i.FormsRoutingModule,o.a]]}),n})()},pD6f:function(n,t,e){"use strict";e.r(t),e.d(t,"FormsRoutingModule",(function(){return m}));var a=e("tyNb"),i=e("zyGK"),o=e("fXoL");const s=[{path:"",component:i.FormsComponent}];let m=(()=>{class n{}return n.\u0275mod=o.Ib({type:n}),n.\u0275inj=o.Hb({factory:function(t){return new(t||n)},imports:[[a.e.forChild(s)],a.e]}),n})()},xFhg:function(n,t,e){"use strict";e.r(t),e.d(t,"AnimationsRoutingModule",(function(){return m}));var a=e("tyNb"),i=e("HQzN"),o=e("fXoL");const s=[{path:"",component:i.AnimationsComponent}];let m=(()=>{class n{}return n.\u0275mod=o.Ib({type:n}),n.\u0275inj=o.Hb({factory:function(t){return new(t||n)},imports:[[a.e.forChild(s)],a.e]}),n})()},zyGK:function(n,t,e){"use strict";e.r(t),e.d(t,"FormsComponent",(function(){return s}));var a=e("fXoL"),i=e("cjcD"),o=e("cPb8");let s=(()=>{class n{constructor(){this.components=[{title:"forms",fileName:"forms",comment:"forms"}]}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=a.Eb({type:n,selectors:[["app-forms"]],decls:13,vars:1,consts:[["name","buttons"],[1,"my-3"],[3,"components"],[1,"card","mx-n3","mx-sm-0","mb-4"],["heading","Forms"],[1,"card-body"],["href","https://getbootstrap.com/docs/4.0/components/forms/#overview","target","_blank"]],template:function(n,t){1&n&&(a.Pb(0,"a",0),a.Pb(1,"h2",1),a.Cc(2,"Forms"),a.Ob(),a.Ob(),a.Lb(3,"app-include",2),a.Pb(4,"div",3),a.Lb(5,"app-anchor-heading",4),a.Pb(6,"div",5),a.Pb(7,"p"),a.Cc(8,"Below you'll find some examples of forms and different form elements, check "),a.Pb(9,"a",6),a.Cc(10,"bootstrap docs"),a.Ob(),a.Cc(11," for more info and examples."),a.Ob(),a.Cc(12," Coming soon! "),a.Ob(),a.Ob()),2&n&&(a.xb(3),a.jc("components",t.components))},directives:[i.a,o.a],styles:[""]}),n})()}}]);