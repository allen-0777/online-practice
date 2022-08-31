var images = [
    "https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg",
    "https://fairylolita.com/wp-content/uploads/2020/10/DSCF8136.jpg",
    // "https://img.ltn.com.tw/Upload/food/page/2020/07/15/200715-10980-0-WClGQ.jpg"
    "/20220724_random/picture/3.jpg"
 ];
 
 $(function(){
    //$("input") => document.getElementByTagName
    //on => addEventListener
    $("input").on("click",function(){
        // alert("Hi");
        var numberOfListItem = $("#food li").length;
        // (0~1 )*3 => 3(2.9999x) => floor => 0,1,2
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#food li").eq(randomChildNumber).text());
        $("img").attr("src",images[randomChildNumber]);

    });
 });

