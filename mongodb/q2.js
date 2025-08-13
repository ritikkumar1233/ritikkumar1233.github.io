//  Basics of mongo

db.employees.insertOne({
    name : "John Smith",
    email : "john@email.com",
    department : "IT",
    salary : 2300,
    location : ["FL", "OH"],
    date : Date()
})


db.employees.insertMany([
    {
        name : "Mike Joseph",
        email : "mike@email.com",
        department : "IT",
        salary : 3456,
        location : ["FL", "TX"],
        date : Date()
    },
    {
        name : "Cathy G",
        email : "cathy@email.com",
        department : "IT",
        salary : 2900,
        location : ["AZ", "TX"],
        date : Date()
    }
])

db.employees.find();

db.employees.find({}, {name:1});
db.employees.find({}, {_id:0, name:1})
db.employees.find({}, {_id:0, name:1, email:1})
db.employees.find({}, {_id:false, name:true, email:true})

db.employees.drop()
