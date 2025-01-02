window.addEventListener('scroll', () => {
    const imageContainer = document.querySelector('.image-container');
    const position = imageContainer.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        imageContainer.style.opacity = 1;
    } else {
        imageContainer.style.opacity = 0;
    }
});
