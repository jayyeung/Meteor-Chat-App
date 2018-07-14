import { Meteor, isServer } from 'meteor/meteor';
import { ProfilesCollection as Profiles } from 'meteor/socialize:user-profile';

if (isServer) {
	Meteor.publish('users.all', () => {
		return Profiles.find();
	});
}
