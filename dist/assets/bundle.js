(()=>{"use strict";function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var n=function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.response=db.collection("chats"),this.room="general",this.unsub}var t,o;return t=n,(o=[{key:"selectRoom",value:function(e){this.room=e,console.log("this is room ".concat(e)),this.unsub&&this.unsub()}},{key:"getChat",value:function(e){this.unsub=this.response.where("room","==",this.room).orderBy("created_at").onSnapshot((function(n){n.docChanges().forEach((function(n){var t=n.doc;"added"===n.type&&e(t.data())}))}))}},{key:"addChat",value:function(e,n){var t=new Date,o={username:n,room:this.room,message:e,created_at:firebase.firestore.Timestamp.fromDate(t)};o.message.length?this.response.add(o).then((function(){console.log("message added")})).catch((function(e){return console.log(e.message)})):console.log("message cannot be empty")}},{key:"unsubscribe",value:function(){return this.unsub}}])&&e(t.prototype,o),n}();function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=document.querySelectorAll(".logged-in"),r=document.querySelectorAll(".logged-out"),a=document.querySelector(".account__details"),i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.chats=n}var n,i;return n=e,(i=[{key:"render",value:function(e){var n=dateFns.format(e.created_at.toDate(),"HH:mm A"),t='\n            <li>\n                <span class="time">'.concat(n,'</span>\n                <span class="username">').concat(e.username,'</span>\n                <span class="message">').concat(e.message,"</span>\n            </li>\n        ");this.chats.innerHTML+=t}},{key:"clear",value:function(){this.chats.innerHTML=""}},{key:"setupUI",value:function(e){if(e){var n='\n                <h6 class="white-text">Logged in as : '.concat(e.email,"</h6>\n            ");a.innerHTML=n,r.forEach((function(e){return e.style.display="none"})),o.forEach((function(e){return e.style.display=""}))}else a.innerHTML="",r.forEach((function(e){return e.style.display=""})),o.forEach((function(e){return e.style.display="none"}))}}])&&t(n.prototype,i),e}();function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(n,t,o){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.regisForm=n,this.logout=t,this.login=o}var n,t;return n=e,(t=[{key:"regisUsr",value:function(e){var n=this;this.regisForm.addEventListener("submit",(function(t){t.preventDefault();var o=n.regisForm["signup-email"].value,r=n.regisForm["signup-password"].value;auth.createUserWithEmailAndPassword(o,r).then((function(t){M.Modal.getInstance(e).close(),n.regisForm.reset()})).catch((function(e){return console.log(e.message)}))}))}},{key:"logoutUsr",value:function(){this.logout.addEventListener("click",(function(e){e.preventDefault(),auth.signOut().then((function(){})).catch((function(e){return console.log(e.message)}))}))}},{key:"loginUsr",value:function(e){var n=this;this.login.addEventListener("submit",(function(t){t.preventDefault();var o=n.login["login-email"].value,r=n.login["login-password"].value;auth.signInWithEmailAndPassword(o,r).then((function(t){M.Modal.getInstance(e).close(),n.login.reset()})).catch((function(e){return console.log(e.message)}))}))}}])&&s(n.prototype,t),e}(),c=document.querySelector(".chat__pageList > ul"),l=document.querySelector(".chat__messageForm > form"),f=document.querySelector(".sideber__channelList"),d=document.querySelector(".header__leftSide h4"),h=document.querySelector("#signup-form"),g=document.querySelector("#modal-signup"),m=document.querySelector("#logout"),v=document.querySelector("#login-form"),y=document.querySelector("#modal-login"),p=document.querySelector(".profile__info > h6"),b=new n,w=new i(c),E=new u(h,m,v);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".modal");M.Modal.init(e)})),auth.onAuthStateChanged((function(e){if(!e)throw b.unsubscribe(),w.setupUI(),d.textContent="you have to logged in",new Error("you have to logged in");d.textContent="pick channel",w.setupUI(e),p.textContent=e.email,f.addEventListener("click",(function(e){if("LI"===e.target.tagName){w.clear();var n=e.target.getAttribute("id");b.selectRoom(n),d.textContent=n,b.getChat((function(e){return w.render(e)}))}})),l.addEventListener("submit",(function(n){n.preventDefault();var t=l.input__message.value.trim();b.addChat(t,e.email),l.reset()})),b.getChat((function(e){return w.render(e)}))})),E.regisUsr(g),E.logoutUsr(),E.loginUsr(y)})();