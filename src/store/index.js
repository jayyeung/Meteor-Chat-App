import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
	state: {
		user: {}, // Meteor.user()
		victim: {},

		contacts: {},
		chatMessages: {}
	},

	getters: {
		getUser: (state) => (state.user),
		getVictim: (state) => (state.victim)
	},

	mutations: {
		setVictim: (state, payload) => {
			// Meteor.call('contacts.get', payload);
			state.victim = payload;
		}
	},

	actions: {
		changeVictim: ({ commit }, payload) => {
			commit('setVictim', payload);
		},

		sendMessage: ({ commit }, payload) => {
			// Meteor.call('message.send', payload)
		}
	}
});

export default Store;
