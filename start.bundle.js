(()=>{"use strict";var e={545:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(601),r=n.n(o),a=n(314),s=n.n(a)()(r());s.push([e.id,"* {\n  box-sizing: border-box;\n}\n\nhtml, body {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #f0f0f0;\n  font-family: Arial, sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-title{\n  text-align: center;\n  margin-bottom: 0;\n}\n\nform {\n  width: clamp(260px, 80vw, 500px);\n  height: 80%;\n  margin: auto;\n  background-color: #f9f9f9;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  padding: 20px;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\nlabel {\n  display: block;\n  color: #666;\n  margin-bottom: 5px;\n}\n\ninput, button {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 100%;\n  box-sizing: border-box;\n  transition: border-color 0.3s ease;\n}\n\ninput:focus, button:focus {\n  outline: none;\n  border-color: #5e9ed6;\n}\n\nbutton {\n  background-color: #5cb85c;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\nbutton:hover {\n  background-color: #4cae4c;\n}\n\n.error {\n  display: block;\n  color: #d9534f;\n  font-size: 14px;\n  margin-top: 5px;\n}\n\n.valid {\n  border-color: #5cb85c;\n}\n\n.invalid {\n  border-color: #d9534f;\n}\n",""]);const i=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(s[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},s=[],i=0;i<e.length;i++){var d=e[i],c=o.base?d[0]+o.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var v=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:v,references:1})}s.push(u)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var d=o(e,r),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),o=n(825),r=n.n(o),a=n(659),s=n.n(a),i=n(56),d=n.n(i),c=n(540),l=n.n(c),u=n(113),p=n.n(u),m=n(545),v={};v.styleTagTransform=p(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),t()(m.A,v),m.A&&m.A.locals&&m.A.locals;const f=document.createElement("h1");f.classList.add("form-title"),f.textContent="SIGN UP";const b=document.createElement("form");b.setAttribute("novalidate",!0);const h=document.createElement("ul"),g=document.createElement("button");g.textContent="Submit",g.setAttribute("type","submit");const x=["email","country","zipCode","password","passwordConfirmation"];for(let e=0;e<x.length;e++)y(x[e],e);function y(e,t){let n="";const o=document.createElement("li");o.classList.add(`item${t+1}`);const r=document.createElement("label");r.setAttribute("for",e),r.textContent=e.charAt(0).toUpperCase()+e.slice(1);const a=document.createElement("input");"email"===e?n="email":"password"===e||"passwordConfirmation"===e?(n="password",a.minLength="8"):n="text",a.setAttribute("type",n),a.setAttribute("name",e),a.setAttribute("id",e),a.setAttribute("required",!0);const s=document.createElement("span");s.classList.add("error"),s.textContent="",o.appendChild(r),o.appendChild(a),o.appendChild(s),h.appendChild(o)}b.appendChild(h),b.appendChild(g),document.body.appendChild(f),document.body.appendChild(b);const C=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,w=document.getElementById("email"),L=document.querySelector("#email+.error");w.addEventListener("input",(()=>{w.value.length>0&&!C.test(w.value)?(L.textContent="Please enter a valid email address",w.classList.add("invalid"),w.classList.remove("valid")):(L.textContent="",w.classList.remove("invalid"),w.classList.add("valid"))}));const A=document.getElementById("password"),E=document.querySelector("#password+.error"),S=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,P=document.getElementById("passwordConfirmation"),I=document.querySelector("#passwordConfirmation+.error");A.addEventListener("input",(()=>{A.value.length<8?(E.textContent=`Password is too short, only ${A.value.length} characters long`,A.classList.add("invalid"),A.classList.remove("valid")):S.test(A.value)?(E.textContent="",A.classList.remove("invalid"),A.classList.add("valid")):(E.textContent="Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.",A.classList.add("invalid"),A.classList.remove("valid"))})),P.addEventListener("input",(()=>{A.value!==P.value?(I.textContent="Passwords do not match",P.classList.add("invalid"),P.classList.remove("valid")):(I.textContent="",P.classList.remove("invalid"),P.classList.add("valid"))})),b.addEventListener("submit",(e=>{C.test(w.value)&&S.test(A.value)&&A.value===P.value&&0!==A.value.length?(console.log("next page"),e.preventDefault(),window.location.href="./main.html"):(e.preventDefault(),C.test(w.value)?L.textContent="":(L.textContent="Please enter a valid email address",w.classList.add("invalid")),0===A.value.length?E.textContent="You must enter a password":E.textContent="",A.value!==P.value?I.textContent="Passwords do not match":I.textContent="",console.log("same page"))}))})()})();