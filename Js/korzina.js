document.addEventListener("DOMContentLoaded", async function () {
  const productsContainer = document.getElementById("products");
  const cartBtn = document.getElementById("cartBtn");
  const cartContainer = document.getElementById("cart");
  const cartItemsContainer = document.getElementById("cartItems");
  const totalPriceContainer = document.getElementById("totalPrice");

  let { data: products } = await axios.get("http://fakestoreapi.com/products");
  
    productsContainer.innerHTML = products.map((product) => `
        <div class="w-25 divv border border-info">
            <h5>${product.title}</h5>
            <img class="w-50" src="${product.image}" alt="${product.title}" />
            <p>Narxi: $${product.price}</p>
        </div>
            `
    ).join("");

    cartBtn.addEventListener("click", async function () {
       let { data: carts } = await axios.get("http://fakestoreapi.com/carts")
       cartItemsContainer.innerHTML = carts.map((cart) => `
           <li>${cart.product.title} - $${cart.product.price}</li>`).join("");

           
            const totalPrice = carts.reduce(
              (total, cart) => total + cart.product.price,
              0
            );
            totalPriceContainer.textContent = `Umumiy narx: $${totalPrice}`;

            cartContainer.classList.remove("hidden");
    });
 });