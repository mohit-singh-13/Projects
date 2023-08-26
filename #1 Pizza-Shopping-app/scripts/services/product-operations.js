import makeNetworkCall from "./api-client.js";
import Product from "../models/product.js";

const productOperations = {
    pizza:[],

    search(pizzaId)
    {
        const product = this.pizza.find(currentProduct => currentProduct.id == pizzaId);
        console.log("Product found :", product);
        product.isAddedToCart = true;
        console.log("Array is :", this.pizza);
    },

    async loadProducts()
    {
        const products = await makeNetworkCall();
        const productArray = products['Vegetarian'];

        console.log("products :", products);
        console.log("productArray :", productArray);

        const pizzaArray = productArray.map(pizza => {
            const currentPizza = new Product(pizza.id, pizza.name, pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url);
            return currentPizza;
        });
        
        console.log("pizzaArray :", pizzaArray);
        this.pizza = pizzaArray;
        return pizzaArray;
    },

    getProductsInCart()
    {
        const productInBasket = this.pizza.filter(product => product.isAddedToCart)
        return productInBasket;
    },

    totalAmount()
    {
        const newPizza = this.pizza.filter(pizza => pizza.isAddedToCart);
        console.log("new Pizza :", newPizza);

        let totalAmount = 0;
        newPizza.forEach(pizza => totalAmount = totalAmount + parseFloat(pizza.price));
        console.log("total :", totalAmount);
        return totalAmount;
    }
}

export default productOperations;