import { Meteor } from 'meteor/meteor';

import './user-profile';
import './temp-login';

import { Messages } from '/imports/api/messages';

Meteor.startup(() => {
	Messages.remove({});
	Meteor.users.remove({});
});
