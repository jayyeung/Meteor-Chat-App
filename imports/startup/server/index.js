import { Meteor } from 'meteor/meteor';
import './temp-login';

Meteor.startup(() => {
	Meteor.users.remove({});
	if (Meteor.isServer)
		require('./fake-users');
});
