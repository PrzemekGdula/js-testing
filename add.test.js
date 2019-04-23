
const add = (a, b) => a + b;

if (add(2, 5) !== 7 || add(2, 10) !== 12 || add(0, 0) !== 0) {
    throw new Error('Błąd dodawania.')
}
console.log('Podstawowe dodawanie liczb całkowitych działa')

if (add('2', '5') !== 7 || add('45', '125') !== 170) {
    throw new Error('Błąd dodawania liczb w stringach')
}
console.log('Dodawanie liczb w stringach działa')

if (add('ala', 'ma kota') !== 0) {
    throw new Error('Funkcja powinna zwracać 0 dla stringów z literami')
}
console.log('Funkcja zwraca 0 dla literek')

// if (add(0.2, 0.4) !== 0.6) {
    // throw new Error('Błąd dodawania liczb zmiennoprzecinkowych')
// }
// console.log('Dodawanie liczb zmiennoprzecinkowych działa')