import { Meteor } from 'meteor/meteor';
import { Messages } from './messages';

if (Meteor.isServer) {
	Meteor.startup(() => {
		// remove messages after certain time (4 hours)
		Messages._ensureIndex({created_at: 1}, {expireAfterSeconds: 14400});
		Messages.remove({});
	});
}

export { Messages };

