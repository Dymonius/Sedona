document.body.onload = function () {
    setTimeout(function () {
        var preloader = document.getElementById('page-preloader');
        var headerAnimation = document.querySelector('.header__hero img');

        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
            headerAnimation.classList.add('zoomIn');
        }
    }, 1000)
}