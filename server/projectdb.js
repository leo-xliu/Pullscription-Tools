const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "pullscription",
    port: "3306"
});

connection.connect((err)=>{
    if (err) {
        throw err;
    }
    console.log('db ' + connection.state);
})



// class projectDB {
//     static getdb() {
//         return instance ? instance : new projectDB();
//     }

//     async getAllData() {
//         try {
//             const res = await new Promise((res, rej) => {
//                 const query = "SELECT * FROM products";
//                 connection.query(query, (err, res) =>{
//                     if (err) {
//                         throw (err);
//                     }
//                     resolve(results);
//                 })
//             });
//             return res
//         } catch (err) {
//             throw(err);
//         }
//     }
// }
module.exports = connection;
// module.exports = projectDB;