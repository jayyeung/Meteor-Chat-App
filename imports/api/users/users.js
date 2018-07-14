import { Meteor } from 'meteor/meteor';
import { ProfilesCollection as Profiles } from 'meteor/socialize:user-profile';

Meteor.publish('users.all', () => {
	return Profiles.find({}) || this.ready();
});
