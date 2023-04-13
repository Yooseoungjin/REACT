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

    // http://localhost:9090/hero/view/1
    router.get('/view/:id',async function(req,res,next) {
      try
      {
        let id = req.params.id;
        let sql = ` select * from tb_hero where id = ${id}`;    
        let results = await commonDB.mysqlRead(sql,[]);
        res.json({"result":"success","hero":results[0]});
        }
        catch(e)
        {
          console.log(e);
          res.json({"result":"fail"});
        }
      })   


      router.post('/update',async function(req,res,next) {
        try
        {
          let id=req.body.id;
          let hero_name = req.body.hero_name;
          let hero_desc = req.body.hero_desc;
          let sql = `
          update INTO tb_hero set 
          hero_name =? ,hero_desc =?
          where id=?
          `
          await commonDB.mysqlRead(sql,[hero_name,hero_desc,id]);
          res.json({"result":"success"});
          }
          catch(e)
          {
            console.log(e);
            res.json({"result":"fail"});
          }
        })

module.exports = router;
