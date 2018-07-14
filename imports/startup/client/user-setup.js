import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

Meteor.loginTemp = (username, callback) => {
	const loginReq = {temp:true, username};

	Accounts.callLoginMethod({
		methodArguments: [loginReq],
		userCallback: callback
	});
};

const saveTemp = () => {
	const username = Meteor.user().username;
	localStorage.setItem('tempUser', username);
}

Meteor.startup(() => {
	Tracker.autorun(() => {
		let tempUser = localStorage.getItem('tempUser') || null;
		const user = Meteor.user();
		if (!user) Meteor.loginTemp(tempUser, saveTemp);
	});
});


