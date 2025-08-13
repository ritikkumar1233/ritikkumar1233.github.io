//  filter or condition in mongodb

db.employees.find().skip(1);    // Skip first element
db.employees.find().limit(1);   // show only first element
db.employees.find().skip(1).limit(1);
db.employees.find().limit(1).skip(1);

db.employees.find({department: "IT"})
db.employees.find({department: "IT"}, {_id:0, name:1})

db.employees.find({department: {$eq: "IT"}}, {_id:0, name:1})

db.employees.find(
    {salary: {$gt: 2500}},
    {_id:0, name:1}
)

db.employees.find(
    {salary: {$gte: 2500}},
    {_id:0, name:1}
)

db.employees.find(
    {salary: {$lt: 2500}},
    {_id:0, name:1}
)

db.employees.find(
    {salary: {$lte: 2500}},
    {_id:0, name:1}
)

db.employees.find(
    {salary:{$lte: 3000}, department:"IT"},
    {_id:0, name:1, salary:1}
)

db.employees.find(
    {$or: [{salary: {$gt: 2500}}, {department: "IT"}]},
    {_id:0, name:1}
)

db.employees.find(
    {$and: [{salary: {$gt: 2500}}, {department: "IT"}]},
    {_id:0, name:1}
)

db.employees.find(
    {salary: {$ne: 2500}},
    {_id:0, name:1}
)

db.employees.insertMany([
    {
        name: "Amay",
        email : "amay@email.com",
        department: "HR",
        salary: 2000,
        location : ["NY", "TX"],
        date : Date()
    },
    {
        name: "Rafeal",
        email : "rafeal@email.com",
        department: "admin",
        salary: 1500,
        location : ["OH", "TX"],
        date : Date()   
    }
])

db.employees.find(
    {department: {$in: ["admin", "HR"]}},
    {_id:0, name:1}
)

db.employees.find(
    {department: {$nin: ["admin", "HR"]}},
    {_id:0, name:1}
)