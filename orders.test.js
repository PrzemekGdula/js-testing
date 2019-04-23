const sumOrderPrice = (order) => order.reduce(
    (priceSum, product, i, arr) => {
        if (product.name === 'shipment' && priceSum > 100) {
            return priceSum
        }
        return priceSum + product.price * (product.quantity || 1)
    }, 0);

const testOrder1 = [
    { name: 'Żwirek dla kota', price: 100 },
    { name: 'Sok pomarańczowy', price: 4 }
]
if (sumOrderPrice(testOrder1) !== 104) {
    throw new Error('Simple order sum not working')
}
console.log('---\nZamówienie bez przesyłki i bez ilości produktów działa\n---\n\n')

const testOrder2 = [
    { name: 'Żwirek dla kota', price: 100, quantity: 2 },
    { name: 'Sok pomarańczowy', price: 4, quantity: 3 }
]

if (sumOrderPrice(testOrder2) !== 212) {
    throw new Error('Order with quantity not working')
}
console.log('---\nZamówienie bez przesyłki z ilością produktów działa\n---\n\n')

const testOrder3 = [
    { name: 'Żwirek dla kota', price: 100 },
    { name: 'Sok pomarańczowy', price: 4, quantity: 3 }
]

if (sumOrderPrice(testOrder3) !== 112) {
    throw new Error('Order with mixed quantity values not working')
}
console.log('---\nZamówienie bez przesyłki z ilością produktów i bez ilości produktów działa\n---\n\n')

const testOrder4 = [
    { name: 'Żwirek dla kota', price: 100 },
    { name: 'Sok pomarańczowy', price: 4, quantity: 3 },
    { name: 'shipment', price: 120 }
]
if (sumOrderPrice(testOrder4) !== 112) {
    throw new Error('Order with shimpent and value above 100 has free shipment')
}
console.log('---\nZamówienie z przesyłką za powyzej 100 ma darmową przesyłkę\n---\n\n')

const testOrder5 = [
    { name: 'Sok pomarańczowy', price: 4, quantity: 3 },
    { name: 'shipment', price: 120 }
]
if (sumOrderPrice(testOrder5) !== 132) {
    throw new Error('Order with shimpent and value below 100 has paid shipment')
}
console.log('---\nZamówienie z przesyłką za ponizej 100 ma płatną przesyłkę\n---\n\n')

const testOrder6 = [
    { name: 'shipment', price: 120 },
    { name: 'Żwirek dla kota', price: 100 },
    { name: 'Sok pomarańczowy', price: 4, quantity: 3 }
]
if (sumOrderPrice(testOrder6) !== 112) {
    throw new Error('Order with shimpent and value above 100 has free shipment')
}
console.log('---\nZamówienie z przesyłką za powyzej 100 ma darmową przesyłkę bez względu na kolejność\n---\n\n')