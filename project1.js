let countel=document.getElementById("counter")
let preventries=document.getElementById("previous-entries")
let count=0
function increament(){
    count+=1;
    countel.innerText=count;
    

}

function save(){
    let countstr=count+" - ";

preventries.innerText=countstr;

countel.innerText=0;
count=0;

}