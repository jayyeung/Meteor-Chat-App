import Vue from 'vue';
import MeteorTracker from 'vue-meteor-tracker';
Vue.use(MeteorTracker);

import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import { Messages } from '/imports/api/messages';
import { ProfilesCollection as Profiles } from 'meteor/socialize:user-profile';

export default {
	meteor: {
		$subscribe: {
			'users.all': [],
			'messages.all': []
		},

		currentUser: function() {
			const user = Meteor.user();
			if (!user) return false;
			return user.profile();
		},

		userTarget: function() {
			const target = Session.get('userTarget');
			return Profiles.findOne({username: target}) || false;
		},

		users: function() {
			return Profiles.find();
		},

		messages: function() {
			return Messages.find();
		}
	}
}
