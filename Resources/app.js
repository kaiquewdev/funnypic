// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#fff');

var tabGroup = Ti.UI.createTabGroup();

var main = Ti.UI.createWindow({
	title: 'main'
});

var wview = Ti.UI.createWebView({
	url: '/index.html',
	zIndex: 0
});
main.add(wview);

var item = Ti.UI.createImageView({
	image: '/img/bigode.png',
	width: 200,
	height: 60,
	zIndex: 10
});
main.add(item);

//object used to transform picture
var olt = Titanium.UI.create2DMatrix();
 
//touch position when move start
var curX, curY;
 
item.addEventListener('touchstart', function(e) {
    //record position on touch start
    curX = e.x;
    curY = e.y;
});
//perform drag and drop
item.addEventListener("touchmove", function(e) {
	var deltaX = e.x - curX, deltaY = e.y - curY;
	olt = olt.translate(deltaX, deltaY);

	e.source.transform = olt;
	e.source.duration = 30;
	curX = e.x;
	curY = e.y;
});

var tab1 = Ti.UI.createTab({
	title: 'Funny Pic',
	window: main
});
tabGroup.addTab(tab1);

tabGroup.open();