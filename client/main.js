import { Meteor } from 'meteor/meteor';
import '/imports/startup/client/user-setup';

import Vue from 'vue';

import store from  '/imports/ui/store';
import meteorData from  '/imports/ui/store/data';

import App from '/imports/ui/App.vue';

import { ProfilesCollection } from 'meteor/socialize:user-profile';

Meteor.startup(() => {
	window.Profiles = ProfilesCollection;

	new Vue({
		el: '#app',
		...App,
		...meteorData,
		store,
	});
});
