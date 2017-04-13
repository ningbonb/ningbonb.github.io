$(function(){
    // 添加页脚
    addFooter();
    // 添加导航条
    addNav();
    // 添加装饰
    addImg();
    // 添加新闻
    addNews();
    // 添加产品
    addPro();
    // 添加文字信息
    addInf();
    // 滚动条初始化
    addScrollbar();
    // 产品初始页
    addNewPro(0);
    // 新闻详细页
    showNews();
});

// 产品详细页
function showProducts(){
    $(".proBox").on("click",function(){
        console.log($(this).attr("id"));
        var proConNum = $(this).attr("id");
        for(var i = 0; i < products.length; i++){
            if(products[i].proNum == proConNum){
                $(".full-title").html(products[i].font+"-产品详情");
                $(".full-content").html("");
                $(".full-content").append(products[i].content);
            }
        }
        $(".full").slideDown("slow");
    });
    $(".full-close").on("click",function(){
        $(".full").slideUp("slow");
    });
}

// 新闻详细页
function showNews(){
    $(".news ul li").on("click",function(){

        var newConNum = $(this).attr("class");
        for(var i = 0; i < news.length; i++){
            if(news[i].newsNum == newConNum){
                $(".full-title").html(news[i].title);
                $(".full-content").html("");
                $(".full-content").append(news[i].content);
            }
        }
        $(".full").slideDown("slow");
    });
    $(".full-close").on("click",function(){
       $(".full").slideUp("slow");
    });
}

// 滚动条初始化
function addScrollbar(){
    $(".product").mCustomScrollbar({
        theme:"light-thick",
        // 按钮初始化
        scrollButtons:{
            enable: true,
            scrollType: "stepped",
            scrollAmount: 150
        },
        // 键盘初始化
        keyboard:{
            enable: true,
            scrollAmount: 150
        },
        alwaysShowScrollbar: 2
    });
}


// 添加页脚
function addFooter() {
    $(".footer").append("<p>Copyright &copy;2017 中式部落 Powered By NingBo 技术支持</p>")
        .append("<p>班级学号：13140B05 1314010444</p>");
}
// 添加导航条
function addNav() {
    for(var i = 0; i < navList.length; i++){
        $(".nav").append("<li class='hvr-radial-in'>"+ navList[i] +"</li>");
    }
    $(".nav li").eq(0).css("color","rgb(177, 41, 35)");
    // 给导航条添加点击事件
    $(".nav li").on("click",function(){
        $(".nav li").css("color","black");
        $(".nav li").eq($(this).index()).css("color","rgb(177, 41, 35)");
        $(".c").hide();
        $(".c").eq($(this).index()).show();
    });
}

// 添加装饰
function addImg(){
    for(var i = 0; i < $(".c").length; i++){
        if(i == 0){
            $(".c").eq(i).append("<div class='hImg1'></div>").append("<div class='hImg2'></div>");
        }else{
            $(".c").eq(i).append("<div class='hImg4'></div>").append("<div class='hImg5'></div>");
        }
    }
}

// 添加新闻
function addNews() {
    for(var i = 0; i < news.length; i++){
        var index = Math.floor(i/7);
        for(var j = 0; j <= index; j++){
            $(".news").append("<ul></ul>");
        }
        $(".news ul:first-child").css("display","block");
        $(".news ul").eq(index).append("<li class='"+ news[i].newsNum +"'><a href='javascript:;' class='hvr-rotate'>" + news[i].title + "</a><span>"+ news[i].date +"</span></li>");
    }
    // 添加分页器
    $(".news").append("<div class='pageNum'></div>");
    var numIndex = Math.floor(news.length/7);
    $(".pageNum").append("<span class='num'>&lt;</span>");
    for(var k = 0; k <= numIndex; k++){
        $(".pageNum").append("<span class='num'>"+ (k+1) +"</span>");
    }
    $(".pageNum").append("<span class='num'>&gt;</span>");
    $(".num").eq(1).addClass("numAc");
    // 分页器添加点击事件
    if($(".num").length>2){
        numEv();
    }
}

// 分页器点击事件
function numEv(){
    var numAc = 1;
    $(".num").eq(1).addClass("numAc");
    $(".num").on("click",function(){
        $(".news ul").hide();
        $(".num").removeClass("numAc");
        var index = $(this).index();
        if(index == 0){
            numAc --;
            if(numAc <=1) numAc = 1;
        }else if(index == ($(".num").length - 1)){
            numAc++;
            if(numAc >= $(".num").length-1) numAc = $(".num").length - 2;
        }else{
            numAc = index;
        }
        $(".num").eq(numAc).addClass("numAc");
        $(".news ul").eq(numAc-1).show();
    });

}

// 添加文字信息
function addInf(){
    $(".intro").html(introInf);
    $(".info").html(infoInf);

    for(var i = 0; i < $(".c").length; i++){
        if(i == 0)continue;
        $(".c").eq(i).append("<div class='intro-title hvr-float-shadow'>"+ introTitleList[i-1] +"</div>");
    }
}

// 添加产品
function addPro(){
    // 添加产品导航
    addProMenu();
    // 产品默认页
    // addNewPro(0);
    $(".proMenu li").eq(0).css("color","#fff");

    $(".proMenu li").on("click",function(){
        // 移除旧产品
        $(".proBox").remove();
        $(".proMenu li").css("color","silver");

        var index = $(this).index();
        // 添加新产品
        addNewPro(index);
        $(".proMenu li").eq(index).css("color","#fff");
    });
}

// 添加产品导航
function addProMenu(){
    for(var i = 0; i < proMenuList.length; i++){
        $(".proMenu").append("<li class='hvr-bubble-bottom hvr-forward'>"+ proMenuList[i] +"</li>");
    }
}

// 添加新产品
function addNewPro(index){
    var proNum = 0;
    var newProList = [];

    // 生成新数组
    for(var i = 0; i < products.length; i++){
        if(products[i].type == index){
            proNum = newProList.push(products[i]);
        }
    }

    // 添加新产品
    for(var j = 0; j < proNum; j++){
        $("#mCSB_1_container").append("<div class='proBox hvr-grow' id='"+ newProList[j].proNum +"'><img src='"+
            newProList[j].img +"' alt='"+
            newProList[j].font +"' title='"+
            newProList[j].font +"'><span>"+
            newProList[j].font +"</span></div>");
    }

    // 产品详细页
    showProducts();
}
