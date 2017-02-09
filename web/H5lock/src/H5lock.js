(function(){
		var canvasBox = document.getElementById("canvas-box");
        window.H5lock = function(obj){
            this.height = obj.height;
            this.width = obj.width;
            //this.chooseType = Number(window.localStorage.getItem('chooseType')) || obj.chooseType;
        };

        function getDis(a, b) {
            return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
        };

        H5lock.prototype.pickPoints = function(fromPt, toPt) {
            var lineLength = getDis(fromPt, toPt);
            var dir = toPt.index > fromPt.index ? 1 : -1;

            var len = this.restPoint.length;
            var i = dir === 1 ? 0 : (len - 1);
            var limit = dir === 1 ? len : -1;

            while (i !== limit) {
                var pt = this.restPoint[i];
                if (getDis(pt, fromPt) + getDis(pt, toPt) === lineLength) {
                    this.drawPoint(pt.x, pt.y);
                    this.lastPoint.push(pt);
                    this.restPoint.splice(i, 1);
                    if (limit > 0) {
                        i--;
                        limit--;
                    }
                }
                i+=dir;
            }
        }

        H5lock.prototype.drawCle = function(x, y) { // 初始化解锁密码面板
            this.ctx.strokeStyle = '#CFE6FF';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(x, y, this.r, 0, Math.PI * 2, true);
            this.ctx.closePath();
            this.ctx.stroke();
        }

        //初始化图片
        H5lock.prototype.drawPoint = function() { // 初始化触碰后样式
            var imgObj = new Image();
            //this.H5lockImgSrc = "src/star3.png";
            imgObj.src = this.H5lockImgSrc;
            for (var i = 0 ; i < this.lastPoint.length ; i++) {
            	var othis = this;
				this.ctx.clearRect(othis.lastPoint[i].x-(othis.r+2), othis.lastPoint[i].y-(othis.r+2), othis.r*2+4, othis.r*2+4);
				this.ctx.drawImage(imgObj,othis.lastPoint[i].x-(othis.r+1), othis.lastPoint[i].y-(othis.r+1), othis.r*2+2, othis.r*2+2);
            }
        }
        H5lock.prototype.drawStatusPoint = function(type) { // 初始化状态线条
            for (var i = 0 ; i < this.lastPoint.length ; i++) {
                this.ctx.strokeStyle = type;
                this.ctx.beginPath();
                this.ctx.arc(this.lastPoint[i].x, this.lastPoint[i].y, this.r, 0, Math.PI * 2, true);
                this.ctx.closePath();
                this.ctx.stroke();
            }
        }
        H5lock.prototype.drawStatusPoint2 = function(type) { // 初始化状态线条

            for (var i = 0 ; i < this.lastPoint.length ; i++) {
                this.ctx.strokeStyle = "#0B1D3D";
                this.ctx.beginPath();
                this.ctx.arc(this.lastPoint[i].x, this.lastPoint[i].y, this.r, 0, Math.PI * 2, true);
                this.ctx.closePath();
                this.ctx.stroke();
            }
        }
         H5lock.prototype.drawLine2 = function(po, lastPoint) {// 解锁轨迹
         	this.imgData = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height);
            this.ctx.beginPath();
            this.ctx.lineWidth = 3;
            this.ctx.moveTo(this.lastPoint[0].x, this.lastPoint[0].y);
            for (var i = 1 ; i < this.lastPoint.length ; i++) {
                this.ctx.moveTo(this.lastPoint[i].x, this.lastPoint[i].y);
            }
            this.ctx.lineTo(po.x, po.y);
            this.ctx.stroke();
            this.ctx.closePath();
        }
        H5lock.prototype.drawLine = function(po, lastPoint) {// 解锁轨迹
            this.ctx.beginPath();
            this.ctx.lineWidth = 3;
            this.ctx.moveTo(this.lastPoint[0].x, this.lastPoint[0].y);
            for (var i = 1 ; i < this.lastPoint.length ; i++) {
                this.ctx.lineTo(this.lastPoint[i].x, this.lastPoint[i].y);
            }
            this.ctx.stroke();
            this.ctx.closePath();

        }
        
        H5lock.prototype.createCircle = function() {// 创建解锁点的坐标，根据canvas的大小来平均分配半径
            var n = this.n;
            var m = this.m;
            var count = 0;
            this.r = this.ctx.canvas.width / (2 + 4 * n);// 公式计算
            this.lastPoint = [];
            this.arr = [];
            this.restPoint = [];
            var r = this.r;
            for (var i = 0 ; i < m; i++) {
                for (var j = 0 ; j < n ; j++) {
                    count++;
                    var obj = {
                        x: j * 4 * r + 3 * r,
                        y: i * 4 * r + 3 * r,
                        index: count
                    };
                    this.arr.push(obj);
                    this.restPoint.push(obj);
                }
            }
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            for (var i = 0 ; i < this.arr.length ; i++) {
                this.drawCle(this.arr[i].x, this.arr[i].y);
            }
        }
        H5lock.prototype.getPosition = function(e) {// 获取touch点相对于canvas的坐标
            var rect = e.currentTarget.getBoundingClientRect();
            var po = {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top
              };
            return po;
        }
        H5lock.prototype.init = function(n,m,H5lockImgSrc) {
            this.n = n;
            this.m = m;
            this.H5lockImgSrc = H5lockImgSrc;
            this.lastPoint = [];
            this.canvas = document.getElementById('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.createCircle();
            this.bindEvent();
        }
        H5lock.prototype.update = function(po) {// 核心变换方法在touchmove时候调用
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

            for (var i = 0 ; i < this.arr.length ; i++) { // 每帧先把面板画出来
                this.drawCle(this.arr[i].x, this.arr[i].y);
            }

            this.drawPoint(this.lastPoint);// 每帧花轨迹
            this.drawLine(po , this.lastPoint);// 每帧画圆心
            this.drawLine2(po , this.lastPoint);// 短线

            for (var i = 0 ; i < this.restPoint.length ; i++) {
                var pt = this.restPoint[i];

                if (Math.abs(po.x - pt.x) < this.r && Math.abs(po.y - pt.y) < this.r) {
                    this.drawPoint(pt.x, pt.y);
                    this.pickPoints(this.lastPoint[this.lastPoint.length - 1], pt);
                    break;
                }
            }

        }
        H5lock.prototype.checkPass = function(psw1, psw2) {
            var p1 = '',
            p2 = '';
            for (var i = 0 ; i < psw1.length ; i++) {
                p1 += psw1[i].index + psw1[i].index;
            }
            for (var i = 0 ; i < psw2.length ; i++) {
                p2 += psw2[i].index + psw2[i].index;
            }
            return p1 === p2;
        }
        
        H5lock.prototype.updatePassword = function(){
            this.reset();
        }
        H5lock.prototype.reset = function() {
            this.createCircle();
        }
        H5lock.prototype.bindEvent = function() {
            var self = this;
            this.canvas.addEventListener("touchstart", function (e) {
                e.preventDefault();// 某些android 的 touchmove不宜触发 所以增加此行代码
                self.reset();
                var po = self.getPosition(e);
                for (var i = 0 ; i < self.arr.length ; i++) {
                    if (Math.abs(po.x - self.arr[i].x) < self.r && Math.abs(po.y - self.arr[i].y) < self.r) {
                        self.touchFlag = true;
                        self.drawPoint(self.arr[i].x,self.arr[i].y);
                        self.lastPoint.push(self.arr[i]);
                        self.restPoint.splice(i,1);
                        break;
                    }
                 }
             }, false);
             this.canvas.addEventListener("touchmove", function (e) {
                if (self.touchFlag) {
                    self.update(self.getPosition(e));
                }
             }, false);
             this.canvas.addEventListener("touchend", function (e) {
                 if (self.touchFlag) {
                     self.touchFlag = false;
                     setTimeout(function(){
					self.ctx.putImageData(self.imgData,0,0);
                    }, 300);
                 }
             }, false);
             document.addEventListener('touchmove', function(e){
                e.preventDefault();
             },false);
        }
})();
