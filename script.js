'use strict'

const bgcolorOrg = document.body.style.backgroundColor;
let count = 0;
const button = document.getElementById("changeButton");
button.addEventListener("click",(event)=>{
    if (count % 4 == 0) {
        document.body.style.backgroundColor = "#fffacd";
    } else if (count % 4 == 1) {
        document.body.style.backgroundColor = "#c0c0c0";
    } else if (count % 4 == 2) {
        document.body.style.backgroundColor = "#ffe4e1";
    } else {
        document.body.style.backgroundColor = bgcolorOrg;
    }
    count++;
});


