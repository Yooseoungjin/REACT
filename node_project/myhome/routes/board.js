let express = require('express');
let router = express.Router();
let commonDB = require("./commonDB");
let commonUtil = require("./commonUtil");

/* get home pageXOffset. */

router.get('/list/:pg', async function(req, res, next){
    let pg = parseInt(req.params.pg);
    // pg=1 0 (pg-1)*10 0
    // pg=2 10 (2-1)*10 10
    // pg=3 20 (3-1)*10 20

    let sql = `
	    SELECT count(*) cnt
	    FROM tb_board A
        LEFT OUTER JOIN (SELECT @rownum:=0) B on 1=1
	    LEFT OUTER JOIN tb_member C ON a.writer=c.userid
	    `;
        let results = await commonDB.mysqlRead(sql,[]);
        let totalCnt = results[0]["cnt"];
        
    sql=`SELECT A.id, A.title, A.writer, A.username
    ,date_format(A.wdate,'%Y-%m-%d') wdate, A.num
    FROM
    (
        SELECT a.id,a.title, a.writer, a.wdate,c.username
        ,@rownum:=@rownum+1 num
        FROM tb_board a
        LEFT OUTER JOIN (SELECT @rownum:=0) B on 1=1
        LEFT OUTER JOIN tb_member C ON a.writer=c.userid
        ORDER BY id DESC
    ) A
    LIMIT ${(pg-1)*10} ,10;
    `;

    results = await commonDB.mysqlRead(sql,[]);
    console.log(results);
    res.render('board/board_list', {session:req.session, 
        boardList:results,
        totalCnt:totalCnt,
        pg:pg,
        paging:commonUtil.getPaging(pg, totalCnt) });
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
