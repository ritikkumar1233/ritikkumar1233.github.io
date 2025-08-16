//  Aggregate advance

db.posts.insertMany([
    {_id: "p1", post: "Post1"},
    {_id: "p2", post: "Post2"}
])

db.comments.insertMany([
    {_id: "c1", pid: "p1", comment: "Comment1"},
    {_id: "c2", pid: "p1", comment: "Comment2"},
    {_id: "c3", pid: "p2", comment: "Comment1"},
    {_id: "c4", pid: "p2", comment: "Comment2"},
    {_id: "c5", pid: "p2", comment: "Comment3"}
])

// db.posts.aggregate([
//     {$lookup: {
//         from: "comments",
//         localField: "_id",
//         foreignField: "pid",
//         as: "likhna"
//     }}
// ])

db.posts.aggregate([
    {$lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "pid",
        as: "comments"
    }}
])

db.posts.aggregate([
    {
        $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "pid",
            as: "comments"
        }
    },
    {$unwind: "$comments"},
    {$project:{_id: 0, post: 1, "comments.comment": 1}}
]);

// db.posts.aggregate([
//     {$lookup: {
//         from: "comments",
//         localField: "_id",
//         foreignField: "pid",
//         as: "likhna"
//     }},
//     {$unwind: "$likhna"},
//     {$project: {_id:0, post: 1, "likhna.comment": 1}}
// ])

db.comments.insertOne(
    {_id: "c6", pid: "p1", comment: "Comment3"}
)


db.marks.insertMany([
    {name: "John", term: "t1", subject: "maths", score: 98},
    {name: "John", term: "t2", subject: "maths", score: 90},
    {name: "John", term: "t3", subject: "maths", score: 88},
    {name: "John", term: "t1", subject: "science", score: 92},
    {name: "John", term: "t2", subject: "science", score: 82},
    {name: "John", term: "t3", subject: "science", score: 82},
    {name: "Cathy", term: "t1", subject: "maths", score: 92},
    {name: "Cathy", term: "t2", subject: "maths", score: 92},
    {name: "Cathy", term: "t3", subject: "maths", score: 82},
    {name: "Cathy", term: "t1", subject: "science", score: 92},
    {name: "Cathy", term: "t2", subject: "science", score: 82},
    {name: "Cathy", term: "t3", subject: "science", score: 80},
]);


// Display average score of each student 

db.marks.aggregate([
    {$group: {
        _id: "$name",
        avgScore: {$avg: "$score"}
    }}
])

db.marks.aggregate([
    {$group: {
        _id: "$term",
        avgScore: {$avg: "$score"}
    }},
    {$sort: {_id: 1}}
])

// term and subject wise average

db.marks.aggregate([
    {$group: {
        _id: {term: "$term", subject: "$subject"},
        avgScore: {$avg: "$score"},
    }},
    {$sort: {_id: 1}}
])

db.marks.aggregate([
    {$match: {name: "John"}},
    {$group: {
        _id: {name: "$name", term: "$term"},
        avgScore: {$avg: "$score"}
    }},
    {$sort: {_id: 1}}
])

db.marks.updateMany({}, {$rename: {"name": "sid"}})

db.marks.updateMany(
    {sid: "John"},
    {$set : {sid: "s1"}}
)

db.marks.updateMany(
    {sid: "Cathy"},
    {$set: {sid: "s2"}}
)

db.studentInfo.insertMany([
    {_id: "s1", name: "Jhon"},
    {_id: "s2", name: "Cathy"}
])


db.studentInfo.aggregate([
    {$match: {name: "Jhon"}},
    {$lookup: {
        from: "marks",
        localField: "_id",
        foreignField: "sid",
        as: "marks"
    }},
    {$unwind: "$marks"},
    {$group: {_id: "$marks.term", avgScore: {$avg: "$marks.score"}}},
    {$sort: {_id: 1}}
])

db.studentInfo.aggregate([
    {$lookup: {
        from: "marks",
        localField: "_id",
        foreignField: "sid",
        as: "marks"
    }},
    {$unwind: "$marks"},
    {$group: {_id: {name: "$name", term: "$marks.term"}, avgScore: {$avg: "$marks.score"}}},
    {$sort: {_id: 1}}
])


db.employees.aggregate([
    {
        $project:{_id:0, name:1, salary:1, grade:"A"}
    }
])
