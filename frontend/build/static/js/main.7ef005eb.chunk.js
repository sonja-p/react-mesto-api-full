(this["webpackJsonpreact-mesto-api-full"]=this["webpackJsonpreact-mesto-api-full"]||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(21),i=n.n(s),o=(n(29),n(11)),r=n(8),l=n(23),u=n(2),d=n(3),p=n(9),j=n.p+"static/media/logo.5f3664ca.svg",b=n(0);function m(e){var t=e.handleClick,n=e.buttonName,a=e.loggedIn,c=e.email;return Object(b.jsxs)("header",{className:"header page__header",children:[Object(b.jsx)("img",{src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f",className:"header__logo"}),Object(b.jsxs)("div",{className:"header__container",children:[a&&Object(b.jsx)("p",{className:"header__email",children:c}),Object(b.jsx)("button",{type:"button",onClick:t,className:"button header__button",children:n})]}),Object(b.jsx)("button",{type:"button",onClick:function(){return console.log("navbar")},className:"button header__menu"})]})}m.defaultProps={loggedIn:void 0};var h=m,_=function(e){var t=e.handleRegister,n=e.loggedIn,c=e.handleSignIn,s=Object(a.useState)({password:"",email:""}),i=Object(u.a)(s,2),l=i[0],d=i[1],j=function(e){var t=e.target,n=t.name,a=t.value;d(Object(p.a)(Object(p.a)({},l),{},Object(r.a)({},n,a)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{handleClick:c,buttonName:"\u0412\u043e\u0439\u0442\u0438",loggedIn:n}),Object(b.jsxs)("div",{className:"register page__register",children:[Object(b.jsx)("h2",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(b.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault();var n=l.password,a=l.email;t({password:n,email:a})},children:[Object(b.jsx)("input",{className:"register__input",id:"email",name:"email",type:"email",placeholder:"Email",onChange:j,value:l.email||"",required:!0}),Object(b.jsx)("input",{className:"register__input",id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:j,value:l.password||"",autoComplete:"on",required:!0}),Object(b.jsx)("button",{className:"button register__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(b.jsxs)("div",{className:"register__signin",children:[Object(b.jsx)("p",{children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(b.jsx)(o.b,{to:"login",className:"register__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})]})};var O=function(e){var t=e.isOpen,n=e.onClose,a=e.message;return Object(b.jsx)("section",{className:"popup ".concat(t&&"popup_opened"),children:Object(b.jsxs)("div",{className:"popup__container",children:[Object(b.jsx)("div",{className:"popup__tooltip-icon popup__tooltip-icon_type_".concat(a.type)}),Object(b.jsx)("h2",{className:"popup__title popup__title_padding-bottom_min popup__title_align_center",children:a.text}),Object(b.jsx)("button",{onClick:n,className:"button button_type_close",type:"button"})]})})},f=n(24),g=["component"],v=function(e){var t=e.component,n=Object(f.a)(e,g);return Object(b.jsx)(d.b,{children:function(){return n.loggedIn?Object(b.jsx)(t,Object(p.a)({},n)):Object(b.jsx)(d.a,{to:"./sign-in"})}})},x=function(e){var t=e.handleLogin,n=e.handleSignUp,c=Object(a.useState)({email:"",password:""}),s=Object(u.a)(c,2),i=s[0],o=s[1],l=function(e){var t=e.target,n=t.name,a=t.value;o(Object(p.a)(Object(p.a)({},i),{},Object(r.a)({},n,a)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{handleClick:n,buttonName:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(b.jsxs)("div",{className:"register page__register",children:[Object(b.jsx)("h2",{className:"register__title",children:"\u0412\u0445\u043e\u0434"}),Object(b.jsxs)("form",{className:"register__form",onSubmit:function(e){if(e.preventDefault(),i.email&&i.password){var n=i.password,a=i.email;t({password:n,email:a})}},children:[Object(b.jsx)("input",{className:"register__input",id:"email",name:"email",type:"email",placeholder:"Email",value:i.email||"",onChange:l,required:!0}),Object(b.jsx)("input",{className:"register__input",id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:i.password||"",onChange:l,autoComplete:"on",required:!0}),Object(b.jsx)("button",{className:"button register__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})},C=c.a.createContext();var N=function(e){var t=e.owner,n=e.likes,c=e.link,s=e.name,i=e.onCardClick,o=e.onCardDelete,r=e.onCardLike,l=Object(a.useContext)(C),u=t._id===l._id,d="button ".concat(u?"button_type_delete-card":"button_type_delete-card_disable"),p=n.some((function(e){return e._id===l._id})),j="button ".concat(p?"button_type_like_active":"button_type_like");return Object(b.jsxs)("li",{className:"element",children:[Object(b.jsx)("img",{src:c,alt:s,className:"element__image",onClick:function(){i()}}),Object(b.jsx)("h3",{className:"element__title",children:s}),Object(b.jsx)("button",{className:j,type:"button",onClick:function(){r()}}),Object(b.jsx)("h3",{className:"element__likes",children:n.length}),Object(b.jsx)("button",{className:d,type:"button",onClick:function(){o()}})]})};n(39);var k=function(){return Object(b.jsx)("div",{className:"Spinner"})};var y=function(e){var t=e.onEditProfile,n=e.onAddPlace,c=e.onEditAvatar,s=e.onCardClick,i=e.cards,o=e.isLoading,r=e.onCardLike,l=e.onCardDelete,u=e.handleLogout,d=e.loggedIn,p=e.email,j=Object(a.useContext)(C);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{handleClick:u,buttonName:"\u0412\u044b\u0439\u0442\u0438",loggedIn:d,email:p}),Object(b.jsxs)("main",{className:"content page__content",children:[Object(b.jsxs)("section",{className:"profile",children:[Object(b.jsxs)("div",{className:"profile__avatar-container",children:[Object(b.jsx)("img",{className:"profile__avatar",src:j.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(b.jsx)("button",{onClick:c,className:"button button_type_change-avatar",type:"button"})]}),Object(b.jsxs)("div",{className:"profile__info",children:[Object(b.jsxs)("div",{className:"profile__name-section",children:[Object(b.jsx)("h1",{className:"profile__name",children:j.name}),Object(b.jsx)("button",{onClick:t,className:"button button_type_edit-profile",type:"button"})]}),Object(b.jsx)("h2",{className:"profile__description",children:j.about})]}),Object(b.jsx)("button",{onClick:n,className:"button button_type_add-card",type:"button"})]}),Object(b.jsx)("section",{className:"elements",children:Object(b.jsx)("ul",{className:"elements__list",children:o?Object(b.jsx)(k,{}):i.map((function(e){return Object(b.jsx)(N,{owner:e.owner,likes:e.likes,link:e.link,name:e.name,onCardClick:s,onCardLike:r,onCardDelete:l},e._id)}))})})]})]})};var S=function(){return Object(b.jsx)("footer",{className:"footer page__footer",children:Object(b.jsxs)("p",{className:"footer__copyright",children:["\xa9",(new Date).getFullYear()," ","Mesto Russia"]})})};function w(e){var t=e.name,n=e.title,a=e.children,c=e.submitButtonTitle,s=e.isOpen,i=e.onClose,o=e.onSubmit;return Object(b.jsx)("section",{className:"popup ".concat(s&&"popup_opened"),children:Object(b.jsxs)("form",{className:"popup__container",name:t,onSubmit:o,children:[Object(b.jsx)("h2",{className:"popup__title",children:n}),Object(b.jsx)(b.Fragment,{children:a}),Object(b.jsx)("button",{onClick:i,className:"button button_type_close",type:"button"}),Object(b.jsx)("button",{className:"button popup__save-button",type:"submit",children:c})]})})}w.defaultProps={children:void 0,onSubmit:void 0};var L=w;var E=function(e){var t=e.card,n=e.onClose,a=e.isOpen;return Object(b.jsx)("section",{className:"popup popup_type_view ".concat(a&&"popup_opened"),children:Object(b.jsxs)("div",{className:"popup__view",children:[Object(b.jsx)("img",{src:t.link,alt:"\u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ".concat(t.name),className:"popup__image"}),Object(b.jsx)("h3",{className:"popup__image-title",children:t.name}),Object(b.jsx)("button",{onClick:n,className:"button button_type_close",type:"button"})]})})};var I=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,s=Object(a.useState)(""),i=Object(u.a)(s,2),o=i[0],r=i[1],l=Object(a.useState)(""),d=Object(u.a)(l,2),p=d[0],j=d[1],m=Object(a.useContext)(C);return Object(a.useEffect)((function(){r(m.name),j(m.about)}),[m,t]),Object(b.jsxs)(L,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",submitButtonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:o,about:p})},children:[Object(b.jsx)("input",{className:"popup__input",onChange:function(e){r(e.target.value)},id:"profile-name",name:"profile-name",type:"text",value:o||"",minLength:"2",maxLength:"40",required:!0}),Object(b.jsx)("span",{className:"profile-name-error popup__input-error"}),Object(b.jsx)("input",{className:"popup__input",onChange:function(e){j(e.target.value)},id:"description",name:"description",type:"text",value:p||"",minLength:"2",maxLength:"200",required:!0}),Object(b.jsx)("span",{className:"description-error popup__input-error"})]})};var T=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,s=Object(a.useRef)();return Object(b.jsxs)(L,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",submitButtonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c(s.current.value),s.current.value=""},children:[Object(b.jsx)("input",{className:"popup__input",ref:s,id:"avatar-link",name:"avatar-link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(b.jsx)("span",{className:"avatar-link-error popup__input-error"})]})};var P=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,s=Object(a.useState)(""),i=Object(u.a)(s,2),o=i[0],r=i[1],l=Object(a.useState)(""),d=Object(u.a)(l,2),p=d[0],j=d[1];return Object(b.jsxs)(L,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-place",submitButtonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:o,link:p}),r(""),j("")},children:[Object(b.jsx)("input",{className:"popup__input",id:"image-name",name:"image-name",type:"text",onChange:function(e){r(e.target.value)},value:o,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(b.jsx)("span",{className:"image-name-error popup__input-error"}),Object(b.jsx)("input",{className:"popup__input",id:"image-link",name:"image-link",type:"url",onChange:function(e){j(e.target.value)},value:p,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(b.jsx)("span",{className:"image-link-error popup__input-error"})]})},R=n(15),U=n(16),D=new(function(){function e(t){Object(R.a)(this,e),this._parseResponse=function(e){return e.ok?e.json():(console.log(e),Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))))},this._url=t.baseUrl}return Object(U.a)(e,[{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{credentials:"include"}).then((function(t){return e._parseResponse(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{credentials:"include"}).then((function(t){return e._parseResponse(t)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._parseResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._parseResponse(e)}))}},{key:"getCardLikes",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({likes:[]})}).then((function(t){return e._parseResponse(t)}))}},{key:"handleDeleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",credentials:"include"}).then((function(e){return t._parseResponse(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",credentials:"include"}).then((function(e){return t._parseResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",credentials:"include"}).then((function(e){return t._parseResponse(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({avatar:"".concat(e)})}).then((function(e){return t._parseResponse(e)}))}}]),e}())({baseUrl:"https://puolukka.nomoredomains.rocks"}),A=new(function(){function e(t){var n=this;Object(R.a)(this,e),this._checkResponse=function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))},this.register=function(e,t){return fetch("".concat(n._url,"/signup"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:"".concat(e),email:"".concat(t)})}).then(n._checkResponse)},this.getContent=function(){return fetch("".concat(n._url,"/users/me"),{method:"GET",credentials:"include"}).then(n._checkResponse)},this._url=t.baseUrl}return Object(U.a)(e,[{key:"authorize",value:function(e,t){return fetch("".concat(this._url,"/signin"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:"".concat(e),email:"".concat(t)})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://puolukka.nomoredomains.rocks"});var q=function(){var e,t=Object(a.useState)({name:"",about:"",avatar:"",_id:""}),n=Object(u.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(!1),o=Object(u.a)(i,2),p=o[0],j=o[1],m=Object(a.useState)(!1),h=Object(u.a)(m,2),f=h[0],g=h[1],N=Object(a.useState)(!1),w=Object(u.a)(N,2),R=w[0],U=w[1],q=Object(a.useState)(!1),F=Object(u.a)(q,2),J=F[0],B=F[1],z=Object(a.useState)(!1),H=Object(u.a)(z,2),M=H[0],G=H[1],Y=Object(a.useState)({}),K=Object(u.a)(Y,2),Q=K[0],V=K[1],W=Object(a.useState)(!1),X=Object(u.a)(W,2),Z=X[0],$=X[1],ee=Object(a.useState)(!1),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)(null),se=Object(u.a)(ce,2),ie=se[0],oe=se[1],re=Object(a.useState)({_id:"",email:""}),le=Object(u.a)(re,2),ue=le[0],de=le[1],pe=Object(a.useState)({text:"",type:""}),je=Object(u.a)(pe,2),be=je[0],me=je[1],he=Object(d.g)(),_e=function(e){console.error(e)};Object(a.useEffect)((function(){ie&&he.push("/")}),[ie]),Object(a.useEffect)((function(){localStorage.getItem("id")?A.getContent().then((function(e){console.log(e);var t=e.data,n=t._id,a=t.email;de({_id:n,email:a}),oe(!0)})).catch(_e):oe(!1)}),[ie]),Object(a.useEffect)((function(){D.getUserInfo().then((function(e){s(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",e.message)}))}),[]);var Oe=function(){j(!1),g(!1),U(!1),B(!1),$(!1),G(!1)},fe=Object(a.useState)([]),ge=Object(u.a)(fe,2),ve=ge[0],xe=ge[1];return Object(a.useEffect)((function(){ae(!0),D.getInitialCards().then((function(e){xe(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a",e.message)})).finally((function(){return ae(!1)}))}),[]),null===ie?Object(b.jsx)(k,{}):Object(b.jsx)(C.Provider,{value:c,children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"page__container",children:[Object(b.jsxs)(d.d,{children:[Object(b.jsxs)(d.b,{path:"/sign-up",children:[ie&&Object(b.jsx)(d.a,{to:"/"}),Object(b.jsx)(_,{handleRegister:function(e){var t=e.password,n=e.email;A.register(t,n).then((function(e){console.log(e);var t=e.data,n=t._id,a=t.userEmail;de({_id:n,userEmail:a}),G(!0),me({text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",type:"success"})})).then((function(){return he.push("/")})).catch((function(e){_e(e),e&&(G(!0),me({text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",type:"fail"}))}))},loggedIn:ie,handleSignIn:function(){he.push("/sign-in")}})]}),Object(b.jsxs)(d.b,{path:"/sign-in",children:[ie&&Object(b.jsx)(d.a,{to:"/"}),Object(b.jsx)(x,{handleLogin:function(e){var t=e.password,n=e.email;A.authorize(t,n).then((function(e){console.log(e);var t=e.id;localStorage.setItem("_id",t),oe(!0),de({email:n})})).catch(_e)},handleSignUp:function(){he.push("/sign-up")}})]}),Object(b.jsx)(v,(e={path:"/",loggedIn:ie,component:y,onAddPlace:function(){U(!0)},onEditProfile:function(){g(!0)},onEditAvatar:function(){j(!0)},onCardClick:function(e){V(e),$(!0)},onRemoveCard:function(){B(!0)},cards:ve,isLoading:ne,onCardLike:function(e){(e.likes.some((function(e){return e._id===c._id}))?D.deleteLike(e._id):D.addLike(e._id)).then((function(t){xe((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043b\u0430\u0439\u043a\u0430",e.message)}))},onCardDelete:function(e){D.handleDeleteCard(e._id).then((function(){xe((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",e.message)}))},handleLogout:function(){de({_id:"",email:""}),oe(null),localStorage.removeItem("id")}},Object(r.a)(e,"loggedIn",ie),Object(r.a)(e,"email",ue.email),e))]}),Object(b.jsx)(S,{})]}),Object(b.jsx)(O,{isOpen:M,onClose:Oe,message:be}),Object(b.jsx)(I,{isOpen:f,onClose:Oe,onUpdateUser:function(e){D.setUserInfo(e).then((function(e){s(e),Oe()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043d\u043e\u0432\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",e.message)}))}}),Object(b.jsx)(P,{isOpen:R,onClose:Oe,onAddPlace:function(e){D.addNewCard(e).then((function(e){xe((function(t){return[e].concat(Object(l.a)(t))})),Oe()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430",e.message)}))}}),Object(b.jsx)(T,{isOpen:p,onClose:Oe,onUpdateAvatar:function(e){D.setUserAvatar(e).then((function(e){s(e),Oe()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",e.message)}))}}),Object(b.jsx)(L,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete",submitButtonTitle:"\u0414\u0430",isOpen:J,onClose:Oe}),Object(b.jsx)(E,{card:Q,isOpen:Z,onClose:Oe})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(q,{})})}),document.getElementById("root")),F()}},[[40,1,2]]]);
//# sourceMappingURL=main.7ef005eb.chunk.js.map