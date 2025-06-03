// Hal lain yang umum dilakukan dengan HOF adalah membuat fungsi yang menerapkan teknik currying.
// Dengan teknik currying, sebuah fungsi biasanya tidak mengambil semua argumen secara langsung.
// Ia mengambil satu argumen dulu, lalu mengembalikan sebuah fungsi baru yang menerima argumen kedua,
//  begitu seterusnya hingga seluruh argumen dimanfaatkan dan melakukan operasi secara utuh.

function adjectivfy(adjective) {
  return function (noun) {
    return `${noun} ${adjective}.`;
  }
}

function multipleBy(x) {
  return function(y) {
    return x * y;
  }
}

const coolifier = adjectivfy('keren');
const funnifier = adjectivfy('seru');

const multipleByFive = multipleBy(5);

console.log(coolifier('Dicoding')); // Output: Dicoding keren.
console.log(funnifier('JavaScript')); // Output: JavaScript seru.
console.log(multipleByFive(7)); // Output: 35
console.log(multipleByFive(10)); // Output: 50