// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#fff');

var main = Ti.UI.createWindow();

var wview = Ti.UI.createWebView({
	url: '/index.html'
});
main.add(wview);

var item = Ti.UI.createImageView({
	image: '/img/bigode.png',
	width: 200,
	height: 60
});
main.add(item);

var tabGroup = Ti.UI.createTabGroup();

var curX, curY;

item.addEventListener('touchstart', function ( e ) {
	curY = e.y;
	curX = e.x;
});

item.addEventListener('touchmove', function ( e ) {
	e.source.top = e.y - curY;
	e.source.left = e.x - curX;
});

var tab1 = Ti.UI.createTab({
	title: 'Funny Pic',
	window: main
});
tabGroup.addTab(tab1);

tabGroup.open();