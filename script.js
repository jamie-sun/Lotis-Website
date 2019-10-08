var index = 1;
showSlide(index);

function slidedirection(x) {
  clearTimeout(timer);
  showSlide(index += x);
}

function navSlide(x) {
  clearTimeout(timer);
  showSlide(index = x);
}

function showSlide(x) {
  var slide = document.getElementsByClassName('slides');
  var dots = document.getElementsByClassName('dot');
  if (x > slide.length) { index=1 }
  if (x < 1) { index=slide.length }
  var i;
  for (i=0; i<slide.length; i++) {
    slide[i].style.display = "none";
  }
  for (i=0; i<dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[index - 1].style.display = "block";
  dots[index - 1].className += " active";
  timer = setTimeout(auto,4000);
}

function auto() {
  slidedirection(1);
}
