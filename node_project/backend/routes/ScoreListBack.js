var express = require('express');
var router = express.Router();
let commonDB = require('./commonDB');
/* GET home page. */
// http://localhost:9090/score/list

router.get('/list', async function(req, res, next) {
  let sql=`
  SELECT A.id, A.st_name,A.kor, A.eng,A.mat,DATE_FORMAT(A.WDATE,'%Y-%m-%d') wdate
  FROM score_board A
  `;
  let results = await commonDB.mysqlRead(sql,[]);
  res.json(results);
  
});

module.exports = router;
