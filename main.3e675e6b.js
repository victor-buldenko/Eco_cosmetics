parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";window.addEventListener("load",function(e){var t=document.querySelectorAll(".shop__slide"),o=document.querySelectorAll(".opencart"),n=document.querySelector(".fixedCart"),c=document.querySelector(".close-cart"),r=document.querySelector(".popup"),l=document.querySelector(".cart-out"),d=document.querySelector("#body"),i=document.querySelector(".shop__button"),a=document.querySelector(".shop__button-close"),s=document.querySelector(".contact__form");o.forEach(function(e){e.addEventListener("click",function(e){l.classList.add("show"),d.style.overflowY="hidden"})}),c.addEventListener("click",function(e){l.classList.remove("show"),d.style.overflowY="scroll"}),t.forEach(function(e){e.addEventListener("click",function(t){document.querySelector(".popup-image").src=e.childNodes[1].childNodes[5].src,r.classList.add("show"),d.style.overflowY="hidden"},!0)}),r.addEventListener("click",function(e){(e.target===r||e.target.classList.contains("close-popup"))&&(r.classList.remove("show"),d.style.overflowY="scroll")}),i.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(".shop__allproducts");if("100%"===t.style.width)return t.style.borderBottomColor="transparent",t.style.overflow="hidden",t.style.width="0",void(t.style.height="0");t.style.width="100%",setTimeout(function(){t.style.borderBottomColor="#344f10",t.style.overflow="auto",t.style.height="100%"},1e3)}),a.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(".shop__allproducts");t.style.borderBottomColor="transparent",t.style.overflow="hidden",t.style.height="0",setTimeout(function(){t.style.width="0"},1e3)}),s.addEventListener("submit",function(e){e.preventDefault(),e.target.reset()});var u=document.querySelectorAll(".product__button"),p=document.querySelector(".card-counter"),y=document.querySelector(".card-counter-f");p.style.opacity=0,y.style.opacity=0;var m=[],L=0;0===L&&(n.style.opacity=0,n.pointerEvents="none"),m.length=u.length,m.fill(0),u.forEach(function(e,t){e.addEventListener("click",function(e){if(e.target.classList.contains("product__button")){if(0!==m[t]){var o=document.querySelector(".counter-".concat(t)),c=document.querySelector(".amount-".concat(t)),r=document.querySelector(".price-".concat(t)).innerHTML.split(" ")[0];return m[t]+=1,o.innerHTML=m[t],c.innerHTML=m[t]*r,L=m.reduce(function(e,t){return e+t}),p.innerHTML=L,y.innerHTML=L,p.style.opacity=1,void(y.style.opacity=1)}var l=document.querySelector(".cart__table-body"),d=document.querySelector(".popup-image").src,i=document.querySelector(".popup-title"),a=window.getComputedStyle(i,":before"),s=document.querySelector(".popup-price").innerHTML,u=document.createElement("TR"),f=document.createElement("TD"),h=document.createElement("TD"),v=document.createElement("IMG"),_=document.createElement("TD"),T=document.createElement("TD"),w=document.createElement("TD"),E=document.createElement("TD");h.appendChild(v),u.classList.add("cart__table-row"),T.classList.add("counter-".concat(t)),E.classList.add("amount-".concat(t)),w.classList.add("price-".concat(t)),f.classList.add("cart__product-position"),h.classList.add("cart__product-imageCell"),v.classList.add("cart__product-image"),_.classList.add("cart__product-name"),T.classList.add("cart__product-number"),w.classList.add("cart__product-price"),E.classList.add("cart__product-amount"),f.innerHTML=document.querySelectorAll(".cart__table-row").length,"0"===f.innerHTML&&(f.innerHTML=1),v.src=d,_.innerHTML=a.getPropertyValue("content"),T.innerHTML=+T.innerHTML+1,w.innerHTML=s;var S=w.innerHTML.split(" ")[0];E.innerHTML=T.innerHTML*S,u.appendChild(f),u.appendChild(h),u.appendChild(_),u.appendChild(T),u.appendChild(w),u.appendChild(E),l.appendChild(u),m[t]+=1,L=m.reduce(function(e,t){return e+t}),p.innerHTML=L,y.innerHTML=L,p.style.opacity=1,y.style.opacity=1,n.style.opacity=1,n.pointerEvents="auto"}})}),window.addEventListener("scroll",function(e){window.scrollY<150||0===L?(n.style.opacity=0,n.pointerEvents="none"):(n.style.opacity=1,n.pointerEvents="auto")})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3e675e6b.js.map