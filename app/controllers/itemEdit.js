var args = arguments[0] || {};

$.txtName.value = args.item.get('name') || "";

$.txtName.addEventListener('blur', function() {
	Alloy.Globals.Sync.updateLocalObject('Item', args.item.get('local_id'), {
		name: $.txtName.value
	});
});
$.btnBack.addEventListener('click', function() {
	$.itemEdit.close();
});
$.btnDestroy.addEventListener('click', function() {
	Alloy.Globals.Sync.destroyLocalObject('Item', args.item.get('local_id'));
	$.itemEdit.close();
});
