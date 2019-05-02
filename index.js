(function () {
    var wolf = document.querySelector(".fixed");
    var scrollArea = document.querySelector('.outer-wrapper');
    var scrollDirect = 0;
    scrollDirect = scrollArea.scrollTop;
    scrollArea.addEventListener('scroll', function (e) {
        scrollArea.scrollTop > scrollDirect ?
            wolf.style.transform = 'rotateY(180deg)' :
            wolf.style.transform = 'rotateY(0deg)';
        scrollDirect = scrollArea.scrollTop;
    });
})();
