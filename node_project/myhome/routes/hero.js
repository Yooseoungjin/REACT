var express = require('express');
var router = express.Router();
let commonDB = require('./commonDB');
/* GET home page. */
// http://localhost:9090/hero/list

router.get('/list', async function(req, res, next) {
  let sql=`
  SELECT A.id, A.hero_name,A.hero_desc, DATE_FORMAT(A.WDATE,'%Y-%m-%d') wdate
  FROM tb_hero A
  `;
  let results = await commonDB.mysqlRead(sql,[]);
  res.json(results);
  /* res.json(
    [
      {id:1, name:"이순신", desc:"임진왜란승리"},
      {id:2, name:"광개토", desc:"고구려왕"},
      {id:3, name:"장영실", desc:"천재발명가"},
      {id:4, name:"하하하", desc:"뭐뭐뭐"},
      {id:5, name:"개졸림", desc:"나약한녀석"},
      {id:6, name:"육퇴go", desc:"빠르게"},
      {id:7, name:"연수생으로살고파", desc:"풉"}

  ]
  ) */
  
});

  router.post('/write',async function(req,res,next) {
    try
    {
      let hero_name = req.body.hero_name;
      let hero_desc = req.body.hero_desc;
      let sql = `
      INSERT INTO tb_hero(hero_name,hero_desc,wdate)
      VALUES(?,?,NOW())`;    
      await commonDB.mysqlRead(sql,[hero_name,hero_desc]);
      res.json({"result":"success"});
      }
      catch(e)
      {
        console.log(e);
        res.json({"result":"fail"});
      }
    })

module.exports = router;
