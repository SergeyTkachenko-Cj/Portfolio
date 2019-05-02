
(function () {
    const wolf: HTMLElement = document.querySelector(".fixed");
    const scrollArea: HTMLElement = document.querySelector('.outer-wrapper');
    let scrollDirect: number = 0;
    scrollDirect = scrollArea.scrollTop;

    scrollArea.addEventListener('scroll', function(e) {
        scrollArea.scrollTop > scrollDirect ? 
        wolf.style.transform = 'rotateY(180deg)' :
        wolf.style.transform = 'rotateY(0deg)';
        scrollDirect = scrollArea.scrollTop;
    })
})();
