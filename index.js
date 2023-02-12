function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var typing = new Typed(".text", {
  strings: [
    "",
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Web Designer",
  ],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});
