(this.webpackJsonprunner=this.webpackJsonprunner||[]).push([[7],{131:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(13),i=function(e){return{elementType:e.elType,elementConfig:Object(n.a)({},e.elConfig),value:e.value?e.value:"",validation:Object(n.a)({},e.validation),valid:!!e.valid&&e.valid,touched:!!e.touched&&e.touched}}},132:function(e,t,a){"use strict";var n=a(13),i=a(0),r=a(133),l=a.n(r);t.a=function(e){var t=null,a=[];switch(e.addClasses&&e.addClasses.split(" ").forEach((function(e){switch(e){case"input_fieldBlackBorder":a.push(l.a.Input_FieldBlackBorder);break;case"input_NotValid":a.push(l.a.Input_NotValid)}})),e.elementType){case"textarea":t=Object(i.jsx)("textarea",Object(n.a)(Object(n.a)({className:l.a.join(" "),value:e.value},e.elementConfig),{},{onChange:e.changed}));break;case"select":t=Object(i.jsx)("select",{className:l.a.InputElement,value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(i.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(i.jsx)("input",Object(n.a)({className:l.a.Input_Field+" "+a.join(" "),value:e.value,onChange:e.changed,placeholder:e.placeholder},e.elementConfig))}return t}},133:function(e,t,a){e.exports={Input_Field:"Input_Input_Field__1tBa-",Input_FieldBlackBorder:"Input_Input_FieldBlackBorder__15vnl",Input_NotValid:"Input_Input_NotValid__1vi55"}},173:function(e,t,a){e.exports={Auth:"Auth_Auth__3M8mF",Auth__Content:"Auth_Auth__Content__2IRc8",Auth__Signup:"Auth_Auth__Signup__2BvBm",Auth__LoginFormWrapper:"Auth_Auth__LoginFormWrapper__WLrFw",Auth__Content_Separator:"Auth_Auth__Content_Separator__1IOLS"}},174:function(e,t,a){e.exports={Auth__Login__BtnWrapper:"Login_Auth__Login__BtnWrapper__350aq"}},184:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(49),r=a(1),l=a(11),u=a(12),c=a(5),o=a(9),d=a(173),s=a.n(d),p=a(48),h=a(25),_=a(131),j=a(174),b=a.n(j),f=a(23),m=a(132),g=function(e){return e.InputsDataArr.map((function(t){return Object(n.jsx)(m.a,{addClasses:"input_fieldBlackBorder ".concat(t.config.touched?t.config.valid?"":"input_NotValid":""),elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,valueType:t.id,changed:function(a){return e.inputChangedHandler(a,t.id,e.formData,e.setFormData)}},t.id)}))},v=function(e){var t=Object(r.useState)({email:Object(_.a)({eltype:"input",elConfig:{type:"email",placeholder:"Email"},validation:{required:!0,isEmail:!0}}),password:Object(_.a)({eltype:"input",elConfig:{type:"password",placeholder:"Password"},validation:{required:!0,minLength:6}})}),a=Object(h.a)(t,2),i=a[0],l=a[1],u=[];for(var c in i)u.push({id:c,config:i[c]});return Object(n.jsxs)("form",{onSubmit:function(t){return e.submitHandler(t,i)},children:[Object(n.jsx)("h2",{children:"LOGIN"}),Object(n.jsx)(g,{InputsDataArr:u,inputChangedHandler:e.inputChangedHandler,formData:i,setFormData:l}),Object(n.jsxs)("div",{className:b.a.Auth__Login__BtnWrapper,children:[Object(n.jsx)(f.a,{addClass:"Button--Black",children:"Sign in"}),Object(n.jsx)("span",{children:"Forgot password?"})]})]})},O=function(e){var t=Object(r.useState)({firstName:Object(_.a)({eltype:"input",elConfig:{type:"text",placeholder:"First Name"}}),lastName:Object(_.a)({eltype:"input",elConfig:{type:"text",placeholder:"Last Name"}}),email:Object(_.a)({eltype:"input",elConfig:{type:"email",placeholder:"Email"},validation:{required:!0,isEmail:!0}}),password:Object(_.a)({eltype:"input",elConfig:{type:"password",placeholder:"Password"},validation:{required:!0,minLength:6}})}),a=Object(h.a)(t,2),i=a[0],l=a[1],u=[];for(var c in i)u.push({id:c,config:i[c]});return Object(n.jsxs)("form",{onSubmit:function(t){return e.submitHandler(t,i,!0)},children:[Object(n.jsx)("h2",{children:"SIGN UP / CREATE NEW ACCOUNT"}),Object(n.jsx)(g,{InputsDataArr:u,inputChangedHandler:e.inputChangedHandler,formData:i,setFormData:l}),Object(n.jsx)(f.a,{addClass:"Button--Black",children:"Create Account"})]})};t.default=function(e){var t=Object(l.b)(),a=Object(l.c)((function(e){return e.auth.authRedirectPath})),r=Object(l.c)((function(e){return null!==e.auth.token})),d=Object(l.c)((function(e){return e.auth.loading})),h=function(e,t,a,n){var r=Object(o.b)(a[t],{value:e.target.value,valid:Object(o.a)(e.target.value,a[t].validation),touched:!0});n(Object(o.b)(a,Object(i.a)({},t,r)))},_=function(e,a,n){e.preventDefault(),t(c.h(a,n||!1))},j=null;return r&&(j=Object(n.jsx)(u.a,{to:a})),Object(n.jsxs)("div",{className:s.a.Auth+" Auth",children:[j,d?Object(n.jsx)(p.a,{}):"",Object(n.jsxs)("div",{className:s.a.Auth__Content,children:[Object(n.jsx)("div",{className:s.a.Auth__LoginFormWrapper,children:Object(n.jsx)(v,{inputChangedHandler:h,submitHandler:_})}),Object(n.jsx)("div",{className:s.a.Auth__Content_Separator,children:Object(n.jsx)("span",{children:"OR"})}),Object(n.jsx)("div",{className:s.a.Auth__Signup,children:Object(n.jsx)(O,{inputChangedHandler:h,submitHandler:_})})]})]})}}}]);
//# sourceMappingURL=7.2b7e77a5.chunk.js.map