var body = document.getElementsByTagName('body')[0];
window.onscroll = function(event) {
    var scroll = window.pageYOffset;
    if (scroll < 250) {
      // green
      body.style.backgroundColor = '#fff';
    } else if (scroll >= 250) {
      // yellow
      body.style.backgroundColor = '#185abb';
    }
}