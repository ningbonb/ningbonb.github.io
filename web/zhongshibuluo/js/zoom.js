// zoom
$(function(){
    new zoomForJQuery('.zoom',0.76);
});
function zoomForJQuery(eleStr, zoom, center) {
    eleStr = eleStr||'.zoom';
    if ($(eleStr).length == 0)throw 'DOM is not find';
    this.eleArr = $(eleStr);
    this.zoom = zoom || 1;
    this.center = center === false ? false : true;
    this.isZoom = window.navigator.userAgent.search(/Trident|Chrome/) >= 0 ? true : false;
    this.isChrome = window.navigator.userAgent.search(/Chrome/) >= 0 ? true : false;
    for(var i=0;i < this.eleArr.length; i++){
        this.eleArr[i].initW = this.eleArr.eq(i).width();
        this.eleArr[i].initH = this.eleArr.eq(i).height();
    }
    var _this = this;
    if(!_this.center){
        $('html,body').css({'overflow':'auto','overflow-x':'hidden'});
        $('body').css({'overflow-y':'scroll'});
    }
    this.zoomCtr = function () {
        //bg_size();
        for (var i = 0; i < _this.eleArr.length; i++) {
            var parent = $(_this.eleArr[i]).parent();
            var current = $(_this.eleArr[i]);
            var parentW = parent.width();
            var parentH = parent.height();
            var currentW = current[0].initW;
            var currentH = current[0].initH;
            var zoom = null;
            zoom = _this.zoom * (parentW / currentW+parentH / currentH)/2;
            // zoom = _this.zoom * (parentH / currentH);
            if(!_this.center){
                zoom = _this.zoom * (parentW / currentW);
            }
            if (_this.isZoom) {
                current.css({
                    position: 'relative',
                    top: 0,
                    left: 0,
                    marginTop: 0,
                    marginLeft: 0,
                    zoom: zoom
                });
                if (_this.center) {
                    current.css({position: 'absolute',top: '50%',left: '50%', marginLeft: _this.isChrome?-currentW / 2:(-currentW / 2) * zoom, marginTop: _this.isChrome?-currentH / 2:(-currentH / 2) * zoom});
                }else{

                    if(parent[0].tagName == 'BODY' || parent[0].tagName == 'HTML')console.warn('zoomForJQuery:Parent element cannot be BODY or HTML,Not supported IE!!');
                    else{
                        parent.css({position: 'absolute', top: 0, left: 0, width: '100%', height: 'auto', overflow: 'hidden'});
                    }
                }

                $('.zoom-right').css({
                    zoom: zoom*0.7,
                    //marginLeft: _this.isChrome?-$('.zoom-right').width():(-$('.zoom-right').width()) * (zoom),
                    //marginTop: _this.isChrome?-$('.zoom-right').height() / 2:(-$('.zoom-right').height() / 2) * (zoom)

                });
                $('.zoom-top').css({
                    zoom: zoom,
                    marginLeft: _this.isChrome?-$('.zoom-top').width()/2:(-$('.zoom-top').width()/2) * (zoom)
                });
                $('.zoom-bottom').css({
                    zoom: zoom,
                    marginTop: _this.isChrome?-$('.zoom-bottom').height():(-$('.zoom-bottom').height()) * (zoom),
                    marginLeft: _this.isChrome?-$('.zoom-bottom').width()/2:(-$('.zoom-bottom').width()/2) * (zoom)
                });
            } else {
                current.css({
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginLeft: (-currentW / 2),
                    marginTop: (-currentH / 2),
                    webkitTransform: 'scale(' + zoom + ')',
                    mozWebkitTransform: 'scale(' + zoom + ')',
                    msWebkitTransform: 'scale(' + zoom + ')',
                    oWebkitTransform: 'scale(' + zoom + ')',
                    transform: 'scale(' + zoom + ')'
                });
                if (!_this.center) {
                    current.css({
                        position: 'relative',
                        top: 0,
                        marginTop: 0,
                        webkitTransformOrigin: 'center 0',
                        mozTransformOrigin: 'center 0',
                        msTransformOrigin: 'center 0',
                        oTransformOrigin: 'center 0',
                        transformOrigin: 'center 0'
                    });
                    parent.css({
                        height: current[0].scrollHeight*zoom
                    });
                }
                $('.zoom-right').css({
                    webkitTransform: 'scale(' + zoom + ')',
                    mozWebkitTransform: 'scale(' + zoom + ')',
                    msWebkitTransform: 'scale(' + zoom + ')',
                    oWebkitTransform: 'scale(' + zoom + ')',
                    transform: 'scale(' + zoom + ')',
                    webkitTransformOrigin: 'right center',
                    mozTransformOrigin: 'right center',
                    msTransformOrigin: 'right center',
                    oTransformOrigin: 'right center',
                    transformOrigin: 'right center'

                });
                $('.zoom-top').css({
                    webkitTransform: 'scale(' + zoom + ')',
                    mozWebkitTransform: 'scale(' + zoom + ')',
                    msWebkitTransform: 'scale(' + zoom + ')',
                    oWebkitTransform: 'scale(' + zoom + ')',
                    transform: 'scale(' + zoom + ')',
                    webkitTransformOrigin: 'center top',
                    mozTransformOrigin: 'center top',
                    msTransformOrigin: 'center top',
                    oTransformOrigin: 'center top',
                    transformOrigin: 'center top'
                });
                $('.zoom-bottom').css({
                    webkitTransform: 'scale(' + zoom + ')',
                    mozWebkitTransform: 'scale(' + zoom + ')',
                    msWebkitTransform: 'scale(' + zoom + ')',
                    oWebkitTransform: 'scale(' + zoom + ')',
                    transform: 'scale(' + zoom + ')',
                    webkitTransformOrigin: 'center bottom',
                    mozTransformOrigin: 'center bottom',
                    msTransformOrigin: 'center bottom',
                    oTransformOrigin: 'center bottom',
                    transformOrigin: 'center bottom'
                });
                $('.zoom-left').css({
                    webkitTransform: 'scale(' + zoom + ')',
                    mozWebkitTransform: 'scale(' + zoom + ')',
                    msWebkitTransform: 'scale(' + zoom + ')',
                    oWebkitTransform: 'scale(' + zoom + ')',
                    transform: 'scale(' + zoom + ')',
                    webkitTransformOrigin: 'left center',
                    mozTransformOrigin: 'left center',
                    msTransformOrigin: 'left center',
                    oTransformOrigin: 'left center',
                    transformOrigin: 'left center'
                });
            }
        }
    };
    $(window).resize(this.zoomCtr);
    $(window).load(this.zoomCtr);
    this.zoomCtr();
}

