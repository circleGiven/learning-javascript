$(document).ready(function() {
   'use strict';

    // paper.js load
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));


    // var c;
    // for(var x=25; x<400; x+=50) {
    //     for(var y=25; y<400; y+=50) {
    //         c = Shape.Circle(x, y, 20);
    //         c.fillColor = 'green';
    //     }
    // }

    // paper.js 의 tool 객체
    var tool = new Tool();

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    // 비동기적 이벤트 핸들러
    tool.onMouseDown = function(event) {
        // var c = Shape.Circle(event.point.x, event.point.y, 20);
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    };


    // draw
    paper.view.draw();

   console.log('main.js loaded...');
});