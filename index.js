console.log("pallavi");
setInterval(displayClock,1000);
function displayClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var en = "";
  
  
  






  if(hour>=10 && hour<12){ 
  document.getElementById("pic").setAttribute("src","morning.png")     
      document.getElementById("grab").innerText =
     "Grab Some Healthy Breakfast!!!";
      document.getElementById("goodMorning").innerText =
   "Grab Some Healthy Breakfast!!!";
}


  else if(hour>12 && hour<16){
  document.getElementById("pic").setAttribute("src","eve.png") 
  document.getElementById("grab").innerText ="GOOD AFTERNOON !! TAKE SOME SLEEP";
  document.getElementById("goodMorning").innerText =
  "GOOD AFTERNOON !! TAKE SOME SLEEP";
 }


else if(hour>=16 && hour <21){
  document.getElementById("pic").setAttribute("src","lunch_image.png")
  document.getElementById("grab").innerText =
  "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  document.getElementById("goodMorning").innerText =
  "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
}

else if(hour>=21){
  "CLOSE YOUR EYES AND GO TO SLEEP";
  document.getElementById("pic").setAttribute("src","night.png")
  document.getElementById("goodMorning").innerText =
  "CLOSE YOUR EYES AND GO TO SLEEP";
}
else{
  "CLOSE YOUR EYES AND GO TO SLEEP";
  document.getElementById("pic").setAttribute("src","night.png")
  document.getElementById("goodMorning").innerText =
  "CLOSE YOUR EYES AND GO TO SLEEP";
}


 if(hour>11){
  en = "PM";
  
  
}
else{
  en="AM";
}
if (hour > 12){
  hour = hour - 12;
}
if(hour == 0){
  hour = 12;
}
if(hour<10){
hour ='0' + hour;
}
if(minute<10){
minute ='0' + minute;
}
if(second<10){
second ='0' + second;
}
// document.getElementById('set').innerText = hour + ':' + minute  + ':' + second + ' ' + am_pm;
document.getElementById('hour').innerText = hour;
document.getElementById('minute').innerText = minute;
document.getElementById('second').innerText = second;
document.getElementById('en').innerText = en;
}

function dayValue(){


let wakeUp = document.getElementById("wakeOne").value
let noon = document.getElementById("wakeTwo").value
let nap = document.getElementById("wakeThree").value
let night = document.getElementById("wakeFour").value
document.getElementById("all").innerText= `wake Up Time: ${wakeUp} lunch time :${noon} Nap time: ${nap} Night time:${night}`
}