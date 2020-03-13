window.onscroll = function() {
    var windowScroll = document.documentElement.scrollTop;
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollAmount = (windowScroll / windowHeight) * 100;
    document.getElementById("mybar").style.width = scrollAmount + "%";
}; 





