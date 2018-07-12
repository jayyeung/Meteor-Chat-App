<template>
	<div class='c-sidebar'>
		<Searchbar class='u-ph-24 u-pv-20' v-model='searchFilter'/>

		<div class='c-sidebar__list-status u-ph-24'>{{ listStatus }}</div>
		<ul class='c-sidebar__list'>
			<li v-for='(contact, i) in filterContacts' :key='`contact-${i}`'
				class='c-sidebar__list-item'>

				<Avatar class='u-mr-20' src='http://placehold.it/52x52'/>
				<div>
					<span>{{ contact.username }}</span>

					<Label v-show='contact.username === getUser'
					small class='u-color-attacker-light'>You</Label>
				</div>
			</li>

			<li class='u-pv-32'></li>
		</ul>
	</div>
</template>

<script>
	import Label from './objects/Label.vue';
	import Searchbar from './objects/Searchbar.vue';
	import Avatar from './objects/Avatar.vue';

	import { mapGetters } from 'vuex';

	export default {
		components: {
			Searchbar,
			Avatar,
			Label
		},
		data: function() {
			return {
				searchFilter: '',
				contacts: [
					{ username: 'Dave Lowder' },
					{ username: 'Noah Newson' },
					{ username: 'Nerissa Oh' },
					{ username: 'Cole Fry' },
					{ username: 'Kenneth Dillan' },
					{ username: 'Erick Lowery' },
					{ username: 'Tobias Tanner' },
					{ username: 'Terrance Atkinson' },
					{ username: 'Dave Lowder' },
					{ username: 'Noah Newson' },
					{ username: 'Nerissa Oh' },
					{ username: 'Cole Fry' },
				]
			}
		},
		computed: {
			...mapGetters(['getUser']),

			filterContacts: function() {
				const filter = (this.searchFilter).trim().toLowerCase();
				if (filter === '') return (this.contacts);
				const contacts = (this.contacts).filter((obj, i) => {
					const username = obj.username.toLowerCase();
					return (username.indexOf(filter) !== -1);
				});
				return contacts;
			},

			listStatus: function() {
				let status = 'found';
				const contactsNum = (this.filterContacts).length;
				if (contactsNum === (this.contacts).length)
					status = 'online';

				return `${contactsNum} user${(contactsNum !== 1) ? 's' : ''} ${status}`;
			}
		}
	};
</script>

