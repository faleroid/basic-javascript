// Promise dapat terhindar dari callback hell dengan melakukan chaining method then.
// Jika merasa penanganan error setiap proses asinkron sama, kita bisa memanfaatkan method catch.
// Ini artinya seluruh kemungkinan error yang dapat terjadi pada setiap proses akan memasuki method tersebut.

// makeCoffee(order)
//   .then((value) => { /* Do your jobs... */ })
//   .then((value) => { /* Do your jobs... */ })
//   .then((value) => { /* Do your jobs... */ })
//   .then((value) => { /* Do your jobs... */ })
//   .then((value) => { /* Do your jobs... */ })
//   .then((value) => { /* Do your jobs... */ })
//   .catch((error) => console.log(error.message));

import { makeCoffee, sendCoffee } from './chaining_coffee.js';

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then((value) => {
    return sendCoffee(value); // <-- akan dilanjutkan ke then berikutnya.
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
    throw error;
  });