(this["webpackJsonpreact-mesto-api-full"]=this["webpackJsonpreact-mesto-api-full"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(21),i=n.n(c),o=(n(30),n(9)),r=n(24),l=n(2),u=n(3),p=n(8),d=n(11),j=n.p+"static/media/logo.5f3664ca.svg",b=n(0);var h=function(e){var t=e.handleClick,n=e.buttonName,a=e.loggedIn,s=e.email;return Object(b.jsxs)("header",{className:"header page__header",children:[Object(b.jsx)("img",{src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f",className:"header__logo"}),Object(b.jsxs)("div",{className:"header__container",children:[a&&Object(b.jsx)("p",{className:"header__email",children:s}),Object(b.jsx)("button",{onClick:t,className:"button header__button",children:n})]}),Object(b.jsx)("button",{onClick:function(){return console.log("navbar")},className:"button header__menu"})]})},m=function(e){var t=e.handleRegister,n=e.loggedIn,s=e.handleSignIn,c=Object(a.useState)({password:"",email:""}),i=Object(l.a)(c,2),r=i[0],u=i[1],j=function(e){var t=e.target,n=t.name,a=t.value;u(Object(p.a)(Object(p.a)({},r),{},Object(o.a)({},n,a)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{handleClick:s,buttonName:"\u0412\u043e\u0439\u0442\u0438",loggedIn:n}),Object(b.jsxs)("div",{className:"register page__register",children:[Object(b.jsx)("h2",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(b.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault();var n=r.password,a=r.email;t({password:n,email:a})},children:[Object(b.jsx)("input",{className:"register__input",id:"email",name:"email",type:"email",placeholder:"Email",onChange:j,value:r.email||"",required:!0}),Object(b.jsx)("input",{className:"register__input",id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:j,value:r.password||"",autoComplete:"on",required:!0}),Object(b.jsx)("button",{className:"button register__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(b.jsxs)("div",{className:"register__signin",children:[Object(b.jsx)("p",{children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(b.jsx)(d.b,{to:"login",className:"register__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})]})};var _=function(e){var t=e.isOpen,n=e.onClose,a=e.message;return Object(b.jsx)("section",{className:"popup ".concat(t&&"popup_opened"),children:Object(b.jsxs)("div",{className:"popup__container",children:[Object(b.jsx)("div",{className:"popup__tooltip-icon popup__tooltip-icon_type_".concat(a.type)}),Object(b.jsx)("h2",{className:"popup__title popup__title_padding-bottom_min popup__title_align_center",children:a.text}),Object(b.jsx)("button",{onClick:n,className:"button button_type_close",type:"reset"})]})})},O=n(25),f=function(e){var t=e.component,n=Object(O.a)(e,["component"]);return Object(b.jsx)(u.b,{children:function(){return n.loggedIn?Object(b.jsx)(t,Object(p.a)({},n)):Object(b.jsx)(u.a,{to:"./sign-in"})}})},g=function(e){var t=e.handleLogin,n=e.handleSignUp,s=Object(a.useState)({email:"",password:""}),c=Object(l.a)(s,2),i=c[0],r=c[1],u=function(e){var t=e.target,n=t.name,a=t.value;r(Object(p.a)(Object(p.a)({},i),{},Object(o.a)({},n,a)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{handleClick:n,buttonName:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(b.jsxs)("div",{className:"register page__register",children:[Object(b.jsx)("h2",{className:"register__title",children:"\u0412\u0445\u043e\u0434"}),Object(b.jsxs)("form",{className:"register__form",onSubmit:function(e){if(e.preventDefault(),i.email&&i.password){var n=i.password,a=i.email;t({password:n,email:a})}},children:[Object(b.jsx)("input",{className:"register__input",id:"email",name:"email",type:"email",placeholder:"Email",value:i.email||"",onChange:u,required:!0}),Object(b.jsx)("input",{className:"register__input",id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:i.password||"",onChange:u,autoComplete:"on",required:!0}),Object(b.jsx)("button",{className:"button register__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})},v=s.a.createContext();var x=function(e){var t=Object(a.useContext)(v),n=e.owner._id===t._id,s="button ".concat(n?"button_type_delete-card":"button_type_delete-card_disable"),c=e.likes.some((function(e){return e._id===t._id})),i="button ".concat(c?"button_type_like_active":"button_type_like");return Object(b.jsxs)("li",{className:"element",children:[Object(b.jsx)("img",{src:e.link,alt:e.name,className:"element__image",onClick:function(){e.onCardClick(e)}}),Object(b.jsx)("h3",{className:"element__title",children:e.name}),Object(b.jsx)("button",{className:i,type:"button",onClick:function(){e.onCardLike(e)}}),Object(b.jsx)("h3",{className:"element__likes",children:e.likes.length}),Object(b.jsx)("button",{className:s,type:"button",onClick:function(){e.onCardDelete(e)}})]})};n(37);var N=function(){return Object(b.jsx)("div",{className:"Spinner"})};var C=function(e){var t=e.onEditProfile,n=e.onAddPlace,s=e.onEditAvatar,c=e.onCardClick,i=e.cards,o=e.isLoading,r=e.onCardLike,l=e.onCardDelete,u=e.handleLogout,d=e.loggedIn,j=e.email,m=Object(a.useContext)(v);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{handleClick:u,buttonName:"\u0412\u044b\u0439\u0442\u0438",loggedIn:d,email:j}),Object(b.jsxs)("main",{className:"content page__content",children:[Object(b.jsxs)("section",{className:"profile",children:[Object(b.jsxs)("div",{className:"profile__avatar-container",children:[Object(b.jsx)("img",{className:"profile__avatar",src:m.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(b.jsx)("button",{onClick:s,className:"button button_type_change-avatar",type:"button"})]}),Object(b.jsxs)("div",{className:"profile__info",children:[Object(b.jsxs)("div",{className:"profile__name-section",children:[Object(b.jsx)("h1",{className:"profile__name",children:m.name}),Object(b.jsx)("button",{onClick:t,className:"button button_type_edit-profile",type:"button"})]}),Object(b.jsx)("h2",{className:"profile__description",children:m.about})]}),Object(b.jsx)("button",{onClick:n,className:"button button_type_add-card",type:"button"})]}),Object(b.jsx)("section",{className:"elements",children:Object(b.jsx)("ul",{className:"elements__list",children:o?Object(b.jsx)(N,{}):i.map((function(e){return Object(b.jsx)(x,Object(p.a)(Object(p.a)({},e),{},{onCardClick:c,onCardLike:r,onCardDelete:l}),e._id)}))})})]})]})};var k=function(){return Object(b.jsx)("footer",{className:"footer page__footer",children:Object(b.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var y=function(e){var t=e.name,n=e.title,a=e.children,s=e.submitButtonTitle,c=e.isOpen,i=e.onClose,o=e.onSubmit;return Object(b.jsx)("section",{className:"popup ".concat(c&&"popup_opened"),children:Object(b.jsxs)("form",{className:"popup__container",name:t,onSubmit:o,children:[Object(b.jsx)("h2",{className:"popup__title",children:n}),Object(b.jsx)(b.Fragment,{children:a}),Object(b.jsx)("button",{onClick:i,className:"button button_type_close",type:"reset"}),Object(b.jsx)("button",{className:"button popup__save-button",type:"submit",children:s})]})})};var S=function(e){var t=e.card,n=e.onClose,a=e.isOpen;return Object(b.jsx)("section",{className:"popup popup_type_view ".concat(a&&"popup_opened"),children:Object(b.jsxs)("div",{className:"popup__view",children:[Object(b.jsx)("img",{src:t.link,alt:"\u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ".concat(t.name),className:"popup__image"}),Object(b.jsx)("h3",{className:"popup__image-title",children:t.name}),Object(b.jsx)("button",{onClick:n,className:"button button_type_close",type:"reset"})]})})};var w=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateUser,c=Object(a.useState)(""),i=Object(l.a)(c,2),o=i[0],r=i[1],u=Object(a.useState)(""),p=Object(l.a)(u,2),d=p[0],j=p[1],h=Object(a.useContext)(v);return Object(a.useEffect)((function(){r(h.name),j(h.about)}),[h,t]),Object(b.jsxs)(y,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",submitButtonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({name:o,about:d})},children:[Object(b.jsx)("input",{className:"popup__input",onChange:function(e){r(e.target.value)},id:"profile-name",name:"profile-name",type:"text",value:o||"",minLength:"2",maxLength:"40",required:!0}),Object(b.jsx)("span",{className:"profile-name-error popup__input-error"}),Object(b.jsx)("input",{className:"popup__input",onChange:function(e){j(e.target.value)},id:"description",name:"description",type:"text",value:d||"",minLength:"2",maxLength:"200",required:!0}),Object(b.jsx)("span",{className:"description-error popup__input-error"})]})};var L=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateAvatar,c=Object(a.useRef)();return Object(b.jsxs)(y,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",submitButtonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s(c.current.value),c.current.value=""},children:[Object(b.jsx)("input",{className:"popup__input",ref:c,id:"avatar-link",name:"avatar-link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(b.jsx)("span",{className:"avatar-link-error popup__input-error"})]})};var I=function(e){var t=e.isOpen,n=e.onClose,s=e.onAddPlace,c=Object(a.useState)(""),i=Object(l.a)(c,2),o=i[0],r=i[1],u=Object(a.useState)(""),p=Object(l.a)(u,2),d=p[0],j=p[1];return Object(b.jsxs)(y,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-place",submitButtonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({name:o,link:d}),r(""),j("")},children:[Object(b.jsx)("input",{className:"popup__input",id:"image-name",name:"image-name",type:"text",onChange:function(e){r(e.target.value)},value:o,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(b.jsx)("span",{className:"image-name-error popup__input-error"}),Object(b.jsx)("input",{className:"popup__input",id:"image-link",name:"image-link",type:"url",onChange:function(e){j(e.target.value)},value:d,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(b.jsx)("span",{className:"image-link-error popup__input-error"})]})},T=n(15),E=n(23),R=new(function(){function e(t){Object(T.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(E.a)(e,[{key:"_parseResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._parseResponse(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._parseResponse(t)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._parseResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._parseResponse(e)}))}},{key:"getCardLikes",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers,body:JSON.stringify({likes:[]})}).then((function(t){return e._parseResponse(t)}))}},{key:"handleDeleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseResponse(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._parseResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseResponse(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(e)})}).then((function(e){return t._parseResponse(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-22",headers:{authorization:"28dc5a41-c5c0-42d9-838f-76fdbd61560b","Content-Type":"application/json"}}),U=new function e(t){var n=this;Object(T.a)(this,e),this._checkResponse=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},this.register=function(e,t){return fetch("".concat(n._url,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:"".concat(e),email:"".concat(t)})}).then(n._checkResponse)},this.authorize=function(e,t){return fetch("".concat(n._url,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:"".concat(e),email:"".concat(t)})}).then(n._checkResponse)},this.getContent=function(e){return fetch("".concat(n._url,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(n._checkResponse)},this._url=t.baseUrl,this._token=t.token}({baseUrl:"https://auth.nomoreparties.co"});var P=function(){var e,t=Object(a.useState)({name:"",about:"",avatar:"",_id:""}),n=Object(l.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(!1),p=Object(l.a)(i,2),d=p[0],j=p[1],h=Object(a.useState)(!1),O=Object(l.a)(h,2),x=O[0],T=O[1],E=Object(a.useState)(!1),P=Object(l.a)(E,2),D=P[0],A=P[1],q=Object(a.useState)(!1),F=Object(l.a)(q,2),B=F[0],J=F[1],z=Object(a.useState)(!1),H=Object(l.a)(z,2),M=H[0],G=H[1],Y=Object(a.useState)({}),K=Object(l.a)(Y,2),Q=K[0],V=K[1],W=Object(a.useState)(!1),X=Object(l.a)(W,2),Z=X[0],$=X[1],ee=Object(a.useState)(!1),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],se=Object(a.useState)(null),ce=Object(l.a)(se,2),ie=ce[0],oe=ce[1],re=Object(a.useState)({_id:"",email:""}),le=Object(l.a)(re,2),ue=le[0],pe=le[1],de=Object(a.useState)({text:"",type:""}),je=Object(l.a)(de,2),be=je[0],he=je[1],me=Object(u.g)(),_e=function(e){console.error(e)};Object(a.useEffect)((function(){ie&&me.push("/")}),[ie]),Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("token");e?U.getContent(e).then((function(e){var t=e.data,n=t._id,a=t.email;pe({_id:n,email:a}),oe(!0)})).catch(_e):oe(!1)}()}),[ie]),Object(a.useEffect)((function(){R.getUserInfo().then((function(e){c(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",e.message)}))}),[]);var Oe=function(){j(!1),T(!1),A(!1),J(!1),$(!1),G(!1)},fe=Object(a.useState)([]),ge=Object(l.a)(fe,2),ve=ge[0],xe=ge[1];return Object(a.useEffect)((function(){ae(!0),R.getInitialCards().then((function(e){xe(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a",e.message)})).finally((function(){return ae(!1)}))}),[]),null===ie?Object(b.jsx)(N,{}):Object(b.jsx)(v.Provider,{value:s,children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"page__container",children:[Object(b.jsxs)(u.d,{children:[Object(b.jsxs)(u.b,{path:"/sign-up",children:[ie&&Object(b.jsx)(u.a,{to:"/"}),Object(b.jsx)(m,{handleRegister:function(e){var t=e.password,n=e.email;U.register(t,n).then((function(e){var t=e.data,n=t._id,a=t.email;pe({_id:n,email:a}),G(!0),he({text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",type:"success"})})).then((function(){return me.push("/")})).catch((function(e){_e(e),e&&(G(!0),he({text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",type:"fail"}))}))},loggedIn:ie,handleSignIn:function(){me.push("/sign-in")}})]}),Object(b.jsxs)(u.b,{path:"/sign-in",children:[ie&&Object(b.jsx)(u.a,{to:"/"}),Object(b.jsx)(g,{handleLogin:function(e){var t=e.password,n=e.email;U.authorize(t,n).then((function(e){var t=e.token;localStorage.setItem("token",t),oe(!0),pe({email:n})})).catch(_e)},handleSignUp:function(){me.push("/sign-up")}})]}),Object(b.jsx)(f,(e={path:"/",loggedIn:ie,component:C,onAddPlace:function(){A(!0)},onEditProfile:function(){T(!0)},onEditAvatar:function(){j(!0)},onCardClick:function(e){V(e),$(!0)},onRemoveCard:function(){J(!0)},cards:ve,isLoading:ne,onCardLike:function(e){(e.likes.some((function(e){return e._id===s._id}))?R.deleteLike(e._id):R.addLike(e._id)).then((function(t){xe((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043b\u0430\u0439\u043a\u0430",e.message)}))},onCardDelete:function(e){R.handleDeleteCard(e._id).then((function(){xe((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",e.message)}))},handleLogout:function(){pe({_id:"",email:""}),oe(null),localStorage.removeItem("token")}},Object(o.a)(e,"loggedIn",ie),Object(o.a)(e,"email",ue.email),e))]}),Object(b.jsx)(k,{})]}),Object(b.jsx)(_,{isOpen:M,onClose:Oe,message:be}),Object(b.jsx)(w,{isOpen:x,onClose:Oe,onUpdateUser:function(e){R.setUserInfo(e).then((function(e){c(e),Oe()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043d\u043e\u0432\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",e.message)}))}}),Object(b.jsx)(I,{isOpen:D,onClose:Oe,onAddPlace:function(e){R.addNewCard(e).then((function(e){xe((function(t){return[e].concat(Object(r.a)(t))})),Oe()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430",e.message)}))}}),Object(b.jsx)(L,{isOpen:d,onClose:Oe,onUpdateAvatar:function(e){R.setUserAvatar(e).then((function(e){c(e),Oe()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",e.message)}))}}),Object(b.jsx)(y,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete",submitButtonTitle:"\u0414\u0430",isOpen:B,onClose:Oe}),Object(b.jsx)(S,{card:Q,isOpen:Z,onClose:Oe})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(P,{})})}),document.getElementById("root")),D()}},[[38,1,2]]]);
//# sourceMappingURL=main.e16f2b71.chunk.js.map