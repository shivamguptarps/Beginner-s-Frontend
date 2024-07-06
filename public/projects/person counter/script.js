let count=0;
function increment(){
    document.getElementById('counter').innerText=++count;
}

function save(){
    let saveEL=document.getElementById('entries');
    let num=count+'-';
    saveEL.innerText += num;
    document.getElementById('counter').innerText=0
    count=0
}