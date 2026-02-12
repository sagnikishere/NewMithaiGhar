// Product Data Array
const products = [
    {
        id: 1,
        name: "Chocolate Truffle",
        category: "designer", // Matches data-filter in HTML
        rating: 4.8,
        price: "",
        unit: "",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "Veg Momos (Steam)",
        category: "momos",
        rating: 4.9,
        price: "",
        unit: "",
        image: "https://images.unsplash.com/photo-1626776876729-bab4306261ca?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Khir Malai",
        category: "traditional",
        rating: 5.0,
        price: "",
        unit: "",
        image: "https://images.unsplash.com/photo-1517260739337-6799d2ff1fdb?auto=format&fit=crop&w=500&q=80" // Sweet image
    },
    {
        id: 4,
        name: "Raj Kachori",
        category: "chat",
        rating: 4.7,
        price: "",
        unit: "",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80"
    },
    // Duplicating items to simulate more products like the screenshot
    {
        id: 5,
        name: "Black Forest Cake",
        category: "designer",
        rating: 4.5,
        price: "",
        unit: "",
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "Paneer Momos",
        category: "momos",
        rating: 4.8,
        price: "",
        unit: "",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        name: "Rasgulla",
        category: "traditional",
        rating: 4.9,
        price: "",
        unit: "",
        image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        name: "Dahi Puri",
        category: "chat",
        rating: 4.6,
        price: "",
        unit: "",
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=500&q=80"
    }
];

// DOM Elements
const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.cat-card');

// Function to Render Products
function renderProducts(filterCategory = 'all') {
    productGrid.innerHTML = ''; // Clear existing

    // Filter logic
    const filteredProducts = filterCategory === 'all' 
        ? products 
        : products.filter(product => product.category === filterCategory);

    // Fade animation setup
    productGrid.style.opacity = '0';
    
    setTimeout(() => {
        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            
            card.innerHTML = `
                <div class="wishlist-btn" onclick="toggleWishlist(this)">
                    <i class="fas fa-heart"></i>
                </div>
                <div class="p-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="p-info">
                    <h4>${product.name}</h4>
                    <div class="rating">
                        <i class="fas fa-star"></i> ${product.rating}
                    </div>
                    <div class="p-action">
                        <span class="price">${product.price}${product.unit}</span>
                        <button class="order-btn">
                            Order <i class="fab fa-whatsapp"></i>
                        </button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
        
        // Fade in
        productGrid.style.transition = 'opacity 0.5s';
        productGrid.style.opacity = '1';
    }, 200);
}

// Event Listener for Filters
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active-filter'));
        // Add active class to clicked
        btn.classList.add('active-filter');
        
        // Get category
        const category = btn.getAttribute('data-filter');
        renderProducts(category);
    });
});

// Function for Wishlist Heart Toggle
function toggleWishlist(element) {
    // Toggle the 'active' class which handles the red color and animation in CSS
    element.classList.toggle('active');
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
});