const add = (a, b) => (Number(a) && Number(b)) ? Number(a) + Number(b) : 0;
if (add(2, 5) !== 7
|| add(2,10) !== 12
|| add(0,0) !== 0) {
    throw new Error('Błąd dodawania.')
}
console.log('Podstawowe dodawanie liczb całkowitych działa')

if (add('2', '5') !== 7
|| add('45', '125') !== 170) {
    throw new Error('Błąd dodawania liczb w stringach')
}
console.log('Dodawanie liczb w stringach działa')

if (add('ala', 'ma kota') !== 0 || add('ala', 5) !== 0) {
    throw new Error('Funkcja powinna zwracać 0 dla stringów z literami')
}
console.log('Funkcja zwraca 0 dla literek')

// if (add(0.2, 0.4) !== 0.6 || add(0.1, 0.01) !== 0.11) {
    // throw new Error('Błąd dodawania liczb zmiennoprzecinkowych')
// }
// console.log('Dodawanie liczb zmiennoprzecinkowych działa')