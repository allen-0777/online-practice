let thisH1 = document.getElementsByTagName("h1")[0];

let myVar = setInterval(myTimer,1000);



function myTimer(){
    let d = new Date();
    thisH1.innerHTML = d.toLocaleString();
}
