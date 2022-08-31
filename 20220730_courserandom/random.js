$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;

    let milliesecPerDay = 24*60*60*1000;

    for(var x=0;x<topicCount;x++){
        var date1 = new Date(startDate.getTime()+7*x*milliesecPerDay).toLocaleDateString()
        var listdate = date1.split("/")
        $("#courseTable").append(
            "<tr>"+
                `<td>${x+1}</td>`+
                // 如果要指定最後一個可以不用寫 它會自動抓到最後一個
                // `<td>${date1.substring(5,)}</td>`+
                // 先用陣列存起來 再去指定陣列位置
                `<td>${listdate[1]}/${listdate[2]}</td>`+
                `<td>${topic[x]}</td>`+
            "</tr>"
            );
    }
});
