var express = require('express');
var router = express.Router();
var commonDB = require("./commonDB");

/* get home pageXOffset. */

router.get('/', async function(req,res,next){
    let sql = `
        select id, title, writer,
        contents, date_format(wdate, '%Y-%m-%d') wdate
        from tb_board
    `;

    let results = await commonDB.mysqlRead(sql,[]);
    res.render('board/board_list', {boardList:results});
});

router.get('/view/:id', async function(req,res){
    let id =req.params.id; //받아오는 법
    let sql = `
    select id, title, writer,
    contents, date_format(wdate, '%Y-%m-%d') wdate
    from tb_board
    `;
    let results = await commonDB.mysqlRead(sql,[]);
    let item = results.filter(x=>x.id==id); 
    res.render('board/board_view.ejs', {item:item[0]});
});

/* router.use("/board/view/:id",(req,res,next)=>{
    let id = req.params.id;
    let item = boardList.filter(x=>x.id==id);
    res.render("board/board_view.ejs",{item:item[0]});
});
 */
module.exports = router;
