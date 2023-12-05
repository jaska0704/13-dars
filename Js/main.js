document.addEventListener("DOMContentLoaded", async () => {
  let form = document.querySelector("form");

  let { data: products } = await axios.get("http://fakestoreapi.com/products");
  let { data: carts } = await axios.get("http://fakestoreapi.com/carts");

  products.forEach(element => {
    
    // console.log(element.title);
  });


  form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    let username = form[0].value;
    let password = form[1].value;
    
   let { data: login} = await axios.post("https://fakestoreapi.com/auth/login", {
      username,
      password,  
    });

    window.location.replace("/korzina.html");
  });
});

