import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		users: []
	},

	getters: {
		getUsers: (state) => (state.users)
	},

	mutations: {
		updateUsers: (state, payload) => {
			state.users = payload;
		}
	},

	actions: {

	}
});

export default store;
