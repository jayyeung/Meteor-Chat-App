import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Profile } from 'meteor/socialize:user-profile';
import SimplSchema from 'simpl-schema';

Profile.attachSchema({
	'username': {
		type: String,
		autoValue() {
			const generateName = require('sillyname');
			return generateName();
		}
	},
	'avatar': {
		type: String,
		autoValue() {
			const rand = Random.hexString(5);
			return `https://api.adorable.io/avatars/60/${rand}`;
		}
	},
});
