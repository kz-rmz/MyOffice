!function(e){function s(s){for(var a,r,_=s[0],m=s[1],n=s[2],o=0,u=[];o<_.length;o++)r=_[o],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&u.push(l[r][0]),l[r]=0;for(a in m)Object.prototype.hasOwnProperty.call(m,a)&&(e[a]=m[a]);for(c&&c(s);u.length;)u.shift()();return i.push.apply(i,n||[]),t()}function t(){for(var e,s=0;s<i.length;s++){for(var t=i[s],a=!0,_=1;_<t.length;_++){var m=t[_];0!==l[m]&&(a=!1)}a&&(i.splice(s--,1),e=r(r.s=t[0]))}return e}var a={},l={0:0},i=[];function r(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=a,r.d=function(e,s,t){r.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,s){if(1&s&&(e=r(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)r.d(t,a,function(s){return e[s]}.bind(null,a));return t},r.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(s,"a",s),s},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.p="";var _=window.webpackJsonp=window.webpackJsonp||[],m=_.push.bind(_);_.push=s,_=_.slice();for(var n=0;n<_.length;n++)s(_[n]);var c=m;i.push([41,1]),t()}([,,,,,,,,,,,,,,,function(e,s,t){},,,,,,function(e,s,t){},,,,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var a=t(0),l=t.n(a),i=t(11),r=t.n(i),_=t(13),m=t(5);const n={history:[{id:0,date:Date(2020,2,12),worker:"Электрик",isDone:!0},{id:1,date:new Date(2020,2,12),worker:"Сантехник",isDone:!0}],payHistory:[{id:0,date:"2012 - 02 - 20",expirationDate:"2012 - 03 - 20",amount:27200,isPaid:!0},{id:1,date:"2012 - 02 - 20",expirationDate:"2012 - 03 - 20",amount:27200,isPaid:!0}],profile:[{id:0,building:" БЦ 'В7' ",company:"Фирма",bin:83011232545,room:102,space:13.6,price:2e3,total(){return this.price*this.space}}],docs:[{id:0,name:"Договор аренды"},{id:1,name:"Счет на оплату"}],workers:[{id:0,name:"Электрик",content:["Не горит свет","Нет электричества","Не работает розетка"]},{id:1,name:"Сантехник",content:["Нет воды","Нет отопления","Проблемы с сантехникой"]},{id:2,name:"Уборка",content:["Убрать помещение","Вывезти мусор"]},{id:3,name:"Связь",content:["Не работает интернет","Нет телефонной связи"]}]};var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;arguments.length>1&&arguments[1];return e},o=(t(21),t(8)),u=t(4),f=t(1),N=(t(34),"/Users/shadow/projects/Web/MyOffice SPA/src/components/Header/Header.js");class h extends a.Component{render(){return l.a.createElement("div",{className:"header",__source:{fileName:N,lineNumber:9},__self:this},l.a.createElement("div",{className:"header__container",__source:{fileName:N,lineNumber:10},__self:this},l.a.createElement("div",{className:"header__logo",__source:{fileName:N,lineNumber:11},__self:this},l.a.createElement(f.a,{to:"/",__source:{fileName:N,lineNumber:12},__self:this},l.a.createElement("h1",{__source:{fileName:N,lineNumber:13},__self:this},"MyOffice"))),l.a.createElement("div",{className:".header__hamburger-menu",__source:{fileName:N,lineNumber:16},__self:this},l.a.createElement("input",{id:"menu__toggle",type:"checkbox",__source:{fileName:N,lineNumber:17},__self:this}),l.a.createElement("label",{htmlFor:"menu__toggle",className:"menu__icon",__source:{fileName:N,lineNumber:18},__self:this},l.a.createElement("span",{className:"menu_btn",__source:{fileName:N,lineNumber:19},__self:this}),l.a.createElement("span",{className:"menu_btn",__source:{fileName:N,lineNumber:20},__self:this}),l.a.createElement("span",{className:"menu_btn",__source:{fileName:N,lineNumber:21},__self:this})),l.a.createElement("ul",{className:"header-menu__dropdown",__source:{fileName:N,lineNumber:23},__self:this},l.a.createElement("li",{className:"menu-item",__source:{fileName:N,lineNumber:24},__self:this},l.a.createElement(f.a,{to:"/history",__source:{fileName:N,lineNumber:24},__self:this},"История")),l.a.createElement("li",{className:"menu-item",__source:{fileName:N,lineNumber:25},__self:this},l.a.createElement(f.a,{to:"/changepassword",__source:{fileName:N,lineNumber:25},__self:this},"Пароль")),l.a.createElement("li",{className:"menu-item",__source:{fileName:N,lineNumber:26},__self:this},l.a.createElement(f.a,{to:"/login",__source:{fileName:N,lineNumber:26},__self:this},"Выйти")),l.a.createElement("li",{className:"menu-item",__source:{fileName:N,lineNumber:27},__self:this},l.a.createElement(f.a,{to:"/profile",__source:{fileName:N,lineNumber:27},__self:this},"Профиль"))))))}}var b=h,p=(t(35),"/Users/shadow/projects/Web/MyOffice SPA/src/components/Main/Main.js");class d extends a.Component{render(){return l.a.createElement("div",{__source:{fileName:p,lineNumber:7},__self:this},l.a.createElement("div",{className:"categories__links",__source:{fileName:p,lineNumber:8},__self:this},l.a.createElement(f.a,{to:"",id:"activ",__source:{fileName:p,lineNumber:9},__self:this},"Выбор запроса"),l.a.createElement(f.a,{to:"/history",__source:{fileName:p,lineNumber:10},__self:this},"История")),l.a.createElement("div",{className:"categories__elements",__source:{fileName:p,lineNumber:12},__self:this},l.a.createElement(f.a,{to:"/docs",className:"button",__source:{fileName:p,lineNumber:13},__self:this},"Документы"),l.a.createElement(f.a,{to:"/categories",className:"button",__source:{fileName:p,lineNumber:14},__self:this},"Услуги")))}}var E=d,y=(t(36),"/Users/shadow/projects/Web/MyOffice SPA/src/components/Element/Element.js");class v extends a.Component{render(){const e=this.props.match.path,s=s=>{this.props.history.push(e+"/"+s)},t=this.props.items.map(e=>l.a.createElement(l.a.Fragment,{key:e.id,__source:{fileName:y,lineNumber:15},__self:this},l.a.createElement("button",{onClick:()=>s(e.id),className:"element",__source:{fileName:y,lineNumber:16},__self:this},e.name)));return l.a.createElement(l.a.Fragment,{__source:{fileName:y,lineNumber:25},__self:this},t)}}var g=Object(o.f)(v),j="/Users/shadow/projects/Web/MyOffice SPA/src/components/Categories/Categories.js";class w extends a.Component{render(){return"/categories"===this.props.match.path?l.a.createElement(l.a.Fragment,{__source:{fileName:j,lineNumber:12},__self:this},l.a.createElement("div",{className:"categories__links",__source:{fileName:j,lineNumber:13},__self:this},l.a.createElement(f.a,{to:"",__source:{fileName:j,lineNumber:14},__self:this},"Выбор запроса"),l.a.createElement(f.a,{to:"/history",__source:{fileName:j,lineNumber:15},__self:this},"История")),l.a.createElement("div",{className:"categories__elements",__source:{fileName:j,lineNumber:17},__self:this},l.a.createElement(g,{items:this.props.workers,__source:{fileName:j,lineNumber:18},__self:this}),l.a.createElement("div",{className:"categories__back",__source:{fileName:j,lineNumber:19},__self:this},l.a.createElement(f.a,{to:"/",__source:{fileName:j,lineNumber:20},__self:this},"Назад")))):l.a.createElement(l.a.Fragment,{__source:{fileName:j,lineNumber:25},__self:this},l.a.createElement("div",{className:"categories__links",__source:{fileName:j,lineNumber:26},__self:this},l.a.createElement(f.a,{to:"",__source:{fileName:j,lineNumber:27},__self:this},"Выбор запроса"),l.a.createElement(f.a,{to:"/history",__source:{fileName:j,lineNumber:28},__self:this},"История")),l.a.createElement("div",{className:"categories__elements",__source:{fileName:j,lineNumber:30},__self:this},l.a.createElement(g,{items:this.props.docs,__source:{fileName:j,lineNumber:31},__self:this}),l.a.createElement("div",{className:"categories__back",__source:{fileName:j,lineNumber:32},__self:this},l.a.createElement(f.a,{to:"/",__source:{fileName:j,lineNumber:33},__self:this},"Назад"))))}}var O=Object(m.b)(e=>({docs:e.docs,workers:e.workers}))(w),P=(t(37),"/Users/shadow/projects/Web/MyOffice SPA/src/components/Request/Request.js");class k extends a.Component{render(){const{content:e}=this.props.worker;let s=e.map((e,s)=>l.a.createElement(l.a.Fragment,{key:s,__source:{fileName:P,lineNumber:13},__self:this},l.a.createElement("input",{type:"radio",name:"options",id:s,className:"radioBtn",__source:{fileName:P,lineNumber:14},__self:this}),l.a.createElement("label",{className:"request-list__element",htmlFor:s,__source:{fileName:P,lineNumber:15},__self:this},e)));return l.a.createElement("div",{className:"categories__elements",__source:{fileName:P,lineNumber:29},__self:this},l.a.createElement("form",{id:"request__form",__source:{fileName:P,lineNumber:30},__self:this},l.a.createElement("fieldset",{__source:{fileName:P,lineNumber:31},__self:this},s,l.a.createElement("input",{type:"radio",name:"options",id:"option4",className:"radioBtn",onChange:()=>{document.getElementById("request__description").style.display="block"},__source:{fileName:P,lineNumber:33},__self:this}),l.a.createElement("label",{className:"request-list__element",htmlFor:"option4",__source:{fileName:P,lineNumber:34},__self:this},"Другое")),l.a.createElement("textarea",{name:"options",rows:"10",id:"request__description",htmlFor:"option4",__source:{fileName:P,lineNumber:37},__self:this}),l.a.createElement("div",{className:"request-message",__source:{fileName:P,lineNumber:38},__self:this},l.a.createElement("h3",{__source:{fileName:P,lineNumber:39},__self:this},"Заявка принята!"),l.a.createElement("p",{__source:{fileName:P,lineNumber:40},__self:this},"Статаус вашей заявки можно посмотреть в ",l.a.createElement(f.a,{to:"/history",__source:{fileName:P,lineNumber:40},__self:this}," Истории ")),l.a.createElement(f.a,{to:"/",__source:{fileName:P,lineNumber:41},__self:this},"Закрыть")),l.a.createElement("input",{type:"button",value:"Отправить",className:"submit-btn",onClick:()=>{document.querySelector(".request-message").style.display="block",document.querySelector(".submit-btn").style.display="none",document.getElementsByTagName("fieldset")[0].disabled=!0},__source:{fileName:P,lineNumber:43},__self:this})))}}var x=Object(m.b)((e,s)=>{let t=parseInt(s.match.params.id);return{worker:e.workers.find(e=>e.id===t)}})(k),S=(t(39),"/Users/shadow/projects/Web/MyOffice SPA/src/components/Profile/PayHistory/PayHistory.js");class M extends a.Component{render(){const e=this.props.state.map(e=>l.a.createElement("div",{className:"profile__history",key:e.id,__source:{fileName:S,lineNumber:10},__self:this},l.a.createElement("h3",{className:"profile__history-item size",__source:{fileName:S,lineNumber:11},__self:this},e.date),l.a.createElement("h3",{className:"profile__history-item size",__source:{fileName:S,lineNumber:12},__self:this},e.expirationDate),l.a.createElement("h3",{className:"profile__history-item size",__source:{fileName:S,lineNumber:13},__self:this},e.amount),l.a.createElement("h3",{className:"profile__history-item size",__source:{fileName:S,lineNumber:14},__self:this},e.isPaid?"Оплачено":"Не оплачено")));return l.a.createElement(l.a.Fragment,{__source:{fileName:S,lineNumber:19},__self:this},l.a.createElement("div",{id:"payhistory",__source:{fileName:S,lineNumber:20},__self:this},l.a.createElement("div",{className:"profile__history-title profile__history",__source:{fileName:S,lineNumber:21},__self:this},l.a.createElement("h3",{className:"profle__history-title-item size",__source:{fileName:S,lineNumber:22},__self:this},"Дата"),l.a.createElement("h3",{className:"profle__history-title-item size",__source:{fileName:S,lineNumber:23},__self:this},"Период"),l.a.createElement("h3",{className:"profle__history-title-item size",__source:{fileName:S,lineNumber:24},__self:this},"Сумма"),l.a.createElement("h3",{className:"profle__history-title-item size",__source:{fileName:S,lineNumber:25},__self:this},"Статус")),e))}}var C=Object(m.b)(e=>({state:e.payHistory}))(M),A=(t(38),"/Users/shadow/projects/Web/MyOffice SPA/src/components/Profile/ProfileInfo/ProfileInfo.js");class F extends a.Component{render(){const e=this.props.state,s=e[0].id;return l.a.createElement(l.a.Fragment,{__source:{fileName:A,lineNumber:10},__self:this},l.a.createElement("div",{id:"office",__source:{fileName:A,lineNumber:11},__self:this},l.a.createElement("div",{id:"building",className:"buildingItem",__source:{fileName:A,lineNumber:12},__self:this},l.a.createElement("h4",{__source:{fileName:A,lineNumber:13},__self:this},e[s].building),l.a.createElement("p",{__source:{fileName:A,lineNumber:14},__self:this},'БЦ "В7"')),l.a.createElement("div",{id:"buildingDescription",className:"buildingItem",__source:{fileName:A,lineNumber:16},__self:this},l.a.createElement("div",{id:"room",className:"descriptionItem",__source:{fileName:A,lineNumber:17},__self:this},l.a.createElement("h4",{__source:{fileName:A,lineNumber:18},__self:this},"Кабинет"),l.a.createElement("p",{__source:{fileName:A,lineNumber:19},__self:this},e[s].room)),l.a.createElement("div",{id:"area",className:"descriptionItem",__source:{fileName:A,lineNumber:21},__self:this},l.a.createElement("h4",{__source:{fileName:A,lineNumber:22},__self:this},"Площадь"),l.a.createElement("p",{__source:{fileName:A,lineNumber:23},__self:this},e[s].space)),l.a.createElement("div",{id:"price",className:"descriptionItem",__source:{fileName:A,lineNumber:25},__self:this},l.a.createElement("h4",{__source:{fileName:A,lineNumber:26},__self:this},"Цена"),l.a.createElement("p",{__source:{fileName:A,lineNumber:27},__self:this},e[s].price)),l.a.createElement("div",{id:"total",className:"descriptionItem",__source:{fileName:A,lineNumber:29},__self:this},l.a.createElement("h4",{__source:{fileName:A,lineNumber:30},__self:this},"Сумма"),l.a.createElement("p",{__source:{fileName:A,lineNumber:31},__self:this},e[s].total()))),l.a.createElement("div",{id:"buildingInformation",className:"buildingItem",__source:{fileName:A,lineNumber:34},__self:this},l.a.createElement("div",{className:"informationItem",__source:{fileName:A,lineNumber:35},__self:this},l.a.createElement("h4",{__source:{fileName:A,lineNumber:36},__self:this},"Наименование"),l.a.createElement("p",{__source:{fileName:A,lineNumber:37},__self:this},e[s].company)),l.a.createElement("div",{className:"informationItem",__source:{fileName:A,lineNumber:39},__self:this},l.a.createElement("h4",{__source:{fileName:A,lineNumber:40},__self:this},"БИН/ИИН"),l.a.createElement("p",{__source:{fileName:A,lineNumber:41},__self:this},e[s].bin)),l.a.createElement("div",{className:"informationItem",__source:{fileName:A,lineNumber:43},__self:this},l.a.createElement("h4",{__source:{fileName:A,lineNumber:44},__self:this},"Дата оплаты"),l.a.createElement("p",{__source:{fileName:A,lineNumber:45},__self:this},"25.23.2312")))))}}var U=Object(m.b)(e=>({state:e.profile}))(F),W="/Users/shadow/projects/Web/MyOffice SPA/src/components/Profile/Profile.js";class I extends a.Component{render(){return l.a.createElement(l.a.Fragment,{__source:{fileName:W,lineNumber:9},__self:this},l.a.createElement("div",{className:"categories__links",__source:{fileName:W,lineNumber:10},__self:this},l.a.createElement(f.b,{to:"/profile/",exact:!0,activeClassName:"active",__source:{fileName:W,lineNumber:11},__self:this},"Профиль"),l.a.createElement(f.b,{to:"/profile/payhistory",activeClassName:"active",__source:{fileName:W,lineNumber:12},__self:this},"История оплаты")),l.a.createElement("div",{className:"categories__elements",__source:{fileName:W,lineNumber:14},__self:this},l.a.createElement(o.c,{__source:{fileName:W,lineNumber:15},__self:this},l.a.createElement(o.a,{exact:!0,path:"/profile/",component:U,__source:{fileName:W,lineNumber:16},__self:this}),l.a.createElement(o.a,{path:"/profile/payhistory",component:C,__source:{fileName:W,lineNumber:17},__self:this}))))}}var D=I,q="/Users/shadow/projects/Web/MyOffice SPA/src/components/Download/Download.js";class H extends a.Component{render(){return l.a.createElement("div",{__source:{fileName:q,lineNumber:6},__self:this})}}var z=H,B=(t(40),"/Users/shadow/projects/Web/MyOffice SPA/src/components/Changepass/Changepass.js");var T=function(){return l.a.createElement(l.a.Fragment,{__source:{fileName:B,lineNumber:15},__self:this},l.a.createElement("div",{className:"categories__links",__source:{fileName:B,lineNumber:16},__self:this},l.a.createElement(f.b,{to:"/changepassword/",exact:!0,activeClassName:"active",__source:{fileName:B,lineNumber:17},__self:this},"Изменить пароль"),l.a.createElement(f.b,{to:"#",className:"hidden",__source:{fileName:B,lineNumber:18},__self:this})),l.a.createElement("div",{className:"categories__elements",onSubmit:e=>{e.preventDefault(),document.querySelector(".pass-cancel").style.display="none",document.querySelectorAll(".close-pass").forEach(e=>{e.style.display="block"})},__source:{fileName:B,lineNumber:20},__self:this},l.a.createElement("form",{className:"changepass__form",__source:{fileName:B,lineNumber:21},__self:this},l.a.createElement("fieldset",{__source:{fileName:B,lineNumber:22},__self:this},l.a.createElement("input",{id:"oldpass",placeholder:"Старый пароль",type:"password",className:"changepass__input",__source:{fileName:B,lineNumber:23},__self:this}),l.a.createElement("input",{placeholder:"Новый пароль",type:"password",className:"changepass__input",__source:{fileName:B,lineNumber:24},__self:this}),l.a.createElement("input",{placeholder:"Подтвердите новый пароль",type:"password",className:"changepass__input",__source:{fileName:B,lineNumber:25},__self:this}),l.a.createElement("input",{type:"submit",value:"Сохранить",className:"submit-btn",__source:{fileName:B,lineNumber:26},__self:this}))),l.a.createElement(f.a,{to:"/",className:"pass-cancel",__source:{fileName:B,lineNumber:29},__self:this},"Отменить"),l.a.createElement("div",{className:"close-pass",__source:{fileName:B,lineNumber:30},__self:this},l.a.createElement("p",{__source:{fileName:B,lineNumber:31},__self:this},"Пароль установлен")),l.a.createElement(f.a,{to:"/",className:"pass-cancel close-pass",__source:{fileName:B,lineNumber:33},__self:this},"Закрыть")))},G=(t(15),"/Users/shadow/projects/Web/MyOffice SPA/src/components/History/ItemHistory.js");class J extends a.Component{render(){const e=this.props.state.map(e=>{const s=new Date(e.date),t="".concat(s.getDay(),".").concat(s.getMonth(),".").concat(s.getFullYear());return l.a.createElement("div",{className:"history__content",key:e.id,__source:{fileName:G,lineNumber:12},__self:this},l.a.createElement("p",{className:"history__item",__source:{fileName:G,lineNumber:13},__self:this},e.id),l.a.createElement("p",{className:"history__item",__source:{fileName:G,lineNumber:14},__self:this},t),l.a.createElement("p",{className:"history__item",__source:{fileName:G,lineNumber:15},__self:this},e.worker),l.a.createElement("p",{className:"history__item",__source:{fileName:G,lineNumber:16},__self:this},e.isDone?"Выполнено":"Отказ"))});return l.a.createElement(l.a.Fragment,{__source:{fileName:G,lineNumber:25},__self:this},e)}}var L=Object(m.b)(e=>({state:e.history}))(J),R="/Users/shadow/projects/Web/MyOffice SPA/src/components/History/Comment.js";function Y(){return l.a.createElement("div",{className:"history__comment",__source:{fileName:R,lineNumber:6},__self:this},l.a.createElement("form",{id:"history__from",__source:{fileName:R,lineNumber:7},__self:this},l.a.createElement("h5",{__source:{fileName:R,lineNumber:8},__self:this},"Вы довольный качеством обслживания"),l.a.createElement("div",{className:"history__radio",__source:{fileName:R,lineNumber:9},__self:this},l.a.createElement("input",{type:"radio",name:"radio",id:"history__yes",className:"history__radio-element",__source:{fileName:R,lineNumber:10},__self:this}),l.a.createElement("label",{htmlFor:"history__yes",__source:{fileName:R,lineNumber:11},__self:this},"Да"),l.a.createElement("input",{type:"radio",name:"radio",id:"history__no",className:"history__radio-element",__source:{fileName:R,lineNumber:12},__self:this}),l.a.createElement("label",{htmlFor:"history__no",__source:{fileName:R,lineNumber:13},__self:this},"Нет"),l.a.createElement("input",{type:"radio",name:"radio",id:"history__desc",className:"history__radio-element",__source:{fileName:R,lineNumber:14},__self:this}),l.a.createElement("label",{htmlFor:"history__desc",__source:{fileName:R,lineNumber:15},__self:this},"Описание")),l.a.createElement("div",{className:"history__comment-desc",__source:{fileName:R,lineNumber:17},__self:this},l.a.createElement("textarea",{name:"radio",rows:"5",cols:"40",maxLength:"200",placeholder:"Ваши комментарии",__source:{fileName:R,lineNumber:18},__self:this})),l.a.createElement("input",{type:"submit",className:"button",id:"history__button",__source:{fileName:R,lineNumber:20},__self:this})))}var K="/Users/shadow/projects/Web/MyOffice SPA/src/components/History/History.js";var Q=function(){return l.a.createElement(l.a.Fragment,{__source:{fileName:K,lineNumber:10},__self:this},l.a.createElement("div",{className:"categories__links",__source:{fileName:K,lineNumber:11},__self:this},l.a.createElement(f.a,{to:"/history",id:"history__link",__source:{fileName:K,lineNumber:12},__self:this},"История"),l.a.createElement(f.a,{to:"",__source:{fileName:K,lineNumber:13},__self:this})),l.a.createElement("div",{className:"categories__elements",__source:{fileName:K,lineNumber:15},__self:this},l.a.createElement("div",{className:"history",__source:{fileName:K,lineNumber:16},__self:this},l.a.createElement("div",{className:"history__title",__source:{fileName:K,lineNumber:18},__self:this},l.a.createElement("h4",{className:"history__title-item",__source:{fileName:K,lineNumber:19},__self:this},"№"),l.a.createElement("h4",{className:"history__title-item",__source:{fileName:K,lineNumber:20},__self:this},"Дата"),l.a.createElement("h4",{className:"history__title-item",__source:{fileName:K,lineNumber:21},__self:this},"Исполнитель"),l.a.createElement("h4",{className:"history__title-item",__source:{fileName:K,lineNumber:22},__self:this},"Статус")),l.a.createElement(L,{__source:{fileName:K,lineNumber:25},__self:this})),l.a.createElement(Y,{__source:{fileName:K,lineNumber:28},__self:this}),l.a.createElement("div",{className:"categories__back",__source:{fileName:K,lineNumber:29},__self:this},l.a.createElement(f.a,{to:"/",__source:{fileName:K,lineNumber:30},__self:this},"Назад"))))},V="/Users/shadow/projects/Web/MyOffice SPA/src/components/Container.js";class X extends a.Component{render(){return l.a.createElement("div",{className:"categories",__source:{fileName:V,lineNumber:17},__self:this},l.a.createElement("div",{className:"categories__content",__source:{fileName:V,lineNumber:18},__self:this},l.a.createElement(o.c,{__source:{fileName:V,lineNumber:19},__self:this},l.a.createElement(o.a,{exact:!0,path:"/",component:E,__source:{fileName:V,lineNumber:20},__self:this}),l.a.createElement(o.a,{path:"/docs",component:O,__source:{fileName:V,lineNumber:21},__self:this}),l.a.createElement(o.a,{path:"/docs:id",component:z,__source:{fileName:V,lineNumber:22},__self:this}),l.a.createElement(o.a,{exact:!0,path:"/categories",component:O,__source:{fileName:V,lineNumber:23},__self:this}),l.a.createElement(o.a,{path:"/categories/:id",component:x,__source:{fileName:V,lineNumber:24},__self:this}),l.a.createElement(o.a,{path:"/profile",component:D,__source:{fileName:V,lineNumber:25},__self:this}),l.a.createElement(o.a,{path:"/profile/:category",component:D,__source:{fileName:V,lineNumber:26},__self:this}),l.a.createElement(o.a,{path:"/changepassword",component:T,__source:{fileName:V,lineNumber:27},__self:this}),l.a.createElement(o.a,{path:"/history",component:Q,__source:{fileName:V,lineNumber:28},__self:this}))))}}var Z=X,$="/Users/shadow/projects/Web/MyOffice SPA/src/components/Layer.js";class ee extends a.Component{render(){return l.a.createElement("div",{className:"wrap",__source:{fileName:$,lineNumber:8},__self:this},l.a.createElement(b,{__source:{fileName:$,lineNumber:9},__self:this}),l.a.createElement(Z,{__source:{fileName:$,lineNumber:10},__self:this}))}}var se=ee,te=(t(33),"/Users/shadow/projects/Web/MyOffice SPA/src/components/Auth/Auth.js");var ae=function(){return l.a.createElement("div",{className:"login__wrap",__source:{fileName:te,lineNumber:11},__self:this},l.a.createElement("div",{className:"login",__source:{fileName:te,lineNumber:12},__self:this},l.a.createElement("div",{className:"login__logo",__source:{fileName:te,lineNumber:13},__self:this},l.a.createElement("h1",{__source:{fileName:te,lineNumber:14},__self:this},"MyOffice")),l.a.createElement("div",{className:"login__content",__source:{fileName:te,lineNumber:16},__self:this},l.a.createElement("h3",{__source:{fileName:te,lineNumber:17},__self:this},"Авторизуйтесь"),l.a.createElement("form",{action:"index.html",className:"login__form",__source:{fileName:te,lineNumber:18},__self:this},l.a.createElement("input",{id:"GET-name",placeholder:"Мобильный номер",type:"email",className:"login__input",__source:{fileName:te,lineNumber:19},__self:this}),l.a.createElement("input",{id:"GET-name",placeholder:"Пароль",type:"password",className:"login__input",__source:{fileName:te,lineNumber:20},__self:this}),l.a.createElement(f.a,{to:"/",id:"submit-btn",__source:{fileName:te,lineNumber:22},__self:this},"Войти"),l.a.createElement(f.a,{to:"#",__source:{fileName:te,lineNumber:23},__self:this},"Забыли пароль")))))},le="/Users/shadow/projects/Web/MyOffice SPA/src/components/App.js";const ie=Object(u.a)();class re extends a.Component{render(){return l.a.createElement(o.b,{history:ie,__source:{fileName:le,lineNumber:15},__self:this},l.a.createElement(o.c,{__source:{fileName:le,lineNumber:16},__self:this},l.a.createElement(o.a,{path:"/login",component:ae,__source:{fileName:le,lineNumber:17},__self:this}),l.a.createElement(o.a,{path:"/",component:se,__source:{fileName:le,lineNumber:18},__self:this})))}}var _e=re,me="/Users/shadow/projects/Web/MyOffice SPA/src/app.js";const ne=Object(_.b)(c);r.a.render(l.a.createElement(m.a,{store:ne,__source:{fileName:me,lineNumber:20},__self:void 0},l.a.createElement(_e,{__source:{fileName:me,lineNumber:21},__self:void 0})),document.getElementById("root"))}]);