//routes 폴더에 놓을 것 commonUtil.js
function getPaging(pg,totalCnt,pageGroupSize=10)
{
    /*                                       그룹번호           
    1   2   3   4   5   6   7   8   9   10      1   1,10
    11  12  13  14  15  16  17  18  19  20      2   11,20
    21  22  23  24  25  26  27  28  29  30      3   21,30
    
    (1-1)/10*10 0/10*10= 0
    (2-1)/10*10 1/10*10= 0
    (3-1)/10*10 2/10*10= 0
    (8-1)/10*10 7/10*10= 0
    (9-1)/10*10 8/10*10= 0
    (10-1)/10*10 9/10*10= 0
    (11-1)/10*10 10/10*10= 10
    (21-1)/10*10 20/10*10= 20
    */
    //전체페이지 개수, 어느 그룹에 속하는지 확인해야 한다.
    pnTotal = Math.ceil(totalCnt/10); //전체페이지 개수 산출 함수
    //한페이지당데이터가 10개일때 15건일때 2페이지로 강제 올림
    
    pgGroupStart = parseInt((pg-1)/pageGroupSize)*pageGroupSize+1;
    pgGroupEnd = pgGroupStart+10;
    if(pgGroupEnd>pnTotal)
    pgGroupEnd = pnTotal +1;

    console.log(pg, pgGroupStart, pgGroupEnd)

    //함수는 반환값이하나이어야 한다. JSON 객체로 만들어 보자
    return {pnTotal:pnTotal, pnStart:pgGroupStart, pnEnd:pgGroupEnd, pg:pg}
}

/* for(i=1; i<=32; i++)
    getPaging(i,320); */

//노출 시켜줘야 되는 함수


function checkInfo(req, checkInfos)
{
    msg="";
    result=0;
    resultInfo={};

    for( info of checkInfos)
    {
        //undefined 상대방이 이 키값을 아예 안보냄
        if(req.body[info.key]==undefined)
        {
            msg = msg + info.key + " is empty ";
            result = 1;
            req.body[info.key]="";//다음 처리를 위해서 - 가급적 else를 사용하지 않기 위해서
        }
        if(info.type == "str" && info.range!=-1 && req.body[info.key].length > info.range)
        {
            msg = msg += info.key + "range error";
        }
    }
    resultInfo[info.key] = req.body[info.key];
    resultInfo["result"] = result;
    resultInfo["msg"] = msg;

    return resultInfo;
}

exports.getPaging = getPaging;
exports.checkInfo = checkInfo;