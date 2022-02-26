function showFaq(i) {
  var x = document.getElementById("faq" + i);
  if (x.style.display === "none") {
    x.style.display = "block";
    var y = document.getElementById("faq" + i + "BulletImg");
    y.src = "images/down-arrow-dark.png";
  } else {
    x.style.display = "none";
    var y = document.getElementById("faq" + i + "BulletImg");
    y.src = "images/right-arrow-dark.png";
  }
}
