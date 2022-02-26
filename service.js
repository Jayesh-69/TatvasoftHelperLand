var array = ['one','two','three','four','five','six','seven']

function switchMenu(temp) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === temp) {
        var x = document.getElementById(array[i]);
        x.style.display = "block";
      } else {
        var y = document.getElementById(array[i]);
        y.style.display = "none";
      }
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] === temp) {
        var x = document.getElementById("service"+array[i]);
        x.style.backgroundColor = "#29626d";
      } else {
        var y = document.getElementById("service"+array[i]);
        y.style.backgroundColor = "#1D7A8C";
      }
    }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};