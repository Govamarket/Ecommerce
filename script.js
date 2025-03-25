document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.getElementById('navbar-menu');
    
    // Toggle mobile menu
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const bars = document.querySelectorAll('.bar');
        if(mobileMenu.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            bars[0].style.transform = 'rotate(0) translate(0)';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'rotate(0) translate(0)';
        }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navbarMenu.classList.remove('active');
            
            // Reset hamburger icon
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = 'rotate(0) translate(0)';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'rotate(0) translate(0)';
            
            // Update active class
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});