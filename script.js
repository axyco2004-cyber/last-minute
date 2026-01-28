// Navigation Handler
document.addEventListener('DOMContentLoaded', () => {
    const navBtns = document.querySelectorAll('.nav-btn');
    const offersView = document.getElementById('offersView');
    const matrixView = document.getElementById('matrixView');
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            
            // Update active button
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show appropriate view
            if (view === 'offers') {
                offersView.classList.add('active');
                matrixView.classList.remove('active');
            } else if (view === 'matrix') {
                offersView.classList.remove('active');
                matrixView.classList.add('active');
            }
        });
    });
});

// Last Minute Travel Offers Data
const travelOffers = [
    // TUI Offers
    {
        id: 1,
        provider: 'tui',
        destination: 'Mallorca',
        country: 'Spain',
        hotel: 'Hotel Playa Golf',
        rating: 4,
        duration: '7 nights',
        departure: '2026-01-18',
        departureFrom: 'Copenhagen',
        board: 'All Inclusive',
        currentPrice: 4995,
        originalPrice: 7995,
        discount: 38,
        icon: '🏝️',
        category: 'spain',
        image: 'https://images.unsplash.com/photo-1611060299344-deb2e0c73486?w=800',
        description: 'Beautiful beachfront resort with stunning Mediterranean views and world-class golf facilities'
    },
    {
        id: 2,
        provider: 'ving',
        destination: 'Rhodos',
        country: 'Greece',
        hotel: 'Mitsis Grand Hotel',
        rating: 5,
        duration: '7 nights',
        departure: '2026-01-20',
        departureFrom: 'Copenhagen',
        board: 'Half Board',
        currentPrice: 5495,
        originalPrice: 8995,
        discount: 39,
        icon: '🏛️',
        category: 'greece',
        image: 'https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=800',
        description: 'Luxury 5-star hotel in historic Rhodes with private beach and ancient ruins nearby'
    },
    {
        id: 3,
        provider: 'apollo',
        destination: 'Antalya',
        country: 'Turkey',
        hotel: 'Royal Alhambra Palace',
        rating: 5,
        duration: '7 nights',
        departure: '2026-01-22',
        departureFrom: 'Copenhagen',
        board: 'All Inclusive',
        currentPrice: 4295,
        originalPrice: 6995,
        discount: 39,
        icon: '🕌',
        category: 'turkey',
        image: 'https://images.unsplash.com/photo-1577003833154-a7e05e0f39c0?w=800',
        description: 'Magnificent palace-style resort with ultra all-inclusive service on the Turkish Riviera'
    },
    {
        id: 4,
        provider: 'tui',
        destination: 'Gran Canaria',
        country: 'Spain',
        hotel: 'Bohemia Suites & Spa',
        rating: 5,
        duration: '7 nights',
        departure: '2026-01-19',
        departureFrom: 'Copenhagen',
        board: 'Breakfast',
        currentPrice: 6495,
        originalPrice: 9995,
        discount: 35,
        icon: '🌴',
        category: 'canary-islands',
        image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800',
        description: 'Adults-only boutique hotel with rooftop pool and modern design in Playa del Ingles'
    },
    {
        id: 5,
        provider: 'ving',
        destination: 'Phuket',
        country: 'Thailand',
        hotel: 'Kata Beach Resort',
        rating: 4,
        duration: '10 nights',
        departure: '2026-01-25',
        departureFrom: 'Copenhagen',
        board: 'Breakfast',
        currentPrice: 12995,
        originalPrice: 17995,
        discount: 28,
        icon: '🏖️',
        category: 'thailand',
        image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800',
        description: 'Tropical paradise resort on famous Kata Beach with crystal clear waters and Thai hospitality'
    },
    {
        id: 6,
        provider: 'apollo',
        destination: 'Hurghada',
        country: 'Egypt',
        hotel: 'Steigenberger Aqua Magic',
        rating: 5,
        duration: '7 nights',
        departure: '2026-01-21',
        departureFrom: 'Copenhagen',
        board: 'All Inclusive',
        currentPrice: 5995,
        originalPrice: 8995,
        discount: 33,
        icon: '🐪',
        category: 'egypt',
        image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800',
        description: 'Family-friendly resort with water park and Red Sea diving on Egypt\'s stunning coast'
    },
    {
        id: 7,
        provider: 'tui',
        destination: 'Kreta',
        country: 'Greece',
        hotel: 'Atlantica Belvedere Resort',
        rating: 4,
        duration: '7 nights',
        departure: '2026-01-23',
        departureFrom: 'Copenhagen',
        board: 'All Inclusive',
        currentPrice: 5795,
        originalPrice: 8795,
        discount: 34,
        icon: '🏺',
        category: 'greece',
        image: 'https://images.unsplash.com/photo-1585672840992-c1fa28a97cfc?w=800',
        description: 'Beachfront resort in Crete with traditional Greek architecture and Aegean Sea views'
    },
    {
        id: 8,
        provider: 'ving',
        destination: 'Tenerife',
        country: 'Spain',
        hotel: 'H10 Atlantic Sunset',
        rating: 4,
        duration: '7 nights',
        departure: '2026-01-24',
        departureFrom: 'Copenhagen',
        board: 'Half Board',
        currentPrice: 5295,
        originalPrice: 7995,
        discount: 34,
        icon: '🌋',
        category: 'canary-islands',
        image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=800',
        description: 'Modern hotel with ocean views near Mount Teide volcano and black sand beaches'
    },
    {
        id: 9,
        provider: 'apollo',
        destination: 'Kos',
        country: 'Greece',
        hotel: 'Neptuno Beach Resort',
        rating: 4,
        duration: '7 nights',
        departure: '2026-01-26',
        departureFrom: 'Copenhagen',
        board: 'All Inclusive',
        currentPrice: 4895,
        originalPrice: 7495,
        discount: 35,
        icon: '⛵',
        category: 'greece',
        image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800',
        description: 'All-inclusive beachfront resort on the beautiful Greek island of Kos'
    },
    {
        id: 10,
        provider: 'tui',
        destination: 'Punta Cana',
        country: 'Dominican Republic',
        hotel: 'Dreams Royal Beach',
        rating: 5,
        duration: '10 nights',
        departure: '2026-01-28',
        departureFrom: 'Copenhagen',
        board: 'All Inclusive',
        currentPrice: 18995,
        originalPrice: 25995,
        discount: 27,
        icon: '🥥',
        category: 'caribbean',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        description: 'Premium Caribbean resort with white sand beaches and turquoise waters in paradise'
    },
    {
        id: 11,
        provider: 'ving',
        destination: 'Alanya',
        country: 'Turkey',
        hotel: 'Delphin Palace',
        rating: 5,
        duration: '7 nights',
        departure: '2026-01-27',
        departureFrom: 'Copenhagen',
        board: 'Ultra All Inclusive',
        currentPrice: 4595,
        originalPrice: 6995,
        discount: 34,
        icon: '🏰',
        category: 'turkey',
        image: 'https://images.unsplash.com/photo-1564868863346-3b3b653f6b4c?w=800',
        description: 'Luxury ultra all-inclusive palace with private beach on the Mediterranean coast'
    },
    {
        id: 12,
        provider: 'apollo',
        destination: 'Barcelona',
        country: 'Spain',
        hotel: 'Hotel Arts Barcelona',
        rating: 5,
        duration: '4 nights',
        departure: '2026-01-17',
        departureFrom: 'Copenhagen',
        board: 'Breakfast',
        currentPrice: 6995,
        originalPrice: 9495,
        discount: 26,
        icon: '🏛️',
        category: 'spain',
        image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800',
        description: 'Iconic 5-star hotel near the beach with stunning city views and Michelin-star dining'
    },
    {
        id: 13,
        provider: 'tui',
        destination: 'Lanzarote',
        country: 'Spain',
        hotel: 'Princesa Yaiza Suite Hotel',
        rating: 5,
        duration: '7 nights',
        departure: '2026-01-29',
        departureFrom: 'Copenhagen',
        board: 'Half Board',
        currentPrice: 7295,
        originalPrice: 10995,
        discount: 34,
        icon: '🌊',
        category: 'canary-islands',
        image: 'https://images.unsplash.com/photo-1513415564515-763d91423bdd?w=800',
        description: 'Exclusive suite hotel in volcanic Lanzarote with award-winning spa and fine dining'
    },
    {
        id: 14,
        provider: 'ving',
        destination: 'Cyprus',
        country: 'Cyprus',
        hotel: 'Amathus Beach Hotel',
        rating: 5,
        duration: '7 nights',
        departure: '2026-01-30',
        departureFrom: 'Copenhagen',
        board: 'Half Board',
        currentPrice: 6795,
        originalPrice: 9995,
        discount: 32,
        icon: '🏖️',
        category: 'greece',
        image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800',
        description: 'Luxurious beachfront hotel with Roman-inspired architecture and Mediterranean cuisine'
    },
    {
        id: 15,
        provider: 'apollo',
        destination: 'Side',
        country: 'Turkey',
        hotel: 'Barut Hemera',
        rating: 5,
        duration: '7 nights',
        departure: '2026-01-31',
        departureFrom: 'Copenhagen',
        board: 'Ultra All Inclusive',
        currentPrice: 4995,
        originalPrice: 7495,
        discount: 33,
        icon: '🏺',
        category: 'turkey',
        image: 'https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=800',
        description: 'Ultra all-inclusive resort with ancient Roman ruins nearby and pristine Turkish beaches'
    },
    // Additional offers from other sources
    {
        id: 16,
        provider: 'tui',
        destination: 'Fuerteventura',
        country: 'Spain',
        hotel: 'Iberostar Playa Gaviotas',
        rating: 4,
        duration: '7 nights',
        departure: '2026-01-21',
        departureFrom: 'Copenhagen',
        board: 'All Inclusive',
        currentPrice: 5595,
        originalPrice: 8495,
        discount: 34,
        icon: '🏄',
        category: 'canary-islands'
    },
    {
        id: 17,
        provider: 'ving',
        destination: 'Santorini',
        country: 'Greece',
        hotel: 'Vedema Resort',
        rating: 5,
        duration: '5 nights',
        departure: '2026-01-25',
        departureFrom: 'Copenhagen',
        board: 'Breakfast',
        currentPrice: 8995,
        originalPrice: 12995,
        discount: 31,
        icon: '🏛️',
        category: 'greece'
    },
    {
        id: 18,
        provider: 'apollo',
        destination: 'Bodrum',
        country: 'Turkey',
        hotel: 'Mandarin Oriental',
        rating: 5,
        duration: '7 nights',
        departure: '2026-01-23',
        departureFrom: 'Copenhagen',
        board: 'Half Board',
        currentPrice: 7495,
        originalPrice: 10995,
        discount: 32,
        icon: '⛵',
        category: 'turkey'
    },
    {
        id: 19,
        provider: 'tui',
        destination: 'Marrakech',
        country: 'Morocco',
        hotel: 'La Mamounia',
        rating: 5,
        duration: '4 nights',
        departure: '2026-01-19',
        departureFrom: 'Copenhagen',
        board: 'Breakfast',
        currentPrice: 6295,
        originalPrice: 8995,
        discount: 30,
        icon: '🕌',
        category: 'morocco'
    },
    {
        id: 20,
        provider: 'ving',
        destination: 'Dubai',
        country: 'UAE',
        hotel: 'Atlantis The Palm',
        rating: 5,
        duration: '5 nights',
        departure: '2026-01-27',
        departureFrom: 'Copenhagen',
        board: 'Breakfast',
        currentPrice: 11995,
        originalPrice: 16995,
        discount: 29,
        icon: '🏙️',
        category: 'dubai'
    },
    {
        id: 21,
        provider: 'apollo',
        destination: 'Sharm el-Sheikh',
        country: 'Egypt',
        hotel: 'Four Seasons Resort',
        rating: 5,
        duration: '7 nights',
        departure: '2026-01-26',
        departureFrom: 'Copenhagen',
        board: 'All Inclusive',
        currentPrice: 6495,
        originalPrice: 9495,
        discount: 32,
        icon: '🏊',
        category: 'egypt'
    },
    {
        id: 22,
        provider: 'tui',
        destination: 'Dubrovnik',
        country: 'Croatia',
        hotel: 'Hotel Excelsior',
        rating: 5,
        duration: '4 nights',
        departure: '2026-01-20',
        departureFrom: 'Copenhagen',
        board: 'Half Board',
        currentPrice: 5795,
        originalPrice: 7995,
        discount: 28,
        icon: '🏰',
        category: 'croatia'
    },
    {
        id: 23,
        provider: 'ving',
        destination: 'Maldives',
        country: 'Maldives',
        hotel: 'Anantara Dhigu Resort',
        rating: 5,
        duration: '7 nights',
        departure: '2026-02-01',
        departureFrom: 'Copenhagen',
        board: 'All Inclusive',
        currentPrice: 22995,
        originalPrice: 32995,
        discount: 30,
        icon: '🏝️',
        category: 'maldives'
    },
    {
        id: 24,
        provider: 'apollo',
        destination: 'Corfu',
        country: 'Greece',
        hotel: 'Grecotel Corfu Imperial',
        rating: 5,
        duration: '7 nights',
        departure: '2026-01-28',
        departureFrom: 'Copenhagen',
        board: 'Half Board',
        currentPrice: 5395,
        originalPrice: 7995,
        discount: 33,
        icon: '🌊',
        category: 'greece'
    },
    {
        id: 25,
        provider: 'tui',
        destination: 'Lisbon',
        country: 'Portugal',
        hotel: 'Pestana Palace',
        rating: 5,
        duration: '4 nights',
        departure: '2026-01-18',
        departureFrom: 'Copenhagen',
        board: 'Breakfast',
        currentPrice: 4995,
        originalPrice: 6995,
        discount: 29,
        icon: '🏛️',
        category: 'portugal'
    }
];

