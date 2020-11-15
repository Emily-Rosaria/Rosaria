window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").classList.add('active');
  } else {
    document.getElementById("navbar").classList.remove('active');
  }
}
