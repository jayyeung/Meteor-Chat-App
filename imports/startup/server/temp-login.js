import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { UserPresence as TempStatus } from 'meteor/socialize:user-presence';
import SimplSchema from 'simpl-schema';

Accounts.registerLoginHandler(function(loginRequest) {
	if (!loginRequest.temp) return;
	const username = loginRequest.username || `temp-${Random.hexString(5)}`;

	console.log('username: ' + username);
	const query = {username};
	const user = Meteor.users.findOne(query);
	let userId = null;

	if (!user) userId = Accounts.insertUserDoc({}, query);
	else userId = user._id;
	return { userId };
});

let tempRemoval = {};
TempStatus.onUserOffline((userId) => {
	console.log('userId ' + userId + ' set for removal');
	if (!tempRemoval[userId])
		tempRemoval[userId] = Meteor.setTimeout(() => {
			Accounts.users.remove({_id: userId});
			console.log('userId ' + userId + ' removed succuessfully');
		}, 60000);
});

TempStatus.onUserOnline((userId) => {
	let pendingRemoval = tempRemoval[userId];
	if (pendingRemoval) {
		console.log('userId ' + userId + ' cleared from removal');
		clearTimeout(pendingRemoval);
	}
});
