import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
	state: {
		user: {
			_id: 123,
			username: 'Dave Lowder',
			profile_pic: 'https://randomuser.me/api/portraits/men/23.jpg'
		}, // Meteor.user()
		target: {
			_id: 1235,
			username: 'Cole Fry',
			profile_pic: 'https://randomuser.me/api/portraits/men/24.jpg'
		},

		contacts: {},
		chatMessages: [
			{
				value: 'This is my message!',
				from: {
					username: 'Cole Fry',
					profile_pic: 'https://randomuser.me/api/portraits/men/24.jpg'
				}
			}
		]
	},

	getters: {
		getUser: (state) => (state.user),
		getTarget: (state) => (state.target),
		targetIsUser: (state) => (state.user._id === state.target._id),

		getMessages: (state) => (state.chatMessages),
	},

	mutations: {
		setTarget: (state, payload) => {
			state.target = payload;
		}
	},

	actions: {
		changeTarget: ({ commit }, payload) => {
			// const target = Meteor.call('contacts.get', payload);
			if (!payload) // if (!target)
				return commit('setTarget', null);
			commit('setTarget', payload);
		},

		sendMessage: ({ commit }, payload) => {
			// Meteor.call('message.send', payload)
		}
	}
});

export default Store;
