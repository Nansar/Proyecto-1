document.addEventListener('DOMContentLoaded', function () {

    // brands parade

    function scrollImages() {
        const container = document.getElementById('brands-row');
        const imgCols = container.getElementsByClassName('img-col');
        const images = Array.from(imgCols).map((imgCol) => imgCol.firstElementChild);

        let scrollPosition = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const totalWidth = container.scrollWidth;

        function loop() {
            scrollPosition += 1;
            if (scrollPosition >= totalWidth - containerWidth) {
                scrollPosition = 0;
            }
            container.scrollLeft = scrollPosition;
            requestAnimationFrame(loop);
        }

        loop();
    }

    scrollImages();


    // scroll to top button

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollToTopButton").style.display = "block";
        } else {
            document.getElementById("scrollToTopButton").style.display = "none";
        }
    }

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

});