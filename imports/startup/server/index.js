import { Meteor } from 'meteor/meteor';

import './temp-login';
import './user-profile';

Meteor.startup(() => {
	// remove all temp users on new server
	Meteor.users.remove({});
});
