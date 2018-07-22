import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import { UserPresence as TempStatus } from 'meteor/socialize:user-presence';
import { ProfilesCollection as Profiles } from 'meteor/socialize:user-profile';

Accounts.registerLoginHandler((loginRequest) => {
	if (!loginRequest.temp) return;
	const username = loginRequest.username || `temp-${Random.hexString(5)}`;

	// console.log('username: ' + username);
	const query = {username};
	const user = Meteor.users.findOne(query);
	let userId = null;

	// create new user if no past user found,
	// else use old user
	if (!user) {
		userId = Accounts.insertUserDoc({}, query);
		Meteor.call('messages.notify',
		'joined the chat.', userId);
	} else { userId = user._id; }
	return { userId };
});


let tempRemoval = {};
TempStatus.onUserOffline((userId) => {
	// if offline set timer for user to be removed
	if (!tempRemoval[userId])
		tempRemoval[userId] = Meteor.setTimeout(() => {
			Meteor.call('messages.notify',
			'left the chat.', userId);

			// remove user after timer
			Accounts.users.remove(userId);
			Profiles.remove(userId);
		}, 3000);
});

TempStatus.onUserOnline((userId) => {
	let pendingRemoval = tempRemoval[userId];
	// if user back online before removal, clear the removal
	if (pendingRemoval) {
		clearTimeout(pendingRemoval);
		tempRemoval[userId] = null;
		return;
	}
});
