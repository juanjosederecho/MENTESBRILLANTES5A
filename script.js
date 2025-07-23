// Mentes Brillantes - JavaScript Functionality

// Global variables
let games = [];
let filteredGames = [];
let deferredPrompt;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    
    // Initialize immediately
    initializeApp();
    
    // Load games immediately
    loadGamesNow();
    
    // Setup everything else
    setupEventListeners();
    setupPWA();
});

// Initialize application
function initializeApp() {
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup smooth scrolling for navigation
    setupSmoothScrolling();
    
    // Setup theme system
    setupThemeSystem();
}

// Load games immediately
function loadGamesNow() {
    console.log('Loading games now...');
    
    // Create example games
    const exampleGames = [
        {
            id: 1,
            title: "Simulaciones PhET - Física Interactiva",
            description: "Explora conceptos de física a través de simulaciones interactivas. Ideal para entender ondas, electricidad, mecánica y más.",
            subject: "Física",
            url: "https://phet.colorado.edu/es/simulations",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzMzNzNkYyIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UGhFVCBGw61zaWNhPC90ZXh0Pjwvc3ZnPg==",
            dateAdded: new Date().toISOString()
        },
        {
            id: 2,
            title: "Educaplay - Juegos Educativos",
            description: "Plataforma con múltiples actividades educativas: crucigramas, sopas de letras, tests y más para todas las materias.",
            subject: "Comunicación",
            url: "https://www.educaplay.com/",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzEwYjk4MSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RWR1Y2FwbGF5PC90ZXh0Pjwvc3ZnPg==",
            dateAdded: new Date().toISOString()
        },
        {
            id: 3,
            title: "Khan Academy - Matemáticas",
            description: "Aprende matemáticas desde lo básico hasta cálculo avanzado con ejercicios interactivos y videos explicativos.",
            subject: "Matemática",
            url: "https://es.khanacademy.org/math",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzE0YTc4NSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+S2hhbiBBY2FkZW15PC90ZXh0Pjwvc3ZnPg==",
            dateAdded: new Date().toISOString()
        },
        {
            id: 4,
            title: "Duolingo - Inglés Interactivo",
            description: "Aprende inglés de forma divertida con lecciones gamificadas, ejercicios de pronunciación y seguimiento de progreso.",
            subject: "Inglés",
            url: "https://www.duolingo.com/",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzU4Y2M0YyIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RHVvbGluZ288L3RleHQ+PC9zdmc+",
            dateAdded: new Date().toISOString()
        },
        {
            id: 5,
            title: "Seterra - Geografía Mundial",
            description: "Juego de geografía para aprender países, capitales, banderas y características geográficas del mundo.",
            subject: "Geografía",
            url: "https://www.seterra.com/es",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzM5OGVjYyIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U2V0ZXJyYTwvdGV4dD48L3N2Zz4=",
            dateAdded: new Date().toISOString()
        },
        {
            id: 6,
            title: "Periodic Table Game",
            description: "Aprende la tabla periódica de elementos químicos de forma interactiva con juegos y desafíos.",
            subject: "Química",
            url: "https://www.ptable.com/",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1OWU0MiIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UXXDrW1pY2E8L3RleHQ+PC9zdmc+",
            dateAdded: new Date().toISOString()
        }
    ];
    
    // Load from localStorage or use examples
    const savedGames = localStorage.getItem('mentesbrillantes_games');
    if (savedGames) {
        try {
            games = JSON.parse(savedGames);
            console.log('Loaded from localStorage:', games.length, 'games');
        } catch (e) {
            console.error('Error parsing saved games:', e);
            games = exampleGames;
        }
    } else {
        games = exampleGames;
        localStorage.setItem('mentesbrillantes_games', JSON.stringify(games));
        console.log('Created new games:', games.length);
    }
    
    filteredGames = [...games];
    displayGames();
}

