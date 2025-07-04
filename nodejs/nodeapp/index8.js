//  npm i bcrypt

import bcrypt from "bcrypt"

// const pwd = "pass1234"
// const hashepwd = await bcrypt.hash(pwd, 10);
// console.log(hashepwd)

const check = await bcrypt.compare("pass1234", "$2b$10$HXm97ds2TEjfHz/6Pa0kp.6JIjIXH1tF0KIBsmEn2qD7Cl7i8Lvie");
console.log(check);