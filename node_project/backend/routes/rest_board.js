//레스트 언더바 보드!!!!!!!!!! board.js랑 비교해 볼것~~

let express = require('express');
let router = express.Router();
let commonDB = require("./commonDB");
let commonUtil = require("./commonUtil");

/*
http://localhost:9090/rest_board/list    -- X안된다
http://localhost:9090/rest_board/list/1  -- O
*/
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
        
    sql=`
        SELECT A.id, A.title, A.writer, A.username
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
    res.json({boardList:results, totalCnt:totalCnt, pg:pg, });
    //한 함수내에서 res.json 호출하고 또 다시 res.send나 render나 json 호출 못 한다.
    });

router.get('/view/:id', async function(req, res, next){
    let id = req.params.id;
    let sql = `
        SELECT A.id, A.title, A.writer, 
                date_format(a.wdate, '%Y-%m-%d') wdate,
                (select username from tb_member B where A.writer=B.userid) username
                from tb_board A
                where id = ${id}
        `;
    /* 
        subquery : Select(결과셋이 하나 또는 0일때 가능), 
                  from : 인라인뷰,
                  where : 드물게 사용한다(셀렉트와 프롬에서 서브쿼리 사용을 마스터한뒤 웨얼절 사용할것, 책에서는 만힝 나오네)    
        조인 -> 서브쿼리(캐쉬가 된다 = 사용하면 어딘가 저장이 된다) -> 함수
        nested loop join => for문 돌려서 조인을 한다. 10 이전 버젼
        hash join => 양쪽 테이블의 join 컬럼을 기준으로 해쉬테이블을 만들어 조인한다.
            (엄청 빠름)
        선형검색(n번 비교), 이진검색(데이터가 순서대로 있을때), 해쉬검색(제일 빠름)
    */

    let results = await commonDB.mysqlRead(sql,[]);
    if(results.length==0)
    {
        res.json({result:"fail",msg:"해당하는 데이터를 찾을수 없습니다."})
        return;
    }
    res.json( {results:"success",msg:"",result:results [0]});
    });

    //http://localhost:9090/rest_board/save
    //{title:"제목",writer:"test",contents:"내용"}
    //응답 성공시 result:"success",msg:"등록성공"
    //응답 실패시 result:"fail",msg:"실패"
router.post('/write',async function(req,res,next) {

    checkInfos=[
        {key:"title",type:"str",range:200},
        {key:"writer",type:"str",range:40},
        {key:"contents",type:"str",range:-1}
    ]

    //수행결과값이 0이면 문제 없는 거고 다른 숫자가 온다면 오류임
    insertInfo = commonUtil.checkInfo( req, checkInfos);
    if( insertInfo["result"]!=0)
    {
        res.json({insertInfo});
        return;
    }
      let title = req.body.title;
      let writer = req.body.writer;
      let contents = req.body.contents;

      let sql = `
      select count(*) cnt from tb_member where userid ='${writer}'`;
      results = await commonDB.mysqlRead(sql,[]);
      if (results[0]["cnt"]==0)
      {
        res.json({result:"fail",msg: "해당하는 아이디가 없습니다."});
        return;
      }

        sql = `
        INSERT INTO tb_board(title,writer,contents,wdate)
         VALUES('${title}', '${writer}', '${contents}',now())
         `;

        await commonDB.mysqlRead(sql,[]);
        res.json({"result":"success"}) //json안의 리절트에는 쌍따옴표,따옴표,(생략) 모두가능하다
        });
    
    // -------------이하 내가 한거------------------
    /* 
    try
    {
      let title = req.body.title;
      let writer = req.body.writer;
      let contents = req.body.contents;

      let sql = `
      INSERT INTO tb_board(title,writer,contents,wdate)
      VALUES(?,?,?,NOW())
      `;

      await commonDB.mysqlRead(sql,[title,writer,contents]);
      res.json({result:"success",msg:"등록성공"});
      }
      
      catch(e)
      {
        console.log(e);
        res.json({result:"fail",msg:"실패"});
      }

    }); 
    */

module.exports = router;
