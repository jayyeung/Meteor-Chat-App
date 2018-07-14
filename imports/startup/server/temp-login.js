import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { UserPresence as TempStatus } from 'meteor/socialize:user-presence';
import SimplSchema from 'simpl-schema';

Accounts.registerLoginHandler((loginRequest) => {
	if (!loginRequest.temp) return;
	const username = loginRequest.username || `temp-${Random.hexString(5)}`;

	// console.log('username: ' + username);
	const query = {username};
	const user = Meteor.users.findOne(query);
	let userId = null;

	if (!user) userId = Accounts.insertUserDoc({}, query);
	else userId = user._id;
	return { userId };
});

let tempRemoval = {};
TempStatus.onUserOffline((userId) => {
	// if offline set timer for user to be removed
	if (!tempRemoval[userId])
		tempRemoval[userId] = Meteor.setTimeout(() => {
			// remove user after timer
			Accounts.users.remove({_id: userId});
		}, 60000);
});

TempStatus.onUserOnline((userId) => {
	let pendingRemoval = tempRemoval[userId];
	// if user back online before removal, clear the removal
	if (pendingRemoval) {
		clearTimeout(pendingRemoval);
	}
});
