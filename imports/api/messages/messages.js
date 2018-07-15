import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { ProfilesCollection as Profiles } from 'meteor/socialize:user-profile';
import SimplSchema from 'simpl-schema';

export const Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
	Meteor.publish('messages.all', () => {
		return Messages.find({}, {
			limit: 50,
			sort: { created_at: 1 }
		});
	});
}

Meteor.methods({
	'messages.send': (message, target) => {
		const formatted = message.trim();
		const query = { username: target };

		const currentUser = Meteor.user().profile();
		let targetUser = (!target) ? currentUser : Profiles.findOne(query);

		if (!formatted) return new Meteor.Error('Empty message');
		if (!targetUser) return new Meteor.Error('No such sender profile.');

		const targetInfo = {
			username: targetUser.username,
			avatar: targetUser.avatar
		};

		Messages.insert({
			type: 'Message',
			message: formatted,
			created_at: new Date(),
			created_by: Meteor.userId(),
			target: targetInfo
		});
	},

	'messages.notify': (note, userId) => {
		const user = Profiles.findOne({_id: userId}) || '';
		Messages.insert({
			type: 'Notification',
			created_at: new Date(),
			note: `${user.username || ''} ${note}`
		});
	}
});
