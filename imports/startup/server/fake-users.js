import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { ProfilesCollection as Profiles } from 'meteor/socialize:user-profile';

const maxBots = 5;
const delayIn = 300000;
const delayOut = 600000;

// Generate fake users that will enter
// and leave periodically
const generateBot = () => {
	const logIn = Math.random() * (delayOut - delayIn) + delayIn;
	const logOut = Math.random() * (delayOut - delayIn) + delayIn;

	const fakeId = Random.id();
	Profiles.insert({ _id: fakeId });

	Meteor.setTimeout(() => {
		Profiles.remove(fakeId);
		Meteor.setTimeout(generateBot, logIn);
	}, logOut);
};

for (let i = 0; i < maxBots; i++)
	generateBot();
