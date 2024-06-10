window.addEventListener('load', function() {
    const tabs = document.querySelectorAll('.tab');
    const image = document.getElementById('dish-image');
    const defaultImage = 'img/subway wrap.png';

    tabs.forEach(tab => {
        tab.addEventListener('mouseover', function() {
            const newImage = tab.getAttribute('data-image');
            image.style.opacity = '0';
            setTimeout(() => {
                image.src = newImage;
                image.style.opacity = '1';
            }, 300);
        });

        tab.addEventListener('mouseleave', function() {
            image.style.opacity = '0';
            setTimeout(() => {
                image.src = defaultImage;
                image.style.opacity = '1';
            }, 300);
        });
    });
});
