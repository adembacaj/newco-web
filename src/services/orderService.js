/*
    This is a service where we calculate and compare arrays which comes from Order screen, and then we return an array with other data.
*/
const orderService = {
    expandOrders: (orders, customers, shops, assistants, products, services) => {
        let array = [];
        let ordersArray = [];
        orders.forEach(order => {
            array = order;
            customers.map(item => { if (order.customer === item.id) { array.customer = item } });
            shops.map(item => { if (order.shop === item.id) { array.shop = item } });
            assistants.map(item => { if (order.assistant === item.id) { array.assistant = item } });
            products.map(item => { if (order.product === item.id) { array.product = item } });
            services.map(item => { if (order.service === item.id) { array.service = item } });
            ordersArray.push(array)
        })
        return ordersArray;
    }
}

export default orderService;