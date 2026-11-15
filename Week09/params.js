const products = [
  {id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300",},
  {id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300", },
  {id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300", },
];

function getParams(parameterName) {
  const currentURL = window.location.search;
  const urlParameters = new URLSearchParams(currentURL);
  return urlParameters.get(parameterName);
}

function productTemplate(product) {
  return `
    <article class="product">
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
      </div>
    </article>
  `;
}

function getProductDetails() {
  const productID = getParams("id");
  const product = products.find(function (item) {
    return item.id === Number(productID);
  });
  const productDetails = document.querySelector("#product-details");
  if (product) {
    productDetails.innerHTML = productTemplate(product);
  } else {
    productDetails.innerHTML = `
      <p>Sorry, that product could not be found.</p>
      <a href="index.html">Return to the products</a>
    `;
  }
}

getProductDetails();