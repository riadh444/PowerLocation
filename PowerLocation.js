<script>
    // Lorsque la page est scrollée
    window.onscroll = function() {
        var nav = document.querySelector('nav');
        
        // Si la page est scrollée de plus de 100px
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };
</script>

window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.fade-in');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            reveals[i].classList.add('visible');
        }
    }
});

