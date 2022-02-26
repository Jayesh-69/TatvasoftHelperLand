function openSubMenu(temp,temp2) {
    var x = document.getElementById(temp);
    if (x.style.display === "block"){
        x.style.display = "none";
        var y = document.getElementById(temp2);
        y.style.backgroundColor = "white";
        y.style.borderBottom = "1px solid #f2f2f2";
        var z = document.getElementById(temp2 + "Img");
        z.src = "images/right-arrow-dark.png";
    }
    else{
        x.style.display = "block";
        var y = document.getElementById(temp2);
        y.style.backgroundColor = "#F9F9F9";
        y.style.borderBottom = "none";
        var z = document.getElementById(temp2 + "Img");
        z.src = "images/down-arrow-dark.png";
    }
}


function temp() {
  var x = document.getElementsByClassName("userTableMenu")[0];
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}