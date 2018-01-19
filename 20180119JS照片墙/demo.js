function Index(row,col) {
    this.dom = {
        'wrap': $('.wrapper-ul')
    };
    this.num = {
        'totalHeight': $('.wrapper-ul').height(),
        'totalWidth': $('.wrapper-ul').width(),
        'rowNum': row,
        'colNum': col
    }
    this.createDom();
}

Index.prototype.createDom = function() {
    // debugger
    var self = this,
        wrap = self.dom.wrap,
        r = this.num.rowNum, //几行
        c = this.num.colNum, //几列
        w = this.num.totalWidth / c, //每个li的宽度
        h = this.num.totalHeight / r; //每个li的高度
    for(var i = 0; i < r; i++) {
        for(var j = 0; j < c; j++) {
            $('<li><img src="" /></li>').css({
                'width': w + 'px',
                'height': h + 'px',
                'left': j*w + 'px',
                'top': i*h + 'px',
                'transform': 'rotate(' + (30 - Math.random()*60) + 'deg)'
                    + 'translateX(' + (30 - Math.random()*60) + 'px)'
                    + 'translateY(' + (30 - Math.random()*60) + 'px)'
                    + 'translateZ(' + (-Math.random()*500) + 'px)',
            }).find('img').attr('src','./img/pic' + (c*i + j) + '.jpg').css({
                'width': w + 'px',
                'height': h + 'px',
                'transform': 'scale(0.9)' 
            }).end()
                .appendTo(wrap);
        }
    }
}

new Index(5,5);