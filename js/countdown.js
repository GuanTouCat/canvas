var WINDOW_WIDTH=1024;
var WINDOW_HEIGHT=768;
var RADIUS=8;
var MARGIN_TOP=60;
var MARGIN_LEFT=30;

const endTime=new Date(2018,2,3,6,30,45);
var curShowTimeSeconds=0;
var ball = {x:500 , y:100 , r:20 , g:2 , vx:-4 , vy:0 , color:"#005588"};

window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    curShowTimeSeconds = getcurShowTimeSeconds();


    setInterval(
        function () {
            render(context);
            upDate();
        },
    50);
};



function getcurShowTimeSeconds() {
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret/1000);

    return ret >= 0 ? ret : 0;
}


function upDate() {
    var nextShowTimeSeconds = getcurShowTimeSeconds();
    var nextHours = parseInt(nextShowTimeSeconds/3600);
    var nextMinutes = parseInt(nextShowTimeSeconds-nextHours*3600/60);
    var nextSeconds = nextShowTimeSeconds%60;

    var curHours = parseInt(curShowTimeSeconds/3600);
    var curtMinutes = parseInt(curShowTimeSeconds-nextHours*3600/60);
    var curSeconds = curShowTimeSeconds%60;

    if(nextShowTimeSeconds != curShowTimeSeconds) {
        curShowTimeSeconds =nextShowTimeSeconds;
    }
}


function render(cxt) {

    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);

    var hours = parseInt(curShowTimeSeconds/3600);
    var minutes = parseInt((curShowTimeSeconds - hours*3600)/60);
    var seconds = parseInt(curShowTimeSeconds%60);

    renderDidit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours/10), cxt);
    renderDidit(MARGIN_LEFT+15*(RADIUS+1), MARGIN_TOP, parseInt(hours%10), cxt);
    renderDidit(MARGIN_LEFT+30*(RADIUS+1), MARGIN_TOP, 10, cxt);
    renderDidit(MARGIN_LEFT+39*(RADIUS+1), MARGIN_TOP, parseInt(minutes/10), cxt);
    renderDidit(MARGIN_LEFT+54*(RADIUS+1), MARGIN_TOP, parseInt(minutes%10), cxt);
    renderDidit(MARGIN_LEFT+69*(RADIUS+1), MARGIN_TOP, 10, cxt);
    renderDidit(MARGIN_LEFT+78*(RADIUS+1), MARGIN_TOP, parseInt(seconds/10), cxt);
    renderDidit(MARGIN_LEFT+93*(RADIUS+1), MARGIN_TOP, parseInt(seconds%10), cxt);

}

function renderDidit(x, y, num, cxt) {

    cxt.fillStyle = "#67becf";

    for(var i = 0; i < digit[num].length; i++)
        for (var j=0; j < digit[num][i].length; j++)
            if( digit[num][i][j] == 1 ) {
                cxt.beginPath();
                cxt.arc(x+j*2*(RADIUS+1), y+i*2*(RADIUS+1), RADIUS, 0, 2*Math.PI);
                cxt.closePath();
                cxt.fill();
            }

}