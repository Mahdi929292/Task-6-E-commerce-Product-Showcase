const products = [
    { id: 1, name: 'Rolex Watch', price: 299.99, description: 'Description for product 1', image: 'https://media.istockphoto.com/id/531725359/photo/rolex-wrist-watch.jpg?s=612x612&w=0&k=20&c=OqHPFuSIlt6qKDKOHfTf8jtEWcknOHgaR5A6NkJg1kc=', reviews: ['Great product!', 'Really useful.'] },
    { id: 2, name: 'Baggy Jeans', price: 31.49, description: 'Description for product 2', image: 'https://www.instyle.com/thmb/PdvWgIILY56KoJ5MZYMokER7syQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/r13-lisa-baggy-high-waist-wide-leg-jeans-8f08d15489da4cb38d374204f06379ad.jpg', reviews: ['Not bad!', 'Could be better.'] },
    { id: 3, name: 'Fossil Watch', price: 159.99, description: 'Description for product 2', image: 'https://media.istockphoto.com/id/1180244659/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-black.jpg?s=612x612&w=0&k=20&c=yeFNfkQmcVV9BTUlZO8vY_oLOQgDAt23LfCbF1e3fbI=', reviews: ['Not bad!', 'Could be better.'] },
    { id: 4, name: 'Segalevi Watch', price: 249.99, description: 'Description for product 2', image: 'https://media.istockphoto.com/id/1180453576/photo/luxury-watch-isolated-on-white-background-with-clipping-path-gold-watch-women-watch-female.jpg?s=612x612&w=0&k=20&c=7156SpeDaeLHq7506ULnp6ZQrzbuoaHvOfnK6RT4L2A=', reviews: ['Not bad!', 'Could be better.'] },
    { id: 5, name: 'Mont Blanc Perfume', price: 79.49, description: 'Description for product 2', image: 'https://media.istockphoto.com/id/517570960/photo/men-perfume-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=pfuz4h1hyMujE9eaXu9ITH1HIcdxJCDT_IwDojwx-Nk=', reviews: ['Not bad!', 'Could be better.'] },
    { id: 6, name: 'Bright Crystal Perfume', price: 99.99, description: 'Description for product 2', image: 'https://img.freepik.com/premium-photo/bottle-female-perfume-isolated-white-background_185193-74537.jpg', reviews: ['Not bad!', 'Could be better.'] },
    { id: 7, name: 'Man Shirt', price: 14.99, description: 'Description for product 2', image: 'https://t4.ftcdn.net/jpg/01/96/47/19/360_F_196471946_wP89W4ijgtcss9SHXfINEkSZAecbkQRX.jpg', reviews: ['Not bad!', 'Could be better.'] },
    { id: 8, name: 'Woman Dress', price: 34.99, description: 'Description for product 2', image: 'https://www.shutterstock.com/image-photo/corporate-fashion-beauty-portrait-woman-600nw-2248840821.jpg', reviews: ['Not bad!', 'Could be better.'] },
    { id: 9, name: 'Nike Air Max Shoes', price: 159.99, description: 'Description for product 2', image: 'https://media.istockphoto.com/id/458981155/photo/nike-air-max-90-hyperfuse-trainer.jpg?s=612x612&w=0&k=20&c=1IeE9ri9zVMouwWAVsqI8HEmLYFMBoBam1-nnlgh_SI=', reviews: ['Not bad!', 'Could be better.'] },
    { id: 10, name: 'Adidas Ultraboost Shoes', price: 180.00, description: 'Description for product 2', image: 'https://www.travelandleisure.com/thmb/QZ_ZgVtD9C-KAAZTF14MWpPAI8o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/adidas-running-ultraboost-23-black-24d5c4e21e0042529e4f6ad5523a9db4.jpg', reviews: ['Not bad!', 'Could be better.'] },
];

function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <a href="item.html?id=${product.id}">View Details</a>
        `;
        productList.appendChild(productItem);
    });
}

function initProductListing() {
    displayProducts(products);

    document.getElementById('search').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        displayProducts(filteredProducts);
    });

    document.getElementById('sort').addEventListener('change', function() {
        const sortValue = this.value;
        let sortedProducts = [...products];

        if (sortValue === 'price-asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        displayProducts(sortedProducts);
    });
}

function initProductDetails() {
    const productId = new URLSearchParams(window.location.search).get('id');
    const product = products.find(p => p.id == productId);
    
    if (product) {
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = `$${product.price.toFixed(2)}`;
        document.getElementById('reviews').innerText = product.reviews.join('\n');
    } else {
        document.querySelector('.product-details').innerHTML = '<p>Product not found.</p>';
    }
}

if (document.getElementById('product-list')) {
    initProductListing();
} else if (document.querySelector('.product-details')) {
    initProductDetails();
}