import { Meteor } from 'meteor/meteor';

import './user-profile';
import './temp-login';

import { Messages } from '/imports/api/messages';

Meteor.startup(() => {
	Meteor.users.remove({});
});
