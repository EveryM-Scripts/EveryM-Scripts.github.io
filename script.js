const el = document.querySelector('.scriptsearch'); 

if (el) {
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter') e.preventDefault();
    if (el.textContent.length >= 33 && e.key.length === 1 && !e.ctrlKey && !e.metaKey) e.preventDefault();
  });

  el.addEventListener('input', () => {
    if (el.textContent.trim() === "") {
      el.setAttribute('data-placeholder', 'Type here...');
    }
  });
}

const navMap = {
  'index.html': 'home',
  'scripts.html': 'scripts',
  'docs.html': 'docs',
  'support.html': 'support'
};

const navLines = {
  home: 'homeline',
  scripts: 'scriptsline',
  docs: 'docsline',
  support: 'supportline'
};

let currentPage = window.location.pathname.split('/').pop();
if (currentPage === '' || currentPage === 'index.html') currentPage = 'index.html';

if (navMap[currentPage]) {
  const activeLink = document.getElementById(navMap[currentPage]);
  const activeLine = document.getElementById(navLines[navMap[currentPage]]);
  if (activeLink && activeLine) {
    activeLink.style.top = '-4px';
    activeLink.classList.add('active');
    activeLine.classList.add('active');
  }
}

Object.keys(navLines).forEach(linkId => {
  const link = document.getElementById(linkId);

  if (!link) return;

  link.addEventListener('click', e => {
    if (navMap[currentPage] === linkId) {
      e.preventDefault();
      return;
    }

    document.querySelectorAll('#underlines div').forEach(line => line.classList.remove('active'));
    const line = document.getElementById(navLines[linkId]);
    if (line) line.classList.add('active');
  });
});


window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.fade-section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      section.style.transition = 'all 0.6s ease-out';
    }
  });
});

// Animated Stats Counter
const animateStats = () => {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        stat.textContent = Math.ceil(current);
        setTimeout(updateCounter, 20);
      } else {
        stat.textContent = target + (stat.parentElement.querySelector('.stat-label').textContent.includes('%') ? '%' : '+');
      }
    };
    
    // Start animation when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(stat);
  });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  animateStats();
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Scroll Progress Bar
  const scrollProgress = document.getElementById('scrollProgress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      scrollProgress.style.width = scrollPercentage + '%';
    });
  }

  // Parallax Effect
  const parallaxElements = document.querySelectorAll('.parallax');
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }

  // Add loading states to buttons
  const buttons = document.querySelectorAll('.product-btn, .contact-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      if (!this.classList.contains('loading')) {
        this.classList.add('loading');
        this.innerHTML = '<span class="loading"></span> Loading...';
        
        // Simulate loading (remove in production)
        setTimeout(() => {
          this.classList.remove('loading');
          this.innerHTML = this.textContent;
        }, 1500);
      }
    });
  });

  // Enhanced hover effects for cards
  const cards = document.querySelectorAll('.feature-card, .preview-card, .testimonial-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});



const container = document.getElementById('discord-float-container');

if (container) {
  const logoCount = 12;
  const logos = [];

  for (let i = 0; i < logoCount; i++) {
    const logo = document.createElement('div');
    logo.classList.add('discord-logo');

    const size = Math.random() * 40 + 30;
    logo.style.width = `${size}px`;
    logo.style.height = `${size}px`;

    logo.x = Math.random() * window.innerWidth;
    logo.y = Math.random() * window.innerHeight;
    logo.vx = (Math.random() - 0.5) * 0.3;
    logo.vy = (Math.random() - 0.5) * 0.3;
    logo.rotation = Math.random() * 360;
    logo.vr = (Math.random() - 0.5) * 0.2;

    container.appendChild(logo);
    logos.push(logo);
  }

  function animate() {
    logos.forEach(logo => {
      logo.x += logo.vx;
      logo.y += logo.vy;
      logo.rotation += logo.vr;

      if (logo.x > window.innerWidth) logo.x = 0;
      if (logo.x < 0) logo.x = window.innerWidth;
      if (logo.y > window.innerHeight) logo.y = 0;
      if (logo.y < 0) logo.y = window.innerHeight;

      logo.style.transform = `translate(${logo.x}px, ${logo.y}px) rotate(${logo.rotation}deg)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

const discordJoinBtn = document.getElementById('discordjoin');
if (discordJoinBtn) {
  discordJoinBtn.addEventListener('click', () => {
    window.location.href = 'https://discord.com/invite/zgcXpcfHbA';
  });
}

// simple toggle handlers removed: the DOMContentLoaded filter logic manages active state now







document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll('.filteroption'); // Select filter buttons
  const products = document.querySelectorAll('.product'); // Select all product elements
  const selectedFilters = new Set(); // Set to hold selected filters

  // Add event listeners for each filter button
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter'); // Get the category to filter by

      // Toggle selected filter in the Set
      if (filter === "all") {
        // If "All" is clicked, show all products
        if (selectedFilters.has("all")) {
          selectedFilters.clear(); // Deselect "All"
        } else {
          selectedFilters.clear(); // Clear any other filters
          selectedFilters.add("all"); // Select "All"
        }
      } else {
        // Handle other filters (admin, vehicle, fun, etc.)
        if (selectedFilters.has(filter)) {
          selectedFilters.delete(filter); // Deselect the filter
          button.classList.remove('active');
        } else {
          selectedFilters.add(filter); // Select the filter
          button.classList.add('active');
        }
      }

      // Loop through each product and check if it matches any selected category
      products.forEach(product => {
        const prodAttr = product.getAttribute('data-category') || '';
        const productCategories = prodAttr.split(/\s+/).filter(Boolean);

        // If "All" is selected, show all products
        const matches = selectedFilters.has("all") || productCategories.some(category => selectedFilters.has(category));

        product.style.display = matches ? 'block' : 'none';
      });
    });
  });
});

const dcjoin = document.getElementById('dcjoin');
const ytjoin = document.getElementById('ytjoin');

if (dcjoin) {
    dcjoin.addEventListener('click', () => {
        window.open("https://discord.com/invite/zgcXpcfHbA", "_blank");
    });
} 
if (ytjoin) {
    ytjoin.addEventListener('click', () => {
        window.open("https://www.youtube.com/@everym-scripts", "_blank");
    });
}

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
      question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });
});



