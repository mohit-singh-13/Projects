import Product from "../models/product.js";
import productOperations from "../services/product-operations.js";

async function loadPizza()
{
    const pizzas = await productOperations.loadProducts();
    console.log("Pizza :", pizzas);

    for (let pizza of pizzas)
    {
        preparePizzaCard(pizza);
    }
}
loadPizza();

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

function preparePizzaCard(pizza)
{
    const outputDiv = document.querySelector('#output');
    outputDiv.className = "row";
    const cardDiv = document.createElement('div');
    cardDiv.className = "card";
    outputDiv.appendChild(cardDiv);
    const img = document.createElement('img');
    img.className = "card-img-top";
    img.src = pizza.url;
    cardDiv.appendChild(img);
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = "card-body";
    cardDiv.appendChild(cardBodyDiv);
    const h5 = document.createElement('h5');
    h5.className = "card-title";
    h5.innerText = pizza.name;
    const pTag = document.createElement('p');
    pTag.className = "card-text";
    pTag.innerText = pizza.description;
    const button = document.createElement('button');
    button.className = "btn btn-success";
    button.innerText = "Add to Cart";
    cardBodyDiv.appendChild(h5);
    cardBodyDiv.appendChild(pTag);
    cardBodyDiv.appendChild(button);

    button.addEventListener('click', addToCart);
    button.setAttribute('product-id', pizza.id);
}

function addToCart()
{
  console.log("Add to cart called.", this);
  const currenButton = this;
  const pizzaId = currenButton.getAttribute('product-id');
  console.log("Pizza ID is :", pizzaId);
  productOperations.search(pizzaId);
  printBasket();
  printTotal();
}

function printBasket()
{
  const cartProduct = productOperations.getProductsInCart();
  const basket = document.querySelector('#basket');
  basket.innerHTML = '';

  for (let product of cartProduct)
  {
    const li = document.createElement('li');
    li.innerText = `${product.name} - Rs. ${product.price}`;
    basket.appendChild(li);
  }
}

const h3 = document.createElement('h3');
h3.className = "h3";
function printTotal()
{
  const totalAmount = productOperations.totalAmount();

  const total = document.querySelector('#total');

  h3.innerText = `Total - ${totalAmount}`;

  total.appendChild(h3);
}