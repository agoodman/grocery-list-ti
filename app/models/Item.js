exports.definition = {
	config: {
		columns: {
		    "push_action": "string",
		    "local_id": "string",
		    "remote_id": "string",
		    "local_user_id": "string",
		    "remote_user_id": "string",
		    "name": "string",
		    "created_at": "string",
		    "updated_at": "string",
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