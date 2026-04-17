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

  // Product Modal functionality
  const productModal = document.getElementById('productModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalDetailsList = document.getElementById('modalDetailsList');
  const modalPrice = document.getElementById('modalPrice');
  const modalImage = document.getElementById('modalImage');

  // Product data
  const productData = {
    'Advanced Admin Menu': {
      title: 'Advanced Admin Menu',
      description: 'Complete server management with intuitive interface and powerful tools. This comprehensive admin solution provides everything you need to manage your FiveM server efficiently.',
      features: ['Player Management', 'Server Tools', 'Customizable', 'Real-time Monitoring', 'Advanced Permissions'],
      details: [
        'Full player management system with kick, ban, and teleport options',
        'Real-time server monitoring and statistics',
        'Customizable interface with multiple themes',
        'Advanced permission system with role-based access',
        'Built-in anti-cheat integration',
        'Comprehensive logging system'
      ],
      price: '$15.99',
      gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a24)'
    },
    'Custom Vehicle System': {
      title: 'Custom Vehicle System',
      description: 'Enhanced vehicle management with customization and tracking features. Take control of every vehicle on your server with this comprehensive system.',
      features: ['Vehicle Mods', 'Garage System', 'Performance', 'Tracking', 'Insurance'],
      details: [
        'Advanced garage system with multiple locations',
        'Vehicle customization with hundreds of options',
        'Performance tuning and upgrade system',
        'Vehicle tracking and recovery system',
        'Insurance system for vehicle protection',
        'Fuel management system'
      ],
      price: '$12.99',
      gradient: 'linear-gradient(135deg, #4ecdc4, #44a08d)'
    },
    'Economy Framework': {
      title: 'Economy Framework',
      description: 'Complete economic system with jobs, banking, and marketplace. Build a thriving virtual economy with this comprehensive framework.',
      features: ['Banking', 'Jobs', 'Market', 'Trading', 'Investments'],
      details: [
        'Advanced banking system with accounts and cards',
        'Multiple job categories with progression system',
        'Dynamic marketplace with supply and demand',
        'Trading system between players',
        'Investment opportunities with returns',
        'Tax system and government management'
      ],
      price: '$19.99',
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)'
    },
    'Modern UI Framework': {
      title: 'Modern UI Framework',
      description: 'Beautiful and responsive user interface components for your server. Create stunning user experiences with this comprehensive UI toolkit.',
      features: ['Responsive', 'Animated', 'Customizable', 'Modern Design'],
      details: [
        'Responsive design that works on all devices',
        'Smooth animations and transitions',
        'Fully customizable themes and colors',
        'Modern component library',
        'Touch-friendly interface',
        'Accessibility features included'
      ],
      price: '$8.99',
      gradient: 'linear-gradient(135deg, #f093fb, #f5576c)'
    },
    'Fun Activities Pack': {
      title: 'Fun Activities Pack',
      description: 'Collection of entertaining mini-games and activities for players. Keep your players engaged with diverse entertainment options.',
      features: ['Mini Games', 'Entertainment', 'Interactive', 'Social'],
      details: [
        'Multiple mini-games with rewards',
        'Social interaction features',
        'Leaderboards and competitions',
        'Seasonal events and activities',
        'Customizable game rules',
        'Player progression system'
      ],
      price: '$6.99',
      gradient: 'linear-gradient(135deg, #fa709a, #fee140)'
    },
    'EveryM Menu': {
      title: 'EveryM Menu',
      description: 'Our flagship menu system with advanced features and beautiful design. The ultimate menu solution for FiveM servers.',
      features: ['Premium', 'Feature Rich', 'Professional', 'Advanced'],
      details: [
        'Professional-grade interface design',
        'Advanced customization options',
        'Seamless integration with popular frameworks',
        'Regular updates and support',
        'Multi-language support',
        'Cloud synchronization for settings'
      ],
      price: '$24.99',
      gradient: 'linear-gradient(135deg, #1e3c72, #2a5298)',
      isSpecial: true
    }
  };

  // Function to open modal with product data
  function openModal(productTitle) {
    const product = productData[productTitle];
    if (!product) return;

    // Set modal content
    modalTitle.textContent = product.title;
    modalDescription.textContent = product.description;
    modalPrice.textContent = product.price;
    
    // Set modal image
    if (product.isSpecial) {
      modalImage.style.background = product.gradient;
      modalImage.innerHTML = '<div id="everymmenuimg" style="width: 100px; height: 100px;"></div>';
    } else {
      modalImage.style.background = product.gradient;
      modalImage.innerHTML = '';
    }
    
    // Set features
    modalFeatures.innerHTML = product.features.map(feature => 
      `<span class="feature-tag">${feature}</span>`
    ).join('');
    
    // Set details
    modalDetailsList.innerHTML = product.details.map(detail => 
      `<li>${detail}</li>`
    ).join('');
    
    // Show modal
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Function to close modal
  function closeModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // Add click handlers to product buttons
  const productButtons = document.querySelectorAll('.product-btn');
  productButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const productCard = this.closest('.product');
      const productTitle = productCard.querySelector('h3').textContent;
      openModal(productTitle);
    });
  });

  // Close modal events
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal.classList.contains('active')) {
      closeModal();
    }
  });

  // Contact buttons keep their original functionality
  const contactButtons = document.querySelectorAll('.contact-btn');
  contactButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Add any contact-specific functionality here
      console.log('Contact button clicked');
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
  const selectedFilters = new Set(['all']); // Set to hold selected filters, start with "all" selected
  
  // Set initial active state for "All" button
  const allButton = document.getElementById('categoryall');
  if (allButton) {
    allButton.classList.add('active');
  }

  // Add event listeners for each filter button
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter'); // Get the category to filter by

      // Toggle selected filter in the Set
      if (filter === "all") {
        // If "All" is clicked, show all products and deselect other filters
        selectedFilters.clear();
        selectedFilters.add("all");
        
        // Update button states
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      } else {
        // Handle other filters (admin, vehicle, fun, etc.)
        if (selectedFilters.has(filter)) {
          selectedFilters.delete(filter); // Deselect the filter
          button.classList.remove('active');
        } else {
          selectedFilters.add(filter); // Select the filter
          button.classList.add('active');
        }
        
        // Remove "all" from selectedFilters if any other filter is selected
        if (selectedFilters.size > 1 && selectedFilters.has("all")) {
          selectedFilters.delete("all");
          if (allButton) {
            allButton.classList.remove('active');
          }
        }
        
        // If no filters are selected, default to "all"
        if (selectedFilters.size === 0) {
          selectedFilters.add("all");
          if (allButton) {
            allButton.classList.add('active');
          }
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

// Professional Documentation Layout
document.addEventListener('DOMContentLoaded', () => {
  // Accordion Navigation
  const accordionHeaders = document.querySelectorAll('.nav-accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordion = header.parentElement;
      accordion.classList.toggle('active');
      
      // Close other accordions
      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.parentElement.classList.remove('active');
        }
      });
    });
  });

  // Resource Tabs functionality
  const resourceTabs = document.querySelectorAll('.resource-tab');
  const resourceContents = document.querySelectorAll('.api-content');
  
  if (resourceTabs.length > 0) {
    resourceTabs.forEach(button => {
      button.addEventListener('click', (e) => {
        const targetResource = button.getAttribute('data-resource');
        
        // Remove active class from all tabs
        resourceTabs.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked tab
        button.classList.add('active');
        
        // Filter API content (simplified for demo)
        resourceContents.forEach(content => {
          content.style.display = 'block';
        });
      });
    });
  }
});
