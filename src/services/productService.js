/*
    This is a service where we calculate and compare arrays which comes from Product screen, and then we return an array with other data.
*/
function expandProducts(products, services) {
    let newProducts = products;
    products.forEach((product, i) => {
        let newProduct = product;
        product.services.forEach((service, index) => services.map(item => { if (item.id === service) { newProduct.services[index] = item } }))
        newProducts[i] = newProduct;
    })
    return newProducts;
}

export default expandProducts;