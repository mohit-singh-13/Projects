class Product
{
    constructor(id, name, description, price, url)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.url = url;

        this.isAddedToCart = false;
    }
}

export default Product;