//创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMarker();//向地图中添加marker
}

//创建地图函数：
function createMap(){
    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(112.454528,38.020153);//定义一个中心点坐标
    map.centerAndZoom(point,16);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent(){
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(){
    //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
    var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
    map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    map.addControl(ctrl_sca);
}

//标注点数组
var markerArr = [{title:"中北大学",content:"我的备注",point:"112.454564|38.021858",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
];
//创建marker
function addMarker(){
    for(var i=0;i<markerArr.length;i++){
        var json = markerArr[i];
        var p0 = json.point.split("|")[0];
        var p1 = json.point.split("|")[1];
        var point = new BMap.Point(p0,p1);
        var iconImg = createIcon(json.icon);
        var marker = new BMap.Marker(point,{icon:iconImg});
        var iw = createInfoWindow(i);
        var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
        marker.setLabel(label);
        map.addOverlay(marker);
        label.setStyle({
            borderColor:"#808080",
            color:"#333",
            cursor:"pointer"
        });

        (function(){
            var index = i;
            var _iw = createInfoWindow(i);
            var _marker = marker;
            _marker.addEventListener("click",function(){
                this.openInfoWindow(_iw);
            });
            _iw.addEventListener("open",function(){
                _marker.getLabel().hide();
            })
            _iw.addEventListener("close",function(){
                _marker.getLabel().show();
            })
            label.addEventListener("click",function(){
                _marker.openInfoWindow(_iw);
            })
            if(!!json.isOpen){
                label.hide();
                _marker.openInfoWindow(_iw);
            }
        })()
    }
}
//创建InfoWindow
function createInfoWindow(i){
    var json = markerArr[i];
    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
    return iw;
}
//创建一个Icon
function createIcon(json){
    var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
    return icon;
}

initMap();//创建和初始化地图