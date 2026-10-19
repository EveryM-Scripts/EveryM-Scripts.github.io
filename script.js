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

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderFeaturedScripts();
  setupModalListeners();
  animateStats();

  // Re-render when language changes
  document.addEventListener('everym:languagechange', () => {
    renderProducts();
    renderFeaturedScripts();
  });

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

  let productModal = document.getElementById('productModal');
  let modalOverlay = document.getElementById('modalOverlay');
  let modalClose = document.getElementById('modalClose');
  let modalTitle = document.getElementById('modalTitle');
  let modalDescription = document.getElementById('modalDescription');
  let modalFeatures = document.getElementById('modalFeatures');
  let modalDetailsList = document.getElementById('modalDetailsList');
  let modalPrice = document.getElementById('modalPrice');
  let modalImage = document.getElementById('modalImage');
  let modalDocsLink = document.getElementById('modalDocsLink');

  let activeProductId = null;

  // Render products dynamically from products.js
  function renderProducts() {
    const scriptsbox = document.getElementById('scriptsbox');
    if (!scriptsbox || typeof PRODUCTS === 'undefined') return;

    scriptsbox.innerHTML = PRODUCTS.map(product => {
      const categoryAttr = product.categories.join(' ');
      const imageHtml = product.image
        ? `<div class="product-preview" style="background: url('${product.image}') no-repeat center/cover;"></div>`
        : product.isSpecial
          ? `<div id="everymmenuimg"></div>`
          : `<div class="product-preview" style="background: ${product.gradient};"></div>`;

      const featuresHtml = product.features.slice(0, 3).map(f =>
        `<span class="feature-tag">${f}</span>`
      ).join('');

      return `
        <div class="product" data-category="${categoryAttr}" data-product-id="${product.id}">
          <div class="product-image">
            ${imageHtml}
          </div>
          <div class="product-content">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-features">
              ${featuresHtml}
            </div>
            <div class="product-footer">
              <div class="product-price">$${product.price.toFixed(2)}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Re-attach event listeners to product cards
    document.querySelectorAll('.product').forEach(card => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        const productId = this.getAttribute('data-product-id');
        openModal(productId);
      });
    });
  }

  // Render featured scripts on homepage
  function renderFeaturedScripts() {
    const featuredContainer = document.getElementById('featuredScripts');
    if (!featuredContainer || typeof PRODUCTS === 'undefined') return;

    // Show first 4 products as featured
    const featuredProducts = PRODUCTS.slice(0, 4);

    featuredContainer.innerHTML = featuredProducts.map(product => {
      const imageHtml = product.image
        ? `background: url('${product.image}') no-repeat center/cover`
        : `background: ${product.gradient}`;

      return `
        <div class="preview-card" data-product-id="${product.id}">
          <div class="preview-image" style="${imageHtml};"></div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="preview-price">$${product.price.toFixed(2)}</div>
          <div class="preview-rating">5.0</div>
        </div>
      `;
    }).join('');

    // Add click handlers to featured cards
    featuredContainer.querySelectorAll('.preview-card').forEach(card => {
      card.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        openModal(productId);
      });
      card.style.cursor = 'pointer';
    });
  }

  function openModal(productId) {
    productModal = document.getElementById('productModal');
    if (!productModal) return;

    modalOverlay = document.getElementById('modalOverlay');
    modalClose = document.getElementById('modalClose');
    modalTitle = document.getElementById('modalTitle');
    modalDescription = document.getElementById('modalDescription');
    modalFeatures = document.getElementById('modalFeatures');
    modalDetailsList = document.getElementById('modalDetailsList');
    modalPrice = document.getElementById('modalPrice');
    modalImage = document.getElementById('modalImage');
    modalDocsLink = document.getElementById('modalDocsLink');

    const product = ProductManager.getById(productId);
    if (!product) return;

    activeProductId = productId;
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.longDescription || product.description;
    modalPrice.textContent = `$${product.price.toFixed(2)}`;

    if (product.isSpecial) {
      modalImage.style.background = product.gradient;
      modalImage.innerHTML = '<div id="everymmenuimg" style="width: 100%; height: 100%;"></div>';
    } else if (product.image) {
      modalImage.style.background = `url('${product.image}') no-repeat center/cover`;
      modalImage.innerHTML = '';
    } else {
      modalImage.style.background = product.gradient;
      modalImage.innerHTML = '';
    }

    modalFeatures.innerHTML = (product.features || []).map(feature =>
      `<span class="feature-tag">${feature}</span>`
    ).join('');

    modalDetailsList.innerHTML = (product.details || []).map(detail =>
      `<li>${detail}</li>`
    ).join('');

    if (modalDocsLink) {
      modalDocsLink.href = product.docsPage || 'docs-installation.html';
    }

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    productModal = document.getElementById('productModal');
    if (!productModal) return;
    productModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    activeProductId = null;
  }

  // Setup modal event listeners
  function setupModalListeners() {
    // Don't need to get elements here, they'll be fetched in openModal
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
      modalOverlay.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', (e) => {
      const productModal = document.getElementById('productModal');
      if (e.key === 'Escape' && productModal && productModal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  document.addEventListener('everym:languagechange', () => {
    if (activeProductId && productModal && productModal.classList.contains('active')) {
      openModal(activeProductId);
    }
  });

  const cards = document.querySelectorAll('.feature-card, .preview-card, .testimonial-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

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

    // Changed from some() to every() - product must match ALL selected filters
    const matchesFilter = activeFilters.length === 0 ||
      activeFilters.every(filter => productCategories.includes(filter));

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
        // Remove 'all' when selecting a specific filter
        if (selectedFilters.has('all')) {
          selectedFilters.delete('all');
          if (allButton) allButton.classList.remove('active');
        }

        if (selectedFilters.has(filter)) {
          selectedFilters.delete(filter);
          button.classList.remove('active');
        } else {
          selectedFilters.add(filter);
          button.classList.add('active');
        }

        // If no filters selected, show all
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
