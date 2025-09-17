// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the interactive button element
    const interactiveBtn = document.getElementById('interactive-btn');
    
    // Add click event listener to the button
    interactiveBtn.addEventListener('click', function() {
        // Show alert message
        alert('Hello! Welcome to our beautiful website! 🎉\n\nThis is a simple interactive feature demonstrating basic JavaScript functionality. Thank you for visiting!');
        
        // Optional: Add some visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards for animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add hover effect to feature cards
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    
    function typeWriter(text, element, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Uncomment the line below to enable typing effect
    // typeWriter(originalText, heroTitle, 50);
    
    // Add click counter for the interactive button (bonus feature)
    let clickCount = 0;
    const originalClickHandler = interactiveBtn.onclick;
    
    interactiveBtn.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 1) {
            // First click - show welcome message
            alert('Hello! Welcome to our beautiful website! 🎉\n\nThis is a simple interactive feature demonstrating basic JavaScript functionality. Thank you for visiting!');
        } else if (clickCount === 2) {
            // Second click - show different message
            alert('Wow! You clicked again! 😊\n\nYou seem to like interactive elements. This website was built with HTML, CSS, and JavaScript!');
        } else if (clickCount === 3) {
            // Third click - show fun message
            alert('Third time\'s the charm! 🎯\n\nYou\'re really exploring this website! Feel free to scroll around and check out all the sections.');
        } else {
            // Multiple clicks - show random messages
            const messages = [
                'You\'re on fire! 🔥 Keep exploring!',
                'Amazing! You really like this button! ⭐',
                'Incredible! You\'ve clicked ' + clickCount + ' times! 🚀',
                'Fantastic! This website is fully responsive! 📱',
                'Awesome! Try resizing your browser window! 🖥️'
            ];
            
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
        }
    });
    
    // Add keyboard accessibility
    interactiveBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // Console message for developers
    console.log('🎉 Welcome to ElegantWeb!');
    console.log('This website was built with HTML, CSS, and JavaScript.');
    console.log('Feel free to explore the code and learn from it!');
    
});
