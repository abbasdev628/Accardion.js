"use strict";

const btn = document.querySelectorAll( "#accardion button");
const p = document.querySelectorAll ( "#accardion p");

for(let b= 0; b<p.length; b++){
    p[b].classList.remove("active")
};


for(let a =0 ; a<btn.length; a++){
    btn[a].onclick= function(){
        this.nextElementSibling.classList.toggle("active");
    }
};

















