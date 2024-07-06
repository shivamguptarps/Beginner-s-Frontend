function commontextTransform(b){
    let a=document.getElementById("textarea1");
    if(a.style.textTransform==b){
        a.style.textTransform="capitalize";
    }
    else{
        a.style.textTransform=b;
    }
}

function commontextAlign(b){
    let a=document.getElementById("textarea1");
    if(a.style.textAlign==b){
        a.style.textAlign="left";
    }
    else{
        a.style.textAlign=b;
    }
}

function f1(){
 let a= document.getElementById("textarea1");
  if(a.style.fontWeight=="bold"){
    a.style.fontWeight="normal";
  }
  else{
    a.style.fontWeight ="bold";
  }
}
function f2(){
  let a=document.getElementById("textarea1");
  if(a.style.fontStyle=="italic"){
    a.style.fontStyle="normal";
  }
  else{
    a.style.fontStyle="italic";
  }
}
function f3() {
//  document.getElementById("textarea1").style.textAlign="left";
    commontextAlign("left");
}
function f4() {
//  document.getElementById("textarea1").style.textAlign="center";
commontextAlign("center");
}
function f5() {
    // document.getElementById("textarea1").style.textAlign = "right";
    commontextAlign("right");
}
function f6() {
    // document.getElementById("textarea1").style.textTransform = "uppercase";
    commontextTransform("uppercase");
}
function f7() {
    commontextTransform("lowercase");
    // document.getElementById("textarea1").style.textTransform = "lowercase";
}
function f8() {
    commontextTransform("capitalize");
    // document.getElementById("textarea1").style.textTransform = "capitalize";
}
function f9() {

    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";
}
