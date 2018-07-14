import { Meteor, isServer } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { ProfilesCollection as Profiles } from 'meteor/socialize:user-profile';
import SimplSchema from 'simpl-schema';

export const Messages = new Mongo.Collection('messages');

if (isServer) {
	Meteor.publish('messages.all', () => {
		return Messages.find({});
	});
}

Meteor.methods({
	'messages.send': (message, target) => {
		const formatted = message.trim();
		let contact = {};

		if (!target) {
			contact = Meteor.user().profile();
		} else {
			const query = { username: target };
			contact = Profiles.findOne(query);
		}

		if (!formatted) return new Meteor.Error('Empty message');
		if (!contact) return new Meteor.Error('No such sender profile.');

		const contact_info = {
			username: contact.username,
			avatar: contact.avatar
		};

		Messages.insert({
			message: formatted,
			created_at: new Date(),
			created_by: Meteor.userId(),
			contact: contact_info
		});
	}
});
