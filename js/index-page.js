function startIndex() {
  $("#index-page").fadeIn(1500);
  var word = document.getElementById("activated");
  word.style.display = "block";
  word.id = "";

  word.classList.add("glitch");
}

$("#index-page").fadeOut(0);
