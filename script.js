document.addEventListener('DOMContentLoaded', function() {
    // Navigation link animations
    const navLinks = document.querySelectorAll('.bottom-nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.color = 'var(--primary-light)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = 'var(--text-color)';
            }
        });
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Social icons animation
    const socialIcons = document.querySelectorAll('.social-icons-top a');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Animated entrance for elements
    const greeting = document.querySelector('.greeting');
    const name = document.querySelector('.name');
    const cursorLine = document.querySelector('.cursor-line');
    const role = document.querySelector('.role');
    const profileImage = document.querySelector('.profile-image');
    
    // Setting initial styles
    greeting.style.opacity = '0';
    greeting.style.transform = 'translateY(20px)';
    greeting.style.transition = 'all 0.5s ease';
    
    name.style.opacity = '0';
    name.style.transform = 'translateY(20px)';
    name.style.transition = 'all 0.5s ease';
    
    cursorLine.style.opacity = '0';
    cursorLine.style.transition = 'all 0.5s ease';
    
    role.style.opacity = '0';
    role.style.transform = 'translateY(20px)';
    role.style.transition = 'all 0.5s ease';
    
    profileImage.style.opacity = '0';
    profileImage.style.transform = 'scale(0.9)';
    profileImage.style.transition = 'all 0.8s ease';
    
    // Sequential animation
    setTimeout(() => {
        profileImage.style.opacity = '1';
        profileImage.style.transform = 'scale(1)';
    }, 300);
    
    setTimeout(() => {
        greeting.style.opacity = '1';
        greeting.style.transform = 'translateY(0)';
    }, 800);
    
    setTimeout(() => {
        name.style.opacity = '1';
        name.style.transform = 'translateY(0)';
    }, 1000);
    
    setTimeout(() => {
        cursorLine.style.opacity = '1';
    }, 1200);
    
    setTimeout(() => {
        role.style.opacity = '1';
        role.style.transform = 'translateY(0)';
    }, 1400);
    
    // Add parallax effect to the profile image
    document.addEventListener('mousemove', function(e) {
        if (window.innerWidth > 768) { // Only on larger screens
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            profileImage.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
            document.querySelector('.image-glow').style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px)`;
        }
    });
    
    // Typing animation for the name
    let typingEffect = new Typed('#typed-text', {
        strings: ['Tech Enthusiast', 'Developer', 'Designer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        backDelay: 2000
    });
});