(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{30:function(e,t,a){e.exports={error:"Password_error__C6x2a","not-valid":"Password_not-valid__mLOJP",formGroup:"Password_formGroup__C86_J",iconHolder:"Password_iconHolder__2t-sj"}},33:function(e,t,a){e.exports={error:"Email_error__3RtPK","not-valid":"Email_not-valid__2L9F4",formGroup:"Email_formGroup__2RZTR"}},34:function(e,t,a){e.exports={error:"Input_error__3F_V1","not-valid":"Input_not-valid__1AmF8",formGroup:"Input_formGroup__1BsXv"}},40:function(e,t,a){e.exports={row:"Table_row__2wSRU",topCtrl:"Table_topCtrl__3mE83"}},49:function(e,t,a){e.exports={header:"Header_header__ki6NN"}},55:function(e,t,a){e.exports=a.p+"static/media/login-bg.fe5e02e8.jpg"},61:function(e,t,a){e.exports=a(89)},66:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=a(11),s=a(19),i=a(23),u=r.a.createContext({isLoggedIn:!1}),m=u.Provider;u.Consumer,a(49);a(66);var d=function(){return r.a.createElement("div",null)},p=a(8),f=a(6),b=a(98),h=a(99),v=a(100),E=a(30),g=a.n(E),y=a(51),O=a.n(y),w=a(52),x=a.n(w);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=function(e){e.onPasswordEntered;var t=e.visibilityControl,a=e.label,l=e.isInvalid,c=e.minLength,s=e.onKeyUp,i=e.className,u=(e.type,Object(f.a)(e,["onPasswordEntered","visibilityControl","label","isInvalid","minLength","onKeyUp","className","type"]));c=c||8,t="undefined"===typeof t||t;var m=Object(n.useState)({isInvalid:l||!1,valid:"valid",errorText:"",showpassword:!1,type:"password"}),d=Object(o.a)(m,2),p=d[0],E=d[1];return r.a.createElement(b.a,{className:g.a.formGroup},r.a.createElement(h.a,{for:"exampleEmail"},a||"Password"),r.a.createElement(v.a,Object.assign({className:(i||"")+" "+g.a[p.valid]},u,{onKeyUp:function(e){var t=e.target,a=p.isInvalid,n=p.valid,r=p.errorText,l=t.value;!l||l.length<c?(a=!0,n="not-valid",r="password too short!"):(a=!1,n="valid"),E((function(e){return N({},e,{isInvalid:a,valid:n,errorText:r})})),s&&s({target:t,valid:!a})},type:p.type})),t?r.a.createElement("div",{className:g.a.iconHolder,"aria-label":"toggle password visibility",onClick:function(){E((function(e){return N({},e,{showpassword:!p.showpassword,type:p.showpassword?"password":"text"})}))}},p.showpassword?r.a.createElement(x.a,null):r.a.createElement(O.a,null)):null,"valid"===p.valid?null:r.a.createElement("span",{className:g.a.error},p.errorText))},k=a(33),_=a.n(k);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var D=/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;var S=function(e){e.onPasswordEntered;var t=e.label,a=e.valid,l=e.minLength,c=e.onKeyUp,s=e.className,i=(e.type,Object(f.a)(e,["onPasswordEntered","label","valid","minLength","onKeyUp","className","type"]));l=l||6;var u=Object(n.useState)({valid:a||!0,validClass:"valid",errorText:""}),m=Object(o.a)(u,2),d=m[0],E=m[1];return r.a.createElement(b.a,{className:_.a.formGroup},r.a.createElement(h.a,{for:"exampleEmail"},t||"Email"),r.a.createElement(v.a,Object.assign({className:(s||"")+" "+_.a[d.validClass]},i,{onKeyUp:function(e){var t=e.target,a=d.valid,n=d.validClass,r=d.errorText,l=t.value;l&&D.test(l)?(a=!0,n="valid"):(a=!1,n="not-valid",r="Invalid email!"),E((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{valid:a,validClass:n,errorText:r})})),c&&c({target:t,valid:d.valid})},type:"email"})),"valid"===d.validClass?null:r.a.createElement("span",{className:_.a.error},d.errorText))},T=a(34),L=a.n(T);var I=function(e){var t=e.id,a=e.validInput,n=e.formGroupClass,l=e.label,c=e.errorText,o=e.required,s=e.className,i=Object(f.a)(e,["id","validInput","formGroupClass","label","errorText","required","className"]);a="undefined"===typeof a||a,c=o?"".concat((l||"").toLowerCase()," is required!"):c;var u=a?"valid":"not-valid";return r.a.createElement(b.a,{className:L.a.formGroup+" "+(n||"")},r.a.createElement(h.a,{for:"".concat(t)},l),r.a.createElement(v.a,Object.assign({id:t},i,{className:(s||"")+" "+L.a[u]})),a?null:r.a.createElement("span",{className:L.a.error},c))};function M(e){var t=e.width,a=e.height;return r.a.createElement("svg",{className:"lds-default",width:t||"100%",height:a||"100%",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},r.a.createElement("circle",{cx:"70",cy:"50",fill:"undefined",r:"3"},r.a.createElement("animate",{attributeName:"r",values:"3;3;5;3;3",times:"0;0.1;0.2;0.3;1",dur:"1s",repeatCount:"indefinite",begin:"-0.917s"}),r.a.createElement("animate",{attributeName:"fill",values:"#e6e6e6;#e6e6e6;#ffffff;#e6e6e6;#e6e6e6",repeatCount:"indefinite",times:"0;0.1;0.2;0.3;1",dur:"1s",begin:"-0.917s"})),r.a.createElement("circle",{cx:"67.321",cy:"60",fill:"undefined",r:"3"},r.a.createElement("animate",{attributeName:"r",values:"3;3;5;3;3",times:"0;0.1;0.2;0.3;1",dur:"1s",repeatCount:"indefinite",begin:"-0.833s"}),r.a.createElement("animate",{attributeName:"fill",values:"#e6e6e6;#e6e6e6;#ffffff;#e6e6e6;#e6e6e6",repeatCount:"indefinite",times:"0;0.1;0.2;0.3;1",dur:"1s",begin:"-0.833s"})),r.a.createElement("circle",{cx:"60",cy:"67.321",fill:"undefined",r:"3.27025"},r.a.createElement("animate",{attributeName:"r",values:"3;3;5;3;3",times:"0;0.1;0.2;0.3;1",dur:"1s",repeatCount:"indefinite",begin:"-0.75s"}),r.a.createElement("animate",{attributeName:"fill",values:"#e6e6e6;#e6e6e6;#ffffff;#e6e6e6;#e6e6e6",repeatCount:"indefinite",times:"0;0.1;0.2;0.3;1",dur:"1s",begin:"-0.75s"})),r.a.createElement("circle",{cx:"50",cy:"70",fill:"undefined",r:"3.93425"},r.a.createElement("animate",{attributeName:"r",values:"3;3;5;3;3",times:"0;0.1;0.2;0.3;1",dur:"1s",repeatCount:"indefinite",begin:"-0.667s"}),r.a.createElement("animate",{attributeName:"fill",values:"#e6e6e6;#e6e6e6;#ffffff;#e6e6e6;#e6e6e6",repeatCount:"indefinite",times:"0;0.1;0.2;0.3;1",dur:"1s",begin:"-0.667s"})),r.a.createElement("circle",{cx:"40",cy:"67.321",fill:"undefined",r:"4.60625"},r.a.createElement("animate",{attributeName:"r",values:"3;3;5;3;3",times:"0;0.1;0.2;0.3;1",dur:"1s",repeatCount:"indefinite",begin:"-0.583s"}),r.a.createElement("animate",{attributeName:"fill",values:"#e6e6e6;#e6e6e6;#ffffff;#e6e6e6;#e6e6e6",repeatCount:"indefinite",times:"0;0.1;0.2;0.3;1",dur:"1s",begin:"-0.583s"})),r.a.createElement("circle",{cx:"32.679",cy:"60",fill:"undefined",r:"4.72975"},r.a.createElement("animate",{attributeName:"r",values:"3;3;5;3;3",times:"0;0.1;0.2;0.3;1",dur:"1s",repeatCount:"indefinite",begin:"-0.5s"}),r.a.createElement("animate",{attributeName:"fill",values:"#e6e6e6;#e6e6e6;#ffffff;#e6e6e6;#e6e6e6",repeatCount:"indefinite",times:"0;0.1;0.2;0.3;1",dur:"1s",begin:"-0.5s"})),r.a.createElement("circle",{cx:"30",cy:"50",fill:"undefined",r:"4.06575"},r.a.createElement("animate",{attributeName:"r",values:"3;3;5;3;3",times:"0;0.1;0.2;0.3;1",dur:"1s",repeatCount:"indefinite",begin:"-0.417s"}),r.a.createElement("animate",{attributeName:"fill",values:"#e6e6e6;#e6e6e6;#ffffff;#e6e6e6;#e6e6e6",repeatCount:"indefinite",times:"0;0.1;0.2;0.3;1",dur:"1s",begin:"-0.417s"})),r.a.createElement("circle",{cx:"32.679",cy:"40",fill:"undefined",r:"3.39375"},r.a.createElement("animate",{attributeName:"r",values:"3;3;5;3;3",times:"0;0.1;0.2;0.3;1",dur:"1s",repeatCount:"indefinite",begin:"-0.333s"}),r.a.createElement("animate",{attributeName:"fill",values:"#e6e6e6;#e6e6e6;#ffffff;#e6e6e6;#e6e6e6",repeatCount:"indefinite",times:"0;0.1;0.2;0.3;1",dur:"1s",begin:"-0.333s"})),r.a.createElement("circle",{cx:"40",cy:"32.679",fill:"undefined",r:"3"},r.a.createElement("animate",{attributeName:"r",values:"3;3;5;3;3",times:"0;0.1;0.2;0.3;1",dur:"1s",repeatCount:"indefinite",begin:"-0.25s"}),r.a.createElement("animate",{attributeName:"fill",values:"#e6e6e6;#e6e6e6;#ffffff;#e6e6e6;#e6e6e6",repeatCount:"indefinite",times:"0;0.1;0.2;0.3;1",dur:"1s",begin:"-0.25s"})),r.a.createElement("circle",{cx:"50",cy:"30",fill:"undefined",r:"3"},r.a.createElement("animate",{attributeName:"r",values:"3;3;5;3;3",times:"0;0.1;0.2;0.3;1",dur:"1s",repeatCount:"indefinite",begin:"-0.167s"}),r.a.createElement("animate",{attributeName:"fill",values:"#e6e6e6;#e6e6e6;#ffffff;#e6e6e6;#e6e6e6",repeatCount:"indefinite",times:"0;0.1;0.2;0.3;1",dur:"1s",begin:"-0.167s"})),r.a.createElement("circle",{cx:"60",cy:"32.679",fill:"undefined",r:"3"},r.a.createElement("animate",{attributeName:"r",values:"3;3;5;3;3",times:"0;0.1;0.2;0.3;1",dur:"1s",repeatCount:"indefinite",begin:"-0.083s"}),r.a.createElement("animate",{attributeName:"fill",values:"#e6e6e6;#e6e6e6;#ffffff;#e6e6e6;#e6e6e6",repeatCount:"indefinite",times:"0;0.1;0.2;0.3;1",dur:"1s",begin:"-0.083s"})),r.a.createElement("circle",{cx:"67.321",cy:"40",fill:"undefined",r:"3"},r.a.createElement("animate",{attributeName:"r",values:"3;3;5;3;3",times:"0;0.1;0.2;0.3;1",dur:"1s",repeatCount:"indefinite",begin:"0s"}),r.a.createElement("animate",{attributeName:"fill",values:"#e6e6e6;#e6e6e6;#ffffff;#e6e6e6;#e6e6e6",repeatCount:"indefinite",times:"0;0.1;0.2;0.3;1",dur:"1s",begin:"0s"})))}var A=function(e){var t=e.component,a=e.isAuthenticated,n=Object(f.a)(e,["component","isAuthenticated"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/",state:{from:e.location}}})}}))},U=a(26),K=a(16),z=a(27),F=a(28),G=a(29),J=function(e){function t(){return Object(U.a)(this,t),Object(z.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(K.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),B=a(101);a(72);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var H=function(){var e=Object(n.useState)({email:""}),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"forgotpage-container"},r.a.createElement("div",{className:"forgot-group form-area"},r.a.createElement("form",null,r.a.createElement("h3",null,"Forgot your password"),r.a.createElement("h5",null,"Please enter your email address"),r.a.createElement(b.a,null,r.a.createElement(h.a,{for:"exampleEmail"},"Email"),r.a.createElement(v.a,{className:"ctrl md",type:"email",name:"email",id:"exampleEmail",onKeyUp:function(e){var t=e.target,a=t.name,n=t.value;l((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,Object(p.a)({},a,n))}))},autoComplete:"email"})),r.a.createElement(B.a,{color:"success",size:"lg",block:!0,onClick:function(){console.log(a)}},"Reset Password"),r.a.createElement("div",{className:"text-center mt-3"},r.a.createElement("p",null,"Already have an account? ",r.a.createElement(s.b,{to:"/",className:"text-signup"},"Log in")))))))},q=a(9),V=a.n(q),W=a(12),R=a(102),$=a(54),X=a.n($),Z=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(z.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1,userID:"",name:"",email:"",picture:""},a.responseFacebook=function(e){console.log(e),a.setState({isLoggedIn:!0,userID:e.userID,name:e.name,email:e.email})},a.componentClicked=function(){return console.log("clicked")},a}return Object(G.a)(t,e),Object(K.a)(t,[{key:"render",value:function(){var e;return e=this.state.isLoggedIn?r.a.createElement("div",null,r.a.createElement("img",{src:this.state.picture,alt:this.state.name}),r.a.createElement("h3",null,"Welcome ",this.state.name)):r.a.createElement(X.a,{appId:"442860319911924",autoLoad:!0,fields:"name,email,picture",onClick:this.componentClicked,callback:this.responseFacebook}),r.a.createElement("div",null,e)}}]),t}(n.Component),Q=a(55),ee=a.n(Q);a(74);function te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ae(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?te(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):te(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ne=function(e){var t=Object(n.useState)({showPassword:!1,username:"",password:"",validUserName:!1,validPassword:!1,alert:!1,alertText:"",alertColor:"",loading:!1}),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useContext)(u).updateUser,m=function(e){var t=e.target,a=e.valid,n=t.name,r=t.value,l={};l[n]=r,l["username"===n?"validUserName":"validPassword"]=a,c((function(e){return ae({},e,{},l)}))},d=function(){var t=Object(W.a)(V.a.mark((function t(){var a,n,r,o,s,u,m,d,p,f;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=l.username,n=l.password,r=l.validPassword,o=l.loading,a&&r&&!o){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,c((function(e){return ae({},e,{loading:!0})})),t.next=7,fetch("https://team-trion.herokuapp.com/login/",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:n})});case 7:return s=t.sent,u=s.status,t.next=11,s.json();case 11:m=t.sent,201===u||200===u?(d=m.token,i(p={isLoggedIn:!0,userData:{username:a,token:d}}),localStorage._authuser=JSON.stringify(p),e.history.push("/report")):(f=Array.isArray(m)?m[0]:m[Object.keys(m)[0]],c((function(e){return ae({},e,{loading:!1,alert:!0,alertColor:"danger",alertText:f||"An Error Occured"})}))),t.next=17;break;case 15:t.prev=15,t.t0=t.catch(3);case 17:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"page-container"},r.a.createElement("div",{className:"page-group form-area"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("h5",null,"Welcome back to TritonFinApp!"),r.a.createElement(R.a,{isOpen:l.alert,toggle:function(){return c((function(e){return ae({},e,{alert:!1})}))},color:l.alertColor},l.alertText),r.a.createElement(I,{className:"ctrl md",type:"text",name:"username",id:"user-name",onKeyUp:m,autoComplete:"username",label:"User Name"}),r.a.createElement(C,{className:"ctrl md",name:"password",id:"user-password",onKeyUp:m,autoComplete:"current-password"}),r.a.createElement("div",{className:"forget-pass"},r.a.createElement(B.a,{className:"forget-password-btn",color:"link",onClick:function(){return e.history.push("/forgot-password")}},"Forgot Password ?")),r.a.createElement(B.a,{color:"success",size:"lg",block:!0,onClick:d,type:"button",disabled:!!l.loading||(!l.username||!l.validPassword)},"Sign In",l.loading&&r.a.createElement(M,{width:"30px"})),r.a.createElement("div",null,r.a.createElement(Z,null)),r.a.createElement("div",{className:"text-center mt-3"},r.a.createElement("p",null,"Don't have an account?",r.a.createElement(s.b,{className:"text-signup",to:"/get-started"}," Sign Up"))))),r.a.createElement("div",{className:"page-group form-image"},r.a.createElement("div",{className:"background-holder",style:{backgroundImage:"url(".concat(ee.a,")")}}," "),r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"desc-text"},r.a.createElement("h4",null," TristonFinApp gives best services to our customers. "),r.a.createElement("p",null,"A financial tracker app that allows users to enter items they have purchased with money over a given period of time. The app is then able to display the total amount spent per time by the user  based on the time period selected."),r.a.createElement(B.a,{className:"inverted-white get-started",outline:!0,color:"primary",onClick:function(){return e.history.push("/get-started")}},"Get Started"))))},re=a(7),le=(a(81),a(57)),ce=a.n(le),oe=a(36),se=a.n(oe),ie=a(56),ue=a.n(ie),me=function(e){var t=e.icon,a=e.text,n=e.tab,l=e.activeTab,c=e.onClick;return r.a.createElement("li",{className:n===l?"active":"",onClick:function(){return c(n)}},t&&r.a.createElement(t,null),r.a.createElement("p",null,"  ",a," "))};var de=function(e){var t=e.activeTab,a=e.onTabClick,n=e.onCloseMenu,l=e.menuClass,c=e.logout;return r.a.createElement("div",{className:"side_bar "+l},r.a.createElement("div",{className:"close-btn",onClick:n},r.a.createElement(ue.a,null)),r.a.createElement("ul",{className:"side_nav",id:"nav_tab"},r.a.createElement(me,{onClick:a,tab:"dashboard",text:"DASHBOARD",activeTab:t,icon:ce.a}),r.a.createElement(me,{onClick:a,tab:"Year",text:"Total By Year",activeTab:t,icon:se.a}),r.a.createElement(me,{onClick:a,tab:"Month",text:"Total By Month",activeTab:t,icon:se.a}),r.a.createElement(me,{onClick:a,tab:"Week",text:"Total By Week",activeTab:t,icon:se.a})),r.a.createElement("div",{className:"text-center"},r.a.createElement(B.a,{color:"primary",className:"add-expense",onClick:c},"Log Out")))},pe=(a(82),a(103)),fe=a(40),be=a.n(fe);function he(e){var t=e.data,a=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:be.a.topCtrl},r.a.createElement("h6",null," Item List ")),r.a.createElement(pe.a,{borderless:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"S/N"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,a?r.a.createElement("tr",{className:"text-center"},"loading..."):t.length?t.map((function(e,t){var a=e.Amount,n=e.Description,l=e.Name,c=e.Items;return r.a.createElement("tr",{key:t,className:be.a.row},r.a.createElement("th",{scope:"row"},t),r.a.createElement("td",null,l||c),r.a.createElement("td",null,"\u20a6",a.toLocaleString()),r.a.createElement("td",null,n))})):r.a.createElement("tr",{className:"text-center"}," No Expense Created "))))}var ve=function(e){var t=e.activeTab,a=e.dashboard,n=e.dashboardLoading,l=e.expenseList;return r.a.createElement("div",{className:"report_detail_container"},r.a.createElement("div",{className:"user_details"},r.a.createElement("p",null,"Total spent in ","Year"===t?(new Date).getFullYear():"this ".concat(t),":"),r.a.createElement("p",{className:"amount"},"\u20a6",n?r.a.createElement(M,{width:"25px"}):a["".concat(t.toLowerCase(),"ly")].toLocaleString())),r.a.createElement("div",{className:"table_container"},r.a.createElement(he,{data:l[t].data,loading:l[t].loading})))};a(83);var Ee=function(e){var t=e.fill,a=e.height;return r.a.createElement("svg",{height:a||"70px",xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",enableBackground:"new 0 0 100 100"},r.a.createElement("g",null,r.a.createElement("path",{fill:t||"#000000",d:"M48.771,58.653v23.533c0,0.68,0.55,1.229,1.229,1.229s1.229-0.549,1.229-1.229V58.653   c0-0.679-0.55-1.228-1.229-1.228S48.771,57.975,48.771,58.653z"}),r.a.createElement("path",{fill:t||"#000000",d:"M43.361,60.496H19.207c-0.679,0-1.229,0.55-1.229,1.229s0.549,1.229,1.229,1.229h24.154   c0.679,0,1.229-0.55,1.229-1.229S44.041,60.496,43.361,60.496z"}),r.a.createElement("path",{fill:t||"#000000",d:"M43.361,64.892H19.207c-0.679,0-1.229,0.55-1.229,1.229s0.549,1.229,1.229,1.229h24.154   c0.679,0,1.229-0.55,1.229-1.229S44.041,64.892,43.361,64.892z"}),r.a.createElement("ellipse",{fill:t||"#000000",cx:"67.97",cy:"63.922",rx:"2.286",ry:"2.315"}),r.a.createElement("path",{fill:t||"#000000",d:"M28.362,52.567h-9.155c-0.679,0-1.229,0.55-1.229,1.229s0.549,1.228,1.229,1.228h61.736   c0.679,0,1.229-0.549,1.229-1.228s-0.55-1.229-1.229-1.229H69.067c-0.003-0.01,0-0.02-0.004-0.029L56.756,16.201   c-0.105-0.311-0.33-0.566-0.625-0.71c-0.294-0.143-0.635-0.165-0.944-0.055l-13.17,4.609c-0.64,0.224-0.978,0.925-0.754,1.564   c0.226,0.641,0.925,0.98,1.565,0.755l12-4.2l11.652,34.404h-0.491c-0.051-0.163-0.131-0.318-0.252-0.454L34.43,17.194   c-0.451-0.503-1.225-0.547-1.73-0.098L13.508,34.149c-0.245,0.217-0.393,0.522-0.412,0.848c-0.018,0.326,0.094,0.646,0.312,0.89   L28.362,52.567z M33.417,19.744l29.428,32.823h-31.34c-0.05-0.163-0.131-0.318-0.252-0.454L16.062,35.166L33.417,19.744z"}),r.a.createElement("path",{fill:t||"#000000",d:"M87.013,48.682H72.34c-0.679,0-1.229,0.551-1.229,1.229c0,0.679,0.55,1.229,1.229,1.229h13.444v33.366   H14.215V51.139h6.561c0.678,0,1.229-0.55,1.229-1.229c0-0.678-0.551-1.229-1.229-1.229h-7.789c-0.678,0-1.229,0.551-1.229,1.229   v35.822c0,0.68,0.551,1.229,1.229,1.229h74.025c0.679,0,1.229-0.549,1.229-1.229V49.91C88.241,49.232,87.691,48.682,87.013,48.682z   "}),r.a.createElement("path",{fill:t||"#000000",d:"M75.126,29.007c4.402,0,7.984-3.582,7.984-7.984c0-4.402-3.582-7.984-7.984-7.984s-7.984,3.582-7.984,7.984   C67.142,25.426,70.724,29.007,75.126,29.007z M75.126,15.496c3.049,0,5.528,2.479,5.528,5.527c0,3.048-2.479,5.528-5.528,5.528   c-3.048,0-5.527-2.479-5.527-5.528C69.599,17.975,72.078,15.496,75.126,15.496z"})))};var ge=function(e){var t=e.dashboardLoading,a=e.dashboard;return r.a.createElement("div",{className:"dashboard_cards",id:"dashboard"},r.a.createElement("div",{className:"square_cards"},r.a.createElement("div",{className:"card_square card_left"},r.a.createElement(Ee,{fill:"#ffffff"}),t?r.a.createElement(M,{width:"25px"}):r.a.createElement("p",{className:"amount"},"\u20a6",a.weekly.toLocaleString()),r.a.createElement("p",null,"Total spent in a week")),r.a.createElement("div",{className:"card_square card_right"},r.a.createElement(Ee,{fill:"#ffffff"}),t?r.a.createElement(M,{width:"25px"}):r.a.createElement("p",{className:"amount"},"\u20a6",a.monthly.toLocaleString()),r.a.createElement("p",null,"Total spent in a month"))),r.a.createElement("div",{className:"card_rect"},r.a.createElement(Ee,{fill:"#ffffff"}),t?r.a.createElement(M,{width:"25px"}):r.a.createElement("p",{className:"amount"},"\u20a6",a.yearly.toLocaleString()),r.a.createElement("p",null,"Total spent in a year")))},ye=a(58),Oe=a.n(ye),we=a(59),xe=a.n(we),je=a(110),Ne=a(104),Ce=a(105),ke=a(106);function _e(e,t){return Pe.apply(this,arguments)}function Pe(){return(Pe=Object(W.a)(V.a.mark((function e(t,a){var n,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage._authuser),r=n?n.userData.token:"",e.abrupt("return",fetch("https://team-trion.herokuapp.com".concat(t),{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r},body:JSON.stringify(a)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function De(e){return Se.apply(this,arguments)}function Se(){return(Se=Object(W.a)(V.a.mark((function e(t){var a,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(localStorage._authuser),n=a?a.userData.token:"",e.abrupt("return",fetch("https://team-trion.herokuapp.com".concat(t),{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Te(e){return Le.apply(this,arguments)}function Le(){return(Le=Object(W.a)(V.a.mark((function e(t){var a,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,n=t.password,e.abrupt("return",new Promise(function(){var e=Object(W.a)(V.a.mark((function e(t){var r,l,c,o;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://team-trion.herokuapp.com/login/",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:n})});case 3:return r=e.sent,l=r.status,e.next=7,r.json();case 7:c=e.sent,201!==l&&200!==l||(o=c.token,t({isLoggedIn:!0,userData:{username:a,token:o}})),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ie(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ie(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ae=function(e){var t=e.isOpen,a=e.open,l=e.refreshDasboard,c={purchase_date:(new Date).toISOString().substr(0,10),amount:0,item:"",description:"",loading:!1,alert:!1,alertColor:"danger",alertText:"An Error Occured"},s=Object(n.useState)(c),i=Object(o.a)(s,2),u=i[0],m=i[1],d=function(e){var t=e.target;m((function(e){return Me({},e,Object(p.a)({},t.name,t.value))}))},f=function(){var e=u.amount,t=u.item,a=u.description,n=u.purchase_date;return!e||!t||!a||!n},E=function(){var e=Object(W.a)(V.a.mark((function e(){var t,a,n,r,o,s,i,d;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.amount,a=u.item,n=u.description,r=u.purchase_date,!f()){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,m((function(e){return Me({},e,{loading:!0})})),e.next=7,_e("/items/",{amount:t,item:a,description:n,purchase_date:r});case 7:return o=e.sent,s=o.status,e.next=11,o.json();case 11:if(i=e.sent,201!==s&&200!==s){e.next=18;break}return e.next=15,l();case 15:m(c),e.next=20;break;case 18:d=Array.isArray(i)?i[0]:i[Object.keys(i)[0]],m((function(e){return Me({},e,{loading:!1,alert:!0,alertColor:"danger",alertText:d||"An Error Occured"})}));case 20:e.next=24;break;case 22:e.prev=22,e.t0=e.catch(3);case 24:case"end":return e.stop()}}),e,null,[[3,22]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(je.a,{isOpen:t,className:e.className},r.a.createElement(Ne.a,null,"Add Expense"),r.a.createElement(Ce.a,null,r.a.createElement(R.a,{isOpen:u.alert,toggle:function(){return m((function(e){return Me({},e,{alert:!1})}))},color:u.alertColor},u.alertText),r.a.createElement("form",null,r.a.createElement(b.a,null,r.a.createElement(h.a,{for:"purchase_date"},"Date (MM/DD/YYYY)"),r.a.createElement(v.a,{className:"ctrl md",type:"date",name:"purchase_date",autoComplete:"date",defaultValue:u.purchase_date,onChange:function(e){var t=e.target;m((function(e){return Me({},e,{purchase_date:t.value})}))},id:"purchase_date"})),r.a.createElement(b.a,null,r.a.createElement(h.a,{for:"item"},"Item"),r.a.createElement(v.a,{className:"ctrl md",type:"text",name:"item",onKeyUp:d,autoComplete:"expense",id:"item"})),r.a.createElement(b.a,null,r.a.createElement(h.a,{for:"amount"},"Amount"),r.a.createElement(v.a,{className:"ctrl md",type:"number",name:"amount",onKeyUp:d,autoComplete:"amount",id:"amount"})),r.a.createElement(b.a,null,r.a.createElement(h.a,{for:"description"},"Description"),r.a.createElement(v.a,{id:"description",className:"ctrl md",type:"text",name:"description",onKeyUp:d,autoComplete:"description"})))),r.a.createElement(ke.a,null,r.a.createElement(B.a,{color:"success",disabled:f(),onClick:E},"Save",u.loading&&r.a.createElement(M,{width:"30px"})),r.a.createElement(B.a,{color:"secondary",onClick:function(){m(c),a(!1)}},"Cancel"))))},Ue=(a(84),function(e){function t(e){var a;return Object(U.a)(this,t),(a=Object(z.a)(this,Object(F.a)(t).call(this,e))).state={activeTab:"dashboard",menuClass:"",modalIsOpen:!1,dashboardLoading:!0,dashboard:{weekly:0,monthly:0,yearly:0},expenseList:{Year:{loading:!1,data:[]},Month:{loading:!1,data:[]},Week:{loading:!1,data:[]}}},a.handleTabClick=a.handleTabClick.bind(Object(re.a)(a)),a.closeMenu=a.closeMenu.bind(Object(re.a)(a)),a.showMenu=a.showMenu.bind(Object(re.a)(a)),a.openModal=a.openModal.bind(Object(re.a)(a)),a.fetchDashboardData=a.fetchDashboardData.bind(Object(re.a)(a)),a.refreshDasboard=a.refreshDasboard.bind(Object(re.a)(a)),a.logout=a.logout.bind(Object(re.a)(a)),t.contextType=u,a}return Object(G.a)(t,e),Object(K.a)(t,[{key:"handleTabClick",value:function(e){this.setState({activeTab:e,menuClass:""})}},{key:"showMenu",value:function(){this.setState({menuClass:"mobile-show"})}},{key:"closeMenu",value:function(){this.setState({menuClass:""})}},{key:"openModal",value:function(e){this.setState({modalIsOpen:e})}},{key:"fetchDashboardData",value:function(){var e=Object(W.a)(V.a.mark((function e(){var t,a,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,De("/dashboard/");case 2:return t=e.sent,a=t.status,e.next=6,t.json();case 6:n=e.sent,200===a&&(this.openModal(!1),this.setState({dashboard:n,dashboardLoading:!1}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchTableData",value:function(){var e=Object(W.a)(V.a.mark((function e(t){var a,n,r,l;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=this.state.expenseList)[t].loading=!0,this.setState({expenseList:a}),e.next=5,De("/".concat(t.toLowerCase(),"ly/"));case 5:return n=e.sent,r=n.status,e.next=9,n.json();case 9:l=e.sent,200===r&&((a=this.state.expenseList)[t].data=Object.values(l),a[t].loading=!1,this.setState({expenseList:a}));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchDashboardData(),this.fetchTableData("Year"),this.fetchTableData("Month"),this.fetchTableData("Week")}},{key:"logout",value:function(){var e=this.context.updateUser;delete localStorage._authuser,e({isLoggedIn:!1,userData:{}})}},{key:"refreshDasboard",value:function(){this.fetchDashboardData(),this.fetchTableData("Year"),this.fetchTableData("Month"),this.fetchTableData("Week")}},{key:"render",value:function(){var e=this,t=this.state.activeTab,a=this.context.user;return r.a.createElement("div",{className:"report_container"},r.a.createElement(de,Object.assign({},this.state,{onCloseMenu:this.closeMenu,onTabClick:this.handleTabClick,logout:this.logout})),r.a.createElement("main",{className:"report_content"},r.a.createElement("nav",{className:"mobile_nav"},r.a.createElement(Oe.a,{onClick:this.showMenu,width:"1.5em",height:"1.5em",fill:"#fff"}),r.a.createElement("h3",null,"Dashboard")),r.a.createElement("div",{className:"header_nav"},r.a.createElement("h4",null,"Welcome ",a.userData.username,","),r.a.createElement(B.a,{color:"primary",className:"add-expense",onClick:function(t){return e.openModal(!0)}},r.a.createElement(xe.a,null)," New Expense")),r.a.createElement("div",{className:"view-content"},"dashboard"===t?r.a.createElement(ge,this.state):r.a.createElement(ve,this.state)),r.a.createElement(Ae,{open:this.openModal,isOpen:this.state.modalIsOpen,refreshDasboard:this.refreshDasboard})))}}]),t}(n.Component)),Ke=a(107),ze=a(108),Fe=a(109);a(85);function Ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Je(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ge(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ge(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Be=function(e){var t=Object(n.useState)({fullname:"",username:"",email:"",phonenumber:"",password1:"",password2:"",emailIsValid:!1,password1IsValid:!1,loading:!1,alert:!1,alertText:"",alertColor:""}),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useContext)(u).updateUser,m=function(e){var t=e.target,a=e.valid,n=t.name,r=t.value;c("password1"===n||"email"===n?function(e){var t;return Je({},e,(t={},Object(p.a)(t,n,r),Object(p.a)(t,"".concat(n,"IsValid"),a),t))}:function(e){return Je({},e,Object(p.a)({},n,r))})},d=function(){var e=l.fullname,t=l.username,a=l.phonenumber,n=l.emailIsValid,r=l.password1IsValid,c=l.password1,o=l.password2;return!e||!t||!a||!n||!r||!(c===o)},f=function(){var t=Object(W.a)(V.a.mark((function t(){var a,n,r,o,s,u,m,p,f,b,h;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d()){t.next=2;break}return t.abrupt("return");case 2:return a=l.fullname,n=l.username,r=l.email,o=l.phonenumber,s=l.password1,u=l.password2,t.prev=3,c((function(e){return Je({},e,{loading:!0})})),t.next=7,fetch("https://team-trion.herokuapp.com/register/",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:a.split(" ")[0],last_name:a.split(" ")[1]||"o",username:n,email:r,phonenumber:o,password1:s,password2:u})});case 7:return m=t.sent,p=m.status,t.next=11,m.json();case 11:if(f=t.sent,201!==p&&200!==p){t.next=21;break}return t.next=15,Te({username:n,password:s});case 15:b=t.sent,i(b),localStorage._authuser=JSON.stringify(b),e.history.push("/report"),t.next=24;break;case 21:console.log(Object.keys(f)[0],f,f[Object.keys(f)[0]]),h=Array.isArray(f)?f[0]:f[Object.keys(f)[0]][0],c((function(e){return Je({},e,{loading:!1,alert:!0,alertColor:"danger",alertText:h||"An Error Occured"})}));case 24:t.next=28;break;case 26:t.prev=26,t.t0=t.catch(3);case 28:case"end":return t.stop()}}),t,null,[[3,26]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"gContainer"},r.a.createElement(Ke.a,{className:"form-wrap"},r.a.createElement("div",{className:"sform-text"},r.a.createElement("h5",null,"Sign Up To Have An Account"),r.a.createElement("h6",null,"just fill the form below and you are perfect!")),r.a.createElement(R.a,{isOpen:l.alert,toggle:function(){return c((function(e){return Je({},e,{alert:!1})}))},color:l.alertColor},l.alertText),r.a.createElement("form",null,r.a.createElement(ze.a,null,r.a.createElement(Fe.a,{md:"6",xs:"12"},r.a.createElement(I,{id:"fullname",label:"Full Name",required:!0,className:"ctrl md",type:"text",name:"fullname",onKeyUp:m})),r.a.createElement(Fe.a,{md:"6",xs:"12"},r.a.createElement(I,{id:"usernanme",label:"User Name",required:!0,className:"ctrl md",type:"text",name:"username",onKeyUp:m,autoComplete:"username"}))),r.a.createElement(ze.a,null,r.a.createElement(Fe.a,{md:"6",xs:"12"},r.a.createElement(S,{className:"ctrl md",type:"email",name:"email",id:"user-email",onKeyUp:m})),r.a.createElement(Fe.a,{md:"6",xs:"12"},r.a.createElement(I,{id:"phone-number",label:"Phone Number",required:!0,className:"ctrl md",type:"number",name:"phonenumber",onKeyUp:m}))),r.a.createElement(ze.a,null,r.a.createElement(Fe.a,{md:"6",xs:"12"},r.a.createElement(C,{id:"password1",label:"Password",required:!0,className:"ctrl md",type:"text",name:"password1",visibilityControl:!1,onKeyUp:m})),r.a.createElement(Fe.a,{md:"6",xs:"12"},r.a.createElement(I,{id:"password2",label:"Confirm Password",className:"ctrl md",type:"password",name:"password2",onKeyUp:m,validInput:!(l.password2>=1)||l.password1===l.password2,errorText:"password does not match!"}))),r.a.createElement(ze.a,null,r.a.createElement(Fe.a,{className:"space-top-25",md:"12"},r.a.createElement(B.a,{color:"success",block:!0,onClick:f,disabled:l.loading||d()},"Sign Up",l.loading&&r.a.createElement(M,{width:"30px"}))),r.a.createElement(Fe.a,{md:"12"},r.a.createElement("p",{className:"mt-1 text-center"},"Already have an Account ? ",r.a.createElement(s.b,{to:"/",className:"text-signup"},"Sign In")))))))};var Ye=function(){var e=localStorage._authuser?JSON.parse(localStorage._authuser):{isLoggedIn:!1,userData:{}},t=Object(n.useState)(e),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement(m,{value:{user:l,updateUser:c}},r.a.createElement("section",{className:"main"},r.a.createElement(s.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:ne}),r.a.createElement(i.b,{path:"/forgot-password",component:H}),r.a.createElement(i.b,{path:"/get-started",component:Be}),r.a.createElement(A,{isAuthenticated:l.isLoggedIn,path:"/add-expense",component:J}),r.a.createElement(A,{isAuthenticated:l.isLoggedIn,path:"/report",component:Ue})))),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86),a(87);c.a.render(r.a.createElement(Ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[61,1,2]]]);
//# sourceMappingURL=main.f0fa2071.chunk.js.map