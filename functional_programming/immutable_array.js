// IIMUTIABLE ARRAY METHODS

//array map
const oldArray = ['Harry', 'Ron', 'Jeff', 'Thomas']
const newArray = oldArray.map((name) => `${name}!`);

console.log(newArray); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
console.log(oldArray); // Output: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ]

//------------------------------------------------------------------------------------------------------

//array filter
// penggunaan filter untuk menyaring array dari objek siswa yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat.
const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

/**
 * Output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 * 
 */

//------------------------------------------------------------------------------------------------------

//array reduce
// Inilah contoh penggunaan ketika kita ingin menjumlahkan total nilai siswa seperti di bawah ini.
const students1 = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const totalScore = students1.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore); // Output: 313