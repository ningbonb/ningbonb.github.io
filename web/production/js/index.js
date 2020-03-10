const infoArr = [
    {
        title:'看看火爆这个夏天的明星们如何撕掉标签，加速改变',
        tip:'动态展示 / Canvas',
        href:'https://go.163.com/web/20190905_jetta/index.html',
        src:'./assets/pictures/picture_4.png',
    },{
        title:'叫醒爸爸的是什么',
        tip:'趣味问答 / CSS3',
        href:'http://s.auto.163.com/web/20180617_encino/index.html',
        src:'./assets/pictures/picture_20.png',
    },{
        title:'曾火遍中国的宝贝你还记得几个？',
        tip:'动态展示 / Canvas',
        href:'http://go.163.com/2017/1225/taobao15/index.html',
        src:'./assets/pictures/picture_25.png',
    },{
        title:'2020！许愿皆灵！',
        tip:'趣味问答 / Video',
        href:'https://go.163.com/web/20200101_yili_3/index.html',
        src:'./assets/pictures/picture_35.png',
    },{
        title:'一场关于撩的终极考验',
        tip:'趣味问答 / Video',
        href:'https://go.163.com/web/20191010_bmw/index.html',
        src:'./assets/pictures/picture_38.png',
    },{
        title:'看了我的购物车你还爱我吗',
        tip:'互动游戏 / Video',
        href:'https://go.163.com/web/20191110_oshan/index.html',
        src:'./assets/pictures/picture_39.png',
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