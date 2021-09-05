
//mysql 모듈을 사용하겠다, mysql 변수를 이용하여.
var mysql      = require('mysql');

//mysql과 연결하는 함수, 필요한 객체를 보냄
var connection = mysql.createConnection({
  host     : 'localhost', //서버 주소
  user     : 'root',      
  password : 'mysql123',
  database : 'opentutorials' //DB이름
});
 
//접속하는 함수
connection.connect();

/*
  첫 번째 인자 : SQL문
  두 번째 인자 : 콜백 함수(error, results, fields)
*/
connection.query('SELECT * FROM topic;', function (error, results, fields) {
  if (error) {
        console.log(error);
  }
  console.log(results);
});
 
connection.end();