(function () {
  const STORAGE_KEY = 'everym-lang';
  const SUPPORTED = ['en', 'es', 'pt', 'de', 'fr', 'hu'];

  const LANGUAGES = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'es', label: 'Español', short: 'ES' },
    { code: 'pt', label: 'Português', short: 'PT' },
    { code: 'de', label: 'Deutsch', short: 'DE' },
    { code: 'fr', label: 'Français', short: 'FR' },
    { code: 'hu', label: 'Magyar', short: 'HU' }
  ];

  const TRANSLATIONS = {
    en: {
      meta: {
        homeTitle: 'EveryM | Premium FiveM Scripts',
        homeDesc: 'Premium FiveM scripts and resources for your server. Feature-rich, customizable, and professional solutions.',
        scriptsTitle: 'EveryM | FiveM Scripts Shop',
        scriptsDesc: 'Browse our premium FiveM scripts collection. Admin tools, vehicle systems, UI enhancements and more.',
        supportTitle: 'EveryM | Support Center',
        supportDesc: 'Get help with EveryM FiveM scripts. Contact support, browse FAQs, and join our community.'
      },
      nav: { home: 'Home', scripts: 'Scripts', docs: 'Docs', support: 'Support' },
      common: {
        browseScripts: 'Browse Scripts',
        learnMore: 'Learn More',
        viewAllScripts: 'View All Scripts',
        joinDiscord: 'Join Discord',
        viewDetails: 'View Details',
        viewDocs: 'View Docs',
        purchaseDiscord: 'Purchase via Discord',
        productDetails: 'Product Details',
        quickLinks: 'Quick Links',
        categories: 'Categories',
        community: 'Community',
        connect: 'Connect',
        allScripts: 'All Scripts',
        documentation: 'Documentation',
        adminTools: 'Admin Tools',
        vehicleSystems: 'Vehicle Systems',
        uiEnhancements: 'UI Enhancements',
        footerDesc: 'Premium FiveM scripts and resources for server owners who demand quality.',
        copyright: '© 2026 EveryM Scripts. All rights reserved.',
        noResults: 'No scripts match your search or filters.',
        searchPlaceholder: 'Search Scripts...',
        selectLanguage: 'Select language'
      },
      home: {
        heroTitle: 'EveryM Scripts',
        heroSubtitle: 'Premium FiveM scripts that transform your server experience',
        heroDesc: 'Feature-rich, customizable solutions developed by professionals for the ultimate FiveM experience',
        statScripts: 'Premium Scripts',
        statCustomers: 'Happy Customers',
        statSupport: 'Hour Support',
        statSatisfaction: 'Satisfaction %',
        featuresTitle: 'Why Choose EveryM Scripts?',
        featuresDesc: 'Discover what makes EveryM Scripts the preferred choice for FiveM server owners worldwide. Our commitment to quality, performance, and innovation ensures your server stands out from the rest.',
        feat1Title: 'High Performance',
        feat1Desc: 'Optimized code that ensures smooth gameplay without server lag',
        feat2Title: 'Fully Customizable',
        feat2Desc: "Easy configuration options to match your server's unique style",
        feat3Title: 'Secure & Reliable',
        feat3Desc: 'Built with security best practices and thoroughly tested',
        feat4Title: '24/7 Support',
        feat4Desc: 'Expert assistance whenever you need help with our scripts',
        feat5Title: 'Regular Updates',
        feat5Desc: 'Continuous improvements and new features based on feedback',
        feat6Title: 'Community Driven',
        feat6Desc: 'Built by FiveM enthusiasts who understand your needs',
        featuredTitle: 'Featured Scripts',
        featuredDesc: 'Our most popular and highly-rated scripts that server owners love',
        testimonialsTitle: 'What Our Customers Say',
        testimonialsDesc: 'Real reviews from server owners who trust EveryM Scripts',
        ctaTitle: 'Ready to Elevate Your FiveM Server?',
        ctaDesc: 'Join thousands of server owners who trust EveryM Scripts for premium quality',
        t1: '"The best scripts I\'ve ever purchased! The Advanced Admin Menu completely transformed how we manage our server. Support team is incredibly responsive and helpful."',
        t2: '"EveryM Scripts transformed our server. The attention to detail is incredible, and the regular updates show they truly care about their customers. Highly recommend!"',
        t3: '"Professional scripts with amazing features. The Economy Framework is exactly what our server needed. Worth every penny and then some!"',
        t4: '"The Vehicle System is phenomenal! Our players love the customization options, and the performance is outstanding. Best purchase we\'ve made for our server."',
        t5: '"I\'ve tried many script providers, but EveryM is by far the best. The quality is unmatched and the support team actually listens to feedback."',
        t6: '"The Modern UI Framework made our server look so professional! Players constantly comment on how clean and responsive everything is. Absolutely love it!"'
      },
      scripts: {
        pageTitle: 'Premium FiveM Scripts',
        pageSubtitle: 'Developed for those who seek Functionality & Customization',
        filters: 'Filters',
        category: 'Category',
        catAll: 'All',
        catAdmin: 'Admin',
        catVehicle: 'Vehicle',
        catFun: 'Fun',
        catUi: 'UI',
        catUtility: 'Utility',
        catOther: 'Other'
      },
      support: {
        pageTitle: 'Need Help?',
        pageDesc: "We're here to help you get the most out of EveryM Scripts",
        getInTouch: 'Get in Touch',
        discordTitle: 'Discord Community',
        discordDesc: 'Join our active community for instant support and discussions',
        discordStat1: '24/7 Support',
        discordStat2: '1000+ Members',
        emailTitle: 'Email Support',
        emailDesc: 'Send us an email for detailed inquiries and business proposals',
        emailStat1: 'Response: 0-24h',
        emailStat2: 'Professional Help',
        sendEmail: 'Send Email',
        videoTitle: 'Video Tutorials',
        videoDesc: 'Watch our comprehensive tutorials on YouTube',
        videoStat1: 'Step-by-Step',
        videoStat2: 'Updated Regularly',
        watchVideos: 'Watch Videos',
        faqTitle: 'Frequently Asked Questions',
        faq1Q: 'How do I install a script?',
        faq1A: "Installation is simple! Download the script, extract the files to your server's resources folder, add 'start scriptname' to your server.cfg, and restart your server. Detailed instructions are included with each purchase.",
        faq2Q: 'Do you offer refunds?',
        faq2A: "We offer a 7-day money-back guarantee if the script doesn't work as described or has technical issues. Please contact our support team with your order details.",
        faq3Q: 'Are updates included?',
        faq3A: "Yes! All purchases include lifetime updates. You'll receive notifications when updates are available through our Discord server or email.",
        faq4Q: 'Can I customize the scripts?',
        faq4A: "Absolutely! All our scripts come with comprehensive configuration files. You can customize colors, text, functionality, and more to match your server's needs.",
        faq5Q: 'Do you provide custom development?',
        faq5A: "Yes, we offer custom script development services. Contact us with your requirements and we'll provide a quote based on complexity and features needed.",
        faq6Q: 'What payment methods do you accept?',
        faq6A: 'We accept PayPal, credit/debit cards, and various cryptocurrency payments. All transactions are secure and processed through trusted payment gateways.',
        resourcesTitle: 'Additional Resources',
        resDocsTitle: 'Documentation',
        resDocsDesc: 'Comprehensive guides and API documentation',
        resForumTitle: 'Community Forum',
        resForumDesc: 'Connect with other server owners and developers',
        resForumLink: 'Join Forum',
        resBugTitle: 'Bug Reports',
        resBugDesc: 'Report issues and request features',
        resBugLink: 'Report Bug',
        ctaTitle: 'Still Need Help?',
        ctaDesc: 'Our support team is ready to assist you with any questions or issues',
        joinDiscordSupport: 'Join Discord Support',
        emailUs: 'Email Us'
      },
      products: {
        adminMenu: {
          title: 'Advanced Admin Menu',
          desc: 'Complete server management with intuitive interface and powerful tools',
          descLong: 'Complete server management with intuitive interface and powerful tools. This comprehensive admin solution provides everything you need to manage your FiveM server efficiently.',
          features: ['Player Management', 'Server Tools', 'Customizable', 'Real-time Monitoring', 'Advanced Permissions'],
          details: [
            'Full player management system with kick, ban, and teleport options',
            'Real-time server monitoring and statistics',
            'Customizable interface with multiple themes',
            'Advanced permission system with role-based access',
            'Built-in anti-cheat integration',
            'Comprehensive logging system'
          ]
        },
        vehicleSystem: {
          title: 'Custom Vehicle System',
          desc: 'Enhanced vehicle management with customization and tracking features',
          descLong: 'Enhanced vehicle management with customization and tracking features. Take control of every vehicle on your server with this comprehensive system.',
          features: ['Vehicle Mods', 'Garage System', 'Performance', 'Tracking', 'Insurance'],
          details: [
            'Advanced garage system with multiple locations',
            'Vehicle customization with hundreds of options',
            'Performance tuning and upgrade system',
            'Vehicle tracking and recovery system',
            'Insurance system for vehicle protection',
            'Fuel management system'
          ]
        },
        economyFramework: {
          title: 'Economy Framework',
          desc: 'Complete economic system with jobs, banking, and marketplace',
          descLong: 'Complete economic system with jobs, banking, and marketplace. Build a thriving virtual economy with this comprehensive framework.',
          features: ['Banking', 'Jobs', 'Market', 'Trading', 'Investments'],
          details: [
            'Advanced banking system with accounts and cards',
            'Multiple job categories with progression system',
            'Dynamic marketplace with supply and demand',
            'Trading system between players',
            'Investment opportunities with returns',
            'Tax system and government management'
          ]
        },
        uiFramework: {
          title: 'Modern UI Framework',
          desc: 'Beautiful and responsive user interface components for your server',
          descLong: 'Beautiful and responsive user interface components for your server. Create stunning user experiences with this comprehensive UI toolkit.',
          features: ['Responsive', 'Animated', 'Customizable', 'Modern Design'],
          details: [
            'Responsive design that works on all devices',
            'Smooth animations and transitions',
            'Fully customizable themes and colors',
            'Modern component library',
            'Touch-friendly interface',
            'Accessibility features included'
          ]
        },
        funActivities: {
          title: 'Fun Activities Pack',
          desc: 'Collection of entertaining mini-games and activities for players',
          descLong: 'Collection of entertaining mini-games and activities for players. Keep your players engaged with diverse entertainment options.',
          features: ['Mini Games', 'Entertainment', 'Interactive', 'Social'],
          details: [
            'Multiple mini-games with rewards',
            'Social interaction features',
            'Leaderboards and competitions',
            'Seasonal events and activities',
            'Customizable game rules',
            'Player progression system'
          ]
        },
        everymMenu: {
          title: 'EveryM Menu',
          desc: 'Our flagship menu system with advanced features and beautiful design',
          descLong: 'Our flagship menu system with advanced features and beautiful design. The ultimate menu solution for FiveM servers.',
          features: ['Premium', 'Feature Rich', 'Professional', 'Advanced'],
          details: [
            'Professional-grade interface design',
            'Advanced customization options',
            'Seamless integration with popular frameworks',
            'Regular updates and support',
            'Multi-language support',
            'Cloud synchronization for settings'
          ]
        }
      },
      docs: {
      meta: {
        docsTitle: 'EveryM | Documentation',
        docsDesc: 'Complete documentation for EveryM FiveM scripts. Installation guides, tutorials, and API references.',
        everymMenuTitle: 'EveryM | EveryM Menu Documentation',
        everymMenuDesc: 'Complete documentation for EveryM Menu - Premium FiveM admin menu with advanced features and customization options.',
        installationTitle: 'EveryM | Installation Guide',
        installationDesc: 'Complete installation guide for EveryM FiveM scripts. Step-by-step instructions for server setup.'
      },
      shared: {
        documentation: 'Documentation',
        everymMenu: 'EveryM Menu',
        installationGuide: 'Installation Guide',
        searchPlaceholder: 'Search docs... (⌘K)',
        gettingStarted: 'Getting Started',
        introduction: 'Introduction',
        terms: 'Terms of Purchase',
        generalFaq: 'General FAQ',
        premiumScripts: 'Premium Scripts',
        adminTools: 'Admin Tools',
        vehicleSystems: 'Vehicle Systems',
        features: 'Features',
        installation: 'Installation',
        configuration: 'Configuration',
        apiReference: 'API Reference',
        troubleshooting: 'Troubleshooting',
        onThisPage: 'On This Page',
        quickLinks: 'Quick Links',
        store: 'Store',
        support: 'Support',
        copy: 'Copy',
        copied: 'Copied!',
        copyFailed: 'Failed',
        customerReviews: 'Customer Reviews',
        scriptSpecific: 'Script Specific',
        vehicleSystem: 'Vehicle System',
        adminMenu: 'Admin Menu',
        api: 'API',
        prerequisites: 'Prerequisites',
        basicSetup: 'Basic Setup',
        databaseSetup: 'Database Setup',
        importantNotes: 'Important Notes:',
        solutions: 'Solutions:',
        installationComplete: 'Installation Complete',
        followSteps: 'Follow these steps for a successful setup',
        clientEvents: 'Client Events',
        serverEvents: 'Server Events',
        exportFunctions: 'Export Functions'
      },
      main: {
        introLead: 'Welcome to EveryM Scripts - the premier destination for high-quality FiveM scripts and resources.',
        featFastTitle: 'Lightning Fast',
        featFastMetric: '0.01ms CPU usage',
        featFastDesc: 'Optimized performance with minimal server impact',
        featSecureTitle: 'Secure by Default',
        featSecureMetric: 'Enterprise-grade',
        featSecureDesc: 'Built-in security features and regular updates',
        featDevTitle: 'Developer Friendly',
        featDevMetric: 'Full API Access',
        featDevDesc: 'Comprehensive documentation and developer tools',
        termsLead: 'By purchasing EveryM Scripts products, you agree to the following terms.',
        term1: 'Each license is valid for one FiveM server unless otherwise stated.',
        term2: 'Redistribution, resale, or leaking of scripts is strictly prohibited.',
        term3: 'Lifetime updates are included with every purchase.',
        term4: 'Refunds are available within 7 days if the product does not work as described.',
        term5: 'Support is provided through our official Discord server.',
        faqFrameworks: 'Which frameworks are supported?',
        faqFrameworks1: 'ESX and QBCore are supported on most scripts.',
        faqFrameworks2: 'Standalone mode is available where noted in each product page.',
        faqUpdates: 'How do I receive updates?',
        faqUpdates1: 'Updates are announced in Discord and can be downloaded from your purchase channel.',
        faqHelp: 'Need installation help?',
        faqHelp1: 'See the Installation Guide or open a ticket in Discord.',
        installGuideTitle: 'EveryM Menu - Installation Guide',
        step3Title: 'Step 3: Configure Server Settings',
        step3Desc: 'Edit your server.cfg file to include the following:',
        note1: 'Ensure es_extended is started before everym',
        note2: 'MySQL connection is required for database features',
        note3: 'Restart server after configuration changes',
        openMenuDesc: 'Opens the EveryM menu interface for the player',
        getPlayerDesc: 'Returns comprehensive player data object',
        review1: '"Excellent scripts with amazing support. The admin menu has everything we needed for our server!"',
        review2: '"The vehicle system is incredible! So many customization options and our players love it."'
      },
      everymMenu: {
        subtitle: 'EveryM Menu',
        introLead: 'The most advanced and feature-rich admin menu for FiveM servers. EveryM Menu provides comprehensive server management tools with an intuitive interface and powerful customization options.',
        coreFeatures: 'Core Features',
        advancedFeatures: 'Advanced Features',
        cf1: 'Advanced player management system',
        cf2: 'Real-time server monitoring',
        cf3: 'Custom permission system',
        cf4: 'Vehicle spawning and management',
        cf5: 'Weapon management system',
        cf6: 'Teleportation system',
        cf7: 'Weather and time control',
        cf8: 'Server economy tools',
        af1: 'Custom UI themes and layouts',
        af2: 'Plugin system for extensibility',
        af3: 'Database integration',
        af4: 'Multi-language support',
        af5: 'Mobile responsive design',
        af6: 'Advanced logging system',
        af7: 'Backup and restore functionality',
        step1Title: 'Step 1: Download Files',
        step1Desc: 'Download the EveryM Menu files from our store and extract them to your server\'s resources folder.',
        step2Title: 'Step 2: Configure Server',
        step2Desc: 'Edit your server.cfg file to include the following:',
        step3Title: 'Step 3: Database Setup',
        step3Desc: 'Import the provided SQL file into your database:',
        step4Title: 'Step 4: Restart Server',
        step4Desc: 'Restart your FiveM server to load EveryM Menu. The menu will be available to all administrators with proper permissions.',
        emNote3: 'Configure permissions in the config file',
        emNote4: 'Test all features after installation',
        basicConfig: 'Basic Configuration',
        basicConfigDesc: 'Customize EveryM Menu behavior through the configuration file:',
        advSettings: 'Advanced Settings',
        adv1: 'Custom permission groups',
        adv2: 'UI customization options',
        adv3: 'Feature toggles',
        adv4: 'Database settings',
        adv5: 'API configuration',
        playerActionDesc: 'Triggered when a player performs an admin action',
        commonIssues: 'Common Issues',
        menuNotOpening: 'Menu Not Opening',
        menuNotOpeningDesc: 'Check if the menu key is configured correctly and that you have admin permissions.',
        dbFailed: 'Database Connection Failed',
        dbFailedDesc: 'Verify your MySQL credentials and ensure the database server is running.',
        sol1: 'Verify resource is started in server.cfg',
        sol2: 'Check console for error messages',
        sol3: 'Ensure all dependencies are installed',
        sol4: 'Validate license key',
        sol5: 'Contact support if issues persist'
      },
      installation: {
        subtitle: 'Installation Guide',
        prereqLead: 'Before installing EveryM scripts, ensure your server meets these requirements.',
        serverReq: 'Server Requirements',
        req1: 'FiveM Server Build 5849 or higher',
        req2: 'MySQL 8.0+ or MariaDB 10.5+',
        req3: 'Minimum 4GB RAM (8GB recommended)',
        req4: 'Linux or Windows Server',
        req5: 'Valid EveryM License Key',
        reqFrameworks: 'Required Frameworks',
        rf1: 'es_extended (latest version)',
        rf2: 'oxmysql or mysql-async',
        rf3: 'ox_inventory (for inventory features)',
        rf4: 'ox_target (for interaction system)',
        dlTitle: 'Step 1: Download Scripts',
        dlDesc: 'Download your purchased scripts from the EveryM store. Extract the ZIP file to your server\'s resources folder.',
        cfgTitle: 'Step 2: Configure server.cfg',
        cfgDesc: 'Add the following lines to your server.cfg file:',
        dbTitle: 'Step 3: Database Setup',
        dbDesc: 'Import the provided SQL files into your database:',
        startTitle: 'Step 4: Start Server',
        startDesc: 'Restart your FiveM server to load all scripts. Check the console for any errors.',
        in1: 'Always backup your database before installation',
        in2: 'Start dependencies before EveryM scripts',
        in3: 'Verify all file paths are correct',
        in4: 'Test in a development environment first',
        mysqlConfig: 'MySQL Configuration',
        mysqlConfigDesc: 'Configure your MySQL server for optimal performance with EveryM scripts:',
        dbTables: 'Database Tables',
        dbTablesDesc: 'EveryM scripts will automatically create necessary tables on first startup:',
        dt1: 'everym_players - Player data and statistics',
        dt2: 'everym_vehicles - Vehicle information and customization',
        dt3: 'everym_admin_logs - Administrative action logs',
        dt4: 'everym_inventory - Player inventory data',
        mainConfig: 'Main Configuration File',
        mainConfigDesc: 'Edit the config/config.lua file to customize script behavior:',
        adv1: 'Performance optimization settings',
        adv2: 'Security configuration options',
        adv3: 'Custom event handlers',
        adv4: 'Third-party integrations',
        commonIssues: 'Common Installation Issues',
        resourceNotStarting: 'Resource Not Starting',
        resourceNotStartingDesc: 'Check if all dependencies are properly installed and started before EveryM scripts.',
        dbConnFailed: 'Database Connection Failed',
        dbConnFailedDesc: 'Verify your database credentials and ensure MySQL server is running.',
        sol1: 'Check server console for error messages',
        sol2: 'Verify file permissions',
        sol3: 'Test database connection manually',
        sol4: 'Ensure correct resource order',
        sol5: 'Update to latest versions',
        menuSetup: 'EveryM Menu Setup',
        menuConfig: 'Menu Configuration',
        menuConfigDesc: 'Specific settings for EveryM Menu:',
        adminSetup: 'Admin Tools Setup',
        adminConfig: 'Admin Configuration',
        adminConfigDesc: 'Configure admin tools and permissions:',
        vehicleSetup: 'Vehicle System Setup',
        vehicleConfig: 'Vehicle Configuration',
        vehicleConfigDesc: 'Configure vehicle system features:'
      }
      }
    },
    es: {
      meta: {
        homeTitle: 'EveryM | Scripts Premium para FiveM',
        homeDesc: 'Scripts y recursos premium para FiveM. Soluciones profesionales, personalizables y ricas en funciones.',
        scriptsTitle: 'EveryM | Tienda de Scripts FiveM',
        scriptsDesc: 'Explora nuestra colección premium de scripts FiveM. Herramientas de admin, vehículos, UI y más.',
        supportTitle: 'EveryM | Centro de Soporte',
        supportDesc: 'Obtén ayuda con los scripts EveryM. Contacta soporte, consulta FAQs y únete a la comunidad.'
      },
      nav: { home: 'Inicio', scripts: 'Scripts', docs: 'Docs', support: 'Soporte' },
      common: {
        browseScripts: 'Ver Scripts',
        learnMore: 'Saber Más',
        viewAllScripts: 'Ver Todos los Scripts',
        joinDiscord: 'Unirse a Discord',
        viewDetails: 'Ver Detalles',
        viewDocs: 'Ver Docs',
        purchaseDiscord: 'Comprar por Discord',
        productDetails: 'Detalles del Producto',
        quickLinks: 'Enlaces Rápidos',
        categories: 'Categorías',
        community: 'Comunidad',
        connect: 'Conectar',
        allScripts: 'Todos los Scripts',
        documentation: 'Documentación',
        adminTools: 'Herramientas Admin',
        vehicleSystems: 'Sistemas de Vehículos',
        uiEnhancements: 'Mejoras de UI',
        footerDesc: 'Scripts premium de FiveM para propietarios de servidores que exigen calidad.',
        copyright: '© 2026 EveryM Scripts. Todos los derechos reservados.',
        noResults: 'Ningún script coincide con tu búsqueda o filtros.',
        searchPlaceholder: 'Buscar Scripts...',
        selectLanguage: 'Seleccionar idioma'
      },
      home: {
        heroTitle: 'EveryM Scripts',
        heroSubtitle: 'Scripts premium de FiveM que transforman la experiencia de tu servidor',
        heroDesc: 'Soluciones personalizables y ricas en funciones, desarrolladas por profesionales para la mejor experiencia FiveM',
        statScripts: 'Scripts Premium',
        statCustomers: 'Clientes Felices',
        statSupport: 'Horas de Soporte',
        statSatisfaction: 'Satisfacción %',
        featuresTitle: '¿Por Qué Elegir EveryM Scripts?',
        featuresDesc: 'Descubre por qué EveryM Scripts es la opción preferida de propietarios de servidores FiveM en todo el mundo. Nuestro compromiso con la calidad, el rendimiento y la innovación hace que tu servidor destaque.',
        feat1Title: 'Alto Rendimiento',
        feat1Desc: 'Código optimizado que garantiza un juego fluido sin lag en el servidor',
        feat2Title: 'Totalmente Personalizable',
        feat2Desc: 'Opciones de configuración fáciles para adaptarse al estilo único de tu servidor',
        feat3Title: 'Seguro y Confiable',
        feat3Desc: 'Construido con las mejores prácticas de seguridad y probado exhaustivamente',
        feat4Title: 'Soporte 24/7',
        feat4Desc: 'Asistencia experta cuando necesites ayuda con nuestros scripts',
        feat5Title: 'Actualizaciones Regulares',
        feat5Desc: 'Mejoras continuas y nuevas funciones basadas en comentarios',
        feat6Title: 'Impulsado por la Comunidad',
        feat6Desc: 'Creado por entusiastas de FiveM que entienden tus necesidades',
        featuredTitle: 'Scripts Destacados',
        featuredDesc: 'Nuestros scripts más populares y mejor valorados que los propietarios adoran',
        testimonialsTitle: 'Lo Que Dicen Nuestros Clientes',
        testimonialsDesc: 'Reseñas reales de propietarios de servidores que confían en EveryM Scripts',
        ctaTitle: '¿Listo para Elevar tu Servidor FiveM?',
        ctaDesc: 'Únete a miles de propietarios que confían en EveryM Scripts por su calidad premium',
        t1: '"¡Los mejores scripts que he comprado! El Menú Admin Avanzado transformó completamente cómo gestionamos nuestro servidor. El equipo de soporte es increíblemente receptivo."',
        t2: '"EveryM Scripts transformó nuestro servidor. La atención al detalle es increíble y las actualizaciones regulares demuestran que realmente se preocupan. ¡Muy recomendado!"',
        t3: '"Scripts profesionales con funciones increíbles. El Economy Framework es exactamente lo que nuestro servidor necesitaba. ¡Vale cada centavo!"',
        t4: '"¡El Sistema de Vehículos es fenomenal! A nuestros jugadores les encantan las opciones de personalización y el rendimiento es excelente."',
        t5: '"He probado muchos proveedores, pero EveryM es el mejor. La calidad es inigualable y el soporte realmente escucha."',
        t6: '"¡El Modern UI Framework hizo que nuestro servidor se vea muy profesional! Los jugadores comentan lo limpio y responsive que es todo."'
      },
      scripts: {
        pageTitle: 'Scripts Premium FiveM',
        pageSubtitle: 'Desarrollados para quienes buscan Funcionalidad y Personalización',
        filters: 'Filtros',
        category: 'Categoría',
        catAll: 'Todos',
        catAdmin: 'Admin',
        catVehicle: 'Vehículo',
        catFun: 'Diversión',
        catUi: 'UI',
        catUtility: 'Utilidad',
        catOther: 'Otro'
      },
      support: {
        pageTitle: '¿Necesitas Ayuda?',
        pageDesc: 'Estamos aquí para ayudarte a sacar el máximo provecho de EveryM Scripts',
        getInTouch: 'Contáctanos',
        discordTitle: 'Comunidad Discord',
        discordDesc: 'Únete a nuestra comunidad activa para soporte instantáneo y discusiones',
        discordStat1: 'Soporte 24/7',
        discordStat2: '1000+ Miembros',
        emailTitle: 'Soporte por Email',
        emailDesc: 'Envíanos un email para consultas detalladas y propuestas comerciales',
        emailStat1: 'Respuesta: 0-24h',
        emailStat2: 'Ayuda Profesional',
        sendEmail: 'Enviar Email',
        videoTitle: 'Tutoriales en Video',
        videoDesc: 'Mira nuestros tutoriales completos en YouTube',
        videoStat1: 'Paso a Paso',
        videoStat2: 'Actualizado Regularmente',
        watchVideos: 'Ver Videos',
        faqTitle: 'Preguntas Frecuentes',
        faq1Q: '¿Cómo instalo un script?',
        faq1A: '¡La instalación es simple! Descarga el script, extrae los archivos a la carpeta resources de tu servidor, añade \'start scriptname\' a tu server.cfg y reinicia el servidor. Instrucciones detalladas incluidas con cada compra.',
        faq2Q: '¿Ofrecen reembolsos?',
        faq2A: 'Ofrecemos garantía de devolución de 7 días si el script no funciona como se describe o tiene problemas técnicos. Contacta a nuestro equipo con los detalles de tu pedido.',
        faq3Q: '¿Las actualizaciones están incluidas?',
        faq3A: '¡Sí! Todas las compras incluyen actualizaciones de por vida. Recibirás notificaciones por Discord o email cuando haya actualizaciones.',
        faq4Q: '¿Puedo personalizar los scripts?',
        faq4A: '¡Por supuesto! Todos nuestros scripts incluyen archivos de configuración completos. Puedes personalizar colores, texto, funcionalidad y más.',
        faq5Q: '¿Ofrecen desarrollo personalizado?',
        faq5A: 'Sí, ofrecemos servicios de desarrollo personalizado. Contáctanos con tus requisitos y te daremos un presupuesto según la complejidad.',
        faq6Q: '¿Qué métodos de pago aceptan?',
        faq6A: 'Aceptamos PayPal, tarjetas de crédito/débito y varias criptomonedas. Todas las transacciones son seguras.',
        resourcesTitle: 'Recursos Adicionales',
        resDocsTitle: 'Documentación',
        resDocsDesc: 'Guías completas y documentación API',
        resForumTitle: 'Foro de la Comunidad',
        resForumDesc: 'Conéctate con otros propietarios de servidores y desarrolladores',
        resForumLink: 'Unirse al Foro',
        resBugTitle: 'Reportar Errores',
        resBugDesc: 'Reporta problemas y solicita funciones',
        resBugLink: 'Reportar Error',
        ctaTitle: '¿Aún Necesitas Ayuda?',
        ctaDesc: 'Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta o problema',
        joinDiscordSupport: 'Soporte en Discord',
        emailUs: 'Enviar Email'
      },
      products: {
        adminMenu: { title: 'Menú Admin Avanzado', desc: 'Gestión completa del servidor con interfaz intuitiva y herramientas potentes', descLong: 'Gestión completa del servidor con interfaz intuitiva y herramientas potentes. Esta solución admin integral te da todo lo necesario para gestionar tu servidor FiveM.', features: ['Gestión de Jugadores', 'Herramientas de Servidor', 'Personalizable', 'Monitoreo en Tiempo Real', 'Permisos Avanzados'], details: ['Sistema completo de gestión de jugadores con kick, ban y teleport', 'Monitoreo y estadísticas del servidor en tiempo real', 'Interfaz personalizable con múltiples temas', 'Sistema de permisos avanzado basado en roles', 'Integración anti-cheat incorporada', 'Sistema de registro completo'] },
        vehicleSystem: { title: 'Sistema de Vehículos Personalizado', desc: 'Gestión mejorada de vehículos con personalización y seguimiento', descLong: 'Gestión mejorada de vehículos con personalización y seguimiento. Controla cada vehículo de tu servidor con este sistema integral.', features: ['Mods de Vehículos', 'Sistema de Garaje', 'Rendimiento', 'Seguimiento', 'Seguro'], details: ['Sistema de garaje avanzado con múltiples ubicaciones', 'Personalización con cientos de opciones', 'Sistema de tuning y mejoras de rendimiento', 'Seguimiento y recuperación de vehículos', 'Sistema de seguro para protección', 'Sistema de gestión de combustible'] },
        economyFramework: { title: 'Framework Económico', desc: 'Sistema económico completo con trabajos, banca y mercado', descLong: 'Sistema económico completo con trabajos, banca y mercado. Construye una economía virtual próspera con este framework integral.', features: ['Banca', 'Trabajos', 'Mercado', 'Comercio', 'Inversiones'], details: ['Sistema bancario avanzado con cuentas y tarjetas', 'Múltiples categorías de trabajos con progresión', 'Mercado dinámico con oferta y demanda', 'Sistema de comercio entre jugadores', 'Oportunidades de inversión con retornos', 'Sistema fiscal y gestión gubernamental'] },
        uiFramework: { title: 'Framework UI Moderno', desc: 'Componentes de interfaz hermosos y responsivos para tu servidor', descLong: 'Componentes de interfaz hermosos y responsivos para tu servidor. Crea experiencias de usuario impresionantes con este toolkit UI integral.', features: ['Responsivo', 'Animado', 'Personalizable', 'Diseño Moderno'], details: ['Diseño responsivo para todos los dispositivos', 'Animaciones y transiciones suaves', 'Temas y colores totalmente personalizables', 'Biblioteca de componentes moderna', 'Interfaz táctil amigable', 'Funciones de accesibilidad incluidas'] },
        funActivities: { title: 'Pack de Actividades Divertidas', desc: 'Colección de minijuegos y actividades entretenidas para jugadores', descLong: 'Colección de minijuegos y actividades entretenidas. Mantén a tus jugadores entretenidos con diversas opciones.', features: ['Minijuegos', 'Entretenimiento', 'Interactivo', 'Social'], details: ['Múltiples minijuegos con recompensas', 'Funciones de interacción social', 'Tablas de clasificación y competiciones', 'Eventos y actividades estacionales', 'Reglas de juego personalizables', 'Sistema de progresión del jugador'] },
        everymMenu: { title: 'EveryM Menu', desc: 'Nuestro sistema de menú insignia con funciones avanzadas y diseño hermoso', descLong: 'Nuestro sistema de menú insignia con funciones avanzadas y diseño hermoso. La solución de menú definitiva para servidores FiveM.', features: ['Premium', 'Rico en Funciones', 'Profesional', 'Avanzado'], details: ['Diseño de interfaz de grado profesional', 'Opciones avanzadas de personalización', 'Integración perfecta con frameworks populares', 'Actualizaciones y soporte regulares', 'Soporte multiidioma', 'Sincronización en la nube de ajustes'] }
      }
    },
    pt: {
      meta: {
        homeTitle: 'EveryM | Scripts Premium FiveM',
        homeDesc: 'Scripts e recursos premium para o seu servidor FiveM. Soluções profissionais, personalizáveis e ricas em funcionalidades.',
        scriptsTitle: 'EveryM | Loja de Scripts FiveM',
        scriptsDesc: 'Explore nossa coleção premium de scripts FiveM. Ferramentas admin, veículos, UI e muito mais.',
        supportTitle: 'EveryM | Centro de Suporte',
        supportDesc: 'Obtenha ajuda com os scripts EveryM. Contacte o suporte, consulte FAQs e junte-se à comunidade.'
      },
      nav: { home: 'Início', scripts: 'Scripts', docs: 'Docs', support: 'Suporte' },
      common: {
        browseScripts: 'Ver Scripts',
        learnMore: 'Saiba Mais',
        viewAllScripts: 'Ver Todos os Scripts',
        joinDiscord: 'Entrar no Discord',
        viewDetails: 'Ver Detalhes',
        viewDocs: 'Ver Docs',
        purchaseDiscord: 'Comprar via Discord',
        productDetails: 'Detalhes do Produto',
        quickLinks: 'Links Rápidos',
        categories: 'Categorias',
        community: 'Comunidade',
        connect: 'Conectar',
        allScripts: 'Todos os Scripts',
        documentation: 'Documentação',
        adminTools: 'Ferramentas Admin',
        vehicleSystems: 'Sistemas de Veículos',
        uiEnhancements: 'Melhorias de UI',
        footerDesc: 'Scripts premium FiveM para donos de servidores que exigem qualidade.',
        copyright: '© 2026 EveryM Scripts. Todos os direitos reservados.',
        noResults: 'Nenhum script corresponde à sua pesquisa ou filtros.',
        searchPlaceholder: 'Pesquisar Scripts...',
        selectLanguage: 'Selecionar idioma'
      },
      home: {
        heroTitle: 'EveryM Scripts',
        heroSubtitle: 'Scripts premium FiveM que transformam a experiência do seu servidor',
        heroDesc: 'Soluções personalizáveis e ricas em funcionalidades, desenvolvidas por profissionais para a melhor experiência FiveM',
        statScripts: 'Scripts Premium',
        statCustomers: 'Clientes Satisfeitos',
        statSupport: 'Horas de Suporte',
        statSatisfaction: 'Satisfação %',
        featuresTitle: 'Por Que Escolher EveryM Scripts?',
        featuresDesc: 'Descubra o que torna EveryM Scripts a escolha preferida de donos de servidores FiveM em todo o mundo. O nosso compromisso com qualidade, desempenho e inovação faz o seu servidor destacar-se.',
        feat1Title: 'Alto Desempenho',
        feat1Desc: 'Código otimizado que garante gameplay fluido sem lag no servidor',
        feat2Title: 'Totalmente Personalizável',
        feat2Desc: 'Opções de configuração fáceis para combinar com o estilo único do seu servidor',
        feat3Title: 'Seguro e Confiável',
        feat3Desc: 'Construído com as melhores práticas de segurança e testado exaustivamente',
        feat4Title: 'Suporte 24/7',
        feat4Desc: 'Assistência especializada sempre que precisar de ajuda com os nossos scripts',
        feat5Title: 'Atualizações Regulares',
        feat5Desc: 'Melhorias contínuas e novas funcionalidades baseadas em feedback',
        feat6Title: 'Orientado pela Comunidade',
        feat6Desc: 'Criado por entusiastas FiveM que compreendem as suas necessidades',
        featuredTitle: 'Scripts em Destaque',
        featuredDesc: 'Os nossos scripts mais populares e bem avaliados que os donos de servidores adoram',
        testimonialsTitle: 'O Que Dizem os Nossos Clientes',
        testimonialsDesc: 'Avaliações reais de donos de servidores que confiam na EveryM Scripts',
        ctaTitle: 'Pronto para Elevar o Seu Servidor FiveM?',
        ctaDesc: 'Junte-se a milhares de donos de servidores que confiam na EveryM Scripts pela qualidade premium',
        t1: '"Os melhores scripts que já comprei! O Menu Admin Avançado transformou completamente a gestão do nosso servidor. A equipa de suporte é incrivelmente responsiva."',
        t2: '"EveryM Scripts transformou o nosso servidor. A atenção ao detalhe é incrível e as atualizações regulares mostram que realmente se preocupam. Recomendo muito!"',
        t3: '"Scripts profissionais com funcionalidades incríveis. O Economy Framework é exatamente o que o nosso servidor precisava. Vale cada cêntimo!"',
        t4: '"O Sistema de Veículos é fenomenal! Os nossos jogadores adoram as opções de personalização e o desempenho é excelente."',
        t5: '"Experimentei muitos fornecedores, mas EveryM é de longe o melhor. A qualidade é incomparável e o suporte realmente ouve."',
        t6: '"O Modern UI Framework fez o nosso servidor parecer tão profissional! Os jogadores comentam constantemente o quão limpo e responsivo tudo é."'
      },
      scripts: {
        pageTitle: 'Scripts Premium FiveM',
        pageSubtitle: 'Desenvolvidos para quem procura Funcionalidade e Personalização',
        filters: 'Filtros',
        category: 'Categoria',
        catAll: 'Todos',
        catAdmin: 'Admin',
        catVehicle: 'Veículo',
        catFun: 'Diversão',
        catUi: 'UI',
        catUtility: 'Utilidade',
        catOther: 'Outro'
      },
      support: {
        pageTitle: 'Precisa de Ajuda?',
        pageDesc: 'Estamos aqui para ajudá-lo a tirar o máximo proveito da EveryM Scripts',
        getInTouch: 'Entre em Contacto',
        discordTitle: 'Comunidade Discord',
        discordDesc: 'Junte-se à nossa comunidade ativa para suporte instantâneo e discussões',
        discordStat1: 'Suporte 24/7',
        discordStat2: '1000+ Membros',
        emailTitle: 'Suporte por Email',
        emailDesc: 'Envie-nos um email para consultas detalhadas e propostas comerciais',
        emailStat1: 'Resposta: 0-24h',
        emailStat2: 'Ajuda Profissional',
        sendEmail: 'Enviar Email',
        videoTitle: 'Tutoriais em Vídeo',
        videoDesc: 'Veja os nossos tutoriais completos no YouTube',
        videoStat1: 'Passo a Passo',
        videoStat2: 'Atualizado Regularmente',
        watchVideos: 'Ver Vídeos',
        faqTitle: 'Perguntas Frequentes',
        faq1Q: 'Como instalo um script?',
        faq1A: 'A instalação é simples! Descarregue o script, extraia os ficheiros para a pasta resources do servidor, adicione \'start scriptname\' ao server.cfg e reinicie o servidor. Instruções detalhadas incluídas com cada compra.',
        faq2Q: 'Oferecem reembolsos?',
        faq2A: 'Oferecemos garantia de reembolso de 7 dias se o script não funcionar como descrito ou tiver problemas técnicos. Contacte a nossa equipa com os detalhes do pedido.',
        faq3Q: 'As atualizações estão incluídas?',
        faq3A: 'Sim! Todas as compras incluem atualizações vitalícias. Receberá notificações por Discord ou email quando houver atualizações.',
        faq4Q: 'Posso personalizar os scripts?',
        faq4A: 'Absolutamente! Todos os nossos scripts incluem ficheiros de configuração completos. Pode personalizar cores, texto, funcionalidade e muito mais.',
        faq5Q: 'Oferecem desenvolvimento personalizado?',
        faq5A: 'Sim, oferecemos serviços de desenvolvimento personalizado. Contacte-nos com os seus requisitos e forneceremos um orçamento.',
        faq6Q: 'Que métodos de pagamento aceitam?',
        faq6A: 'Aceitamos PayPal, cartões de crédito/débito e várias criptomoedas. Todas as transações são seguras.',
        resourcesTitle: 'Recursos Adicionais',
        resDocsTitle: 'Documentação',
        resDocsDesc: 'Guias completos e documentação API',
        resForumTitle: 'Fórum da Comunidade',
        resForumDesc: 'Conecte-se com outros donos de servidores e programadores',
        resForumLink: 'Entrar no Fórum',
        resBugTitle: 'Reportar Erros',
        resBugDesc: 'Reporte problemas e solicite funcionalidades',
        resBugLink: 'Reportar Erro',
        ctaTitle: 'Ainda Precisa de Ajuda?',
        ctaDesc: 'A nossa equipa de suporte está pronta para ajudá-lo com qualquer questão ou problema',
        joinDiscordSupport: 'Suporte no Discord',
        emailUs: 'Enviar Email'
      },
      products: {
        adminMenu: { title: 'Menu Admin Avançado', desc: 'Gestão completa do servidor com interface intuitiva e ferramentas poderosas', descLong: 'Gestão completa do servidor com interface intuitiva e ferramentas poderosas. Esta solução admin abrangente dá-lhe tudo para gerir o seu servidor FiveM.', features: ['Gestão de Jogadores', 'Ferramentas de Servidor', 'Personalizável', 'Monitorização em Tempo Real', 'Permissões Avançadas'], details: ['Sistema completo de gestão de jogadores com kick, ban e teleport', 'Monitorização e estatísticas do servidor em tempo real', 'Interface personalizável com múltiplos temas', 'Sistema de permissões avançado baseado em funções', 'Integração anti-cheat incorporada', 'Sistema de registo completo'] },
        vehicleSystem: { title: 'Sistema de Veículos Personalizado', desc: 'Gestão melhorada de veículos com personalização e rastreamento', descLong: 'Gestão melhorada de veículos com personalização e rastreamento. Controle cada veículo do seu servidor com este sistema abrangente.', features: ['Mods de Veículos', 'Sistema de Garagem', 'Desempenho', 'Rastreamento', 'Seguro'], details: ['Sistema de garagem avançado com múltiplas localizações', 'Personalização com centenas de opções', 'Sistema de tuning e melhorias de desempenho', 'Rastreamento e recuperação de veículos', 'Sistema de seguro para proteção', 'Sistema de gestão de combustível'] },
        economyFramework: { title: 'Framework Económico', desc: 'Sistema económico completo com empregos, banca e mercado', descLong: 'Sistema económico completo com empregos, banca e mercado. Construa uma economia virtual próspera com este framework abrangente.', features: ['Banca', 'Empregos', 'Mercado', 'Comércio', 'Investimentos'], details: ['Sistema bancário avançado com contas e cartões', 'Múltiplas categorias de empregos com progressão', 'Mercado dinâmico com oferta e procura', 'Sistema de comércio entre jogadores', 'Oportunidades de investimento com retornos', 'Sistema fiscal e gestão governamental'] },
        uiFramework: { title: 'Framework UI Moderno', desc: 'Componentes de interface bonitos e responsivos para o seu servidor', descLong: 'Componentes de interface bonitos e responsivos para o seu servidor. Crie experiências de utilizador impressionantes com este toolkit UI abrangente.', features: ['Responsivo', 'Animado', 'Personalizável', 'Design Moderno'], details: ['Design responsivo para todos os dispositivos', 'Animações e transições suaves', 'Temas e cores totalmente personalizáveis', 'Biblioteca de componentes moderna', 'Interface tátil amigável', 'Funcionalidades de acessibilidade incluídas'] },
        funActivities: { title: 'Pack de Atividades Divertidas', desc: 'Coleção de minijogos e atividades entretenidas para jogadores', descLong: 'Coleção de minijogos e atividades entretenidas. Mantenha os seus jogadores envolvidos com diversas opções.', features: ['Minijogos', 'Entretenimento', 'Interativo', 'Social'], details: ['Múltiplos minijogos com recompensas', 'Funcionalidades de interação social', 'Tabelas de classificação e competições', 'Eventos e atividades sazonais', 'Regras de jogo personalizáveis', 'Sistema de progressão do jogador'] },
        everymMenu: { title: 'EveryM Menu', desc: 'O nosso sistema de menu principal com funcionalidades avançadas e design bonito', descLong: 'O nosso sistema de menu principal com funcionalidades avançadas e design bonito. A solução de menu definitiva para servidores FiveM.', features: ['Premium', 'Rico em Funcionalidades', 'Profissional', 'Avançado'], details: ['Design de interface de nível profissional', 'Opções avançadas de personalização', 'Integração perfeita com frameworks populares', 'Atualizações e suporte regulares', 'Suporte multilingue', 'Sincronização na nuvem de definições'] }
      }
    },
    de: {
      meta: {
        homeTitle: 'EveryM | Premium FiveM Scripts',
        homeDesc: 'Premium FiveM Scripts und Ressourcen für Ihren Server. Funktionsreich, anpassbar und professionell.',
        scriptsTitle: 'EveryM | FiveM Script Shop',
        scriptsDesc: 'Durchsuchen Sie unsere Premium FiveM Script Sammlung. Admin-Tools, Fahrzeugsysteme, UI und mehr.',
        supportTitle: 'EveryM | Support Center',
        supportDesc: 'Hilfe zu EveryM FiveM Scripts. Support kontaktieren, FAQs durchsuchen und Community beitreten.'
      },
      nav: { home: 'Start', scripts: 'Scripts', docs: 'Docs', support: 'Support' },
      common: {
        browseScripts: 'Scripts Durchsuchen',
        learnMore: 'Mehr Erfahren',
        viewAllScripts: 'Alle Scripts Ansehen',
        joinDiscord: 'Discord Beitreten',
        viewDetails: 'Details Ansehen',
        viewDocs: 'Docs Ansehen',
        purchaseDiscord: 'Kauf via Discord',
        productDetails: 'Produktdetails',
        quickLinks: 'Schnelllinks',
        categories: 'Kategorien',
        community: 'Community',
        connect: 'Verbinden',
        allScripts: 'Alle Scripts',
        documentation: 'Dokumentation',
        adminTools: 'Admin Tools',
        vehicleSystems: 'Fahrzeugsysteme',
        uiEnhancements: 'UI Verbesserungen',
        footerDesc: 'Premium FiveM Scripts für Serverbesitzer, die Qualität verlangen.',
        copyright: '© 2026 EveryM Scripts. Alle Rechte vorbehalten.',
        noResults: 'Keine Scripts entsprechen Ihrer Suche oder Filtern.',
        searchPlaceholder: 'Scripts Suchen...',
        selectLanguage: 'Sprache wählen'
      },
      home: {
        heroTitle: 'EveryM Scripts',
        heroSubtitle: 'Premium FiveM Scripts, die Ihr Server-Erlebnis transformieren',
        heroDesc: 'Funktionsreiche, anpassbare Lösungen von Profis für das ultimative FiveM Erlebnis',
        statScripts: 'Premium Scripts',
        statCustomers: 'Zufriedene Kunden',
        statSupport: 'Stunden Support',
        statSatisfaction: 'Zufriedenheit %',
        featuresTitle: 'Warum EveryM Scripts?',
        featuresDesc: 'Entdecken Sie, warum EveryM Scripts die bevorzugte Wahl für FiveM Serverbesitzer weltweit ist. Unser Engagement für Qualität, Leistung und Innovation lässt Ihren Server hervorstechen.',
        feat1Title: 'Hohe Leistung',
        feat1Desc: 'Optimierter Code für flüssiges Gameplay ohne Server-Lag',
        feat2Title: 'Voll Anpassbar',
        feat2Desc: 'Einfache Konfigurationsoptionen für den einzigartigen Stil Ihres Servers',
        feat3Title: 'Sicher & Zuverlässig',
        feat3Desc: 'Mit Sicherheits-Best-Practices gebaut und gründlich getestet',
        feat4Title: '24/7 Support',
        feat4Desc: 'Expertenhilfe, wann immer Sie Hilfe mit unseren Scripts brauchen',
        feat5Title: 'Regelmäßige Updates',
        feat5Desc: 'Kontinuierliche Verbesserungen und neue Features basierend auf Feedback',
        feat6Title: 'Community Getrieben',
        feat6Desc: 'Von FiveM Enthusiasten gebaut, die Ihre Bedürfnisse verstehen',
        featuredTitle: 'Empfohlene Scripts',
        featuredDesc: 'Unsere beliebtesten und bestbewerteten Scripts, die Serverbesitzer lieben',
        testimonialsTitle: 'Was Unsere Kunden Sagen',
        testimonialsDesc: 'Echte Bewertungen von Serverbesitzern, die EveryM Scripts vertrauen',
        ctaTitle: 'Bereit, Ihren FiveM Server zu Verbessern?',
        ctaDesc: 'Schließen Sie sich Tausenden von Serverbesitzern an, die EveryM Scripts für Premium-Qualität vertrauen',
        t1: '"Die besten Scripts, die ich je gekauft habe! Das Advanced Admin Menu hat unsere Serververwaltung komplett transformiert. Das Support-Team ist unglaublich reaktionsschnell."',
        t2: '"EveryM Scripts hat unseren Server transformiert. Die Liebe zum Detail ist unglaublich und regelmäßige Updates zeigen, dass sie sich wirklich kümmern. Sehr empfehlenswert!"',
        t3: '"Professionelle Scripts mit erstaunlichen Features. Das Economy Framework ist genau das, was unser Server brauchte. Jeden Cent wert!"',
        t4: '"Das Fahrzeugsystem ist phänomenal! Unsere Spieler lieben die Anpassungsoptionen und die Leistung ist hervorragend."',
        t5: '"Ich habe viele Anbieter ausprobiert, aber EveryM ist mit Abstand der Beste. Die Qualität ist unübertroffen und der Support hört wirklich zu."',
        t6: '"Das Modern UI Framework ließ unseren Server so professionell aussehen! Spieler kommentieren ständig, wie sauber und responsiv alles ist."'
      },
      scripts: {
        pageTitle: 'Premium FiveM Scripts',
        pageSubtitle: 'Entwickelt für alle, die Funktionalität & Anpassung suchen',
        filters: 'Filter',
        category: 'Kategorie',
        catAll: 'Alle',
        catAdmin: 'Admin',
        catVehicle: 'Fahrzeug',
        catFun: 'Spaß',
        catUi: 'UI',
        catUtility: 'Utility',
        catOther: 'Sonstige'
      },
      support: {
        pageTitle: 'Brauchen Sie Hilfe?',
        pageDesc: 'Wir helfen Ihnen, das Beste aus EveryM Scripts herauszuholen',
        getInTouch: 'Kontakt Aufnehmen',
        discordTitle: 'Discord Community',
        discordDesc: 'Treten Sie unserer aktiven Community für sofortigen Support und Diskussionen bei',
        discordStat1: '24/7 Support',
        discordStat2: '1000+ Mitglieder',
        emailTitle: 'E-Mail Support',
        emailDesc: 'Senden Sie uns eine E-Mail für detaillierte Anfragen und Geschäftsvorschläge',
        emailStat1: 'Antwort: 0-24h',
        emailStat2: 'Professionelle Hilfe',
        sendEmail: 'E-Mail Senden',
        videoTitle: 'Video Tutorials',
        videoDesc: 'Sehen Sie unsere umfassenden Tutorials auf YouTube',
        videoStat1: 'Schritt für Schritt',
        videoStat2: 'Regelmäßig Aktualisiert',
        watchVideos: 'Videos Ansehen',
        faqTitle: 'Häufig Gestellte Fragen',
        faq1Q: 'Wie installiere ich ein Script?',
        faq1A: 'Die Installation ist einfach! Laden Sie das Script herunter, extrahieren Sie die Dateien in den resources Ordner, fügen Sie \'start scriptname\' zur server.cfg hinzu und starten Sie den Server neu. Detaillierte Anleitungen sind bei jedem Kauf enthalten.',
        faq2Q: 'Bieten Sie Rückerstattungen an?',
        faq2A: 'Wir bieten eine 7-Tage-Geld-zurück-Garantie, wenn das Script nicht wie beschrieben funktioniert oder technische Probleme hat. Kontaktieren Sie unser Support-Team mit Ihren Bestelldetails.',
        faq3Q: 'Sind Updates enthalten?',
        faq3A: 'Ja! Alle Käufe beinhalten lebenslange Updates. Sie erhalten Benachrichtigungen über Discord oder E-Mail, wenn Updates verfügbar sind.',
        faq4Q: 'Kann ich die Scripts anpassen?',
        faq4A: 'Absolut! Alle unsere Scripts enthalten umfassende Konfigurationsdateien. Sie können Farben, Text, Funktionalität und mehr anpassen.',
        faq5Q: 'Bieten Sie individuelle Entwicklung an?',
        faq5A: 'Ja, wir bieten individuelle Script-Entwicklung an. Kontaktieren Sie uns mit Ihren Anforderungen und wir erstellen ein Angebot.',
        faq6Q: 'Welche Zahlungsmethoden akzeptieren Sie?',
        faq6A: 'Wir akzeptieren PayPal, Kredit-/Debitkarten und verschiedene Kryptowährungen. Alle Transaktionen sind sicher.',
        resourcesTitle: 'Zusätzliche Ressourcen',
        resDocsTitle: 'Dokumentation',
        resDocsDesc: 'Umfassende Anleitungen und API-Dokumentation',
        resForumTitle: 'Community Forum',
        resForumDesc: 'Verbinden Sie sich mit anderen Serverbesitzern und Entwicklern',
        resForumLink: 'Forum Beitreten',
        resBugTitle: 'Fehler Melden',
        resBugDesc: 'Probleme melden und Features anfragen',
        resBugLink: 'Fehler Melden',
        ctaTitle: 'Noch Hilfe Benötigt?',
        ctaDesc: 'Unser Support-Team ist bereit, Ihnen bei Fragen oder Problemen zu helfen',
        joinDiscordSupport: 'Discord Support',
        emailUs: 'E-Mail Senden'
      },
      products: {
        adminMenu: { title: 'Erweitertes Admin Menü', desc: 'Komplette Serververwaltung mit intuitiver Oberfläche und leistungsstarken Tools', descLong: 'Komplette Serververwaltung mit intuitiver Oberfläche und leistungsstarken Tools. Diese umfassende Admin-Lösung bietet alles für Ihren FiveM Server.', features: ['Spielerverwaltung', 'Server Tools', 'Anpassbar', 'Echtzeit-Monitoring', 'Erweiterte Berechtigungen'], details: ['Vollständiges Spielerverwaltungssystem mit Kick, Ban und Teleport', 'Echtzeit-Serverüberwachung und Statistiken', 'Anpassbare Oberfläche mit mehreren Themes', 'Erweitertes Berechtigungssystem mit rollenbasiertem Zugriff', 'Integrierte Anti-Cheat Integration', 'Umfassendes Logging-System'] },
        vehicleSystem: { title: 'Individuelles Fahrzeugsystem', desc: 'Verbesserte Fahrzeugverwaltung mit Anpassung und Tracking', descLong: 'Verbesserte Fahrzeugverwaltung mit Anpassung und Tracking. Kontrollieren Sie jedes Fahrzeug auf Ihrem Server mit diesem umfassenden System.', features: ['Fahrzeug Mods', 'Garagensystem', 'Leistung', 'Tracking', 'Versicherung'], details: ['Erweitertes Garagensystem mit mehreren Standorten', 'Fahrzeuganpassung mit hunderten Optionen', 'Leistungs-Tuning und Upgrade-System', 'Fahrzeug-Tracking und Wiederherstellung', 'Versicherungssystem zum Schutz', 'Kraftstoffverwaltungssystem'] },
        economyFramework: { title: 'Wirtschafts Framework', desc: 'Komplettes Wirtschaftssystem mit Jobs, Banking und Marktplatz', descLong: 'Komplettes Wirtschaftssystem mit Jobs, Banking und Marktplatz. Bauen Sie eine blühende virtuelle Wirtschaft mit diesem Framework.', features: ['Banking', 'Jobs', 'Markt', 'Handel', 'Investitionen'], details: ['Erweitertes Bankensystem mit Konten und Karten', 'Mehrere Jobkategorien mit Fortschrittssystem', 'Dynamischer Marktplatz mit Angebot und Nachfrage', 'Handelssystem zwischen Spielern', 'Investitionsmöglichkeiten mit Rendite', 'Steuersystem und Regierungsverwaltung'] },
        uiFramework: { title: 'Modernes UI Framework', desc: 'Schöne und responsive UI-Komponenten für Ihren Server', descLong: 'Schöne und responsive UI-Komponenten für Ihren Server. Erstellen Sie beeindruckende Benutzererlebnisse mit diesem UI Toolkit.', features: ['Responsive', 'Animiert', 'Anpassbar', 'Modernes Design'], details: ['Responsives Design für alle Geräte', 'Sanfte Animationen und Übergänge', 'Voll anpassbare Themes und Farben', 'Moderne Komponentenbibliothek', 'Touch-freundliche Oberfläche', 'Barrierefreiheitsfunktionen enthalten'] },
        funActivities: { title: 'Spaß Aktivitäten Paket', desc: 'Sammlung unterhaltsamer Minispiele und Aktivitäten für Spieler', descLong: 'Sammlung unterhaltsamer Minispiele und Aktivitäten. Halten Sie Ihre Spieler mit vielfältigen Unterhaltungsoptionen bei der Stange.', features: ['Minispiele', 'Unterhaltung', 'Interaktiv', 'Sozial'], details: ['Mehrere Minispiele mit Belohnungen', 'Soziale Interaktionsfunktionen', 'Bestenlisten und Wettbewerbe', 'Saisonale Events und Aktivitäten', 'Anpassbare Spielregeln', 'Spieler-Fortschrittssystem'] },
        everymMenu: { title: 'EveryM Menu', desc: 'Unser Flaggschiff-Menüsystem mit erweiterten Features und schönem Design', descLong: 'Unser Flaggschiff-Menüsystem mit erweiterten Features und schönem Design. Die ultimative Menülösung für FiveM Server.', features: ['Premium', 'Funktionsreich', 'Professionell', 'Erweitert'], details: ['Professionelles Interface-Design', 'Erweiterte Anpassungsoptionen', 'Nahtlose Integration mit populären Frameworks', 'Regelmäßige Updates und Support', 'Mehrsprachige Unterstützung', 'Cloud-Synchronisation für Einstellungen'] }
      }
    },
    fr: {
      meta: {
        homeTitle: 'EveryM | Scripts Premium FiveM',
        homeDesc: 'Scripts et ressources premium pour votre serveur FiveM. Solutions professionnelles, personnalisables et riches en fonctionnalités.',
        scriptsTitle: 'EveryM | Boutique Scripts FiveM',
        scriptsDesc: 'Parcourez notre collection premium de scripts FiveM. Outils admin, véhicules, UI et plus.',
        supportTitle: 'EveryM | Centre de Support',
        supportDesc: 'Obtenez de l\'aide avec les scripts EveryM. Contactez le support, consultez les FAQ et rejoignez la communauté.'
      },
      nav: { home: 'Accueil', scripts: 'Scripts', docs: 'Docs', support: 'Support' },
      common: {
        browseScripts: 'Parcourir les Scripts',
        learnMore: 'En Savoir Plus',
        viewAllScripts: 'Voir Tous les Scripts',
        joinDiscord: 'Rejoindre Discord',
        viewDetails: 'Voir Détails',
        viewDocs: 'Voir Docs',
        purchaseDiscord: 'Acheter via Discord',
        productDetails: 'Détails du Produit',
        quickLinks: 'Liens Rapides',
        categories: 'Catégories',
        community: 'Communauté',
        connect: 'Connexion',
        allScripts: 'Tous les Scripts',
        documentation: 'Documentation',
        adminTools: 'Outils Admin',
        vehicleSystems: 'Systèmes Véhicules',
        uiEnhancements: 'Améliorations UI',
        footerDesc: 'Scripts FiveM premium pour les propriétaires de serveurs exigeants.',
        copyright: '© 2026 EveryM Scripts. Tous droits réservés.',
        noResults: 'Aucun script ne correspond à votre recherche ou filtres.',
        searchPlaceholder: 'Rechercher Scripts...',
        selectLanguage: 'Choisir la langue'
      },
      home: {
        heroTitle: 'EveryM Scripts',
        heroSubtitle: 'Scripts FiveM premium qui transforment l\'expérience de votre serveur',
        heroDesc: 'Solutions personnalisables et riches en fonctionnalités, développées par des professionnels pour l\'expérience FiveM ultime',
        statScripts: 'Scripts Premium',
        statCustomers: 'Clients Satisfaits',
        statSupport: 'Heures de Support',
        statSatisfaction: 'Satisfaction %',
        featuresTitle: 'Pourquoi Choisir EveryM Scripts?',
        featuresDesc: 'Découvrez pourquoi EveryM Scripts est le choix préféré des propriétaires de serveurs FiveM dans le monde. Notre engagement envers la qualité, la performance et l\'innovation fait ressortir votre serveur.',
        feat1Title: 'Haute Performance',
        feat1Desc: 'Code optimisé garantissant un gameplay fluide sans lag serveur',
        feat2Title: 'Entièrement Personnalisable',
        feat2Desc: 'Options de configuration faciles pour correspondre au style unique de votre serveur',
        feat3Title: 'Sécurisé & Fiable',
        feat3Desc: 'Construit avec les meilleures pratiques de sécurité et testé en profondeur',
        feat4Title: 'Support 24/7',
        feat4Desc: 'Assistance experte quand vous avez besoin d\'aide avec nos scripts',
        feat5Title: 'Mises à Jour Régulières',
        feat5Desc: 'Améliorations continues et nouvelles fonctionnalités basées sur les retours',
        feat6Title: 'Piloté par la Communauté',
        feat6Desc: 'Créé par des passionnés FiveM qui comprennent vos besoins',
        featuredTitle: 'Scripts en Vedette',
        featuredDesc: 'Nos scripts les plus populaires et les mieux notés que les propriétaires adorent',
        testimonialsTitle: 'Ce Que Disent Nos Clients',
        testimonialsDesc: 'Avis réels de propriétaires de serveurs qui font confiance à EveryM Scripts',
        ctaTitle: 'Prêt à Élever Votre Serveur FiveM?',
        ctaDesc: 'Rejoignez des milliers de propriétaires qui font confiance à EveryM Scripts pour la qualité premium',
        t1: '"Les meilleurs scripts que j\'ai jamais achetés! Le Menu Admin Avancé a complètement transformé notre gestion de serveur. L\'équipe support est incroyablement réactive."',
        t2: '"EveryM Scripts a transformé notre serveur. L\'attention aux détails est incroyable et les mises à jour régulières montrent qu\'ils se soucient vraiment. Je recommande vivement!"',
        t3: '"Scripts professionnels avec des fonctionnalités incroyables. L\'Economy Framework est exactement ce dont notre serveur avait besoin. Vaut chaque centime!"',
        t4: '"Le Système Véhicules est phénoménal! Nos joueurs adorent les options de personnalisation et les performances sont excellentes."',
        t5: '"J\'ai essayé de nombreux fournisseurs, mais EveryM est de loin le meilleur. La qualité est inégalée et le support écoute vraiment."',
        t6: '"Le Modern UI Framework a rendu notre serveur si professionnel! Les joueurs commentent constamment la propreté et la réactivité de tout."'
      },
      scripts: {
        pageTitle: 'Scripts Premium FiveM',
        pageSubtitle: 'Développés pour ceux qui recherchent Fonctionnalité & Personnalisation',
        filters: 'Filtres',
        category: 'Catégorie',
        catAll: 'Tous',
        catAdmin: 'Admin',
        catVehicle: 'Véhicule',
        catFun: 'Fun',
        catUi: 'UI',
        catUtility: 'Utilitaire',
        catOther: 'Autre'
      },
      support: {
        pageTitle: 'Besoin d\'Aide?',
        pageDesc: 'Nous sommes là pour vous aider à tirer le meilleur parti d\'EveryM Scripts',
        getInTouch: 'Nous Contacter',
        discordTitle: 'Communauté Discord',
        discordDesc: 'Rejoignez notre communauté active pour un support instantané et des discussions',
        discordStat1: 'Support 24/7',
        discordStat2: '1000+ Membres',
        emailTitle: 'Support Email',
        emailDesc: 'Envoyez-nous un email pour des demandes détaillées et propositions commerciales',
        emailStat1: 'Réponse: 0-24h',
        emailStat2: 'Aide Professionnelle',
        sendEmail: 'Envoyer Email',
        videoTitle: 'Tutoriels Vidéo',
        videoDesc: 'Regardez nos tutoriels complets sur YouTube',
        videoStat1: 'Étape par Étape',
        videoStat2: 'Mis à Jour Régulièrement',
        watchVideos: 'Voir Vidéos',
        faqTitle: 'Questions Fréquentes',
        faq1Q: 'Comment installer un script?',
        faq1A: 'L\'installation est simple! Téléchargez le script, extrayez les fichiers dans le dossier resources, ajoutez \'start scriptname\' à votre server.cfg et redémarrez le serveur. Instructions détaillées incluses avec chaque achat.',
        faq2Q: 'Offrez-vous des remboursements?',
        faq2A: 'Nous offrons une garantie de remboursement de 7 jours si le script ne fonctionne pas comme décrit ou a des problèmes techniques. Contactez notre équipe avec vos détails de commande.',
        faq3Q: 'Les mises à jour sont-elles incluses?',
        faq3A: 'Oui! Tous les achats incluent des mises à jour à vie. Vous recevrez des notifications via Discord ou email quand des mises à jour sont disponibles.',
        faq4Q: 'Puis-je personnaliser les scripts?',
        faq4A: 'Absolument! Tous nos scripts incluent des fichiers de configuration complets. Vous pouvez personnaliser couleurs, texte, fonctionnalités et plus.',
        faq5Q: 'Proposez-vous du développement sur mesure?',
        faq5A: 'Oui, nous offrons des services de développement personnalisé. Contactez-nous avec vos exigences et nous fournirons un devis.',
        faq6Q: 'Quels modes de paiement acceptez-vous?',
        faq6A: 'Nous acceptons PayPal, cartes de crédit/débit et diverses cryptomonnaies. Toutes les transactions sont sécurisées.',
        resourcesTitle: 'Ressources Supplémentaires',
        resDocsTitle: 'Documentation',
        resDocsDesc: 'Guides complets et documentation API',
        resForumTitle: 'Forum Communauté',
        resForumDesc: 'Connectez-vous avec d\'autres propriétaires de serveurs et développeurs',
        resForumLink: 'Rejoindre le Forum',
        resBugTitle: 'Signaler des Bugs',
        resBugDesc: 'Signalez des problèmes et demandez des fonctionnalités',
        resBugLink: 'Signaler un Bug',
        ctaTitle: 'Toujours Besoin d\'Aide?',
        ctaDesc: 'Notre équipe support est prête à vous aider avec toute question ou problème',
        joinDiscordSupport: 'Support Discord',
        emailUs: 'Nous Écrire'
      },
      products: {
        adminMenu: { title: 'Menu Admin Avancé', desc: 'Gestion complète du serveur avec interface intuitive et outils puissants', descLong: 'Gestion complète du serveur avec interface intuitive et outils puissants. Cette solution admin complète vous donne tout pour gérer votre serveur FiveM.', features: ['Gestion Joueurs', 'Outils Serveur', 'Personnalisable', 'Monitoring Temps Réel', 'Permissions Avancées'], details: ['Système complet de gestion des joueurs avec kick, ban et teleport', 'Monitoring et statistiques serveur en temps réel', 'Interface personnalisable avec plusieurs thèmes', 'Système de permissions avancé basé sur les rôles', 'Intégration anti-triche intégrée', 'Système de journalisation complet'] },
        vehicleSystem: { title: 'Système Véhicules Personnalisé', desc: 'Gestion améliorée des véhicules avec personnalisation et suivi', descLong: 'Gestion améliorée des véhicules avec personnalisation et suivi. Contrôlez chaque véhicule de votre serveur avec ce système complet.', features: ['Mods Véhicules', 'Système Garage', 'Performance', 'Suivi', 'Assurance'], details: ['Système de garage avancé avec plusieurs emplacements', 'Personnalisation avec des centaines d\'options', 'Système de tuning et amélioration des performances', 'Suivi et récupération des véhicules', 'Système d\'assurance pour protection', 'Système de gestion du carburant'] },
        economyFramework: { title: 'Framework Économique', desc: 'Système économique complet avec emplois, banque et marketplace', descLong: 'Système économique complet avec emplois, banque et marketplace. Construisez une économie virtuelle prospère avec ce framework.', features: ['Banque', 'Emplois', 'Marché', 'Commerce', 'Investissements'], details: ['Système bancaire avancé avec comptes et cartes', 'Plusieurs catégories d\'emplois avec progression', 'Marketplace dynamique avec offre et demande', 'Système d\'échange entre joueurs', 'Opportunités d\'investissement avec retours', 'Système fiscal et gestion gouvernementale'] },
        uiFramework: { title: 'Framework UI Moderne', desc: 'Composants d\'interface beaux et responsifs pour votre serveur', descLong: 'Composants d\'interface beaux et responsifs pour votre serveur. Créez des expériences utilisateur impressionnantes avec ce toolkit UI.', features: ['Responsive', 'Animé', 'Personnalisable', 'Design Moderne'], details: ['Design responsive pour tous les appareils', 'Animations et transitions fluides', 'Thèmes et couleurs entièrement personnalisables', 'Bibliothèque de composants moderne', 'Interface tactile conviviale', 'Fonctionnalités d\'accessibilité incluses'] },
        funActivities: { title: 'Pack Activités Fun', desc: 'Collection de mini-jeux et activités divertissantes pour les joueurs', descLong: 'Collection de mini-jeux et activités divertissantes. Gardez vos joueurs engagés avec diverses options de divertissement.', features: ['Mini Jeux', 'Divertissement', 'Interactif', 'Social'], details: ['Plusieurs mini-jeux avec récompenses', 'Fonctionnalités d\'interaction sociale', 'Classements et compétitions', 'Événements et activités saisonniers', 'Règles de jeu personnalisables', 'Système de progression du joueur'] },
        everymMenu: { title: 'EveryM Menu', desc: 'Notre système de menu phare avec fonctionnalités avancées et beau design', descLong: 'Notre système de menu phare avec fonctionnalités avancées et beau design. La solution menu ultime pour les serveurs FiveM.', features: ['Premium', 'Riche en Fonctions', 'Professionnel', 'Avancé'], details: ['Design d\'interface de qualité professionnelle', 'Options de personnalisation avancées', 'Intégration transparente avec les frameworks populaires', 'Mises à jour et support réguliers', 'Support multilingue', 'Synchronisation cloud des paramètres'] }
      }
    },
    hu: {
      meta: {
        homeTitle: 'EveryM | Prémium FiveM Scriptek',
        homeDesc: 'Prémium FiveM scriptek és erőforrások a szerveredhez. Funkciógazdag, testreszabható és professzionális megoldások.',
        scriptsTitle: 'EveryM | FiveM Script Bolt',
        scriptsDesc: 'Böngészd prémium FiveM script kollekciónkat. Admin eszközök, járműrendszerek, UI fejlesztések és még sok más.',
        supportTitle: 'EveryM | Támogatási Központ',
        supportDesc: 'Segítség az EveryM FiveM scriptekhez. Lépj kapcsolatba a támogatással, böngészd a GYIK-et, és csatlakozz a közösséghez.'
      },
      nav: { home: 'Kezdőlap', scripts: 'Scriptek', docs: 'Dokumentáció', support: 'Támogatás' },
      common: {
        browseScripts: 'Scriptek Böngészése',
        learnMore: 'Tudj Meg Többet',
        viewAllScripts: 'Összes Script Megtekintése',
        joinDiscord: 'Csatlakozás Discordhoz',
        viewDetails: 'Részletek Megtekintése',
        viewDocs: 'Dokumentáció Megtekintése',
        purchaseDiscord: 'Vásárlás Discordon',
        productDetails: 'Termék Részletei',
        quickLinks: 'Gyorslinkek',
        categories: 'Kategóriák',
        community: 'Közösség',
        connect: 'Kapcsolat',
        allScripts: 'Összes Script',
        documentation: 'Dokumentáció',
        adminTools: 'Admin Eszközök',
        vehicleSystems: 'Járműrendszerek',
        uiEnhancements: 'UI Fejlesztések',
        footerDesc: 'Prémium FiveM scriptek és erőforrások olyan szervertulajdonosoknak, akik minőséget követelnek.',
        copyright: '© 2026 EveryM Scripts. Minden jog fenntartva.',
        noResults: 'Nincs a keresésnek vagy szűrőknek megfelelő script.',
        searchPlaceholder: 'Scriptek Keresése...',
        selectLanguage: 'Nyelv kiválasztása'
      },
      home: {
        heroTitle: 'EveryM Scripts',
        heroSubtitle: 'Prémium FiveM scriptek, amelyek átalakítják a szerverélményt',
        heroDesc: 'Funkciógazdag, testreszabható megoldások profi fejlesztőktől a legjobb FiveM élményért',
        statScripts: 'Prémium Script',
        statCustomers: 'Elégedett Ügyfél',
        statSupport: 'Órás Támogatás',
        statSatisfaction: 'Elégedettség %',
        featuresTitle: 'Miért az EveryM Scripts?',
        featuresDesc: 'Fedezd fel, miért választják világszerte a FiveM szervertulajdonosok az EveryM Scriptset. Minőség, teljesítmény és innováció iránti elkötelezettségünk kiemeli a szerveredet.',
        feat1Title: 'Magas Teljesítmény',
        feat1Desc: 'Optimalizált kód, amely sima játékmenetet biztosít szerverlag nélkül',
        feat2Title: 'Teljesen Testreszabható',
        feat2Desc: 'Egyszerű konfigurációs lehetőségek a szervered egyedi stílusához',
        feat3Title: 'Biztonságos és Megbízható',
        feat3Desc: 'Biztonsági legjobb gyakorlatok alapján készült és alaposan tesztelt',
        feat4Title: '24/7 Támogatás',
        feat4Desc: 'Szakértői segítség, amikor csak szükséged van rá a scriptjeinkhez',
        feat5Title: 'Rendszeres Frissítések',
        feat5Desc: 'Folyamatos fejlesztések és új funkciók visszajelzések alapján',
        feat6Title: 'Közösség Által Támogatott',
        feat6Desc: 'FiveM rajongók készítették, akik értik az igényeidet',
        featuredTitle: 'Kiemelt Scriptek',
        featuredDesc: 'Legnépszerűbb és legjobban értékelt scriptjeink, amelyeket a szervertulajdonosok imádnak',
        testimonialsTitle: 'Mit Mondanak Ügyfeleink',
        testimonialsDesc: 'Valódi vélemények olyan szervertulajdonosoktól, akik az EveryM Scriptsre bíznak',
        ctaTitle: 'Készen Állsz, Hogy Fejleszd a FiveM Szervered?',
        ctaDesc: 'Csatlakozz több ezer szervertulajdonoshoz, akik prémium minőségért bíznak az EveryM Scriptsben',
        t1: '"A legjobb scriptek, amiket valaha vásároltam! Az Advanced Admin Menu teljesen átalakította a szerverkezelésünket. A támogató csapat hihetetlenül gyorsan reagál."',
        t2: '"Az EveryM Scripts átalakította a szerverünket. A részletekre való odafigyelés hihetetlen, és a rendszeres frissítések mutatják, hogy tényleg törődnek az ügyfelekkel. Nagyon ajánlom!"',
        t3: '"Professzionális scriptek fantasztikus funkciókkal. Az Economy Framework pontosan az, amire a szerverünknek szüksége volt. Megér minden fillért!"',
        t4: '"A Vehicle System fenomenális! A játékosaink imádják a testreszabási lehetőségeket, és a teljesítmény kiváló. A legjobb vásárlás, amit a szerverünkre tettünk."',
        t5: '"Sok szolgáltatót kipróbáltam, de az EveryM messze a legjobb. A minőség páratlan, és a támogatás tényleg figyel a visszajelzésekre."',
        t6: '"A Modern UI Framework olyan profi megjelenést adott a szerverünknek! A játékosok folyton dicsérik, milyen tiszta és reszponzív minden. Imádom!"'
      },
      scripts: {
        pageTitle: 'Prémium FiveM Scriptek',
        pageSubtitle: 'Azoknak készült, akik funkcionalitást és testreszabhatóságot keresnek',
        filters: 'Szűrők',
        category: 'Kategória',
        catAll: 'Összes',
        catAdmin: 'Admin',
        catVehicle: 'Jármű',
        catFun: 'Szórakozás',
        catUi: 'UI',
        catUtility: 'Segéd',
        catOther: 'Egyéb'
      },
      support: {
        pageTitle: 'Segítségre Van Szükséged?',
        pageDesc: 'Azért vagyunk itt, hogy a legtöbbet hozhasd ki az EveryM Scriptsből',
        getInTouch: 'Lépj Kapcsolatba',
        discordTitle: 'Discord Közösség',
        discordDesc: 'Csatlakozz aktív közösségünkhöz azonnali támogatásért és beszélgetésekért',
        discordStat1: '24/7 Támogatás',
        discordStat2: '1000+ Tag',
        emailTitle: 'E-mail Támogatás',
        emailDesc: 'Írj nekünk e-mailt részletes kérdésekkel és üzleti ajánlatokkal',
        emailStat1: 'Válasz: 0-24 óra',
        emailStat2: 'Professzionális Segítség',
        sendEmail: 'E-mail Küldése',
        videoTitle: 'Videó Oktatóanyagok',
        videoDesc: 'Nézd meg átfogó oktatóanyagainkat YouTube-on',
        videoStat1: 'Lépésről Lépésre',
        videoStat2: 'Rendszeresen Frissítve',
        watchVideos: 'Videók Megtekintése',
        faqTitle: 'Gyakran Ismételt Kérdések',
        faq1Q: 'Hogyan telepítsek egy scriptet?',
        faq1A: 'A telepítés egyszerű! Töltsd le a scriptet, csomagold ki a szerver resources mappájába, add hozzá a \'start scriptname\' sort a server.cfg fájlhoz, majd indítsd újra a szervert. Részletes útmutató minden vásárláshoz jár.',
        faq2Q: 'Visszatérítést kínáltok?',
        faq2A: '7 napos pénzvisszafizetési garanciát kínálunk, ha a script nem a leírásnak megfelelően működik, vagy technikai problémái vannak. Lépj kapcsolatba támogató csapatunkkal a rendelés adataival.',
        faq3Q: 'A frissítések benne vannak az árban?',
        faq3A: 'Igen! Minden vásárlás élethosszig tartó frissítéseket tartalmaz. Discord szerverünkön vagy e-mailben értesítünk, amikor frissítés érhető el.',
        faq4Q: 'Testreszabhatom a scripteket?',
        faq4A: 'Természetesen! Minden scriptünk átfogó konfigurációs fájlokkal érkezik. Színeket, szöveget, funkcionalitást és még sok mást igazíthatsz a szervered igényeihez.',
        faq5Q: 'Vállaltok egyedi fejlesztést?',
        faq5A: 'Igen, egyedi script fejlesztési szolgáltatást is kínálunk. Írd meg az igényeidet, és az összetettség és funkciók alapján árajánlatot adunk.',
        faq6Q: 'Milyen fizetési módokat fogadtok el?',
        faq6A: 'Elfogadunk PayPal-t, bank- és hitelkártyát, valamint különböző kriptovalutákat. Minden tranzakció biztonságos és megbízható fizetési átjárókon keresztül történik.',
        resourcesTitle: 'További Források',
        resDocsTitle: 'Dokumentáció',
        resDocsDesc: 'Átfogó útmutatók és API dokumentáció',
        resForumTitle: 'Közösségi Fórum',
        resForumDesc: 'Kapcsolódj más szervertulajdonosokhoz és fejlesztőkhöz',
        resForumLink: 'Csatlakozás a Fórumhoz',
        resBugTitle: 'Hibajelentés',
        resBugDesc: 'Jelents problémákat és kérj új funkciókat',
        resBugLink: 'Hiba Jelentése',
        ctaTitle: 'Még Mindig Segítségre Van Szükséged?',
        ctaDesc: 'Támogató csapatunk készen áll, hogy segítsen bármilyen kérdésben vagy problémában',
        joinDiscordSupport: 'Discord Támogatás',
        emailUs: 'E-mail Küldése'
      },
      products: {
        adminMenu: {
          title: 'Advanced Admin Menu',
          desc: 'Teljes szerverkezelés intuitív felülettel és hatékony eszközökkel',
          descLong: 'Teljes szerverkezelés intuitív felülettel és hatékony eszközökkel. Ez az átfogó admin megoldás mindent biztosít a FiveM szervered hatékony kezeléséhez.',
          features: ['Játékoskezelés', 'Szerver Eszközök', 'Testreszabható', 'Valós Idejű Monitorozás', 'Fejlett Jogosultságok'],
          details: [
            'Teljes játékoskezelő rendszer kick, ban és teleport opciókkal',
            'Valós idejű szervermonitorozás és statisztikák',
            'Testreszabható felület több témával',
            'Fejlett jogosultsági rendszer szerepkör-alapú hozzáféréssel',
            'Beépített anti-cheat integráció',
            'Átfogó naplózási rendszer'
          ]
        },
        vehicleSystem: {
          title: 'Custom Vehicle System',
          desc: 'Fejlett járműkezelés testreszabással és nyomkövetéssel',
          descLong: 'Fejlett járműkezelés testreszabással és nyomkövetéssel. Irányítsd a szerver minden járművét ezzel az átfogó rendszerrel.',
          features: ['Jármű Modok', 'Garázs Rendszer', 'Teljesítmény', 'Nyomkövetés', 'Biztosítás'],
          details: [
            'Fejlett garázsrendszer több hellyel',
            'Járműtestreszabás több száz opcióval',
            'Teljesítményhangolás és fejlesztési rendszer',
            'Járműnyomkövetés és visszaszerzés',
            'Biztosítási rendszer a járművek védelmére',
            'Üzemanyag-kezelő rendszer'
          ]
        },
        economyFramework: {
          title: 'Economy Framework',
          desc: 'Teljes gazdasági rendszer munkákkal, bankolással és piactérrel',
          descLong: 'Teljes gazdasági rendszer munkákkal, bankolással és piactérrel. Építs virágzó virtuális gazdaságot ezzel az átfogó keretrendszerrel.',
          features: ['Bankolás', 'Munkák', 'Piac', 'Kereskedés', 'Befektetések'],
          details: [
            'Fejlett bankrendszer számlákkal és kártyákkal',
            'Több munkakategória fejlődési rendszerrel',
            'Dinamikus piactér kereslettel és kínálattal',
            'Játékosok közötti kereskedési rendszer',
            'Befektetési lehetőségek hozamokkal',
            'Adórendszer és kormányzati menedzsment'
          ]
        },
        uiFramework: {
          title: 'Modern UI Framework',
          desc: 'Gyönyörű és reszponzív felhasználói felület komponensek a szerveredhez',
          descLong: 'Gyönyörű és reszponzív felhasználói felület komponensek a szerveredhez. Lenyűgöző felhasználói élményeket hozhatsz létre ezzel az átfogó UI eszköztárrel.',
          features: ['Reszponzív', 'Animált', 'Testreszabható', 'Modern Design'],
          details: [
            'Reszponzív design minden eszközön',
            'Sima animációk és átmenetek',
            'Teljesen testreszabható témák és színek',
            'Modern komponenskönyvtár',
            'Érintésbarát felület',
            'Akadálymentesítési funkciók'
          ]
        },
        funActivities: {
          title: 'Fun Activities Pack',
          desc: 'Szórakoztató minijátékok és tevékenységek gyűjteménye játékosoknak',
          descLong: 'Szórakoztató minijátékok és tevékenységek gyűjteménye játékosoknak. Tartsd a játékosaidat leköve sokféle szórakozási lehetőséggel.',
          features: ['Minijátékok', 'Szórakozás', 'Interaktív', 'Közösségi'],
          details: [
            'Több minijáték jutalmakkal',
            'Közösségi interakciós funkciók',
            'Ranglisták és versenyek',
            'Szezonális események és tevékenységek',
            'Testreszabható játékszabályok',
            'Játékos fejlődési rendszer'
          ]
        },
        everymMenu: {
          title: 'EveryM Menu',
          desc: 'Zászlóshajó menürendszerünk fejlett funkciókkal és gyönyörű dizájnnal',
          descLong: 'Zászlóshajó menürendszerünk fejlett funkciókkal és gyönyörű dizájnnal. A végső menümegoldás FiveM szerverekhez.',
          features: ['Prémium', 'Funkciógazdag', 'Professzionális', 'Fejlett'],
          details: [
            'Professzionális szintű felületdesign',
            'Fejlett testreszabási lehetőségek',
            'Zökkenőmentes integráció népszerű keretrendszerekkel',
            'Rendszeres frissítések és támogatás',
            'Többnyelvű támogatás',
            'Felhőalapú beállításszinkronizáció'
          ]
        }
      },
    docs: {
      meta: {
        docsTitle: 'EveryM | Dokumentáció',
        docsDesc: 'Teljes dokumentáció az EveryM FiveM scriptekhez. Telepítési útmutatók, oktatóanyagok és API hivatkozások.',
        everymMenuTitle: 'EveryM | EveryM Menu Dokumentáció',
        everymMenuDesc: 'Teljes dokumentáció az EveryM Menuhoz – prémium FiveM admin menü fejlett funkciókkal és testreszabási lehetőségekkel.',
        installationTitle: 'EveryM | Telepítési Útmutató',
        installationDesc: 'Teljes telepítési útmutató az EveryM FiveM scriptekhez. Lépésről lépésre szerverbeállítási instrukciók.'
      },
      shared: {
        documentation: 'Dokumentáció',
        everymMenu: 'EveryM Menu',
        installationGuide: 'Telepítési Útmutató',
        searchPlaceholder: 'Dokumentáció keresése... (⌘K)',
        gettingStarted: 'Kezdés',
        introduction: 'Bevezetés',
        terms: 'Vásárlási Feltételek',
        generalFaq: 'Általános GYIK',
        premiumScripts: 'Prémium Scriptek',
        adminTools: 'Admin Eszközök',
        vehicleSystems: 'Járműrendszerek',
        features: 'Funkciók',
        installation: 'Telepítés',
        configuration: 'Konfiguráció',
        apiReference: 'API Hivatkozás',
        troubleshooting: 'Hibaelhárítás',
        onThisPage: 'Ezen az Oldalon',
        quickLinks: 'Gyorslinkek',
        store: 'Bolt',
        support: 'Támogatás',
        copy: 'Másolás',
        copied: 'Másolva!',
        copyFailed: 'Sikertelen',
        customerReviews: 'Ügyfélvélemények',
        scriptSpecific: 'Script Specifikus',
        vehicleSystem: 'Járműrendszer',
        adminMenu: 'Admin Menü',
        api: 'API',
        prerequisites: 'Előfeltételek',
        basicSetup: 'Alapbeállítás',
        databaseSetup: 'Adatbázis Beállítás',
        importantNotes: 'Fontos Megjegyzések:',
        solutions: 'Megoldások:',
        installationComplete: 'Telepítés Kész',
        followSteps: 'Kövesd ezeket a lépéseket a sikeres beállításhoz',
        clientEvents: 'Kliens Események',
        serverEvents: 'Szerver Események',
        exportFunctions: 'Export Funkciók'
      },
      main: {
        introLead: 'Üdvözöljük az EveryM Scriptsnél – a kiváló minőségű FiveM scriptek és erőforrások premier célpontjánál.',
        featFastTitle: 'Villámgyors',
        featFastMetric: '0,01 ms CPU használat',
        featFastDesc: 'Optimalizált teljesítmény minimális szerverterheléssel',
        featSecureTitle: 'Alapértelmezetten Biztonságos',
        featSecureMetric: 'Vállalati szint',
        featSecureDesc: 'Beépített biztonsági funkciók és rendszeres frissítések',
        featDevTitle: 'Fejlesztőbarát',
        featDevMetric: 'Teljes API Hozzáférés',
        featDevDesc: 'Átfogó dokumentáció és fejlesztői eszközök',
        termsLead: 'Az EveryM Scripts termékek megvásárlásával elfogadod az alábbi feltételeket.',
        term1: 'Minden licenc egy FiveM szerverre érvényes, hacsak másként nincs jelezve.',
        term2: 'A scriptek újraosztása, viszonteladása vagy kiszivárogtatása szigorúan tilos.',
        term3: 'Minden vásárlás élethosszig tartó frissítéseket tartalmaz.',
        term4: '7 napon belül visszatérítés érhető el, ha a termék nem a leírásnak megfelelően működik.',
        term5: 'A támogatás hivatalos Discord szerverünkön keresztül érhető el.',
        faqFrameworks: 'Milyen keretrendszereket támogat?',
        faqFrameworks1: 'A legtöbb script támogatja az ESX-et és a QBCore-t.',
        faqFrameworks2: 'Standalone mód elérhető, ahol az egyes termékoldalakon jelezve van.',
        faqUpdates: 'Hogyan kapom meg a frissítéseket?',
        faqUpdates1: 'A frissítéseket Discordon jelezzük, és a vásárlási csatornából töltheted le.',
        faqHelp: 'Telepítési segítségre van szükséged?',
        faqHelp1: 'Nézd meg a Telepítési Útmutatót, vagy nyiss jegyet Discordon.',
        installGuideTitle: 'EveryM Menu - Telepítési Útmutató',
        step3Title: '3. lépés: Szerverbeállítások Konfigurálása',
        step3Desc: 'Szerkeszd a server.cfg fájlt az alábbiak hozzáadásával:',
        note1: 'Győződj meg róla, hogy az es_extended az everym előtt indul',
        note2: 'MySQL kapcsolat szükséges az adatbázis funkciókhoz',
        note3: 'Indítsd újra a szervert a konfiguráció módosítása után',
        openMenuDesc: 'Megnyitja az EveryM menü felületét a játékos számára',
        getPlayerDesc: 'Átfogó játékosadat-objektumot ad vissza',
        review1: '"Kiváló scriptek fantasztikus támogatással. Az admin menü mindent tartalmaz, amire a szerverünknek szüksége volt!"',
        review2: '"A járműrendszer hihetetlen! Annyi testreszabási lehetőség, és a játékosaink imádják."'
      },
      everymMenu: {
        subtitle: 'EveryM Menu',
        introLead: 'A legfejlettebb és legfunkciógazdagabb admin menü FiveM szerverekhez. Az EveryM Menu átfogó szerverkezelő eszközöket biztosít intuitív felülettel és hatékony testreszabási lehetőségekkel.',
        coreFeatures: 'Alapfunkciók',
        advancedFeatures: 'Fejlett Funkciók',
        cf1: 'Fejlett játékoskezelő rendszer',
        cf2: 'Valós idejű szervermonitorozás',
        cf3: 'Egyedi jogosultsági rendszer',
        cf4: 'Jármű spawnolás és kezelés',
        cf5: 'Fegyverkezelő rendszer',
        cf6: 'Teleportáló rendszer',
        cf7: 'Időjárás és idő vezérlés',
        cf8: 'Szerver gazdasági eszközök',
        af1: 'Egyedi UI témák és elrendezések',
        af2: 'Plugin rendszer a bővíthetőséghez',
        af3: 'Adatbázis integráció',
        af4: 'Többnyelvű támogatás',
        af5: 'Mobilbarát reszponzív design',
        af6: 'Fejlett naplózási rendszer',
        af7: 'Biztonsági mentés és visszaállítás',
        step1Title: '1. lépés: Fájlok Letöltése',
        step1Desc: 'Töltsd le az EveryM Menu fájlokat boltunkból, és csomagold ki a szerver resources mappájába.',
        step2Title: '2. lépés: Szerver Konfigurálása',
        step2Desc: 'Szerkeszd a server.cfg fájlt az alábbiak hozzáadásával:',
        step3Title: '3. lépés: Adatbázis Beállítás',
        step3Desc: 'Importáld a mellékelt SQL fájlt az adatbázisba:',
        step4Title: '4. lépés: Szerver Újraindítása',
        step4Desc: 'Indítsd újra a FiveM szervert az EveryM Menu betöltéséhez. A menü minden megfelelő jogosultságú adminisztrátor számára elérhető lesz.',
        emNote3: 'Állítsd be a jogosultságokat a konfigurációs fájlban',
        emNote4: 'Teszteld az összes funkciót telepítés után',
        basicConfig: 'Alap Konfiguráció',
        basicConfigDesc: 'Az EveryM Menu viselkedésének testreszabása a konfigurációs fájlon keresztül:',
        advSettings: 'Fejlett Beállítások',
        adv1: 'Egyedi jogosultsági csoportok',
        adv2: 'UI testreszabási lehetőségek',
        adv3: 'Funkciókapcsolók',
        adv4: 'Adatbázis beállítások',
        adv5: 'API konfiguráció',
        playerActionDesc: 'Akkor aktiválódik, amikor egy játékos admin műveletet hajt végre',
        commonIssues: 'Gyakori Problémák',
        menuNotOpening: 'A Menü Nem Nyílik Meg',
        menuNotOpeningDesc: 'Ellenőrizd, hogy a menü billentyű helyesen van-e beállítva, és van-e admin jogosultságod.',
        dbFailed: 'Adatbázis Kapcsolat Sikertelen',
        dbFailedDesc: 'Ellenőrizd a MySQL hitelesítő adatokat, és győződj meg róla, hogy az adatbázis-szerver fut.',
        sol1: 'Ellenőrizd, hogy a resource elindult-e a server.cfg-ben',
        sol2: 'Nézd meg a konzolt hibaüzenetekért',
        sol3: 'Győződj meg róla, hogy minden függőség telepítve van',
        sol4: 'Érvényesítsd a licenckulcsot',
        sol5: 'Lépj kapcsolatba a támogatással, ha a probléma továbbra is fennáll'
      },
      installation: {
        subtitle: 'Telepítési Útmutató',
        prereqLead: 'Az EveryM scriptek telepítése előtt győződj meg róla, hogy a szervered megfelel ezeknek a követelményeknek.',
        serverReq: 'Szerver Követelmények',
        req1: 'FiveM Server Build 5849 vagy újabb',
        req2: 'MySQL 8.0+ vagy MariaDB 10.5+',
        req3: 'Minimum 4 GB RAM (8 GB ajánlott)',
        req4: 'Linux vagy Windows Server',
        req5: 'Érvényes EveryM Licenckulcs',
        reqFrameworks: 'Szükséges Keretrendszerek',
        rf1: 'es_extended (legújabb verzió)',
        rf2: 'oxmysql vagy mysql-async',
        rf3: 'ox_inventory (inventory funkciókhoz)',
        rf4: 'ox_target (interakciós rendszerhez)',
        dlTitle: '1. lépés: Scriptek Letöltése',
        dlDesc: 'Töltsd le a megvásárolt scripteket az EveryM boltból. Csomagold ki a ZIP fájlt a szerver resources mappájába.',
        cfgTitle: '2. lépés: server.cfg Konfigurálása',
        cfgDesc: 'Add hozzá az alábbi sorokat a server.cfg fájlhoz:',
        dbTitle: '3. lépés: Adatbázis Beállítás',
        dbDesc: 'Importáld a mellékelt SQL fájlokat az adatbázisba:',
        startTitle: '4. lépés: Szerver Indítása',
        startDesc: 'Indítsd újra a FiveM szervert az összes script betöltéséhez. Ellenőrizd a konzolt hibákért.',
        in1: 'Mindig készíts biztonsági mentést az adatbázisról telepítés előtt',
        in2: 'Indítsd el a függőségeket az EveryM scriptek előtt',
        in3: 'Ellenőrizd, hogy minden fájlútvonal helyes',
        in4: 'Először fejlesztői környezetben teszteld',
        mysqlConfig: 'MySQL Konfiguráció',
        mysqlConfigDesc: 'Állítsd be a MySQL szervert az EveryM scriptek optimális teljesítményéhez:',
        dbTables: 'Adatbázis Táblák',
        dbTablesDesc: 'Az EveryM scriptek első indításkor automatikusan létrehozzák a szükséges táblákat:',
        dt1: 'everym_players - Játékos adatok és statisztikák',
        dt2: 'everym_vehicles - Járműinformációk és testreszabás',
        dt3: 'everym_admin_logs - Adminisztrációs művelet naplók',
        dt4: 'everym_inventory - Játékos inventory adatok',
        mainConfig: 'Fő Konfigurációs Fájl',
        mainConfigDesc: 'Szerkeszd a config/config.lua fájlt a script viselkedésének testreszabásához:',
        adv1: 'Teljesítmény-optimalizálási beállítások',
        adv2: 'Biztonsági konfigurációs opciók',
        adv3: 'Egyedi eseménykezelők',
        adv4: 'Harmadik fél integrációk',
        commonIssues: 'Gyakori Telepítési Problémák',
        resourceNotStarting: 'A Resource Nem Indul El',
        resourceNotStartingDesc: 'Ellenőrizd, hogy minden függőség megfelelően telepítve van-e és elindult-e az EveryM scriptek előtt.',
        dbConnFailed: 'Adatbázis Kapcsolat Sikertelen',
        dbConnFailedDesc: 'Ellenőrizd az adatbázis hitelesítő adatokat, és győződj meg róla, hogy a MySQL szerver fut.',
        sol1: 'Ellenőrizd a szerver konzolt hibaüzenetekért',
        sol2: 'Ellenőrizd a fájl jogosultságokat',
        sol3: 'Teszteld az adatbázis kapcsolatot manuálisan',
        sol4: 'Győződj meg róla, hogy a resource sorrend helyes',
        sol5: 'Frissíts a legújabb verziókra',
        menuSetup: 'EveryM Menu Beállítás',
        menuConfig: 'Menü Konfiguráció',
        menuConfigDesc: 'Az EveryM Menu specifikus beállításai:',
        adminSetup: 'Admin Eszközök Beállítás',
        adminConfig: 'Admin Konfiguráció',
        adminConfigDesc: 'Admin eszközök és jogosultságok konfigurálása:',
        vehicleSetup: 'Járműrendszer Beállítás',
        vehicleConfig: 'Jármű Konfiguráció',
        vehicleConfigDesc: 'Járműrendszer funkciók konfigurálása:'
      }
    }
  }
};

  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';
  if (!SUPPORTED.includes(currentLang)) currentLang = 'en';

  function getNested(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  }

  function t(key) {
    const val = getNested(TRANSLATIONS[currentLang], key);
    if (val !== null && val !== undefined) return val;
    return getNested(TRANSLATIONS.en, key) || key;
  }

  function getPageId() {
    const page = window.location.pathname.split('/').pop();
    if (!page || page === 'index.html') return 'home';
    if (page === 'scripts.html') return 'scripts';
    if (page === 'support.html') return 'support';
    if (page === 'docs.html') return 'docs';
    if (page === 'docs-everym-menu.html') return 'docsEverymMenu';
    if (page === 'docs-installation.html') return 'docsInstallation';
    return null;
  }

  function getDocsMetaPrefix(pageId) {
    if (pageId === 'docsEverymMenu') return 'everymMenu';
    if (pageId === 'docsInstallation') return 'installation';
    return 'docs';
  }

  function applyMeta() {
    const pageId = getPageId();
    if (!pageId) return;
    const metaPrefix = pageId.startsWith('docs') ? getDocsMetaPrefix(pageId) : pageId;
    const titleKey = pageId.startsWith('docs') ? `docs.meta.${metaPrefix}Title` : `meta.${metaPrefix}Title`;
    const descKey = pageId.startsWith('docs') ? `docs.meta.${metaPrefix}Desc` : `meta.${metaPrefix}Desc`;
    const title = t(titleKey);
    const desc = t(descKey);
    if (title) document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && desc) metaDesc.setAttribute('content', desc);
    document.documentElement.lang = currentLang;
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = t(key);
      if (value === null || value === undefined || typeof value === 'object') return;
      el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const value = t(key);
      if (value) {
        el.setAttribute('data-placeholder', value);
        if (el.tagName === 'INPUT') el.placeholder = value;
      }
    });

    document.querySelectorAll('.copy-btn[data-i18n]').forEach(btn => {
      btn.textContent = t(btn.getAttribute('data-i18n'));
    });

    document.querySelectorAll('.product[data-product-id]').forEach(card => {
      const id = card.getAttribute('data-product-id');
      const product = t(`products.${id}`);
      if (!product || typeof product !== 'object') return;
      const titleEl = card.querySelector('h3');
      const descEl = card.querySelector('.product-description');
      if (titleEl) titleEl.textContent = product.title;
      if (descEl) descEl.textContent = product.desc;
      const tags = card.querySelectorAll('.feature-tag');
      if (product.features && tags.length) {
        tags.forEach((tag, i) => {
          if (product.features[i]) tag.textContent = product.features[i];
        });
      }
      const btn = card.querySelector('.product-btn');
      if (btn) btn.textContent = t('common.viewDetails');
    });

    document.querySelectorAll('.preview-card[data-product-id]').forEach(card => {
      const id = card.getAttribute('data-product-id');
      const product = t(`products.${id}`);
      if (!product || typeof product !== 'object') return;
      const titleEl = card.querySelector('h3');
      const descEl = card.querySelector('p');
      if (titleEl) titleEl.textContent = product.title;
      if (descEl) descEl.textContent = product.desc;
    });

    const searchEl = document.querySelector('.scriptsearch');
    if (searchEl) searchEl.setAttribute('data-placeholder', t('common.searchPlaceholder'));

    const noResults = document.getElementById('noResultsMessage');
    if (noResults) noResults.textContent = t('common.noResults');

    const modalDetailsHeading = document.querySelector('.modal-details h3');
    if (modalDetailsHeading) modalDetailsHeading.textContent = t('common.productDetails');

    const purchaseBtn = document.querySelector('.modal-footer .dc-join-btn');
    if (purchaseBtn) {
      const label = purchaseBtn.querySelector('[data-i18n]');
      if (label) label.textContent = t('common.purchaseDiscord');
      else purchaseBtn.textContent = t('common.purchaseDiscord');
    }

    const modalDocsLink = document.getElementById('modalDocsLink');
    if (modalDocsLink) modalDocsLink.textContent = t('common.viewDocs');

    const langToggle = document.getElementById('langToggle');
    if (langToggle) langToggle.setAttribute('aria-label', t('common.selectLanguage'));

    updateLangToggleLabel();
    applyMeta();
    document.dispatchEvent(new CustomEvent('everym:languagechange', { detail: { lang: currentLang } }));
  }

  function updateLangToggleLabel() {
    const current = LANGUAGES.find(l => l.code === currentLang);
    const label = document.getElementById('langCurrent');
    if (label && current) label.textContent = current.short;
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }

  function setLanguage(code) {
    if (!SUPPORTED.includes(code)) return;
    currentLang = code;
    localStorage.setItem(STORAGE_KEY, code);
    applyTranslations();
    closeLangMenu();
  }

  function closeLangMenu() {
    const selector = document.getElementById('langSelector');
    const toggle = document.getElementById('langToggle');
    if (selector) selector.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  function createLangSelectorMarkup() {
    return `
      <button type="button" class="lang-toggle" id="langToggle" aria-label="${t('common.selectLanguage')}" aria-expanded="false" aria-haspopup="listbox">
        <span class="material-symbols-outlined" aria-hidden="true">language</span>
        <span class="lang-current" id="langCurrent">EN</span>
      </button>
      <div class="lang-menu" id="langMenu" role="listbox">
        ${LANGUAGES.map(l => `<button type="button" class="lang-option" data-lang="${l.code}" role="option">${l.label}</button>`).join('')}
      </div>`;
  }

  function bindLangSelector(selector) {
    const toggle = selector.querySelector('#langToggle');
    if (!toggle) return;

    toggle.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = selector.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    selector.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        setLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  function initLangSelector() {
    if (document.getElementById('langSelector')) return;

    const headerbar = document.getElementById('headerbar');
    if (headerbar) {
      const navLinks = headerbar.querySelectorAll('.headerbtns');
      if (navLinks.length && !headerbar.querySelector('.headerbar-nav')) {
        const nav = document.createElement('div');
        nav.className = 'headerbar-nav';
        navLinks.forEach(link => nav.appendChild(link));
        headerbar.insertBefore(nav, headerbar.firstChild);
      }

      const selector = document.createElement('div');
      selector.className = 'lang-selector';
      selector.id = 'langSelector';
      selector.innerHTML = createLangSelectorMarkup();
      headerbar.appendChild(selector);
      bindLangSelector(selector);
      updateLangToggleLabel();
      return;
    }

    const sidebarHeader = document.querySelector('.docs-sidebar .sidebar-header');
    if (sidebarHeader) {
      const row = document.createElement('div');
      row.className = 'docs-lang-row';
      const selector = document.createElement('div');
      selector.className = 'lang-selector';
      selector.id = 'langSelector';
      selector.innerHTML = createLangSelectorMarkup();
      row.appendChild(selector);
      const search = sidebarHeader.querySelector('.search-component');
      if (search) sidebarHeader.insertBefore(row, search);
      else sidebarHeader.appendChild(row);
      bindLangSelector(selector);
      updateLangToggleLabel();
    }
  }

  window.EveryMI18n = {
    t,
    getLang: () => currentLang,
    setLanguage,
    applyTranslations,
    getProduct: id => {
      const product = t(`products.${id}`);
      return product && typeof product === 'object' ? product : null;
    }
  };

  function initI18n() {
    initLangSelector();
    applyTranslations();
    document.addEventListener('click', () => closeLangMenu());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }

  window.addEventListener('pageshow', () => {
    if (document.getElementById('langSelector')) applyTranslations();
  });
})();
