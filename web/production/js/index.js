const infoArr = [
    {
        title:'大众高尔夫：沉迷毒鸡汤的你是不是又“丧”了？',
        tip:'动态展示 / 视差 / Canvas',
        href:'http://s.auto.163.com/2017_backups/1104/vwgolfs/index.html',
        src:'./assets/pictures/picture_1.png',
        time:'2017-11-04',
    },
    {
        title:'淘宝：曾火遍中国的宝贝你还记得几个？',
        tip:'动态展示 / 画中画 / Canvas',
        href:'http://go.163.com/2017/1225/taobao15/index.html',
        src:'./assets/pictures/picture_25.png',
        time:'2017-12-25',
    },
    {
        title:'态度日历：让每一天更有趣',
        tip:'动态展示 / 视差 / Canvas',
        href:'http://go.163.com/2017/1231/taidu/index.html',
        src:'./assets/pictures/picture_2.png',
        time:'2017-12-31',
    },
    {
        title:'态度日历：日历DIY',
        tip:'图片上传 / 滤镜 / DIY',
        href:'http://go.163.com/2018/0101/taidu-upload/index.html',
        src:'./assets/pictures/picture_4.png',
        time:'2018-01-01',
    },
    {
        title:'态度日历：我在童话里遇到你的时光',
        tip:'动态展示 / 视差 / Canvas',
        href:'http://go.163.com/2018/0120/taidu/index.html',
        src:'./assets/pictures/picture_3.png',
        time:'2018-01-20',
    },
    {
        title:'美帕：百万喷雾公益大救助',
        tip:'动态展示 / 视差 / Canvas',
        href:'http://go.163.com/web/20180320_medspa/index.html',
        src:'./assets/pictures/picture_5.png',
        time:'2018-03-20',
    },
    {
        title:'天猫：女王节-女子也有力',
        tip:'趣味问答 / CSS3',
        href:'http://go.163.com/web/20180301_tianmao/index.html',
        src:'./assets/pictures/picture_7.png',
        time:'2018-03-01',
    },
    {
        title:'网易：抬头见喜',
        tip:'动态展示 / 创意互动 / CSS3',
        href:'http://go.163.com/web/20180302_news/index.html',
        src:'./assets/pictures/picture_6.png',
        time:'2018-03-31',
    },
    {
        title:'广汽：叫醒爸爸的是什么',
        tip:'趣味问答 / CSS3',
        href:'http://s.auto.163.com/web/20180617_encino/index.html',
        src:'./assets/pictures/picture_20.png',
        time:'2018-06-17',
    },
    {
        title:'中粮我买网：冰箱大作战',
        tip:'DIY / Canvas',
        href:'http://go.163.com/web/20180516_womai/index.html',
        src:'./assets/pictures/picture_40.png',
        time:'2018-05-16',
    },
    {
        title:'态度日历：轰炸朋友圈的九个字',
        tip:'创意 / Canvas',
        href:'http://go.163.com/web/20180101_words/index.html',
        src:'./assets/pictures/picture_8.png',
        time:'2018-07-02',
    },
    {
        title:'京东：人间有太多值得',
        tip:'动态展示 / 视差 / Canvas',
        href:'http://go.163.com/web/20180909_jd_h5/index.html',
        src:'./assets/pictures/picture_10.png',
        time:'2018-09-09',
    },
    {
        title:'兴业银行：30，我的青春不留白',
        tip:'动态展示 / Canvas',
        href:'http://go.163.com/web/20180826_cib/index.html',
        src:'./assets/pictures/picture_11.png',
        time:'2018-08-26',
    },
    {
        title:'平安惠普：这一抹风景，惊艳中国',
        tip:'明信片收集 / 获金奖 / Canvas',
        href:'https://go.163.com/web/20181216_pingan/index.html',
        src:'./assets/pictures/picture_21.png',
        time:'2018-12-16',
    },
    {
        title:'三金：让世界听见你',
        tip:'动态展示 / 画中画 / Canvas',
        href:'https://go.163.com/web/20181227_sanjin/index.html',
        src:'./assets/pictures/picture_23.png',
        time:'2018-12-27',
    },
    {
        title:'日产：一分钟穿越林海雪原无人区',
        tip:'明信片收集 / Canvas',
        href:'https://go.163.com/web/20190110_nissan/index.html',
        src:'./assets/pictures/picture_22.png',
        time:'2019-01-10',
    },
    {
        title:'态度日历：新旧交替 太岁换班',
        tip:'游戏 / 创意交互 / Canvas',
        href:' https://go.163.com/web/20190203_taidu/index.html',
        src:'./assets/pictures/picture_17.png',
        time:'2019-02-03',
    },
    {
        title:'天猫：滚蛋吧，失眠君',
        tip:'Flag DIY / 动态展示 / Canvas',
        href:'https://go.163.com/web/20190321_tianmao/index.html',
        src:'./assets/pictures/picture_18.png',
        time:'2019-03-21',
    },
    {
        title:'GXG：冷点日报',
        tip:'创意 / 动态展示 / Canvas',
        href:'https://go.163.com/web/20190326_gxg/index.html',
        src:'./assets/pictures/picture_14.png',
        time:'2019-03-26',
    },
    {
        title:'雪佛兰：探见千里江山',
        tip:'收集 / 创意 / 金奖 / Video',
        href:'https://go.163.com/web/20190513_chevrolet/index.html',
        src:'./assets/pictures/picture_11.png',
        time:'2019-05-13',
    },
    {
        title:'态度日历：探秘芒种',
        tip:'动态展示 / 创意交互 / 银奖 / Canvas',
        href:'https://go.163.com/web/20190606_taidu/index.html',
        src:'./assets/pictures/picture_16.png',
        time:'2019-06-06',
    },
    {
        title:'网易：中秋诗词大会',
        tip:'创意交互 / 游戏 / 拖拽 / DIY / Canvas',
        href:'https://go.163.com/web/20190913_poetry/index.html',
        src:'./assets/pictures/picture_12.png',
        time:'2019-09-13',
    },
    {
        title:'宝马：一场关于撩的终极考验',
        tip:'趣味问答 / Video',
        href:'https://go.163.com/web/20191010_bmw/index.html',
        src:'./assets/pictures/picture_38.png',
        time:'2019-10-10',
    },
    {
        title:'欧尚：看了我的购物车你还爱我吗',
        tip:'互动游戏 / Canvas',
        href:'https://go.163.com/web/20191110_oshan/index.html',
        src:'./assets/pictures/picture_39.png',
        time:'2019-11-10',
    },
    {
        title:'伊利：2020！许愿皆灵！',
        tip:'趣味问答 / Video',
        href:'https://go.163.com/web/20200101_yili_3/index.html',
        src:'./assets/pictures/picture_35.png',
        time:'2020-01-01',
    },
    {
        title:'网易：疫情AR小程序【遇见AR】',
        tip:'小程序 / 银奖 / AR',
        href:'./assets/pictures/picture_13.png',
        src:'./assets/pictures/picture_13.png',
        time:'2020-03-01',
    },
    {
        title:'新华书店：花城3D书摘漂流馆',
        tip:'创意交互 / 3D',
        href:'https://go.163.com/web/20200413_xinhua/index.html',
        src:'./assets/pictures/picture_41.png',
        time:'2020-04-13',
    },
    {
        title:'AR 手势大挑战',
        tip:'小程序 / AR / AI',
        href:'https://go.163.com/f2e/20200709_jweixin/index.html',
        src:'./assets/pictures/picture_46.png',
        time:'2020-07-09',
    },
    {
        title:'AR 表情大挑战',
        tip:'小程序 / AR / AI',
        href:'https://go.163.com/f2e/20200810_ar_face/index.html',
        src:'./assets/pictures/picture_45.png',
        time:'2020-08-10',
    },
    {
        title:'杜蕾斯：恋爱同步专项测试',
        tip:'多人 / 创意',
        href:'https://go.163.com/f2e/20200929_durex/index.html',
        src:'./assets/pictures/picture_43.png',
        time:'2020-09-29',
    },
    {
        title:'北京文化发展基金会：空降北京中轴线',
        tip:'小程序 / AR / VR / 创意',
        href:'./assets/pictures/picture_44.png',
        src:'./assets/pictures/picture_44.png',
        time:'2020-10-01',
    },
    {
        title:'雀巢：2020最想不开的N件事',
        tip:'创意交互 / 3D',
        href:'https://go.163.com/f2e/20201218_kitkat/index.html',
        src:'./assets/pictures/picture_42.png',
        time:'2020-12-18',
    },
    {
        title:'可以手机扫码观看',
        tip:'微信打不开可以复制链接到手机浏览器查看',
        href:'./assets/pictures/picture_0.png',
        src:'./assets/pictures/picture_0.png',
        time:'',
    },
];
window.onload = ()=>{
    const box = document.getElementById('items');
    infoArr.forEach((item,index)=>{
        const article = `<a class="item" href="${item.href}" target="_blank">
               <div class="item-img-box">
                  <div class="item-img" style="background-image: url(${item.src})"></div>
               </div>
               <div class="title">${item.title}</div>
               <div class="tip">${item.tip}</div>
               <div class="time">${item.time}</div>
            </a>`;
        box.innerHTML = article + box.innerHTML;
    })
};
