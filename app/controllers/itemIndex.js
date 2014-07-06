var args = arguments[0] || {};
var sItems = Alloy.Globals.Items;

var refreshItems = function() {
	sItems.fetch({
		success: function() {
			var tItems = [];
			sItems.each(function(e) {
				var tRow = Ti.UI.createTableViewRow({
					title: e.get('name') || "unk",
					hasChild: true,
				});
				tItems.push(tRow);
			});
			$.items.data = tItems;
			Ti.API.info("showing "+tItems.length+" items");
		}
	});
};

$.itemIndex.addEventListener('open', function() {
	Ti.API.info("itemIndex:open");
	Alloy.Globals.Sync.on('Item', refreshItems);
	refreshItems();
});

$.btnAdd.addEventListener('click', function() {
	var tItem = null;
	Alloy.Globals.Sync.createLocalObject('Item', {
		success : function(aItem) {
			var tItemEdit = Alloy.createController('itemEdit', {
				item : aItem
			});
			tItemEdit.getView().open();
		},
		error: function() {
			Ti.API.info("unable to create new item");
		}
	});
});

$.items.addEventListener('click', function(e) {
	var tItem = sItems.at(e.index);
	var tItemEdit = Alloy.createController('itemEdit', {
		item: tItem
	});
	tItemEdit.getView().open();
});
