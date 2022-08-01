const students = [
  {
    id: 1,
    f_name: "Alex",
    l_name: "B",
    gender: "M",
    married: false,
    age: 17,
    paid: 250,
    courses: ["JavaScript", "React"],
  },
  {
    id: 2,
    f_name: "Ibrahim",
    l_name: "M",
    gender: "M",
    married: true,
    age: 32,
    paid: 150,
    courses: ["JavaScript"],
  },
  {
    id: 3,
    f_name: "Rubi",
    l_name: "S",
    gender: "F",
    married: false,
    age: 27,
    paid: 350,
    courses: ["Blogging", "React", "UX"],
  },
  {
    id: 4,
    f_name: "Zack",
    l_name: "F",
    gender: "M",
    married: true,
    age: 36,
    paid: 250,
    courses: ["Git", "React", "Branding"],
  },
];

//!forEach
// students.forEach((student, i, studentsArray) => {
//   console.log(student.f_name, studentsArray);
// });

//!map
// const fullnames = students.map(
//   (student) => student.f_name + " " + student.l_name
// );
// console.log(fullnames);

//!includes
const arr = ["Marijus", "Faustas", "Rimantas"];
// console.log(arr.includes("Petras"));
// console.log(arr.includes("Faustas"));
// console.log(arr.includes("Marijus", 1));

//!filter
const femaleStudents = students.filter((student) => student.gender === "F");
// console.log(femaleStudents);

//!reduce
const scholarshipsInTotal = students.reduce(
  (total, student) => total + student.paid,
  0
);
// console.log(scholarshipsInTotal);

//!some
const hasUnderagedStudents = students.some((student) => {
  return student.age < 18;
});
// console.log(hasUnderagedStudents);

//!every
const hasSelectedAtLeast2Courses = students.every(handleEvery);
// console.log(hasSelectedAtLeast2Courses);

function handleEvery(student) {
  return student.courses.length >= 2;
}

//!sort

// console.log(arr.sort());
const numbersArray = [10, 1000, 20, 50, 2, 3];

numbersArray.sort((a, b) => {
  return b - a;
});
// numbersArray.sort();
// console.log(numbersArray);

//!Array.from(arr)
// console.log(Array.from(arr[0]));

//!find
const firstStudent = students.find((student) => {
  return student.id === 3;
});

const firstStudentIndex = students.findIndex((student) => {
  return student.id === 3;
});

// console.log(firstStudentIndex);

//!Task eg 1
//sum arrays with numbers
const arr1 = [5, 9, 19];
const arr2 = [65, -56, 66, 5];

// console.log(
//   [...arr1, ...arr2].reduce((accumulator, current) => accumulator + current)
// );

//!Task eg 2
//sum up means of transport and calculate amount of occurencies
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const summedUp = data.reduce((total, current) => {
  if (total[current]) {
    total[current]++;
  } else {
    total[current] = 1;
  }
  return total;
}, {});

// console.log(summedUp);

//!Task eg 3
//sort people alphabetically by first name
const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

people.sort((a, b) => {
  const personAName = a.split(" ")[1];
  const personBName = b.split(" ")[1];
  return personAName < personBName ? -1 : 1;
});

console.log(people);
