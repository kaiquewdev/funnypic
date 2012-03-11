// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#fff');

var main = Ti.UI.createWindow();

var wview = Ti.UI.createWebView({
	url: '/index.html'
});
main.add(wview);

var tabGroup = Ti.UI.createTabGroup();

var tab1 = Ti.UI.createTab({
	title: 'Funny Pic',
	window: main
});
tabGroup.addTab(tab1);

tabGroup.open();