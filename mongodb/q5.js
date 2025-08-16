//  aggregate basics

db.employees.aggregate([
    {$match: {salary: {$gt:3000}}},
    {$project: {_id:0, name:1, salary: 1}},
    {$sort: {name: 1}},
    {$limit: 1}
])

db.employees.updateMany({}, {$addToSet: {location: "LA"}})

db.employees.aggregate([
    {$project: {_id:0, name:1, location:1}},
    {$unwind: "$location"}
])

db.employees.aggregate({$project: {_id:0, empname: "$name"}})

db.employees.aggregate([
    {$project: {
        _id:0,
        name:1,
        salary:1,
        bonus: {$multiply: ["$salary", 2]}
    }}
])

db.employees.aggregate([{ $project: { name: 0 } }]);

db.employees.aggregate([
    {$group:{
        _id : "$department",
        total: {$sum: "$salary"}
    }}
])

db.employees.aggregate([
    {$group:{
        _id: null,
        total: { $sum: "$salary"}
    }}
])

