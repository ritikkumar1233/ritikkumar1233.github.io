db.employees.find()

db.employees.find().skip(1)     // It skip first data
db.employees.find().limit(1)    // It show only first data
db.employees.find().skip(1).limit(1)
db.employees.find().limit(1).skip(1)
db.employees.find({department: "IT"})
db.employees.find({department: "IT"}, 
    {_id:0, name:1}
)
db.employees.find(
    {department: "IT"},
    {_id:0, name:1, salary:1}
)

// $eq = Equal to
db.employees.find(
    {department:{$eq: "IT"}},
    {_id:0, name:1, salary:1}
)

// $gt = Greater than
db.employees.find(
    {salary:{$gt: 3000}},
    {_id:0, name:1, salary:1}
)

// $gte = greater than and equal to
db.employees.find(
    {salary:{$gte: 3000}},
    {_id:0, name:1, salary:1}
)

// $lt = Less than
db.employees.find(
    {salary:{$lt: 3000}},
    {_id:0, name:1, salary:1}
)

// $lte = Less than and equal to
db.employees.find(
    {salary:{$lte: 3000}},
    {_id:0, name:1, salary:1}
)

db.employees.find(
    {salary:{$lte: 3000}, department:"IT"},
    {_id:0, name:1, salary:1}
)

// $or = or operator
db.employees.find(
    {$or: [{salary:{$lte: 3000}}, {department:"IT"}]},
    {_id:0, name:1, salary:1}
)

 // $and = and operator
db.employees.find(
    {$and: [{salary:{$lte: 3000}}, {department:"IT"}]},
    {_id:0, name:1, salary:1}
)

// $ne = Not equal
db.employees.find({salary: {$ne: 2456}})