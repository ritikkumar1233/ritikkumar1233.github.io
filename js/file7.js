//  Callback function

const f1 = () =>{
    console.log("hello")
};
const main = (x) =>{
    x()
}
main(f1);

// const f1 = 10;
// const main = (x) =>{
//     console.log(x);
// }
// main(f1);
