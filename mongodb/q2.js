db.employees.insertOne({
    name: "Jhon Smith",
    email: "jhon@gmail.com",
    department: "IT",
    salary: 1456,
    location: ['FL', 'OH'],
    date: Date()
})

db.employees.insertMany([
    {name: "Shivam", age: 21},
    {name: "Rahul", age: 20},
]);

db.employees.insertMany([
    {
        name: "Mike Joseph",
        email: "mike@gmail.com",
        department: "IT",
        salary: 2456,
        location: ["FL", "TX"],
        date: Date()
    },
    {
        name: "Cathy G",
        email: "cathy@gmail.com",
        department: "IT",
        salary: 3456,
        location: ["AZ", "TX"],
        date: Date()
    }
]);


db.employees.find()
db.employees.find({}, {name:1})
db.employees.find({}, {_id:0, name:1})
db.employees.find({}, {_id:0, name:1, email:1})
db.employees.find({}, {_id:false, name:true, email:true})

// db.users.drpo()     -   to delete
