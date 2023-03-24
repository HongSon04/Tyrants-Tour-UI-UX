var modal = document.getElementById("myModal");

var btn = document.querySelector("#myBtnHiden");
var btn1 = document.querySelector("#myBtnHiden1");
var btn2 = document.querySelector("#myBtnHiden2");
var btnalert = document.querySelector('#btn-alert');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
btnalert.onclick = function(){
  alert('Sign Up Complete Please Wait Us Contact You !!');
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

btn1.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

btn2.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
