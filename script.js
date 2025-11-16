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

const filters = document.querySelectorAll('.filteroption');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filter.classList.toggle('active');
  });
});







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
        const productCategories = product.getAttribute('data-category').split(' '); // Get categories as an array

        // If "All" is selected, show all products
        const matches = selectedFilters.has("all") || productCategories.some(category => selectedFilters.has(category));

        if (matches) {
          product.style.display = 'block'; // Show the product
        } else {
          product.style.display = 'none'; // Hide the product
        }
      });
    });
  });
});