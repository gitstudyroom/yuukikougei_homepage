document.addEventListener('DOMContentLoaded', function() {

    // Hero Slider Logic - only run if the slider exists on the page
    const slider = document.querySelector('.hero-slider');
    if (slider) {
        const images = [
            'images/IMG_7702.JPG',
            'images/IMG_7703.JPG',
            'images/IMG_7704.JPG',
            'images/IMG_7705.JPG',
            'images/IMG_7706.JPG'
        ];
        let currentImageIndex = 0;

        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            if (index === 0) {
                img.classList.add('active');
            }
            slider.appendChild(img);
        });

        const sliderImages = slider.querySelectorAll('img');

        function changeImage() {
            sliderImages[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            sliderImages[currentImageIndex].classList.add('active');
        }

        setInterval(changeImage, 5000); // Change image every 5 seconds
    }

    // Load page
    function loadPage(placeholder,pageName) {
        if(placeholder){
            fetch(pageName)
                .then(response => response.text())
                .then(data => {
                    placeholder.innerHTML = data;
                });
        }
    }

    // Load Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    loadPage(headerPlaceholder,'header.html');

    // Load Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    loadPage(footerPlaceholder,'footer.html');

});
