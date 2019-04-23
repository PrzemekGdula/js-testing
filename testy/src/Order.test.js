import { sumOrderPrice } from './Order'
let ultimateTestData = [];

beforeAll(() => {
    console.log(ultimateTestData)
    console.log('Przed testami dot. zamowien')
})

afterAll(() => {
    console.log(ultimateTestData)
    console.log('Po testach dot. zamowien')
})

describe('Testy dotyczące Zamówień', () => {

    afterAll(() => {
        console.log(ultimateTestData)
        ultimateTestData = []
        console.log('Po wszystkich testach')
    })

    beforeAll(() => {
        console.log(ultimateTestData)
        ultimateTestData = [{ test: 1, name: 'test' }]
        console.log('Przed testami zamówień')
    })

    beforeEach(() => {
        ultimateTestData.push({ test: 2, name: 'new test' })
    })

    test('Zamówienie bez przesyłki i bez ilości produktów działa', () => {
        console.log('pierwszy test zamowien', ultimateTestData)
        const testOrder1 = [
            { name: 'Żwirek dla kota', price: 100 },
            { name: 'Sok pomarańczowy', price: 4 }
        ]
        expect(sumOrderPrice(testOrder1)).toBe(104)
    })

    test('Zamówienie bez przesyłki i bez ilości produktów działa', () => {
        console.log('drugi test zamowien', ultimateTestData)
        const testOrder2 = [
            { name: 'Żwirek dla kota', price: 100, quantity: 2 },
            { name: 'Sok pomarańczowy', price: 4, quantity: 3 }
        ]
        expect(sumOrderPrice(testOrder2)).toBe(212)
    })

    test('Zamówienie bez przesyłki z ilością produktów i bez ilości produktów działa', () => {
        const testOrder3 = [
            { name: 'Żwirek dla kota', price: 100 },
            { name: 'Sok pomarańczowy', price: 4, quantity: 3 }
        ]
        expect(sumOrderPrice(testOrder3)).toBe(112)
    })

})