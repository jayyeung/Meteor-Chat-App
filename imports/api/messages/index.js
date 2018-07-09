import { Meteor, isServer } from 'meteor/meteor';
import { Messages } from './messages';

if (isServer) {
	Meteor.startup(() => {
		Messages.remove({});
	});
}

