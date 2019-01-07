import { Meteor } from 'meteor/meteor';
import './temp-login';

if (Meteor.isServer)
	require('./fake-users');

Meteor.startup(() => {
	Meteor.users.remove({});
});
