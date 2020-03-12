function expandShops(shops, assistants) {
    let newShops = shops;
    shops.forEach((shop, i) => {
        let newShop = shop;
        shop.assistants.forEach((assistant, index) => assistants.map(item => { if (item.id === assistant) { newShop.assistants[index] = item } }))
        newShops[i] = newShop;
    })
    return newShops;
}

export default expandShops;