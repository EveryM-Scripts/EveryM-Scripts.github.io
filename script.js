const el = document.querySelector('.scriptsearch'); 

if (el) {
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter') e.preventDefault();
    if (el.textContent.length >= 33 && e.key.length === 1 && !e.ctrlKey && !e.metaKey) e.preventDefault();
  });

  el.addEventListener('input', () => {
    if (el.textContent.trim() === "") {
      const placeholder = window.EveryMI18n
        ? window.EveryMI18n.t('common.searchPlaceholder')
        : 'Search Scripts...';
      el.setAttribute('data-placeholder', placeholder);
    }
    applyProductFilters();
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
  if (activeLink) {
    activeLink.classList.add('active');
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

    document.querySelectorAll('.headerbtns').forEach(btn => btn.classList.remove('active'));
    link.classList.add('active');
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
        const suffix = stat.getAttribute('data-suffix') ?? '+';
        stat.textContent = target + suffix;
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
  const modalDocsLink = document.getElementById('modalDocsLink');

  const PRODUCT_META = {
    adminMenu: {
      price: '$15.99',
      gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a24)'
    },
    vehicleSystem: {
      price: '$12.99',
      gradient: 'linear-gradient(135deg, #4ecdc4, #44a08d)'
    },
    economyFramework: {
      price: '$19.99',
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)'
    },
    uiFramework: {
      price: '$8.99',
      gradient: 'linear-gradient(135deg, #f093fb, #f5576c)'
    },
    funActivities: {
      price: '$6.99',
      gradient: 'linear-gradient(135deg, #fa709a, #fee140)'
    },
    everymMenu: {
      price: '$24.99',
      gradient: 'linear-gradient(135deg, #1e3c72, #2a5298)',
      isSpecial: true
    }
  };

  let activeProductId = null;

  function getProductTranslation(productId) {
    if (window.EveryMI18n) return window.EveryMI18n.getProduct(productId);
    return null;
  }

  function openModal(productId) {
    if (!productModal) return;
    const meta = PRODUCT_META[productId];
    const product = getProductTranslation(productId);
    if (!meta || !product) return;

    activeProductId = productId;
    modalTitle.textContent = product.title;
    modalDescription.textContent = product.descLong || product.desc;
    modalPrice.textContent = meta.price;

    if (meta.isSpecial) {
      modalImage.style.background = meta.gradient;
      modalImage.innerHTML = '<div id="everymmenuimg" style="width: 100%; height: 100%;"></div>';
    } else {
      modalImage.style.background = meta.gradient;
      modalImage.innerHTML = '';
    }

    modalFeatures.innerHTML = (product.features || []).map(feature =>
      `<span class="feature-tag">${feature}</span>`
    ).join('');

    modalDetailsList.innerHTML = (product.details || []).map(detail =>
      `<li>${detail}</li>`
    ).join('');

    if (modalDocsLink) {
      modalDocsLink.href = productId === 'everymMenu'
        ? 'docs-everym-menu.html'
        : 'docs-installation.html';
    }

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!productModal) return;
    productModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    activeProductId = null;
  }

  if (productModal && modalClose && modalOverlay) {
    document.querySelectorAll('.product-btn').forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const productCard = this.closest('.product');
        const productId = productCard.getAttribute('data-product-id');
        openModal(productId);
      });
    });

    document.addEventListener('everym:languagechange', () => {
      if (activeProductId && productModal.classList.contains('active')) {
        openModal(activeProductId);
      }
    });

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && productModal.classList.contains('active')) {
        closeModal();
      }
    });
  }

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

const DISCORD_URL = 'https://discord.com/invite/zgcXpcfHbA';
const YOUTUBE_URL = 'https://www.youtube.com/@everym-scripts';
const selectedFilters = new Set(['all']);

document.querySelectorAll('.dc-join-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    window.open(DISCORD_URL, '_blank', 'noopener');
  });
});

document.querySelectorAll('.yt-join-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    window.open(YOUTUBE_URL, '_blank', 'noopener');
  });
});

