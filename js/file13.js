//  spread operators

let marks = {
    maths : 95,
};

marks  = {...marks, science: 83}
console.log(marks);

let students = ["Rahul", "Shivam", "Abhay"];
students = [...students, "Shahid"]
console.log(students);