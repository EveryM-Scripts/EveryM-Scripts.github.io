// Product Management System
// Add, remove, or customize products here - no HTML editing needed!

const PRODUCTS = [
  {
    id: 'emoteWheel',
    name: 'Emote Wheel',
    description: 'Our flagship menu system with advanced features and beautiful design',
    longDescription: 'Hello',
    price: 3.49,
    categories: ['fun', 'ui'],
    image: 'assets/EmoteWheel Image.png', // Uses actual image
    gradient: 'linear-gradient(135deg, #1e3c72, #2a5298)',
    features: ['Emotes', 'Customizable', 'Quick use'],
    details: [
      'Quick access to emotes',
      'Customizable emotes & interface',
      'Easy to use'
    ],
    docsPage: 'docs-everym-menu.html',
    isSpecial: true
  },

  {
    id: 'everymHalloween',
    name: 'EveryM Halloween',
    description: 'Halloween-themed menu system with spooky effects',
    longDescription: 'Halloween-themed menu system with spooky effects and animations. Perfect for Halloween events and celebrations.',
    price: 19.99,
    categories: ['fun', 'ui'],
    image: 'assets/everym-halloween.png', // Uses actual image
    gradient: 'linear-gradient(135deg, #1e3c72, #2a5298)',
    features: ['Premium', 'Feature Rich', 'Professional', 'Advanced'],
    details: [
      'Professional-grade interface design',
      'Advanced customization options',
      'Seamless integration with popular frameworks',
      'Regular updates and support',
      'Multi-language support',
      'Cloud synchronization for settings'
    ],
    docsPage: 'docs-everym-menu.html',
    isSpecial: true
  }
];

// Product helper functions
const ProductManager = {
  getAll: () => PRODUCTS,
  
  getById: (id) => PRODUCTS.find(p => p.id === id),
  
  getByCategory: (category) => PRODUCTS.filter(p => p.categories.includes(category)),
  
  add: (product) => {
    PRODUCTS.push(product);
    return PRODUCTS;
  },
  
  remove: (id) => {
    const index = PRODUCTS.findIndex(p => p.id === id);
    if (index > -1) {
      PRODUCTS.splice(index, 1);
    }
    return PRODUCTS;
  },
  
  update: (id, updates) => {
    const index = PRODUCTS.findIndex(p => p.id === id);
    if (index > -1) {
      PRODUCTS[index] = { ...PRODUCTS[index], ...updates };
    }
    return PRODUCTS[index];
  }
};
