import { Meteor } from 'meteor/meteor';

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	actions: {
		sendMessage: (state, payload) => {
			const { message, target } = payload;
			console.log(message, target);
			Meteor.call('messages.send', message, target);
		}
	}
});

export default store;
