let students = [
  {
    name: "Asha",
    marks: [80, 75, 90]
  },
  {
    name: "Ravi",
    marks: [60, 70, 65]
  },
  {
    name: "Meena",
    marks: [88, 92, 85]
  }
];

students.forEach(student => {
  let total = 0;

  student.marks.forEach(mark => {
    total += mark;
  });

  let average = total / student.marks.length;

  console.log(student.name + " Average:", average);
});