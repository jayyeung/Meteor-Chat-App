import { Random } from 'meteor/random';
import { Profile, ProfilesCollection as Profiles } from 'meteor/socialize:user-profile';

const profileSchema = {
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
}

Profile.attachSchema(profileSchema);
