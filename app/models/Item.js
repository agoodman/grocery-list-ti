exports.definition = {
	config: {
		columns: {
		    "push_action": "text",
		    "local_id": "integer primary key autoincrement",
		    "remote_id": "integer",
		    "local_user_id": "integer",
		    "remote_user_id": "integer",
		    "name": "text",
		    "created_at": "text",
		    "updated_at": "text",
		},
		adapter: {
			type: "sql",
			collection_name: "Item",
			idAttribute: "local_id",
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};