import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { ProfilesCollection as Profiles } from 'meteor/socialize:user-profile';

const maxBots = 5;
const delayIn = 30000;
const delayOut = 300000;

// Generate fake users that will enter
// and leave periodically
const generateBot = () => {
	const fakeId = Random.id();
	Profiles.insert({ _id: fakeId });
	/*
	const logIn = Math.random() * (delayOut - delayIn) + delayIn;
	const logOut = Math.random() * (delayOut - delayIn) + delayIn;

	Meteor.setTimeout(() => {
		const fakeId = Random.id();
		Profiles.insert({ _id: fakeId });

		Meteor.setTimeout(() => {
			Profiles.remove(fakeId);
			generateBot();
		}, delayOut);
	}, delayIn);
	*/
};

for (let i = 0; i < maxBots; i++)
	generateBot();
