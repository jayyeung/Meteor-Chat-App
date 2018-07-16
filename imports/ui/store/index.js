import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	actions: {
		setTarget: (state, username) => {
			const currentUser = Meteor.user().profile().username;
			const currentTarget = Session.get('userTarget');

			if (!username ||
				username === currentUser ||
				username === currentTarget)
				return Session.set('userTarget', null);
			return Session.set('userTarget', username);
		},

		sendMessage: (state, payload) => {
			const { message, target } = payload;
			Meteor.call('messages.send', message, target);
		}
	}
});

export default store;
