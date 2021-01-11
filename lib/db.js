var mysql = require('mysql')
var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'061599',
  database:'k0505s'
});
db.connect();
module.exports = db;