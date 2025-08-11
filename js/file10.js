//  Promises

//  In this code if return 5 is delayed then f2() does not wait it excute first and get error because it depend on f1()

// const f1 = ()=>{
//     // return 5;
//     setTimeout(()=>{return 5}, 1000)
// }

// const f2 = (x)=>{
//     console.log(x+7)
// }

// const n = f1();
// const m = f2(n);



// const f1 = ()=>{
//     return new Promise((resolve, reject)=>{
//         resolve(5)
//         // resolve(setTimeout(()=>{5}, 1000));
//         reject("something went wrong");
//     })
// };

// const f2 = (x)=>{
//     console.log(x+7)
// }

// f1()
// .then((n) => f2(n))
// .catch((err) => console.log(err));


// const f1 = (x) =>{
//     return new Promise((resolve, reject)=>{
//         if(x < 0){
//             reject("Wrong input");
//         }
//         else{
//             resolve(x);
//         }
//     })
// }

// f1(5)
// .then((n) => console.log(n))
// .catch((err) => console.log(err))




// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => (res.json()))
// .then((data) => {
//     data.map((value)=>{
//         console.log(value.name);
//     })
// })
// .catch((err) => console.log(err))


const fetchData = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    data.map((value)=>{
        console.log(value.name);
    })
}

fetchData();

