document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.sec-and-component');

    function revealSections() {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial call to show the home section
});