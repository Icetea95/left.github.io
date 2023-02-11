// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello leaf!';

// document.querySelector("html").addEventListener("click",function(){
//     alert("别点啦！");
// });

// let myImage = document.querySelector('img');
// myImage.onclick=function(){
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc == 'images/firefox-icon.png'){
//         myImage.setAttribute('src','images/firefox2.png');
//     }
//     else{
//         myImage.setAttribute('src','images/firefox-icon.png');
//     }
// }

let myButton = document.querySelector('button');
 let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('Please input your name，名字呢');
    if(!myName){
        setUserName();
    } else{
        localStorage.setItem('name',myName);
        myHeading.textContent='太帅了 Handsome boy:'+myName;
    }    
}
if(!localStorage.getItem('Name')){
    setUserName();
}
else{
    let storeName=localStorage.getItem('name');
    myHeading.textContent='好帅呀'+storeName;
}
myButton.onclick=function(){
    setUserName();
}