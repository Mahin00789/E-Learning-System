let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
function showMessage(){
  alert("Thank you for contacting us");
}
$(document).ready(function() {
  $("#teacher-2").click(function() {
      $(".phone-number").show();
  });
});

