
//이러한 DB정보가 저장된 파일을 버전관리에 올리는 것은 아주 나쁜 방법임.
//따라서 버전관리에 저장되는 파일은 db.template.js를 저장함
var mysql = require('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql123',
    database:'opentutorials'
  });
  db.connect();
  module.exports = db;