const homeService = {
    productSale: (sales, products) => {
        let array = []
        sales.forEach(sale => {
            products.map(product => { if (sale.product === product.id) { array.push({ name: product.description, sales: sale.count }) } })
        })
        return Promise.resolve(array);
    },
    serviceTopSale: (sales, services) => {
        let array = []
        sales.forEach(sale => {
            services.map(service => { if (sale.service === service.id) { array.push({ name: service.description, sales: sale.count }) } })
        })
        return Promise.resolve(array);
    },
    getAssistantSales: (sales, assistants) => {
        let array = []
        sales.forEach(sale => {
            assistants.map(assistant => { if (sale.assistant === assistant.id) { array.push({ name: `${assistant.name} ${assistant.surname}`, sales: sale.count }) } })
        })
        return Promise.resolve(array);
    },
    getShopSales: (sales, shops) => {
        let array = []
        sales.forEach(sale => {
            shops.map(shop => { if (sale.shop === shop.id) { array.push({ name: shop.name, sales: sale.count }) } })
        })
        return Promise.resolve(array);
    },
    getBestAssistantSale: (sales, assistants) => {
        const { assistant, count } = sales;
        let array = [];
        assistants.forEach(item => { if (item.id === assistant) { array.push({ name: `${item.name} ${item.surname}`, sales: count }) } })
        return Promise.resolve(array);
    },
    getWorstAssistantSale: (sales, assistants) => {
        const { assistant, count } = sales;
        let array = [];
        assistants.forEach(item => { if (item.id === assistant) { array.push({ name: `${item.name} ${item.surname}`, sales: count }) } })
        return Promise.resolve(array)
    }
}

export default homeService;