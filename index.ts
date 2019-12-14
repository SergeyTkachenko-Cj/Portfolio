(function() {
    const callback = entries => {
        entries.forEach(entry => {
            const data: string = entry.target.getAttribute('data-toggle');
            entry.isIntersecting ? entry.target.classList.add(data) : null;
        });
    };
      
    const observer: IntersectionObserver = new IntersectionObserver(callback);
      
    const targets: NodeListOf<Element> = document.querySelectorAll(".js_sign");
    targets.forEach(target => observer.observe(target));
})();
