var Sync = require('serviceable/lib/serviceable');

Sync.clientFactory = function() {
	return Ti.Network.createHTTPClient();
};

Alloy.Globals.Items = Alloy.Collections.instance("Item");

function systemsCheck(aOptions) {
	Alloy.Globals.Items.fetch({
		success : function() {
			Ti.API.info("systemsCheck...OK");
			aOptions.success();
		},
		error : function() {
			Ti.API.info("systemsCheck...FAIL");
			aOptions.error();
		}
	});
}

systemsCheck({
	success : function() {
	},
	error : function() {
	}
});
