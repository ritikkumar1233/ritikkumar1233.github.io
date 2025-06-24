//  promises
//  In this code if return 5 is delayed then f2() does not wait it excute first and get error because it depend on f1()

// function f1(){
//     // return 5
//     setTimeout(()=>{ return 5},1000)
// }

// function f2(x){
//     // return x+7
//     console.log(x+7)
// }

// const n = f1()
// const result = f2(n)
// console.log(result)


// function f1(){
//     return new Promise((resolve, reject)=>{
//         // resolve(5);
//         reject("Something went wrong");
//     })
// }

// function f2(x){
//     // return x+7
//     console.log(x+7)
// }

// f1()
// .then( (n) => f2(n))
// .catch((err) => console.log(err));


function f1(a){
    return new Promise((resolve, reject)=>{
        if(a<0){
            reject("Invalid input");
        }
        else{
            resolve(a)
        }
    })
}

f1(-5)
.then((n) => console.log(n))
.catch((err) => console.log(err));