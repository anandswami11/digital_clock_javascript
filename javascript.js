

let digitalClock = () => {

  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();


  let amorpm = hours >= 12 ? 'pm' : 'am';

  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;
  document.querySelector("#amorpm").innerHTML = amorpm;

  let timeNow = new Date()

 const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 console.log(months[timeNow.getMonth()]);


  let myDate = timeNow.toLocaleDateString()

  document.querySelector('#date').innerHTML = timeNow.getDate()
  document.querySelector('#month').innerHTML = months[timeNow.getMonth()]
  document.querySelector('#year').innerHTML = timeNow.getFullYear()

  setTimeout(digitalClock, 500);
  
} 
digitalClock();




