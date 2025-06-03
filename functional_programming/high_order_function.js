// HOF adalah fungsi yang menerima fungsi lainnya sebagai argumen dan/atau mengembalikan sebuah fungsi lain. Umumnya, teknik HOF digunakan untuk berbagai hal berikut.

// Mengabstraksi fungsi aksi dari sebuah proses asynchronous (kita akan belajar asynchronous dalam modul selanjutnya) dalam bentuk callback.
// Membuat utility function, yaitu fungsi Array.map, Array.filter, Array.reduce, dan sebagainya.
// Menerapkan teknik matematika, seperti currying dan function composition.

function apply(operation, ...args) {
  // kita bisa menambahkan kode lain sebelum operation dijalankan.
  
  return operation(...args)
}

function sum(a, b, c) {
  return a + b + c;
}

function discount(disc, value) {
  return value - ((disc / 100) * value);
}

const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);

console.log('Product price:', productPrice); // Output: Product price: 400
console.log('With discount 25%:', withDiscount); // Output: With discount 25%: 300