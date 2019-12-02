// (function() {
//     const wolf: HTMLElement = document.querySelector(".volk");
//     const scrollArea: HTMLElement = document.querySelector('.outer-wrapper');
//     let scrollDirect: number = 0;
//     scrollDirect = scrollArea.scrollTop;
//     const wolfTrans = () => {
//         const scrollAnchor: HTMLElement = document.querySelector('.III');
//         console.log(scrollAnchor.getBoundingClientRect().x);
//             if (scrollAnchor.getBoundingClientRect().x <= -157) {
//                 wolf.style.top = '75%';
//                 wolf.style.width = '18vw';
//                 wolf.style.height = '8.5vw';
//                 wolf.style.display = 'block';
//             } 
//             // else {
//             //     wolf.style.top = '10%';
//             //     wolf.style.width = '9vw';
//             //     wolf.style.height = '4.5vw';
//             // }
//             else {
//                 wolf.style.display = 'none';
//             }
//     };
//     scrollArea.addEventListener('scroll', function(e) {
//         scrollArea.scrollTop > scrollDirect ? 
//         wolf.style.transform = 'rotateY(180deg)' :
//         wolf.style.transform = 'rotateY(0deg)';
//         scrollDirect = scrollArea.scrollTop;
//         wolfTrans();
//     })
//     window.addEventListener('resize', wolfTrans);
// })();
// (function() {
//     const scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
//     const elementsToShow = document.querySelectorAll('.show-on-scroll');
//     const loop = () => {
//         elementsToShow.forEach(function (element) {
//           isElementInViewport(element) ? 
//           element.classList.add('is-visible') : element.classList.remove('is-visible');
//         });
//         scroll(loop);
//       }
// })
(function () {
    var callback = function (entries) {
        entries.forEach(function (entry) {
            var data = entry.target.getAttribute('data-toggle');
            entry.isIntersecting ? entry.target.classList.add(data) : null;
        });
    };
    var observer = new IntersectionObserver(callback);
    var targets = document.querySelectorAll(".js_anima_line, .red");
    console.log(targets);
    targets.forEach(function (target) { return observer.observe(target); });
})();
