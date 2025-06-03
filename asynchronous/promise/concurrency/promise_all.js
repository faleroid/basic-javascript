// Kita tahu bahwa dua tugas pertama didelegasikan ke mesin. Lalu, kita bisa mengerjakan tugas ketiga sembari dua pekerjaan tersebut dalam proses penyelesaian.
// Ini bisa kita sebut dengan proses concurrency karena banyak proses asynchronous berjalan secara bersamaan.

// Untuk melakukan hal ini, objek Promise memiliki beberapa static method, seperti Promise.all dan Promise.allSettled.
//  Keduanya memiliki kemiripan. Hal yang membedakan adalah Promise.all akan memasuki kondisi rejected jika salah satu Promise saja terjadi kegagalan.
//  Namun, ini tidak berlaku dengan Promise.allSettled.

const promise1 = new Promise((resolve) => setTimeout(() => resolve(console.log("resolve pertama berhasil dijalankan")), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups!')), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log('Success');
    console.log(values);
  })
  .catch((error) => {
    console.log('Failed');
    console.log(error.message);
  });
