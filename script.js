document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('image');
    if (logo) {
        logo.addEventListener('click', function() {
            logo.classList.toggle('logo-large');
            logo.classList.add('clicked');
            setTimeout(() => {
                logo.classList.remove('clicked');
            }, 200); // Duration of the animation
        });
    }
});