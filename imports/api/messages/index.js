import { Meteor } from 'meteor/meteor';
import { Messages } from './messages';

if (Meteor.isServer) {
	Meteor.startup(() => {
		// remove messages after certain time (1 hour)
		Messages._ensureIndex({created_at: 1}, {expireAfterSeconds: 6000});
		Messages.remove({});
	});
}

export { Messages };

