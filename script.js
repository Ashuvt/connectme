// ...Counter..............................................

const counters = document.querySelectorAll(".count");
const speed = 1000;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(+counter.getAttribute("data-target"));
    const count = parseInt(+counter.innerText);
    const increment = Math.ceil(target / speed);
    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});


// ....testimonial sliding...........................

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("box");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// ......Time............................




// function showtime(){
//   var date = new Date();
  
//   var h = date.getHours();
//   var m = date.getMinutes();
//   var s = date.getSeconds();
//   var dd = date.getDate();
//   var mm = date.getMonth();
//   var yy = date.getFullYear();
//   var day = date.getDay();
//   var wish = "Have a nice day";
//   switch(mm){
//       case 0:
//       mm = "January";
//       break;
//       case 1:
//       mm = "Febuary";
//       break;
//       case 2:
//       mm = "March";
//       break;
//       case 3:
//       mm = "April";
//       break;
//       case 4:
//       mm = "May";
//       break;
//       case 5:
//       mm = "June";
//       break;
//       case 6:
//       mm = "July";
//       break;
//       case 7:
//       mm = "August";
//       break;
//       case 8:
//       mm = "September";
//       break;
//       case 9:
//       mm = "October";
//       break;
//       case 10:
//       mm="November"
//       break;
//       case 11:
//       mm="December";
//       break;
//       default:
//       mm="Nothing";
//   }
//   switch(day){
//       case 0:
//           day = "Sunday";
//           break;
//       case 1:
//           day = "Monday";
//           break;
//       case 2:
//           day = "Tuesday";
//           break;
//       case 3:
//           day = "Wednesday";
//           break;    
//       case 4:
//           day = "Thursday";
//           break;            
//       case 5:
//           day = "Friday";
//           break;      
//       case 6:
//           day = "Saturday";
//           break;      
//           default :
//           day = "None";
//   }    
//   var session = "AM";  
//   if(h==0){
//       h=12;
//   }  
//   if(h>12){
//       h=h-12;
//       session="PM";
//   }
//   if(dd<10)
  
//   h = (h<10)? "0"+ h : h;
//   m = (m<10)? "0"+ m : m;
//   s = (s<10)? "0"+ s : s; 
//   var time = h + ":" + m + ":" + s + " ";
//   var date = day + ", " + dd +" " + mm + " " + yy;
// var ampm = session;
//   document.getElementById("times").innerText = time;
//   document.getElementById("ampm").innerText=ampm;
//   document.getElementById("date").innerText = date;
//   setTimeout(showtime, 1000);
//   }  
//   showtime();




// ......button gotop...............
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//...toggele navigator.................

function startbtn(){
document.querySelector("#menucard").classList.toggle("altbar");
 document.querySelector(".start").classList.toggle("off");
 document.querySelector(".close").classList.toggle("on"); 
}

function closebtn(){
  document.querySelector("#menucard").classList.toggle("altbar");
   document.querySelector(".start").classList.toggle("off");
   document.querySelector(".close").classList.toggle("on");
  }



