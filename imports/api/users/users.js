import { Meteor } from 'meteor/meteor';
import { ProfilesCollection as Profiles } from 'meteor/socialize:user-profile';

if (Meteor.isServer) {
	Meteor.publish('users.all', () => {
		return Profiles.find({});
	});
}
