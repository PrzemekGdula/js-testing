export const sumOrderPrice = (order) => order.reduce(
    (priceSum, product, i, arr) => {
        if (product.name === 'shipment' && (sumOrderPrice(arr.slice(i + 1, arr.length)) + priceSum) > 100) {
            return priceSum
        }
        return priceSum + product.price * (product.quantity || 1)
    }, 0);