function goPage(pno,psize){
    var itable = document.getElementById('idData');
    var num = itable.rows.length;
    var totalPage = 0;
    var pageSize = psize;
    if(num/pageSize > parseInt(num/pageSize)){
        totalPage = parseInt(num/pageSize)+1;
    }else{
        totalPage = parseInt(num/pageSize);
    }
    var currentPage = pno;
    var startRow = (currentPage-1)*pageSize+1;
    var endRow = currentPage*pageSize;
    endRow = (endRow>num)?num:endRow;
    console.log(endRow);
}


