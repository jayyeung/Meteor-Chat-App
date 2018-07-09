import { Meteor } from 'meteor/meteor';
import { Profile } from 'meteor/socialize:user-profile';
import SimplSchema from 'simpl-schema';

Profile.attachSchema({
	'contact_name': {
		type: String,
		autoValue() {
			return 'bobby';
		}
	},
	'avatar': {
		type: String,
		autoValue() {
			return 'test';
		}
	},
});