function applyProductFilters() {
  const products = document.querySelectorAll('.product');
  const searchEl = document.querySelector('.scriptsearch');
  const query = searchEl ? searchEl.textContent.trim().toLowerCase() : '';
  let visibleCount = 0;

  const activeFilters = [...selectedFilters].filter(filter => filter !== 'all');

  products.forEach(product => {
    const prodAttr = product.getAttribute('data-category') || '';
    const productCategories = prodAttr.split(/\s+/).filter(Boolean);
    const matchesFilter = activeFilters.length === 0 ||
      activeFilters.some(filter => productCategories.includes(filter));

    const title = product.querySelector('h3')?.textContent.toLowerCase() || '';
    const description = product.querySelector('.product-description')?.textContent.toLowerCase() || '';
    const matchesSearch = !query || title.includes(query) || description.includes(query);

    const visible = matchesFilter && matchesSearch;
    product.classList.toggle('hidden-by-filter', !visible);
    product.style.display = visible ? 'flex' : 'none';
    if (visible) visibleCount += 1;
  });

  const scriptsbox = document.getElementById('scriptsbox');
  let emptyState = document.getElementById('noResultsMessage');
  if (scriptsbox && products.length) {
    if (!emptyState) {
      emptyState = document.createElement('div');
      emptyState.id = 'noResultsMessage';
      emptyState.className = 'no-results-message';
      emptyState.textContent = window.EveryMI18n
        ? window.EveryMI18n.t('common.noResults')
        : 'No scripts match your search or filters.';
      scriptsbox.appendChild(emptyState);
    }
    emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filteroption');
  const allButton = document.getElementById('categoryall');

  if (allButton) {
    allButton.classList.add('active');
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      if (filter === 'all') {
        selectedFilters.clear();
        selectedFilters.add('all');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      } else {
        if (selectedFilters.has(filter)) {
          selectedFilters.delete(filter);
          button.classList.remove('active');
        } else {
          selectedFilters.add(filter);
          button.classList.add('active');
        }

        if (selectedFilters.size > 1 && selectedFilters.has('all')) {
          selectedFilters.delete('all');
          if (allButton) allButton.classList.remove('active');
        }

        if (selectedFilters.size === 0) {
          selectedFilters.add('all');
          if (allButton) allButton.classList.add('active');
        }
      }

      applyProductFilters();
    });
  });

  applyProductFilters();

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        faqItems.forEach(otherItem => {
          if (otherItem !== item) otherItem.classList.remove('active');
        });
        item.classList.toggle('active');
      });
    }
  });

  const accordionHeaders = document.querySelectorAll('.nav-accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordion = header.parentElement;
      accordion.classList.toggle('active');
      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.parentElement.classList.remove('active');
        }
      });
    });
  });

  document.querySelectorAll('.nav-accordion').forEach((accordion, index) => {
    if (index === 0) accordion.classList.add('active');
  });

  document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', async () => {
      const code = button.closest('.code-block')?.querySelector('code');
      if (!code) return;
      const copyLabel = window.EveryMI18n ? window.EveryMI18n.t('docs.shared.copy') : 'Copy';
      const copiedLabel = window.EveryMI18n ? window.EveryMI18n.t('docs.shared.copied') : 'Copied!';
      const failedLabel = window.EveryMI18n ? window.EveryMI18n.t('docs.shared.copyFailed') : 'Failed';
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = copiedLabel;
        setTimeout(() => { button.textContent = copyLabel; }, 1500);
      } catch {
        button.textContent = failedLabel;
        setTimeout(() => { button.textContent = copyLabel; }, 1500);
      }
    });
  });

  document.addEventListener('everym:languagechange', () => {
    document.querySelectorAll('.copy-btn[data-i18n]').forEach(btn => {
      btn.textContent = window.EveryMI18n.t(btn.getAttribute('data-i18n'));
    });
  });

  const docsSearch = document.getElementById('docsSearch');
  if (docsSearch) {
    const searchableSections = document.querySelectorAll('.docs-content .content-section, .docs-content .api-item');
    docsSearch.addEventListener('input', () => {
      const query = docsSearch.value.trim().toLowerCase();
      searchableSections.forEach(section => {
        const text = section.textContent.toLowerCase();
        section.style.display = !query || text.includes(query) ? '' : 'none';
      });
    });

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        docsSearch.focus();
      }
    });
  }

  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const docsSidebar = document.querySelector('.docs-sidebar');
  if (mobileMenuToggle && docsSidebar) {
    mobileMenuToggle.addEventListener('click', () => {
      docsSidebar.classList.toggle('mobile-open');
    });
  }

  const tocLinks = document.querySelectorAll('.toc-link');
  if (tocLinks.length) {
    const sections = Array.from(document.querySelectorAll('.content-section[id]'));
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 120;
      let currentId = sections[0]?.id;
      sections.forEach(section => {
        if (section.offsetTop <= scrollPos) currentId = section.id;
      });
      tocLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
      });
    }, { passive: true });
  }
});
