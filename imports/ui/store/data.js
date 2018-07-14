import Vue from 'vue';
import MeteorTracker from 'vue-meteor-tracker';
Vue.use(MeteorTracker);

import { Meteor } from 'meteor/meteor';

import { Messages } from '/imports/api/messages';
import { ProfilesCollection as Profiles } from 'meteor/socialize:user-profile';

export default {
	meteor: {
		$subscribe: {
			'users.all': [],
			'messages.all': []
		},

		users: function() {
			return Profiles.find();
		},

		messages: function() {
			return Messages.find();
		}
	}
}
