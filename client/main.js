import { Meteor } from 'meteor/meteor';
import '/imports/startup/client/user-setup';

import Vue from 'vue';
import store from  '/imports/ui/store';
import App from '/imports/ui/App.vue';

import { ProfilesCollection as Profiles } from 'meteor/socialize:user-profile';

Meteor.startup(() => {
	new Vue({
		el: '#app',
		store,
		...App,
	});
});
