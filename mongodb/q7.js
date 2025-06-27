db.posts.insertMany([
    {_id: "p1", post: "Post 1"},
    {_id: "p2", post: "Post 2"}
])

db.comments.insertMany([
    {_id: "c1", pid: "p1", comment: "Comment 1"},
    {_id: "c2", pid: "p1", comment: "Comment 2"},
    {_id: "c3", pid: "p2", comment: "Comment 1"},
    {_id: "c4", pid: "p2", comment: "Comment 2"},
    {_id: "c5", pid: "p2", comment: "Comment 3"}
]);

db.posts.aggregate([
    {
        $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "pid",
            as: "comments"
        }
    }
]);

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
//     {
//         $lookup: {
//             from: "comments",
//             localField: "_id",
//             foreignField: "pid",
//             as: "pratikriya"
//         }
//     },
//     {$unwind: "$pratikriya"},
//     {$project:{_id: 0, post: 1, "pratikriya.comment": 1}}
// ]);


db.comments.insertOne(
    {_id: "c6", pid: "p1", comment: "Comment 3"},
);




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
    {$group:{
        _id: "$name",
        AvgScore:{$avg:"$score"}
    }}
])

db.marks.aggregate([
    {$group:{
        _id: "$term",
        AvgScore:{$avg:"$score"}
    }},
    {$sort: {_id: 1}}
])

db.marks.aggregate([
    {$group:{
        _id: "$subject",
        AvgScore:{$avg:"$score"}
    }},
    {$sort: {_id: 1}}
])

db.marks.aggregate([
    {$group:{
        _id: "$subject",
        AvgScore:{$avg:"$score"}
    }},
    {$sort: {_id: 1}}
])

// term and subject wise average

db.marks.aggregate([
    {$group:{
        _id:{ term: "$term", subject: "$subject", },
        AvgScore:{$avg:"$score"}
    }},
    {$sort: {_id: 1}}
])

db.marks.aggregate([
    {$match: {name: "John"}},
    {$group:{_id:{name: "$name",term: "$term"}, AvgScore:{$avg:"$score"}}},
    {$sort: {_id: 1}}
])



db.marks.insertMany([
    {sid: "s1", term: "t1", subject: "maths", score: 98},
    {sid: "s1", term: "t2", subject: "maths", score: 90},
    {sid: "s1", term: "t3", subject: "maths", score: 88},
    {sid: "s1", term: "t1", subject: "science", score: 92},
    {sid: "s1", term: "t2", subject: "science", score: 82},
    {sid: "s1", term: "t3", subject: "science", score: 82},
    {sid: "s2", term: "t1", subject: "maths", score: 92},
    {sid: "s2", term: "t2", subject: "maths", score: 92},
    {sid: "s2", term: "t3", subject: "maths", score: 82},
    {sid: "s2", term: "t1", subject: "science", score: 92},
    {sid: "s2", term: "t2", subject: "science", score: 82},
    {sid: "s2", term: "t3", subject: "science", score: 80},
]);

db.marks.updateMany(
    {},
    {$rename: {"name": "sid"}}
)

db.marks.updateMany(
    {sid:"John"},
    {$set: {sid: "s1"}}
)

db.marks.updateMany(
    {sid:"Cathy"},
    {$set: {sid: "s2"}}
)

db.studentInfo.insertMany([
    {_id: "s1", name: "Jhon"},
    {_id: "s2", name: "Cathy"}
]);

db.studentInfo.aggregate([
    {$match: {name: "Jhon"}},
    {
        $lookup: {
            from: "marks",
            localField: "_id",
            foreignField: "sid",
            as: "marks"
        }
    },
    {$unwind: "$marks"},
    {$group: {_id: "$marks.term", AvgScore: {$avg: "$marks.score"}}},
    {$sort: {_id: 1}}
]);


db.studentInfo.aggregate([
    {
        $lookup: {
            from: "marks",
            localField: "_id",
            foreignField: "sid",
            as: "marks"
        }
    },
    {$unwind: "$marks"},
    {$group: {_id:{name: "$name" ,marks: "$marks.term"}, AvgScore: {$avg: "$marks.score"}}},
    {$sort: {name: 1}}
]);