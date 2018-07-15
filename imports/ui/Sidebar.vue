<template>
	<div class='c-sidebar'>
		<Searchbar class='u-ph-24 u-pv-20' v-model='searchFilter'/>

		<div class='c-sidebar__list-status u-ph-24'>{{ listStatus }}</div>

		<ul class='c-sidebar__list'>
			<transition-group name='slide'>
				<li v-for='(contact, i) in filterContacts'
					class='c-sidebar__list-item'
					:key='`contact-${i}`'>

					<Avatar class='u-mr-20' src='http://placehold.it/52x52'/>
					<div>
						<span>{{ contact.username }}</span>

						<transition-group name='slide' tag='div' class='u-mv-8'>
							<Label v-if='true'
							small class='u-color-attacker-light' style='line-height:0;'
							key='label-1'>You</Label>

							<Label v-else-if='true'
							small class='u-color-victim' style='line-height:0;'
							key='label-2'>Target</Label>

							<Label v-else
							small class='disguise-label u-color-grey' style='line-height:0;'
							key='label-3'>Disguise as target</Label>
						</transition-group>
					</div>
				</li>
			</transition-group>

			<li v-show='!filterContacts.length'
			class='c-sidebar__list-item c-sidebar__list-item--empty'>
				<img class='u-mb-20' src='../assets/user-anon.svg' width='160'/>
				No Users Found
			</li>

			<li class='u-pv-32'></li>
		</ul>
	</div>
</template>

<script>
	import Label from './objects/Label.vue';
	import Searchbar from './objects/Searchbar.vue';
	import Avatar from './objects/Avatar.vue';

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
					{ username: 'Dave Lowder', _id: 123 },
					{ username: 'Noah Newson', _id:12412, profile_pic:'https://d3iw72m71ie81c.cloudfront.net/female-51.jpg' },
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

<style lang='scss' scoped>
.c-sidebar__list-item {
	.disguise-label {
		transition: all 0.2s;
		opacity: 0;
	}
	&:hover .disguise-label { opacity: 1; }
}
</style>

