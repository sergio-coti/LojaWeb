document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: "Notebook Dell", price: 4500.00, quantity: 10, img: "https://via.placeholder.com/200?text=Notebook+Dell" },
        { name: "Mouse Gamer", price: 150.00, quantity: 30, img: "https://via.placeholder.com/200?text=Mouse+Gamer" },
        { name: "Teclado Mecânico", price: 300.00, quantity: 20, img: "https://via.placeholder.com/200?text=Teclado+Mecânico" },
        { name: "Monitor 24''", price: 800.00, quantity: 15, img: "https://via.placeholder.com/200?text=Monitor+24%27%27" },
        { name: "Cadeira Gamer", price: 1200.00, quantity: 8, img: "https://via.placeholder.com/200?text=Cadeira+Gamer" },
        { name: "HD Externo 1TB", price: 350.00, quantity: 25, img: "https://via.placeholder.com/200?text=HD+Externo+1TB" },
        { name: "SSD 512GB", price: 400.00, quantity: 18, img: "https://via.placeholder.com/200?text=SSD+512GB" },
        { name: "Placa de Vídeo", price: 2500.00, quantity: 5, img: "https://via.placeholder.com/200?text=Placa+de+Vídeo" },
        { name: "Fonte 600W", price: 300.00, quantity: 12, img: "https://via.placeholder.com/200?text=Fonte+600W" },
        { name: "Fone de Ouvido", price: 200.00, quantity: 22, img: "https://via.placeholder.com/200?text=Fone+de+Ouvido" },
        { name: "Smartphone Android", price: 2200.00, quantity: 10, img: "https://via.placeholder.com/200?text=Smartphone+Android" },
        { name: "Tablet 10''", price: 1500.00, quantity: 8, img: "https://via.placeholder.com/200?text=Tablet+10%27%27" }
    ];

    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        const productCard = `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card h-100 text-center">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Preço: R$ ${product.price.toFixed(2)}</p>
                        <p class="card-text">Quantidade: ${product.quantity}</p>
                        <button class="btn btn-buy">Comprar</button>
                    </div>
                </div>
            </div>
        `;
        productGrid.insertAdjacentHTML('beforeend', productCard);
    });
});
