const infoArr = [
    {
        title:'可以手机扫码观看',
        tip:'作品按照上线时间排列',
        href:'',
        src:'./assets/pictures/picture_0.png',
    },{
        title:'沉迷毒鸡汤的你是不是又“丧”了？',
        tip:'动态展示 / Canvas',
        href:'http://s.auto.163.com/2017_backups/1104/vwgolfs/index.html',
        src:'./assets/pictures/picture_1.png',
    },{
        title:'曾火遍中国的宝贝你还记得几个？',
        tip:'动态展示 / Canvas',
        href:'http://go.163.com/2017/1225/taobao15/index.html',
        src:'./assets/pictures/picture_25.png',
    },{
        title:'态度日历 让每一天更有趣',
        tip:'动态展示 / Canvas',
        href:'http://go.163.com/2017/1231/taidu/index.html',
        src:'./assets/pictures/picture_2.png',
    },{
        title:'我在童话里遇到你的时光',
        tip:'动态展示 / Canvas',
        href:'http://go.163.com/2018/0120/taidu/index.html',
        src:'./assets/pictures/picture_3.png',
    },{
        title:'态度日历 日历DIY',
        tip:'图片上传 / 滤镜 / DIY',
        href:'http://go.163.com/2018/0101/taidu-upload/index.html',
        src:'./assets/pictures/picture_4.png',
    },{
        title:'百万喷雾公益大救助',
        tip:'动态展示 / Canvas',
        href:'http://go.163.com/web/20180320_medspa/index.html',
        src:'./assets/pictures/picture_5.png',
    },{
        title:'抬头见喜-网易营销资源整合',
        tip:'动态展示 / 创意互动 / CSS3',
        href:'http://go.163.com/web/20180302_news/index.html',
        src:'./assets/pictures/picture_6.png',
    },{
        title:'天猫女王节-女子也有力',
        tip:'趣味问答 / CSS3',
        href:'http://go.163.com/web/20180301_tianmao/index.html',
        src:'./assets/pictures/picture_7.png',
    },{
        title:'叫醒爸爸的是什么',
        tip:'趣味问答 / CSS3',
        href:'http://s.auto.163.com/web/20180617_encino/index.html',
        src:'./assets/pictures/picture_20.png',
    },{
        title:'轰炸朋友圈的九个字',
        tip:'创意 / Canvas',
        href:'http://go.163.com/web/20180101_words/index.html',
        src:'./assets/pictures/picture_8.png',
    },{
        title:'重回唐朝',
        tip:'趣味问答 / 动画 / Canvas',
        href:'http://go.163.com/web/20180925_yingjia/index.html',
        src:'./assets/pictures/picture_9.png',
    },{
        title:'人间有太多值得',
        tip:'动态展示 / Canvas',
        href:'http://go.163.com/web/20180909_jd_h5/index.html',
        src:'./assets/pictures/picture_10.png',
    },{
        title:'30，我的青春不留白',
        tip:'动态展示 / Canvas',
        href:'http://go.163.com/web/20180826_cib/index.html',
        src:'./assets/pictures/picture_11.png',
    },


    {
        title:'一场关于撩的终极考验',
        tip:'趣味问答 / Video',
        href:'https://go.163.com/web/20191010_bmw/index.html',
        src:'./assets/pictures/picture_38.png',
    },{
        title:'看了我的购物车你还爱我吗',
        tip:'互动游戏 / Canvas',
        href:'https://go.163.com/web/20191110_oshan/index.html',
        src:'./assets/pictures/picture_39.png',
    },{
        title:'2020！许愿皆灵！',
        tip:'趣味问答 / Video',
        href:'https://go.163.com/web/20200101_yili_3/index.html',
        src:'./assets/pictures/picture_35.png',
    },
];
window.onload = ()=>{
    const box = document.getElementById('item-box');
    infoArr.forEach((item,index)=>{
        const article = `<div class="item-box">
            <a class="item" href="${item.href}" target="_blank">
               <div class="box">
                   <img width="100%" src="${item.src}">
                   <div class="title">${item.title}</div>
                   <div class="tip">${item.tip}</div>
               </div>
            </a>
        </div>`;
        box.innerHTML += article;
    })
};