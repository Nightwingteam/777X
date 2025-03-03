document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for background
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
        
        document.querySelector('.moving-background').style.transform = 
            `translate(${moveX}px, ${moveY}px)`;
    });

    // Smooth appearance of glass boxes on scroll
    const glassBoxes = document.querySelectorAll('.glass-box');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    glassBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(50px)';
        box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(box);
    });
});
