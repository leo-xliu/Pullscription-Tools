const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "sql3.freemysqlhosting.net",
    user: "sql3497167",
    password: "VT5Y31EWZD",
    database: "sql3497167",
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