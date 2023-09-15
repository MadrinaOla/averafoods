// JavaScript
const lazyContent = document.getElementById('lazy-content');

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        // Load the content when it's in the viewport
        lazyContent.innerHTML = 'This content was lazy-loaded.';
        observer.disconnect(); // Disconnect the observer once loaded
    }
});

observer.observe(lazyContent);
