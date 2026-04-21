const products = [
  { name: "Laptop", price: 50000, image: "download.jpg" },
  { name: "Phone", price: 20000, image: "phone.jpg" },
  { name: "Headphones", price: 2000, image: "images.jpg" },
  { name: "Watch", price: 3000, image: "watch).jpg" },
  {  name: "painting", price: 30, image: "pexels-pixabay-36717.jpg"},
  { name: "chair", price: 3000, image: "OIP.webp" },
  { name: "bike", price: 3000, image: "11-h-d-duesseldorf-mad-boy-15.-oktober-2020-foto-_c_-ben-ott-leica-sl2.avif" },
  {  name: "cosmetic", price: 30, image: "cosmetic.webp"},
  {  name: "perfume", price: 30, image: "perfume.webp"},
  {  name: "utensils", price: 30, image: "utensils.webp"},
   { name: "colourkit", price: 304895488958, image:  "OIP (1).webp"},
   { name: "crystall_ball", price: 304895488958, image:  "crystall_ball.webp"}
];

function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}" />amazon_product
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
     `;
  });
}

function searchProducts() {
  const value = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
}

displayProducts(products);