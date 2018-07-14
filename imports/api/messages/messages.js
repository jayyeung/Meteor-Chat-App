import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimplSchema from 'simpl-schema';

export const Messages = new Mongo.Collection('messages');

Meteor.publish('messages.all', () => {
	return Messages.find({});
});

Meteor.methods({
	'messages.send': (message, victim = Meteor.userId()) => {
		const formatted = message.trim();
		const query = { _id: victim };
		const contact_info = Meteor.users.findOne(query).profile();

		if (!contact_info)
			return new Meteor.Error('Cannot find sender profile.');

		Messages.insert({
			message: formatted,
			created_at: new Date(),
			created_by: Meteor.userId(),
			contact: contact_info
		});
	}
});
