//  npm i dotenv

import dotenv from 'dotenv'

dotenv.config()

const dbuser = encodeURIComponent(process.env.DBUSER)
// const dbpass = process.env.DBPASS
const dbpass = encodeURIComponent(process.env.DBPASS)

console.log(dbuser, dbpass)