// State
let filteredOffers = [...travelOffers];

// DOM Elements
let offersGrid;
let noResults;
let resultsCount;
let destinationFilter;
let providerFilter;
let sortFilter;
let searchInput;
let lastUpdated;

// Initialize
function init() {
    // Get DOM elements
    offersGrid = document.getElementById('offersGrid');
    noResults = document.getElementById('noResults');
    resultsCount = document.getElementById('resultsCount');
    destinationFilter = document.getElementById('destinationFilter');
    providerFilter = document.getElementById('providerFilter');
    sortFilter = document.getElementById('sortFilter');
    searchInput = document.getElementById('searchInput');
    lastUpdated = document.getElementById('lastUpdated');

    // Set last updated date with time
    const today = new Date();
    lastUpdated.textContent = today.toLocaleString('sv-SE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    // Setup event listeners
    destinationFilter.addEventListener('change', filterOffers);
    providerFilter.addEventListener('change', filterOffers);
    sortFilter.addEventListener('change', () => {
        sortOffers();
        renderOffers();
    });
    searchInput.addEventListener('input', filterOffers);

    // Initial render
    sortOffers();
    renderOffers();
}

// Filter offers
function filterOffers() {
    const destination = destinationFilter.value;
    const provider = providerFilter.value;
    const searchTerm = searchInput.value.toLowerCase().trim();

    filteredOffers = travelOffers.filter(offer => {
        const matchesDestination = destination === 'all' || offer.category === destination;
        const matchesProvider = provider === 'all' || offer.provider === provider;
        const matchesSearch = !searchTerm ||
            offer.destination.toLowerCase().includes(searchTerm) ||
            offer.hotel.toLowerCase().includes(searchTerm) ||
            offer.country.toLowerCase().includes(searchTerm);

        return matchesDestination && matchesProvider && matchesSearch;
    });

    sortOffers();
    renderOffers();
}

// Sort offers
function sortOffers() {
    const sortValue = sortFilter.value;

    filteredOffers.sort((a, b) => {
        switch (sortValue) {
            case 'price-low':
                return a.currentPrice - b.currentPrice;
            case 'price-high':
                return b.currentPrice - a.currentPrice;
            case 'discount':
                return b.discount - a.discount;
            case 'departure':
                return new Date(a.departure) - new Date(b.departure);
            default:
                return a.currentPrice - b.currentPrice;
        }
    });
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = date - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) return 'Departure Today';
    if (diffDays === 1) return 'Departure Tomorrow';
    if (diffDays <= 7) return `Departure in ${diffDays} days`;

    return date.toLocaleDateString('sv-SE', { day: 'numeric', month: 'short' });
}

