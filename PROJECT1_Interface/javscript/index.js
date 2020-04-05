
  window.onscroll = function() {
    var windowScroll = document.documentElement.scrollTop;
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollAmount = (windowScroll / windowHeight) * 100;
    document.getElementById("mybar").style.width = scrollAmount + "%";
};   

/*
let theStateoftheInterface = (event) => {
    let winH = document.documentElement.clientHeight
    let winH = document.documentElement.clientWidth
    let docH = document.documentElement.scrollHeight
    let docH = document.documentElement.scrollWidth
    let winY = window.scrollY
    let winX = window.scrollX
    let maxY = docH - winH
    let maxX = docW - winW
    let pctY = Math.round(winY / Math.max(maxY, 1) * 100)
    let pctX  = Math.round(winX / Math.max(maxX, 1) * 100)

}

if (winY >= maxY) {
    document.querySelector('#content').innerHTML += `
    <section1 class="full-viewport">
    <blockquote>Toronto's Latest News</blockquote>
    </section1>`
}
*/

var timeleft = 500;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);


var listElm = document.querySelector('#infinite-list');

var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 20; i++) {
    var item = document.createElement('li');
    item.innerText = 'Page ' + nextItem++;;
    listElm.appendChild(item);
  }
}

listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMore();
  }
});

loadMore();

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}