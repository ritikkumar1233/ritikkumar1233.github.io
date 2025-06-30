// regex = Regular expression
db.employees.find({name:{$regex:"Cathy"}})
db.employees.find({name:{$regex:"a"}})

//  To ignore case sesitivity we can use $options
db.employees.find({name:{$regex:"cathy"}})
db.employees.find({name:{$regex:"cathy", $options:"i"}})

//  All the name begins with "c"
db.employees.find({name:{$regex:"^c", $options:"i"}})

//  All the name ends with "c"
db.employees.find({name:{$regex:"y$", $options:"i"}})

