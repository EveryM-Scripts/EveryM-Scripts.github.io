# Product Management Guide

## How to Add, Remove, or Customize Products

All product management is now done in **products.js** - no HTML editing needed!

### Adding a New Product

Open `products.js` and add a new object to the `PRODUCTS` array:

```javascript
{
  id: 'yourProductId',                    // Unique ID (no spaces, use camelCase)
  name: 'Product Name',                   // Display name
  description: 'Short description',       // Short description for card
  longDescription: 'Long description...', // Detailed description for modal
  price: 29.99,                          // Price (number, not string)
  categories: ['admin', 'utility'],       // Categories for filtering
  image: null,                           // Image URL or null for gradient
  gradient: 'linear-gradient(...)',      // CSS gradient (used if image is null)
  features: ['Feature 1', 'Feature 2'],  // Feature tags (shown on card)
  details: ['Detail 1', 'Detail 2'],     // Detailed list (shown in modal)
  docsPage: 'docs-installation.html',   // Link to documentation
  isSpecial: false                       // Optional: for special styling
}
```

### Image Options

You have 3 options for product images:

1. **Use an image file:**
   ```javascript
   image: 'assets/my-product.png'
   ```

2. **Use an external URL:**
   ```javascript
   image: 'https://example.com/image.png'
   ```

3. **Use a gradient (default):**
   ```javascript
   image: null,
   gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a24)'
   ```

### Removing a Product

Simply delete the product object from the `PRODUCTS` array in `products.js`.

### Updating a Product

Edit any field in the product object. Changes will appear immediately on both:
- Homepage (featured scripts section)
- Scripts page (full product grid)

### Categories

Available categories (you can add more):
- `admin` - Admin tools
- `vehicle` - Vehicle systems
- `fun` - Fun activities
- `ui` - UI enhancements
- `utility` - Utility scripts
- `other` - Other scripts

A product can belong to multiple categories:
```javascript
categories: ['admin', 'utility']
```

### Helper Functions

The `ProductManager` object provides utility functions:

```javascript
// Get all products
ProductManager.getAll()

// Get product by ID
ProductManager.getById('adminMenu')

// Get products by category
ProductManager.getByCategory('admin')

// Add a new product
ProductManager.add({ /* product object */ })

// Remove a product
ProductManager.remove('adminMenu')

// Update a product
ProductManager.update('adminMenu', { price: 19.99 })
```

### Example: Adding a New Product

```javascript
{
  id: 'customVehiclePack',
  name: 'Custom Vehicle Pack',
  description: '50+ custom vehicles with handling and tuning',
  longDescription: 'A comprehensive pack of 50+ custom vehicles including sports cars, SUVs, and trucks. Each vehicle includes custom handling, tuning options, and realistic physics.',
  price: 29.99,
  categories: ['vehicle'],
  image: 'assets/vehicle-pack.png',
  gradient: null,
  features: ['50+ Vehicles', 'Custom Handling', 'Tuning System', 'Realistic Physics'],
  details: [
    '50+ unique vehicle models',
    'Custom handling for each vehicle',
    'Tuning and modification system',
    'Realistic physics and damage',
    'Regular vehicle additions',
    'Optimized performance'
  ],
  docsPage: 'docs-installation.html'
}
```

That's it! No HTML changes needed. Just edit `products.js` and you're done.
