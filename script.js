let endDate ="09 March 2026 09:17:00 PM";
let day = document.getElementById("day")
let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let launchDate=document.getElementById("launched-date");
launchDate.innerText=endDate;
function clock(){
    let now = new Date();
    let end = new Date(endDate)
    let diff =(end - now) /1000;
    if(diff<0)return
    day.innerText =Math.floor((diff/3600) /24) ;
    hour.innerText =Math.floor((diff /3600) %24) ;
    minute.innerText =Math.floor((diff / 60) % 60) ;
    second.innerText= Math.floor(diff % 60) ;
}
setInterval(function(){
    clock()
},1000)