db.employees.insertMany([
    {
        name: "Amay",
        email: "amay@gmail.com",
        department: "HR",
        salary: 2000,
        location: ["NY", "TX"],
        date: Date()
    },
    {
        name: "Rafeal",
        email: "rafeal@gmail.com",
        department: "Admin",
        salary: 1500,
        location: ["OH", "TX"],
        date: Date()
    }
]);


db.employees.find({department: {$in:["Admin", "HR"]}})

// $nin = Not in
db.employees.find({department: {$nin:["Admin", "HR"]}})