// Display games function
function displayGames() {
    const gamesGrid = document.getElementById('games-grid');
    const noGamesMessage = document.getElementById('no-games');
    
    console.log('displayGames called - games:', games.length, 'filtered:', filteredGames.length);
    
    if (!gamesGrid) {
        console.error('Games grid element not found!');
        return;
    }
    
    if (filteredGames.length === 0) {
        gamesGrid.innerHTML = '<div class="col-span-full text-center py-8 text-gray-500">No hay juegos para mostrar</div>';
        if (noGamesMessage) {
            noGamesMessage.classList.remove('hidden');
        }
        return;
    }
    
    if (noGamesMessage) {
        noGamesMessage.classList.add('hidden');
    }
    
    const gamesHTML = filteredGames.map(game => `
        <div class="game-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="relative overflow-hidden">
                <img src="${game.image}" alt="${game.title}" class="w-full h-48 object-cover">
                <div class="absolute top-2 right-2">
                    <span class="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        ${game.subject}
                    </span>
                </div>
                <div class="absolute top-2 left-2">
                    <button onclick="deleteGame(${game.id})" 
                            class="bg-red-600 hover:bg-red-700 text-white p-1 rounded-full text-xs transition-colors"
                            title="Eliminar juego">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-bold text-lg text-gray-800 mb-2">${game.title}</h3>
                <p class="text-gray-600 text-sm mb-4">${game.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-xs text-gray-500">
                        ${new Date(game.dateAdded).toLocaleDateString('es-ES')}
                    </span>
                    <div class="flex gap-2">
                        <a href="${game.url}" target="_blank" rel="noopener noreferrer" 
                           class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            <i class="fas fa-play mr-1"></i>
                            Jugar
                        </a>
                        <button onclick="deleteGame(${game.id})" 
                                class="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                                title="Eliminar juego">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    gamesGrid.innerHTML = gamesHTML;
    console.log('Games displayed successfully:', filteredGames.length);
}

// Setup mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
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
}

// Setup event listeners
function setupEventListeners() {
    // Game form submission
    const gameForm = document.getElementById('game-form');
    if (gameForm) {
        gameForm.addEventListener('submit', handleGameSubmission);
    }
    
    // Image upload preview
    const imageInput = document.getElementById('game-image');
    if (imageInput) {
        imageInput.addEventListener('change', handleImagePreview);
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-games');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // QR code generation
    const generateQRBtn = document.getElementById('generate-qr');
    if (generateQRBtn) {
        generateQRBtn.addEventListener('click', generateQRCode);
    }
    
    // APK functionality
    const downloadApkBtn = document.getElementById('download-apk');
    if (downloadApkBtn) {
        downloadApkBtn.addEventListener('click', downloadAPK);
    }
    
    const installApkBtn = document.getElementById('install-apk');
    if (installApkBtn) {
        installApkBtn.addEventListener('click', installAPK);
    }
    
    // Share buttons
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', handleShare);
    });
    
    // Theme buttons
    setupThemeEventListeners();
    
    console.log('Event listeners setup complete');
}

// Handle game form submission
function handleGameSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const imageFile = formData.get('image');
    
    if (!imageFile || imageFile.size === 0) {
        showMessage('Por favor selecciona una imagen para el juego', 'error');
        return;
    }
    
    // Convert image to base64
    const reader = new FileReader();
    reader.onload = function(event) {
        const gameData = {
            id: Date.now(),
            title: formData.get('title'),
            description: formData.get('description'),
            subject: formData.get('subject'),
            url: formData.get('url'),
            image: event.target.result,
            dateAdded: new Date().toISOString()
        };
        
        // Add game to array
        games.unshift(gameData);
        filteredGames = [...games];
        
        // Save to localStorage
        localStorage.setItem('mentesbrillantes_games', JSON.stringify(games));
        
        // Display updated games
        displayGames();
        
        // Reset form
        e.target.reset();
        const imagePreview = document.getElementById('image-preview');
        if (imagePreview) {
            imagePreview.classList.add('hidden');
        }
        
        // Show success message
        showMessage('¡Juego subido exitosamente!', 'success');
        
        // Scroll to games section
        const gamesSection = document.getElementById('juegos');
        if (gamesSection) {
            gamesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    reader.readAsDataURL(imageFile);
}

// Handle image preview
function handleImagePreview(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const preview = document.getElementById('image-preview');
            const previewImg = document.getElementById('preview-img');
            if (preview && previewImg) {
                previewImg.src = event.target.result;
                preview.classList.remove('hidden');
            }
        };
        reader.readAsDataURL(file);
    }
}

// Handle search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm) ||
        game.subject.toLowerCase().includes(searchTerm)
    );
    displayGames();
}

// Handle filter functionality
function handleFilter(e) {
    const filterValue = e.target.dataset.filter;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('bg-emerald-600', 'text-white');
        btn.classList.add('bg-white', 'text-gray-800');
    });
    
    e.target.classList.add('active');
    e.target.classList.add('bg-emerald-600', 'text-white');
    e.target.classList.remove('bg-white', 'text-gray-800');
    
    // Filter games
    if (filterValue === 'all') {
        filteredGames = [...games];
    } else {
        filteredGames = games.filter(game => game.subject === filterValue);
    }
    
    displayGames();
}

// Force load games function - MANTIENE los juegos existentes
function forceLoadGames() {
    console.log('Force loading games (keeping existing)...');
    
    // Crear juegos de ejemplo
    const exampleGames = [
        {
            id: 1,
            title: "Simulaciones PhET - Física Interactiva",
            description: "Explora conceptos de física a través de simulaciones interactivas. Ideal para entender ondas, electricidad, mecánica y más.",
            subject: "Física",
            url: "https://phet.colorado.edu/es/simulations",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzMzNzNkYyIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UGhFVCBGw61zaWNhPC90ZXh0Pjwvc3ZnPg==",
            dateAdded: new Date().toISOString()
        },
        {
            id: 2,
            title: "Educaplay - Juegos Educativos",
            description: "Plataforma con múltiples actividades educativas: crucigramas, sopas de letras, tests y más para todas las materias.",
            subject: "Comunicación",
            url: "https://www.educaplay.com/",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzEwYjk4MSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RWR1Y2FwbGF5PC90ZXh0Pjwvc3ZnPg==",
            dateAdded: new Date().toISOString()
        },
        {
            id: 3,
            title: "Khan Academy - Matemáticas",
            description: "Aprende matemáticas desde lo básico hasta cálculo avanzado con ejercicios interactivos y videos explicativos.",
            subject: "Matemática",
            url: "https://es.khanacademy.org/math",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzE0YTc4NSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+S2hhbiBBY2FkZW15PC90ZXh0Pjwvc3ZnPg==",
            dateAdded: new Date().toISOString()
        },
        {
            id: 4,
            title: "Duolingo - Inglés Interactivo",
            description: "Aprende inglés de forma divertida con lecciones gamificadas, ejercicios de pronunciación y seguimiento de progreso.",
            subject: "Inglés",
            url: "https://www.duolingo.com/",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzU4Y2M0YyIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RHVvbGluZ288L3RleHQ+PC9zdmc+",
            dateAdded: new Date().toISOString()
        },
        {
            id: 5,
            title: "Seterra - Geografía Mundial",
            description: "Juego de geografía para aprender países, capitales, banderas y características geográficas del mundo.",
            subject: "Geografía",
            url: "https://www.seterra.com/es",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzM5OGVjYyIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U2V0ZXJyYTwvdGV4dD48L3N2Zz4=",
            dateAdded: new Date().toISOString()
        },
        {
            id: 6,
            title: "Periodic Table Game",
            description: "Aprende la tabla periódica de elementos químicos de forma interactiva con juegos y desafíos.",
            subject: "Química",
            url: "https://www.ptable.com/",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1OWU0MiIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UXXDrW1pY2E8L3RleHQ+PC9zdmc+",
            dateAdded: new Date().toISOString()
        }
    ];
    
    // Solo agregar juegos de ejemplo que NO existan ya
    let addedCount = 0;
    exampleGames.forEach(exampleGame => {
        const exists = games.some(game => game.title === exampleGame.title);
        if (!exists) {
            games.push(exampleGame);
            addedCount++;
        }
    });
    
    // Actualizar arrays y localStorage
    filteredGames = [...games];
    localStorage.setItem('mentesbrillantes_games', JSON.stringify(games));
    
    // Mostrar juegos
    displayGames();
    
    showMessage(`Juegos cargados: ${addedCount} nuevos agregados (${games.length} total)`, 'success');
}

// Theme System Functions
function setupThemeSystem() {
    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('mentesbrillantes_theme') || 'light';
    applyTheme(savedTheme);
    updateThemeButtons(savedTheme);
}

function setupThemeEventListeners() {
    // Desktop theme buttons
    const themeLight = document.getElementById('theme-light');
    const themeDark = document.getElementById('theme-dark');
    const themePink = document.getElementById('theme-pink');
    
    // Mobile theme buttons
    const mobileThemeLight = document.getElementById('mobile-theme-light');
    const mobileThemeDark = document.getElementById('mobile-theme-dark');
    const mobileThemePink = document.getElementById('mobile-theme-pink');
    
    // Add event listeners
    if (themeLight) themeLight.addEventListener('click', () => changeTheme('light'));
    if (themeDark) themeDark.addEventListener('click', () => changeTheme('dark'));
    if (themePink) themePink.addEventListener('click', () => changeTheme('pink'));
    
    if (mobileThemeLight) mobileThemeLight.addEventListener('click', () => changeTheme('light'));
    if (mobileThemeDark) mobileThemeDark.addEventListener('click', () => changeTheme('dark'));
    if (mobileThemePink) mobileThemePink.addEventListener('click', () => changeTheme('pink'));
}

function changeTheme(theme) {
    applyTheme(theme);
    updateThemeButtons(theme);
    localStorage.setItem('mentesbrillantes_theme', theme);
    
    // Show theme change message
    const themeNames = {
        light: 'Claro',
        dark: 'Oscuro',
        pink: 'Rosa Palo'
    };
    showMessage(`Tema cambiado a ${themeNames[theme]}`, 'success');
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update meta theme color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const themeColors = {
        light: '#3b82f6',
        dark: '#1e293b',
        pink: '#ec4899'
    };
    
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', themeColors[theme]);
    }
}

function updateThemeButtons(activeTheme) {
    // Desktop buttons
    const desktopButtons = {
        light: document.getElementById('theme-light'),
        dark: document.getElementById('theme-dark'),
        pink: document.getElementById('theme-pink')
    };
    
    // Mobile buttons
    const mobileButtons = {
        light: document.getElementById('mobile-theme-light'),
        dark: document.getElementById('mobile-theme-dark'),
        pink: document.getElementById('mobile-theme-pink')
    };
    
    // Update desktop buttons
    Object.keys(desktopButtons).forEach(theme => {
        const button = desktopButtons[theme];
        if (button) {
            if (theme === activeTheme) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        }
    });
    
    // Update mobile buttons
    Object.keys(mobileButtons).forEach(theme => {
        const button = mobileButtons[theme];
        if (button) {
            if (theme === activeTheme) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        }
    });
}

// Show message notifications
function showMessage(message, type = 'success') {
    const container = document.getElementById('message-container');
    if (!container) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-lg">&times;</button>
        </div>
    `;
    
    container.appendChild(messageDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Placeholder functions for other features
function generateQRCode() {
    showMessage('Generando código QR...', 'success');
}

function handleShare(e) {
    showMessage('Función de compartir en desarrollo', 'success');
}

function downloadAPK() {
    console.log('Download APK button clicked');
    showMessage('Preparando descarga de APK...', 'success');
    
    try {
        // Create a web app bundle instead of fake APK
        const webAppContent = createWebAppBundle();
        downloadFile(webAppContent, 'mentes-brillantes-webapp.html', 'text/html');
        
        // Create Android installation package info
        const androidPackage = createAndroidPackageInfo();
        downloadFile(androidPackage, 'mentes-brillantes-android.json', 'application/json');
        
        // Also create installation instructions
        setTimeout(() => {
            const instructionsContent = createInstallInstructions();
            downloadFile(instructionsContent, 'INSTRUCCIONES_INSTALACION.txt', 'text/plain');
        }, 500);
        
        showMessage('¡Archivos de instalación descargados exitosamente!', 'success');
    } catch (error) {
        console.error('Download error:', error);
        showMessage('Error en la descarga: ' + error.message, 'error');
    }
}

// Create web app bundle
function createWebAppBundle() {
    const currentHTML = document.documentElement.outerHTML;
    
    const webAppHTML = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mentes Brillantes - Plataforma Educativa</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <meta name="theme-color" content="#059669">
    <link rel="manifest" href="data:application/json;base64,${btoa(JSON.stringify({
        name: "Mentes Brillantes",
        short_name: "Mentes Brillantes",
        start_url: "./",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#059669"
    }))}">
    <style>
        body { font-family: system-ui, -apple-system, sans-serif; }
        .bg-emerald-600 { background-color: #059669; }
        .hover\\:bg-emerald-700:hover { background-color: #047857; }
    </style>
</head>
<body>
    <div class="min-h-screen bg-gradient-to-br from-emerald-400 to-emerald-600">
        <div class="container mx-auto px-4 py-8">
            <div class="text-center text-white mb-8">
                <h1 class="text-4xl font-bold mb-4">Mentes Brillantes</h1>
                <p class="text-xl">"Donde el juego enseña y el futuro empieza"</p>
                <p class="mt-4">Plataforma educativa del Colegio Conamir Rosaspata</p>
                <p class="mt-2">Juegos guardados: ${games.length}</p>
            </div>
            <div class="text-center">
                <p class="text-white mb-4">Para acceder a la aplicación completa:</p>
                <a href="${window.location.origin}" 
                   class="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Abrir Mentes Brillantes
                </a>
            </div>
        </div>
    </div>
</body>
</html>`;
    
    return webAppHTML;
}

// Create Android package info
function createAndroidPackageInfo() {
    const packageInfo = {
        app_name: "Mentes Brillantes",
        package_name: "com.mentesbrillantes.webapp",
        version: "1.0.0",
        version_code: 1,
        description: "Plataforma educativa del Colegio Conamir Rosaspata",
        url: window.location.href,
        installation_type: "PWA",
        games_count: games.length,
        created: new Date().toISOString(),
        instructions: {
            android: "Abre Chrome → Ve a la URL → Menú → 'Instalar aplicación'",
            ios: "Abre Safari → Ve a la URL → Compartir → 'Añadir a pantalla de inicio'",
            desktop: "Abre navegador → Ve a la URL → Busca icono de instalación"
        }
    };
    
    return JSON.stringify(packageInfo, null, 2);
}

// Create installation instructions
function createInstallInstructions() {
    return `INSTRUCCIONES DE INSTALACIÓN - MENTES BRILLANTES
==================================================

¡Gracias por descargar Mentes Brillantes!

ARCHIVOS DESCARGADOS:
- mentes-brillantes-webapp.html (Aplicación web)
- mentes-brillantes-android.json (Información del paquete)
- INSTRUCCIONES_INSTALACION.txt (Este archivo)

PASOS PARA INSTALAR EN ANDROID:

MÉTODO 1 - INSTALACIÓN PWA (RECOMENDADO):
1. Abre Chrome en tu celular
2. Ve a: ${window.location.href}
3. Toca el menú (3 puntos) → "Instalar aplicación"
4. Confirma la instalación
5. ¡La app aparecerá en tu pantalla de inicio!

MÉTODO 2 - ARCHIVO HTML:
1. Abre el archivo "mentes-brillantes-webapp.html" en tu navegador
2. Haz clic en "Abrir Mentes Brillantes"
3. Sigue el MÉTODO 1 desde ahí

OTROS DISPOSITIVOS:

iOS (iPhone/iPad):
- Safari → Ve a la URL → Compartir → "Añadir a pantalla de inicio"

Computadora:
- Chrome/Edge → Ve a la URL → Busca icono de instalación en barra de direcciones

NOTA IMPORTANTE:
Los archivos descargados NO son un APK tradicional, sino una aplicación web 
progresiva (PWA) que funciona como una app nativa una vez instalada.

URL de la aplicación: ${window.location.href}
Fecha de descarga: ${new Date().toLocaleString('es-ES')}
Versión: 1.0.0

¡Disfruta aprendiendo con Mentes Brillantes!
`;
}

// Download file utility
function downloadFile(content, filename, mimeType) {
    try {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        
        link.href = url;
        link.download = filename;
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up
        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 100);
        
        console.log('File downloaded:', filename);
    } catch (error) {
        console.error('Download error:', error);
        throw error;
    }
}

function installAPK() {
    console.log('Install APK button clicked');
    const installBtn = document.getElementById('install-apk');
    
    if (deferredPrompt) {
        console.log('Using deferred prompt for APK installation');
        if (installBtn) {
            installBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Instalando APK...';
            installBtn.disabled = true;
        }
        
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            console.log('User choice:', choiceResult.outcome);
            if (choiceResult.outcome === 'accepted') {
                showMessage('¡APK instalado exitosamente!', 'success');
                if (installBtn) {
                    installBtn.innerHTML = '<i class="fas fa-check mr-2"></i>APK Instalado';
                    installBtn.disabled = true;
                    installBtn.classList.remove('bg-purple-600', 'hover:bg-purple-700');
                    installBtn.classList.add('bg-green-600');
                }
            } else {
                showMessage('Instalación de APK cancelada', 'error');
                if (installBtn) {
                    installBtn.innerHTML = '<i class="fas fa-mobile-alt mr-2 text-xl"></i>Instalar APK';
                    installBtn.disabled = false;
                }
            }
            deferredPrompt = null;
        }).catch(error => {
            console.error('Install APK error:', error);
            showMessage('Error en la instalación del APK', 'error');
            if (installBtn) {
                installBtn.innerHTML = '<i class="fas fa-mobile-alt mr-2 text-xl"></i>Instalar APK';
                installBtn.disabled = false;
            }
        });
    } else {
        console.log('No deferred prompt, showing APK install instructions');
        showAPKInstallInstructions();
    }
}

// Show APK install instructions
function showAPKInstallInstructions() {
    const userAgent = navigator.userAgent.toLowerCase();
    let instructions = '';
    
    if (userAgent.includes('android')) {
        instructions = 'Para instalar el APK: Descarga el archivo → Abre el archivo APK → Permite instalación de fuentes desconocidas → Instalar';
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
        instructions = 'Para instalar en iOS: Safari → Compartir → "Añadir a pantalla de inicio"';
    } else {
        instructions = 'Para instalar en computadora: Busca el icono de instalación en la barra de direcciones del navegador';
    }
    
    // Create modal with instructions
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 class="text-xl font-bold mb-4 text-gray-800">Instrucciones de Instalación APK</h3>
            <div class="mb-4">
                <i class="fab fa-android text-4xl text-emerald-600 mb-2"></i>
            </div>
            <p class="text-gray-600 mb-6">${instructions}</p>
            <div class="flex justify-end space-x-3">
                <button onclick="downloadAPK()" 
                        class="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                    Descargar APK
                </button>
                <button onclick="this.closest('.fixed').remove()" 
                        class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
                    Cerrar
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Remove modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function setupPWA() {
    console.log('PWA setup...');
}

// Delete game function
function deleteGame(gameId) {
    // Confirmar eliminación
    const gameToDelete = games.find(game => game.id === gameId);
    if (!gameToDelete) {
        showMessage('Juego no encontrado', 'error');
        return;
    }
    
    const confirmDelete = confirm(`¿Estás seguro de que quieres eliminar "${gameToDelete.title}"?`);
    if (!confirmDelete) {
        return;
    }
    
    // Eliminar del array
    games = games.filter(game => game.id !== gameId);
    filteredGames = filteredGames.filter(game => game.id !== gameId);
    
    // Actualizar localStorage
    localStorage.setItem('mentesbrillantes_games', JSON.stringify(games));
    
    // Actualizar display
    displayGames();
    
    showMessage(`Juego "${gameToDelete.title}" eliminado exitosamente`, 'success');
    console.log('Game deleted:', gameToDelete.title);
}

// Clear all games function
function clearAllGames() {
    const confirmClear = confirm('¿Estás seguro de que quieres eliminar TODOS los juegos? Esta acción no se puede deshacer.');
    if (!confirmClear) {
        return;
    }
    
    // Limpiar arrays
    games = [];
    filteredGames = [];
    
    // Limpiar localStorage
    localStorage.removeItem('mentesbrillantes_games');
    
    // Actualizar display
    displayGames();
    
    showMessage('Todos los juegos han sido eliminados', 'success');
    console.log('All games cleared');
}

// Make functions globally available
window.forceLoadGames = forceLoadGames;
window.displayGames = displayGames;
window.loadGamesNow = loadGamesNow;
window.deleteGame = deleteGame;
window.clearAllGames = clearAllGames;

// Add CSS for line clamp
const style = document.createElement('style');
style.textContent = `
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

console.log('Script loaded successfully');