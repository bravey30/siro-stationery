// Simulated product data
const products = [
    { id: 1, category: 'Pens', name: 'Ballpoint Pen', description: 'Smooth writing experience', image: 'pen1.jpg' },
    { id: 2, category: 'Notebooks', name: 'Spiral Notebook', description: '80 sheets, college-ruled', image: 'notebook1.jpg' },
    // Add more product entries as needed
];

// Function to display products
function displayProducts() {
    const productsSection = document.getElementById('products');

    // Iterate through products and create HTML elements
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const image = document.createElement('img');
        image.src = `images/${product.image}`;
        image.alt = product.name;

        const details = document.createElement('div');
        details.innerHTML = `<h3>${product.name}</h3>
                             <p>${product.description}</p>
                             <p>Category: ${product.category}</p>`;

        productDiv.appendChild(image);
        productDiv.appendChild(details);
        productsSection.appendChild(productDiv);
    });
}

// Call the function to display products when the page loads
window.onload = displayProducts;
