// 640是54px    320 27px
// 320/640  * 54px
// rem 自适应
var windowWidth = document.body.offsetWidth;
var htmlfontSize = windowWidth / 640 * 54;
document.querySelector('html').style.fontSize = htmlfontSize + 'px';
window.addEventListener('resize', function () {
    var windowWidth = document.body.offsetWidth;
    var htmlfontSize = windowWidth / 640 * 54;
    if (htmlfontSize > 54) {
        htmlfontSize = 54;
    }
    document.querySelector('html').style.fontSize = htmlfontSize + 'px';
});