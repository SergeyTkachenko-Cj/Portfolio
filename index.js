(function () {
    var callback = function (entries) {
        entries.forEach(function (entry) {
            var data = entry.target.getAttribute('data-toggle');
            entry.isIntersecting ? entry.target.classList.add(data) : null;
        });
    };
    var observer = new IntersectionObserver(callback);
    var targets = document.querySelectorAll(".js_sign");
    targets.forEach(function (target) { return observer.observe(target); });
})();
