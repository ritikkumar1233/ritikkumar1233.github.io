//  Functions of mongodb

db.employees.updateOne(
    {email: "amay@email.com"},
    {$set: {salary: 5000}}
)

// Not all employees salary updated only first employee due to updateOne
db.employees.updateOne(
    {department: "IT"},
    {$set: {salary: 3221}}
)

// All employees salary updated whose department = "IT" due to updateMany
db.employees.updateMany(
    {department: "IT"},
    {$set: {salary: 3221}}
)

// $set : {points: 1} Adds a new field points with value 1 to every document, or updates it to 1 if it already exists.
db.employees.updateMany(
    {},
    {$set: {points: 1}}
)

// $inc = Increments the value of the points field by 1. If points does not exist, MongoDB will create it and set it to 1.
db.employees.updateMany(
    {department: "IT"},
    {$inc: {points: 1}}
)


// Filter: Searches for a document where email is "krish@gmail.com".

// Update:
// If the document exists: It updates the name, department, and salary fields.

//  upsert: true
// If it does not exist: MongoDB will insert a new document
db.employees.updateOne(
    {email: "krish@email.com"},
    {$set: {name: "Krish", department: "HR", salary: 2100}},
    {upsert: true}
)

// To delete only one data
db.employees.deleteOne({email: "krish@email.com"})

// to delete many data
db.employees.deletemany({department: "IT"});

// sort in ascending order
db.employees.find().sort({name:1})

// sort in descending order
db.employees.find().sort({name: -1})

db.employees.find().sort({name: -1}).limit(1)
db.employees.find().sort({name: -1}).limit(3)

// Only for display name: 'Shivam' changes to Empname: 'Shivam'
db.employees.find({}, {_id:0, empName: "$name"})

// $rename = It renames point field to score
db.employees.updateMany({}, {$rename: {points: "score"}})

//  To remove fieldset
db.employees.updateMany(
    {},
    {$unset: {score: ""}}
)

db.employees.find(
    {},
    {_id: 0, name: 1, location: 1}
)

// $push adds a value to an array field. So this will add 5 to the points array in every document.
db.employees.updateMany(
    {},
    {$push: {points: 5}}
)

db.employees.updateMany(
    {},
    {$push: {points: 3}}
)

db.employees.updateMany(
    {department: "IT"},
    {$push: {points: 7}}
)

// Targets all documents in the employees collection.
// Modifies the points array by: Removing any value that is greater than 3.
db.employees.updateMany(
    {},
    {$pull: {points: {$gt:3}}}
)


// $addToSet: Adds a value to an array only if it doesn’t already exist (prevents duplicates).
db.employees.updateMany(
    {},
    {$addToSet: {location: "LA"}}
)

// $pop is used to remove one element from an array.
// The value: 
// 1 → removes the last element of the array.
// -1 → removes the first element of the array.
db.employees.updateMany(
    {},
    {$pop: {location: 1}}
)