//  Callback Function

const main = () =>{
    console.log("Hello");
}

const f1 = (x) => {
    x();
}

f1(main);

const a = 10;
const add = (x) =>{
    console.log(x)
}
add(a);