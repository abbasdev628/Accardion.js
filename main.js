"use strict";


//  const text1 = document.getElementsByClassName("txt1")
// // console.log(text1[0]);
// text1[0].onclick=function(){
//     this.style.color= "red"
// }

const text1 = document.querySelectorAll(".txt1")

// text1.onclick = function(){
//     this.style.color= "blue"
// };
for(let i=0;i<text1.length;i++){
    text1[i].onclick=function(){
        this.classList.toggle("active")
    }
}

const btn = document.querySelectorAll("#accardion button");
const p = document.querySelectorAll("#accardion p");

for ( let a=0;a<btn.length;a++){
    btn[a].onclick=function(){
        for(let b=0;b<p.length;b++){
            p[b].classList.remove("passiv")
        }
        this.nextElementSibling.classList.add("passiv")
    }
}

