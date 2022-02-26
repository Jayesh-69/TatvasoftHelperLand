function showFaq(i) {
  var x = document.getElementById("faq"+i);
  if (x.style.display === "none") {
    x.style.display = "block";
    var y = document.getElementById("faq" + i + "BulletImg");
    y.src = "images/bullet-arrow-down.png";
  } else {
    x.style.display = "none";
    var y = document.getElementById("faq" + i + "BulletImg");
    y.src = "images/bullet-arrow.png";
  }
}

function switchFaqs(temp) {
    var x = document.getElementById("customerFaqs");
    var y = document.getElementById("serviceFaqs");
    if (temp == 0)
    {
        x.style.display = "block";
        y.style.display = "none";
        var xx = document.getElementById("contentCustomer");
        var xxx = document.getElementById("customerSwitch");
        var yy = document.getElementById("contentService");
        var yyy = document.getElementById("serviceSwitch");
        yyy.style.color = "black";
        yy.style.backgroundColor = "#f4f5f8";
        xxx.style.color = "white";
        xx.style.backgroundColor = "#29626d";
    }
    else
    {
        x.style.display = "none";
        y.style.display = "block";
        var xx = document.getElementById("contentCustomer");
        var xxx = document.getElementById("customerSwitch");
        xxx.style.color = "black";
        xx.style.backgroundColor = "#f4f5f8";
        var yy = document.getElementById("contentService");
        var yyy = document.getElementById("serviceSwitch");
        yyy.style.color = "white";
        yy.style.backgroundColor = "#29626d";
    }
}
