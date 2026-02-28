// ===== IHCCC Main JavaScript =====
document.addEventListener('DOMContentLoaded', function () {

    // --- Header scroll effect ---
    var header = document.getElementById('header');
    var backToTop = document.getElementById('backToTop');

    function onScroll() {
        if (window.scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        if (backToTop) {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // --- Back to top ---
    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Mobile menu ---
    var mobileMenuBtn = document.getElementById('mobileMenuBtn');
    var mainNav = document.getElementById('mainNav');

    mobileMenuBtn.addEventListener('click', function () {
        mobileMenuBtn.classList.toggle('active');
        mainNav.classList.toggle('open');
    });

    // Close menu on link click
    var navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('open');
        });
    });

    // --- Active nav link on scroll ---
    var sections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        var scrollPos = window.scrollY + 120;
        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav, { passive: true });

    // --- Contact form (demo) ---
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = contactForm.querySelector('button[type="submit"]');
            var originalText = btn.textContent;
            btn.textContent = '发送中...';
            btn.disabled = true;

            setTimeout(function () {
                btn.textContent = '✓ 发送成功';
                btn.style.background = '#00897b';
                btn.style.borderColor = '#00897b';
                contactForm.reset();

                setTimeout(function () {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.borderColor = '';
                    btn.disabled = false;
                }, 2500);
            }, 1000);
        });
    }

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var headerHeight = header.offsetHeight;
                var targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({ top: targetTop, behavior: 'smooth' });
            }
        });
    });

    // --- Intersection Observer for scroll reveal ---
    var revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    }

    // --- Hero Canvas Particle Animation ---
    var heroCanvas = document.getElementById('heroCanvas');
    if (heroCanvas) {
        var ctx = heroCanvas.getContext('2d');
        var particles = [];
        var particleCount = 60;

        function resizeCanvas() {
            heroCanvas.width = heroCanvas.offsetWidth;
            heroCanvas.height = heroCanvas.offsetHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        function Particle() {
            this.x = Math.random() * heroCanvas.width;
            this.y = Math.random() * heroCanvas.height;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.4 + 0.1;
        }

        Particle.prototype.update = function () {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > heroCanvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > heroCanvas.height) this.speedY *= -1;
        };

        Particle.prototype.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,' + this.opacity + ')';
            ctx.fill();
        };

        for (var i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function connectParticles() {
            for (var a = 0; a < particles.length; a++) {
                for (var b = a + 1; b < particles.length; b++) {
                    var dx = particles[a].x - particles[b].x;
                    var dy = particles[a].y - particles[b].y;
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgba(255,255,255,' + (0.06 * (1 - dist / 120)) + ')';
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
            particles.forEach(function (p) {
                p.update();
                p.draw();
            });
            connectParticles();
            requestAnimationFrame(animateParticles);
        }
        animateParticles();
    }
});
