import { Meteor } from 'meteor/meteor';
import '/imports/startup/client/user-setup';

import Vue from 'vue';
import store from  '/imports/ui/store';
import App from '/imports/ui/App.vue';

Meteor.startup(() => {
	new Vue({
		el: '#app',
		...App,
		store,
	});
});