// Create offer card
function createOfferCard(offer) {
    const stars = '⭐'.repeat(offer.rating);

    return `
        <div class="offer-card" onclick="window.open('https://www.${offer.provider}.se', '_blank')">
            <div class="offer-image">
                <span>${offer.icon}</span>
                <div class="discount-badge">-${offer.discount}%</div>
                <div class="departure-badge">${formatDate(offer.departure)}</div>
            </div>
            <div class="offer-content">
                <div class="provider-badge ${offer.provider}">${offer.provider.toUpperCase()}</div>
                <h3 class="offer-destination">${offer.destination}</h3>
                <p class="offer-hotel">${offer.hotel}</p>
                <div class="offer-details">
                    <div class="detail-item">${stars}</div>
                    <div class="detail-item">📅 ${offer.duration}</div>
                    <div class="detail-item">✈️ ${offer.departureFrom}</div>
                    <div class="detail-item">🍽️ ${offer.board}</div>
                </div>
                <div class="offer-footer">
                    <div class="price-section">
                        <div class="original-price">${offer.originalPrice.toLocaleString('sv-SE')} kr</div>
                        <div class="current-price">${offer.currentPrice.toLocaleString('sv-SE')} kr</div>
                        <div class="price-label">per person</div>
                    </div>
                    <button class="book-btn">Book Now</button>
                </div>
            </div>
        </div>
    `;
}

// Render offers
function renderOffers() {
    if (filteredOffers.length === 0) {
        offersGrid.style.display = 'none';
        noResults.style.display = 'block';
        resultsCount.textContent = 'No offers found';
    } else {
        offersGrid.style.display = 'grid';
        noResults.style.display = 'none';
        resultsCount.textContent = `${filteredOffers.length} Last Minute Deal${filteredOffers.length > 1 ? 's' : ''} Available`;
        offersGrid.innerHTML = filteredOffers.map(offer => createOfferCard(offer)).join('');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
